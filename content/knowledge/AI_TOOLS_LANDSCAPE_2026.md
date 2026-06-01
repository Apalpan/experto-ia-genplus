# Mapa de herramientas IA 2026

Objetivo: elegir herramientas por función arquitectónica y valor operativo, no por hype.

## Regla principal

Una herramienta IA debe ocupar una capa clara:

1. Modelo.
2. Interfaz.
3. Automatización.
4. Datos.
5. RAG.
6. Agentes.
7. Evaluación.
8. Seguridad.
9. Contenido.
10. Operación.

Si no sabes qué capa ocupa, probablemente estás comprando complejidad.

## Capa 1: Modelos base y asistentes generales

Ejemplos:

- ChatGPT.
- Claude.
- Gemini.
- Copilot.
- Modelos open source.

Usos:

- Redacción.
- Ideación.
- Análisis.
- Programación.
- Aprendizaje.
- Síntesis.
- Planificación.

Criterios de elección:

- Calidad de razonamiento.
- Ventana de contexto.
- Multimodalidad.
- Costo.
- Latencia.
- Privacidad.
- Herramientas disponibles.
- Capacidad de estructurar outputs.

Riesgos:

- Respuestas sin fuente.
- Alucinación.
- Fuga de datos.
- Dependencia de proveedor.
- Outputs no reproducibles.

Regla GEN+:

No elegir un modelo único para todo. Diseñar model routing por tarea.

## Capa 2: Herramientas de desarrollo asistido

Ejemplos:

- GitHub Copilot.
- Cursor.
- Codex.
- Claude Code.
- Windsurf.
- Replit Agent.

Usos:

- Crear prototipos.
- Explicar código.
- Generar tests.
- Refactorizar.
- Migrar componentes.
- Documentar.
- Revisar errores.

Buenas prácticas:

- Mantener tests.
- Revisar dependencias.
- Pedir cambios pequeños.
- Validar seguridad.
- Evitar aceptar código sin entender.
- Usar commits pequeños.
- Mantener arquitectura.

Riesgos:

- Deuda técnica más rápida.
- Código inseguro.
- Tests inexistentes.
- Cambios fuera de alcance.
- Sobreconfianza.

Regla GEN+:

La IA puede acelerar escritura, pero el humano conserva ownership de arquitectura, seguridad y producto.

## Capa 3: Automatización

Ejemplos:

- n8n.
- Make.
- Zapier.
- Power Automate.
- Apps Script.
- Workflows internos.

Usos:

- Procesar formularios.
- Enviar alertas.
- Actualizar CRM.
- Crear reportes.
- Mover documentos.
- Generar tareas.
- Sincronizar datos.

Arquitectura mínima:

- Trigger.
- Validación.
- Transformación.
- Acción.
- Log.
- Reintento.
- Fallback.

Riesgos:

- Duplicidad.
- Loops.
- Credenciales expuestas.
- Falta de idempotencia.
- Errores invisibles.

Regla GEN+:

Automatización sin logs es una caja negra.

## Capa 4: RAG y conocimiento

Ejemplos:

- pgvector.
- Pinecone.
- Weaviate.
- ChromaDB.
- Redis.
- Elasticsearch.
- File Search.

Usos:

- Consultar documentos.
- Responder con fuentes.
- Buscar actas.
- Revisar contratos.
- Crear tutores.
- Recuperar normativa.

Componentes:

- Extracción.
- Limpieza.
- Chunking.
- Metadata.
- Embeddings.
- Vector search.
- Reranking.
- Citas.
- Evals.

Riesgos:

- Fuentes obsoletas.
- Respuestas sin evidencia.
- Acceso incorrecto.
- Chunking pobre.
- Baja precisión.

Regla GEN+:

Cada respuesta crítica debe mostrar fuente, fecha, vigencia y nivel de confianza.

## Capa 5: Agentes

Ejemplos:

- OpenAI Agents.
- LangGraph.
- CrewAI.
- AutoGen.
- Temporal.
- Agents custom.

Usos:

- Investigación multi-paso.
- Seguimiento de acuerdos.
- PMO.
- Soporte interno.
- Generación de propuestas.
- Clasificación y acción.

Componentes:

- Objetivo.
- Planner.
- Estado.
- Tools.
- Memoria.
- Evaluador.
- Human-in-the-loop.
- Logs.
- Guardrails.

Riesgos:

- Acciones no autorizadas.
- Loops.
- Costos.
- Falta de rollback.
- Prompt injection.
- Error acumulativo.

Regla GEN+:

Primero agentes copiloto. Luego autonomía limitada. Después autonomía con governance.

## Capa 6: Evaluación y observabilidad

Ejemplos:

- LangSmith.
- Braintrust.
- Helicone.
- OpenTelemetry.
- Evals propios.
- Dashboards internos.

Usos:

- Medir precisión.
- Medir costo.
- Medir latencia.
- Detectar errores.
- Comparar modelos.
- Versionar prompts.
- Auditar acciones.

Métricas:

- Exactitud.
- Groundedness.
- Relevance.
- Format compliance.
- Tool success rate.
- Cost per task.
- Human acceptance rate.

Riesgos:

- Optimizar por métrica equivocada.
- No capturar casos límite.
- No medir outputs rechazados.
- No revisar drift.

Regla GEN+:

Sin evals, cada cambio de prompt o modelo es una apuesta.

## Capa 7: Seguridad y gobierno

Herramientas y marcos:

- NIST AI RMF.
- ISO/IEC 42001.
- EU AI Act.
- DLP.
- AI gateways.
- IAM.
- Secrets management.
- Audit logs.

Controles:

- Clasificación de datos.
- Permisos por rol.
- Bloqueo de secretos.
- Redacción de PII.
- Revisión humana.
- Políticas por caso.
- Retención.
- Incident response.

Riesgos:

- Shadow AI.
- Datos sensibles en prompts.
- Proveedores no aprobados.
- Falta de trazabilidad.
- Cumplimiento débil.

Regla GEN+:

Gobernanza debe vivir en el flujo, no solo en un documento.

## Capa 8: Contenido multimodal

Ejemplos:

- DALL-E.
- Midjourney.
- Runway.
- HeyGen.
- ElevenLabs.
- Napkin AI.
- Descript.

Usos:

- Imágenes.
- Video.
- Voz.
- Diagramas.
- Presentaciones.
- Marketing.
- Educación.

Riesgos:

- Marca inconsistente.
- Deepfakes.
- Derechos de autor.
- Contenido genérico.
- Baja precisión técnica.

Regla GEN+:

Multimodal debe tener guía de marca, revisión humana y criterio de uso externo.

## Stack recomendado para GEN+ AI

### Demo estática

- React.
- TypeScript.
- Vite.
- Datos curados.
- GitHub Pages.

### MVP conectado

- Next.js.
- API/BFF.
- Auth.
- Postgres + pgvector.
- File storage.
- OpenAI/Claude/Gemini según tarea.
- Evals básicos.
- Logs.

### Producto escalable

- Frontend modular.
- Backend con colas.
- Vector DB.
- AI gateway.
- Observabilidad.
- RAG con permisos.
- Agents con estado.
- Human approvals.
- Dashboard de KPI.

## Cómo elegir herramienta

Preguntas:

1. ¿Qué problema resuelve?
2. ¿Qué flujo toca?
3. ¿Qué dato procesa?
4. ¿Qué riesgo genera?
5. ¿Qué output entrega?
6. ¿Quién lo revisa?
7. ¿Cómo se mide?
8. ¿Cómo se apaga si falla?
9. ¿Qué costo tiene por usuario o ejecución?
10. ¿Se integra con el stack existente?

## Conclusión

El mapa de herramientas debe ser una arquitectura, no una lista de logos.

La herramienta correcta:

- Reduce fricción.
- Aumenta calidad.
- Respeta datos.
- Se puede medir.
- Se puede auditar.
- Se puede enseñar.
- Se puede escalar.

