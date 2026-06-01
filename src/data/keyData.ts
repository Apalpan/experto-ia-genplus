export type AdoptionMetric = {
  id: string;
  value: string;
  label: string;
  source: string;
  sourceUrl: string;
  signal: string;
  implication: string;
};

export type ImplementationSignal = {
  id: string;
  title: string;
  simple: string;
  technical: string;
  executive: string;
};

export type ToolLayer = {
  id: string;
  layer: string;
  examples: string[];
  useWhen: string;
  implementationRisk: string;
  decisionRule: string;
};

export type PlatziInsight = {
  id: string;
  title: string;
  source: string;
  sourceUrl: string;
  observation: string;
  genplusTakeaway: string;
};

export type ImplementationStep = {
  id: string;
  phase: string;
  title: string;
  goal: string;
  evidence: string;
  failureMode: string;
};

export const adoptionMetrics: AdoptionMetric[] = [
  {
    id: "org-ai-88",
    value: "88%",
    label: "de organizaciones reportan uso regular de IA en al menos una función",
    source: "McKinsey State of AI 2025 / Stanford AI Index 2026",
    sourceUrl: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
    signal: "La adopción ya es mainstream; la diferencia competitiva se mueve hacia integración, datos, gobierno y rediseño de procesos.",
    implication:
      "Para GEN+ esto significa que vender IA como novedad pierde fuerza. La propuesta debe ser productividad medible, trazabilidad y casos aplicados a AEC.",
  },
  {
    id: "genai-business-70",
    value: "70%",
    label: "de organizaciones usan IA generativa en al menos una función de negocio",
    source: "Stanford AI Index 2026, capítulo Economy",
    sourceUrl: "https://hai.stanford.edu/ai-index/2026-ai-index-report/economy",
    signal: "La IA generativa pasó de experimento a capacidad transversal, pero no necesariamente a sistema operativo de negocio.",
    implication:
      "El valor está en convertir casos sueltos en flujos: intake, contexto, respuesta, revisión humana, acción, evidencia y mejora.",
  },
  {
    id: "agentic-62",
    value: "62%",
    label: "de encuestados dicen que sus organizaciones experimentan o escalan agentes IA",
    source: "McKinsey State of AI 2025",
    sourceUrl: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
    signal: "Los agentes están entrando rápido, pero la mayoría sigue en piloto o escala limitada.",
    implication:
      "La oportunidad no es crear bots autónomos sin control; es diseñar agentes con herramientas, estado, permisos, trazas y aprobación humana.",
  },
  {
    id: "agent-scaling-23",
    value: "23%",
    label: "de organizaciones escalan algún sistema agentic en la empresa",
    source: "McKinsey State of AI 2025",
    sourceUrl: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
    signal: "Hay interés alto, pero producción real todavía es limitada y concentrada.",
    implication:
      "GEN+ debe enseñar agentic AI desde arquitectura y operación: tool use, logs, rollback, seguridad y KPI por flujo.",
  },
  {
    id: "enterprise-ebit-39",
    value: "39%",
    label: "reporta algún impacto de IA en EBIT a nivel empresa",
    source: "McKinsey State of AI 2025",
    sourceUrl: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
    signal: "El uso es amplio, pero el impacto financiero enterprise todavía no está capturado por la mayoría.",
    implication:
      "La pregunta correcta no es cuántas herramientas usa una empresa, sino qué flujo cambió, qué costo bajó y qué decisión mejoró.",
  },
  {
    id: "high-performers-6",
    value: "6%",
    label: "califica como high performer con impacto significativo y al menos 5% de EBIT atribuible a IA",
    source: "McKinsey State of AI 2025",
    sourceUrl: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
    signal: "La brecha real está entre adopción superficial e implementación transformadora.",
    implication:
      "Para ser experto hay que dominar rediseño de workflows, ownership ejecutivo, datos, talento, medición y cambio cultural.",
  },
  {
    id: "consumer-adoption-53",
    value: "53%",
    label: "de adopción poblacional de IA generativa en tres años",
    source: "Stanford AI Index 2026",
    sourceUrl: "https://hai.stanford.edu/ai-index/2026-ai-index-report/economy",
    signal: "La adopción social de gen AI avanzó más rápido que PC e internet en sus etapas iniciales.",
    implication:
      "El usuario ya llega con experiencia básica. El entrenamiento debe llevarlo de uso casual a criterio profesional y construcción de sistemas.",
  },
  {
    id: "consumer-surplus-172b",
    value: "$172B",
    label: "de excedente anual estimado para consumidores de IA generativa en EE. UU.",
    source: "Stanford AI Index 2026",
    sourceUrl: "https://hai.stanford.edu/ai-index/2026-ai-index-report/economy",
    signal: "El valor percibido por usuarios crece rápido, incluso cuando muchas herramientas son gratuitas o baratas.",
    implication:
      "El precio de la herramienta no refleja el valor de productividad. El negocio está en empaquetar workflows, datos y resultados.",
  },
  {
    id: "openai-workers-value",
    value: "75%",
    label: "de trabajadores encuestados reporta mejora en velocidad o calidad al usar IA",
    source: "OpenAI State of Enterprise AI 2025",
    sourceUrl: "https://openai.com/index/the-state-of-enterprise-ai-2025-report/",
    signal: "Los beneficios percibidos aparecen cuando la IA se integra a tareas reales, no solo como curiosidad.",
    implication:
      "El entrenador debe enseñar prompts, pero también procesos repetibles, plantillas, revisión humana y medición de calidad.",
  },
  {
    id: "dora-dev-90",
    value: "90%",
    label: "de profesionales de software encuestados usa IA en su flujo",
    source: "Google DORA 2025",
    sourceUrl: "https://blog.google/innovation-and-ai/technology/developers-tools/dora-report-2025/",
    signal: "En desarrollo de software, IA ya es herramienta casi universal.",
    implication:
      "El diferencial técnico ya no es usar copilotos; es arquitectura, testing, revisión, seguridad, entrega y ownership del código generado.",
  },
  {
    id: "stackoverflow-trust",
    value: "46%",
    label: "de desarrolladores desconfía activamente de la exactitud de herramientas IA",
    source: "Stack Overflow Developer Survey 2025",
    sourceUrl: "https://survey.stackoverflow.co/2025/ai",
    signal: "La adopción convive con desconfianza. El humano sigue siendo responsable de verificar.",
    implication:
      "La formación avanzada debe incluir evaluación, fuentes, revisión de código, threat modeling y criterio de cuándo no usar IA.",
  },
  {
    id: "responsible-ai-incidents",
    value: "362",
    label: "incidentes IA documentados en 2025 frente a 233 en 2024",
    source: "Stanford AI Index 2026, Responsible AI",
    sourceUrl: "https://hai.stanford.edu/ai-index/2026-ai-index-report/responsible-ai",
    signal: "La superficie de riesgo crece al mismo tiempo que crecen capacidades y despliegues.",
    implication:
      "Gobernanza no es burocracia: es el sistema de frenos, trazas y criterios que permite escalar sin perder control.",
  },
];

export const implementationSignals: ImplementationSignal[] = [
  {
    id: "adoption-vs-impact",
    title: "Adopción no es impacto",
    simple:
      "Que una empresa use IA no significa que haya cambiado su productividad. Es como comprar maquinaria sin rediseñar la línea de producción.",
    technical:
      "El impacto aparece cuando el modelo se integra con datos, herramientas, permisos, interfaz, medición, feedback y cambios de proceso.",
    executive:
      "Mide flujos transformados, horas recuperadas, defectos reducidos, decisiones aceleradas y margen capturado, no solo licencias activas.",
  },
  {
    id: "agents-need-operations",
    title: "Los agentes requieren operación, no solo prompts",
    simple:
      "Un agente es un colaborador digital con herramientas. Si no tiene reglas, supervisión y bitácora, se vuelve riesgoso.",
    technical:
      "La arquitectura agentic necesita estado persistente, tool schemas, políticas de permisos, colas, retries, tracing, evaluaciones y human-in-the-loop.",
    executive:
      "Empieza con agentes en tareas recuperables y medibles: investigación, soporte interno, clasificación, seguimiento y documentación.",
  },
  {
    id: "data-readiness",
    title: "La calidad del dato limita el valor de IA",
    simple:
      "Un modelo excelente con documentos desordenados responde como un experto buscando en una bodega sin etiquetas.",
    technical:
      "RAG exige extracción confiable, chunking, embeddings, metadata, permisos, deduplicación, reranking, citas y evals de recuperación.",
    executive:
      "Antes de comprar más herramientas, ordena fuentes, ownership, vigencia, accesos y criterios de verdad.",
  },
  {
    id: "human-learning",
    title: "IA acelera, pero también puede debilitar aprendizaje",
    simple:
      "Usar IA para saltarse el esfuerzo es como pedirle a alguien que entrene por ti: el resultado sale, pero tu músculo no crece.",
    technical:
      "La dependencia sin práctica reduce comprensión, debugging, criterio de abstracción y capacidad de evaluar outputs.",
    executive:
      "El entrenamiento debe alternar IA asistida con explicación, práctica manual, revisión, aplicación real y evaluación.",
  },
  {
    id: "tool-sprawl",
    title: "El riesgo invisible es la dispersión de herramientas",
    simple:
      "Tener muchas apps IA sin arquitectura es como tener diez asistentes con diez libretas distintas y ninguna verdad compartida.",
    technical:
      "El tool sprawl produce duplicidad, fuga de datos, costos no trazados, prompts no versionados, shadow IT y baja auditabilidad.",
    executive:
      "Crea un catálogo de herramientas, reglas de uso, dueños, costos, datos permitidos y matriz de aprobación.",
  },
  {
    id: "latam-gap",
    title: "LATAM necesita adopción con fundamentos",
    simple:
      "La región no puede competir solo usando herramientas; debe entender cómo construir productos y procesos con IA.",
    technical:
      "La ventaja surge al combinar fundamentos, automatización, datos propios, productos verticales y capacitación masiva por rol.",
    executive:
      "GEN+ puede posicionarse como puente: educación ejecutiva, implementación técnica y casos AEC con impacto medible.",
  },
];

export const toolLayers: ToolLayer[] = [
  {
    id: "models",
    layer: "Modelos base y chat",
    examples: ["ChatGPT", "Claude", "Gemini", "Copilot", "modelos open source"],
    useWhen: "Ideación, síntesis, redacción, análisis, aprendizaje, soporte y prototipado.",
    implementationRisk: "Outputs convincentes sin fuente, privacidad débil y dependencia de un proveedor.",
    decisionRule: "Usa por tarea, no por marca: razonamiento, costo, ventana de contexto, privacidad, multimodalidad y herramientas.",
  },
  {
    id: "coding",
    layer: "Desarrollo asistido por IA",
    examples: ["GitHub Copilot", "Cursor", "Codex", "Claude Code", "Windsurf"],
    useWhen: "Prototipos, refactor, tests, documentación, debugging y migraciones controladas.",
    implementationRisk: "Más velocidad de código sin revisión, arquitectura ni pruebas puede aumentar deuda técnica.",
    decisionRule: "Exige tests, revisión humana, lint, seguridad, límites de contexto y trazas de cambios.",
  },
  {
    id: "automation",
    layer: "Automatización y workflows",
    examples: ["n8n", "Make", "Zapier", "Power Automate", "Apps Script"],
    useWhen: "Conectar formularios, documentos, correo, CRM, reportes, aprobaciones y alertas.",
    implementationRisk: "Automatizaciones frágiles, duplicadas o con credenciales mal gobernadas.",
    decisionRule: "Automatiza solo procesos estables, con idempotencia, logs, responsable y fallback manual.",
  },
  {
    id: "rag",
    layer: "RAG, memoria y conocimiento",
    examples: ["pgvector", "Pinecone", "Weaviate", "ChromaDB", "Redis", "File Search"],
    useWhen: "Responder con fuentes internas, recuperar normativa, actas, propuestas, manuales y casos.",
    implementationRisk: "Mal chunking, metadata pobre, permisos débiles o respuestas sin cita.",
    decisionRule: "Evalúa retrieval y generación por separado; cada respuesta crítica debe poder citar evidencia.",
  },
  {
    id: "agents",
    layer: "Agentes y orquestación",
    examples: ["LangGraph", "OpenAI Agents", "CrewAI", "AutoGen", "Temporal"],
    useWhen: "Tareas multi-paso con herramientas, estado, decisión y necesidad de seguimiento.",
    implementationRisk: "Autonomía prematura, loops, acciones no autorizadas y costos impredecibles.",
    decisionRule: "Empieza con agentes copiloto, no autónomos; agrega permisos, trazas y aprobación humana por riesgo.",
  },
  {
    id: "evaluation",
    layer: "Evals, observabilidad y calidad",
    examples: ["LangSmith", "OpenTelemetry", "Braintrust", "Helicone", "custom evals"],
    useWhen: "Medir precisión, groundedness, costo, latencia, satisfacción, errores y regresiones.",
    implementationRisk: "Cambiar modelos/prompts sin saber qué casos se rompieron.",
    decisionRule: "Todo flujo IA repetible debe tener dataset de pruebas, golden answers, logs y revisión periódica.",
  },
  {
    id: "security-governance",
    layer: "Seguridad y gobierno",
    examples: ["NIST AI RMF", "ISO/IEC 42001", "EU AI Act", "DLP", "AI gateways"],
    useWhen: "Controlar datos sensibles, proveedores, permisos, auditoría, cumplimiento y riesgo.",
    implementationRisk: "Shadow AI, fuga de información, decisiones no auditables y exposición regulatoria.",
    decisionRule: "Clasifica casos por riesgo y define política antes de conectar datos o herramientas internas.",
  },
  {
    id: "creative-multimodal",
    layer: "Multimodal y contenido",
    examples: ["DALL-E", "Midjourney", "Runway", "HeyGen", "ElevenLabs", "Napkin AI"],
    useWhen: "Imágenes, video, voz, diagramas, presentaciones, marketing y educación visual.",
    implementationRisk: "Contenido genérico, deepfakes, derechos de autor, sesgos y baja fidelidad técnica.",
    decisionRule: "Usa estas herramientas con guías de marca, aprobación humana y revisión legal si hay uso externo.",
  },
];

export const platziInsights: PlatziInsight[] = [
  {
    id: "internal-learning",
    title: "La adopción empieza educando al equipo",
    source: "Startupeable con Freddy Vega",
    sourceUrl: "https://startupeable.com/platzi-ia/amp/",
    observation:
      "La conversación describe cómo Platzi transformó internamente su operación con clases semanales y automatización de materiales de aprendizaje.",
    genplusTakeaway:
      "GEN+ AI debe incluir rituales de aprendizaje: sesiones por rol, ejercicios aplicados, demos internas y medición de uso real.",
  },
  {
    id: "build-with-ai",
    title: "La diferencia es usar IA versus construir con IA",
    source: "Startupeable con Freddy Vega",
    sourceUrl: "https://startupeable.com/platzi-ia/amp/",
    observation:
      "El resumen del episodio distingue entre consumir herramientas y rediseñar productos o servicios con IA desde la base.",
    genplusTakeaway:
      "No basta con prompts. Hay que convertir documentos, procesos y experiencia GEN+ en productos, agentes y rutas verificables.",
  },
  {
    id: "latam-risk",
    title: "LATAM tiene riesgo de rezago si no adopta con velocidad",
    source: "Startupeable con Freddy Vega",
    sourceUrl: "https://startupeable.com/platzi-ia/amp/",
    observation:
      "El episodio advierte que la región, especialmente pymes, puede quedar atrás por baja adopción tecnológica y falta de cultura digital.",
    genplusTakeaway:
      "La oferta debe ser práctica: diagnóstico de madurez IA, capacitación ejecutiva, pilotos de 30 días y casos por industria.",
  },
  {
    id: "fundamentals",
    title: "Aprender fundamentos evita dependencia superficial",
    source: "Platzi Conf México 2025, Freddy Vega",
    sourceUrl: "https://platzi.com/cursos/conf-2025-mex/ai-arruinara-la-educacion-y-solo-hay-una-esperanza/",
    observation:
      "La página resume fundamentos como tokens, espacios multidimensionales, redes neuronales y atención, además de insistir en aplicar lo aprendido.",
    genplusTakeaway:
      "El entrenador debe explicar conceptos técnicos de forma simple y luego llevarlos a decisiones de producto, arquitectura y negocio.",
  },
  {
    id: "apply-repeat",
    title: "Aprender es aplicar, repetir y recibir feedback",
    source: "Platzi Conf México 2025, Freddy Vega",
    sourceUrl: "https://platzi.com/cursos/conf-2025-mex/ai-arruinara-la-educacion-y-solo-hay-una-esperanza/",
    observation:
      "El contenido enfatiza que copiar y pegar destruye aprendizaje y que la comprensión real requiere aplicación y repetición.",
    genplusTakeaway:
      "Cada módulo debe tener práctica, reto aplicado, rúbrica y evidencia. La IA debe subir el estándar, no reemplazar el esfuerzo.",
  },
  {
    id: "tool-practice",
    title: "Herramientas sí, pero conectadas a decisiones reales",
    source: "Curso gratis de Introducción a IA de Platzi",
    sourceUrl: "https://platzi.com/cursos/introduccion-ai/",
    observation:
      "El curso cubre tareas diarias, reuniones, análisis de documentos, imágenes, videos, gráficos y decisiones profesionales con pensamiento crítico.",
    genplusTakeaway:
      "El apartado de herramientas debe estar organizado por casos de uso: decidir, construir, automatizar, documentar, vender, aprender y auditar.",
  },
];

export const implementationRoadmap: ImplementationStep[] = [
  {
    id: "phase-1",
    phase: "0-15 días",
    title: "Mapa de oportunidades",
    goal: "Identificar 10 flujos repetibles con volumen, dolor, datos disponibles y error recuperable.",
    evidence: "Matriz valor-riesgo, dueño por flujo, datos usados y KPI esperado.",
    failureMode: "Elegir casos vistosos pero sin impacto operativo ni métrica.",
  },
  {
    id: "phase-2",
    phase: "15-30 días",
    title: "Pilotos controlados",
    goal: "Construir 2 pilotos con humanos en el loop, logs, plantillas, fuentes y medición.",
    evidence: "Antes/después de tiempo, calidad, errores, satisfacción y costo por ejecución.",
    failureMode: "Probar prompts aislados sin cambiar el proceso real.",
  },
  {
    id: "phase-3",
    phase: "30-60 días",
    title: "Base de conocimiento y RAG",
    goal: "Ordenar documentos críticos, metadata, permisos y respuestas con citas.",
    evidence: "Dataset de preguntas, recall@k, groundedness, fuentes y abstención cuando falta evidencia.",
    failureMode: "Cargar PDFs sin limpieza, permisos ni evaluación.",
  },
  {
    id: "phase-4",
    phase: "60-90 días",
    title: "Agentes con herramientas",
    goal: "Conectar tareas multi-paso a herramientas internas con aprobación humana según riesgo.",
    evidence: "Trazas, tool calls, aprobaciones, errores recuperados, costo y outputs aceptados.",
    failureMode: "Dar autonomía antes de tener controles, rollback y ownership.",
  },
  {
    id: "phase-5",
    phase: "90-120 días",
    title: "Escala por roles",
    goal: "Llevar IA a ventas, PMO, operaciones, educación, marketing y dirección con rutas por rol.",
    evidence: "Usuarios activos, flujos ejecutados, horas recuperadas, uso por rol y casos auditados.",
    failureMode: "Capacitación genérica sin práctica ni seguimiento.",
  },
  {
    id: "phase-6",
    phase: "120+ días",
    title: "Sistema de mejora continua",
    goal: "Versionar prompts, datasets, políticas, herramientas, evals, documentación y aprendizajes.",
    evidence: "Release notes IA, tablero de KPI, incidentes, decisiones, backlog y ROI por flujo.",
    failureMode: "Quedarse con el primer piloto y no institucionalizar aprendizaje.",
  },
];

export const keyDataSources = [
  {
    label: "Stanford AI Index 2026",
    url: "https://hai.stanford.edu/ai-index/2026-ai-index-report",
    note: "Adopción global, economía, productividad, responsabilidad y riesgos de IA.",
  },
  {
    label: "McKinsey State of AI 2025",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
    note: "Uso empresarial, agentes, EBIT, high performers y prácticas de implementación.",
  },
  {
    label: "OpenAI State of Enterprise AI 2025",
    url: "https://openai.com/index/the-state-of-enterprise-ai-2025-report/",
    note: "Uso enterprise, crecimiento de workflows, ahorro percibido y patrones de adopción.",
  },
  {
    label: "Microsoft Work Trend Index 2025",
    url: "https://blogs.microsoft.com/blog/2025/04/23/the-2025-annual-work-trend-index-the-frontier-firm-is-born/",
    note: "Agentes, agent boss, nuevas funciones y rediseño organizacional.",
  },
  {
    label: "Google DORA 2025",
    url: "https://blog.google/innovation-and-ai/technology/developers-tools/dora-report-2025/",
    note: "Adopción de IA en software, productividad, calidad y efecto amplificador.",
  },
  {
    label: "Stack Overflow Developer Survey 2025",
    url: "https://survey.stackoverflow.co/2025/ai",
    note: "Uso, confianza, agentes, seguridad y herramientas de datos para agentes.",
  },
  {
    label: "Startupeable con Freddy Vega",
    url: "https://startupeable.com/platzi-ia/amp/",
    note: "Playbook para adoptar IA en negocio, cultura interna, aprendizaje y LATAM.",
  },
  {
    label: "Platzi Conf México 2025",
    url: "https://platzi.com/cursos/conf-2025-mex/ai-arruinara-la-educacion-y-solo-hay-una-esperanza/",
    note: "Fundamentos, disciplina de aprendizaje y uso de IA sin destruir comprensión.",
  },
  {
    label: "Curso de Introducción a IA de Platzi",
    url: "https://platzi.com/cursos/introduccion-ai/",
    note: "Herramientas prácticas para tareas, documentos, reuniones, contenido y decisiones.",
  },
];
