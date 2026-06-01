# Guía maestra — Desarrollo web para productos IA

## 1. Principio

Una app IA profesional no es solo una caja de chat. Es una interfaz para coordinar modelos, datos, fuentes, herramientas, permisos, acciones, errores y aprendizaje.

La app debe responder:

- ¿qué está haciendo la IA?;
- ¿qué fuente usa?;
- ¿qué nivel de confianza tiene?;
- ¿qué acción propone?;
- ¿qué requiere aprobación?;
- ¿qué puede fallar?;
- ¿cómo se reporta un error?;
- ¿cómo mejora con feedback?

## 2. Arquitectura mínima

```text
Frontend
  React / Next / Vite
  UI de conversación, fuentes, acciones, progreso y feedback

BFF / API
  auth, rate limits, secrets, sesiones, streaming, logging

RAG
  extracción, chunks, embeddings, vector store, reranking, citas

Agent runtime
  modelos, tools, estado, approvals, guardrails, evals

Database
  usuarios, sesiones, mensajes, fuentes, chunks, tool calls, feedback

Observability
  traces, latencia, costo, errores, calidad, seguridad
```

## 3. Frontend

Estados obligatorios:

- idle;
- escribiendo pregunta;
- clasificando intención;
- buscando fuentes;
- leyendo documentos;
- llamando herramienta;
- esperando aprobación;
- generando respuesta;
- error recuperable;
- error crítico;
- respuesta final;
- feedback enviado.

Componentes recomendados:

- `ChatComposer`;
- `MessageList`;
- `SourcePanel`;
- `ToolCallTimeline`;
- `ApprovalCard`;
- `AnswerConfidence`;
- `FeedbackButtons`;
- `SessionHistory`;
- `EvalBadge`;
- `CostLatencyMeter`.

## 4. Backend for Frontend

El BFF protege secretos y controla reglas de negocio.

Responsabilidades:

- validar usuario;
- limitar frecuencia;
- clasificar intención;
- aplicar políticas;
- llamar retrieval;
- llamar modelos;
- ejecutar tools;
- emitir eventos streaming;
- guardar trazas;
- redactar datos sensibles;
- devolver respuesta y fuentes.

Endpoints mínimos:

```text
POST /api/sessions
POST /api/sessions/:id/messages
GET  /api/sessions/:id/events
POST /api/approvals/:id
POST /api/feedback
GET  /api/sources
POST /api/ingest
GET  /api/evals/runs
```

## 5. Streaming

Los productos IA deben mostrar progreso.

Eventos sugeridos:

```json
{ "type": "intent.detected", "intent": "rag_question" }
{ "type": "retrieval.started" }
{ "type": "retrieval.source", "title": "AI_MASTER_GUIDE.md" }
{ "type": "tool.call.pending", "tool": "create_task" }
{ "type": "approval.required", "approvalId": "appr_123" }
{ "type": "answer.delta", "text": "La respuesta..." }
{ "type": "answer.completed", "confidence": 0.82 }
```

## 6. Modelo de datos

Tablas mínimas:

```text
users
documents
document_chunks
embeddings
conversations
messages
agent_runs
tool_calls
approvals
eval_cases
eval_runs
feedback
audit_logs
```

Campos críticos en `agent_runs`:

- id;
- user_id;
- objective;
- status;
- model;
- prompt_version;
- started_at;
- completed_at;
- cost_estimate;
- latency_ms;
- final_output;
- error;
- confidence.

Campos críticos en `tool_calls`:

- id;
- agent_run_id;
- tool_name;
- arguments_json;
- status;
- requires_approval;
- approval_id;
- output_json;
- error;
- created_at.

## 7. RAG en producto web

Flujo:

1. Usuario pregunta.
2. Backend clasifica intención.
3. Si requiere fuente, ejecuta retrieval.
4. Recupera chunks con metadata.
5. Reranker ordena evidencia.
6. Modelo genera respuesta citada.
7. UI muestra fuentes y confianza.
8. Usuario da feedback.
9. Sistema registra caso para eval.

Cada cita debe tener:

- fuente;
- fecha;
- fragmento;
- ubicación;
- confianza;
- vigencia.

## 8. Tool use en web

Una herramienta debe tener:

- nombre claro;
- descripción;
- schema;
- validación;
- permisos;
- timeouts;
- errores;
- logs;
- output estructurado.

Ejemplo:

```ts
type CreateTaskInput = {
  title: string;
  owner: string;
  dueDate?: string;
  sourceId: string;
  riskLevel: "low" | "medium" | "high";
};
```

Regla:

```text
Si riskLevel = high, requiere approval.
```

## 9. Diseño UX para confianza

Buenas señales:

- mostrar fuentes;
- mostrar pasos;
- permitir feedback;
- separar sugerencia de acción ejecutada;
- pedir aprobación cuando corresponde;
- explicar incertidumbre;
- no ocultar errores;
- mantener historial.

Malas señales:

- respuesta sin fuente;
- spinner infinito;
- tool calls invisibles;
- acciones automáticas sin confirmación;
- sin forma de corregir;
- sin estado de error.

## 10. Seguridad

Nunca exponer en frontend:

- API keys;
- tokens internos;
- secrets;
- documentos restringidos;
- claves de proveedor;
- endpoints administrativos sin auth.

Controles:

- BFF;
- auth;
- rate limits;
- input validation;
- output validation;
- redacción de secretos;
- CORS controlado;
- logs;
- permisos por rol;
- approvals;
- sandbox para herramientas peligrosas.

## 11. Evaluación en producción

Métricas:

- groundedness;
- tasa de respuesta con fuente;
- tasa de abstención correcta;
- precisión de retrieval;
- latencia p50/p95;
- costo por sesión;
- errores por tool;
- aprobaciones requeridas;
- aprobaciones rechazadas;
- feedback positivo/negativo;
- regresiones por versión.

## 12. Ejemplo completo: este entrenador como producto real

### Pregunta

"Quiero dominar agentes IA para construir productos GEN+."

### Flujo

1. Detecta intención: ruta de aprendizaje.
2. Recupera guía agentic, conceptos expertos y módulos.
3. Genera ruta por semanas.
4. Sugiere labs.
5. Crea evaluación inicial.
6. Guarda progreso.

### Respuesta esperada

- ruta de 6 semanas;
- conceptos por semana;
- práctica aplicada;
- evidencia;
- pregunta de conexión;
- fuente usada;
- siguiente acción.

## 13. Stack recomendado por etapa

### Demo

- Vite;
- React;
- datos mock;
- build estático.

### MVP

- Next.js;
- Route Handlers o BFF;
- PostgreSQL;
- pgvector;
- auth;
- streaming;
- RAG básico.

### Producto

- evals;
- observability;
- queue workers;
- object storage;
- role-based access;
- agent runtime;
- MCP servers;
- admin dashboard.

## 14. Fuentes externas base

- Next.js App Router: https://nextjs.org/docs/app
- Next.js Backend for Frontend: https://nextjs.org/docs/app/guides/backend-for-frontend
- OpenAI Responses API: https://platform.openai.com/docs/api-reference/responses
- OpenAI File Search: https://platform.openai.com/docs/guides/tools-file-search
- OpenAI Tools: https://platform.openai.com/docs/guides/tools?api-mode=responses
