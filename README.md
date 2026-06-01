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
- Apartado `Datos clave` con métricas de adopción, implementación, herramientas y fuentes web.
- Apartado `Madurez IA` con diagnóstico 100-500, pilares, taxonomía técnica, frameworks agentic, TTC, GRPO y directivas GEN+.
- Apartado `IA AEC` con señales de mercado, casos producto, patrones agentic, stack AI-native, prompts y glosario aplicado a construcción.
- 8 labs detallados de implementación.
- Biblioteca filtrable por concepto.
- 10 playbooks operativos.
- Roadmap para evolucionar a RAG y asistente agentic.
- Documentación ampliada x5 sobre adopción IA, implementación, herramientas, briefing ejecutivo y referencias Platzi/Freddy Vega.
- Documentación ampliada x2 adicional con la nueva guía pegada: madurez corporativa, arquitectura agentic, razonamiento avanzado, aprendizaje AECODE y prompts AEC.
- Documentación ampliada con los nuevos reportes GEN+ / AECODE: investigación IA AEC, ROI, stack agentic, prompts y banco de entrenamiento.
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
    AI_ADOPTION_KEY_DATA_2026.md
    AI_DOCUMENTATION_X5_INDEX.md
    AI_EXECUTIVE_DATA_BRIEFING.md
    AI_IMPLEMENTATION_MASTER_PLAYBOOK.md
    AI_MATURITY_AND_COGNITIVE_AUTOMATION_GUIDE.md
    AI_AGENTIC_ARCHITECTURE_FRAMEWORKS_2026.md
    AI_REASONING_TTC_GRPO_MASTERCLASS.md
    AI_AECODE_ADAPTIVE_LEARNING_SYSTEM.md
    AI_PROMPT_LIBRARY_AEC_AGENTIC.md
    AI_GOVERNANCE_EVALS_OBSERVABILITY_GUIDE.md
    AI_ULTRA_ADVANCED_AEC_AGENTIC_USE_CASES.md
    AI_AEC_MASTER_RESEARCH_SYNTHESIS_2026.md
    AI_AEC_ROI_METRICS_AND_PRODUCT_WEDGES.md
    AI_AEC_AGENTIC_STACK_AND_PATTERNS.md
    AI_AEC_PROMPTS_GLOSSARY_AND_TRAINING_BANK.md
    AI_WEB_DEVELOPMENT_GUIDE.md
    EXPLANATION_PLAYBOOK.md
    EXPERT_CONCEPTS_INDEX.md
    FREDDY_VEGA_PLATZI_AI_NOTES.md
    AI_TOOLS_LANDSCAPE_2026.md
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
