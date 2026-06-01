export type AiExpertProfileId = "empresa" | "proyecto" | "startup";
export type AiExpertLevelId = "basico" | "intermedio" | "avanzado" | "experto";

export const aiExpertMetrics = [
  {
    label: "Framework operativo",
    value: "5 fases",
    signal: "Diagnostico, capacitacion, hoja de ruta, implementacion y escalamiento.",
    tone: "blue",
  },
  {
    label: "Perfiles de adopcion",
    value: "3 rutas",
    signal: "Empresa, proyecto y startup con criterios, riesgos y proximas acciones.",
    tone: "green",
  },
  {
    label: "Nivel de profundidad",
    value: "4 niveles",
    signal: "Desde conceptos base hasta arquitectura agentica, evals, gobierno y ROI.",
    tone: "amber",
  },
  {
    label: "Uso principal",
    value: "Decision",
    signal: "No solo aprender IA: priorizar, construir, medir y escalar sistemas reales.",
    tone: "red",
  },
] as const;

export const aiExpertStages = [
  {
    step: "01",
    title: "Diagnostico",
    subtitle: "Madurez y oportunidades",
    simple:
      "Antes de comprar herramientas, se entiende el punto de partida: datos, procesos, talento, cultura, riesgos y capacidad de ejecucion.",
    technical:
      "Evalua arquitectura de datos, automatizacion, integraciones, seguridad, gobierno, trazabilidad, evals y readiness para RAG/agentes.",
    executive:
      "Define donde la IA puede producir impacto medible sin abrir riesgos innecesarios.",
    actions: ["Medir madurez", "Detectar brechas", "Priorizar quick wins"],
    outputs: ["Score de madurez", "Mapa de brechas", "Proxima accion recomendada"],
    risk: "Saltar al piloto sin diagnostico suele producir demos bonitas sin adopcion real.",
    cta: "Iniciar diagnostico",
    view: "maturity",
  },
  {
    step: "02",
    title: "Capacitacion",
    subtitle: "Equipos y criterio",
    simple:
      "El equipo aprende a pensar con IA: que pedir, que verificar, que automatizar y cuando mantener control humano.",
    technical:
      "Cubre LLMs, IA generativa, IA predictiva, embeddings, RAG, APIs, MCP, agentes, computer vision, evals y governance.",
    executive:
      "Alinea lenguaje comun entre direccion, operaciones, producto y tecnologia.",
    actions: ["Estudiar conceptos", "Practicar preguntas", "Traducir terminos tecnicos"],
    outputs: ["Rutas por perfil", "Banco de preguntas", "Criterio compartido"],
    risk: "Capacitar solo en prompts crea dependencia tactica, no capacidad estrategica.",
    cta: "Entrenar criterio",
    view: "trainer",
  },
  {
    step: "03",
    title: "Hoja de ruta",
    subtitle: "Casos priorizados",
    simple:
      "Se ordenan casos por impacto, esfuerzo, riesgo, datos disponibles y valor de aprendizaje.",
    technical:
      "Convierte oportunidades en backlog 30/60/90, matriz impacto-esfuerzo-riesgo, MVPs, pilotos y arquitectura minima viable.",
    executive:
      "Evita dispersar recursos en demasiados experimentos y enfoca la organizacion en valor verificable.",
    actions: ["Filtrar casos", "Definir MVP", "Asignar duenos y metricas"],
    outputs: ["Roadmap 30/60/90", "Matriz de priorizacion", "Casos listos para piloto"],
    risk: "Sin priorizacion, la adopcion se vuelve una lista de deseos sin responsables.",
    cta: "Ver roadmap",
    view: "roadmap",
  },
  {
    step: "04",
    title: "Implementacion",
    subtitle: "Pilotos y agentes",
    simple:
      "Los casos seleccionados se transforman en flujos reales con datos, herramientas, humanos en control y medicion.",
    technical:
      "Disena RAG, agentes, dashboards, workflows, logs, trazabilidad, seguridad, costos, prompts base, evals y fallback operativo.",
    executive:
      "Pasa de demo a sistema usable, con responsables, evidencia y control de calidad.",
    actions: ["Construir piloto", "Validar calidad", "Medir costo y adopcion"],
    outputs: ["Arquitectura minima", "Playbooks", "Evals y tablero de control"],
    risk: "Un agente sin evaluacion y trazabilidad escala errores mas rapido que personas.",
    cta: "Generar plan",
    view: "playbooks",
  },
  {
    step: "05",
    title: "Escalamiento",
    subtitle: "ROI y mejora continua",
    simple:
      "Lo que funciono se integra al proceso, se mide con ROI, se gobierna y se mejora continuamente.",
    technical:
      "Incluye modelo operativo AI-first, agentes especializados, monitoreo, versionado de prompts, seguridad, compliance y automatizacion avanzada.",
    executive:
      "Convierte pilotos en capacidad organizacional repetible y defendible.",
    actions: ["Medir ROI", "Crear gobierno IA", "Escalar agentes especializados"],
    outputs: ["Modelo operativo", "KPIs de adopcion", "Sistema de mejora continua"],
    risk: "Escalar sin gobierno multiplica costos, deuda operativa y riesgos regulatorios.",
    cta: "Explorar casos",
    view: "data",
  },
] as const;

export const aiExpertProfiles = [
  {
    id: "empresa",
    label: "Empresa",
    focus: "Adopcion transversal por areas, gobierno, ROI, procesos y cambio cultural.",
    promise: "Pasar de experimentos aislados a capacidades IA repetibles en direccion, operaciones, ventas, finanzas, RRHH, legal y proyectos.",
    priority: "Empezar por procesos con volumen, friccion, datos disponibles y responsable claro.",
    cases: ["Asistente de conocimiento interno", "Automatizacion de reportes", "Copiloto comercial", "RAG documental", "Tablero de ROI IA"],
    risks: ["Datos dispersos", "Shadow AI", "Falta de owners", "Prompts sin trazabilidad"],
    recommendedAction: "Ejecutar diagnostico de madurez y seleccionar 3 quick wins con ROI estimable.",
  },
  {
    id: "proyecto",
    label: "Proyecto",
    focus: "Planificacion, ejecucion, control, riesgos, evidencia, reportes y decisiones.",
    promise: "Convertir IA en soporte operativo para PMO, actas, cronogramas, contratos, calidad, riesgos y seguimiento.",
    priority: "Atacar primero la documentacion repetitiva y la deteccion temprana de desviaciones.",
    cases: ["Resumen de reuniones", "Analisis de riesgos", "Control documental", "Seguimiento de compromisos", "Reporte ejecutivo automatico"],
    risks: ["Informacion incompleta", "Criterios no estandarizados", "Responsables difusos", "Automatizacion sin validacion humana"],
    recommendedAction: "Mapear el flujo semanal del proyecto y automatizar un reporte ejecutivo verificable.",
  },
  {
    id: "startup",
    label: "Startup",
    focus: "Research, validacion, MVP, producto, growth, fundraising, soporte y operaciones.",
    promise: "Usar IA para aprender mas rapido del mercado, construir con menos friccion y escalar con procesos AI-native.",
    priority: "Validar problema, ICP, promesa, canal y pricing antes de sobredisenar plataforma.",
    cases: ["Research de mercado", "Prototipo funcional", "Agente de soporte", "Growth loops", "Data room para inversion"],
    risks: ["Feature creep", "Dependencia de una sola API", "Sin metricas de activacion", "Producto demo sin moat"],
    recommendedAction: "Definir el loop critico y crear un MVP con una accion de activacion medible.",
  },
] as const;

export const aiExpertLevels = [
  {
    id: "basico",
    label: "Basico",
    promise: "Entender que es IA, que puede hacer y donde no conviene usarla.",
    evidence: "Explica IA generativa, predictiva, LLMs y automatizacion con ejemplos propios.",
    next: "Aprender conceptos y practicar preguntas de comprension.",
  },
  {
    id: "intermedio",
    label: "Intermedio",
    promise: "Traducir problemas de negocio en casos de uso, prompts, flujos y criterios de calidad.",
    evidence: "Prioriza casos con impacto, esfuerzo, riesgo y datos disponibles.",
    next: "Crear roadmap 30/60/90 y piloto con humano en control.",
  },
  {
    id: "avanzado",
    label: "Avanzado",
    promise: "Disenar soluciones con RAG, agentes, APIs, evals, seguridad y observabilidad.",
    evidence: "Define arquitectura minima, fuentes, logs, costos, fallback y pruebas de calidad.",
    next: "Implementar playbooks y evals antes de escalar.",
  },
  {
    id: "experto",
    label: "Experto",
    promise: "Gobernar y escalar IA como sistema operativo de empresa o producto AI-native.",
    evidence: "Mide ROI, gestiona riesgos, versiona prompts, especializa agentes y mejora continuamente.",
    next: "Crear modelo operativo AI-first con KPIs y gobierno.",
  },
] as const;

export const diagnosticDimensions = [
  {
    label: "Estrategia",
    score: 3.4,
    target: 5,
    gap: "Hay intencion y oportunidades, pero falta portafolio priorizado por ROI.",
    next: "Definir 3 apuestas IA por impacto, esfuerzo y riesgo.",
  },
  {
    label: "Datos",
    score: 2.7,
    target: 5,
    gap: "La informacion existe, pero suele estar dispersa entre documentos, chats, hojas y herramientas.",
    next: "Crear inventario de fuentes y una base RAG gobernada.",
  },
  {
    label: "Procesos",
    score: 3.1,
    target: 5,
    gap: "Se pueden automatizar tareas, pero aun no hay flujos estandar con entradas y salidas claras.",
    next: "Mapear procesos repetitivos con dueno, frecuencia, datos y control humano.",
  },
  {
    label: "Talento",
    score: 2.9,
    target: 5,
    gap: "El equipo usa IA, pero no todos comparten criterio para evaluar calidad, riesgo y aplicacion.",
    next: "Capacitar por rol con casos propios y preguntas de dominio.",
  },
  {
    label: "Tecnologia",
    score: 3.0,
    target: 5,
    gap: "Hay herramientas disponibles, pero falta arquitectura comun para agentes, APIs, logs y costos.",
    next: "Definir stack minimo para RAG, automatizacion, agentes y dashboards.",
  },
  {
    label: "Gobierno",
    score: 2.4,
    target: 5,
    gap: "Los riesgos de seguridad, privacidad, calidad y compliance aun no estan formalizados.",
    next: "Crear reglas de uso, evals, trazabilidad y aprobaciones para casos sensibles.",
  },
] as const;

export const diagnosticQuestions = [
  "Que decision o proceso mejoraria de forma medible si tuviera IA confiable esta semana?",
  "Que informacion critica esta dispersa y hoy depende de memoria humana?",
  "Que tarea repetitiva consume tiempo experto y podria tener humano en control?",
  "Que caso tiene datos suficientes, responsable claro y riesgo manejable?",
  "Como mediremos calidad: precision, ahorro de tiempo, costo, adopcion, riesgo o ingreso?",
] as const;
