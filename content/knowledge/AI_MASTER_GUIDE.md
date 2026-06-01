# Guía maestra curada — GEN+ AI Expert Trainer

## Tesis

La inteligencia artificial no transforma una organización por adopción de herramientas, sino por rediseño operacional. La ventaja aparece cuando se combinan procesos claros, datos confiables, modelos adecuados, herramientas conectadas, supervisión humana, evaluación y métricas.

Fórmula GEN+:

```text
Procesos + datos + IA + agentes + métricas + adopción = ventaja operativa real
```

## Mapa de dominio

### 1. Fundamentos

- IA simbólica: reglas explícitas.
- Machine learning: patrones desde datos.
- Deep learning: redes neuronales profundas.
- Transformers: atención y procesamiento paralelo.
- LLMs: modelos de lenguaje capaces de generar, transformar y razonar sobre texto.
- Multimodalidad: texto, imagen, audio, video, documentos y pantallas.

Pregunta clave: ¿qué tipo de problema tengo: clasificar, predecir, generar, consultar, percibir o ejecutar?

### 2. Modelos y prompting

Un prompt profesional no es una frase larga. Es un contrato de salida:

- contexto;
- tarea;
- audiencia;
- restricciones;
- criterios de calidad;
- formato;
- ejemplos;
- criterio de abstención.

Prompt base CREATE:

```text
Context: rol, proyecto y situación.
Request: entregable exacto.
Style: tono y profundidad.
Attributes: restricciones, fuentes, límites.
Target: formato de salida.
Examples: ejemplos de entrada/salida.
```

### 3. RAG y conocimiento

RAG permite responder usando documentación externa recuperada. No reemplaza curaduría.

Pipeline mínimo:

1. Inventario de fuentes.
2. Limpieza.
3. Chunking.
4. Metadata.
5. Embeddings.
6. Vector store.
7. Retrieval.
8. Reranking.
9. Respuesta con citas.
10. Evaluación.

Regla: si no hay fuente suficiente, el sistema debe decirlo.

### 4. Agentes IA

Un agente combina:

- objetivo;
- instrucciones;
- contexto;
- memoria;
- herramientas;
- permisos;
- evaluación;
- salida;
- revisión humana.

Un agente serio debe tener límites de autonomía, logs, criterio de escalamiento, manejo de errores y rollback cuando aplique.

### 5. Automatización y MCP

La automatización conecta eventos, datos, modelos y acciones. MCP estandariza la conexión entre aplicaciones IA y sistemas externos como archivos, bases de datos, calendarios, herramientas y workflows.

Buenas decisiones:

- usar reglas simples cuando el flujo sea determinista;
- usar IA cuando haya lenguaje, ambigüedad, documentos, imágenes o síntesis;
- separar credenciales del frontend;
- diseñar idempotencia y observabilidad.

### 6. IA aplicada a AEC

Casos GEN+ prioritarios:

- actas y reuniones inteligentes;
- asistente documental de proyecto;
- reportes automáticos de obra;
- seguridad con computer vision;
- control de maquinaria;
- agente de planificación;
- agente de valorizaciones;
- asistente BIM;
- tutor AECODE;
- dashboard ejecutivo de riesgos.

Cada caso debe tener usuario, proceso, datos, salida, métrica, riesgo y siguiente acción.

### 7. Computer vision

Computer vision no es una demo de detección. Es un sistema operacional:

- captura;
- almacenamiento;
- procesamiento;
- analítica;
- alerta;
- revisión humana;
- acción;
- evidencia.

Métricas técnicas: precision, recall, mAP, latencia, cobertura.

Métricas operativas: alertas útiles, tiempo de respuesta, reducción de incidentes, trazabilidad.

### 8. Vibe coding

La IA reduce el costo de prototipar, pero no reemplaza criterio de producto.

Antes de código:

- problema;
- usuario;
- loop crítico;
- datos;
- pantallas;
- arquitectura;
- criterio de aceptación;
- riesgos.

Repo mínimo:

- README;
- PRD;
- SPEC;
- BACKLOG;
- DECISIONS;
- `.env.example`;
- AGENTS;
- scripts `dev`, `build`, `typecheck` cuando aplique.

### 9. Gobernanza y ROI

IA sin métrica es demo. IA sin gobernanza es riesgo.

Controles mínimos:

- clasificación de datos;
- permisos por rol;
- logs;
- revisión humana;
- evaluación;
- límites de autonomía;
- monitoreo de costos;
- documentación de decisiones.

Métricas:

- horas ahorradas;
- tiempo de ciclo;
- errores evitados;
- costo por tarea;
- tasa de éxito;
- tasa de escalamiento humano;
- adopción;
- ROI neto.

### 10. Sistemas multiagente

Usar multiagentes solo cuando exista separación real de responsabilidades:

- investigador;
- planificador;
- ejecutor;
- revisor;
- coordinador;
- evaluador.

Riesgos:

- costo acumulado;
- conflictos entre agentes;
- pérdida de estado;
- exceso de autonomía;
- latencia;
- dificultad de auditoría.

## Ruta recomendada de dominio

1. Fundamentos y prompting.
2. RAG y arquitectura de conocimiento.
3. Agentes y tool use.
4. Automatización y MCP.
5. IA aplicada a AEC.
6. Gobernanza y ROI.
7. Vibe coding de productos.
8. Multiagentes y sistemas durables.
9. Desarrollo web IA full-stack.
10. Seguridad agentic.
11. Context engineering.
12. Evals, observabilidad y producción.

## Nivel ultra avanzado

Una persona con dominio ultra avanzado no solo conoce modelos. Puede diseñar sistemas completos:

- define objetivo, usuario y métrica;
- selecciona modelo o cascada de modelos;
- diseña contexto, memoria y fuentes;
- conecta herramientas con permisos mínimos;
- agrega human-in-the-loop;
- evalúa retrieval, respuesta y acciones;
- mide costo, latencia y calidad;
- protege contra prompt injection;
- versiona prompts y datasets;
- convierte aprendizajes en activos reutilizables.

## Desarrollo web para IA

Un producto IA necesita:

- frontend con estados claros;
- backend/BFF para proteger secretos;
- APIs con schemas;
- streaming de eventos;
- RAG con citas;
- tool calls auditables;
- aprobaciones humanas;
- base de datos de sesiones, fuentes y trazas;
- evals y feedback.

La demo puede ser estática. El producto real debe tener backend.

## Agentic AI

Un agente productivo debe tener:

- objetivo observable;
- instrucciones;
- contexto;
- herramientas;
- estado;
- memoria;
- permisos;
- guardrails;
- logs;
- evals;
- fallback;
- aprobación humana.

La autonomía no debe crecer por entusiasmo. Debe crecer por evidencia de confiabilidad.

## Preguntas madre

- ¿Qué proceso real mejora esta IA?
- ¿Qué dato necesita?
- ¿Qué salida genera?
- ¿Quién decide?
- ¿Cómo se mide?
- ¿Qué puede salir mal?
- ¿Qué debe revisar un humano?
- ¿Qué fuente sostiene la respuesta?
- ¿Qué se convierte en activo reutilizable?

## Glosario mínimo

- Token: unidad de texto procesada por un modelo.
- Embedding: vector que representa significado.
- Vector store: base para buscar embeddings.
- RAG: generación aumentada por recuperación.
- Fine-tuning: ajuste del modelo con datos propios.
- Tool use: capacidad de llamar herramientas.
- MCP: estándar para conectar IA con sistemas externos.
- Human-in-the-loop: revisión humana dentro del flujo.
- Eval: prueba para medir calidad de salidas.
- Agentic workflow: flujo donde IA planifica y usa herramientas bajo límites.
- Context engineering: diseño del paquete de información que recibe el modelo.
- Handoff: transferencia controlada entre agentes.
- Tool guardrail: validación antes o después de usar una herramienta.
- Trace: registro paso a paso de una ejecución.
- Durable execution: ejecución que puede pausar, persistir estado y reanudar.
