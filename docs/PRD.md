# PRD — GEN+ AI Expert Trainer

## Diagnóstico

Alejandro tiene una base creciente sobre IA, agentes, RAG, automatización, AEC, educación y producto. El riesgo no es falta de información; es falta de sistema para convertir esa información en dominio aplicable.

## Usuario objetivo

Primario: Alejandro Palpan, CEO/builder que necesita aprender, decidir, vender, diseñar y construir sistemas IA.

Secundarios: equipo GEN+, instructores AECODE, aliados y clientes AEC.

## Promesa

Convertir documentación IA en una experiencia de entrenamiento que enseñe conceptos, haga preguntas profundas, conecte con casos GEN+/AEC y prepare activos reutilizables.

## Loop crítico

Entrar -> ver estado de la base -> elegir tema -> practicar pregunta -> entender respuesta -> aplicar reto -> consultar playbook -> mejorar base con nuevas fuentes.

## Alcance MVP

Incluido:

- App local responsive.
- Tema dark/light.
- Módulos desde fundamentos hasta multiagentes.
- Preguntas de conexión.
- Catálogo de conceptos intermedios, avanzados, expertos y ultra avanzados.
- Labs detallados de RAG, agentes, desarrollo web IA, gobernanza, computer vision y sistemas de aprendizaje con IA.
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
- El usuario puede navegar por Command, Entrenador, Biblioteca, Playbooks y Roadmap.
- El entrenador muestra pregunta, respuesta, conexión y reto.
- La vista Conceptos permite estudiar IA, desarrollo web y agentic AI con analogía simple, capa técnica, cruce conceptual, lectura ejecutiva, ejemplo y práctica.
- La vista Datos clave permite estudiar adopción, implementación, herramientas, riesgos y referencias públicas recientes con lectura ejecutiva.
- La documentación explica cómo seguir cargando conocimiento.

## Riesgos ocultos

- Convertirlo en biblioteca estática sin práctica.
- Cargar fuentes sin curaduría.
- Prometer agente experto antes de tener RAG, evals y fuentes citables.
- Mezclar IA general, AECODE, GEN+ y VisionPro sin taxonomía.

## Próxima iteración

Agregar pipeline de ingesta real: extracción DOCX/PDF/TXT, OCR, chunking, embeddings, búsqueda y respuestas con citas. Luego agregar progreso personal, evals por nivel y tutor conectado a la base.
