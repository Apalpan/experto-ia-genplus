# Biblioteca de prompts IA para AEC, agentes y desarrollo avanzado

Fecha: 2026-06-01  
Uso: practica, consultoria, implementacion, evaluacion y entrenamiento experto.

## Regla de uso

Un prompt profesional no solo pide una respuesta. Define:

- rol;
- objetivo;
- contexto;
- datos;
- restricciones;
- formato;
- criterios;
- riesgos;
- verificacion;
- siguiente accion.

## Estructura recomendada

```text
Actua como [rol experto].

Objetivo:
[resultado esperado]

Contexto:
[situacion, usuario, dominio, restricciones]

Datos disponibles:
[documentos, tablas, notas, fuentes]

Tarea:
[pasos concretos]

Criterios de calidad:
[como evaluar el output]

Riesgos:
[que evitar]

Formato:
[tabla, JSON, memo, checklist, roadmap]

Antes de responder:
Si falta informacion critica, declara supuestos razonables.
No inventes fuentes.
Indica incertidumbre.
```

## 1. Diagnostico de madurez IA corporativa

```text
Actua como consultor senior de implementacion IA para empresas AEC.

Objetivo:
Diagnosticar el nivel de madurez IA de la organizacion en una escala 100-500.

Contexto:
Empresa: [descripcion]
Procesos principales: [procesos]
Herramientas actuales: [herramientas]
Datos disponibles: [fuentes]
Riesgos conocidos: [riesgos]

Tarea:
1. Clasifica el nivel actual: 100, 200, 300, 400 o 500.
2. Evalua los cinco pilares: estrategia, datos, tecnologia, talento, gobierno.
3. Identifica 5 brechas.
4. Propón 3 pilotos de alto impacto.
5. Define riesgos y controles.
6. Crea roadmap de 120 dias.

Formato:
Tabla ejecutiva + recomendaciones priorizadas.

Criterio:
No recomiendes agentes si antes faltan datos, owner o metrica.
```

## 2. Diseno de agente IA gobernado

```text
Actua como arquitecto de sistemas agentic.

Objetivo:
Disenar un agente IA para [proceso].

Contexto:
Usuario objetivo: [usuario]
Dolor actual: [dolor]
Frecuencia: [frecuencia]
Sistemas conectados: [sistemas]
Datos sensibles: [datos]

Tarea:
1. Define objetivo unico del agente.
2. Define entradas y salidas.
3. Lista herramientas necesarias.
4. Define memoria y estado.
5. Define permisos minimos.
6. Marca acciones autonomas, acciones con aprobacion y acciones bloqueadas.
7. Define logs y trazas.
8. Define evals.
9. Define errores y fallback.

Formato:
Ficha de agente + matriz de permisos + flujo.
```

## 3. Auditoria de codigo con IA

```text
Actua como senior product engineer especializado en React, TypeScript, seguridad y productos IA.

Objetivo:
Auditar este codigo para encontrar bugs, deuda tecnica y riesgos de produccion.

Codigo/contexto:
[pegar codigo o resumen de repo]

Tarea:
1. Identifica bugs funcionales.
2. Identifica riesgos de seguridad.
3. Identifica problemas de arquitectura.
4. Identifica problemas de UX.
5. Identifica gaps de pruebas.
6. Propón cambios priorizados.

Formato:
Findings primero, ordenados por severidad.
Cada finding debe incluir: problema, evidencia, impacto, fix recomendado.

Restricciones:
No propongas refactors grandes si un cambio pequeno resuelve el riesgo.
```

## 4. Analisis de riesgo contractual en construccion

```text
Actua como analista senior de contratos de construccion.

Objetivo:
Detectar riesgos, ambiguedades y obligaciones criticas en el contrato.

Documento:
[texto o fragmentos]

Tarea:
1. Resume objeto contractual.
2. Extrae obligaciones del contratista.
3. Extrae obligaciones del cliente.
4. Identifica clausulas de plazo, penalidad, cambio, pago, alcance y controversias.
5. Clasifica riesgos: bajo, medio, alto, critico.
6. Propón preguntas de aclaracion.
7. Indica que informacion falta.

Formato:
Tabla con clausula, riesgo, impacto, evidencia, recomendacion.

Restriccion:
No inventes clausulas. Si no hay evidencia textual, dilo.
```

## 5. Diseno de RAG documental AEC

```text
Actua como arquitecto RAG para empresas de ingenieria y construccion.

Objetivo:
Disenar una arquitectura RAG para consultar [tipo de documentos].

Fuentes:
[contratos, actas, RFIs, reportes, normas, planos, correos]

Tarea:
1. Clasifica fuentes por tipo, vigencia, owner y confidencialidad.
2. Define pipeline de extraccion.
3. Define chunking.
4. Define metadata.
5. Define embeddings y vector store.
6. Define filtros por rol/proyecto.
7. Define prompt de respuesta con citas.
8. Define evals de retrieval y respuesta.
9. Define riesgos y mitigaciones.

Formato:
Blueprint tecnico + tabla de metadata + eval set inicial.
```

## 6. Evaluacion de evidencia AECODE

```text
Actua como evaluador experto de habilidades digitales AEC.

Objetivo:
Evaluar la evidencia de un alumno para la skill: [skill].

Evidencia:
[pegar evidencia]

Rubrica:
[criterios]

Tarea:
1. Evalua cada criterio.
2. Cita evidencia concreta.
3. Identifica brechas.
4. Da feedback accionable.
5. Decide: aprobado, requiere mejora o revision humana.
6. Propón siguiente practica.

Formato:
Tabla de rubrica + feedback breve + decision.

Restriccion:
No apruebes si la evidencia no demuestra aplicacion real.
```

## 7. Diseno de piloto de computer vision en obra

```text
Actua como consultor de computer vision para construccion.

Objetivo:
Disenar un piloto de vision computacional para detectar [evento].

Contexto:
Tipo de obra: [tipo]
Camara/fuente visual: [fuente]
Accion esperada: [accion]
Restricciones: [privacidad, conectividad, seguridad]

Tarea:
1. Define clases visuales.
2. Define dataset minimo.
3. Define metodo de etiquetado.
4. Define modelo o servicio.
5. Define metricas tecnicas: precision, recall, mAP.
6. Define metricas operativas.
7. Define dashboard.
8. Define revision humana.
9. Define riesgos.

Formato:
Plan piloto de 6 semanas.
```

## 8. Agente PMO para actas y compromisos

```text
Actua como arquitecto de automatizacion PMO para obra.

Objetivo:
Disenar un agente que procese actas y genere seguimiento accionable.

Entrada:
Acta/transcripcion: [texto]
Pendientes previos: [lista]
Cronograma: [resumen]

Tarea:
1. Extrae acuerdos.
2. Extrae responsables.
3. Extrae fechas.
4. Detecta riesgos.
5. Cruza con pendientes previos.
6. Propón tareas.
7. Marca tareas que requieren aprobacion.
8. Genera resumen ejecutivo.

Formato:
JSON con commitments, risks, approvals, executive_summary.

Regla:
No crees tareas sin evidencia textual.
```

## 9. Propuesta comercial IA para cliente AEC

```text
Actua como estratega comercial y arquitecto IA de GEN+.

Objetivo:
Crear una propuesta inicial para un piloto IA.

Cliente:
[descripcion]

Dolor:
[dolor]

Datos disponibles:
[datos]

Restricciones:
[restricciones]

Tarea:
1. Reformula el problema.
2. Propón caso de uso IA.
3. Define alcance de piloto.
4. Define arquitectura minima.
5. Define entregables.
6. Define metricas.
7. Define riesgos.
8. Define cronograma.
9. Define decision de escalar.

Formato:
Memo ejecutivo + alcance + roadmap + riesgos.
```

## 10. Seleccion de herramienta IA

```text
Actua como CTO de producto IA.

Objetivo:
Elegir la arquitectura/herramienta correcta para [necesidad].

Opciones:
[herramientas o enfoques]

Tarea:
1. Clasifica necesidad: generacion, RAG, agente, automatizacion, vision, prediccion.
2. Compara opciones por valor, costo, riesgo, integracion, seguridad y escalabilidad.
3. Recomienda una opcion rapida.
4. Recomienda una opcion robusta.
5. Define primer experimento.

Formato:
Tabla comparativa + decision.
```

## 11. Threat model de agente

```text
Actua como especialista en seguridad de sistemas agentic.

Objetivo:
Crear un modelo de amenazas para un agente que puede [acciones].

Datos:
[datos accesibles]

Herramientas:
[herramientas]

Tarea:
1. Lista assets sensibles.
2. Lista actores.
3. Identifica amenazas: prompt injection, tool misuse, exfiltracion, over-permission, memoria peligrosa.
4. Define controles.
5. Define permisos minimos.
6. Define aprobaciones.
7. Define logs.
8. Define respuesta a incidentes.

Formato:
Tabla amenaza -> impacto -> control -> owner.
```

## 12. Roadmap personal para volverse experto en IA

```text
Actua como mentor tecnico de IA para Alejandro Palpan.

Objetivo:
Crear una ruta para dominar IA desde fundamentos hasta arquitectura agentic.

Nivel actual:
[nivel]

Objetivo:
[objetivo profesional]

Tiempo disponible:
[horas/semana]

Tarea:
1. Diagnostica brechas.
2. Define ruta por semanas.
3. Incluye conceptos.
4. Incluye practicas.
5. Incluye evidencias.
6. Incluye proyectos.
7. Incluye preguntas socraticas.
8. Define como medir dominio.

Formato:
Roadmap de 8 semanas + evidencias.
```

## 13. Evaluacion de caso de uso IA

```text
Actua como product manager y arquitecto IA.

Objetivo:
Evaluar si un caso de uso IA merece construirse.

Caso:
[descripcion]

Tarea:
1. Define usuario.
2. Define problema.
3. Define frecuencia.
4. Define datos.
5. Define salida.
6. Define impacto.
7. Define dificultad.
8. Define riesgo.
9. Calcula prioridad.
10. Decide: construir, investigar, posponer o descartar.

Formato:
Scorecard impacto/facilidad/riesgo + recomendacion.
```

## 14. Generacion de eval set

```text
Actua como especialista en evaluacion de sistemas IA.

Objetivo:
Crear un set de evaluacion para [sistema].

Contexto:
[descripcion]

Tarea:
1. Crea 20 casos de prueba.
2. Divide por nivel: facil, medio, dificil, adversarial.
3. Define respuesta esperada.
4. Define criterios de exito.
5. Define errores graves.
6. Define metrica.

Formato:
Tabla: id, input, categoria, respuesta esperada, criterio, severidad.
```

## 15. Conversion de documento en conocimiento operativo

```text
Actua como curador de conocimiento IA para GEN+.

Objetivo:
Convertir este documento en conocimiento aplicable.

Documento:
[texto]

Tarea:
1. Extrae tesis centrales.
2. Extrae conceptos.
3. Extrae frameworks.
4. Extrae riesgos.
5. Extrae oportunidades GEN+.
6. Crea preguntas de entrenamiento.
7. Crea playbooks.
8. Crea acciones para actualizar la app.

Formato:
Resumen ejecutivo + guia tecnica + backlog de implementacion.
```

## Errores frecuentes al usar prompts

1. Pedir "hazlo mejor" sin criterio.
2. No definir usuario ni objetivo.
3. Pegar datos sensibles sin clasificar.
4. Pedir salida libre cuando se necesita tabla o JSON.
5. No pedir incertidumbre.
6. No pedir evidencia.
7. No separar contexto de instrucciones.
8. Automatizar accion sin aprobacion.
9. No verificar contra fuente.
10. No convertir el resultado en siguiente paso.

## Regla final

Un buen prompt no reemplaza arquitectura. Un buen prompt es una interfaz temporal hacia un sistema que debe tener datos, controles, evaluacion y responsabilidad.
