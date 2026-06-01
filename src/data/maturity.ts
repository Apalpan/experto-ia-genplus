export type MaturityLevel = {
  id: string;
  level: string;
  name: string;
  title: string;
  simple: string;
  technical: string;
  executive: string;
  signals: string[];
  infrastructure: string;
  governance: string;
  nextMove: string;
  hiddenRisk: string;
};

export type MaturityPillar = {
  id: string;
  title: string;
  simple: string;
  advanced: string;
  diagnosticQuestions: string[];
  evidence: string;
};

export type AgentFramework = {
  id: string;
  name: string;
  paradigm: string;
  bestFor: string;
  stateModel: string;
  humanControl: string;
  risk: string;
  genplusUse: string;
};

export type ReasoningConcept = {
  id: string;
  title: string;
  simpleAnalogy: string;
  technical: string;
  executive: string;
  aecApplication: string;
  danger: string;
};

export type AiTaxonomy = {
  id: string;
  title: string;
  mechanism: string;
  aecCase: string;
  decisionRule: string;
};

export type StrategicDirective = {
  id: string;
  title: string;
  whyItMatters: string;
  genplusAction: string;
  question: string;
};

export const maturityLevels: MaturityLevel[] = [
  {
    id: "level-100-shadow-ai",
    level: "100",
    name: "Inicial",
    title: "Shadow AI individual",
    simple:
      "La gente usa IA por su cuenta, como quien lleva una herramienta personal al trabajo sin que el taller la haya validado.",
    technical:
      "Uso ad-hoc de cuentas personales, prompts aislados, documentos sensibles en herramientas no gobernadas, cero trazabilidad y sin criterios de calidad.",
    executive:
      "Hay energia y curiosidad, pero tambien riesgo: fuga de datos, duplicidad, respuestas no auditables y aprendizaje disperso.",
    signals: [
      "Cada area usa herramientas distintas",
      "No hay inventario de casos IA",
      "La capacitacion se limita a prompts sueltos",
      "No existe control de datos sensibles",
    ],
    infrastructure: "Sin RAG corporativo, sin API gateway, sin vector DB, sin registros centralizados.",
    governance: "Politicas reactivas o prohibicion generica sin ruta de adopcion.",
    nextMove: "Crear inventario de usos, clasificar datos y seleccionar 3 pilotos medibles.",
    hiddenRisk:
      "La organizacion cree que ya adopto IA porque varias personas usan chatbots, pero no hay sistema repetible ni aprendizaje institucional.",
  },
  {
    id: "level-200-team-pilots",
    level: "200",
    name: "Repetible",
    title: "Pilotos por equipo y utilidades compartidas",
    simple:
      "La IA pasa de ser una libreta personal a una mesa de trabajo por equipo: ya hay usos repetidos, pero todavia no hay estandar enterprise.",
    technical:
      "Pilotos cerrados por funcion, APIs comerciales, librerias de prompts, pequenas automatizaciones, controles basicos de datos y primeras metricas.",
    executive:
      "Es la etapa para aprender rapido sin prometer transformacion completa. El objetivo es descubrir casos con ROI y eliminar casos de baja traccion.",
    signals: [
      "Marketing, operaciones o PMO tienen pilotos propios",
      "Hay plantillas y guias internas",
      "Se mide ahorro de tiempo en tareas concretas",
      "Aparecen champions por area",
    ],
    infrastructure: "APIs estandar, almacenamiento controlado y automatizaciones de baja criticidad.",
    governance: "Uso aceptable, restricciones de datos y revision humana informal.",
    nextMove: "Estandarizar arquitectura minima, crear evals y decidir que pilotos escalan.",
    hiddenRisk:
      "Quedarse en una coleccion de demos: muchas pruebas interesantes, pero ninguna integrada al flujo real.",
  },
  {
    id: "level-300-governed-standards",
    level: "300",
    name: "Definido",
    title: "Gobernanza, estandares y conectores MCP",
    simple:
      "La empresa deja de improvisar y construye carriles: que datos usar, que herramientas permitir, como medir y cuando aprobar.",
    technical:
      "Centro de excelencia, RAG corporativo, bases vectoriales con metadata, entornos dev/test/prod, observabilidad, politicas de seguridad y conectores estandarizados.",
    executive:
      "Aqui IA se vuelve programa corporativo. La conversacion cambia de 'que herramienta compro' a 'que capacidades gobernadas escalo'.",
    signals: [
      "Existe owner de IA o CoE",
      "Se documentan casos, riesgos y responsables",
      "Los flujos criticos tienen logs",
      "Empieza la interoperabilidad con MCP o APIs internas",
    ],
    infrastructure: "RAG, gateway IA, repositorios de prompts, vector DB, control de secretos y trazas.",
    governance: "Privacidad, sesgo, permisos, auditoria, evaluacion y aprobacion por riesgo.",
    nextMove: "Redisenar procesos completos con IA y conectar herramientas de mision critica.",
    hiddenRisk:
      "Convertir la gobernanza en burocracia y matar la velocidad. El buen gobierno crea rutas rapidas con control, no friccion innecesaria.",
  },
  {
    id: "level-400-domain-redesign",
    level: "400",
    name: "Capaz",
    title: "Integracion enterprise y rediseno de dominio",
    simple:
      "Ya no se agrega IA encima del proceso. Se redibuja el proceso para que datos, humanos y agentes trabajen juntos.",
    technical:
      "Sistemas multiagente con estado, conectores profundos a ERP/CRM/BIM/PMO, evaluacion continua, model routing, telemetria de costo y calidad.",
    executive:
      "La ventaja aparece cuando IA cambia el flujo operativo: menos handoffs, menos busqueda manual, mas decision con evidencia.",
    signals: [
      "Los agentes participan en procesos centrales",
      "Las recomendaciones tienen fuente y trazabilidad",
      "Hay tableros de costo, calidad y adopcion",
      "Se miden alucinaciones, correcciones y escalamiento humano",
    ],
    infrastructure: "Orquestacion durable, colas, eventos, APIs internas, observabilidad y data products.",
    governance: "Controles en tiempo real, approval gates, incident response y revisiones de calidad por version.",
    nextMove: "Crear ecosistemas agentic federados con supervision humana y aprendizaje operativo.",
    hiddenRisk:
      "Automatizar decisiones sin redisenar responsabilidades. Un agente puede acelerar un mal proceso si no se cambia el modelo operativo.",
  },
  {
    id: "level-500-agentic-ecosystem",
    level: "500",
    name: "Eficiente",
    title: "Ecosistema agentic orquestado",
    simple:
      "La organizacion funciona como una red de equipos humanos y agentes: cada uno sabe que puede leer, decidir, ejecutar y escalar.",
    technical:
      "Arquitectura federada de agentes, router cognitivo, edge AI, datos de campo, memoria gobernada, auditoria continua y ciclos de mejora automatizados.",
    executive:
      "No es autonomia sin control. Es autonomia graduada: la IA ejecuta lo reversible y repetible; el humano gobierna criterio, excepciones y estrategia.",
    signals: [
      "Los agentes ajustan flujos con supervision",
      "El sistema aprende de resultados reales",
      "Las politicas viven dentro de los loops de ejecucion",
      "La evidencia conecta campo, oficina, cliente y direccion",
    ],
    infrastructure: "Router cognitivo, agentes especializados, edge/local processing, IoT, vision espacial y knowledge graph.",
    governance: "Auditoria continua, trazabilidad por decision, permisos dinamicos y controles embedidos en cada herramienta.",
    nextMove: "Medir ventaja compuesta: velocidad de aprendizaje, calidad de decision y reduccion de friccion operacional.",
    hiddenRisk:
      "Confundir sofisticacion con madurez. Nivel 500 solo tiene sentido si hay datos confiables, procesos claros y humanos capaces de auditar.",
  },
];

export const maturityPillars: MaturityPillar[] = [
  {
    id: "strategy-alignment",
    title: "Estrategia y alineamiento",
    simple:
      "IA debe responder a una prioridad del negocio, no a la curiosidad de una herramienta nueva.",
    advanced:
      "Une objetivos, casos de uso, ownership, funding, decision rights, portafolio de pilotos y metricas de impacto.",
    diagnosticQuestions: [
      "Que decision o proceso mejora la IA?",
      "Quien es el dueno del resultado?",
      "Que indicador confirma que valio la pena?",
    ],
    evidence: "Mapa de casos IA priorizados por impacto, factibilidad, datos y riesgo.",
  },
  {
    id: "data-integration",
    title: "Datos e integracion",
    simple:
      "Sin datos confiables, la IA es un parlante elegante conectado a informacion incompleta.",
    advanced:
      "Incluye limpieza, metadata, linaje, permisos, APIs, RAG, eventos, conectores, versionado y actualizacion recurrente.",
    diagnosticQuestions: [
      "Donde vive la fuente de verdad?",
      "Que datos son sensibles o confidenciales?",
      "Como se actualiza y audita la base?",
    ],
    evidence: "Registro de fuentes, taxonomia documental, vector store y evaluaciones de retrieval.",
  },
  {
    id: "technology-tooling",
    title: "Tecnologia y herramientas",
    simple:
      "La herramienta correcta depende de la tarea: conversar, recuperar, automatizar, ver, predecir o ejecutar.",
    advanced:
      "La arquitectura madura separa UI, BFF, gateway IA, modelos, herramientas, RAG, observabilidad, evals y seguridad.",
    diagnosticQuestions: [
      "Que capa resuelve cada herramienta?",
      "Donde se guardan secretos y logs?",
      "Que pasa si el modelo falla o sube de costo?",
    ],
    evidence: "Blueprint tecnico con modelo, API, permisos, fallback, costos y trazas.",
  },
  {
    id: "talent-culture",
    title: "Talento y cultura",
    simple:
      "La diferencia no es quien sabe usar un chat, sino quien sabe dirigir, validar y mejorar sistemas IA.",
    advanced:
      "La organizacion evoluciona de prompts simples a orquestacion, evaluacion, auditoria, pensamiento de producto y criterio de dominio.",
    diagnosticQuestions: [
      "Que roles necesitan alfabetizacion IA?",
      "Quien puede auditar outputs tecnicos?",
      "Que habilidades se demuestran con evidencia?",
    ],
    evidence: "Rutas de aprendizaje, rubricas, practicas, evidencias y skill passport.",
  },
  {
    id: "governance-risk",
    title: "Gobernanza y riesgo",
    simple:
      "Gobernar IA es poner limites inteligentes para avanzar rapido sin romper confianza.",
    advanced:
      "Incluye clasificacion de datos, permisos minimos, evals, red teaming, guardrails, aprobaciones, logs e incident response.",
    diagnosticQuestions: [
      "Que salida no puede permitirse?",
      "Que acciones requieren aprobacion humana?",
      "Como se detecta una fuga, sesgo o error critico?",
    ],
    evidence: "Matriz de riesgo por caso, controles, owner, logs y decision de permitir, limitar o bloquear.",
  },
];

export const agentFrameworks: AgentFramework[] = [
  {
    id: "crewai",
    name: "CrewAI",
    paradigm: "Roles y tareas",
    bestFor:
      "Squads simples donde cada agente representa un rol claro: investigador, redactor, analista o revisor.",
    stateModel:
      "Estado orientado a tareas; facil de entender, menos flexible para loops complejos y control fino.",
    humanControl:
      "Aprobaciones por tarea y puntos de interrupcion simples.",
    risk:
      "Puede volverse teatral: muchos roles con poco control real de estado, costo o evaluacion.",
    genplusUse:
      "Propuestas comerciales, investigacion de mercado y generacion de contenido con revision humana.",
  },
  {
    id: "autogen",
    name: "AutoGen",
    paradigm: "Conversacion entre agentes",
    bestFor:
      "Exploracion, simulacion de debates tecnicos y colaboracion dinamica entre agentes independientes.",
    stateModel:
      "Estado distribuido en historial conversacional; potente para interaccion, costoso en tokens y mas dificil de gobernar.",
    humanControl:
      "User proxy y participacion humana en conversaciones o ejecucion de codigo.",
    risk:
      "Los agentes pueden hablar mucho, duplicar trabajo y perder determinismo si no hay limites fuertes.",
    genplusUse:
      "Sesiones de ideacion tecnica, debate de arquitectura y revision cruzada de decisiones.",
  },
  {
    id: "langgraph",
    name: "LangGraph",
    paradigm: "Grafo de estado",
    bestFor:
      "Workflows agentic durables, con ciclos, bifurcaciones, estado persistente, aprobaciones y auditoria.",
    stateModel:
      "Graph state centralizado y persistente; cada nodo lee/escribe campos controlados.",
    humanControl:
      "Human-in-the-loop fuerte: pausar, modificar estado, aprobar y reanudar sin perder contexto.",
    risk:
      "Mayor curva tecnica. Requiere buen diseno de estado, nodos, edges, checkpoints y evals.",
    genplusUse:
      "Agente PMO, tutor AECODE, router cognitivo, auditor de contratos y flujos de propuesta con QA.",
  },
];

export const reasoningConcepts: ReasoningConcept[] = [
  {
    id: "test-time-compute",
    title: "Test-Time Compute",
    simpleAnalogy:
      "Es como darle al estudiante papel borrador y tiempo extra en el examen: no aprendio datos nuevos, pero piensa mas pasos antes de responder.",
    technical:
      "Aumenta computo durante inferencia mediante cadenas de razonamiento, busqueda, verificacion, sampling multiple, refinamiento o deliberacion controlada.",
    executive:
      "Conviene para tareas de alto valor donde pagar mas latencia y costo produce decisiones mejores: auditoria, planificacion, codigo critico o analisis contractual.",
    aecApplication:
      "Un asistente de contratos puede generar hipotesis, revisar clausulas, buscar contradicciones y verificar respuesta antes de emitir riesgo final.",
    danger:
      "Mas computo no garantiza verdad. Si el contexto o la herramienta estan mal, el modelo puede razonar mucho sobre premisas malas.",
  },
  {
    id: "grpo",
    title: "GRPO",
    simpleAnalogy:
      "En vez de poner un profesor separado para calificar cada respuesta, comparas varias respuestas del mismo grupo y premias las mejores contra sus pares.",
    technical:
      "Group Relative Policy Optimization estima ventaja relativa dentro de un grupo de respuestas, reduciendo dependencia de un value model/critic tradicional.",
    executive:
      "Importa porque permite mejorar razonamiento con menor costo de memoria y entrenamiento, especialmente en modelos orientados a tareas verificables.",
    aecApplication:
      "Para entrenar evaluadores de rubricas AECODE, se generan varias evaluaciones y se refuerzan las que mejor cumplen criterios de evidencia.",
    danger:
      "Si la recompensa esta mal definida, el modelo aprende a optimizar el marcador y no el resultado real.",
  },
  {
    id: "system-one-system-two",
    title: "System 1 vs System 2 en productos IA",
    simpleAnalogy:
      "System 1 responde rapido como un reflejo; System 2 se detiene, descompone, revisa y decide.",
    technical:
      "System 1 aplica respuestas directas de baja latencia. System 2 usa planificacion, herramientas, recuperacion, verificadores y loops de correccion.",
    executive:
      "No todo requiere agente. Enrutar bien ahorra costo y mejora calidad: chat rapido para dudas simples, workflow profundo para decisiones criticas.",
    aecApplication:
      "Pregunta simple: 'que es RAG'. System 1. Evaluar reclamo contractual con anexos: System 2 con RAG, tool use y revision humana.",
    danger:
      "Usar System 2 para todo vuelve el producto lento y caro; usar System 1 en decisiones criticas vuelve el sistema fragil.",
  },
  {
    id: "cognitive-router",
    title: "Router cognitivo",
    simpleAnalogy:
      "Es el dispatcher de una central: decide si la solicitud va a respuesta rapida, RAG, agente, humano o bloqueo.",
    technical:
      "Clasifica intencion, riesgo, complejidad, sensibilidad de datos y herramientas requeridas para escoger modelo, flujo y controles.",
    executive:
      "Reduce costo, mejora seguridad y evita que todas las preguntas usen el camino mas caro o mas riesgoso.",
    aecApplication:
      "En GEN+, una consulta comercial va al flujo de propuesta; una pregunta tecnica va a RAG; una accion de envio requiere aprobacion.",
    danger:
      "Un router mal calibrado puede mandar tareas sensibles a flujos simples o bloquear tareas valiosas por exceso de cautela.",
  },
  {
    id: "vibe-coding-debt",
    title: "Deuda tecnica en vibe coding",
    simpleAnalogy:
      "Construir con IA es como levantar un prototipo rapido: si no revisas planos, instalaciones y cargas, la fachada puede verse bien y fallar despues.",
    technical:
      "La deuda aparece por diffs no revisados, componentes monoliticos, tipos laxos, secretos expuestos, tests ausentes, dependencias innecesarias y arquitectura sin contratos.",
    executive:
      "La velocidad solo crea ventaja si deja un repo mantenible. Demo vendible + build verificable + backlog claro es el estandar.",
    aecApplication:
      "Cada demo GEN+ debe tener PRD, datos mock seguros, scripts, build, decision log y ruta para conectar backend o RAG.",
    danger:
      "Acumular prototipos que se ven bien, pero nadie puede escalar ni auditar.",
  },
  {
    id: "data-engineering-moat",
    title: "Data engineering como ventaja IA",
    simpleAnalogy:
      "El modelo es el motor; los datos son el combustible, el mapa y el registro de mantenimiento.",
    technical:
      "La ventaja esta en pipelines, metadata, calidad, versionado, permisos, linaje, evaluacion y actualizacion recurrente.",
    executive:
      "Las empresas no ganan por tener el mismo modelo que todos; ganan por conectar su conocimiento unico a flujos operativos.",
    aecApplication:
      "Historial de RFIs, actas, cronogramas, contratos, fotos y costos puede convertirse en ventaja si se estructura como data product.",
    danger:
      "Indexar documentos sucios genera falsa autoridad: respuestas con tono experto basadas en fuentes malas.",
  },
];

export const aiTaxonomy: AiTaxonomy[] = [
  {
    id: "predictive-ai",
    title: "IA predictiva",
    mechanism:
      "Modelos estadisticos y de machine learning que estiman probabilidad, clasifican eventos o detectan anomalías con datos historicos.",
    aecCase:
      "Predecir desviaciones de costo, riesgo de retraso, fallas de equipos o probabilidad de RFI critica.",
    decisionRule:
      "Usala cuando hay historial estructurado y quieres anticipar un resultado medible.",
  },
  {
    id: "generative-ai",
    title: "IA generativa",
    mechanism:
      "Modelos que producen texto, codigo, imagen, video o audio a partir de patrones aprendidos y contexto dado.",
    aecCase:
      "Crear borradores de especificaciones, reportes, propuestas, scripts BIM o material educativo.",
    decisionRule:
      "Usala cuando necesitas producir o transformar contenido, pero valida con fuentes, reglas y humano.",
  },
  {
    id: "rag-systems",
    title: "Sistemas RAG",
    mechanism:
      "Recuperan fragmentos relevantes desde una base documental y los inyectan como contexto para responder con evidencia.",
    aecCase:
      "Consultar contratos, RFIs, actas, normas, lecciones aprendidas y guias internas.",
    decisionRule:
      "Usalo cuando la respuesta debe estar anclada en fuentes actualizables y citables.",
  },
  {
    id: "agentic-ai",
    title: "IA agentic",
    mechanism:
      "Sistemas orientados a objetivos que planifican, usan herramientas, verifican resultados y mantienen estado.",
    aecCase:
      "Agente PMO, agente de propuestas, auditor de contratos, tutor de habilidades o automatizador de reportes.",
    decisionRule:
      "Usala cuando hay pasos, herramientas, decisiones intermedias y necesidad de trazabilidad.",
  },
  {
    id: "computer-vision",
    title: "Computer vision",
    mechanism:
      "Modelos que interpretan imagen o video para detectar objetos, segmentar, medir avance o identificar riesgos.",
    aecCase:
      "Deteccion de EPP, avance visual, conteo de maquinaria, zonas de riesgo y evidencia fotografica.",
    decisionRule:
      "Usala cuando la fuente principal de verdad es visual y existe una accion operativa asociada.",
  },
];

export const strategicDirectives: StrategicDirective[] = [
  {
    id: "move-from-chat-to-systems",
    title: "Pasar de chat a sistemas",
    whyItMatters:
      "El chat es interfaz; el sistema es arquitectura, datos, herramientas, evaluacion y responsabilidad.",
    genplusAction:
      "Cada caso GEN+ debe documentar entrada, proceso, salida, fuente, accion, metrica, owner y riesgo.",
    question: "Que parte de este flujo debe responder, recuperar, ejecutar o pedir aprobacion?",
  },
  {
    id: "govern-autonomy",
    title: "Graduar autonomia por riesgo",
    whyItMatters:
      "La IA debe actuar sola solo cuando el error sea reversible, medible y dentro de permisos claros.",
    genplusAction:
      "Crear tabla por agente: puede leer, puede proponer, puede ejecutar, requiere aprobacion, bloqueado.",
    question: "Si este agente se equivoca, que costo real genera y como se revierte?",
  },
  {
    id: "build-evals-first",
    title: "Construir evals antes de escalar",
    whyItMatters:
      "Sin evaluacion, cada prompt, modelo o fuente nueva puede mejorar una cosa y romper otra.",
    genplusAction:
      "Mantener sets de prueba por dominio: RAG, agentes, seguridad, AEC, prompts, codigo y aprendizaje.",
    question: "Que 20 preguntas demostrarian que esta version es mejor que la anterior?",
  },
  {
    id: "treat-data-as-product",
    title: "Tratar datos como producto",
    whyItMatters:
      "Los datos que alimentan IA deben tener dueño, calidad, version, metadata, permisos y mantenimiento.",
    genplusAction:
      "Convertir documentos de proyectos, cursos y propuestas en registros curados con fecha, uso, vigencia y confidencialidad.",
    question: "Que fuente es confiable, cual esta obsoleta y cual nunca debe entrar al modelo?",
  },
  {
    id: "design-learning-by-evidence",
    title: "Aprender con evidencia, no con consumo",
    whyItMatters:
      "Ser experto en IA no es ver mas videos, sino poder disenar, explicar, construir y auditar sistemas.",
    genplusAction:
      "Cada modulo del entrenador debe cerrar con evidencia: diagrama, prompt, schema, eval, mini-demo o decision memo.",
    question: "Que evidencia prueba que Alejandro domina este concepto y puede venderlo o construirlo?",
  },
  {
    id: "protect-vibe-coding-quality",
    title: "Proteger calidad en vibe coding",
    whyItMatters:
      "La IA acelera codigo, pero tambien acelera deuda si no hay criterio de producto y revision tecnica.",
    genplusAction:
      "Todo prototipo debe terminar con build, navegacion verificada, README, riesgos y siguiente arquitectura.",
    question: "Que parte de esta demo se puede reutilizar y que parte debe descartarse antes de escalar?",
  },
];
