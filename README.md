# GEN+ AI Expert Trainer

Entrenador experto de inteligencia artificial para Alejandro Palpan y GEN+. El objetivo no es tener otra landing de IA, sino un sistema de aprendizaje vivo: base documental, módulos de dominio, preguntas de conexión, playbooks operativos y una interfaz dark/light estilo GEN+.

by Alejandro Palpan

Deploy: https://apalpan.github.io/experto-ia-genplus/

## Problema que resuelve

La información sobre IA está fragmentada entre documentos, PDFs, notas, cursos, herramientas y tendencias. Eso genera aprendizaje superficial: saber nombres de herramientas sin entender arquitectura, datos, riesgos, producto y aplicación real.

Este repo organiza la base inicial para que puedas:

- aprender IA desde fundamentos hasta sistemas agentic;
- convertir conceptos en decisiones de producto y arquitectura;
- entrenar preguntas profundas que conecten teoría, negocio y casos AEC;
- seguir cargando fuentes nuevas sin perder estructura;
- preparar una futura versión con RAG, embeddings, agentes y evaluación.

## MVP construido

- App React + TypeScript + Vite.
- Diseño responsive con modo dark/light.
- Tipografía Plus Jakarta Sans, cercana al criterio Ruberoid/GEN+.
- Microanimaciones sobrias para navegación, tarjetas y hero técnico.
- Dashboard ejecutivo del entrenador.
- 14 módulos de dominio IA.
- 44 preguntas socráticas de conexión.
- 40 conceptos expertos en IA, desarrollo web, datos, RAG, seguridad y agentes.
- 6 puentes mentales con analogía simple, lectura técnica, cruce conceptual y lectura ejecutiva.
- 8 labs detallados de implementación.
- Biblioteca filtrable por concepto.
- 10 playbooks operativos.
- Roadmap para evolucionar a RAG y asistente agentic.
- Fuentes crudas copiadas en `content/raw/2026-06-01/`.

## Ejecutar

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

Build para GitHub Pages:

```bash
npm run build:pages
```

## Estructura

```text
src/
  App.tsx                 Interfaz principal y vistas
  data/knowledge.ts       Base curada del entrenador
  components/             UI reutilizable
  lib/trainer.ts          Helpers de preguntas y búsqueda
content/
  raw/2026-06-01/         Fuentes originales copiadas
  inbox/                  Próximas fuentes a cargar
  knowledge/              Síntesis y registro curado
    AGENTIC_AI_MASTER_GUIDE.md
    AI_WEB_DEVELOPMENT_GUIDE.md
    EXPLANATION_PLAYBOOK.md
    EXPERT_CONCEPTS_INDEX.md
docs/
  PRD.md
  SPEC.md
  BACKLOG.md
  DECISIONS.md
scripts/
  ingest-source.mjs       Inventario simple de fuentes
```

## Flujo para cargar más información

1. Coloca nuevos PDFs, DOCX, TXT o Markdown en `content/inbox/`.
2. Ejecuta `node scripts/ingest-source.mjs`.
3. Revisa el inventario generado.
4. Sintetiza lo importante en `content/knowledge/AI_MASTER_GUIDE.md`.
5. Agrega nuevos módulos, preguntas o playbooks en `src/data/knowledge.ts`.
6. Corre `npm run build`.

## Siguiente versión recomendada

Conectar un backend mínimo para RAG local: extracción de texto, chunking, embeddings, búsqueda semántica, respuestas con citas, evaluación de recuperación y panel de fuentes.

## Ruta para volverse experto

1. Dominar fundamentos: tokens, embeddings, transformers, prompting, multimodalidad.
2. Dominar RAG: fuentes, chunking, metadata, vector search, reranking, citas y evals.
3. Dominar desarrollo web IA: frontend states, BFF, APIs, streaming, schemas, logs y seguridad.
4. Dominar agentes: tools, estado, memoria, handoffs, HITL, guardrails y observabilidad.
5. Dominar producción: costos, latencia, evals, tracing, privacidad, permisos y gobierno.
6. Aplicar en GEN+/AEC: reportes, actas, PMO, BIM, visión, propuestas, AECODE y sistemas de aprendizaje con IA.
