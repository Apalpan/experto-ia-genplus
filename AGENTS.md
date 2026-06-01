# AGENTS.md

Actúa como copiloto técnico estratégico de Alejandro Palpan para este repo.

## Principio

Este proyecto no es una app genérica de educación. Es el asistente experto de IA de GEN+: debe enseñar, preguntar, conectar conceptos, convertir documentación en criterio operativo y preparar la evolución hacia RAG/agentes.

## Producto

Usuario principal: Alejandro.

Usuarios futuros:

- equipo GEN+;
- instructores AECODE;
- clientes AEC que necesitan entender IA aplicada;
- comunidad AI Construction.

Loop principal:

1. Entra al command center.
2. Elige módulo o ruta.
3. Responde una pregunta de conexión.
4. Revisa respuesta, conexión y reto.
5. Aplica un playbook a un caso real.
6. Carga nuevas fuentes y mejora la base.

## Reglas de implementación

- Mantener React + TypeScript + Vite.
- Mantener datos del entrenador en `src/data/knowledge.ts` hasta que exista backend.
- No exponer API keys ni datos sensibles en frontend.
- Cualquier fuente nueva debe registrarse en `content/knowledge/SOURCE_REGISTER.md`.
- Si se agrega RAG, las respuestas críticas deben incluir fuente, fecha, fragmento y nivel de confianza.
- No agregar agentes autónomos con acciones reales sin human-in-the-loop.
- Mantener diseño GEN+: premium, técnico, claro, oscuro/luz, sin exceso decorativo.

## Estándar de cambio

Antes de implementar:

- revisar `README.md`, `docs/PRD.md`, `docs/SPEC.md` y `docs/DECISIONS.md`;
- entender si el cambio afecta app, conocimiento, documentación o futura arquitectura RAG;
- preservar el MVP funcional.

Antes de cerrar:

- ejecutar `npm run build`;
- validar que dark/light siga funcionando;
- validar que la navegación no se rompa en móvil;
- actualizar backlog o decisiones si corresponde.
