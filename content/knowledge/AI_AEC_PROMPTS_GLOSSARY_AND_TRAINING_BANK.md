# Prompts, glosario y banco de entrenamiento IA AEC

Fecha: 2026-06-01  
Uso: entrenador, workshops, AECODE, propuestas GEN+, agentes y Obsidian.

## Regla de prompts AEC

Un prompt AEC debe decir:

- rol;
- fuente de verdad;
- limite de accion;
- formato de salida;
- criterio de evidencia;
- riesgo;
- siguiente paso.

## Plantilla base

```text
Actua como [rol experto AEC/IA].

Objetivo:
[resultado esperado]

Contexto:
[proyecto, fase, usuario, decision]

Fuentes disponibles:
[documentos, modelos, fotos, cronograma, actas]

Tarea:
1. [paso]
2. [paso]
3. [paso]

Criterio de verdad:
Usa primero fuentes recuperadas. Si falta evidencia, declara incertidumbre.

Limites:
No ejecutes acciones externas sin aprobacion humana.

Formato:
[tabla / JSON / memo / checklist / roadmap]
```

## Prompt: RAG AEC con citas

```text
Actua como asistente RAG para una empresa AEC.

Pregunta:
[pregunta]

Contexto recuperado:
[fragmentos]

Tarea:
1. Responde solo con evidencia del contexto.
2. Cita fuente, fecha y fragmento.
3. Indica incertidumbre.
4. Separa hechos, inferencias y recomendaciones.
5. Sugiere siguiente accion.

Formato:
Respuesta ejecutiva
Tabla de evidencia
Riesgos
Siguiente accion
```

## Prompt: QTO piloto

```text
Actua como especialista en quantity takeoff asistido por IA.

Proyecto:
[descripcion]

Fuentes:
[planos/modelos/partidas]

Tarea:
1. Define alcance del piloto.
2. Identifica datos requeridos.
3. Define baseline manual.
4. Define proceso asistido.
5. Define validacion humana.
6. Define metricas.
7. Define riesgos.

Salida:
Plan piloto de 6 semanas.
```

## Prompt: SiteVision

```text
Actua como arquitecto de computer vision para obra.

Evento visual:
[EPP / avance / zona / maquinaria]

Contexto:
[tipo de obra, camaras, conectividad, privacidad]

Tarea:
1. Define clases visuales.
2. Define dataset minimo.
3. Define arquitectura edge/cloud.
4. Define metricas tecnicas.
5. Define metricas operativas.
6. Define flujo de alerta.
7. Define revision humana.

Salida:
Blueprint del piloto.
```

## Prompt: PMO Agent

```text
Actua como agente PMO AEC.

Acta:
[texto]

Pendientes previos:
[lista]

Cronograma:
[resumen]

Tarea:
1. Extrae compromisos con evidencia textual.
2. Identifica responsable.
3. Identifica fecha.
4. Clasifica prioridad.
5. Detecta riesgo.
6. Marca si requiere aprobacion.

Devuelve JSON valido:
{
  "commitments": [],
  "risks": [],
  "approvals_required": [],
  "executive_summary": ""
}
```

## Prompt: BIM IFC/IDS QA

```text
Actua como auditor BIM.

Modelo:
[metadata IFC]

Requisitos IDS:
[lista]

Tarea:
1. Lista requisitos evaluados.
2. Indica cumple/no cumple.
3. Reporta elemento, propiedad y disciplina.
4. Clasifica severidad.
5. Recomienda correccion.
6. Genera resumen ejecutivo.

Formato:
Tabla QA + acciones por disciplina.
```

## Prompt: AECODE skill

```text
Actua como product designer de AECODE.

Tema:
[tema IA/AEC]

Tarea:
1. Define objetivo observable.
2. Define prerequisitos.
3. Define capsulas.
4. Define practica.
5. Define evidencia.
6. Define rubrica 1-4.
7. Define feedback IA.
8. Define validacion humana.

Salida:
Ficha de skill verificable.
```

## Banco de preguntas para entrenador

1. Por que QTO es una mejor cuña comercial que un chatbot generico?
2. Que parte de BIM QA debe ser determinista y que parte puede usar LLM?
3. Como decides si un caso requiere RAG simple o Agentic RAG?
4. Que datos necesita SiteVision para no quedarse en demo visual?
5. Que evals debe pasar un PMO Agent antes de crear tareas?
6. Por que AECODE debe medir skills verificadas y no solo consumo?
7. Como convertirias AI Construction Summit en data product?
8. Que riesgos tiene usar cifras vendor-reported en una propuesta?
9. Cuando conviene edge AI y cuando cloud AI?
10. Que significa sistema de registro determinista?
11. Que metadatos debe tener un chunk de contrato AEC?
12. Como explicarias prompt caching con un caso PMO?
13. Que diferencia hay entre tool use y automatizacion n8n?
14. Que permisos tendria un agente RFI?
15. Como priorizarias entre QTO, SiteVision y PMO Agent?

## Glosario sintetico

| Termino | Explicacion | Uso AEC |
| --- | --- | --- |
| Agentic RAG | Agente que decide como recuperar y combinar fuentes | Reclamos, contratos, RFIs |
| IFC | Estándar abierto para modelos BIM | QA, metrados, interoperabilidad |
| IDS | Requisitos de informacion computables | Validacion BIM |
| QTO | Quantity takeoff | Estimacion y compras |
| Edge AI | Inferencia cerca del sensor | Vision en obra |
| Reranking | Reordenar resultados recuperados | Mejorar RAG |
| Prompt caching | Reusar contexto estable | Reducir costo |
| Evaluator-optimizer | Generar y evaluar iterativamente | QA de reportes |
| Digital twin | Representacion digital conectada a datos | Operacion y mantenimiento |
| LoRA | Adaptacion ligera de modelos | Modelos open source especializados |
| PEFT | Ajuste eficiente de parametros | Customizacion barata |
| PMO agentiva | Agentes para seguimiento de proyectos | Actas, riesgos, cronograma |
| Data product | Dato como producto mantenido | Benchmark LATAM AEC |
| NIST AI RMF | Marco de gestion de riesgo IA | Gobierno |
| ISO/IEC 42001 | Sistema de gestion IA certificable | Diferenciador enterprise |

## Ejercicio de dominio

Para demostrar dominio de IA AEC, Alejandro debe poder producir:

1. un mapa de casos priorizados;
2. un blueprint tecnico por caso;
3. una matriz de datos/fuentes;
4. un modelo de permisos;
5. un eval set;
6. un calculo de ROI;
7. un prompt operativo;
8. una propuesta piloto.

## Regla final

El experto no memoriza herramientas. El experto decide que arquitectura conviene, que datos faltan, que riesgo controlar y que evidencia demuestra valor.
