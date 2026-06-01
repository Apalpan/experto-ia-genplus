export type AecMarketSignal = {
  id: string;
  value: string;
  label: string;
  source: string;
  meaning: string;
  genplusImplication: string;
};

export type AecProductWedge = {
  id: string;
  title: string;
  user: string;
  pain: string;
  aiArchitecture: string;
  evidence: string;
  metric: string;
  firstPilot: string;
  risk: string;
};

export type AgenticPattern = {
  id: string;
  title: string;
  simple: string;
  technical: string;
  useWhen: string;
  aecExample: string;
};

export type AecStackLayer = {
  id: string;
  layer: string;
  role: string;
  examples: string[];
  decisionRule: string;
  risk: string;
};

export type AecPromptTemplate = {
  id: string;
  title: string;
  useWhen: string;
  template: string;
  output: string;
};

export type AecGlossaryTerm = {
  term: string;
  simple: string;
  technical: string;
  aecUse: string;
};

export const aecMarketSignals: AecMarketSignal[] = [
  {
    id: "global-ai-mainstream",
    value: "88%",
    label: "organizaciones usan IA en al menos una funcion",
    source: "Fuente cargada: Documentacion Maestra GEN+ / AECODE",
    meaning:
      "La adopcion ya no es marginal. El mercado dejo de preguntar si IA importa y empezo a preguntar como capturar valor real.",
    genplusImplication:
      "GEN+ debe vender implementacion, redisenio de flujos, gobierno y ROI, no solo capacitacion o herramientas.",
  },
  {
    id: "high-performers",
    value: "6%",
    label: "son high performers que atribuyen impacto fuerte al EBIT",
    source: "Fuente cargada: Documentacion Maestra GEN+ / AECODE",
    meaning:
      "La mayoria adopta IA, pero pocos convierten adopcion en resultado financiero.",
    genplusImplication:
      "La oportunidad comercial esta en cerrar el gap entre pilotos y operacion: casos, datos, evals, cambio operativo y medicion.",
  },
  {
    id: "aec-adoption-range",
    value: "27-74%",
    label: "rango reportado de adopcion IA en AEC segun metodologia",
    source: "Fuente cargada: Bluebeam global / Pasadena en documento",
    meaning:
      "AEC ya esta entrando en IA, pero la medicion varia por mercado y definicion de uso.",
    genplusImplication:
      "LATAM tiene ventana: adaptar casos globales a idioma, normas, costos, cultura y procesos locales.",
  },
  {
    id: "agentic-scale",
    value: "23%",
    label: "organizaciones escalan agentes en al menos una funcion",
    source: "Fuente cargada: Documentacion Maestra GEN+ / AECODE",
    meaning:
      "La frontera esta pasando de copilotos a agentes con herramientas y estado.",
    genplusImplication:
      "AgentFlow, PMO agents, agentes comerciales y tutores AECODE deben diseniarse con permisos, trazas y aprobacion humana.",
  },
  {
    id: "productivity-study",
    value: "+14-34%",
    label: "mejora de productividad reportada en knowledge work asistido",
    source: "Fuente cargada: Brynjolfsson/Li/Raymond citado en documento",
    meaning:
      "La IA produce mas impacto en usuarios menos expertos cuando transfiere patrones de expertos.",
    genplusImplication:
      "AECODE puede convertir conocimiento experto GEN+ en rutas, tutores, rubricas y feedback para acelerar talento AEC.",
  },
  {
    id: "qto-time-savings",
    value: "76%",
    label: "ahorro de tiempo reportado en QTO comparado con takeoff tradicional",
    source: "Fuente cargada: Togal.AI / Universidad de Kansas citado",
    meaning:
      "Quantity takeoff es uno de los casos AEC con ROI mas facil de explicar.",
    genplusImplication:
      "GEN+ TakeoffAI es una cuña comercial fuerte si se localiza a normas, partidas, idioma y formatos LATAM.",
  },
  {
    id: "alice-scheduling",
    value: "17%",
    label: "reduccion promedio de duracion reportada en planificacion",
    source: "Fuente cargada: ALICE Technologies citado",
    meaning:
      "La planificacion generativa puede afectar costo, duracion y recursos cuando se conecta con restricciones reales.",
    genplusImplication:
      "La propuesta GEN+ no debe vender solo cronogramas automaticos, sino escenarios, restricciones y decisiones trazables.",
  },
  {
    id: "buildots-rework",
    value: "4.3%",
    label: "reduccion de retrabajo reportada en site monitoring",
    source: "Fuente cargada: Buildots / Intel citado",
    meaning:
      "La vision en obra aporta cuando detecta desviaciones temprano y cierra accion operativa.",
    genplusImplication:
      "VisionPro/SiteVision debe medir alertas utiles, retrabajo evitado, tiempo de reaccion y evidencia auditada.",
  },
  {
    id: "nplan-data",
    value: "750k",
    label: "cronogramas historicos usados como base de entrenamiento reportada",
    source: "Fuente cargada: nPlan citado",
    meaning:
      "La ventaja en prediccion y riesgo depende de volumen y calidad de historicos.",
    genplusImplication:
      "GEN+ debe construir data products desde proyectos, cronogramas, RFIs, actas y reportes, no depender solo de prompts.",
  },
];

export const aecProductWedges: AecProductWedge[] = [
  {
    id: "genplus-takeoff-ai",
    title: "GEN+ TakeoffAI",
    user: "Estimador, oficina tecnica, preconstruccion",
    pain:
      "Los metrados y takeoffs consumen horas, dependen de lectura manual y se desconectan de partidas, costos y cambios.",
    aiArchitecture:
      "Parser de planos/BIM + vision/OCR + reglas de medicion + RAG normativo + verificador humano + dashboard de diferencias.",
    evidence:
      "La fuente cargada destaca QTO como caso con ahorro de tiempo alto y facil explicacion comercial.",
    metric: "Horas por set de planos, diferencia porcentual de cantidades, retrabajo evitado.",
    firstPilot:
      "Elegir una disciplina y comparar takeoff manual vs asistido en 3 proyectos reales.",
    risk:
      "Prometer precision total sin controlar calidad del plano, version, escala, criterio de medicion y revision humana.",
  },
  {
    id: "sitevision",
    title: "GEN+ SiteVision",
    user: "Residente, seguridad, PMO, direccion de obra",
    pain:
      "El avance real, seguridad y retrabajo se detectan tarde porque la evidencia visual queda dispersa.",
    aiArchitecture:
      "Camara/foto/video + edge detection + storage probatorio + RAG de reportes + agente de alertas + dashboard ejecutivo.",
    evidence:
      "Las fuentes cargadas resaltan Buildots/OpenSpace y vision edge+cloud como patron AEC maduro.",
    metric: "Retrabajo evitado, alertas utiles, horas de reporte, tiempo de reaccion.",
    firstPilot:
      "Una zona de obra, dos eventos visuales y revision humana semanal durante 6 semanas.",
    risk:
      "Falsos positivos, privacidad, mala cobertura visual y alert fatigue.",
  },
  {
    id: "designspark",
    title: "GEN+ DesignSpark",
    user: "Arquitectura, real estate, desarrollo conceptual",
    pain:
      "La evaluacion temprana de alternativas toma tiempo y no siempre cruza normativa, soleamiento, densidad y costo.",
    aiArchitecture:
      "Generacion parametrica + reglas urbanas + RAG normativo + simulaciones + comparador de escenarios.",
    evidence:
      "La fuente cargada posiciona diseno generativo tipo Forma/TestFit como una cuña para GEN+.",
    metric: "Alternativas evaluadas por hora, cumplimiento normativo, densidad viable, decisiones tempranas.",
    firstPilot:
      "Un lote real con reglas locales y 3 escenarios comparados contra proceso manual.",
    risk:
      "Confundir exploracion conceptual con diseno aprobable sin validacion profesional.",
  },
  {
    id: "pmo-agent",
    title: "PMO Agent",
    user: "Gerente de proyecto, planner, oficina tecnica",
    pain:
      "Actas, restricciones, lookahead, cronograma y responsables viven separados.",
    aiArchitecture:
      "RAG documental + extractor de compromisos + agente de seguimiento + approval gates + tablero de riesgos.",
    evidence:
      "El deep research recomienda una PMO agentiva que conecte reuniones, cronograma, costo, seguridad y valorizacion.",
    metric: "Compromisos cerrados a tiempo, restricciones liberadas, tiempo de seguimiento.",
    firstPilot:
      "Procesar 4 reuniones y crear tablero de compromisos con aprobacion humana.",
    risk:
      "Crear tareas sin fuente, duplicar compromisos o asignar responsables incorrectos.",
  },
  {
    id: "rfi-triage",
    title: "RFI Triage Agent",
    user: "Oficina tecnica, BIM manager, contratista",
    pain:
      "RFIs repetidas, vencidas o mal redactadas aumentan friccion y riesgo contractual.",
    aiArchitecture:
      "Clasificador + RAG de planos/contrato/actas + generador de borrador + matriz de impacto.",
    evidence:
      "AEC ofrece documentos, cronograma y evidencia suficientes para un flujo RAG + agente.",
    metric: "Tiempo de redaccion, RFIs reabiertas, dias de respuesta, impacto detectado.",
    firstPilot:
      "Asistencia para redactar RFIs sin envio automatico en un proyecto activo.",
    risk:
      "Enviar una RFI incompleta o declarar impacto sin evidencia.",
  },
  {
    id: "bim-ifc-ids-qa",
    title: "BIM IFC/IDS QA",
    user: "BIM manager, coordinador, QA/QC",
    pain:
      "Los modelos pueden verse bien pero no cumplir requisitos de informacion, propiedades o trazabilidad.",
    aiArchitecture:
      "IFC/IDS + rule engine + IfcOpenShell + RAG tecnico + reporte de brechas y explicacion.",
    evidence:
      "El deep research insiste en que BIM/IFC/IDS es el esqueleto semantico para ventaja compuesta.",
    metric: "Requisitos cumplidos, issues por disciplina, tiempo de QA, retrabajo BIM.",
    firstPilot:
      "Validar una familia de requisitos IDS en modelos existentes y generar reporte ejecutivo.",
    risk:
      "Usar LLM para validar lo que debe ser determinista; la IA debe explicar y priorizar, no reemplazar reglas.",
  },
  {
    id: "aecode-ai-hub",
    title: "AECODE AI Hub",
    user: "Alumno, instructor, empresa B2B",
    pain:
      "El aprendizaje AEC se mide por consumo, no por habilidad demostrada.",
    aiArchitecture:
      "Skill graph + RAG de contenido + tutores verticales + evaluador de evidencia + Skill Passport.",
    evidence:
      "Las fuentes cargadas posicionan AECODE como canal de talento, certificacion y data product.",
    metric: "Skills verificadas, evidencias aprobadas, progreso por rol, retencion.",
    firstPilot:
      "3 bots verticales: BIM-bot, Revit-bot, Carrera-bot con RAG sobre contenido propio.",
    risk:
      "Convertir el AI Hub en chat generico sin rubrica, evidencia ni progresion.",
  },
  {
    id: "state-of-ai-aec-latam",
    title: "State of AI in LATAM AEC",
    user: "GEN+, AECODE, sponsors, comunidad, clientes",
    pain:
      "LATAM carece de datos propios sobre adopcion IA en construccion y habilidades digitales.",
    aiArchitecture:
      "Survey + research pipeline + RAG + dashboard + reporte anual + benchmark por rol/empresa.",
    evidence:
      "La fuente cargada propone data product anual como activo de autoridad y monetizacion.",
    metric: "Respuestas, empresas participantes, sponsors, leads, citas, ventas consultivas.",
    firstPilot:
      "Encuesta base + reporte ejecutivo para AI Construction Summit LATAM.",
    risk:
      "Publicar cifras sin metodologia clara o sin separar fuentes vendor-reported de evidencia independiente.",
  },
];

export const agenticPatterns: AgenticPattern[] = [
  {
    id: "prompt-chaining",
    title: "Prompt chaining",
    simple:
      "Dividir una tarea grande en pasos pequenos donde cada salida alimenta el siguiente paso.",
    technical:
      "Reduce complejidad por llamada, permite validar pasos intermedios y mejora trazabilidad.",
    useWhen:
      "Cuando el proceso tiene etapas claras: extraer, clasificar, resumir, validar, redactar.",
    aecExample:
      "Acta -> compromisos -> responsables -> riesgos -> tareas para aprobacion.",
  },
  {
    id: "routing",
    title: "Routing",
    simple:
      "Enviar cada solicitud al camino correcto: respuesta rapida, RAG, agente, humano o bloqueo.",
    technical:
      "Clasifica intencion, riesgo, sensibilidad, complejidad y necesidad de herramienta.",
    useWhen:
      "Cuando un sistema recibe preguntas de distinto riesgo y no todas deben usar el mismo modelo o flujo.",
    aecExample:
      "Consulta de norma va a RAG; envio a cliente requiere aprobacion; duda simple recibe respuesta corta.",
  },
  {
    id: "parallelization",
    title: "Parallelization",
    simple:
      "Varios analistas IA trabajan en partes diferentes y luego se consolidan resultados.",
    technical:
      "Reduce latencia en analisis independientes y permite consenso/verificacion entre outputs.",
    useWhen:
      "Cuando los subtareas no dependen entre si o conviene comparar enfoques.",
    aecExample:
      "Un agente revisa contrato, otro cronograma y otro RFIs antes de consolidar riesgo de cambio.",
  },
  {
    id: "orchestrator-workers",
    title: "Orchestrator-workers",
    simple:
      "Un coordinador divide trabajo, asigna especialistas y arma la respuesta final.",
    technical:
      "Patron multiagente con supervisor, workers, estado compartido y criterio de cierre.",
    useWhen:
      "Cuando la tarea requiere especialidades distintas y control central.",
    aecExample:
      "Propuesta GEN+: investigador, arquitecto solucion, analista ROI, redactor y revisor de riesgos.",
  },
  {
    id: "evaluator-optimizer",
    title: "Evaluator-optimizer",
    simple:
      "Un agente produce y otro evalua, corrige o pide iteracion.",
    technical:
      "Crea loop de calidad con rubricas, criterios, scoring y reintentos controlados.",
    useWhen:
      "Cuando el output debe cumplir estandar alto antes de entregarse.",
    aecExample:
      "Generador de reporte semanal + verificador de fuentes, riesgos y formato ejecutivo.",
  },
  {
    id: "react",
    title: "ReAct",
    simple:
      "El modelo alterna razonamiento y accion: piensa, usa herramienta, observa resultado y ajusta.",
    technical:
      "Combina reasoning traces con tool calls para reducir alucinaciones y fundamentar respuestas.",
    useWhen:
      "Cuando el modelo necesita consultar sistemas externos antes de responder.",
    aecExample:
      "Buscar clausula contractual, revisar cronograma, calcular impacto y redactar recomendacion.",
  },
  {
    id: "agentic-rag",
    title: "Agentic RAG",
    simple:
      "El agente decide que buscar, donde buscar, cuando buscar de nuevo y como combinar evidencia.",
    technical:
      "Extiende RAG simple con planificacion, query rewriting, tool selection, reranking y verificacion.",
    useWhen:
      "Cuando una pregunta requiere varias fuentes y no basta recuperar un solo fragmento.",
    aecExample:
      "Analizar reclamo cruzando contrato, actas, RFIs, cronograma y correos.",
  },
];

export const aecStackLayers: AecStackLayer[] = [
  {
    id: "deterministic-system",
    layer: "Sistema determinista",
    role:
      "Guarda lo critico: contratos, costos, aprobaciones, usuarios, permisos, IFC, snapshots y bitacoras.",
    examples: ["Postgres", "ERP", "CDE", "BIM 360/ACC", "Drive", "Obsidian"],
    decisionRule:
      "Todo dato que define verdad operacional debe vivir aqui, no dentro del modelo.",
    risk:
      "Usar el LLM como fuente maestra y perder auditabilidad.",
  },
  {
    id: "semantic-layer",
    layer: "Capa semantica",
    role:
      "Convierte documentos, modelos y evidencia en busqueda con contexto, metadata, filtros y citas.",
    examples: ["RAG", "Embeddings", "pgvector", "Qdrant", "Weaviate", "Pinecone"],
    decisionRule:
      "Usar cuando la respuesta depende de fuentes internas o actualizables.",
    risk:
      "Indexar documentos sin limpieza, version, vigencia ni permisos.",
  },
  {
    id: "agent-layer",
    layer: "Capa agentic",
    role:
      "Planifica, usa herramientas, conserva estado, coordina especialistas y pide aprobacion.",
    examples: ["LangGraph", "OpenAI Agents", "CrewAI", "AutoGen", "Semantic Kernel"],
    decisionRule:
      "Usar cuando la tarea tiene pasos, herramientas y decisiones intermedias.",
    risk:
      "Construir multiagentes antes de definir estado, evals y permisos.",
  },
  {
    id: "vision-layer",
    layer: "Vision edge+cloud",
    role:
      "Detecta eventos visuales cerca de la obra y consolida evidencia para analisis y decision.",
    examples: ["YOLO", "ViT", "Roboflow", "Jetson", "RTSP", "NVR"],
    decisionRule:
      "Usar cuando la fuente principal de verdad es imagen o video continuo.",
    risk:
      "Enviar todo a la nube sin filtrar, encareciendo ancho de banda, latencia y privacidad.",
  },
  {
    id: "automation-layer",
    layer: "Automatizacion",
    role:
      "Conecta triggers, formularios, correos, CRM, tareas, reportes, calendario y notificaciones.",
    examples: ["n8n", "Make", "Zapier", "Webhooks", "MCP"],
    decisionRule:
      "Usar para flujos repetibles y conectores, separando razonamiento de ejecucion.",
    risk:
      "Automatizar procesos rotos o duplicar integraciones que MCP/API ya resuelve.",
  },
  {
    id: "quality-governance",
    layer: "Calidad y gobierno",
    role:
      "Mide calidad, costo, latencia, seguridad, cumplimiento, incidentes, evals y trazabilidad.",
    examples: ["NIST AI RMF", "ISO/IEC 42001", "Evals", "Langfuse", "LangSmith", "Audit logs"],
    decisionRule:
      "Debe existir antes de escalar agentes o conectar datos sensibles.",
    risk:
      "Una demo convincente sin control de riesgo, costo o regresiones.",
  },
];

export const aecPromptTemplates: AecPromptTemplate[] = [
  {
    id: "aec-rag-system",
    title: "Sistema RAG AEC con fuentes",
    useWhen:
      "Para responder sobre contratos, RFIs, actas, normas o especificaciones sin inventar.",
    template:
      "Actua como asistente RAG AEC. Responde solo con contexto recuperado. Si falta evidencia, declara incertidumbre. Entrega: respuesta, fuentes, supuestos, riesgos y siguiente accion.",
    output: "Respuesta citada + tabla de evidencia + decision recomendada.",
  },
  {
    id: "qto-pilot",
    title: "Piloto QTO automatizado",
    useWhen:
      "Para evaluar si un set de planos/modelos sirve como piloto de takeoff asistido.",
    template:
      "Evalua este caso QTO. Define disciplina, baseline manual, datos requeridos, criterio de medicion, validacion humana, riesgos y ROI preliminar.",
    output: "Plan de piloto QTO de 4-6 semanas.",
  },
  {
    id: "pmo-agent-meeting",
    title: "Agente PMO de reuniones",
    useWhen:
      "Para convertir actas o transcripciones en compromisos, riesgos y tareas aprobables.",
    template:
      "Extrae compromisos desde el acta. Devuelve JSON con responsable, fecha, evidencia textual, riesgo, prioridad y si requiere aprobacion humana.",
    output: "JSON operativo + resumen ejecutivo.",
  },
  {
    id: "bim-ids-qa",
    title: "QA BIM con IFC/IDS",
    useWhen:
      "Para validar cumplimiento informacional y generar reporte de brechas.",
    template:
      "Actua como auditor BIM. Compara requisitos IDS contra objetos IFC. Reporta incumplimientos, severidad, elemento, propiedad, evidencia y recomendacion.",
    output: "Matriz de incumplimientos + acciones por disciplina.",
  },
  {
    id: "aecode-skill-ai",
    title: "Skill AECODE IA verificable",
    useWhen:
      "Para convertir un tema IA en skill con practica, evidencia y rubrica.",
    template:
      "Disenia una skill AECODE sobre [tema]. Incluye objetivo observable, prerequisitos, capsulas, practica, evidencia, rubrica 1-4, feedback IA y validacion humana.",
    output: "Ficha de skill lista para producto.",
  },
];

export const aecGlossaryTerms: AecGlossaryTerm[] = [
  {
    term: "Agentic RAG",
    simple: "RAG donde un agente decide como buscar y combinar evidencia.",
    technical: "Integra planning, query rewriting, tool use, reranking y verificacion.",
    aecUse: "Reclamos, RFIs y analisis contractual multi-fuente.",
  },
  {
    term: "IFC",
    simple: "Formato abierto para describir modelos BIM.",
    technical: "Esquema interoperable de buildingSMART para objetos, propiedades y relaciones.",
    aecUse: "Base para QA/QC, metrados, IDS y modelos enriquecidos.",
  },
  {
    term: "IDS",
    simple: "Checklist computable de informacion BIM requerida.",
    technical: "Information Delivery Specification para validar requisitos de informacion sobre IFC.",
    aecUse: "Control de entregables BIM y requisitos por fase/disciplina.",
  },
  {
    term: "QTO",
    simple: "Extraccion de cantidades para estimacion y presupuesto.",
    technical: "Quantity Takeoff desde planos, modelos, reglas de medicion y catálogos.",
    aecUse: "Preconstruccion, licitaciones, valorizaciones y compras.",
  },
  {
    term: "Edge AI",
    simple: "IA que corre cerca del sensor o camara.",
    technical: "Inferencia local para reducir latencia, ancho de banda y riesgo de privacidad.",
    aecUse: "Deteccion de EPP, zonas de riesgo y eventos en obra.",
  },
  {
    term: "PMO agentiva",
    simple: "PMO asistida por agentes que siguen compromisos y riesgos.",
    technical: "Agentes con estado, RAG, tools, aprobaciones y dashboard de trazabilidad.",
    aecUse: "Actas, lookahead, restricciones, cronograma y alertas.",
  },
  {
    term: "Sistema de registro",
    simple: "Lugar donde vive la verdad operacional.",
    technical: "Base determinista y auditable para datos criticos.",
    aecUse: "Costos, contratos, cronogramas, aprobaciones, snapshots BIM.",
  },
  {
    term: "Data product",
    simple: "Dato convertido en activo reutilizable y vendible.",
    technical: "Producto con owner, calidad, contratos, usuarios y ciclo de mejora.",
    aecUse: "Reporte State of AI in LATAM AEC, benchmarks y datasets internos.",
  },
  {
    term: "Prompt caching",
    simple: "Reutilizar partes repetidas del contexto para reducir costo.",
    technical: "Cache de prefijos estaticos o contexto estable en llamadas LLM.",
    aecUse: "RAG con politicas, rubricas y schemas recurrentes.",
  },
  {
    term: "Evaluator-optimizer",
    simple: "Un agente produce y otro revisa.",
    technical: "Patron agentic de generacion, evaluacion y mejora iterativa.",
    aecUse: "Reportes, propuestas, QA documental y feedback AECODE.",
  },
];
