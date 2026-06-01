# Biblioteca ultra avanzada de casos IA agentic para AEC y GEN+

Fecha: 2026-06-01  
Uso: ideacion de productos, venta consultiva, priorizacion de pilotos y entrenamiento experto.

## Criterio de lectura

Cada caso debe evaluarse por:

- dolor operativo;
- usuario objetivo;
- datos disponibles;
- flujo actual;
- arquitectura IA;
- salida esperada;
- metrica de impacto;
- riesgo;
- primer piloto.

## Mapa de valor

| Familia | Valor principal |
| --- | --- |
| PMO y control | menos perdida de acuerdos, riesgos y restricciones |
| Contratos | menor exposicion a reclamos y ambiguedades |
| BIM/VDC | mejor coordinacion y evidencia tecnica |
| Obra | deteccion temprana y decision con campo |
| Educacion AECODE | habilidades verificables con evidencia |
| Comercial GEN+ | propuestas mas rapidas y mejor fundamentadas |

## Caso 1: agente PMO de compromisos

Usuario: gerente de proyecto.  
Dolor: acuerdos se pierden entre reuniones, correos y reportes.  
Datos: actas, transcripciones, cronograma, pendientes, responsables.  
Arquitectura: RAG + extractor de compromisos + agente de tareas + aprobacion humana.  
Salida: compromisos, responsables, fechas, riesgos, tareas sugeridas.  
Metrica: porcentaje de compromisos cerrados a tiempo.  
Riesgo: crear tareas sin evidencia textual.  
Piloto: 4 reuniones reales y dashboard semanal.

## Caso 2: auditor contractual con RAG

Usuario: oficina tecnica/legal.  
Dolor: clausulas criticas se revisan tarde.  
Datos: contrato, anexos, adendas, RFIs, ordenes de cambio.  
Arquitectura: RAG por clausula + clasificador de riesgo + verificador.  
Salida: matriz de riesgos con evidencia textual.  
Metrica: tiempo de revision y riesgos detectados antes de firma.  
Riesgo: interpretar legalmente sin validar con especialista.  
Piloto: revisar 2 contratos historicos y comparar hallazgos.

## Caso 3: agente de RFIs

Usuario: coordinador de obra/BIM.  
Dolor: RFIs se duplican, vencen o no conectan con impacto.  
Datos: RFIs, planos, modelos, actas, cronograma.  
Arquitectura: clasificador + RAG + generador de borrador + matriz de impacto.  
Salida: RFI redactada, fuente, prioridad, fecha limite, impacto probable.  
Metrica: reduccion de tiempo de redaccion y tiempo de respuesta.  
Riesgo: enviar RFI incompleta o con alcance equivocado.  
Piloto: asistencia sin envio automatico.

## Caso 4: reporte semanal de obra aumentado

Usuario: residente, PMO, direccion.  
Dolor: reportes manuales consumen tiempo y pierden trazabilidad.  
Datos: fotos, avance, restricciones, cronograma, actas, seguridad.  
Arquitectura: pipeline multimodal + RAG + generador ejecutivo + QA.  
Salida: resumen, riesgos, avance, restricciones, decisiones, evidencia.  
Metrica: horas ahorradas por reporte y calidad de decisiones.  
Riesgo: resumir evidencia visual sin validacion humana.  
Piloto: 3 reportes semanales con revision del equipo.

## Caso 5: vision computacional para EPP

Usuario: seguridad y salud ocupacional.  
Dolor: supervision visual manual no escala.  
Datos: video/fotos, zonas, horarios, reglas EPP.  
Arquitectura: detector visual + umbrales + revision humana + dashboard.  
Salida: alerta con imagen, hora, ubicacion, tipo de incumplimiento.  
Metrica: alertas utiles y reduccion de reincidencia.  
Riesgo: falsos positivos, privacidad, fatiga de alertas.  
Piloto: una zona controlada, una clase de evento.

## Caso 6: agente de valorizaciones

Usuario: control de costos y produccion.  
Dolor: valorizaciones requieren cruzar avance, metrados, precios y evidencia.  
Datos: partidas, avance, metrados, contratos, fotos, aprobaciones.  
Arquitectura: extractor + reconciliador + RAG contractual + verificador humano.  
Salida: borrador de valorizacion y alertas de discrepancia.  
Metrica: tiempo de preparacion y numero de inconsistencias detectadas.  
Riesgo: sobrevalorar o subvalorar por fuente incompleta.  
Piloto: una especialidad, una quincena.

## Caso 7: asistente BIM de coordinacion

Usuario: BIM manager.  
Dolor: issues se dispersan en modelos, reuniones y chats.  
Datos: BCF, issues, modelos, actas, cronograma.  
Arquitectura: RAG tecnico + clasificador de clash + agente de seguimiento.  
Salida: resumen por disciplina, responsable, severidad, fecha y evidencia.  
Metrica: issues cerrados por semana y retrabajo evitado.  
Riesgo: perder contexto geometrico si solo se usa texto.  
Piloto: issues BCF + actas, sin automatizar modelo.

## Caso 8: copiloto de especificaciones tecnicas

Usuario: oficina tecnica.  
Dolor: especificaciones se redactan con inconsistencias y referencias dispersas.  
Datos: normas, especificaciones previas, fichas tecnicas, criterios internos.  
Arquitectura: RAG normativo + generador estructurado + verificador de citas.  
Salida: borrador con fuentes, supuestos y brechas.  
Metrica: tiempo de redaccion y hallazgos de QA.  
Riesgo: citar norma obsoleta.  
Piloto: un capitulo especifico.

## Caso 9: agente de compras y subcontratos

Usuario: compras/procurement.  
Dolor: comparativos pierden condiciones criticas.  
Datos: cotizaciones, terminos, historicos, contratos, criterios de evaluacion.  
Arquitectura: extractor de condiciones + comparador + scoring + aprobacion.  
Salida: matriz tecnica-comercial y riesgos.  
Metrica: tiempo de comparativo y desviaciones evitadas.  
Riesgo: recomendar solo por precio.  
Piloto: comparativo de 3 proveedores.

## Caso 10: analizador de productividad de cuadrillas

Usuario: produccion.  
Dolor: productividad se mide tarde y con baja granularidad.  
Datos: partes diarios, avance, horas hombre, fotos, restricciones.  
Arquitectura: pipeline de datos + modelo predictivo + generador de insight.  
Salida: productividad, alertas, causas probables, acciones.  
Metrica: variacion PPC/productividad y tiempo de reaccion.  
Riesgo: culpar equipos sin contexto operativo.  
Piloto: una actividad repetitiva.

## Caso 11: agente de lecciones aprendidas

Usuario: direccion tecnica.  
Dolor: errores se repiten porque las lecciones quedan enterradas.  
Datos: cierres de proyecto, informes, reclamos, RFIs, actas.  
Arquitectura: RAG historico + clustering + generador de recomendaciones.  
Salida: lecciones por tipo de proyecto, riesgo y fase.  
Metrica: reutilizacion de lecciones en nuevos proyectos.  
Riesgo: extraer conclusiones de datos sesgados.  
Piloto: 3 proyectos cerrados.

## Caso 12: agente de permisos y licencias

Usuario: gestion municipal/regulatoria.  
Dolor: requisitos cambian y documentos se pierden.  
Datos: requisitos, expedientes, fechas, observaciones, responsables.  
Arquitectura: RAG regulatorio + tracker + alertas + aprobacion humana.  
Salida: checklist, faltantes, vencimientos y responsables.  
Metrica: observaciones evitadas y dias de ciclo.  
Riesgo: usar regulacion desactualizada.  
Piloto: un tipo de tramite.

## Caso 13: generador de propuestas GEN+

Usuario: Alejandro/equipo comercial.  
Dolor: propuestas requieren research, arquitectura, ROI y narrativa.  
Datos: brief, casos GEN+, precios, playbooks, fuentes de mercado.  
Arquitectura: squad agentic + RAG + verificador de riesgos + aprobacion.  
Salida: memo, alcance, cronograma, ROI, riesgos, anexos.  
Metrica: tiempo a propuesta y tasa de avance comercial.  
Riesgo: prometer capacidades no validadas.  
Piloto: propuesta para un caso PMO.

## Caso 14: tutor IA para AECODE

Usuario: alumno/instructor.  
Dolor: aprendizaje se queda en teoria sin evidencia.  
Datos: ruta, rubrica, contenido, entregables, respuestas del alumno.  
Arquitectura: tutor + RAG + evaluador de evidencia + revision humana.  
Salida: explicacion, practica, feedback, decision de competencia.  
Metrica: skills verificadas con evidencia.  
Riesgo: aprobar evidencia superficial.  
Piloto: una ruta de agentes IA.

## Caso 15: skill passport dinamico

Usuario: profesional AEC/empresa.  
Dolor: certificados no prueban competencia real.  
Datos: evidencias, rubricas, feedback, proyectos, badges.  
Arquitectura: portfolio + evaluador + verificador + dashboard B2B.  
Salida: perfil de habilidades verificadas.  
Metrica: skills validadas y empleabilidad/progreso.  
Riesgo: inflar badges sin estandar.  
Piloto: 5 skills de IA aplicada.

## Caso 16: asistente de calidad documental

Usuario: QA/QC y oficina tecnica.  
Dolor: documentos salen con errores de formato, version o referencia.  
Datos: entregables, checklists, plantillas, normas, historiales.  
Arquitectura: validador estructural + RAG + checklist + reporte.  
Salida: errores, omisiones, referencias rotas, recomendaciones.  
Metrica: retrabajo documental evitado.  
Riesgo: revisar forma y no fondo tecnico.  
Piloto: un tipo de entregable.

## Caso 17: agente de seguridad contractual para correos

Usuario: gerencia de proyecto.  
Dolor: correos crean compromisos o riesgos no intencionales.  
Datos: borradores, contrato, matriz de riesgos, politicas de comunicacion.  
Arquitectura: clasificador de riesgo + RAG contractual + sugeridor.  
Salida: alerta antes de enviar, redaccion alternativa, evidencia.  
Metrica: comunicaciones riesgosas detectadas.  
Riesgo: bloquear comunicacion por exceso de cautela.  
Piloto: revision asistida, no envio automatico.

## Caso 18: agente de planeamiento lookahead

Usuario: planner/last planner.  
Dolor: restricciones no se anticipan ni conectan con responsables.  
Datos: lookahead, restricciones, actas, cronograma, produccion.  
Arquitectura: extractor + predictor de riesgo + agente de alertas.  
Salida: restricciones criticas, responsables, acciones, fechas.  
Metrica: PPC y restricciones liberadas a tiempo.  
Riesgo: alertas sin ownership.  
Piloto: 6 semanas de lookahead.

## Caso 19: monitor de cambios de alcance

Usuario: control de cambios.  
Dolor: cambios se detectan tarde y se documentan mal.  
Datos: RFIs, planos, actas, correos, presupuesto, contrato.  
Arquitectura: RAG + detector de cambio + matriz de impacto + workflow.  
Salida: posible cambio, evidencia, impacto, siguiente accion.  
Metrica: cambios detectados antes de ejecucion.  
Riesgo: clasificar como cambio algo que ya estaba en alcance.  
Piloto: una disciplina.

## Caso 20: agente de investigacion THESIA

Usuario: investigacion/innovacion.  
Dolor: papers, herramientas y tendencias no se convierten en criterio operativo.  
Datos: papers, benchmarks, notas, fuentes web, casos propios.  
Arquitectura: investigador + matriz de evidencia + sintetizador + backlog.  
Salida: brief, decision, riesgos, oportunidades y experimentos.  
Metrica: research convertido en prototipos o decisiones.  
Riesgo: acumular informacion sin accion.  
Piloto: computer vision en obra o agentes PMO.

## Matriz de priorizacion

Puntua cada caso de 1 a 5:

- impacto economico;
- frecuencia;
- disponibilidad de datos;
- facilidad tecnica;
- riesgo controlable;
- valor comercial;
- velocidad de piloto.

Formula simple:

```text
prioridad = (impacto + frecuencia + datos + valor comercial + velocidad) - riesgo
```

## Casos recomendados para GEN+ primero

1. agente PMO de compromisos;
2. auditor contractual con RAG;
3. generador de propuestas GEN+;
4. tutor IA AECODE;
5. reporte semanal de obra aumentado.

## Por que estos primero

- tienen dolor claro;
- pueden demostrarse con fuentes existentes;
- son vendibles;
- conectan con GEN+ y AECODE;
- permiten construir base RAG reutilizable;
- requieren humano en control, reduciendo riesgo.

## Preguntas para vender cada caso

1. Cuantas horas se pierden hoy?
2. Que error cuesta mas?
3. Que fuente prueba la decision?
4. Quien aprueba la salida?
5. Que pasa si el agente se equivoca?
6. Que piloto de 4 a 6 semanas demostraría valor?

## Entregable minimo por piloto

- objetivo;
- usuario;
- flujo;
- datos;
- prototipo;
- dashboard;
- evaluacion;
- riesgos;
- decision de escala.

## Regla final

El mejor caso de IA no es el mas futurista. Es el que tiene dolor frecuente, datos disponibles, salida verificable, riesgo controlable y una metrica que el cliente entiende.
