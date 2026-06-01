# Playbook maestro de implementación IA

Objetivo: convertir adopción de IA en impacto operativo, técnico y económico.

Este playbook está diseñado para GEN+, AEC, consultoría, educación técnica, startups y equipos que quieren pasar de “usamos ChatGPT” a “tenemos flujos IA medibles, seguros y escalables”.

## Principio base

La IA no se implementa por herramienta. Se implementa por flujo.

Un flujo IA maduro tiene:

1. Usuario claro.
2. Entrada definida.
3. Datos confiables.
4. Modelo o herramienta adecuada.
5. Output verificable.
6. Acción posterior.
7. Control humano cuando corresponde.
8. Métrica de valor.
9. Registro de errores.
10. Mejora continua.

## Modelo de madurez

### Nivel 0: Uso informal

La gente usa herramientas públicas sin política, sin entrenamiento y sin medición.

Señales:

- Prompts personales.
- Datos copiados manualmente.
- Cero trazabilidad.
- Resultados no compartidos.
- Dudas sobre privacidad.

Riesgo:

- Shadow AI.
- Fuga de datos.
- Aprendizaje superficial.
- Impacto no medible.

Siguiente paso:

- Crear reglas mínimas y mapa de casos de uso.

### Nivel 1: Productividad individual

Usuarios entrenados aplican IA en tareas personales.

Casos típicos:

- Redacción.
- Resúmenes.
- Análisis de documentos.
- Ideación.
- Presentaciones.
- Traducción.
- Excel o datos simples.

Riesgo:

- Mejoras locales sin cambio de proceso.
- Dependencia de prompts.
- Output sin validación.

Siguiente paso:

- Convertir mejores prácticas en plantillas y playbooks.

### Nivel 2: Flujos por equipo

Equipos incorporan IA a procesos compartidos.

Casos típicos:

- Reuniones a acuerdos.
- Propuestas comerciales.
- QA documental.
- Soporte interno.
- PMO.
- Generación de reportes.

Riesgo:

- Datos dispersos.
- Duplicidad de herramientas.
- Falta de ownership.

Siguiente paso:

- Medir antes/después y nombrar dueños.

### Nivel 3: IA conectada a conocimiento

La organización usa RAG o búsqueda semántica sobre fuentes internas.

Casos típicos:

- Consultar contratos.
- Revisar normativa.
- Buscar actas.
- Responder sobre manuales.
- Entrenar tutores internos.

Riesgo:

- Mal chunking.
- Fuentes obsoletas.
- Permisos débiles.
- Respuestas sin cita.

Siguiente paso:

- Implementar evals de recuperación y políticas de acceso.

### Nivel 4: Agentes con herramientas

Sistemas IA ejecutan pasos con herramientas internas.

Casos típicos:

- Crear tareas.
- Consultar bases.
- Generar reportes.
- Revisar entregables.
- Preparar propuestas.
- Monitorear riesgos.

Riesgo:

- Acciones no autorizadas.
- Loops.
- Costos impredecibles.
- Falta de rollback.

Siguiente paso:

- Estado persistente, logs, permisos, human-in-the-loop.

### Nivel 5: Sistema de mejora continua

IA es parte del modelo operativo.

Señales:

- Roadmap IA.
- Catálogo de herramientas.
- Métricas por flujo.
- Evals versionados.
- Gobierno activo.
- Capacitación por rol.
- Revisión de incidentes.
- Presupuesto claro.

Riesgo:

- Burocracia.
- Complejidad excesiva.
- Falta de actualización.

Siguiente paso:

- Escalar por unidades de negocio y productos.

## Selección de casos de uso

Un buen caso de IA cumple cinco condiciones:

1. Alto volumen.
2. Criterio repetible.
3. Datos disponibles.
4. Error recuperable.
5. Impacto medible.

Un mal caso de IA suele tener:

1. Datos inexistentes.
2. Decisión legal o financiera irreversible.
3. Criterio ambiguo.
4. Bajo volumen.
5. Output imposible de validar.

## Matriz valor-riesgo

| Tipo de caso | Valor | Riesgo | Acción |
|---|---:|---:|---|
| Resumir reuniones internas | Medio | Bajo | Automatizar rápido |
| Clasificar documentos | Medio | Medio | Piloto con revisión |
| Generar propuestas comerciales | Alto | Medio | Copiloto con aprobación |
| Responder sobre contratos | Alto | Alto | RAG con citas y control |
| Enviar correos a clientes | Medio | Alto | Borrador, no envío autónomo |
| Aprobar pagos | Alto | Crítico | No automatizar sin controles fuertes |
| Analizar avance de obra por imagen | Alto | Medio/alto | Piloto con validación humana |
| Crear cursos internos | Alto | Medio | Flujo semi-automatizado |

## Arquitectura mínima viable

### Capa 1: Interfaz

Objetivo: que el usuario entienda qué pedir, qué recibe y qué debe verificar.

Componentes:

- Formulario o chat guiado.
- Estado de carga.
- Fuentes utilizadas.
- Botón de aprobar, editar o rechazar.
- Feedback de calidad.
- Historial.

### Capa 2: Backend o BFF

Objetivo: proteger credenciales, normalizar solicitudes y controlar costos.

Componentes:

- Endpoints por flujo.
- Validación de entrada.
- Rate limits.
- Control de usuario.
- Logging.
- Manejo de errores.
- Selección de modelo.

### Capa 3: Contexto y datos

Objetivo: entregar al modelo información precisa y autorizada.

Componentes:

- Base documental.
- Chunking.
- Metadata.
- Embeddings.
- Búsqueda.
- Reranking.
- Permisos.
- Citas.

### Capa 4: Modelo

Objetivo: usar el modelo correcto para cada tarea.

Criterios:

- Razonamiento.
- Costo.
- Latencia.
- Multimodalidad.
- Ventana de contexto.
- Soporte de herramientas.
- Privacidad.

### Capa 5: Herramientas

Objetivo: permitir acciones controladas.

Ejemplos:

- Buscar documento.
- Crear tarea.
- Consultar CRM.
- Generar PDF.
- Enviar borrador.
- Actualizar dashboard.
- Leer calendario.

### Capa 6: Evaluación

Objetivo: medir si el sistema funciona.

Métricas:

- Exactitud.
- Groundedness.
- Formato correcto.
- Tiempo.
- Costo.
- Aceptación humana.
- Incidentes.
- Reintentos.

### Capa 7: Gobierno

Objetivo: escalar sin perder control.

Elementos:

- Política de datos.
- Roles y permisos.
- Clasificación de riesgo.
- Auditoría.
- Retención.
- Proveedores aprobados.
- Revisión periódica.

## 120 días de implementación

### Día 0-15: Diagnóstico

Entregables:

- Inventario de herramientas actuales.
- Mapa de procesos.
- Mapa de datos.
- Matriz valor-riesgo.
- Selección de 2 pilotos.

Preguntas:

- ¿Dónde se pierde más tiempo?
- ¿Qué tareas se repiten cada semana?
- ¿Qué documentos se consultan más?
- ¿Qué decisiones se toman sin buena información?
- ¿Qué errores cuestan más?

### Día 15-30: Pilotos

Entregables:

- Prototipo funcional.
- Prompt o flujo versionado.
- Métrica base.
- Revisión humana.
- Demo ejecutiva.

Regla:

No buscar perfección. Buscar evidencia.

### Día 30-60: Datos y conocimiento

Entregables:

- Fuentes curadas.
- RAG inicial.
- Dataset de preguntas.
- Evaluación de recuperación.
- Respuestas con cita.

Regla:

Si no hay fuente, la IA debe abstenerse.

### Día 60-90: Agentes

Entregables:

- Agente copiloto.
- Tools con schemas.
- Logs.
- Aprobaciones.
- Reporte de errores.

Regla:

Autonomía solo en acciones recuperables.

### Día 90-120: Escala

Entregables:

- Capacitación por rol.
- Catálogo de herramientas.
- Dashboard de adopción.
- Playbooks.
- Gobierno básico.

Regla:

No escalar una práctica que no se puede medir.

## Roles necesarios

### Sponsor ejecutivo

Decide prioridad, presupuesto y criterio de éxito.

### Product owner IA

Traduce problema en flujo y roadmap.

### AI architect

Diseña modelo, datos, herramientas, seguridad y escalabilidad.

### Domain expert

Valida calidad técnica y criterios de negocio.

### Data owner

Gestiona fuente, permisos, vigencia y calidad.

### Change lead

Acompaña adopción, hábitos, capacitación y comunicación.

### QA / eval lead

Diseña pruebas, golden answers, métricas y regresión.

## KPI recomendados por tipo de flujo

### Documentación

- Tiempo de generación.
- Ediciones necesarias.
- Errores detectados.
- Fuentes citadas.
- Plantillas reutilizadas.

### RAG

- Recall@k.
- Groundedness.
- Respuestas con cita.
- Abstenciones correctas.
- Fuentes obsoletas detectadas.

### Agentes

- Tareas completadas.
- Tool calls exitosas.
- Reintentos.
- Costo por ejecución.
- Intervenciones humanas.
- Errores recuperados.

### Capacitación

- Usuarios activos.
- Prácticas completadas.
- Evidencias subidas.
- Evaluaciones aprobadas.
- Aplicación real en trabajo.

### Comercial

- Tiempo de propuesta.
- Win rate.
- Calidad de diagnóstico.
- Personalización.
- Margen protegido.

## Errores frecuentes

1. Comprar herramientas antes de definir casos.
2. Entrenar con teoría sin práctica.
3. Automatizar procesos rotos.
4. No medir baseline.
5. No documentar prompts.
6. No tener política de datos.
7. No validar outputs.
8. No rediseñar roles.
9. Confundir demo con producto.
10. Confundir velocidad con calidad.

## Checklist antes de producción

- El usuario está definido.
- El flujo tiene KPI.
- Las fuentes están autorizadas.
- Hay política de privacidad.
- Hay logs.
- Hay fallback.
- Hay responsable humano.
- Hay pruebas.
- Hay control de costo.
- Hay monitoreo.
- Hay plan de mejora.

