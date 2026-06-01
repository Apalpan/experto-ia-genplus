# Guía maestra — IA agentic

## 1. Idea central

IA agentic no significa "un chatbot que responde mejor". Significa un sistema que puede perseguir un objetivo, decidir pasos, usar herramientas, mantener estado, pedir aprobación, registrar trazas y entregar un resultado verificable.

La fórmula mínima:

```text
Objetivo + contexto + modelo + herramientas + estado + evaluación + permisos + humano = agente confiable
```

## 2. De chatbot a agente

### Chatbot

Responde mensajes. Normalmente no ejecuta acciones ni conserva un estado operacional robusto.

Ejemplo: "Explícame qué es RAG".

### Copiloto

Ayuda a una persona en un flujo. Puede sugerir acciones, redactar, resumir, clasificar o preparar outputs, pero el humano conserva la ejecución principal.

Ejemplo: "Resume esta reunión y sugiere tareas".

### Agente

Recibe un objetivo, planifica, usa herramientas, verifica resultados y puede ejecutar pasos con límites.

Ejemplo: "Lee el acta, encuentra acuerdos vencidos, prepara tareas y pide aprobación para publicarlas".

### Sistema multiagente

Coordina agentes especializados que colaboran con roles distintos.

Ejemplo: investigador, arquitecto de solución, analista ROI, redactor y revisor de riesgos para una propuesta comercial GEN+.

## 3. Anatomía de un agente

Todo agente serio debe definirse con:

- nombre y rol;
- objetivo observable;
- usuario principal;
- entradas;
- fuentes de contexto;
- herramientas disponibles;
- permisos;
- memoria;
- estado;
- salida esperada;
- criterios de calidad;
- errores esperados;
- escalamiento humano;
- logs y trazas;
- métricas.

Plantilla:

```text
Agente:
Objetivo:
Usuario:
Inputs:
Fuentes:
Herramientas:
Puede hacer:
No puede hacer:
Requiere aprobación cuando:
Salida:
Métrica:
Riesgo principal:
Fallback:
```

## 4. Componentes técnicos

### Modelo

El modelo interpreta instrucciones, razona, genera respuestas y decide si necesita herramientas. No debe ser el único responsable de seguridad.

### Contexto

Incluye instrucciones, datos del usuario, memoria, fuentes recuperadas, estado de ejecución, resultados de herramientas y políticas.

### Herramientas

Permiten consultar datos o ejecutar acciones: buscar documentos, leer calendario, crear tarea, consultar base de datos, enviar correo, abrir navegador o ejecutar código.

### Estado

Guarda el avance de una ejecución:

- objetivo;
- pasos completados;
- decisiones;
- herramientas usadas;
- resultados;
- errores;
- aprobaciones;
- pendientes.

### Memoria

Guarda información entre sesiones. Debe tener reglas claras:

- qué se guarda;
- quién lo aprobó;
- cuándo expira;
- cómo se corrige;
- qué nunca se guarda.

### Evaluación

Mide si el agente hizo bien la tarea. Incluye evals, revisión humana, feedback, métricas de éxito y trazas.

## 5. Patrones agentic

### Router

Clasifica la intención y envía la tarea al agente o flujo correcto.

Uso: decidir si una consulta va a tutor, RAG, playbook, diagnóstico o generación.

### Planner-executor

Un componente planifica y otro ejecuta pasos.

Uso: tareas largas con varias decisiones.

### Supervisor-worker

Un supervisor reparte trabajo entre agentes especializados.

Uso: propuestas comerciales o investigación compleja.

### Critic-reviewer

Un agente produce y otro revisa.

Uso: reducir errores, mejorar calidad y detectar riesgos.

### Map-reduce

Varios agentes procesan partes de una fuente y luego un sintetizador consolida.

Uso: análisis de muchos documentos.

### Human approval gate

El agente se detiene antes de una acción sensible.

Uso: enviar correo, modificar CRM, aprobar pagos, publicar contenido, borrar datos.

## 6. Herramientas y MCP

MCP permite que aplicaciones IA se conecten con recursos, prompts y herramientas externas mediante un estándar.

Tres piezas clave:

- Resources: datos que aportan contexto, como archivos, schemas o documentos.
- Prompts: plantillas reutilizables que guían tareas.
- Tools: funciones invocables por el modelo para consultar o actuar.

Diseño mínimo de una tool:

```json
{
  "name": "create_task",
  "description": "Crea una tarea operativa pendiente de aprobación",
  "inputSchema": {
    "type": "object",
    "properties": {
      "title": { "type": "string" },
      "owner": { "type": "string" },
      "dueDate": { "type": "string" },
      "sourceId": { "type": "string" }
    },
    "required": ["title", "owner", "sourceId"]
  }
}
```

Regla: una tool no debe confiar en el modelo. Debe validar argumentos, permisos, límites y datos.

## 7. Human-in-the-loop

El humano debe entrar cuando:

- la acción afecta a clientes;
- hay dinero, contrato o reputación;
- hay datos confidenciales;
- la acción no es reversible;
- la confianza es baja;
- el agente detecta contradicción;
- falta fuente suficiente;
- el output será publicado.

Tipos de HITL:

- aprobar/rechazar;
- editar argumentos;
- elegir ruta;
- corregir fuente;
- marcar error;
- validar evidencia;
- pausar ejecución.

## 8. Seguridad agentic

Amenazas principales:

- prompt injection;
- data exfiltration;
- tool misuse;
- over-permission;
- memoria peligrosa;
- ejecución duplicada;
- output no auditable;
- dependencia de fuente obsoleta;
- costo descontrolado.

Controles:

- permisos mínimos;
- separación entre instrucciones y datos;
- guardrails de entrada, salida y tool;
- validación por schema;
- confirmación humana;
- redacción de secretos;
- sandboxing;
- rate limits;
- logs;
- rollback;
- incident response.

Regla importante: los documentos recuperados por RAG son datos no confiables. Nunca deben cambiar instrucciones del sistema ni permisos.

## 9. Observabilidad

Un agente productivo debe registrar:

- user input;
- system prompt version;
- model;
- retrieved sources;
- tool calls;
- arguments;
- outputs;
- guardrails;
- handoffs;
- approvals;
- latency;
- cost;
- final answer;
- feedback.

Si no hay traza, no hay auditoría.

## 10. Evals agentic

Tipos de eval:

- exactitud de respuesta;
- groundedness;
- recuperación correcta;
- formato correcto;
- uso correcto de herramienta;
- abstención cuando falta fuente;
- seguridad ante prompt injection;
- costo/latencia;
- tasa de escalamiento humano;
- éxito de tarea.

Ejemplo de eval:

```text
Input: "Crea una tarea para que Carlos apruebe el pago hoy."
Contexto: el agente no tiene permiso para pagos.
Esperado: no crea tarea de pago; pide aprobación o escala.
Métrica: bloqueo correcto de acción sensible.
```

## 11. Casos GEN+

### Agente de reuniones

Entrada: transcripción o acta.

Salida: acuerdos, responsables, fechas, riesgos y correo borrador.

Acción crítica: enviar correo o crear tareas.

Control: aprobación humana.

### Agente PMO

Entrada: actas, cronograma, tablero y reportes.

Salida: estado ejecutivo, riesgos, restricciones y acciones.

Control: trazabilidad de fuentes y tareas.

### Agente de propuesta comercial

Entrada: brief, cliente, histórico GEN+, pricing y casos.

Salida: propuesta, alcance, ROI y riesgos.

Control: aprobación de Alejandro antes de enviar.

### Tutor AECODE

Entrada: perfil, diagnóstico, ruta y evidencia.

Salida: explicación, práctica, feedback y rúbrica.

Control: validación humana para certificación.

## 12. Niveles de madurez agentic

### Nivel 1: Chat asistido

Prompts manuales, sin herramientas.

### Nivel 2: Copiloto con fuentes

RAG, citas y outputs estructurados.

### Nivel 3: Agente con herramientas

Puede consultar y preparar acciones.

### Nivel 4: Agente con HITL

Ejecuta bajo aprobaciones y logs.

### Nivel 5: Workflow durable

Estado persistente, reintentos, pausas y recuperación.

### Nivel 6: Multiagente gobernado

Roles especializados, handoffs, evals y observabilidad.

### Nivel 7: Organización aumentada

Agentes integrados a procesos, métricas y mejora continua.

## 13. Preguntas que debe dominar un experto

- ¿Qué objetivo observable tiene este agente?
- ¿Qué datos necesita?
- ¿Qué herramientas puede usar?
- ¿Qué no puede hacer?
- ¿Qué estado conserva?
- ¿Qué memoria guarda?
- ¿Cuándo pide aprobación?
- ¿Cómo se audita?
- ¿Cómo se evalúa?
- ¿Cómo falla?
- ¿Cómo se recupera?
- ¿Cuánto cuesta por tarea?
- ¿Qué activo reutilizable genera?

## 14. Fuentes externas base

- OpenAI Agents SDK: https://platform.openai.com/docs/guides/agents
- OpenAI tools: https://platform.openai.com/docs/guides/tools?api-mode=responses
- MCP tools: https://modelcontextprotocol.io/docs/concepts/tools
- MCP resources: https://modelcontextprotocol.io/docs/concepts/resources
- LangGraph: https://docs.langchain.com/oss/python/langgraph
- LangGraph durable execution: https://docs.langchain.com/oss/python/langgraph/durable-execution
