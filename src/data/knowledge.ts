import {
  BookOpen,
  BrainCircuit,
  Code2,
  Database,
  Eye,
  Gauge,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type MasteryLevel = "base" | "intermedio" | "avanzado" | "experto" | "ultra";

export type KnowledgeModule = {
  id: string;
  title: string;
  shortTitle: string;
  level: MasteryLevel;
  promise: string;
  icon: LucideIcon;
  simple: string;
  advanced: string;
  concepts: string[];
  examples: string[];
  evidence: string;
  risk: string;
};

export type TrainerQuestion = {
  id: string;
  moduleId: string;
  level: MasteryLevel;
  question: string;
  whyItMatters: string;
  answer: string;
  connection: string;
  challenge: string;
};

export type Playbook = {
  id: string;
  title: string;
  useWhen: string;
  output: string;
  steps: string[];
  template: string;
  hiddenRisk: string;
};

export const sourceNotes = [
  {
    title: "Base de Conocimiento GEN+ IA AEC v1",
    type: "Markdown",
    status: "Curado",
    coverage:
      "Tesis GEN+, IA aplicada a AEC, agentes, automatización, computer vision, AECODE, ROI, gobernanza y prompts reutilizables.",
  },
  {
    title: "Guía maestra de IA para liderar, construir y ejecutar en la era agentic",
    type: "DOCX",
    status: "Curado",
    coverage:
      "Historia de IA, presente agentic, liderazgo, ejecución, riesgos, MCP, prompting, vibe coding, plan de aprendizaje y perfiles profesionales.",
  },
  {
    title: "Texto pegado",
    type: "Texto",
    status: "Curado",
    coverage:
      "Versión extendida de guía maestra: fundamentos, modelos, RAG, MCP, automatización, buenas prácticas, riesgos y glosario.",
  },
  {
    title: "Guia Maestra IA Sistema Conocimiento 2026",
    type: "Texto",
    status: "Curado",
    coverage:
      "Madurez corporativa IA 100-500, cinco pilares, taxonomia tecnica, frameworks agentic, TTC, GRPO, prompts AEC y roadmap de automatizacion cognitiva.",
  },
  {
    title: "Documentacion Maestra IA GEN+ / AECODE 2026",
    type: "Markdown",
    status: "Curado",
    coverage:
      "Adopcion IA, madurez Gartner, ROI AEC, QTO, site monitoring, agentes, vision, gobernanza, stack, prompts, AECODE y AI Construction Summit.",
  },
  {
    title: "Deep Research GEN+ AI AEC Master Knowledge Base",
    type: "Markdown",
    status: "Curado",
    coverage:
      "Fundamentos LLM, Transformers, RAG, tool use, modelos, economia de tokens, BIM/IFC/IDS, vision edge, stack AI-native y playbooks AEC.",
  },
  {
    title: "AI Research Report",
    type: "PDF",
    status: "Raw incluido",
    coverage:
      "El PDF quedó guardado como fuente cruda. La extracción textual automática no fue confiable por codificación de fuente; debe pasar por OCR o reemplazo por versión textual en la siguiente ingesta.",
  },
];

export const dashboardMetrics = [
  {
    label: "fuentes iniciales",
    value: "7",
    signal: "base documental viva",
    tone: "blue",
  },
  {
    label: "módulos núcleo",
    value: "14",
    signal: "de fundamentos a ultra avanzado",
    tone: "green",
  },
  {
    label: "preguntas de conexión",
    value: "44",
    signal: "comprensión + arquitectura",
    tone: "amber",
  },
  {
    label: "conceptos expertos",
    value: "90+",
    signal: "IA, AEC, web, madurez y agentes",
    tone: "red",
  },
];

export const knowledgeModules: KnowledgeModule[] = [
  {
    id: "mapa-ia",
    title: "Mapa mental de la IA",
    shortTitle: "Mapa IA",
    level: "base",
    icon: BrainCircuit,
    promise:
      "Entender IA por capas: simbólica, ML, deep learning, transformers, RAG, agentes y sistemas.",
    simple:
      "La IA no es una app. Es una familia de técnicas para percibir, predecir, generar, razonar y ejecutar sobre datos.",
    advanced:
      "La ventaja práctica aparece al combinar modelos probabilísticos con contexto recuperado, herramientas externas, memoria, evaluación y control humano.",
    concepts: [
      "IA simbólica",
      "Machine learning",
      "Deep learning",
      "Transformers",
      "LLMs",
      "Multimodalidad",
      "Test-time compute",
    ],
    examples: [
      "Sistema experto para reglas de cumplimiento.",
      "Modelo predictivo de retrasos en obra.",
      "Copiloto que resume contratos y genera RFIs.",
    ],
    evidence:
      "Puedes explicar qué tipo de IA usarías para clasificar, predecir, generar, consultar o ejecutar.",
    risk:
      "Confundir marca de herramienta con arquitectura de solución.",
  },
  {
    id: "modelos-prompting",
    title: "Modelos, contexto y prompting",
    shortTitle: "Prompting",
    level: "base",
    icon: Sparkles,
    promise:
      "Controlar salidas de modelos mediante contexto, restricciones, ejemplos, formato y verificación.",
    simple:
      "Un prompt útil define rol, tarea, contexto, criterio, formato y ejemplos. Sin contexto, el modelo improvisa.",
    advanced:
      "Prompting robusto incluye contratos de salida, criterios de rechazo, evaluación, trazabilidad y separación entre instrucciones, datos y herramientas.",
    concepts: [
      "Tokens",
      "Ventana de contexto",
      "System instruction",
      "Few-shot",
      "Structured outputs",
      "Evaluación",
      "Alucinación",
    ],
    examples: [
      "CREATE: Context, Request, Style, Attributes, Target, Examples.",
      "Prompt de diagnóstico de proceso con tabla de oportunidad IA.",
      "Prompt de revisión de entregables con rúbrica.",
    ],
    evidence:
      "Tus prompts producen respuestas consistentes, auditables y comparables entre iteraciones.",
    risk:
      "Creer que un prompt largo reemplaza datos, herramientas o validación.",
  },
  {
    id: "rag-conocimiento",
    title: "RAG y arquitectura de conocimiento",
    shortTitle: "RAG",
    level: "intermedio",
    icon: Database,
    promise:
      "Convertir documentos en una base consultable con recuperación, citas, permisos y evaluación.",
    simple:
      "RAG es responder con documentación recuperada. Es como un examen a libro abierto para el modelo.",
    advanced:
      "Un RAG serio diseña limpieza, chunking, embeddings, metadata, reranking, grounding, citas, permisos, evals y monitoreo de drift documental.",
    concepts: [
      "Chunking",
      "Embeddings",
      "Vector store",
      "Metadata",
      "Reranking",
      "Grounding",
      "Citas",
      "Evals RAG",
    ],
    examples: [
      "Asistente documental de proyecto con contratos y actas.",
      "Base de conocimiento GEN+ para propuestas y workshops.",
      "Tutor AECODE que responde con fuentes del programa.",
    ],
    evidence:
      "Cada respuesta crítica puede mostrar fuente, fecha, fragmento y nivel de confianza.",
    risk:
      "Indexar documentos sucios y convertir ruido en falsa autoridad.",
  },
  {
    id: "agentes",
    title: "Agentes IA y tool use",
    shortTitle: "Agentes",
    level: "intermedio",
    icon: Workflow,
    promise:
      "Diseñar agentes con objetivo, herramientas, memoria, límites, logs y revisión humana.",
    simple:
      "Un agente no solo responde: interpreta un objetivo, decide pasos, usa herramientas y entrega una salida verificable.",
    advanced:
      "Los agentes productivos requieren estado, permisos mínimos, trazas, errores recuperables, aprobación humana y métricas por ejecución.",
    concepts: [
      "Tool use",
      "Function calling",
      "Memoria",
      "Permisos",
      "Human-in-the-loop",
      "Tracing",
      "Autonomía gobernada",
    ],
    examples: [
      "Agente de reuniones con acuerdos, responsables y follow-up.",
      "Agente PMO que consolida riesgos y próximos pasos.",
      "Agente de oficina técnica que consulta expedientes y prepara RFIs.",
    ],
    evidence:
      "El agente tiene entradas, herramientas permitidas, salida esperada, logs y criterio de escalamiento.",
    risk:
      "Dar acceso a herramientas sin límites ni rollback.",
  },
  {
    id: "automatizacion-mcp",
    title: "Automatización, APIs y MCP",
    shortTitle: "MCP",
    level: "avanzado",
    icon: Network,
    promise:
      "Conectar IA con sistemas reales sin crear integraciones frágiles o dependientes de una sola herramienta.",
    simple:
      "La automatización conecta eventos, datos, modelos y acciones. MCP estandariza cómo las apps IA acceden a herramientas y fuentes.",
    advanced:
      "El diseño maduro separa orquestación, conectores, credenciales, permisos, observabilidad, colas, idempotencia y revisión humana.",
    concepts: [
      "n8n",
      "Make",
      "Zapier",
      "Webhooks",
      "APIs",
      "MCP",
      "Idempotencia",
      "Colas",
    ],
    examples: [
      "Correo recibido -> clasificación IA -> tarea en Notion -> alerta.",
      "Nueva acta -> acuerdos -> responsables -> seguimiento automático.",
      "MCP server para consultar base interna desde un agente.",
    ],
    evidence:
      "Un flujo puede fallar sin perder datos ni ejecutar acciones peligrosas dos veces.",
    risk:
      "Automatizar un proceso roto y escalar desorden.",
  },
  {
    id: "ia-aec",
    title: "IA aplicada a AEC y GEN+",
    shortTitle: "IA AEC",
    level: "intermedio",
    icon: Gauge,
    promise:
      "Traducir IA en casos medibles para ingeniería, construcción, BIM, PMO, seguridad, valorizaciones y educación técnica.",
    simple:
      "AEC tiene documentos, fotos, coordinación, retrasos y evidencia. La IA sirve si reduce tiempo, costo, error o riesgo.",
    advanced:
      "Los casos ganadores conectan datos de obra, actas, cronogramas, BIM, reportes, visión computacional y dashboards ejecutivos.",
    concepts: [
      "Reportes de obra",
      "Asistente BIM",
      "Valorizaciones",
      "Riesgos PMO",
      "Documentos técnicos",
      "AECODE",
      "Skill Passport",
    ],
    examples: [
      "Reporte semanal automático con fotos, cronograma y riesgos.",
      "Tutor IA que guía una skill y valida evidencia.",
      "Asistente de contratos que responde con fuente y alerta ambigüedad.",
    ],
    evidence:
      "Cada caso tiene proceso, usuario, datos, métrica, responsable y acción siguiente.",
    risk:
      "Vender IA genérica en un sector que necesita contexto operativo.",
  },
  {
    id: "vision-computacional",
    title: "Computer vision y evidencia visual",
    shortTitle: "Vision",
    level: "avanzado",
    icon: Eye,
    promise:
      "Diseñar sistemas visuales para avance, seguridad, maquinaria, calidad y mantenimiento.",
    simple:
      "Computer vision detecta patrones en imágenes o video: personas, EPP, maquinaria, defectos o cambios.",
    advanced:
      "Un sistema visual operativo exige dataset, etiquetado, métricas, edge/cloud, umbrales, revisión humana, dashboard y evidencia contractual.",
    concepts: [
      "Detección",
      "Segmentación",
      "mAP",
      "Precision/recall",
      "Edge AI",
      "NVR",
      "Dataset visual",
      "Falsos positivos",
    ],
    examples: [
      "Detección de casco, chaleco y arnés en accesos.",
      "Conteo de maquinaria y tiempos muertos.",
      "Comparación de avance visual por zona.",
    ],
    evidence:
      "El caso reporta cobertura, exactitud, latencia, tasa de alertas útiles y acción operacional.",
    risk:
      "Mostrar detecciones bonitas sin cerrar el flujo de decisión.",
  },
  {
    id: "vibe-coding",
    title: "Vibe coding y producto con IA",
    shortTitle: "Vibe coding",
    level: "intermedio",
    icon: Code2,
    promise:
      "Usar IA para construir prototipos funcionales sin sacrificar arquitectura, seguridad ni mantenibilidad.",
    simple:
      "Vibe coding efectivo no es pedir pantallas: es dirigir producto, especificar flujo, validar y convertir en repo mantenible.",
    advanced:
      "El estándar incluye PRD, SPEC, decisiones, backlog, control de secretos, tests mínimos, deploy y revisión de deuda técnica.",
    concepts: [
      "PRD",
      "SPEC",
      "Mock data",
      "Typecheck",
      "Build",
      "Deploy",
      "Diff review",
      "Code rot",
    ],
    examples: [
      "Demo estática con datos mock para validar venta.",
      "Dashboard ejecutivo que recomienda acciones.",
      "Repo mínimo con documentación y scripts.",
    ],
    evidence:
      "El prototipo funciona, se entiende, se ve bien, se puede vender, escalar y reutilizar.",
    risk:
      "Acumular parches generados por IA sin criterio de producto.",
  },
  {
    id: "gobernanza-roi",
    title: "Gobernanza, seguridad y ROI",
    shortTitle: "Gobierno",
    level: "avanzado",
    icon: ShieldCheck,
    promise:
      "Medir valor y controlar riesgos: privacidad, sesgo, prompt injection, permisos, costos, trazabilidad y cumplimiento.",
    simple:
      "IA sin métrica es demo. IA sin gobernanza es riesgo.",
    advanced:
      "Un programa serio usa clasificación de datos, políticas por rol, evals, logs, revisión humana, monitoreo de costos y matriz de riesgo por caso.",
    concepts: [
      "NIST AI RMF",
      "EU AI Act",
      "Prompt injection",
      "Data leakage",
      "Evals",
      "Logs",
      "Costo por tarea",
      "ROI",
    ],
    examples: [
      "Matriz impacto/facilidad/riesgo para priorizar pilotos.",
      "Checklist de datos antes de usar modelos públicos.",
      "Dashboard de horas ahorradas y errores evitados.",
    ],
    evidence:
      "Cada piloto reporta baseline, resultado, costo, riesgo, responsable y decisión de escalar o apagar.",
    risk:
      "Sobreconfianza en outputs no auditables.",
  },
  {
    id: "multiagentes",
    title: "Sistemas multiagente y arquitectura avanzada",
    shortTitle: "Multiagentes",
    level: "experto",
    icon: BookOpen,
    promise:
      "Orquestar agentes especializados con estado, memoria, herramientas, evaluación y supervisión.",
    simple:
      "Un sistema multiagente divide trabajo entre roles: investigador, planificador, ejecutor, revisor y coordinador.",
    advanced:
      "La dificultad real está en estado persistente, handoffs, conflictos, límites de autonomía, evaluación, observabilidad y costo acumulado.",
    concepts: [
      "LangGraph",
      "State machines",
      "Subagentes",
      "Handoffs",
      "Durable execution",
      "Observabilidad",
      "Memory stores",
      "Evals multiagente",
    ],
    examples: [
      "Squad IA para propuesta comercial: investigación, estrategia, redacción y QA.",
      "Sistema PMO con agente de actas, riesgos, calendario y tablero.",
      "Agentes AECODE para diagnóstico, ruta, tutoría y validación de evidencia.",
    ],
    evidence:
      "El sistema puede pausar, resumir, auditar, corregir y justificar decisiones por agente.",
    risk:
      "Confundir muchos agentes con mejor arquitectura.",
  },
  {
    id: "ai-web-engineering",
    title: "Desarrollo web para productos IA",
    shortTitle: "AI Web",
    level: "avanzado",
    icon: Code2,
    promise:
      "Construir apps IA con frontend claro, backend seguro, streaming, APIs, estado, errores y trazabilidad.",
    simple:
      "Una app IA no es solo un chat. Debe mostrar qué está pasando, qué fuentes usa, qué acción propone y qué necesita aprobar el humano.",
    advanced:
      "La arquitectura madura separa frontend, BFF, modelos, tools, vector store, sesiones, eventos, schemas, observabilidad, evals y seguridad de secretos.",
    concepts: [
      "React state",
      "BFF",
      "Streaming",
      "SSE",
      "Schemas",
      "API design",
      "Rate limits",
      "Error states",
    ],
    examples: [
      "Chat RAG con panel de fuentes y feedback.",
      "UI agentic con eventos de progreso y aprobación.",
      "Dashboard de evals, costo, latencia y calidad.",
    ],
    evidence:
      "Puedes diseñar una app IA desde UI hasta backend sin exponer llaves ni ocultar decisiones críticas.",
    risk:
      "Poner API keys en frontend o hacer una UX opaca donde el usuario no sabe qué hizo el agente.",
  },
  {
    id: "evals-observabilidad",
    title: "Evals, observabilidad y mejora continua",
    shortTitle: "Evals",
    level: "avanzado",
    icon: Gauge,
    promise:
      "Medir calidad, costo, latencia, groundedness, tool calls, errores y regresiones de sistemas IA.",
    simple:
      "Si no puedes medir una respuesta, no puedes mejorarla con confianza.",
    advanced:
      "Un sistema productivo registra trazas, datasets de prueba, resultados por versión, métricas de retrieval, jueces humanos/LLM y feedback de usuarios.",
    concepts: [
      "Golden dataset",
      "Groundedness",
      "Trace",
      "Span",
      "Regression",
      "A/B prompts",
      "Cost logs",
      "Feedback loop",
    ],
    examples: [
      "Eval de 50 preguntas para tutor IA.",
      "Trace de agente con tool calls y handoffs.",
      "Dashboard de costo por respuesta y tasa de escalamiento humano.",
    ],
    evidence:
      "Puedes demostrar que una nueva versión responde mejor sin romper casos críticos anteriores.",
    risk:
      "Cambiar modelo o prompt por intuición y degradar calidad sin notarlo.",
  },
  {
    id: "seguridad-agentica",
    title: "Seguridad agentic y defensa contra ataques",
    shortTitle: "Seguridad",
    level: "ultra",
    icon: ShieldCheck,
    promise:
      "Diseñar defensas contra prompt injection, tool misuse, fuga de datos, acciones no autorizadas y memoria peligrosa.",
    simple:
      "Cuando la IA usa herramientas, el riesgo deja de ser solo una mala respuesta: puede convertirse en una acción real.",
    advanced:
      "La defensa combina clasificación de datos, policy engine, permisos mínimos, guardrails, sandboxing, confirmaciones, logs, redacción y pruebas adversariales.",
    concepts: [
      "Prompt injection",
      "Tool guardrails",
      "Sandbox",
      "Least privilege",
      "Secrets",
      "Data exfiltration",
      "Approvals",
      "Incident response",
    ],
    examples: [
      "Bloquear documentos que intentan cambiar instrucciones del sistema.",
      "Pedir confirmación antes de enviar correo o modificar CRM.",
      "Redactar credenciales antes de pasar outputs a otro modelo.",
    ],
    evidence:
      "Puedes definir qué puede leer, decidir y ejecutar cada agente bajo escenarios normales y adversariales.",
    risk:
      "Confiar en instrucciones del modelo como única barrera de seguridad.",
  },
  {
    id: "context-engineering",
    title: "Context engineering y arquitectura de memoria",
    shortTitle: "Contexto",
    level: "ultra",
    icon: Database,
    promise:
      "Diseñar el paquete exacto de contexto, memoria, fuentes, ejemplos, estado y políticas que recibe un modelo.",
    simple:
      "El modelo responde según lo que ve. Ser experto es decidir qué debe ver y qué no.",
    advanced:
      "Context engineering integra system prompts, retrieval, memoria de usuario, estado de agente, tool results, resúmenes, políticas, prioridades y compresión.",
    concepts: [
      "Working memory",
      "Episodic memory",
      "Semantic memory",
      "State",
      "Context packing",
      "Recency",
      "Compression",
      "Policy context",
    ],
    examples: [
      "Tutor que recibe nivel, módulo, respuesta previa, rúbrica y fuentes relevantes.",
      "Agente PMO que recibe compromisos abiertos y no todo el historial.",
      "Modelo de ventas que ve pricing aprobado, no precios borrador.",
    ],
    evidence:
      "Puedes explicar por qué cada fragmento de contexto entra, se resume, se recupera o se excluye.",
    risk:
      "Meter todo en la ventana de contexto y diluir la señal crítica.",
  },
];

export const trainerQuestions: TrainerQuestion[] = [
  {
    id: "q1",
    moduleId: "mapa-ia",
    level: "base",
    question:
      "Si una tarea requiere decidir entre clasificar, generar, predecir y ejecutar, ¿qué preguntas haces antes de elegir herramienta?",
    whyItMatters:
      "La mayoría de errores empiezan por comprar una herramienta antes de definir el tipo de problema.",
    answer:
      "Primero defino salida esperada, datos disponibles, frecuencia, riesgo, responsable y métrica. Luego elijo si necesito ML clásico, LLM, RAG, computer vision o agente con herramientas.",
    connection:
      "La taxonomía técnica se conecta con producto: cada tipo de IA debe mapear a un proceso y una métrica.",
    challenge:
      "Toma un proceso GEN+ y clasifícalo como predicción, generación, consulta, visión o ejecución agentic.",
  },
  {
    id: "q2",
    moduleId: "mapa-ia",
    level: "intermedio",
    question:
      "¿Por qué un LLM puede sonar seguro aunque esté equivocado, y qué capa reduce ese riesgo?",
    whyItMatters:
      "Distinguir fluidez de veracidad es la base para usar IA en negocio.",
    answer:
      "El LLM predice secuencias probables, no verifica realidad por sí mismo. RAG, herramientas, citas, evals y revisión humana reducen el riesgo.",
    connection:
      "Alucinación no se resuelve con fe en el modelo; se resuelve con arquitectura.",
    challenge:
      "Diseña una respuesta con tres niveles: hipótesis, fuente recuperada y decisión humana.",
  },
  {
    id: "q3",
    moduleId: "modelos-prompting",
    level: "base",
    question:
      "¿Qué diferencia hay entre pedir 'hazme un resumen' y pedir una salida operativa?",
    whyItMatters:
      "Un resumen puede informar; una salida operativa mueve una decisión.",
    answer:
      "Una salida operativa define audiencia, objetivo, criterios, formato, riesgos, acciones y evidencia. No solo comprime texto.",
    connection:
      "Prompting efectivo convierte información en decisión.",
    challenge:
      "Reescribe un prompt simple usando CREATE y exige tabla de acciones, riesgos y responsables.",
  },
  {
    id: "q4",
    moduleId: "modelos-prompting",
    level: "avanzado",
    question:
      "¿Cuándo un prompt estructurado deja de ser suficiente y necesitas evaluación automática?",
    whyItMatters:
      "La escala rompe lo que manualmente parecía funcionar.",
    answer:
      "Cuando el output se repite en producción, afecta decisiones o debe compararse entre versiones. Ahí necesitas datasets de prueba, criterios y medición de exactitud, formato y seguridad.",
    connection:
      "El prompt controla intención; los evals controlan confiabilidad.",
    challenge:
      "Define 5 casos de prueba para validar un tutor IA de AECODE.",
  },
  {
    id: "q5",
    moduleId: "rag-conocimiento",
    level: "base",
    question:
      "¿Por qué RAG no es simplemente subir PDFs a un chatbot?",
    whyItMatters:
      "Subir documentos sin diseño genera respuestas mediocres con apariencia de fuente.",
    answer:
      "RAG requiere limpieza, fragmentación, metadatos, recuperación, reranking, prompt de grounding, citas y evaluación. El archivo es solo la materia prima.",
    connection:
      "La calidad del conocimiento depende más de la curaduría que del modelo.",
    challenge:
      "Diseña metadata mínima para documentos GEN+: tipo, fecha, cliente, tema, confidencialidad y caso de uso.",
  },
  {
    id: "q6",
    moduleId: "rag-conocimiento",
    level: "experto",
    question:
      "¿Cuándo usarías fine-tuning en vez de RAG para una base GEN+?",
    whyItMatters:
      "Confundir ambos puede elevar costos y reducir trazabilidad.",
    answer:
      "Usaría RAG para hechos, fuentes y documentación cambiante. Fine-tuning sirve mejor para estilo, formato, taxonomía de salida o comportamiento repetido que no depende de datos frescos.",
    connection:
      "RAG responde con memoria externa; fine-tuning moldea comportamiento interno.",
    challenge:
      "Separa 10 necesidades GEN+ en RAG, fine-tuning, prompting o herramienta externa.",
  },
  {
    id: "q7",
    moduleId: "agentes",
    level: "intermedio",
    question:
      "¿Cuál es la diferencia entre chatbot, copiloto y agente?",
    whyItMatters:
      "Nombrar mal el sistema lleva a prometer autonomía que no existe.",
    answer:
      "Chatbot responde; copiloto asiste con contexto y acciones sugeridas; agente persigue un objetivo, usa herramientas, mantiene estado y entrega resultados bajo límites.",
    connection:
      "La autonomía debe crecer con permisos, trazabilidad y riesgo controlado.",
    challenge:
      "Define si un asistente de actas debe ser chatbot, copiloto o agente, y justifica límites.",
  },
  {
    id: "q8",
    moduleId: "agentes",
    level: "avanzado",
    question:
      "¿Qué debe pasar antes de que un agente envíe un correo, modifique un CRM o cree una tarea crítica?",
    whyItMatters:
      "Las herramientas convierten errores de texto en errores operativos.",
    answer:
      "Debe validar contexto, mostrar intención, usar permisos mínimos, registrar log, pedir aprobación si hay riesgo, y permitir rollback o corrección.",
    connection:
      "Tool use sin gobernanza es automatización de errores.",
    challenge:
      "Diseña una pantalla de aprobación para un agente de seguimiento comercial.",
  },
  {
    id: "q9",
    moduleId: "automatizacion-mcp",
    level: "avanzado",
    question:
      "¿Qué problema resuelve MCP frente a integraciones API aisladas?",
    whyItMatters:
      "El ecosistema agentic necesita conectores reutilizables, no integraciones frágiles por herramienta.",
    answer:
      "MCP estandariza la conexión entre aplicaciones IA y sistemas externos como archivos, bases, calendarios o herramientas. Reduce complejidad y facilita portabilidad.",
    connection:
      "MCP es infraestructura de contexto: conecta modelos con datos y acciones.",
    challenge:
      "Lista tres servidores MCP útiles para GEN+: Drive/Obsidian, CRM y calendario.",
  },
  {
    id: "q10",
    moduleId: "automatizacion-mcp",
    level: "experto",
    question:
      "¿Por qué la idempotencia importa en flujos con agentes?",
    whyItMatters:
      "Un agente que reintenta puede duplicar tareas, pagos, correos o registros.",
    answer:
      "Idempotencia asegura que repetir una acción produce el mismo estado final sin duplicados. En producción se logra con IDs únicos, estados, locks y validación antes de ejecutar.",
    connection:
      "La confiabilidad no depende del razonamiento del modelo, sino del diseño del sistema.",
    challenge:
      "Diseña un flujo n8n que no duplique una tarea si el webhook se dispara dos veces.",
  },
  {
    id: "q11",
    moduleId: "ia-aec",
    level: "intermedio",
    question:
      "¿Qué convierte un caso IA AEC en una propuesta vendible?",
    whyItMatters:
      "Las empresas no compran IA; compran menos demora, menos error y más control.",
    answer:
      "Debe tener proceso claro, dolor económico, usuario responsable, datos disponibles, demo comprensible, métrica de impacto y camino de implementación.",
    connection:
      "La tesis GEN+ es proceso + datos + IA + agentes + métricas + adopción.",
    challenge:
      "Convierte 'asistente de obra' en una oferta con usuario, input, output, métrica y precio piloto.",
  },
  {
    id: "q12",
    moduleId: "ia-aec",
    level: "avanzado",
    question:
      "¿Dónde está el mayor valor: en generar reportes o en cambiar el ciclo de decisión semanal?",
    whyItMatters:
      "Automatizar documentos sin cambiar decisiones limita el ROI.",
    answer:
      "El valor mayor está en cerrar el ciclo: capturar evidencia, resumir, detectar riesgo, asignar responsable, monitorear cumplimiento y aprender para la siguiente semana.",
    connection:
      "La IA útil no termina en PDF; termina en acción trazable.",
    challenge:
      "Diseña el loop semanal de un agente PMO para obra.",
  },
  {
    id: "q13",
    moduleId: "vision-computacional",
    level: "avanzado",
    question:
      "¿Por qué mAP alto no garantiza valor operativo en seguridad de obra?",
    whyItMatters:
      "Métrica técnica no siempre equivale a decisión útil.",
    answer:
      "Porque también importan cobertura visual, falsos positivos, latencia, contexto de la alerta, responsable y acción. Un detector preciso pero mal integrado no reduce incidentes.",
    connection:
      "Computer vision debe diseñarse como sistema operacional, no como demo visual.",
    challenge:
      "Define métricas técnicas y operativas para detección de EPP.",
  },
  {
    id: "q14",
    moduleId: "vision-computacional",
    level: "experto",
    question:
      "¿Cuándo conviene edge AI y cuándo nube para visión computacional?",
    whyItMatters:
      "La arquitectura afecta costo, latencia, privacidad y continuidad.",
    answer:
      "Edge conviene para baja latencia, privacidad, conectividad limitada o costo por video continuo. Nube conviene para batch, entrenamiento, dashboards centralizados y escalabilidad flexible.",
    connection:
      "La decisión técnica debe responder a condiciones reales de obra.",
    challenge:
      "Diseña arquitectura híbrida para cámaras IP en una obra con internet inestable.",
  },
  {
    id: "q15",
    moduleId: "vibe-coding",
    level: "base",
    question:
      "¿Qué debe existir antes de pedirle a una IA que construya una app?",
    whyItMatters:
      "La IA acelera tanto el buen criterio como la confusión.",
    answer:
      "Debe existir problema, usuario, flujo, datos, pantallas, métrica, alcance MVP, riesgos y criterios de aceptación.",
    connection:
      "Producto primero; código después.",
    challenge:
      "Escribe un PRD de 10 líneas para una demo de agente de actas.",
  },
  {
    id: "q16",
    moduleId: "vibe-coding",
    level: "avanzado",
    question:
      "¿Cuál es la señal de que un proyecto generado por IA está acumulando code rot?",
    whyItMatters:
      "Un prototipo rápido puede volverse imposible de mantener.",
    answer:
      "Señales: componentes enormes, lógica duplicada, dependencias innecesarias, errores ocultos, estilos inconsistentes, falta de tests y cambios pequeños que rompen muchas partes.",
    connection:
      "Vibe coding necesita arquitectura mínima y revisión de diffs.",
    challenge:
      "Define un checklist de calidad para pasar de demo a MVP comercial.",
  },
  {
    id: "q17",
    moduleId: "gobernanza-roi",
    level: "intermedio",
    question:
      "¿Qué métrica separa una demo IA de una intervención real?",
    whyItMatters:
      "Sin baseline y medición, no hay ROI defendible.",
    answer:
      "Una intervención real compara antes/después: horas ahorradas, tiempo de ciclo, errores evitados, cumplimiento, costo por tarea o ingresos habilitados.",
    connection:
      "La métrica manda: sin ROI, la IA es narrativa.",
    challenge:
      "Calcula el ROI de automatizar un reporte semanal de 6 horas.",
  },
  {
    id: "q18",
    moduleId: "gobernanza-roi",
    level: "experto",
    question:
      "¿Cómo clasificarías riesgo de IA si el mismo modelo se usa para tutoría, contratación y seguridad?",
    whyItMatters:
      "El riesgo depende del uso, no solo del modelo.",
    answer:
      "Evaluaría contexto, impacto, datos personales, autonomía, consecuencias, población afectada, posibilidad de apelación y control humano. El mismo modelo puede tener riesgos distintos por despliegue.",
    connection:
      "EU AI Act y NIST AI RMF empujan clasificación contextual y gestión sistemática del riesgo.",
    challenge:
      "Haz una matriz de riesgo para tutor IA, evaluación de evidencia y scoring de candidatos.",
  },
  {
    id: "q19",
    moduleId: "multiagentes",
    level: "avanzado",
    question:
      "¿Cuándo un solo agente es mejor que un sistema multiagente?",
    whyItMatters:
      "Más agentes pueden aumentar costo, latencia y fallos.",
    answer:
      "Un solo agente basta si la tarea es lineal, de bajo riesgo y no requiere roles especializados. Multiagente conviene cuando hay etapas, revisión cruzada, herramientas distintas o responsabilidades separables.",
    connection:
      "Arquitectura avanzada no es complejidad; es control.",
    challenge:
      "Divide un proceso de propuesta comercial en agentes solo si cada rol agrega control real.",
  },
  {
    id: "q20",
    moduleId: "multiagentes",
    level: "experto",
    question:
      "¿Por qué el estado persistente es central en agentes de larga duración?",
    whyItMatters:
      "Sin estado, un agente olvida avances, repite pasos o no puede recuperarse de fallos.",
    answer:
      "El estado guarda objetivo, decisiones, herramientas usadas, evidencias, pendientes, aprobaciones y errores. Permite pausar, resumir, auditar y corregir.",
    connection:
      "El futuro agentic depende menos del chat y más de workflows durables.",
    challenge:
      "Define el schema de estado para un agente PMO semanal.",
  },
  {
    id: "q21",
    moduleId: "rag-conocimiento",
    level: "intermedio",
    question:
      "¿Qué harías si el RAG trae fuentes correctas pero responde mal?",
    whyItMatters:
      "La recuperación correcta no garantiza generación correcta.",
    answer:
      "Revisaría prompt de síntesis, ranking, contexto excesivo, contradicciones, formato de cita, instrucciones de abstención y evals con preguntas esperadas.",
    connection:
      "RAG tiene dos sistemas a evaluar: retrieval y generation.",
    challenge:
      "Diseña 3 métricas para retrieval y 3 para respuesta final.",
  },
  {
    id: "q22",
    moduleId: "agentes",
    level: "experto",
    question:
      "¿Qué diferencia hay entre memoria útil y memoria peligrosa en un agente?",
    whyItMatters:
      "La memoria mejora personalización, pero puede filtrar datos o fijar errores.",
    answer:
      "Memoria útil conserva preferencias, decisiones y contexto validado. Memoria peligrosa guarda datos sensibles innecesarios, inferencias no confirmadas o instrucciones obsoletas.",
    connection:
      "Memoria debe tener política de captura, edición, borrado y auditoría.",
    challenge:
      "Define qué debe recordar y qué no debe recordar tu asistente experto en IA.",
  },
  {
    id: "q23",
    moduleId: "ia-aec",
    level: "base",
    question:
      "¿Por qué AECODE no debería venderse como una academia tradicional de IA?",
    whyItMatters:
      "El diferencial está en habilidades verificables, no en horas de contenido.",
    answer:
      "Porque la promesa fuerte es convertir aprendizaje técnico en evidencia: diagnóstico, ruta, práctica, feedback, rúbrica, skill passport y certificación.",
    connection:
      "El entrenador IA debe enseñar, preguntar, evaluar y conectar con casos reales.",
    challenge:
      "Define una skill verificable de IA aplicada a obra con evidencia final.",
  },
  {
    id: "q24",
    moduleId: "modelos-prompting",
    level: "experto",
    question:
      "¿Qué debe incluir una instrucción de sistema para un asistente experto interno?",
    whyItMatters:
      "La instrucción de sistema define identidad, límites, estilo, fuentes y escalamiento.",
    answer:
      "Debe incluir rol, alcance, taxonomía, fuentes prioritarias, formato, reglas de seguridad, manejo de incertidumbre, criterios de escalamiento y acciones prohibidas.",
    connection:
      "El asistente no es solo modelo: es contrato operativo.",
    challenge:
      "Escribe la system instruction de la próxima versión conectada a RAG.",
  },
  {
    id: "q25",
    moduleId: "automatizacion-mcp",
    level: "intermedio",
    question:
      "¿Qué automatización IA conviene construir primero en una empresa AEC?",
    whyItMatters:
      "Elegir casos frecuentes y medibles acelera adopción.",
    answer:
      "Primero convienen actas, reportes, seguimiento de acuerdos, clasificación documental o consultas RAG. Tienen datos accesibles, bajo riesgo y métrica clara.",
    connection:
      "Pilotos de baja fricción construyen confianza para sistemas más autónomos.",
    challenge:
      "Prioriza 5 flujos GEN+ con impacto, facilidad, riesgo y datos disponibles.",
  },
  {
    id: "q26",
    moduleId: "gobernanza-roi",
    level: "base",
    question:
      "¿Qué información nunca deberías pegar sin revisar en un modelo público?",
    whyItMatters:
      "La productividad no justifica fuga de información.",
    answer:
      "Datos personales, contratos confidenciales, credenciales, secretos comerciales, información de clientes, propiedad intelectual sensible o material regulado sin política clara.",
    connection:
      "La clasificación de datos es una habilidad base de IA profesional.",
    challenge:
      "Crea una política simple: público, interno, confidencial y restringido.",
  },
  {
    id: "q27",
    moduleId: "vision-computacional",
    level: "intermedio",
    question:
      "¿Qué necesitas antes de entrenar un detector visual para obra?",
    whyItMatters:
      "El modelo no compensa un dataset pobre.",
    answer:
      "Necesitas objetivo visual, clases, criterio de etiqueta, imágenes representativas, variabilidad, QA de etiquetas, split train/val/test y métrica de aceptación.",
    connection:
      "En visión, la base de valor es evidencia visual curada.",
    challenge:
      "Define clases y criterio de etiqueta para detectar EPP.",
  },
  {
    id: "q28",
    moduleId: "vibe-coding",
    level: "experto",
    question:
      "¿Cómo decides si un prototipo IA debe seguir como demo estática o pasar a backend real?",
    whyItMatters:
      "Conectar infraestructura antes de validar valor crea deuda.",
    answer:
      "Pasa a backend cuando hay usuarios reales, datos dinámicos, autenticación, persistencia, auditoría o integración. Antes, demo estática con mocks puede validar narrativa y flujo.",
    connection:
      "La arquitectura debe crecer cuando el riesgo y el valor lo justifican.",
    challenge:
      "Define los triggers para convertir este entrenador en RAG real.",
  },
  {
    id: "q29",
    moduleId: "multiagentes",
    level: "intermedio",
    question:
      "¿Qué rol humano queda cuando los agentes ejecutan más tareas?",
    whyItMatters:
      "El profesional se mueve de operador a orquestador y evaluador.",
    answer:
      "Queda dirección de objetivo, criterio, validación, priorización, gobierno, diseño de sistemas y decisiones de alto impacto.",
    connection:
      "Aprender IA es aprender a dirigir sistemas, no solo a conversar con chats.",
    challenge:
      "Describe tu rol como director de un squad IA para GEN+.",
  },
  {
    id: "q30",
    moduleId: "mapa-ia",
    level: "experto",
    question:
      "¿Por qué la ventaja competitiva no está en 'el mejor modelo'?",
    whyItMatters:
      "Los modelos se commoditizan; los sistemas y datos propios no.",
    answer:
      "Porque muchos acceden a modelos similares. La ventaja está en datos curados, procesos, casos de uso, distribución, UX, evals, seguridad y aprendizaje acumulado.",
    connection:
      "GEN+ debe construir activos reutilizables, no solo usar herramientas.",
    challenge:
      "Define 5 activos IA propios que GEN+ debería acumular este trimestre.",
  },
  {
    id: "q31",
    moduleId: "automatizacion-mcp",
    level: "base",
    question:
      "¿Qué diferencia hay entre una automatización con reglas y una automatización con IA?",
    whyItMatters:
      "No todas las automatizaciones necesitan modelos.",
    answer:
      "Reglas sirven cuando el flujo es estable y determinista. IA sirve cuando hay lenguaje, documentos, imágenes, ambigüedad, clasificación o síntesis contextual.",
    connection:
      "El buen arquitecto usa IA donde aporta, no donde complica.",
    challenge:
      "Separa un flujo de seguimiento comercial en reglas, IA y aprobación humana.",
  },
  {
    id: "q32",
    moduleId: "rag-conocimiento",
    level: "avanzado",
    question:
      "¿Qué significa que el conocimiento GEN+ sea infraestructura viva?",
    whyItMatters:
      "Una base estática se vuelve obsoleta; una infraestructura mejora con cada proyecto.",
    answer:
      "Significa capturar fuentes, limpiarlas, estructurarlas, indexarlas, consultarlas, validar respuestas y convertir aprendizajes en activos reutilizables.",
    connection:
      "Cada documento nuevo debe alimentar productos, cursos, propuestas y agentes.",
    challenge:
      "Diseña el flujo mensual para ingresar nuevas fuentes a este repo.",
  },
  {
    id: "q33",
    moduleId: "ai-web-engineering",
    level: "intermedio",
    question:
      "¿Por qué una app IA necesita más estados visuales que una app tradicional?",
    whyItMatters:
      "El usuario debe entender si la IA está pensando, buscando fuentes, llamando herramientas o esperando aprobación.",
    answer:
      "Porque los procesos IA son probabilísticos y a veces largos. La UI debe mostrar carga, retrieval, tool calls, errores, confianza, fuentes y acciones pendientes.",
    connection:
      "La confianza en IA también se diseña desde la interfaz.",
    challenge:
      "Diseña los estados de UI de un chat RAG con agente y aprobación humana.",
  },
  {
    id: "q34",
    moduleId: "ai-web-engineering",
    level: "avanzado",
    question:
      "¿Por qué el frontend no debe llamar directamente a un modelo con API key?",
    whyItMatters:
      "Una demo puede funcionar, pero un producto real debe proteger secretos, costos y datos.",
    answer:
      "Porque el navegador expone variables públicas. Un backend/BFF debe manejar credenciales, rate limits, auth, logs, retrieval, redacción y políticas.",
    connection:
      "Arquitectura web e IA se encuentran en seguridad, costo y trazabilidad.",
    challenge:
      "Define los endpoints mínimos para convertir este entrenador en app RAG real.",
  },
  {
    id: "q35",
    moduleId: "evals-observabilidad",
    level: "avanzado",
    question:
      "¿Qué diferencia hay entre probar una respuesta manualmente y crear un eval?",
    whyItMatters:
      "La prueba manual no escala ni protege contra regresiones.",
    answer:
      "Un eval define dataset, respuesta esperada, criterio, métrica y repetición. Permite comparar versiones de prompt, modelo, retrieval o herramienta.",
    connection:
      "Los evals convierten aprendizaje subjetivo en control de calidad.",
    challenge:
      "Crea 10 evals para medir si este entrenador enseña agentes IA correctamente.",
  },
  {
    id: "q36",
    moduleId: "evals-observabilidad",
    level: "experto",
    question:
      "¿Qué debe mostrar una traza de un agente para poder depurarlo?",
    whyItMatters:
      "Sin trazas no hay auditoría ni mejora confiable.",
    answer:
      "Debe mostrar input, modelo, prompt, fuentes recuperadas, tool calls, handoffs, guardrails, latencia, costo, errores, aprobaciones y output final.",
    connection:
      "La observabilidad es el equivalente del historial clínico de un agente.",
    challenge:
      "Define los campos de trace para una ejecución de agente PMO.",
  },
  {
    id: "q37",
    moduleId: "seguridad-agentica",
    level: "avanzado",
    question:
      "¿Por qué prompt injection es más peligroso cuando hay RAG y herramientas?",
    whyItMatters:
      "El modelo empieza a leer contenido externo y puede actuar sobre sistemas reales.",
    answer:
      "Porque un documento o web puede incluir instrucciones maliciosas. El sistema debe tratar contenido recuperado como datos no confiables, no como instrucciones.",
    connection:
      "La seguridad agentic separa instrucciones, datos, permisos y acciones.",
    challenge:
      "Escribe una regla de sistema que impida que documentos recuperados cambien permisos.",
  },
  {
    id: "q38",
    moduleId: "seguridad-agentica",
    level: "ultra",
    question:
      "¿Cómo diseñas permisos mínimos para un agente con herramientas?",
    whyItMatters:
      "Un agente debe tener solo el poder necesario para su objetivo.",
    answer:
      "Defino rol, datos permitidos, herramientas permitidas, operaciones prohibidas, límites de monto/alcance, aprobación requerida y logs obligatorios.",
    connection:
      "Least privilege es más importante en agentes porque combinan razonamiento y acción.",
    challenge:
      "Crea una matriz de permisos para agentes de reuniones, ventas, PMO y tutoría.",
  },
  {
    id: "q39",
    moduleId: "context-engineering",
    level: "ultra",
    question:
      "¿Qué es context engineering y por qué es más importante que escribir prompts largos?",
    whyItMatters:
      "El modelo mejora cuando recibe el contexto correcto, no el contexto máximo.",
    answer:
      "Es diseñar qué instrucciones, memoria, fuentes, estado, ejemplos, políticas y resultados de herramientas recibe el modelo en cada paso.",
    connection:
      "Prompting es una parte; context engineering diseña todo el sistema de información alrededor del modelo.",
    challenge:
      "Define el paquete de contexto ideal para una pregunta avanzada sobre RAG.",
  },
  {
    id: "q40",
    moduleId: "context-engineering",
    level: "ultra",
    question:
      "¿Qué memoria debería tener este asistente experto y qué memoria debería evitar?",
    whyItMatters:
      "La memoria puede crear personalización o fijar errores y datos sensibles.",
    answer:
      "Debe recordar preferencias de aprendizaje, rutas, decisiones aprobadas y conceptos dominados. Debe evitar secretos, datos sensibles innecesarios e inferencias no confirmadas.",
    connection:
      "La memoria útil tiene política de escritura, revisión, caducidad y borrado.",
    challenge:
      "Diseña una política de memoria para Alejandro, GEN+ y AECODE.",
  },
  {
    id: "q41",
    moduleId: "multiagentes",
    level: "ultra",
    question:
      "¿Qué patrón multiagente usarías para crear una propuesta comercial de IA?",
    whyItMatters:
      "El patrón define control, calidad y costo.",
    answer:
      "Usaría supervisor-worker con roles: investigador, arquitecto de solución, analista ROI, redactor y revisor de riesgos, con aprobación humana final.",
    connection:
      "Multiagente sirve cuando cada rol agrega especialización o control verificable.",
    challenge:
      "Diseña handoffs entre esos cinco agentes.",
  },
  {
    id: "q42",
    moduleId: "automatizacion-mcp",
    level: "ultra",
    question:
      "¿Cómo explicarías MCP de manera sencilla pero técnicamente correcta?",
    whyItMatters:
      "MCP será clave para conectar agentes con herramientas y datos sin integraciones cerradas.",
    answer:
      "MCP es un estándar para que aplicaciones IA descubran y usen recursos, prompts y herramientas externas mediante contratos definidos.",
    connection:
      "MCP separa el agente de los sistemas donde vive el contexto.",
    challenge:
      "Diseña un MCP server para exponer guías, playbooks y búsqueda GEN+.",
  },
  {
    id: "q43",
    moduleId: "vibe-coding",
    level: "ultra",
    question:
      "¿Qué separa vibe coding profesional de solo pedirle pantallas a una IA?",
    whyItMatters:
      "El objetivo es construir productos mantenibles, no demos frágiles.",
    answer:
      "Vibe coding profesional empieza por producto, define arquitectura, datos, pruebas, seguridad, documentación, build y plan de evolución.",
    connection:
      "La IA acelera; el criterio de producto dirige.",
    challenge:
      "Convierte este entrenador en un PRD para versión RAG con métricas.",
  },
  {
    id: "q44",
    moduleId: "gobernanza-roi",
    level: "ultra",
    question:
      "¿Cómo decides si un agente puede actuar solo o debe pedir aprobación?",
    whyItMatters:
      "La autonomía mal calibrada crea riesgo operativo.",
    answer:
      "Evalúo impacto, reversibilidad, sensibilidad de datos, costo, reputación, certeza del modelo, historial de errores y existencia de rollback.",
    connection:
      "Autonomía gobernada significa graduar permisos según riesgo y evidencia.",
    challenge:
      "Crea una tabla: acción, riesgo, puede ejecutar, requiere aprobación, bloqueado.",
  },
];

export const learningPaths = [
  {
    title: "Ruta 1: Fundamentos con criterio",
    audience: "Alejandro como estratega y builder",
    modules: ["mapa-ia", "modelos-prompting", "gobernanza-roi"],
    activation: "Explicar IA sin humo y elegir el tipo correcto de solución.",
    evidence: "Mapa de decisión IA por problema: clasificar, predecir, generar, consultar o ejecutar.",
  },
  {
    title: "Ruta 2: Constructor de productos IA",
    audience: "Product engineer / startup CTO",
    modules: ["vibe-coding", "rag-conocimiento", "agentes", "automatizacion-mcp"],
    activation: "Pasar de idea a prototipo funcional con arquitectura escalable.",
    evidence: "Repo con PRD, SPEC, demo, mock data, typecheck, build y backlog.",
  },
  {
    title: "Ruta 3: IA aplicada a AEC",
    audience: "GEN+, AECODE, VisionPro y clientes AEC",
    modules: ["ia-aec", "vision-computacional", "gobernanza-roi"],
    activation: "Convertir fricciones de obra, BIM y educación técnica en casos medibles.",
    evidence: "Piloto con proceso, datos, dashboard, métrica y plan de adopción.",
  },
  {
    title: "Ruta 4: Arquitecto agentic",
    audience: "Automatización avanzada y sistemas multiagente",
    modules: ["agentes", "automatizacion-mcp", "multiagentes", "gobernanza-roi"],
    activation: "Diseñar agentes con herramientas, estado, memoria, evaluación y supervisión.",
    evidence: "Arquitectura de agente con permisos, logs, estado, evals y HITL.",
  },
  {
    title: "Ruta 5: Ultra avanzado agentic",
    audience: "Arquitecto IA / CTO de productos agentic",
    modules: ["context-engineering", "seguridad-agentica", "multiagentes", "evals-observabilidad"],
    activation: "Diseñar sistemas con memoria, seguridad, evals, observabilidad, handoffs y autonomía gobernada.",
    evidence: "Diseño completo de agente productivo con contexto, tools, trazas, guardrails, evals y permisos.",
  },
  {
    title: "Ruta 6: Desarrollo web IA full-stack",
    audience: "Builder de apps IA, RAG y dashboards",
    modules: ["ai-web-engineering", "rag-conocimiento", "vibe-coding", "evals-observabilidad"],
    activation: "Pasar de demo estática a producto IA con backend seguro, streaming, datos y medición.",
    evidence: "API + UI + schema + eventos + panel de fuentes + logs de calidad.",
  },
];

export const playbooks: Playbook[] = [
  {
    id: "diagnostico-proceso",
    title: "Diagnóstico de proceso para oportunidad IA",
    useWhen: "Cuando una empresa pide IA pero aún no tiene caso de uso claro.",
    output: "Matriz problema -> solución IA -> datos -> integración -> métrica -> riesgo.",
    steps: [
      "Definir usuario y decisión que se quiere mejorar.",
      "Mapear entrada, transformación, responsable, herramienta, salida y métrica actual.",
      "Identificar fricción: tiempo, error, costo, riesgo o baja trazabilidad.",
      "Seleccionar tipo de IA: generación, RAG, predicción, visión o agente.",
      "Diseñar piloto mínimo con baseline y criterio de éxito.",
    ],
    template:
      "Actúa como consultor de IA aplicada. Analiza este proceso: [proceso]. Entrega tabla con entrada, salida, responsable, fricción, oportunidad IA, datos, integración, métrica, riesgo y primer piloto.",
    hiddenRisk:
      "Elegir casos vistosos pero poco frecuentes o imposibles de medir.",
  },
  {
    id: "diseno-agente",
    title: "Diseño de agente IA gobernado",
    useWhen: "Cuando un asistente debe ejecutar pasos o usar herramientas.",
    output: "Ficha de agente con objetivo, herramientas, memoria, permisos, salida, logs y escalamiento.",
    steps: [
      "Definir un objetivo único y observable.",
      "Listar entradas, fuentes y herramientas permitidas.",
      "Definir límites: qué puede hacer solo y qué requiere aprobación.",
      "Diseñar estado, memoria, errores y trazabilidad.",
      "Medir tasa de éxito, costo por tarea y escalamiento humano.",
    ],
    template:
      "Diseña un agente para [proceso]. Incluye objetivo, usuarios, entradas, herramientas, permisos, memoria, reglas, salidas, métricas, límites de autonomía, errores y revisión humana.",
    hiddenRisk:
      "Permisos excesivos que convierten un error de interpretación en acción real.",
  },
  {
    id: "arquitectura-rag",
    title: "Arquitectura RAG para base de conocimiento",
    useWhen: "Cuando la respuesta debe estar anclada en documentos internos.",
    output: "Pipeline RAG con fuentes, limpieza, metadata, embeddings, recuperación, citas y evals.",
    steps: [
      "Inventariar documentos por tipo, fecha, dueño, confidencialidad y vigencia.",
      "Limpiar, dividir en chunks y añadir metadata útil.",
      "Crear embeddings y vector store con filtros por rol.",
      "Definir prompt de respuesta con citas y abstención ante incertidumbre.",
      "Evaluar retrieval y respuesta final con preguntas reales.",
    ],
    template:
      "Diseña RAG para consultar [documentos]. Define fuentes, limpieza, chunking, metadata, embeddings, vector store, filtros, reranking, citas, permisos y evaluación.",
    hiddenRisk:
      "Indexar material obsoleto o confidencial sin permisos.",
  },
  {
    id: "roi-ia",
    title: "ROI de automatización IA",
    useWhen: "Cuando necesitas justificar si un piloto debe escalar.",
    output: "Escenarios conservador, medio y agresivo con ahorro, costo, riesgo y decisión.",
    steps: [
      "Medir frecuencia y tiempo actual por tarea.",
      "Estimar costo por hora y costo del error.",
      "Calcular costo de implementación y operación mensual.",
      "Definir porcentaje realista de automatización asistida.",
      "Comparar retorno neto y riesgo operativo.",
    ],
    template:
      "Calcula ROI para automatizar [tarea]. Considera frecuencia, tiempo actual, costo/hora, errores, costo del error, costo de implementación, costo mensual y ahorro esperado.",
    hiddenRisk:
      "Contar ahorro bruto sin considerar revisión humana, mantenimiento y adopción.",
  },
  {
    id: "computer-vision",
    title: "Piloto de computer vision en obra",
    useWhen: "Cuando hay evidencia visual repetitiva y una decisión operacional clara.",
    output: "Plan piloto con cámaras, dataset, modelo, métricas, dashboard, alertas y validación humana.",
    steps: [
      "Definir evento visual y acción esperada.",
      "Diseñar captura: cámara, zona, iluminación, frecuencia y privacidad.",
      "Crear dataset etiquetado con variabilidad real.",
      "Seleccionar modelo y métrica técnica/operativa.",
      "Integrar dashboard, alerta y revisión humana.",
    ],
    template:
      "Diseña un sistema de visión computacional para detectar [evento]. Define cámaras, dataset, etiquetado, modelo, métricas, edge/nube, dashboard, alertas y piloto.",
    hiddenRisk:
      "Medir precisión del modelo y olvidar si la alerta cambia el comportamiento en campo.",
  },
  {
    id: "vibe-producto",
    title: "Vibe coding con estándar de producto",
    useWhen: "Cuando quieres prototipar rápido sin crear deuda innecesaria.",
    output: "Demo funcional con PRD, SPEC, decisiones, backlog, scripts y build verificable.",
    steps: [
      "Convertir idea en problema, usuario, flujo, datos y criterio de éxito.",
      "Crear arquitectura mínima y componentes reutilizables.",
      "Usar mocks seguros si no hay backend.",
      "Validar typecheck, build y flujo principal.",
      "Documentar deuda, riesgos y siguiente iteración.",
    ],
    template:
      "Construye un MVP de [producto]. Antes de código define objetivo, usuario, loop crítico, pantallas, datos mock, arquitectura, riesgos y criterios de aceptación.",
    hiddenRisk:
      "Confundir velocidad con falta de estructura.",
  },
  {
    id: "gobernanza",
    title: "Checklist de gobernanza IA",
    useWhen: "Antes de conectar IA a datos sensibles, clientes o decisiones críticas.",
    output: "Matriz de riesgo con controles mínimos y decisión: permitir, limitar, revisar o bloquear.",
    steps: [
      "Clasificar datos por sensibilidad.",
      "Definir usuario, impacto y consecuencia de error.",
      "Revisar permisos, logs, retención y proveedores.",
      "Agregar revisión humana para acciones críticas.",
      "Monitorear costos, fallos, sesgos y quejas.",
    ],
    template:
      "Evalúa riesgos de [caso IA]. Clasifica datos, impacto, autonomía, sesgos, privacidad, prompt injection, permisos, logs, revisión humana y controles mínimos.",
    hiddenRisk:
      "Aceptar outputs por autoridad percibida sin evidencia ni trazabilidad.",
  },
  {
    id: "ai-web-fullstack",
    title: "Arquitectura web para app IA full-stack",
    useWhen: "Cuando una demo debe convertirse en producto con RAG, sesiones, streaming y seguridad.",
    output: "Blueprint frontend + BFF + vector store + tools + streaming + logs + evals.",
    steps: [
      "Definir experiencia: chat, fuentes, eventos, acciones y feedback.",
      "Separar frontend, backend/BFF, retrieval, herramientas y almacenamiento.",
      "Diseñar schemas de request/response y estados de error.",
      "Agregar streaming para progreso y respuestas parciales.",
      "Registrar trazas, costos, fuentes y feedback por sesión.",
    ],
    template:
      "Diseña una arquitectura full-stack para [app IA]. Incluye UI, backend, auth, datos, RAG, tools, streaming, schemas, logs, evals, seguridad y despliegue.",
    hiddenRisk:
      "Construir un chat bonito sin backend seguro, sin trazabilidad y sin control de costos.",
  },
  {
    id: "context-engineering",
    title: "Context engineering para respuestas expertas",
    useWhen: "Cuando el modelo necesita memoria, fuentes, estado, políticas y ejemplos correctos en cada paso.",
    output: "Paquete de contexto con instrucciones, memoria, retrieval, estado, tools y política de exclusión.",
    steps: [
      "Separar instrucciones permanentes, contexto de sesión y datos recuperados.",
      "Definir qué memoria se permite guardar y qué debe expirar.",
      "Incluir solo fuentes relevantes y metadata de confianza.",
      "Agregar resultados de herramientas como datos, no como instrucciones.",
      "Comprimir o resumir contexto antiguo sin perder decisiones críticas.",
    ],
    template:
      "Diseña el contexto ideal para [tarea IA]. Separa system, memoria, fuentes RAG, estado, herramientas, ejemplos, restricciones, exclusiones y criterio de abstención.",
    hiddenRisk:
      "Meter demasiado contexto y reducir precisión, costo y seguridad.",
  },
  {
    id: "seguridad-agentica",
    title: "Threat model de agente con herramientas",
    useWhen: "Antes de permitir que un agente lea datos internos o ejecute acciones.",
    output: "Modelo de amenazas con permisos, ataques, guardrails, aprobaciones y respuesta a incidentes.",
    steps: [
      "Listar datos, herramientas y acciones disponibles.",
      "Identificar ataques: prompt injection, tool misuse, exfiltración, over-permission y memoria peligrosa.",
      "Definir permisos mínimos por rol y acción.",
      "Agregar guardrails de entrada, salida y herramienta.",
      "Diseñar auditoría, alertas, rollback e incident response.",
    ],
    template:
      "Crea un threat model para un agente que puede [acciones]. Incluye assets, actores, permisos, ataques, controles, aprobaciones, logs, rollback e incident response.",
    hiddenRisk:
      "Creer que una instrucción del sistema reemplaza controles técnicos.",
  },
];

export const externalReferences = [
  {
    label: "OpenAI Agents",
    url: "https://platform.openai.com/docs/guides/agents",
    note: "Agentes, herramientas, MCP, guardrails, human review, tracing y prácticas de producción.",
  },
  {
    label: "OpenAI Tools",
    url: "https://platform.openai.com/docs/guides/tools?api-mode=responses",
    note: "Web search, file search, function calling y remote MCP para extender modelos con datos y acciones.",
  },
  {
    label: "Model Context Protocol",
    url: "https://modelcontextprotocol.io/docs/getting-started/intro",
    note: "Estándar abierto para conectar aplicaciones IA con datos, herramientas y workflows.",
  },
  {
    label: "MCP Tools",
    url: "https://modelcontextprotocol.io/docs/concepts/tools",
    note: "Tools model-controlled, schemas, resultados estructurados, errores, confirmación humana y seguridad.",
  },
  {
    label: "NIST AI RMF 1.0",
    url: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10",
    note: "Marco de gestión de riesgos para IA confiable y responsable.",
  },
  {
    label: "EU AI Act",
    url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
    note: "Marco legal de IA basado en riesgo para desarrolladores y deployers.",
  },
  {
    label: "Gemini API Models",
    url: "https://ai.google.dev/gemini-api/docs/models",
    note: "Modelos multimodales, agentes, herramientas, embeddings y versiones de Gemini.",
  },
  {
    label: "LangGraph",
    url: "https://docs.langchain.com/oss/python/langgraph",
    note: "Orquestación de agentes de larga duración, estado, streaming y human-in-the-loop.",
  },
  {
    label: "LangGraph Durable Execution",
    url: "https://docs.langchain.com/oss/python/langgraph/durable-execution",
    note: "Persistencia de estado para pausar, reanudar y recuperar workflows agentic de larga duración.",
  },
  {
    label: "Next.js App Router",
    url: "https://nextjs.org/docs/app",
    note: "Server Components, rutas, layouts y base moderna para apps web full-stack.",
  },
  {
    label: "Next.js Backend for Frontend",
    url: "https://nextjs.org/docs/app/guides/backend-for-frontend",
    note: "Patrón BFF para exponer endpoints, manejar datos, acciones y capa pública de API.",
  },
];
