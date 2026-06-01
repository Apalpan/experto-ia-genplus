import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  BrainCircuit,
  CheckCircle2,
  CircleGauge,
  ClipboardList,
  Cpu,
  Eye,
  ExternalLink,
  GitBranch,
  Layers3,
  LayoutDashboard,
  LibraryBig,
  MessageSquareText,
  Network,
  Search,
  ShieldCheck,
  Target,
  Wrench,
} from "lucide-react";
import { MetricCard } from "./components/MetricCard";
import { SectionTitle } from "./components/SectionTitle";
import { ThemeToggle } from "./components/ThemeToggle";
import {
  dashboardMetrics,
  externalReferences,
  knowledgeModules,
  learningPaths,
  playbooks,
  sourceNotes,
  trainerQuestions,
  type MasteryLevel,
} from "./data/knowledge";
import { findModuleTitle, getQuestionSet, normalizeSearch } from "./lib/trainer";
import { conceptBridges, expertConcepts, expertLabs } from "./data/advancedKnowledge";
import {
  adoptionMetrics,
  implementationRoadmap,
  implementationSignals,
  keyDataSources,
  platziInsights,
  toolLayers,
} from "./data/keyData";
import {
  agentFrameworks,
  aiTaxonomy,
  maturityLevels,
  maturityPillars,
  reasoningConcepts,
  strategicDirectives,
} from "./data/maturity";
import {
  aecGlossaryTerms,
  aecMarketSignals,
  aecProductWedges,
  aecPromptTemplates,
  aecStackLayers,
  agenticPatterns,
} from "./data/aecResearch";

type View = "dashboard" | "trainer" | "concepts" | "data" | "maturity" | "aec" | "library" | "playbooks" | "roadmap";

const navItems = [
  { id: "dashboard", label: "Command", icon: LayoutDashboard },
  { id: "trainer", label: "Entrenador", icon: MessageSquareText },
  { id: "concepts", label: "Conceptos", icon: BrainCircuit },
  { id: "data", label: "Datos clave", icon: BarChart3 },
  { id: "maturity", label: "Madurez IA", icon: CircleGauge },
  { id: "aec", label: "IA AEC", icon: Eye },
  { id: "library", label: "Biblioteca", icon: LibraryBig },
  { id: "playbooks", label: "Playbooks", icon: ClipboardList },
  { id: "roadmap", label: "Roadmap", icon: Layers3 },
] satisfies Array<{ id: View; label: string; icon: typeof LayoutDashboard }>;

const levels: MasteryLevel[] = ["base", "intermedio", "avanzado", "experto", "ultra"];

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeView, setActiveView] = useState<View>("dashboard");

  const activateView = (view: View) => {
    setActiveView(view);
    window.scrollTo({ top: 0, left: 0 });
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [activeView]);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">G+</div>
          <div>
            <span>GEN+ AI</span>
            <strong>Expert Trainer</strong>
            <em>by Alejandro Palpan</em>
          </div>
        </div>

        <nav className="nav-list" aria-label="Secciones">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                className={activeView === item.id ? "nav-item active" : "nav-item"}
                type="button"
                key={item.id}
                onClick={() => activateView(item.id)}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <span>North Star</span>
          <strong>Comprensión aplicable de IA</strong>
          <p>Preguntas profundas + evidencia + casos GEN+.</p>
        </div>
      </aside>

      <main className="workspace">
        <header className="topbar">
          <div>
            <span className="eyebrow">Base viva · 2026-06-01</span>
            <h1>Entrenador experto de inteligencia artificial</h1>
            <span className="signature-pill">by Alejandro Palpan</span>
          </div>
          <div className="topbar-actions">
            <button className="ghost-button" type="button" onClick={() => activateView("trainer")}>
              <MessageSquareText size={17} />
              Practicar
            </button>
            <ThemeToggle
              theme={theme}
              onToggle={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
            />
          </div>
        </header>

        {activeView === "dashboard" && <DashboardView onOpenTrainer={() => activateView("trainer")} />}
        {activeView === "trainer" && <TrainerView />}
        {activeView === "concepts" && <ConceptsView />}
        {activeView === "data" && <KeyDataView />}
        {activeView === "maturity" && <MaturityView />}
        {activeView === "aec" && <AecAiView />}
        {activeView === "library" && <LibraryView />}
        {activeView === "playbooks" && <PlaybooksView />}
        {activeView === "roadmap" && <RoadmapView />}
      </main>
    </div>
  );
}

function DashboardView({ onOpenTrainer }: { onOpenTrainer: () => void }) {
  return (
    <div className="view-stack">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">GEN+ AI · by Alejandro Palpan</span>
          <h2>Domina IA como sistema: modelos, datos, agentes, automatización, producto y gobierno.</h2>
          <p>
            Este repo convierte tus documentos iniciales en una experiencia de entrenamiento: conceptos explicados
            con analogías, lectura técnica, criterio ejecutivo, preguntas socráticas, playbooks aplicables y una base
            lista para seguir creciendo.
          </p>
          <div className="hero-actions">
            <button className="primary-button" type="button" onClick={onOpenTrainer}>
              Empezar sesión <ArrowRight size={18} />
            </button>
            <a className="secondary-button" href="#fuentes">
              Ver fuentes <BookOpen size={18} />
            </a>
          </div>
        </div>
        <div className="hero-proof">
          <div className="proof-header">
            <Target size={20} />
            <span>Loop de aprendizaje</span>
          </div>
          <ol>
            <li>Entiende el concepto en lenguaje simple.</li>
            <li>Conecta la analogía con arquitectura avanzada.</li>
            <li>Responde una pregunta crítica y ejecutiva.</li>
            <li>Aplica el concepto a GEN+ o AEC.</li>
          </ol>
        </div>
      </section>

      <section className="metrics-grid">
        {dashboardMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <section>
        <SectionTitle
          eyebrow="Mapa de dominio"
          title="14 módulos para pasar de usuario avanzado a arquitecto de IA"
          summary="Cada módulo mezcla fundamento, aplicación GEN+, riesgo y evidencia de dominio."
        />
        <div className="module-grid">
          {knowledgeModules.map((module) => {
            const Icon = module.icon;
            return (
              <article className="module-card" key={module.id}>
                <div className="module-icon">
                  <Icon size={20} />
                </div>
                <span>{module.level}</span>
                <h3>{module.shortTitle}</h3>
                <p>{module.promise}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="fuentes">
        <SectionTitle
          eyebrow="Fuentes"
          title="Base documental inicial"
          summary="Las fuentes crudas quedaron dentro del repo y la app usa una síntesis curada para entrenamiento."
        />
        <div className="source-grid">
          {sourceNotes.map((source) => (
            <article className="source-card" key={source.title}>
              <div>
                <span>{source.type}</span>
                <strong>{source.status}</strong>
              </div>
              <h3>{source.title}</h3>
              <p>{source.coverage}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function TrainerView() {
  const [moduleId, setModuleId] = useState(knowledgeModules[0].id);
  const [level, setLevel] = useState<MasteryLevel>("base");
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const selectedModule = knowledgeModules.find((module) => module.id === moduleId) ?? knowledgeModules[0];
  const questionSet = useMemo(() => getQuestionSet(moduleId, level), [moduleId, level]);
  const question = questionSet[index % questionSet.length];

  useEffect(() => {
    setIndex(0);
    setRevealed(false);
  }, [moduleId, level]);

  const Icon = selectedModule.icon;

  return (
    <div className="view-stack">
      <section className="trainer-layout">
        <div className="trainer-panel">
          <SectionTitle
            eyebrow="Sesión socrática"
            title="Preguntas para entender de verdad"
            summary="El objetivo no es memorizar conceptos; es poder decidir arquitectura, producto y riesgo."
          />

          <div className="control-group">
            <label htmlFor="module">Módulo</label>
            <select id="module" value={moduleId} onChange={(event) => setModuleId(event.target.value)}>
              {knowledgeModules.map((module) => (
                <option key={module.id} value={module.id}>
                  {module.shortTitle} · {module.title}
                </option>
              ))}
            </select>
          </div>

          <div className="level-tabs" role="group" aria-label="Nivel">
            {levels.map((item) => (
              <button
                key={item}
                type="button"
                className={item === level ? "level-tab active" : "level-tab"}
                onClick={() => setLevel(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <article className="concept-panel">
            <div className="concept-heading">
              <div className="module-icon">
                <Icon size={20} />
              </div>
              <div>
                <span>{selectedModule.level}</span>
                <h3>{selectedModule.title}</h3>
              </div>
            </div>
            <p>{selectedModule.simple}</p>
            <p className="advanced-note">{selectedModule.advanced}</p>
          </article>
        </div>

        <div className="question-panel">
          <div className="question-meta">
            <span>{findModuleTitle(question.moduleId)}</span>
            <strong>
              {index + 1} / {questionSet.length}
            </strong>
          </div>
          <h2>{question.question}</h2>
          <p>{question.whyItMatters}</p>

          <div className="question-actions">
            <button className="primary-button" type="button" onClick={() => setRevealed((value) => !value)}>
              {revealed ? "Ocultar respuesta" : "Revelar respuesta"}
            </button>
            <button
              className="ghost-button"
              type="button"
              onClick={() => {
                setIndex((value) => value + 1);
                setRevealed(false);
              }}
            >
              Siguiente <ArrowRight size={17} />
            </button>
          </div>

          {revealed && (
            <div className="answer-stack">
              <div>
                <span>Respuesta núcleo</span>
                <p>{question.answer}</p>
              </div>
              <div>
                <span>Conexión</span>
                <p>{question.connection}</p>
              </div>
              <div>
                <span>Reto aplicado</span>
                <p>{question.challenge}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Banco completo"
          title="Preguntas disponibles"
          summary="Cada pregunta está pensada para unir concepto, arquitectura, negocio y aplicación real."
        />
        <div className="question-grid">
          {trainerQuestions.slice(0, 12).map((item) => (
            <article className="mini-question" key={item.id}>
              <span>{findModuleTitle(item.moduleId)} · {item.level}</span>
              <p>{item.question}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function ConceptsView() {
  const [query, setQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<MasteryLevel | "todos">("todos");
  const normalized = normalizeSearch(query);

  const filteredConcepts = useMemo(() => {
    return expertConcepts.filter((concept) => {
      const levelMatches = levelFilter === "todos" || concept.level === levelFilter;
      if (!levelMatches) return false;
      if (!normalized) return true;

      const haystack = normalizeSearch(
        [
          concept.domain,
          concept.title,
          concept.simple,
          concept.deep,
          concept.whyItMatters,
          concept.example,
          concept.practice,
        ].join(" "),
      );
      return haystack.includes(normalized);
    });
  }, [levelFilter, normalized]);

  return (
    <div className="view-stack">
      <section className="library-header">
        <SectionTitle
          eyebrow="Conceptos expertos"
          title="IA, desarrollo web, datos, agentes y producción"
          summary="Explicación sencilla + analogía + capa técnica + lectura ejecutiva + ejemplo detallado + práctica. Enfocado en pasar de usuario avanzado a arquitecto IA."
        />
        <label className="search-box">
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar concepto, dominio o ejemplo..."
            type="search"
          />
        </label>
      </section>

      <section className="concept-bridge-grid" aria-label="Puentes mentales de IA">
        {conceptBridges.map((bridge) => (
          <article className="concept-bridge-card" key={bridge.id}>
            <div className="bridge-axis">
              <span>{bridge.domain}</span>
              <strong>{bridge.level}</strong>
            </div>
            <h3>{bridge.title}</h3>
            <div className="concept-layer">
              <strong>Analogía simple</strong>
              <p>{bridge.analogy}</p>
            </div>
            <div className="concept-layer">
              <strong>Lectura técnica</strong>
              <p>{bridge.technical}</p>
            </div>
            <div className="concept-layer">
              <strong>Cruce de conceptos</strong>
              <ul>
                {bridge.crossConcepts.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="risk-block">
              <strong>Lectura ejecutiva</strong>
              <p>{bridge.executive}</p>
            </div>
          </article>
        ))}
      </section>

      <div className="filter-row" role="group" aria-label="Filtrar nivel">
        <button
          type="button"
          className={levelFilter === "todos" ? "level-tab active" : "level-tab"}
          onClick={() => setLevelFilter("todos")}
        >
          Todos
        </button>
        {levels.map((item) => (
          <button
            key={item}
            type="button"
            className={levelFilter === item ? "level-tab active" : "level-tab"}
            onClick={() => setLevelFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <section className="concept-grid">
        {filteredConcepts.map((concept) => (
          <article className="expert-concept-card" key={concept.id}>
            <div className="concept-card-top">
              <span>{concept.domain}</span>
              <strong>{concept.level}</strong>
            </div>
            <h3>{concept.title}</h3>
            <div className="concept-layer">
              <strong>Simple</strong>
              <p>{concept.simple}</p>
            </div>
            <div className="concept-layer">
              <strong>Técnico</strong>
              <p>{concept.deep}</p>
            </div>
            <div className="concept-layer">
              <strong>Ejecutivo</strong>
              <p>{concept.whyItMatters}</p>
            </div>
            <div className="concept-layer">
              <strong>Ejemplo</strong>
              <p>{concept.example}</p>
            </div>
            <div className="risk-block">
              <strong>Práctica</strong>
              <p>{concept.practice}</p>
            </div>
          </article>
        ))}
      </section>

      <section>
        <SectionTitle
          eyebrow="Labs detallados"
          title="Casos de implementación para dominar IA construyendo"
          summary="Cada lab define escenario, arquitectura, flujo, datos, stack, riesgos y entregable."
        />
        <div className="lab-grid">
          {expertLabs.map((lab) => (
            <article className="lab-card" key={lab.id}>
              <span>{lab.level}</span>
              <h3>{lab.title}</h3>
              <p>{lab.scenario}</p>
              <div className="concept-layer">
                <strong>Arquitectura</strong>
                <p>{lab.architecture}</p>
              </div>
              <div className="lab-columns">
                <div>
                  <strong>Flujo</strong>
                  <ol>
                    {lab.flow.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
                <div>
                  <strong>Stack</strong>
                  <div className="chip-list">
                    {lab.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="evidence-block">
                <strong>Ejemplo detallado</strong>
                <p>{lab.detailedExample}</p>
              </div>
              <div className="risk-block">
                <strong>Riesgos</strong>
                <p>{lab.risks.join(" · ")}</p>
              </div>
              <div className="template-block">
                <strong>Entregable</strong>
                <p>{lab.deliverable}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function KeyDataView() {
  const topMetrics = adoptionMetrics.slice(0, 4);

  return (
    <div className="view-stack">
      <section className="hero-panel data-hero">
        <div className="hero-copy">
          <span className="eyebrow">Datos clave · adopción e implementación IA</span>
          <h2>El mercado ya adoptó IA. La ventaja ahora está en implementarla con sistema.</h2>
          <p>
            Esta vista sintetiza reportes recientes, referencias de implementación y aprendizajes de Platzi/Freddy
            Vega para convertir datos en decisiones: qué adoptar, cómo medir, qué herramientas usar y qué riesgos
            controlar.
          </p>
        </div>
        <div className="hero-proof data-proof">
          <div className="proof-header">
            <BarChart3 size={20} />
            <span>Lectura ejecutiva</span>
          </div>
          <p>
            IA ya no se gana por curiosidad ni por comprar licencias. Se gana con casos de uso, rediseño de flujos,
            datos confiables, herramientas gobernadas, personas entrenadas y métricas de impacto.
          </p>
        </div>
      </section>

      <section className="data-metrics-grid">
        {topMetrics.map((metric) => (
          <article className="data-metric-card" key={metric.id}>
            <span>{metric.source}</span>
            <strong>{metric.value}</strong>
            <h3>{metric.label}</h3>
            <p>{metric.signal}</p>
            <a href={metric.sourceUrl} target="_blank" rel="noreferrer">
              Fuente <ExternalLink size={15} />
            </a>
          </article>
        ))}
      </section>

      <section>
        <SectionTitle
          eyebrow="Lectura de mercado"
          title="12 datos que importan para decidir adopción IA"
          summary="Cada dato está conectado a una implicancia para GEN+, AEC, producto, capacitación y automatización."
        />
        <div className="insight-table">
          {adoptionMetrics.map((metric) => (
            <article className="insight-row" key={metric.id}>
              <div>
                <span>{metric.source}</span>
                <strong>{metric.value}</strong>
              </div>
              <div>
                <h3>{metric.label}</h3>
                <p>{metric.implication}</p>
              </div>
              <a href={metric.sourceUrl} target="_blank" rel="noreferrer" aria-label={`Abrir ${metric.source}`}>
                <ExternalLink size={17} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Implementación"
          title="Qué significan los datos cuando quieres construir"
          summary="El patrón común de los reportes: la adopción sube, pero el impacto aparece solo cuando hay procesos, datos, gobierno y práctica."
        />
        <div className="signal-grid">
          {implementationSignals.map((signal) => (
            <article className="signal-card" key={signal.id}>
              <div className="module-icon">
                <BriefcaseBusiness size={20} />
              </div>
              <h3>{signal.title}</h3>
              <div className="concept-layer">
                <strong>Simple</strong>
                <p>{signal.simple}</p>
              </div>
              <div className="concept-layer">
                <strong>Técnico</strong>
                <p>{signal.technical}</p>
              </div>
              <div className="risk-block">
                <strong>Ejecutivo</strong>
                <p>{signal.executive}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Herramientas"
          title="Mapa de herramientas IA por capa de implementación"
          summary="No elijas herramientas por hype. Elige por rol en la arquitectura: modelo, workflow, RAG, agente, evaluación, seguridad o contenido."
        />
        <div className="tool-layer-grid">
          {toolLayers.map((tool) => (
            <article className="tool-layer-card" key={tool.id}>
              <div className="tool-layer-top">
                <div className="module-icon">
                  <Wrench size={20} />
                </div>
                <span>{tool.layer}</span>
              </div>
              <div className="chip-list">
                {tool.examples.map((example) => (
                  <span key={example}>{example}</span>
                ))}
              </div>
              <div className="concept-layer">
                <strong>Cuándo usar</strong>
                <p>{tool.useWhen}</p>
              </div>
              <div className="risk-block">
                <strong>Riesgo</strong>
                <p>{tool.implementationRisk}</p>
              </div>
              <div className="evidence-block">
                <strong>Regla de decisión</strong>
                <p>{tool.decisionRule}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Freddy Vega / Platzi / referentes"
          title="Aprendizajes para adopción AI-first en equipos reales"
          summary="Se revisaron referencias públicas de Platzi, Freddy Vega y contenidos similares para extraer principios aplicables, no copiar discurso."
        />
        <div className="platzi-grid">
          {platziInsights.map((insight) => (
            <article className="platzi-card" key={insight.id}>
              <span>{insight.source}</span>
              <h3>{insight.title}</h3>
              <p>{insight.observation}</p>
              <div className="template-block">
                <strong>Aplicación GEN+</strong>
                <p>{insight.genplusTakeaway}</p>
              </div>
              <a href={insight.sourceUrl} target="_blank" rel="noreferrer">
                Revisar fuente <ExternalLink size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Roadmap ejecutivo"
          title="Implementación IA en 120 días"
          summary="Un camino práctico para pasar de uso individual a sistema con casos, datos, agentes, gobierno y mejora continua."
        />
        <div className="implementation-grid">
          {implementationRoadmap.map((step) => (
            <article className="implementation-card" key={step.id}>
              <span>{step.phase}</span>
              <h3>{step.title}</h3>
              <p>{step.goal}</p>
              <div className="evidence-block">
                <strong>Evidencia</strong>
                <p>{step.evidence}</p>
              </div>
              <div className="risk-block">
                <strong>Falla típica</strong>
                <p>{step.failureMode}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Fuentes web revisadas"
          title="Reportes, estudios y referencias públicas"
          summary="La documentación ampliada conserva las fuentes para actualización periódica y auditoría."
        />
        <div className="reference-grid">
          {keyDataSources.map((source) => (
            <a className="reference-card" href={source.url} key={source.url} target="_blank" rel="noreferrer">
              <div>
                <strong>{source.label}</strong>
                <ShieldCheck size={16} />
              </div>
              <p>{source.note}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

function MaturityView() {
  return (
    <div className="view-stack">
      <section className="hero-panel maturity-hero">
        <div className="hero-copy">
          <span className="eyebrow">Madurez IA · arquitectura cognitiva</span>
          <h2>De usar IA como herramienta suelta a operar sistemas agentic gobernados.</h2>
          <p>
            Esta capa convierte la nueva guia en un mapa practico: diagnostico 100-500, pilares de adopcion,
            taxonomia tecnica, frameworks agentic, razonamiento avanzado y directivas para GEN+.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#niveles-madurez">
              Ver niveles <CircleGauge size={18} />
            </a>
            <a className="secondary-button" href="#razonamiento-avanzado">
              Razonamiento avanzado <Cpu size={18} />
            </a>
          </div>
        </div>
        <div className="hero-proof maturity-proof">
          <div className="proof-header">
            <Network size={20} />
            <span>Idea central</span>
          </div>
          <p>
            La ventaja no es tener mas prompts. La ventaja es conectar modelos, datos, herramientas, humanos,
            evaluacion y gobierno en flujos que mejoran decisiones reales.
          </p>
          <div className="maturity-mini-metrics">
            <strong>5 niveles</strong>
            <strong>5 pilares</strong>
            <strong>3 frameworks</strong>
          </div>
        </div>
      </section>

      <section id="niveles-madurez">
        <SectionTitle
          eyebrow="Diagnostico 100-500"
          title="Modelo de madurez IA para empresas que quieren implementar, no solo experimentar"
          summary="Cada nivel traduce la adopcion en senales, infraestructura, gobierno, siguiente movimiento y riesgo oculto."
        />
        <div className="maturity-level-grid">
          {maturityLevels.map((level) => (
            <article className="maturity-card" key={level.id}>
              <div className="maturity-card-top">
                <span>Nivel {level.level}</span>
                <strong>{level.name}</strong>
              </div>
              <h3>{level.title}</h3>
              <div className="concept-layer">
                <strong>Simple</strong>
                <p>{level.simple}</p>
              </div>
              <div className="concept-layer">
                <strong>Tecnico</strong>
                <p>{level.technical}</p>
              </div>
              <div className="concept-layer">
                <strong>Ejecutivo</strong>
                <p>{level.executive}</p>
              </div>
              <div className="chip-list">
                {level.signals.map((signal) => (
                  <span key={signal}>{signal}</span>
                ))}
              </div>
              <div className="evidence-block">
                <strong>Infraestructura</strong>
                <p>{level.infrastructure}</p>
              </div>
              <div className="template-block">
                <strong>Gobierno</strong>
                <p>{level.governance}</p>
              </div>
              <div className="risk-block">
                <strong>Riesgo oculto</strong>
                <p>{level.hiddenRisk}</p>
              </div>
              <div className="next-move-block">
                <strong>Siguiente movimiento</strong>
                <p>{level.nextMove}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Cinco pilares"
          title="La adopcion seria de IA se evalua por sistema, no por entusiasmo"
          summary="Los pilares permiten diagnosticar si una organizacion tiene estrategia, datos, tecnologia, talento y gobierno para escalar."
        />
        <div className="pillar-grid">
          {maturityPillars.map((pillar) => (
            <article className="pillar-card" key={pillar.id}>
              <div className="module-icon">
                <ShieldCheck size={20} />
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.simple}</p>
              <div className="concept-layer">
                <strong>Lectura avanzada</strong>
                <p>{pillar.advanced}</p>
              </div>
              <div className="concept-layer">
                <strong>Preguntas diagnosticas</strong>
                <ul>
                  {pillar.diagnosticQuestions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ul>
              </div>
              <div className="evidence-block">
                <strong>Evidencia</strong>
                <p>{pillar.evidence}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Taxonomia tecnica"
          title="Cinco familias de IA y cuando conviene usarlas"
          summary="Ser experto implica elegir arquitectura segun problema: predecir, generar, recuperar, ejecutar o interpretar evidencia visual."
        />
        <div className="taxonomy-grid">
          {aiTaxonomy.map((item) => (
            <article className="taxonomy-card" key={item.id}>
              <div className="module-icon">
                <Network size={20} />
              </div>
              <h3>{item.title}</h3>
              <div className="concept-layer">
                <strong>Mecanismo</strong>
                <p>{item.mechanism}</p>
              </div>
              <div className="concept-layer">
                <strong>Caso AEC</strong>
                <p>{item.aecCase}</p>
              </div>
              <div className="template-block">
                <strong>Regla de decision</strong>
                <p>{item.decisionRule}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Frameworks agentic"
          title="CrewAI, AutoGen y LangGraph no resuelven el mismo tipo de problema"
          summary="La seleccion depende de control de estado, necesidad de ciclos, auditoria, aprobacion humana, costo y tipo de flujo."
        />
        <div className="framework-grid">
          {agentFrameworks.map((framework) => (
            <article className="framework-card" key={framework.id}>
              <div className="framework-card-top">
                <div className="module-icon">
                  <GitBranch size={20} />
                </div>
                <span>{framework.paradigm}</span>
              </div>
              <h3>{framework.name}</h3>
              <div className="concept-layer">
                <strong>Mejor para</strong>
                <p>{framework.bestFor}</p>
              </div>
              <div className="concept-layer">
                <strong>Estado</strong>
                <p>{framework.stateModel}</p>
              </div>
              <div className="concept-layer">
                <strong>Control humano</strong>
                <p>{framework.humanControl}</p>
              </div>
              <div className="risk-block">
                <strong>Riesgo</strong>
                <p>{framework.risk}</p>
              </div>
              <div className="evidence-block">
                <strong>Uso GEN+</strong>
                <p>{framework.genplusUse}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="razonamiento-avanzado">
        <SectionTitle
          eyebrow="Razonamiento avanzado"
          title="TTC, GRPO, router cognitivo y deuda tecnica explicados para decidir"
          summary="Cada concepto incluye analogia sencilla, lectura tecnica, interpretacion ejecutiva, aplicacion AEC y peligro comun."
        />
        <div className="reasoning-grid">
          {reasoningConcepts.map((concept) => (
            <article className="reasoning-card" key={concept.id}>
              <div className="module-icon">
                <Cpu size={20} />
              </div>
              <h3>{concept.title}</h3>
              <div className="concept-layer">
                <strong>Analogia simple</strong>
                <p>{concept.simpleAnalogy}</p>
              </div>
              <div className="concept-layer">
                <strong>Tecnico</strong>
                <p>{concept.technical}</p>
              </div>
              <div className="concept-layer">
                <strong>Ejecutivo</strong>
                <p>{concept.executive}</p>
              </div>
              <div className="evidence-block">
                <strong>Aplicacion AEC</strong>
                <p>{concept.aecApplication}</p>
              </div>
              <div className="risk-block">
                <strong>Peligro</strong>
                <p>{concept.danger}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Directivas GEN+"
          title="Reglas de implementacion para construir criterio experto"
          summary="Estas directivas convierten la guia en comportamiento operativo para nuevos documentos, productos, cursos y agentes."
        />
        <div className="directive-grid">
          {strategicDirectives.map((directive) => (
            <article className="directive-card" key={directive.id}>
              <span>Directiva</span>
              <h3>{directive.title}</h3>
              <p>{directive.whyItMatters}</p>
              <div className="template-block">
                <strong>Accion GEN+</strong>
                <p>{directive.genplusAction}</p>
              </div>
              <div className="risk-block">
                <strong>Pregunta de dominio</strong>
                <p>{directive.question}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function AecAiView() {
  return (
    <div className="view-stack">
      <section className="hero-panel aec-hero">
        <div className="hero-copy">
          <span className="eyebrow">IA AEC · GEN+ / AECODE</span>
          <h2>Convierte IA en productos AEC: QTO, obra, BIM, PMO, RAG, vision y aprendizaje verificable.</h2>
          <p>
            Esta capa integra los dos reportes nuevos en un mapa accionable para GEN+: señales de adopcion,
            casos con ROI, stack AI-native, patrones agentic, prompts y glosario tecnico aplicado a construccion.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#aec-senales">
              Ver señales <BarChart3 size={18} />
            </a>
            <a className="secondary-button" href="#aec-casos">
              Casos producto <BriefcaseBusiness size={18} />
            </a>
          </div>
        </div>
        <div className="hero-proof aec-proof">
          <div className="proof-header">
            <Eye size={20} />
            <span>Tesis AEC</span>
          </div>
          <p>
            La ventaja no esta en comprar copilotos genericos. Esta en conectar flujos AEC con datos, contratos de
            informacion, evidencia visual, agentes especializados y metricas de ciclo cerrado.
          </p>
          <div className="aec-proof-strip">
            <strong>QTO</strong>
            <strong>SiteVision</strong>
            <strong>PMO Agent</strong>
            <strong>AECODE Hub</strong>
          </div>
        </div>
      </section>

      <section id="aec-senales">
        <SectionTitle
          eyebrow="Señales de mercado"
          title="Adopcion alta, captura de valor baja: ahi esta la oportunidad"
          summary="Las cifras provienen de las fuentes cargadas y deben tratarse como señales de trabajo: utiles para priorizar pilotos, no como promesa comercial sin verificacion adicional."
        />
        <div className="aec-signal-grid">
          {aecMarketSignals.map((signal) => (
            <article className="aec-signal-card" key={signal.id}>
              <span>{signal.source}</span>
              <strong>{signal.value}</strong>
              <h3>{signal.label}</h3>
              <div className="concept-layer">
                <strong>Que significa</strong>
                <p>{signal.meaning}</p>
              </div>
              <div className="evidence-block">
                <strong>Implicancia GEN+</strong>
                <p>{signal.genplusImplication}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="aec-casos">
        <SectionTitle
          eyebrow="Casos producto"
          title="Ocho cuñas de IA AEC para convertir research en pilotos vendibles"
          summary="Cada caso conecta usuario, dolor, arquitectura, evidencia, metrica, piloto inicial y riesgo oculto."
        />
        <div className="aec-wedge-grid">
          {aecProductWedges.map((wedge) => (
            <article className="aec-wedge-card" key={wedge.id}>
              <span>{wedge.user}</span>
              <h3>{wedge.title}</h3>
              <p>{wedge.pain}</p>
              <div className="concept-layer">
                <strong>Arquitectura IA</strong>
                <p>{wedge.aiArchitecture}</p>
              </div>
              <div className="concept-layer">
                <strong>Evidencia fuente</strong>
                <p>{wedge.evidence}</p>
              </div>
              <div className="evidence-block">
                <strong>Metrica</strong>
                <p>{wedge.metric}</p>
              </div>
              <div className="template-block">
                <strong>Primer piloto</strong>
                <p>{wedge.firstPilot}</p>
              </div>
              <div className="risk-block">
                <strong>Riesgo</strong>
                <p>{wedge.risk}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Patrones agentic"
          title="Patrones para construir agentes AEC sin caer en teatro multiagente"
          summary="El reporte refuerza una regla: empezar por un agente bien equipado y escalar a multiagente solo cuando la complejidad lo justifica."
        />
        <div className="agentic-pattern-grid">
          {agenticPatterns.map((pattern) => (
            <article className="agentic-pattern-card" key={pattern.id}>
              <div className="module-icon">
                <GitBranch size={20} />
              </div>
              <h3>{pattern.title}</h3>
              <div className="concept-layer">
                <strong>Simple</strong>
                <p>{pattern.simple}</p>
              </div>
              <div className="concept-layer">
                <strong>Tecnico</strong>
                <p>{pattern.technical}</p>
              </div>
              <div className="template-block">
                <strong>Cuando usar</strong>
                <p>{pattern.useWhen}</p>
              </div>
              <div className="evidence-block">
                <strong>Ejemplo AEC</strong>
                <p>{pattern.aecExample}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Stack AI-native"
          title="Sistema de registro determinista, sistema cognitivo probabilistico"
          summary="Esta separacion evita que el LLM se convierta en fuente maestra de contratos, costos, IFC, aprobaciones o bitacoras."
        />
        <div className="aec-stack-grid">
          {aecStackLayers.map((layer) => (
            <article className="aec-stack-card" key={layer.id}>
              <span>{layer.layer}</span>
              <h3>{layer.role}</h3>
              <div className="chip-list">
                {layer.examples.map((example) => (
                  <span key={example}>{example}</span>
                ))}
              </div>
              <div className="template-block">
                <strong>Regla de decision</strong>
                <p>{layer.decisionRule}</p>
              </div>
              <div className="risk-block">
                <strong>Riesgo</strong>
                <p>{layer.risk}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Prompts AEC"
          title="Plantillas reutilizables para convertir IA en flujo operativo"
          summary="Los prompts buenos fijan rol, criterio de verdad, esquema de salida, limites de accion y regla de abstencion."
        />
        <div className="aec-prompt-grid">
          {aecPromptTemplates.map((prompt) => (
            <article className="aec-prompt-card" key={prompt.id}>
              <span>{prompt.output}</span>
              <h3>{prompt.title}</h3>
              <p>{prompt.useWhen}</p>
              <div className="template-block">
                <strong>Plantilla</strong>
                <p>{prompt.template}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Glosario aplicado"
          title="Terminologia avanzada explicada en clave AEC"
          summary="El objetivo no es memorizar siglas, sino saber que problema resuelve cada concepto y donde se usa."
        />
        <div className="aec-glossary-grid">
          {aecGlossaryTerms.map((item) => (
            <article className="aec-glossary-card" key={item.term}>
              <span>Concepto</span>
              <h3>{item.term}</h3>
              <div className="concept-layer">
                <strong>Simple</strong>
                <p>{item.simple}</p>
              </div>
              <div className="concept-layer">
                <strong>Tecnico</strong>
                <p>{item.technical}</p>
              </div>
              <div className="evidence-block">
                <strong>Uso AEC</strong>
                <p>{item.aecUse}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function LibraryView() {
  const [query, setQuery] = useState("");
  const normalized = normalizeSearch(query);

  const filteredModules = useMemo(() => {
    if (!normalized) return knowledgeModules;

    return knowledgeModules.filter((module) => {
      const haystack = normalizeSearch(
        [module.title, module.promise, module.simple, module.advanced, module.concepts.join(" ")].join(" "),
      );
      return haystack.includes(normalized);
    });
  }, [normalized]);

  return (
    <div className="view-stack">
      <section className="library-header">
        <SectionTitle
          eyebrow="Biblioteca"
          title="Conceptos, ejemplos, evidencia y riesgos"
          summary="Busca por RAG, agentes, BIM, ROI, MCP, visión, prompting, gobernanza o vibe coding."
        />
        <label className="search-box">
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar en la base..."
            type="search"
          />
        </label>
      </section>

      <div className="library-grid">
        {filteredModules.map((module) => {
          const Icon = module.icon;
          return (
            <article className="library-card" key={module.id}>
              <div className="library-top">
                <div className="module-icon">
                  <Icon size={20} />
                </div>
                <span>{module.level}</span>
              </div>
              <h3>{module.title}</h3>
              <p>{module.promise}</p>
              <div className="chip-list">
                {module.concepts.slice(0, 6).map((concept) => (
                  <span key={concept}>{concept}</span>
                ))}
              </div>
              <div className="evidence-block">
                <strong>Evidencia</strong>
                <p>{module.evidence}</p>
              </div>
              <div className="risk-block">
                <strong>Riesgo</strong>
                <p>{module.risk}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function PlaybooksView() {
  return (
    <div className="view-stack">
      <SectionTitle
        eyebrow="Playbooks"
        title="Guías operativas para aplicar IA"
        summary="Cada playbook produce una salida utilizable: diagnóstico, agente, RAG, ROI, visión, MVP o gobernanza."
      />

      <div className="playbook-grid">
        {playbooks.map((playbook) => (
          <article className="playbook-card" key={playbook.id}>
            <span>{playbook.output}</span>
            <h3>{playbook.title}</h3>
            <p>{playbook.useWhen}</p>
            <ul>
              {playbook.steps.map((step) => (
                <li key={step}>
                  <CheckCircle2 size={16} />
                  {step}
                </li>
              ))}
            </ul>
            <div className="template-block">
              <strong>Prompt base</strong>
              <p>{playbook.template}</p>
            </div>
            <div className="risk-block">
              <strong>Riesgo oculto</strong>
              <p>{playbook.hiddenRisk}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function RoadmapView() {
  return (
    <div className="view-stack">
      <SectionTitle
        eyebrow="Evolución"
        title="De entrenador estático a asistente experto conectado"
        summary="El repo ya queda preparado para cargar más documentos y avanzar hacia RAG, evaluación y agentes."
      />

      <section className="path-grid">
        {learningPaths.map((path) => (
          <article className="path-card" key={path.title}>
            <span>{path.audience}</span>
            <h3>{path.title}</h3>
            <p>{path.activation}</p>
            <div className="path-modules">
              {path.modules.map((moduleId) => (
                <span key={moduleId}>{findModuleTitle(moduleId)}</span>
              ))}
            </div>
            <div className="evidence-block">
              <strong>Evidencia</strong>
              <p>{path.evidence}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="timeline">
        <article>
          <span>Fase 1</span>
          <h3>Base y entrenamiento</h3>
          <p>App estática, módulos, preguntas, playbooks, fuentes crudas y documentación del repo.</p>
        </article>
        <article>
          <span>Fase 2</span>
          <h3>Ingesta mensual</h3>
          <p>Carpeta inbox, registro de fuentes, síntesis curada, preguntas nuevas y versionado del conocimiento.</p>
        </article>
        <article>
          <span>Fase 3</span>
          <h3>RAG local/API</h3>
          <p>Embeddings, búsqueda semántica, citas, permisos, evaluaciones y respuestas con fuente.</p>
        </article>
        <article>
          <span>Fase 4</span>
          <h3>Asistente agentic</h3>
          <p>Herramientas, memoria, planificador, tutor, evaluador, logs, human-in-the-loop y métricas.</p>
        </article>
      </section>

      <section>
        <SectionTitle
          eyebrow="Referencias externas"
          title="Fuentes actuales usadas para complementar la base"
          summary="Se priorizaron fuentes oficiales o documentación primaria para temas cambiantes."
        />
        <div className="reference-grid">
          {externalReferences.map((reference) => (
            <a className="reference-card" href={reference.url} key={reference.url} target="_blank" rel="noreferrer">
              <div>
                <strong>{reference.label}</strong>
                <ExternalLink size={16} />
              </div>
              <p>{reference.note}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
