# PRD — AI Expert

## Diagnóstico

Alejandro tiene una base creciente sobre IA, agentes, RAG, automatización, AEC, educación y producto. El riesgo no es falta de información; es falta de sistema para convertir esa información en dominio aplicable.

AI Expert debe funcionar como una herramienta de decisión, no como un documento plano: diagnostica madurez, orienta capacitación, prioriza casos, guía implementación y prepara escalamiento con ROI.

## Usuario objetivo

Primario: Alejandro Palpan, CEO/builder que necesita aprender, decidir, vender, diseñar y construir sistemas IA.

Secundarios: equipo GEN+, instructores AECODE, aliados y clientes AEC.

## Promesa

Convertir documentación IA en una plataforma clara y usable para aprender, diagnosticar, implementar y escalar IA en empresas, proyectos y startups.

## Loop crítico

Entrar -> elegir perfil y nivel -> revisar score de madurez -> entender brechas -> abrir ruta 01-05 -> practicar conceptos -> generar plan -> aplicar playbook -> mejorar base con nuevas fuentes.

## Alcance MVP

Incluido:

- App local responsive.
- Tema dark/light.
- Dashboard AI Expert con titulo, subtitulo, score de madurez, filtros por perfil/nivel y CTAs accionables.
- Framework visual 01 Diagnostico, 02 Capacitacion, 03 Hoja de ruta, 04 Implementacion y 05 Escalamiento.
- Panel de diagnostico con dimensiones: estrategia, datos, procesos, talento, tecnologia y gobierno.
- Módulos desde fundamentos hasta multiagentes.
- Preguntas de conexión.
- Catálogo de conceptos intermedios, avanzados, expertos y ultra avanzados.
- Labs detallados de RAG, agentes, desarrollo web IA, gobernanza, computer vision y sistemas de aprendizaje con IA.
- Vista de madurez IA con niveles 100-500, cinco pilares, taxonomía técnica, frameworks agentic, TTC, GRPO y directivas GEN+.
- Vista IA AEC con señales de mercado, cuñas producto, patrones agentic, stack, prompts y glosario aplicado.
- Biblioteca con conceptos, evidencia y riesgos.
- Playbooks operativos.
- Fuentes crudas iniciales.
- Documentación de evolución.

No incluido todavía:

- Login.
- Backend.
- Chat conectado a modelo.
- RAG real con embeddings.
- OCR del PDF codificado.
- Persistencia de progreso.

## Métrica principal

Preguntas de IA respondidas correctamente y aplicadas a un caso real por semana.

## Métricas secundarias

- Fuentes nuevas ingeridas por mes.
- Playbooks aplicados a casos GEN+/AEC.
- Nuevas preguntas agregadas.
- Casos convertidos en demo, propuesta, clase o agente.

## Criterios de aceptación

- La app corre localmente con `npm run dev`.
- El build pasa con `npm run build`.
- El usuario puede alternar dark/light.
- El usuario puede navegar por AI Expert, Entrenador, Datos clave, Madurez IA, IA AEC, Biblioteca, Playbooks y Roadmap.
- La pantalla principal muestra `AI Expert` y `Todo el potencial de la IA, de forma clara.`
- La pantalla principal permite filtrar por Empresa, Proyecto, Startup y por nivel Basico, Intermedio, Avanzado, Experto.
- La pantalla principal incluye botones visibles para Iniciar diagnostico, Ver roadmap, Explorar casos y Generar plan.
- El entrenador muestra pregunta, respuesta, conexión y reto.
- La vista Conceptos permite estudiar IA, desarrollo web y agentic AI con analogía simple, capa técnica, cruce conceptual, lectura ejecutiva, ejemplo y práctica.
- La vista Datos clave permite estudiar adopción, implementación, herramientas, riesgos y referencias públicas recientes con lectura ejecutiva.
- La vista Madurez IA permite diagnosticar adopción corporativa, elegir framework agentic y estudiar razonamiento avanzado con analogía, técnica, lectura ejecutiva y aplicación AEC.
- La vista IA AEC permite convertir reportes GEN+ / AECODE en casos producto, pilotos medibles, stack AI-native y prompts operativos.
- La documentación explica cómo seguir cargando conocimiento.

## Riesgos ocultos

- Convertirlo en biblioteca estática sin práctica.
- Cargar fuentes sin curaduría.
- Prometer agente experto antes de tener RAG, evals y fuentes citables.
- Mezclar IA general, AECODE, GEN+ y VisionPro sin taxonomía.

## Próxima iteración

Agregar pipeline de ingesta real: extracción DOCX/PDF/TXT, OCR, chunking, embeddings, búsqueda y respuestas con citas. Luego agregar progreso personal, evals por nivel y tutor conectado a la base.
