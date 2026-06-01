# Documentación Maestra de Inteligencia Artificial para el Ecosistema GEN+ / AECODE

**Audiencia:** Alejandro Palpan Flores — fundador GEN+ (BIM/IA aplicada, diseño computacional, ingeniería estructural) y AECODE (comunidad EdTech de IA, 85k+ miembros, AI Hub, expansión LATAM).
**Fecha de corte:** Junio 2026.
**Idioma:** Español neutro profesional.
**Enfoque:** rigor con fuentes, profundidad técnica explicada con técnica Feynman, frameworks accionables, aplicación directa a AEC, real estate y educación.

---

## TL;DR (3 viñetas)

- **La adopción de IA es ya mainstream pero la captura de valor es la excepción**: 88% de organizaciones globales usan IA en al menos una función (McKinsey *State of AI 2025*, n=1,993), pero solo el **6% son "AI high performers"** que atribuyen ≥5% del EBIT a la IA; en AEC la adopción reportada va de **27% (Bluebeam global)** a **74% (Bluebeam Pasadena, 400 firmas)** dependiendo de la metodología. **El cuello de botella no es la tecnología sino el rediseño de flujos de trabajo, la gobernanza y el talento.**
- **El stack ganador 2025-2026 combina cuatro paradigmas**: IA generativa (LLMs como Claude Opus 4.6 y GPT-5.x) + IA agéntica (LangGraph, Claude Code, Codex, patrones Anthropic) + RAG (Lewis et al. 2020) + Visión por computador (YOLO, ViT), sobre infraestructura modular (bases vectoriales Qdrant/Pinecone, orquestadores n8n) y gobernado por NIST AI RMF 1.0, ISO/IEC 42001:2023 y EU AI Act (Reg. 2024/1689).
- **Para GEN+/AECODE la jugada es doble**: (a) **GEN+ como plataforma vertical AEC** con tres productos ancla (QTO automatizado tipo Togal.AI, site monitoring tipo Buildots/OpenSpace, diseño generativo tipo Autodesk Forma/TestFit), métricas ROI auditables (productividad +14-34% per Brynjolfsson et al. QJE 2025; ahorros de 50-76% en QTO/site-planning) y certificación ISO/IEC 42001 como diferenciador en LATAM; (b) **AECODE como Learning Operating System** monetizable B2C + B2B + marketplace + data product, aprovechando la ventana LATAM donde la adopción AEC es probablemente <10% vs 27-74% en mercados desarrollados.

---

## Tabla de Contenidos

1. Modelo de Madurez de IA
2. Taxonomía Técnica de la IA
3. Casos de Uso por Sector (Construcción, Real Estate, Ingeniería, Educación)
4. Arquitectura de Agentes
5. Arquitectura de Visión por Computador
6. Playbook de Adopción de IA
7. Métricas de ROI
8. Riesgos, Gobernanza y Seguridad
9. Stack Tecnológico (IA/ML + Web)
10. Roadmap de IA para GEN+
11. Prompts Base Reutilizables
12. AECODE como Learning OS
13. Automatizaciones y n8n
14. Claude Code y Codex
15. AI Construction Summit y contexto sectorial
16. Glosario de 150 términos
17. Recomendaciones / Caveats / Bibliografía

---

## Key Findings (síntesis ejecutiva)

1. **El "scaling gap" es el problema #1**: ~⅔ de organizaciones no han comenzado a escalar IA al nivel enterprise; el salto del Nivel 2 (Active) al 3 (Operational) en el modelo Gartner es el punto de fracaso más común. *Fuente: McKinsey State of AI 2025; Gartner AI Maturity Model.*
2. **Las cifras de productividad están validadas científicamente**: el estudio peer-reviewed de Brynjolfsson, Li y Raymond (NBER 31161, *QJE* 2025) con 5,179 agentes de soporte mostró **+14% productividad promedio, +34% para novatos**, y **-25% en escalamientos a manager** — el estudio causal más sólido sobre gen AI en knowledge work.
3. **En AEC, hay casos faro con métricas concretas**: Togal.AI logra 76% de ahorro de tiempo en QTO (peer-reviewed Univ. Kansas); Buildots redujo retrabajo 4.3% y evitó ~4 semanas/fab en Intel; ALICE Technologies reporta en promedio 17% reducción de duración total, 14% labor, 12% equipos; nPlan está entrenado en 750,000 cronogramas históricos representando USD 2T en capex.
4. **El gobierno regulatorio se consolida en 2025-2026**: EU AI Act plenamente aplicable 2-ago-2026 (sanciones hasta €35M o 7% facturado global); ISO/IEC 42001:2023 es el primer estándar certificable; NIST AI RMF 1.0 + Generative AI Profile (NIST AI 600-1, jul-2024) sirven como framework operativo.
5. **Los agentes son la frontera 2025-2026**: 23% de organizaciones escalan agentes en al menos una función (McKinsey 2025); Anthropic publicó los 5 patrones canónicos (prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer); Claude Code alcanzó USD 1B run-rate revenue en 6 meses; el 95% de ingenieros OpenAI usa Codex semanalmente.

---

## Details

### 1. Modelo de Madurez de IA

**1.1 Por qué importa (Feynman).** Un modelo de madurez es un mapa que te dice **dónde estás**, no **por qué estás ahí**. Sin un lenguaje común, el CEO cree que la empresa "es avanzada en IA" porque hay un chatbot, mientras el CTO sabe que la infraestructura de datos no soporta cargas reales — y la estrategia se construye sobre una ficción. El valor del modelo es alinear esa conversación antes de gastar millones.

**1.2 Modelo Gartner (cinco niveles).** Gartner segmenta la madurez en cinco niveles (Gartner *AI Maturity Model and Roadmap Toolkit*):

| Nivel | Nombre | Características | Riesgo dominante |
|---|---|---|---|
| 1 | **Awareness** | Conversaciones estratégicas sin pilotos | Parálisis |
| 2 | **Active** | Pilotos y PoCs aislados | **Pilot purgatory** — el punto de quiebre más común |
| 3 | **Operational** | IA integrada en al menos un workflow productivo | Silos funcionales |
| 4 | **Systemic** | IA en mayoría de operaciones; nuevos modelos digitales | Deuda técnica |
| 5 | **Transformational** | IA es ADN del negocio; aprendizaje continuo | Riesgos sistémicos / regulatorios |

**Datos críticos.** Según el informe LXT *Path to AI Maturity* (basado en Gartner, n=200 organizaciones US): solo el **6%** alcanzan el nivel Transformational. Una encuesta Gartner de **junio 2025** revela que solo el **16%** de líderes de Software Engineering califican sus procesos de entrega como "AI-ready", **14%** su fuerza laboral, y **12%** su arquitectura — la madurez es disonante por dimensión.

**1.3 Modelos complementarios.**
- **Andrew Ng AI Transformation Playbook** (2018, vigente): (1) pilotos para momentum; (2) construir equipo IA interno; (3) capacitación amplia; (4) estrategia; (5) comunicación.
- **McKinsey "Rewired"** (200+ transformaciones at-scale): seis dimensiones — Estrategia, Talento, Modelo Operativo, Tecnología, Datos, Adopción/Escalado.
- **BCG AI@Scale** (*Where's the Value in AI?*, 2024, n=1,000 CxOs): solo el **26%** tiene capacidades para superar PoCs; solo el **4%** tiene capacidades cutting-edge; **62%** del valor reside en funciones core (Michael Grebe, BCG).
- **AWS Cloud Adoption Framework for AI**, **Deloitte AI Maturity Framework**, **MIT CISR**.

**1.4 Aplicación a GEN+/AECODE.** Assessment 6 ejes × 0-5 (Liderazgo, Estrategia, Operaciones, Tecnología, Personas, Gobierno) = puntaje /30. Para una boutique AEC con tracción inicial, el patrón típico es Tecnología 4 / Estrategia 2 / Datos 2 — el avance se desbloquea desde Estrategia y Datos, no comprando más herramientas (principio del cuello de botella de Goldratt).

---

### 2. Taxonomía Técnica de la IA

**2.1 Marco mental Feynman.** Cinco "motores" distintos dentro del capó "IA":
- **Predictiva**: "dada esta entrada, ¿qué número/clase sale?"
- **Generativa**: "dado este contexto, ¿qué contenido nuevo produzco?"
- **Agéntica**: "dado este objetivo, ¿qué pasos planeo y ejecuto?"
- **RAG**: "antes de responder, busca evidencia fresca"
- **Visión por computador**: "interpreta píxeles como conceptos"

**2.2 IA Predictiva (Machine Learning clásico).** Modelos que aprenden una función f(x)→y a partir de datos. Familias: regresión (precio vivienda, demanda cemento — XGBoost, LightGBM), clasificación (riesgo retraso, defecto sí/no — Random Forest, Gradient Boosting), series de tiempo (ARIMA, Prophet, Temporal Fusion Transformer), clustering (K-means, DBSCAN, HDBSCAN), reinforcement learning (AlphaGo, secuenciación de obra tipo ALICE). **Cuándo usar:** datos tabulares estructurados, predicciones interpretables y baratas.

**2.3 IA Generativa.** Modelos que aprenden distribución p(x) y muestrean de ella. Subfamilias:
- **LLMs**: GPT-5.x, Claude Opus 4.6/4.8, Gemini 2.x, Llama 3/4, Mistral, Qwen, DeepSeek. Transformer decoder-only, next-token prediction sobre billones de tokens.
- **Difusión** (imagen/video/3D): Stable Diffusion, FLUX, Sora, Veo. Invierten un proceso de ruido gaussiano.
- **Multimodales**: GPT-5.4 con uso nativo del computador; Claude con vision; Gemini.

**2.4 IA Agéntica.** Anthropic (Schluntz & Zhang, dic-2024) define: *"the model's dynamically directs its own processes and tool usage, maintaining control over how they accomplish tasks"*. **23%** de organizaciones escalan agentes en al menos una función; **39%** experimentan (McKinsey 2025).

**2.5 RAG (Retrieval-Augmented Generation).** Lewis et al., NeurIPS 2020. Combina memoria paramétrica (pesos del LLM, ej. BART) + memoria no-paramétrica (índice denso vía Dense Passage Retrieval). Pipeline canónico: **Ingesta → Retrieval → Augmentation → Generation**. Variantes 2024-2026: GraphRAG (Microsoft), Self-RAG, CRAG, Agentic RAG, RAG-Fusion, ColBERT/late-interaction, hybrid search (BM25 + denso).

**2.6 Tabla decisional rápida.**

| Necesidad | Tecnología | Por qué |
|---|---|---|
| Predecir número con datos tabulares | Predictiva (XGBoost) | Barato, interpretable |
| Generar memo/contrato/imagen | Generativa (LLM/Diffusion) | Output libre |
| Responder con info propietaria | RAG | Fundamentación, sin reentrenar |
| Ejecutar tarea multi-paso con tools | Agéntica | Autonomía con guardrails |
| Detectar EPP/grieta/avance en obra | Visión (YOLO/ViT) | Píxeles → conceptos |

---

### 3. Casos de Uso por Sector

**3.1 Construcción.**

*Visión por computador (safety, calidad, avance):*
- **Buildots** documenta en su case study con **Intel** una **reducción del 4.3% en costos de retrabajo** y **~4 semanas de retraso evitadas por fab**. En su sitio reporta hasta **50% de reducción de demoras** y, en el case study **Mace Airport**, **4,200 horas-hombre ahorradas** por automatización de tracking.
- **OpenSpace** (encuesta de clientes propia): **67%** reporta ahorros de miles de dólares; **74%** ahorra varias horas/semana.
- **Newmetrix (ex-Smartvid.io)** fue adquirida por Oracle en **octubre 2022** (acquisition page Oracle); el asistente **Vinnie** detecta más de 100 riesgos de seguridad, entrenado sobre **17 millones de imágenes de obra** y **"12 siglos" de datos de incidentes** (Newmetrix vía DataDrivenAEC).
- Pieza académica de referencia: Sabek, Gonzalez, Mei, Lee, *"Enhancing Construction Site Safety and Efficiency with YOLOv8-Based Computer Vision Model"* (CSCE 2024).

*Programación predictiva:*
- **ALICE Technologies** reporta en promedio **17% reducción de duración total del proyecto, 14% ahorro en mano de obra, 12% en equipos** (blog *Mastering Construction Project Turnaround Planning*). Case study data center: **63 días salvados** mediante eliminación de soft logic; case study Suffolk Construction (life sciences): **42 días recuperados** con re-secuenciación; Build Group: **10% reducción de utilización de crew** ahorrando millones (página de soluciones para GCs).
- **nPlan** está entrenado en **750,000 cronogramas históricos representando más de USD 2T en gasto de construcción** (nplan.io). En el case study **HS2 con SCS JV (Schedule Training Hub)** identificó ~140 risk insights equivalentes a **250 días de delay y £120M en exposición**. nPlan opera en **USD 500B en proyectos vivos** y cuenta entre sus angel investors a **Sir Demis Hassabis (DeepMind)** y **Sir Ian Davis (ex-McKinsey)** (Global Construction Review).

*Quantity Takeoff (QTO):*
- **Togal.AI**: estudio peer-reviewed de la **Universidad de Kansas** (CEAE Department, "KU Study: Togal vs OST") reporta hasta **76% de ahorro de tiempo** vs On-Screen Takeoff manteniendo diferencia <5% en cantidades. Caso **Coastal Construction Miami**: aprox. **USD 1M en ahorros año-1**, 14.5 horas ahorradas/plan set, **13,920 horas/año**. Caso **Total Flooring**: takeoff de torre de 30 pisos pasó de **2 semanas a 48 horas** (Brad Brady, presidente).

*Diseño generativo / massing:*
- **Autodesk Spacemaker** (hoy **Autodesk Forma**): adquirida por **USD 240M neto de cash** en noviembre 2020 (PR Newswire); el 10-K de Autodesk FY2022 (SEC) reporta fair value de **USD 252.0M**. Casos clientes (press release Autodesk): desarrollador nórdico aumentó **densidad 16%** e incrementó **apartamentos con vista al mar 33%** (~€8M); firma arquitectura **+50% productividad** en early-stage; constructor **+4% densidad** (€4.5M).
- **TestFit Generative Design** (lanzado junio 2024): genera **25 mil resultados en 10 segundos** (Clifton Harness, AEC Business); **4× más rápido en site-planning, 3× más variantes** (AEC+Tech). En el case study Site Solver: **2-3× más modelos alternativos por mismo presupuesto** (37 modelos por USD 10k vs 15 antes). **+650 deals/semana** evaluados en la plataforma.
- **Hypar**: fundada por Anthony Hauck (ex-Revit lead Autodesk) e Ian Keough (creador de Dynamo); **2,000+ usuarios** a fines 2020; **USD 5.5M de funding** en junio 2023 (AEC+Tech).

*Otros casos AEC:*
- AI para contratos y RFIs (NLP sobre especificaciones), detección de clashes en BIM, estimación de costos, mantenimiento predictivo (LLumin reporta hasta **60% reducción de breakdowns no planeados** — claim propio de marketing, no estudio independiente), digital twins operacionales.

**3.2 Real Estate / PropTech.**
- **JLL Falcon** (PR Newswire, 29-oct-2024): plataforma de IA propia; **JLL GPT** es el primer asistente generativo construido específicamente para CRE; **más de 47,000 profesionales JLL** ya lo usaron.
- **Hank (JLL)** + **Royal London Asset Management**: **708% ROI**, **59% ahorro de energía** y **500 toneladas CO₂/año** evitadas en HVAC desde 2023 (JLL Insights, *AI and the evolution of proptech*).
- **CBRE Smart FM Solutions** (CBRE press release, 22-ago-2023): **1 billón de pies² desplegados** en **20,000+ sitios**; **20% reducción de costos de mantenimiento y energía**, **25% reducción de dispatches** de técnicos (Paul Saville-King, CPO CBRE GWS).
- **Zillow Zestimate** (zillow.com/zestimate/): **error mediano 1.74% on-market / 7.20% off-market** sobre **118M de viviendas**. Benchmark peer-reviewed *Advances in Consumer Research 2024* (Zestimate vs NYC assessments): **MdAPE ≈ 17.5% Zestimate vs 19.8% list price**.
- **JLL Research 2024**: aprox. **10% (700 de 7,000) PropTechs globales** ofrecen soluciones AI-powered; según **PitchBook citado por JLL**, el capital AI-PropTech alcanzó **USD 4B en 2022, 2× vs 2021**.
- **JLL Future of Work Survey 2024**: **90%** de compañías planean integrar IA en CRE en los próximos 5 años.
- Otras aplicaciones: tenant matching, energy benchmarking, ESG scoring, generación de listings, due-diligence automatizado, space utilization analytics.

**3.3 Ingeniería (estructural, civil, MEP).**
- Optimización topológica con ML (Karamba3D + ML), predicción sísmica (papers en *Engineering Structures*, *Automation in Construction*).
- **Surrogate models / PINNs**: Physics-Informed Neural Networks reemplazan FEM costosos para iteraciones rápidas.
- Geotecnia: ML para capacidad portante, asentamientos, estabilidad de taludes.
- MEP: dimensionamiento + generación de diagramas unifilares con LLMs + reglas.
- **Compliance**: LLMs validan diseño vs RNE Perú, IBC, Eurocódigo — caso natural de RAG.

**3.4 Educación tecnológica (AECODE).** Tutores personalizados (LLM + RAG sobre curricula), generación de contenido (ejercicios, slides, videos con avatares), análisis de progreso con ML predictivo, bots especializados (AI Hub: BIM-bot, Revit-bot, Estructura-bot), networking inteligente, moderación de comunidad, producción de contenido.

---

### 4. Arquitectura de Agentes

**4.1 Mental model.** Un agente es un **LLM dentro de un loop while**: observa → razona → elige herramienta → ejecuta → observa resultado → repite. Cuatro componentes mínimos: cerebro (LLM), memoria (corto/largo plazo), herramientas (tools), bucle de control.

**4.2 ReAct (Yao et al., ICLR 2023, arXiv 2210.03629).** Intercala Reasoning (cadena de pensamiento) + Acting (llamada a herramienta). Mejora absoluta **+34% en ALFWorld y +10% en WebShop** vs imitación y RL, con apenas uno o dos ejemplos en contexto. Mitiga alucinaciones de chain-of-thought puro al fundamentar en herramientas externas (ej. Wikipedia API).

**4.3 Patrones agénticos de Anthropic (Schluntz & Zhang, dic 2024 — "Building Effective Agents").**
1. **Prompt chaining**: salida de un LLM alimenta al siguiente.
2. **Routing**: un LLM clasifica input y deriva a especialista.
3. **Parallelization**: múltiples LLMs en paralelo (voting, sectioning).
4. **Orchestrator-workers**: LLM central descompone y delega.
5. **Evaluator-optimizer**: un LLM genera, otro evalúa; loop hasta calidad.
Cita clave: *"the most successful implementations weren't using complex frameworks or specialized libraries. Instead, they were building with simple, composable patterns."*

**4.4 Reflection / Reflexion** (Shinn et al. 2023): self-critique + memoria episódica de fracasos.

**4.5 Multi-agente — frameworks comparados.**

| Framework | Modelo mental | Fortaleza | Debilidad |
|---|---|---|---|
| **LangGraph** | Grafo dirigido de estados | Producción, control fino, audit trails, checkpoints | Curva de aprendizaje, verbose |
| **CrewAI** | Roles + tareas (org organizacional, A2A protocol) | Prototipado rápido, intuitivo | Opaco al debug en flujos complejos |
| **AutoGen** | Conversación entre agentes | Group debates, consenso | Costos altos, modo mantenimiento (sucesor: Microsoft Agent Framework) |
| **Anthropic SDK + MCP** | Patrones simples, composables | Transparencia | Hay que construir más |
| **OpenAI Agents SDK** | Loop + tools nativos en API | Integración tight con GPT-5.x | Lock-in |

**4.6 Memoria del agente.** Short-term (ventana de contexto: Claude Opus 4.6 ofrece 1M tokens beta; GPT-5.4 hasta 1M); long-term (vector DB); episodic (logs de ejecuciones); procedural (skills aprendidas). Anthropic introdujo **"dreaming"** (Code with Claude 2026): agentes leen notas dejadas por otros agentes y consolidan patrones — meta-aprendizaje sobre el código.

**4.7 Model Context Protocol (MCP).** Estándar abierto de Anthropic que conecta agentes con herramientas/datos. Soportado por Claude Code, Codex, LangGraph, CrewAI.

**4.8 Riesgos específicos de agentes.** Prompt injection indirecta (#1 OWASP LLM Top 10 2025), excessive agency, cascading failures, cost runaway. Mitigación: sandboxing, human-in-the-loop, allowlists, presupuestos de tokens, dry-run/shadow mode.

---

### 5. Arquitectura de Visión por Computador

**5.1 De CNN a ViT (intuición).**
- **CNN**: filtros locales aprendidos y compuestos jerárquicamente; sesgo inductivo fuerte hacia estructura local.
- **ViT** (Dosovitskiy et al., ICLR 2021, *"An Image is Worth 16×16 Words: Transformers for Image Recognition at Scale"*): parte la imagen en parches 16×16, los linealiza, agrega positional embeddings, aplica Transformer encoder. Sin sesgo inductivo local; supera a CNN solo a escala suficiente de datos.
- **Híbridos**: Swin Transformer (atención por ventanas), ConvNeXt, CoAtNet.

**5.2 Detección de objetos: YOLO** (Redmon, Divvala, Girshick, Farhadi, *"You Only Look Once: Unified, Real-Time Object Detection"*, CVPR 2016). En vez de proponer regiones y clasificar (R-CNN), YOLO trata detección como **una sola regresión**. Evolución: YOLOv5 → v8 (Ultralytics, 2023) → v9, v10, v11. Review comprehensivo: Hussain, *IEEE Access* 2024, v1→v8.

**5.3 Segmentación.** Semantic (cada píxel → clase: U-Net, DeepLab), instance (cada píxel → instancia: Mask R-CNN), **SAM 2** (Meta 2024, zero-shot — relevante para relevamiento de planos, fotos de obra, BIM).

**5.4 Aplicaciones en construcción (literatura peer-reviewed).**
- Sabek, Gonzalez, Mei, Lee (CSCE 2024): YOLOv8 detección de vehículos de construcción en **Intel i3-1215U (12W TDP)**, 97% mejora en inferencia post-optimización.
- **GSO-YOLO** (arXiv 2407.00906, 2024): Global Stability Optimization YOLO para sitios complejos.
- **GeoIoU-SEA-YOLO** (Li et al., *PLOS One* 2025): detección de comportamientos inseguros.
- **CIB-SE-YOLOv8** (arXiv 2410.20699): detección EPP en tiempo real, 2.68M params vs 3M YOLOv8n.
- Reviews: Arshad et al. (*J Build Eng* 2023, 76:107049).

**5.5 Casos de aplicación AEC.**

| Aplicación | Modelo | Output |
|---|---|---|
| Detección EPP | YOLOv8/v11 | Alerta inmediata |
| Detección grietas | U-Net / DeepCrack | Mapa de severidad |
| Avance de obra | OpenSpace/Buildots (ViT+CNN) | % avance por trade |
| Conteo varillas/elementos | YOLO + counter | QTO automático |
| Inspección soldaduras | CNN clasificación | OK/NOK + tipo defecto |
| Reality capture → BIM | NeRF / Gaussian Splatting | Modelo 3D editable |

**5.6 Pipeline típico.** Captura (cámaras, drones, cascos, smartphone) → Pre-proceso (rectificación, denoising) → Modelo (YOLO/ViT/SAM, edge vs cloud) → Post-proceso (tracking DeepSORT, ByteTrack) → Alerta/Dashboard.

---

### 6. Playbook de Adopción de IA

Síntesis Andrew Ng + McKinsey Rewired + BCG AI@Scale + Gartner + AWS CAF for AI + Deloitte.

**Fase 0 — Diagnóstico (semanas 1-4):** assessment madurez (Gartner 5×6), inventario de datos, inventario de casos por (valor × factibilidad), línea base de KPIs.

**Fase 1 — Pilotos rápidos (meses 1-6):** 2-3 pilotos con criterios (ROI claro 6-12m, datos disponibles, owner de negocio comprometido). Andrew Ng recomienda elegir los que ganen momentum interno, no necesariamente los de mayor valor.

**Fase 2 — Equipo y capacidades (meses 3-12):** AI/ML CoE o Tiger team (PM IA + ML eng + Data eng + Designer + Domain expert). Capacitación 3 niveles (ejecutivo 4h, business user 1-2 días, técnico semanas).

**Fase 3 — Estrategia (meses 6-18):** definir tesis (reducción de costo / diferenciador / nuevo modelo). McKinsey 2025: rediseño de workflows es el factor con **mayor correlación con impacto EBIT**, pero solo el **21%** lo hace.

**Fase 4 — Escalado y plataforma (meses 12-24+):** MLOps/LLMOps, plataforma reusable (feature store, prompt registry, vector DB compartida, observabilidad).

**Fase 5 — Gobernanza y comunicación:** alinear con ISO/IEC 42001. **47%** de organizaciones reportan al menos una consecuencia negativa de gen AI (McKinsey 2025).

**Antipatrones documentados.**
- "Soluciones buscando problemas".
- PoCs eternos (cuello de botella Stage 2→3 Gartner).
- Layer-on en vez de rediseño (80% de organizaciones agrega IA encima de procesos legacy).
- CEO ausente (CEO involucrado correlaciona con mayor impacto EBIT).

---

### 7. Métricas de ROI

**7.1 Realidad cruda 2024-2026.**
- **McKinsey nov-2024 (n=1,491)**: *"More than 80 percent of respondents say their organizations aren't seeing a tangible impact on enterprise-level EBIT from their use of gen AI. Seventeen percent of respondents say 5 percent or more of their organization's EBIT in the past 12 months is attributable to the use of gen AI"*.
- **McKinsey nov-2025 (n=1,993)**: *"Thirty-nine percent of respondents attribute any level of EBIT impact to AI, and most of those respondents say that less than 5 percent of their organization's EBIT is attributable to AI use"*.
- **IDC/Microsoft InfoBrief #US52699124 (nov 2024)**: *"For every $1 a company invests in generative AI, the ROI is $3.7x. The top leaders using generative AI are realizing an ROI of $10.3"* (estudio vendor-sponsored — usar con cautela).
- **McKinsey early-2024**: *"Forty-two percent of these high performers say more than 20 percent of their EBIT is attributable to their use of nongenerative, analytical AI"*.
- **McKinsey Global Institute jun-2023**: gen AI podría agregar **USD 2.6T–4.4T anuales** en los 63 casos analizados; total con productividad de knowledge work USD 6.1T–7.9T.
- **Brynjolfsson, Li, Raymond, NBER 31161 / QJE 2025** (n=5,179 customer-service agents): *"Access to the tool increases productivity, as measured by issues resolved per hour, by 14% on average, including a 34% improvement for novice and low-skilled workers but with minimal impact on experienced and highly skilled workers"*. Adicionalmente: requests to manager **−25%**.
- **Deloitte 2025 EU/ME (n=1,854)**: payback típico **2-4 años**, 3-4× más largo que despliegues de tech convencional (7-12 meses); solo ~6% logra payback <1 año.
- **BCG 2024**: solo el **4%** tiene capacidades cutting-edge y captura valor consistente.

**7.2 Framework de medición.**

ROI = (Valor − Costo total) / Costo total

*Valor (4 categorías)*: productividad, revenue uplift, risk reduction, strategic optionality.
*Costo TCO (6 categorías)*: modelo/inferencia, infraestructura, datos, personas, riesgo/compliance, adopción.

**7.3 KPIs por capa.**

| Capa | KPI ejemplo |
|---|---|
| Modelo | Latencia p50/p95, costo/respuesta, tokens/respuesta, accuracy/F1, hallucination rate |
| Producto | DAU/MAU del feature IA, retention, NPS específico |
| Operacional | Tiempo de ciclo, tasa de error, tasa de revisión humana |
| Negocio | EBIT atribuible, revenue uplift, costo evitado, payback |
| Cultura | % empleados que usan IA semanalmente, NPS interno |

**7.4 Métricas específicas AEC verificadas.**

| Caso | Métrica antes | Métrica con IA | Fuente |
|---|---|---|---|
| QTO con Togal.AI | 2 semanas / 30 pisos | 48 h (Total Flooring) | Togal.AI blog |
| Site planning TestFit | 15 modelos / USD 10k | 37 modelos / USD 10k | TestFit Site Solver |
| Programación ALICE | Cronograma manual | −17% duración / −14% labor | ALICE blog |
| Site safety Buildots | Recorridos manuales | −4.3% rework / 4 semanas evitadas (Intel) | Buildots case study |
| HVAC Hank/Royal London | Operación reactiva | 708% ROI / −59% energía | JLL Insights |

---

### 8. Riesgos, Gobernanza y Seguridad

**8.1 NIST AI RMF 1.0** (Tabassi 2023, NIST AI 100-1). Marco voluntario, sector-agnóstico, cuatro funciones:
- **GOVERN**: políticas, roles, cultura, supply chain.
- **MAP**: contexto, propósito, partes interesadas, impactos.
- **MEASURE**: TEVV (Test, Evaluation, Verification, Validation), métricas de trustworthiness.
- **MANAGE**: priorización de riesgos, respuesta, monitoreo post-deployment.

Siete características de IA confiable: valid & reliable, safe, secure & resilient, accountable & transparent, explainable & interpretable, privacy-enhanced, fair (with harmful bias managed). Update **NIST AI 600-1** (jul-2024): Generative AI Profile.

**8.2 ISO/IEC 42001:2023 — AI Management System (AIMS).** Primer estándar **certificable** internacional. HLS compatible con ISO 9001, 27001. Plan-Do-Check-Act. Cubre política de IA, evaluación de impacto, ciclo de vida, supervisión de terceros, controles del Anexo A.

**8.3 EU AI Act (Reg. UE 2024/1689).** Entró en vigor **1-ago-2024**. Aplicable plenamente **2-ago-2026** (extensiones a 2027-2028 para alto riesgo embebido). Cuatro niveles de riesgo:
- **Inaceptable** (prohibido, Art. 5; 8 prácticas).
- **Alto riesgo** (Annex III): RRHH, infra crítica, educación, justicia. Conformity assessment + registro EU + gestión de riesgo + oversight humano.
- **Riesgo de transparencia limitado** (Art. 50): chatbots, deepfakes deben declararse.
- **Mínimo**: sin obligaciones.

**GPAI**: obligaciones desde 2-ago-2025. Si riesgo sistémico: evaluaciones, adversarial testing, reportes de incidentes, ciberseguridad.
**Sanciones**: hasta **€35M o 7% del facturado global**.

**8.4 OWASP Top 10 for LLM Applications 2025.**

| # | Riesgo |
|---|---|
| LLM01 | **Prompt Injection** (#1) |
| LLM02 | Sensitive Information Disclosure |
| LLM03 | Supply Chain |
| LLM04 | Data and Model Poisoning |
| LLM05 | Improper Output Handling |
| LLM06 | Excessive Agency |
| LLM07 | System Prompt Leakage |
| LLM08 | Vector and Embedding Weaknesses |
| LLM09 | Misinformation |
| LLM10 | Unbounded Consumption |

OWASP también publicó un **Top 10 separado para Agentic AI** en 2025.

**8.5 Otros marcos.** OECD AI Principles (2019), Council of Europe Framework Convention on AI (firmada por EU 5-sep-2024 — primer tratado vinculante), ISO/IEC 23894 (gestión de riesgo IA), ISO/IEC 23053 (framework ML), ISO/IEC 5338 (ciclo de vida), GDPR, LGPD (Brasil), LFPDPPP (México), Ley 29733 (Perú).

**8.6 Responsible AI Checklist mínimo.** Privacy impact assessment / DPIA; Fundamental Rights Impact Assessment (FRIA) si alto riesgo; data lineage y model card; logging y auditabilidad; human-in-the-loop en decisiones críticas; red-teaming periódico; plan de incident response IA; bias testing pre-release.

---

### 9. Stack Tecnológico

**9.1 Stack completo de IA/ML.**

| Capa | Opciones |
|---|---|
| **Foundation Models / API** | OpenAI (GPT-5.x, Codex), Anthropic (Claude Opus/Sonnet/Haiku 4.x), Google (Gemini), Meta (Llama 3/4), Mistral, Cohere, DeepSeek, Qwen |
| **Modelos abiertos / self-host** | Llama 3/4, Mistral, Qwen, gpt-oss, Phi, DeepSeek-V3/R1, Falcon |
| **Inference serving** | vLLM, TGI, TensorRT-LLM, Ollama, LM Studio, Together, Groq, Fireworks |
| **Vector DBs** | Pinecone, Weaviate, Qdrant, Milvus/Zilliz, Chroma, pgvector, Turbopuffer, LanceDB |
| **Orchestration / Agents** | LangChain/LangGraph, LlamaIndex, CrewAI, AutoGen → Microsoft Agent Framework, OpenAI Agents SDK, Anthropic SDK, Haystack, Semantic Kernel |
| **Workflow automation** | n8n, Make, Zapier, Pipedream, Airflow, Prefect, Temporal |
| **RAG specialized** | LlamaIndex, Vectara, Cohere Coral, NotebookLM, Glean |
| **Prompt management** | Helicone, LangSmith, PromptLayer, Humanloop, PromptHub |
| **Eval / observability** | LangSmith, Langfuse, Weights & Biases, Arize, Braintrust, DeepEval, Confident AI |
| **Fine-tuning** | OpenAI FT API, Anthropic, Unsloth, Axolotl, HuggingFace TRL |
| **Feature store / data** | Feast, Tecton, dbt, Databricks, Snowflake, BigQuery |
| **MLOps** | MLflow, Kubeflow, Vertex AI, SageMaker, Azure ML |
| **Compute** | NVIDIA H100/H200/B200/GB200, AMD MI300, Google TPU, AWS Trainium |
| **Edge** | NVIDIA Jetson, Coral, Hailo, OpenVINO |
| **Visión** | YOLO (Ultralytics), Detectron2, MMDetection, SAM 2, HF Transformers |
| **3D / Diseño generativo AEC** | Autodesk Forma (ex-Spacemaker), TestFit, Hypar, ARCHITEChTURES, Maket, Finch3D |
| **Governance / Risk** | Credo AI, Holistic AI, Modelop, Fairly, Robust Intelligence |
| **Security LLM** | Lakera Guard, Protect AI, NVIDIA NeMo Guardrails, AWS Bedrock Guardrails |

**9.2 Bases vectoriales comparadas.**

| Base | Tipo | Fortalezas | Trade-offs |
|---|---|---|---|
| **Pinecone** | Managed | Más fácil, sub-100ms p95 | Costo a escala, no self-host |
| **Qdrant** | OSS + cloud (Rust) | Mejor filtered search, eficiencia | Ecosistema más joven |
| **Weaviate** | OSS + cloud | Hybrid search nativo, módulos vectorización | Pesado >100M vectores |
| **Milvus / Zilliz** | OSS + cloud | Billones de vectores, GPU | Complejidad operacional |
| **pgvector** | Postgres ext | Vectores + datos transaccionales | Límite práctico ~10M |
| **Chroma** | OSS Python-first | DX excelente para prototipos | No production-scale |

Mercado proyectado: **USD 4.3B a 2028**.

**9.3 Stack de desarrollo web moderno (relevante para AECODE).**

| Capa | Recomendado 2025-2026 |
|---|---|
| **Frontend** | Next.js 15 (React 19), Astro, SvelteKit, Remix |
| **Styling** | Tailwind CSS v4, shadcn/ui, Radix UI |
| **State / forms** | TanStack Query, Zustand, react-hook-form, Zod |
| **Backend / API** | Next.js server actions, tRPC, Hono, FastAPI, NestJS |
| **DB** | Postgres (Supabase, Neon), MySQL (PlanetScale), MongoDB |
| **ORM** | Drizzle, Prisma, Kysely |
| **Auth** | Clerk, Auth.js, Supabase Auth, Better-Auth |
| **Payments** | Stripe, Lemon Squeezy, Paddle |
| **Hosting** | Vercel, Cloudflare Workers, Railway, Fly.io, AWS Amplify |
| **AI SDK** | Vercel AI SDK, LangChain.js, OpenAI/Anthropic SDKs |
| **Observability** | Sentry, PostHog, Datadog, Axiom |
| **Tests** | Vitest, Playwright, Cypress |
| **CMS** | Sanity, Contentlayer, Payload, Strapi |
| **Email** | Resend, Loops, Postmark |
| **Realtime** | Pusher, Ably, Supabase Realtime, Liveblocks |
| **Mobile** | React Native + Expo, Flutter |
| **IaC** | Docker, Kubernetes, Terraform, Pulumi |
| **CI/CD** | GitHub Actions, Vercel deploys, Turborepo |

---

### 10. Roadmap de IA para GEN+

Horizonte 18-24 meses.

**Trimestre 1 — Cimientos.** Assessment madurez (Gartner 5×6). 3 verticales de producto: (a) QTO automatizado + análisis de planos; (b) site monitoring con CV; (c) diseño generativo conceptual. Stack base: Claude Opus 4.6 + GPT-5.x; Qdrant self-hosted o Pinecone; LangGraph; n8n. ISO/IEC 42001 readiness assessment. Repositorio de prompts versionado (LangSmith). AECODE como canal go-to-market y fuente de talento.

**Trimestre 2 — MVP.** *GEN+ TakeoffAI* (clon especializado de Togal.AI para LATAM con planos en español y normas locales). *GEN+ SiteVision* (OpenSpace-like con YOLOv11 entrenado en datasets latinoamericanos). *GEN+ DesignSpark* (massing generativo + soleamiento + cumplimiento RNE Perú, NTC México vía RAG). 5 pilotos con clientes ancla.

**Trimestre 3 — Escalado y plataforma.** GEN+ AI Hub (auth, billing, prompt registry, vector DB compartida, observabilidad). Marketplace de modelos verticales (estructuras, MEP, fachadas). Integraciones Revit/Rhino/SketchUp/Bluebeam. Primer caso de éxito documentado con métricas auditadas.

**Trimestre 4 — Comercialización LATAM.** Pricing uso + suscripción. Programa de partners. Certificación **ISO/IEC 42001** (diferenciador en bids). Levantamiento Serie A (USD 3-8M).

**Trimestres 5-8.** Agentes verticales (Estructuras-Agent, MEP-Agent, Costos-Agent). Marketplace interno AECODE monetizando templates/prompts/modelos. Expansión México, Colombia, Chile, España. R&D: PINNs para análisis estructural, NeRF/Gaussian Splatting para reality capture.

**KPIs Norte:** ARR USD 1M año-1, USD 5M año-2; 50 clientes pagantes año-1; NPS >50; 30% del código producido por agentes interno; 95% ahorro tiempo QTO vs baseline cliente.

---

### 11. Prompts Base Reutilizables

**11.1 Principios** (Anthropic + OpenAI + Google + papers).
1. Claridad ante todo.
2. Estructura con XML/Markdown (Claude especialmente).
3. Few-shot examples mejoran consistencia.
4. Chain-of-thought: *"Let's think step by step"* (Kojima et al. 2022) o `<thinking>` tags.
5. Definir rol, contexto, objetivo, formato, restricciones.
6. Iterar empíricamente.

**11.2 Template universal (Sistema).**
```
ROLE: Eres [rol específico, ej. "ingeniero estructural senior con 20 años en zonas sísmicas"].

OBJETIVO: [una frase, accionable y medible].

CONTEXTO:
- Cliente / proyecto: [...]
- Restricciones: [tiempo, presupuesto, normativa, datos disponibles]
- Stakeholders: [...]

ENTRADA: Recibirás [tipo] en formato [JSON/markdown/...].

PROCESO (piensa paso a paso entre <thinking></thinking>):
1. Analiza [...]
2. Considera [...]
3. Verifica [...]

SALIDA (estricta):
<output>
  <resumen>...</resumen>
  <razonamiento>...</razonamiento>
  <recomendacion>...</recomendacion>
  <riesgos>...</riesgos>
  <fuentes>...</fuentes>
</output>

REGLAS:
- Si falta información, pregunta antes de inventar.
- Cita fuentes verificables.
- No uses jerga sin definirla.
- Si excede tu conocimiento, dilo explícitamente.
```

**11.3 Prompt: Revisión de plano arquitectónico.**
```
ROLE: Revisor BIM senior especializado en cumplimiento normativo LATAM.
OBJETIVO: Identificar incumplimientos del plano vs el reglamento aplicable.
ENTRADA: Imagen + jurisdicción (ej. "RNE Perú, Norma A.010").
PROCESO:
<thinking>
1. Extrae dimensiones críticas (pasillos, escaleras, vanos, retiros).
2. Compara contra mínimos del reglamento.
3. Lista incumplimientos con cita exacta del artículo.
</thinking>
SALIDA (JSON):
{
  "incumplimientos": [
    {"elemento": "...", "valor_medido": "...", "valor_requerido": "...", "articulo": "...", "severidad": "alta|media|baja"}
  ],
  "observaciones": "...",
  "confianza": 0.0-1.0
}
```

**11.4 Prompt: Estimación rápida QTO.**
```
ROLE: Estimador senior de obra civil.
OBJETIVO: Generar takeoff preliminar a partir de descripción.
ENTRADA: Descripción + área + tipo de obra + ubicación.
FEW-SHOT: [3 ejemplos históricos en JSON]
SALIDA: Tabla partida/unidad/cantidad/precio_unitario/subtotal + supuestos.
REGLA: Marca "[VERIFICAR]" toda cantidad con incertidumbre >15%.
```

**11.5 Prompt: Agente de soporte AECODE.**
```
ROLE: Tutor experto en BIM/IA para profesionales LATAM hispanohablantes.
CONTEXTO: Perfil del miembro [novato|intermedio|avanzado] en [Revit|Dynamo|Python|IA].
OBJETIVO: Responder con profundidad mínima necesaria; nunca alucines API ni código.
HERRAMIENTAS:
- search_aecode_kb(query)
- search_docs(producto, query)
- run_code_sandbox(lenguaje, código)
PATRÓN: ReAct (Thought → Action → Observation → ... → Answer).
SALIDA: Respuesta + 2-3 recursos AECODE + reto opcional.
```

**11.6 Prompt: Propuesta comercial.**
```
ROLE: Director comercial AEC + redactor B2B.
OBJETIVO: Convertir brief en propuesta 1-2 páginas.
ENTRADA: Brief del cliente.
PROCESO:
1. Extrae problema, alcance, restricciones, criterio de éxito.
2. Mapea contra servicios GEN+ (provided en <catalog>).
3. Genera propuesta: contexto, solución, fases, entregables, equipo, inversión, ROI estimado.
SALIDA: Markdown, tono YC/a16z (claro, directo, sin fluff), 600-900 palabras.
```

**11.7 Patrones avanzados.** Constitutional AI prompting (revisar contra principios), Self-consistency (votar entre N muestreos), Tree-of-Thoughts (BFS sobre ramas de razonamiento), Multishot + `<thinking>` (Claude 4.x).

---

### 12. AECODE como Learning Operating System

**12.1 Concepto.** Un Learning OS es una infraestructura de aprendizaje continuo que combina contenido + comunidad + herramientas + datos + IA. No es Udemy con foro; es un sistema operativo con módulos intercambiables, APIs, eventos y telemetría.

**12.2 Capas.**

| Capa | Componente |
|---|---|
| **Identidad** | SSO, perfil con skills mapeados |
| **Contenido** | Cursos, micro-learnings, papers, podcasts, videos |
| **Comunidad** | Discord/Slack, foros, eventos, mentorías |
| **AI Hub** | Bots verticales (BIM-bot, Revit-bot, Estructura-bot, Carrera-bot) |
| **Herramientas** | Sandboxes (Revit web, Python notebooks), datasets |
| **Eventos** | Summits (AI Construction Summit), workshops, hackathons |
| **Marketplace** | Templates, prompts, plugins, jobs |
| **Telemetría** | Learning analytics, skill gaps, recomendaciones |
| **Certificación** | Badges verificables (Open Badges 3.0, microcredentials) |
| **API** | Externalizar contenido/bots a partners corporativos |

**12.3 Modelo de negocio.** B2C freemium + suscripción Pro (AI Hub, eventos premium, certificaciones). B2B corporate (licencias capacitación). Marketplace fee. Patrocinios de eventos. Data product ("State of AI in LATAM AEC" anual).

**12.4 Cómo IA potencia AECODE.** Tutor personalizado, generación de microcurriculum, Q&A 24/7 vía RAG, networking inteligente, moderación, producción de contenido, analítica predictiva de churn.

**12.5 KPIs.** WAU/MAU, retention 30/90/180d, time-to-first-aha-moment, course completion rate, AI Hub queries/usuario/día, RPAU, NPS, conversión free→pro.

---

### 13. Automatizaciones y n8n

**13.1 Por qué n8n.** Open source + self-host (compliance); 400+ integraciones nativas; nodos AI Agent + LangChain integrados; custom JS/Python; cost-effective vs Zapier; **34% del Fortune 500** lo usa.

**13.2 Patrón workflow vs agent.**
- **Workflow** (determinístico): pasos pre-definidos; auditable, predecible.
- **Agent** (dinámico): el LLM decide el siguiente paso usando tools; usar cuando el camino depende del caso.

**13.3 Catálogo de automatizaciones GEN+/AECODE.**

| Automatización | Trigger | Pasos | Valor |
|---|---|---|---|
| Lead intake AECODE | Form / WhatsApp | NLP intent → CRM → email personalizado → calendario | Conversión |
| Onboarding miembro | Signup | Slack welcome → DM tutor bot → onboarding | Activación |
| Triage RFI cliente GEN+ | Email | LLM clasifica → asigna a especialista → SLA tracking | Tiempo respuesta |
| QTO express | Upload PDF plano | OCR → LLM extrae → match precios → presupuesto | Cierre comercial |
| Reporte semanal obra | Schedule | API OpenSpace/Buildots → LLM resume → Slack/PDF | Comunicación |
| Auditoría prompts AECODE | Schedule | Pull logs → LLM evalúa → reporta drift | Calidad IA |
| Newsletter | Schedule | Curate noticias → LLM redacta → review → send | Marketing |
| Alertas safety | Webhook camera | YOLO → if alert → SMS supervisor + log | Seguridad |
| Procesamiento facturas | Email/folder | OCR → LLM extrae → conciliación → ERP | Finanzas |
| Soporte L1 cliente | Chat | RAG sobre docs → draft → human approval → send | Costo soporte |

**13.4 Guardrails obligatorios.** Confidence threshold; allowlist de acciones; dry-run/shadow mode primero; human approval para cara al cliente; audit log; rate limits y budget caps.

**13.5 Casos reales documentados.** Delivery Hero: **200 horas/mes** ahorradas con un solo workflow. Vodafone: **£2.2M** ahorrados en threat intelligence. Fullscript: meses de tiempo ahorrados.

---

### 14. Claude Code y Codex

**14.1 Claude Code (Anthropic).** Agente de codificación que vive en terminal/IDE. Lee la base de código, planifica cambios multi-archivo, ejecuta, prueba, comitea, abre PRs. Lanzado feb-2025, GA may-2025. Alcanzó **USD 1B run-rate revenue** en 6 meses post-lanzamiento. Modelos compatibles jun-2026: Claude Opus 4.6/4.8, Sonnet 4.6, Haiku 4.5. Disponible en Amazon Bedrock y Google Cloud Vertex AI.

*Capacidades clave.* Loop de 3 fases (gather context → take action → verify results). Sub-agentes / agent teams (Opus 4.6+). Plan mode + auto-approve mode. Sandboxing con `/sandbox`. Skills (markdown reutilizable). MCP servers. Compaction. "Dreaming" (Code with Claude 2026).

*Cifras públicas.* En Anthropic, la mayoría del código se escribe con Claude Code. 27% de tareas asistidas no se habrían intentado sin la herramienta (encuesta interna Huang et al. 2025). 93% de aprobaciones en auto-mode (Hughes 2026). Opus 4.6: highest score Terminal-Bench 2.0 y Humanity's Last Exam.

**14.2 OpenAI Codex (GPT-5.x).** Disponible en CLI, IDE extension, ChatGPT iOS, GitHub, desktop. Evolución: codex-1 (may-2025) → GPT-5-Codex (sep-2025, unifica local+cloud) → GPT-5.1-Codex-Max (nov-2025, compaction multi-context) → GPT-5.2-Codex (dic-2025) → GPT-5.3-Codex (2026, state-of-the-art SWE-Bench Pro y Terminal-Bench) → GPT-5.4/5.5 (2026, computer use nativo).

*Cifras.* 95% de ingenieros OpenAI usa Codex semanalmente, +70% PRs. GPT-5-Codex trabajó hasta 7h continuas en tareas complejas. 85% de OpenAI usa Codex semanalmente.

**14.3 Comparación.**

| Dimensión | Claude Code | Codex (GPT-5.x) |
|---|---|---|
| Modelo base | Opus/Sonnet/Haiku 4.x | GPT-5.x Codex variants |
| Entorno | Terminal + IDE + desktop | Terminal + IDE + cloud + iOS + GitHub |
| Sandboxing | `/sandbox` filesystem+network | Sandbox + configurable network |
| Multi-agent | Native (Opus 4.6+) | Multi-agent vía Skills/cloud |
| Context window | 1M (beta Opus 4.6) | 1M (GPT-5.4 beta) |
| Pricing | Claude Pro/Max + API | ChatGPT Plus/Pro/Business/Enterprise |
| Certificaciones | SOC 2 II, ISO 27001:2022, ISO/IEC 42001:2023, HIPAA, FedRAMP High | SOC 2, ISO 27001 |
| Diferenciador | Razonamiento profundo, planeación | Computer use nativo, ecosistema |

**14.4 Casos de uso GEN+.** Codegen scripts Dynamo/Grasshopper desde prompt natural; refactor scripts BIM legacy; generación plugins Revit/Rhino con tests; code review automatizado; migraciones (pyRevit → RevitPythonShell); automation glue (Forge API, Speckle); documentation auto.

---

### 15. AI Construction Summit y contexto sectorial

**15.1 Eventos de referencia.** AI Construction Summit / AI in Construction Summit; Digital Construction Week (Londres); Autodesk University; Bentley YII; BIM World Munich; AGC ConTech.

**15.2 Tendencias 2025-2026 confirmadas.**
- Mercado **AI in construction**: crecimiento **17.5% anual hasta 2030** (Digital Construction Week 2025).
- **46% del ConTech investment Q1 2025** fue AI: **USD 3.55B** en Q1 (AEC Hub).
- **BIM market USD 5.06B en 2024, CAGR 15.1%**.
- **Bluebeam AEC Technology Outlook 2025** (Hanover Research, 400+ managers AEC): *"Within the companies that are using AI, over 70% now allocating up to 25% of their tech budget to the technology"* — el 25% es el techo entre el 70%+ de firmas que ya usan IA, no un gasto promedio plano.
- **Bluebeam survey 2025** (1,000 AEC pros globales): **27%** usa IA en operaciones; **94%** de adoptantes planea aumentar uso (ASCE Civil Engineering Source).
- **Bluebeam AEC Technology Outlook 2026** (n=1,000+, jul-2025): **56% de respondientes afirma que la IA ayuda a compensar la escasez de mano de obra calificada** (GlobeNewswire 28-oct-2025).
- **Bluebeam Pasadena 400 firmas**: **74%** global usa IA en al menos una fase; **48%** diseño, **42%** planeación; **55%** la considera altamente importante.
- **BST Global AI + Data Insights 2025**: **77%** cree IA transformará modelo de negocio; solo **~20%** maduro/avanzado.
- **ABC (Associated Builders and Contractors)**, press release 24-ene-2025, *no AGC*: *"The construction industry will need to attract an estimated 439,000 net new workers in 2025 to meet anticipated demand for construction services"* — Anirban Basu, Chief Economist ABC.

**15.3 Casos faro.** Bechtel: 18,000 craft professionals, crecimiento esperado a 30,000. Skanska y Suffolk: alpha testers Smartvid.io/Newmetrix. Intel + Buildots (documentado en §3).

**15.4 Implicaciones GEN+/AECODE.**
- LATAM tiene ventana clara: adopción AEC <27% en mercados desarrollados, probablemente <10% en LATAM.
- Idioma español + normas locales = moat defendible vs Togal.AI, Buildots, Forma.
- Un AI Construction Summit LATAM (organizable por AECODE) sería diferenciador estratégico.
- Talent gap → educación → AECODE → certificaciones → empleabilidad.

---

### 16. Glosario de 150 Términos de IA

**A** — 1. A/B testing | 2. Accuracy | 3. Activation function (ReLU/GELU/SiLU) | 4. Agent: sistema que percibe, decide, actúa | 5. Agentic AI: paradigma donde el LLM dirige sus procesos y tools | 6. Alignment | 7. API | 8. Attention mechanism | 9. AutoGen (Microsoft, modo mantenimiento → MS Agent Framework) | 10. Autoencoder.

**B** — 11. Backpropagation | 12. BART (modelo seq2seq de Meta usado en RAG original) | 13. Batch | 14. Bayesian inference | 15. BERT (Transformer encoder-only) | 16. Bias | 17. BIM | 18. BLEU score.

**C** — 19. Chain-of-Thought (Wei et al. 2022) | 20. ChatGPT | 21. Claude | 22. Classification | 23. Clustering | 24. CNN | 25. Codex | 26. Compaction (resumir contexto para tareas largas — Claude Opus 4.6, GPT-5.1-Codex-Max) | 27. Computer vision | 28. Context window | 29. CrewAI | 30. Cross-entropy loss.

**D** — 31. Data drift | 32. Data labeling | 33. Decoder | 34. Deep learning | 35. DeepSeek | 36. Dense Passage Retrieval (DPR) | 37. Diffusion model | 38. Distillation | 39. Dropout.

**E** — 40. Edge AI | 41. Embedding | 42. Encoder | 43. Epoch | 44. EU AI Act (Reg. 2024/1689) | 45. Evaluator-Optimizer | 46. Explainability.

**F** — 47. F1 score | 48. Few-shot learning | 49. Fine-tuning | 50. Foundation model | 51. Function calling.

**G** — 52. GAN | 53. Gemini | 54. Generative AI | 55. GPT | 56. GPU (NVIDIA H100/H200/B200) | 57. GraphRAG (Microsoft) | 58. Grounding | 59. Guardrails.

**H** — 60. Hallucination | 61. HNSW (Hierarchical Navigable Small World) | 62. Human-in-the-loop | 63. Hyperparameter.

**I** — 64. Inference | 65. Instruction tuning | 66. IoT | 67. ISO/IEC 42001 (primer estándar certificable AIMS).

**K** — 68. Knowledge graph | 69. Knowledge distillation.

**L** — 70. LangChain | 71. LangGraph (graph-based, state-machine) | 72. Latency | 73. Llama | 74. LLM | 75. LLMOps | 76. LoRA | 77. Loss function.

**M** — 78. MCP (Model Context Protocol, Anthropic) | 79. Memory (short-term contexto, long-term vector DB, episódica) | 80. Mixture of Experts | 81. Mistral | 82. MLOps | 83. Model card | 84. Multi-modal | 85. Multi-agent system.

**N** — 86. NeRF (Neural Radiance Fields) | 87. NIST AI RMF | 88. NLP | 89. n8n.

**O** — 90. OCR | 91. OWASP (Top 10 LLM 2025) | 92. Overfitting.

**P** — 93. Parameter | 94. PEFT | 95. pgvector | 96. Pinecone | 97. Pre-training | 98. Precision | 99. Prompt engineering | 100. Prompt injection (LLM01 OWASP 2025).

**Q** — 101. Qdrant | 102. Quantization | 103. Quantity Takeoff (QTO) | 104. QLoRA.

**R** — 105. RAG (Lewis et al. 2020) | 106. Random Forest | 107. ReAct (Yao et al. 2023) | 108. Recall | 109. Reflexion (Shinn et al. 2023) | 110. Reinforcement Learning | 111. RLHF | 112. Regression.

**S** — 113. SAM (Segment Anything Model, Meta) | 114. Self-attention | 115. Semantic search | 116. Sequence-to-sequence | 117. SFT (Supervised Fine-Tuning) | 118. SLM (Small Language Model) | 119. Stable Diffusion | 120. System prompt.

**T** — 121. Temperature | 122. TestFit | 123. Tokenization | 124. Tool use / function calling | 125. Top-k / Top-p sampling | 126. Transfer learning | 127. Transformer (Vaswani et al. 2017) | 128. Tree-of-Thoughts.

**U** — 129. Underfitting | 130. UNet | 131. Unsupervised learning.

**V** — 132. Vector database | 133. Vibe coding | 134. ViT (Vision Transformer, Dosovitskiy et al. 2021) | 135. VLM (Vision-Language Model).

**W** — 136. Weights | 137. Weaviate | 138. Window function (Swin Transformer).

**X** — 139. XAI (Explainable AI) | 140. XGBoost.

**Y** — 141. YOLO (Redmon et al. 2016).

**Z** — 142. Zero-shot learning | 143. Zestimate (AVM de Zillow).

**Conceptos clave adicionales** — 144. AVM (Automated Valuation Model) | 145. Digital Twin | 146. MLflow / LangSmith / Langfuse (observabilidad LLMOps) | 147. PINN (Physics-Informed Neural Network) | 148. Gaussian Splatting (alternativa eficiente a NeRF) | 149. Constitutional AI (Anthropic) | 150. Agentic RAG (agente decide qué retrieves, cuándo, cómo combinar).

---

## Recommendations (staged, accionable)

**Horizonte 0-3 meses — Cimientos.**
1. **Evaluación de madurez Gartner 5×6** de GEN+ y AECODE; identificar la dimensión más débil y atacarla primero.
2. **Inventariar datos** (planos, modelos BIM, fotos de obra, contenido AECODE) — sin datos limpios no hay IA.
3. **Definir 2-3 pilotos GEN+** con ROI claro 6-12 meses: QTO automatizado + site monitoring + RFI triage.
4. **AECODE AI Hub MVP**: 3 bots verticales con RAG sobre contenido propio (BIM-bot, Revit-bot, Carrera-bot).
5. **Adoptar stack base**: Claude Opus 4.6 + GPT-5.x vía API; Qdrant; LangGraph; n8n; LangSmith para observabilidad.
**Umbral de cambio**: si <80% de pilotos alcanzan KPI a 90 días, congelar y rediseñar workflows antes de invertir más.

**Horizonte 3-9 meses — Producto y plataforma.**
6. **Lanzar GEN+ TakeoffAI v1** con 10 clientes ancla; meta: 50% ahorro de tiempo medido vs baseline cliente.
7. **GEN+ SiteVision v1** con YOLOv11 fine-tuned en datasets LATAM; meta: 90% recall en detección EPP.
8. **Iniciar ISO/IEC 42001 readiness**; certificación para fin de año-1 (diferenciador en RFPs).
9. **AECODE Learning OS v1**: identidad SSO + AI Hub + 5 bots + marketplace beta.
10. **Programa B2B AECODE**: licencias corporativas a 3 constructoras grandes LATAM como design partners.
**Umbral**: si ARR <USD 250k a fin de mes 9, replantear pricing/ICP.

**Horizonte 9-18 meses — Escalado.**
11. **Plataforma GEN+ AI Hub** unificada (auth, billing, prompt registry, observabilidad compartida).
12. **GEN+ DesignSpark v1** (massing generativo + cumplimiento normativo RNE/NTC vía RAG).
13. **Levantar Serie A** USD 3-8M con métricas auditadas; defender moat de español + normas locales.
14. **AI Construction Summit LATAM** como flagship event AECODE (1,000+ asistentes).
15. **Certificación ISO/IEC 42001** completa; publicar como insignia en website y bids.
**Umbral**: si NPS <40 o churn >5%/mes, pausa expansión geográfica.

**Horizonte 18-24 meses — LATAM y nuevos modelos.**
16. **Agentes verticales especializados** (Estructuras-Agent, MEP-Agent, Costos-Agent) en marketplace.
17. **Expansión** activa a México, Colombia, Chile, España.
18. **Data product anual**: *"State of AI in LATAM AEC"* como reporte premium AECODE.
19. **R&D**: pilotos PINNs para análisis estructural, NeRF/Gaussian Splatting para reality capture.
20. **Evaluación M&A**: adquirir 1-2 boutiques BIM/IA locales para acelerar territorio.

---

## Caveats

- **Cifras de ROI principalmente auto-reportadas**: la mayoría de números de McKinsey, BCG, Deloitte e IDC provienen de encuestas a ejecutivos, no de auditorías financieras. Usar como dirección estratégica, no como verdad financiera contable. El estudio peer-reviewed más sólido sigue siendo Brynjolfsson, Li, Raymond (NBER 31161 / *QJE* 2025).
- **Cifras vendor-reported en AEC**: las cifras de Spacemaker/Autodesk Forma (16% densidad, 50% productividad), Buildots (50% reducción demoras), TestFit (25k resultados/10s), Hank/JLL (708% ROI Royal London), LLumin (60% reducción breakdowns) provienen de los propios proveedores y no han sido independientemente auditadas. La excepción notable es Togal.AI cuyo 76% de ahorro de tiempo proviene de un estudio peer-reviewed de la Universidad de Kansas — aunque incluso allí el investigador era usuario primerizo de ambos softwares, lo que puede sesgar por curva de aprendizaje.
- **IDC ROI $3.5x / $3.7x**: ambos estudios son vendor-commissioned por Microsoft, basados en buckets de encuesta auto-reportados — usar con cautela y triangulación.
- **Velocidad del campo**: las cifras de modelos (Claude Opus 4.6/4.8, GPT-5.4/5.5/Codex variants) son del corte junio 2026 y cambian mensualmente. Los benchmarks son rebasados frecuentemente.
- **Regulación en transición**: el EU AI Act entra plenamente en aplicación 2-ago-2026 con obligaciones de alto riesgo extendidas hasta 2027-2028 (Digital Package on Simplification / "AI omnibus"). Verificar fechas exactas al diseñar compliance.
- **Contexto LATAM**: las recomendaciones asumen base de operación Perú/México — adaptar regulación local (LFPDPPP México, Ley 29733 Perú, LGPD Brasil) y conventions normativas (RNE Perú, NTC México, NCh Chile).
- **Talento**: el número 439,000 trabajadores construcción 2025 es de **ABC (Associated Builders and Contractors), no AGC** — error frecuente en literatura secundaria; cita primaria es Anirban Basu, Chief Economist ABC, press release 24-ene-2025 (GlobeNewswire).
- **AutoGen en modo mantenimiento**: Microsoft ha movido AutoGen a maintenance mode favoreciendo Microsoft Agent Framework — evaluar antes de adoptar para nuevos proyectos.
- **OWASP Top 10 LLM 2025 vs Agentic AI Top 10**: son listas separadas; los sistemas agénticos amplifican muchos riesgos del Top 10 base, no los reemplazan.

---

## Bibliografía clave (selección verificada)

**Papers y estándares**
- Lewis, P., et al. (2020). *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks*. NeurIPS. arXiv:2005.11401.
- Yao, S., et al. (2023). *ReAct: Synergizing Reasoning and Acting in Language Models*. ICLR. arXiv:2210.03629.
- Dosovitskiy, A., et al. (2021). *An Image is Worth 16×16 Words: Transformers for Image Recognition at Scale*. ICLR.
- Redmon, J., Divvala, S., Girshick, R., Farhadi, A. (2016). *You Only Look Once: Unified, Real-Time Object Detection*. CVPR.
- Vaswani, A., et al. (2017). *Attention Is All You Need*. NeurIPS.
- Brynjolfsson, E., Li, D., Raymond, L. (2023). *Generative AI at Work*. NBER WP 31161; QJE vol. 140(2), 2025.
- Shinn, N., et al. (2023). *Reflexion: Language Agents with Verbal Reinforcement Learning*. arXiv:2303.11366.
- Sabek, M., Gonzalez, V., Mei, Q., Lee, G. (2024). *Enhancing Construction Site Safety and Efficiency with YOLOv8-Based Computer Vision Model*. CSCE 2024.
- Hussain, M. (2024). *YOLOv1 to v8: Unveiling Each Variant — A Comprehensive Review of YOLO*. IEEE Access, 12:42816-33.
- Arshad, S., et al. (2023). *Computer vision and IoT research landscape for health and safety management on construction sites*. J Build Eng, 76:107049.
- Tabassi, E. (2023). *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*. NIST AI 100-1.
- NIST (2024). *Generative AI Profile*. NIST AI 600-1.
- ISO/IEC (2023). *ISO/IEC 42001:2023 — Information technology — Artificial intelligence — Management system*.
- European Union (2024). *Regulation (EU) 2024/1689 — Artificial Intelligence Act*. Official Journal, 12-jul-2024.
- OWASP (2025). *OWASP Top 10 for Large Language Model Applications 2025*.

**Reportes de industria**
- McKinsey & Company (nov-2024 y nov-2025). *The State of AI* — encuestas globales 1,491 y 1,993 respondientes.
- McKinsey Global Institute (jun-2023). *The economic potential of generative AI: The next productivity frontier*.
- IDC (nov-2024). *The Business Opportunity of AI*, InfoBrief #US52699124 sponsored by Microsoft.
- BCG (oct-2024). *Where's the Value in AI?* n=1,000 CxOs.
- Deloitte (2025). *AI ROI: The paradox of rising investment and elusive returns*.
- Gartner. *AI Maturity Model and AI Roadmap Toolkit*.
- LXT. *The Path to AI Maturity* (encuesta basada en Gartner).
- Bluebeam (oct-2024 y oct-2025). *AEC Technology Outlook 2025 / 2026*.
- BST Global (2025). *AI + Data Insights 2025: Global AEC Industry Report*.
- AEC Hub (2025). *AEC Tech Research Report*.
- JLL Research (2024-2025). *AI and the evolution of proptech*; *Future of Work Survey 2024*.

**Recursos técnicos**
- Anthropic (dic-2024). Schluntz, E., Zhang, B. *Building Effective Agents*. anthropic.com/research/building-effective-agents.
- Anthropic. *Building Effective AI Agents: Architecture Patterns and Implementation Frameworks*.
- OpenAI (2025-2026). System cards y blog posts de Codex (codex-1, GPT-5-Codex, GPT-5.1-Codex-Max, GPT-5.2/5.3-Codex, GPT-5.4/5.5).
- Anthropic (2025-2026). Documentación Claude Code (code.claude.com/docs); MIT AI Agent Index (2025).

**Casos y datos referenciados**
- Buildots: case studies Intel, Mace Airport en buildots.com/case-studies.
- OpenSpace: openspace.ai/products/capture.
- Newmetrix/Oracle: oracle.com/corporate/acquisitions/newmetrix; ENR coverage.
- ALICE Technologies: blog.alicetechnologies.com (data center 63 días, Suffolk 42 días, Build Group 10%).
- nPlan: nplan.io; case studies HS2 (scheduletraininghub.com); Global Construction Review.
- Togal.AI: togal.ai/case-study (Universidad de Kansas, Coastal Construction).
- Autodesk: PR Newswire acquisition Spacemaker nov-2020; Form 10-K FY2022 (SEC).
- TestFit: testfit.io news/products; AEC Business interview (Clifton Harness); AEC+Tech.
- Hypar: AEC+Tech *Top Generative Design Tools for AEC*.
- JLL Falcon: PR Newswire 29-oct-2024.
- CBRE Smart FM: cbre.com/press-releases/cbre-ai-powered-facilities-management-solutions-reaches-1-billion-sf-of-deployment, 22-ago-2023.
- Hank / Royal London: JLL Insights *AI and the evolution of proptech*.
- Zillow Zestimate: zillow.com/zestimate.
- ABC 439,000 workers 2025: Associated Builders and Contractors press release, 24-ene-2025 (GlobeNewswire), Anirban Basu, Chief Economist.
- Bluebeam 2026: GlobeNewswire 28-oct-2025 (*56% AI helps offset skilled labor shortages*).
- n8n cases: Delivery Hero, Vodafone (n8n.io/enterprise).

---

*Fin de la documentación maestra. Documento vivo: actualizar trimestralmente conforme evolucionen modelos, regulación y casos de referencia. Para feedback, iteración y profundizaciones específicas, dirigirse al AI Hub de AECODE.*