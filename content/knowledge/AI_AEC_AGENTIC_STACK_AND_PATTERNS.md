# Stack agentic IA AEC y patrones de implementacion

Fecha: 2026-06-01  
Uso: arquitectura tecnica, AgentFlow, PMO Agent, RAG, BIM, VisionPro, AECODE AI Hub.

## Tesis

Un stack IA AEC debe separar lo determinista de lo probabilistico.

Lo determinista guarda la verdad:

- contratos;
- cronograma;
- costos;
- aprobaciones;
- usuarios;
- IFC;
- IDS;
- bitacoras.

Lo probabilistico interpreta:

- texto;
- imagen;
- intención;
- riesgo;
- excepciones;
- explicaciones;
- recomendaciones.

## Arquitectura de referencia

```text
Fuentes AEC
  -> ingestion
  -> normalizacion
  -> metadata
  -> sistemas deterministas
  -> capa semantica
  -> agentes especializados
  -> aprobacion humana
  -> dashboard
  -> evals y trazas
```

## Capa 1: fuentes

Tipos:

- PDFs;
- contratos;
- RFIs;
- actas;
- submittals;
- fotos;
- video;
- IFC;
- IDS;
- cronogramas;
- valorizaciones;
- correos;
- contenido AECODE.

## Capa 2: ingestion

Funciones:

- extraer texto;
- extraer tablas;
- OCR;
- parsear IFC;
- leer metadata;
- limpiar duplicados;
- versionar fuente;
- clasificar confidencialidad.

## Capa 3: sistema de registro

Debe ser auditable.

Ejemplos:

- Postgres;
- CDE;
- ERP;
- ACC/BIM 360;
- Drive controlado;
- Obsidian para conocimiento;
- GitHub para codigo.

## Capa 4: capa semantica

Incluye:

- chunking;
- embeddings;
- metadata;
- filtros;
- reranking;
- citas;
- snapshots de KB.

Campos de metadata AEC:

- proyecto;
- disciplina;
- documento;
- version;
- fecha;
- fase;
- confidencialidad;
- responsable;
- ubicacion;
- paquete de trabajo;
- vigencia;
- fuente.

## Capa 5: agentes

Agente util:

- tiene objetivo;
- sabe que puede leer;
- sabe que puede ejecutar;
- tiene estado;
- llama herramientas;
- pide aprobacion;
- registra trazas;
- pasa evals.

## Capa 6: herramientas

Ejemplos:

- buscar documento;
- leer fuente;
- extraer compromisos;
- crear tarea;
- generar reporte;
- validar IDS;
- consultar cronograma;
- calcular diferencia;
- enviar a aprobacion.

## Capa 7: control humano

Reglas:

- bajo riesgo y reversible: puede ejecutar;
- riesgo medio: propone y pide aprobacion;
- alto riesgo: humano decide;
- irreversible o sensible: bloqueado por defecto.

## Capa 8: evals y observabilidad

Registrar:

- input;
- modelo;
- prompt;
- fuentes;
- tool calls;
- resultados;
- aprobaciones;
- costo;
- latencia;
- correccion humana;
- output final.

## Patrones agentic

## Prompt chaining

Uso:

- convertir un documento en estructura;
- revisar output;
- redactar conclusion.

AEC:

- acta -> compromisos -> riesgos -> tareas -> resumen.

## Routing

Uso:

- decidir ruta tecnica.

AEC:

- consulta conceptual -> respuesta simple;
- pregunta contractual -> RAG;
- accion externa -> approval;
- dato sensible -> flujo protegido.

## Parallelization

Uso:

- analizar varias fuentes o escenarios.

AEC:

- contrato, cronograma y RFIs en paralelo antes de consolidar riesgo.

## Orchestrator-workers

Uso:

- varios especialistas coordinados.

AEC:

- propuesta GEN+ con investigador, arquitecto, ROI, redactor y QA.

## Evaluator-optimizer

Uso:

- controlar calidad.

AEC:

- reporte de obra generado por IA y revisado por verificador de fuentes, riesgos y formato.

## ReAct

Uso:

- alternar razonamiento y herramientas.

AEC:

- revisar clausula, buscar acta, calcular impacto y redactar recomendacion.

## Agentic RAG

Uso:

- resolver preguntas que requieren varias recuperaciones.

AEC:

- reclamo contractual con contrato, adendas, RFIs, cronograma y correos.

## Stack recomendado por caso

| Caso | Stack minimo |
| --- | --- |
| PMO Agent | RAG + extractor + task tool + dashboard |
| QTO | parser + vision/OCR + reglas + revision |
| SiteVision | edge CV + event store + dashboard + agente |
| BIM QA | IFC + IDS + rule engine + explicador IA |
| AECODE AI Hub | RAG + tutor + rubrica + analytics |

## Antipatrón: megaagente

Un megaagente que hace todo suele fallar porque:

- no tiene limites;
- mezcla responsabilidades;
- consume mucho contexto;
- es dificil de evaluar;
- ejecuta acciones sin control;
- no escala por dominio.

Mejor:

- un agente simple;
- herramientas claras;
- estado minimo;
- evals;
- luego multiagente si la complejidad lo exige.

## Modelo de costos

El costo no es solo tokens.

```text
costo_total =
  tokens_input
  + tokens_output
  + herramientas
  + retries
  + almacenamiento
  + inferencia vision
  + revision humana
  + mantenimiento
```

## Reglas de control de costo

- usar modelos ligeros para clasificar;
- usar modelos fuertes solo para razonamiento dificil;
- cachear contexto estable;
- comprimir historial;
- usar tools en vez de explicar con texto;
- registrar costo por flujo;
- apagar casos sin ROI.

## Governance by design

Cada agente debe tener:

- owner;
- caso;
- riesgo;
- permisos;
- datos permitidos;
- herramientas;
- approval gates;
- eval set;
- dashboard;
- incident response.

## Checklist antes de construir

1. El problema se repite?
2. Hay datos suficientes?
3. Hay baseline?
4. El output es verificable?
5. Que accion toma el usuario?
6. Que requiere aprobacion?
7. Que error es critico?
8. Que metrica decide escalar?

## Regla final

La arquitectura correcta no es la mas sofisticada. Es la que permite mejorar un flujo real con evidencia, seguridad y costo controlado.
