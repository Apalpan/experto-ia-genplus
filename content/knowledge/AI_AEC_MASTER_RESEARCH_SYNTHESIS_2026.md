# Sintesis maestra IA AEC GEN+ / AECODE 2026

Fecha: 2026-06-01  
Fuentes: `Documentacion_Maestra_IA_GENplus_AECODE_2026.md` y `Deep_Research_GENplus_AI_AEC_Master_Knowledge_Base.md`  
Uso: entrenador GEN+ AI, Obsidian AP Knowledge OS, estrategia GEN+, producto AECODE y pilotos AEC.

## Tesis ejecutiva

La frontera util de IA para GEN+ no es "chat con IA". Es construir sistemas verificables que combinen:

- modelos fundacionales;
- RAG con fuentes propias;
- agentes con herramientas;
- vision por computadora;
- BIM/IFC/IDS;
- automatizacion n8n/MCP;
- evals;
- gobierno;
- metricas de ROI.

En AEC, los flujos mas valiosos tienen datos y evidencia: planos, modelos BIM, RFIs, actas, contratos, cronogramas, valorizaciones, fotos de obra, submittals y reportes. La oportunidad de GEN+ es convertir ese material en infraestructura cognitiva reutilizable.

## Lectura simple

Un copiloto generico responde preguntas.  
Un sistema IA AEC ayuda a decidir, medir y ejecutar dentro de obra, oficina tecnica, BIM, PMO, costos y aprendizaje.

La diferencia es que el segundo tiene:

- fuente;
- contexto;
- permisos;
- herramienta;
- metrica;
- humano en control.

## Señales clave

| Señal | Lectura |
| --- | --- |
| 88% organizaciones usan IA en al menos una funcion | Adopcion mainstream |
| 6% high performers | La captura de valor es excepcional |
| 27-74% adopcion IA AEC segun medicion | AEC esta entrando, pero con dispersion |
| +14-34% productividad en knowledge work asistido | La IA acelera especialmente a usuarios menos expertos |
| 76% ahorro QTO reportado | Quantity takeoff es una cuña comercial fuerte |
| 23% organizaciones escalan agentes | La frontera se mueve a agentes con herramientas |

Estas cifras vienen de las fuentes cargadas y deben usarse como señales de direccion. Para propuestas comerciales, verificar la fuente exacta y su metodologia antes de prometer impacto.

## Cuello de botella real

El problema ya no es acceso a modelos. El problema es:

- datos desordenados;
- procesos no redisenados;
- baja trazabilidad;
- falta de owner;
- pilotos sin metrica;
- poca gobernanza;
- talento sin criterio agentic;
- integraciones aisladas.

## Stack ganador para GEN+

## 1. Sistema de registro determinista

Debe guardar la verdad:

- contratos;
- costos;
- cronogramas;
- aprobaciones;
- usuarios;
- permisos;
- IFC;
- IDS;
- bitacoras;
- snapshots;
- versiones.

Regla:

El LLM no es fuente maestra. El LLM interpreta, extrae, explica y coordina.

## 2. Capa semantica

Incluye:

- embeddings;
- RAG;
- metadata;
- vector DB;
- filtros;
- reranking;
- citas;
- evaluacion.

Uso AEC:

- RFIs;
- actas;
- especificaciones;
- contratos;
- normas;
- lecciones aprendidas;
- contenido AECODE.

## 3. Capa agentic

Incluye:

- planificacion;
- herramientas;
- estado;
- memoria;
- HITL;
- logs;
- evals;
- guardrails.

Uso AEC:

- PMO agent;
- RFI triage;
- agente de propuestas;
- tutor AECODE;
- auditor contractual.

## 4. Vision edge+cloud

Incluye:

- camaras IP/RTSP;
- NVR;
- edge node;
- deteccion local;
- almacenamiento probatorio;
- dashboard cloud;
- alertas.

Uso AEC:

- EPP;
- avance;
- retrabajo;
- zonas de riesgo;
- evidencias.

## 5. Gobierno y evaluacion

Incluye:

- NIST AI RMF;
- ISO/IEC 42001;
- EU AI Act como benchmark;
- evals;
- logs;
- aprobaciones;
- incident response.

## Casos producto prioritarios

## GEN+ TakeoffAI

Problema:

Metrados y takeoff manual consumen tiempo, tienen errores y no se conectan con costo/cronograma.

Arquitectura:

- parser de planos;
- OCR/vision;
- reglas de medicion;
- RAG normativo;
- verificador humano;
- dashboard de diferencias.

Piloto:

Comparar takeoff manual vs asistido en una disciplina y 3 proyectos.

## GEN+ SiteVision

Problema:

La evidencia visual de obra no se convierte a tiempo en decision.

Arquitectura:

- camaras/fotos;
- edge detection;
- cloud dashboard;
- agente de alertas;
- PMO workflow.

Piloto:

Una zona, dos eventos visuales y revision humana semanal.

## PMO Agent

Problema:

Actas, restricciones, responsables y cronograma no estan conectados.

Arquitectura:

- extractor de compromisos;
- RAG documental;
- cruce de pendientes;
- agente de tareas;
- aprobacion humana.

Piloto:

Procesar 4 reuniones reales y medir compromisos cerrados.

## BIM IFC/IDS QA

Problema:

Los modelos pueden verse correctos pero fallar en requisitos de informacion.

Arquitectura:

- IFC;
- IDS;
- rule engine;
- reporte de brechas;
- explicacion IA.

Piloto:

Validar requisitos IDS en modelos existentes.

## AECODE AI Hub

Problema:

La educacion AEC tradicional mide consumo, no habilidad demostrada.

Arquitectura:

- skill graph;
- RAG;
- tutores verticales;
- evaluador de evidencias;
- skill passport.

Piloto:

3 bots verticales: BIM-bot, Revit-bot y Carrera-bot.

## AI Construction Summit / Data Product

Problema:

LATAM no tiene benchmark fuerte sobre adopcion IA en AEC.

Arquitectura:

- encuesta;
- research pipeline;
- dashboard;
- reporte anual;
- sponsors;
- leads.

Piloto:

Reporte `State of AI in LATAM AEC` como activo del Summit.

## Patrones agentic recomendados

| Patron | Uso |
| --- | --- |
| Prompt chaining | procesos con pasos verificables |
| Routing | decidir entre respuesta rapida, RAG, agente o humano |
| Parallelization | analizar varias fuentes en paralelo |
| Orchestrator-workers | equipo de agentes especializados |
| Evaluator-optimizer | control de calidad antes de entregar |
| ReAct | pensar, actuar con herramienta y observar |
| Agentic RAG | buscar y combinar evidencia multi-fuente |

## Roadmap 12 meses GEN+

## Trimestre 1

- assessment de madurez;
- inventario de datos;
- 3 pilotos: QTO, SiteVision, PMO Agent;
- RAG base;
- evals minimos;
- readiness ISO/IEC 42001.

## Trimestre 2

- MVP TakeoffAI;
- MVP SiteVision;
- PMO Agent en modo copiloto;
- AI Hub AECODE con 3 bots;
- primeros pilotos cliente.

## Trimestre 3

- dashboard de ROI;
- data product LATAM;
- expansion de agentes;
- pilotos B2B AECODE;
- automatizaciones n8n/MCP.

## Trimestre 4

- empaquetar ofertas;
- pricing suscripcion + uso;
- programa partners;
- certificacion/gobierno;
- AI Construction Summit LATAM.

## Riesgos

- sobreafirmar cifras vendor-reported;
- intentar un megaagente;
- usar LLM como sistema de registro;
- no construir evals;
- indexar documentos sin permisos;
- empezar por vision sin flujo operativo;
- convertir AECODE en chatbot sin skill graph;
- vender ROI sin baseline.

## Criterio final

GEN+ debe vender IA AEC como sistema de productividad verificable:

- problema claro;
- datos reales;
- arquitectura explicable;
- piloto corto;
- metrica de negocio;
- control humano;
- camino a producto.
