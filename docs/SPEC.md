# SPEC — Arquitectura técnica

## Stack

- React 19.
- TypeScript.
- Vite.
- Tailwind CSS base + CSS propio.
- Lucide React para iconografía.
- Datos mock/curados en TypeScript.

## Arquitectura actual

```text
src/data/knowledge.ts
  sourceNotes
  dashboardMetrics
  knowledgeModules
  trainerQuestions
  learningPaths
  playbooks
  externalReferences

src/data/advancedKnowledge.ts
  expertConcepts
  expertLabs

src/App.tsx
  DashboardView
  TrainerView
  ConceptsView
  LibraryView
  PlaybooksView
  RoadmapView

src/lib/trainer.ts
  búsqueda normalizada
  selección de preguntas
```

## Modelo de datos

### KnowledgeModule

Representa un dominio de IA. Incluye:

- nivel;
- explicación simple;
- capa avanzada;
- conceptos;
- ejemplos;
- evidencia de dominio;
- riesgo oculto.

### TrainerQuestion

Representa una pregunta de comprensión profunda. Incluye:

- módulo;
- nivel;
- pregunta;
- importancia;
- respuesta;
- conexión;
- reto aplicado.

### Playbook

Representa una guía operativa. Incluye:

- cuándo usarlo;
- salida esperada;
- pasos;
- prompt base;
- riesgo oculto.

### ExpertConcept

Representa un concepto para dominio profundo. Incluye:

- dominio;
- nivel;
- explicación simple;
- capa avanzada;
- razón de importancia;
- ejemplo;
- práctica.

### ExpertLab

Representa un caso detallado para aprender construyendo. Incluye:

- escenario;
- arquitectura;
- flujo;
- datos;
- stack;
- ejemplo detallado;
- riesgos;
- entregable.

## Decisión MVP

La primera versión no conecta modelos porque el valor inmediato es ordenar conocimiento, entrenar criterio y crear el producto base. El chat conectado sin RAG sería vistoso pero menos confiable.

## Arquitectura futura RAG

```text
content/inbox
  nuevos documentos

ingestion service
  extracción texto/OCR
  limpieza
  chunking
  metadata
  embeddings

vector store
  búsqueda semántica
  filtros por fuente/tipo/confidencialidad

api
  consulta
  recuperación
  reranking
  generación con citas
  logs y evals

frontend
  chat experto
  fuente citada
  preguntas sugeridas
  ruta personalizada
```

## Reglas de seguridad futura

- Las API keys deben vivir en backend, nunca en Vite.
- Clasificar fuentes por sensibilidad.
- No responder con documentos confidenciales si no hay control de permisos.
- Agregar abstención cuando no haya fuente suficiente.
- Registrar prompt, fuentes recuperadas y salida para QA.

## Testing mínimo

Actual:

- `npm run build`.
- Validación visual en navegador.
- Navegación manual de vistas.
- Revisión de la vista Conceptos y filtro por nivel.

Futuro:

- tests de helpers;
- pruebas de componentes críticos;
- evals de preguntas/respuestas;
- dataset de preguntas RAG con respuesta esperada y fuente.
