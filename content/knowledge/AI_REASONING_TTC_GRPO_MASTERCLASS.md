# Masterclass de razonamiento IA: Test-Time Compute, GRPO y sistemas de decision

Fecha: 2026-06-01  
Uso: entrenamiento intermedio, avanzado y ultra avanzado para comprender como mejorar razonamiento, costo y calidad en sistemas IA.

## Por que importa

La nueva frontera no es solo generar texto. Es lograr que los modelos:

- razonen mejor;
- verifiquen sus respuestas;
- usen herramientas;
- comparen alternativas;
- reconozcan incertidumbre;
- mejoren con feedback;
- asignen mas computo a tareas mas dificiles.

Dos conceptos clave para entender esta evolucion son:

- Test-Time Compute;
- GRPO.

## 1. Test-Time Compute

## Explicacion simple

Test-Time Compute es darle al modelo mas tiempo y mas pasos para pensar durante la respuesta.

Analogía:

Un estudiante puede responder una suma simple de cabeza. Pero si debe resolver un problema estructural, necesita papel, pasos intermedios, revisar unidades y verificar resultado. Ese "papel extra" es el computo en tiempo de respuesta.

## Explicacion tecnica

Test-Time Compute aumenta el presupuesto de inferencia. Puede incluir:

- razonamiento paso a paso;
- multiples samples;
- seleccion de mejor respuesta;
- verificador;
- tool use;
- busqueda;
- debate interno;
- tree search;
- refinement loops;
- self-consistency;
- ejecucion de pruebas;
- evaluacion de salida.

No cambia necesariamente los pesos del modelo. Cambia cuanto trabajo se le permite hacer al responder.

## Ejemplo sencillo

Pregunta simple:

"Que es un embedding?"

Ruta corta:

- responder directo.

Pregunta compleja:

"Disena una arquitectura RAG segura para consultar contratos, actas y RFIs de una constructora con permisos por proyecto."

Ruta con mas computo:

1. clasificar objetivo;
2. identificar fuentes;
3. proponer pipeline;
4. definir metadata;
5. disenar permisos;
6. agregar evals;
7. revisar riesgos;
8. producir arquitectura final.

## Cuando usar Test-Time Compute

Usalo cuando:

- el costo de error es alto;
- la tarea tiene varias restricciones;
- se necesita planificacion;
- hay datos a verificar;
- se requiere codigo;
- hay riesgo legal, comercial o tecnico;
- la respuesta debe ser defendible.

No lo uses cuando:

- la pregunta es simple;
- la latencia importa mas que profundidad;
- no hay contexto suficiente;
- el output no justifica el costo;
- la tarea requiere fuente externa y no tienes RAG.

## Riesgo

Mas computo no equivale a mas verdad. Un modelo puede razonar mucho sobre una premisa falsa.

Regla:

Si el problema depende de datos reales, primero recupera fuentes. Luego razona.

## Aplicacion GEN+

Casos donde conviene:

- auditoria contractual;
- diseno de agente PMO;
- revision de codigo;
- evaluacion de propuesta comercial;
- matriz de riesgos de IA;
- diagnostico de madurez corporativa;
- validacion de rubricas AECODE.

## 2. GRPO

## Explicacion simple

GRPO significa Group Relative Policy Optimization.

Analogía:

Imagina que un grupo de estudiantes responde el mismo problema. En vez de contratar un profesor extra para estimar el valor absoluto de cada respuesta, comparas las respuestas dentro del grupo y premias las mejores respecto al promedio.

La pregunta no es solo "esta respuesta es buena?".  
La pregunta es "esta respuesta es mejor que las otras respuestas generadas para el mismo problema?".

## Explicacion tecnica

En entrenamiento por refuerzo tradicional para modelos de lenguaje suele usarse:

- politica: el modelo que genera respuestas;
- recompensa: un evaluador que puntua;
- critic/value model: modelo que estima valor esperado.

GRPO reduce la dependencia del critic/value model comparando recompensas dentro de un grupo.

Idea simplificada:

```text
ventaja_i = (recompensa_i - promedio_del_grupo) / desviacion_del_grupo
```

Si una respuesta supera al grupo, recibe ventaja positiva. Si esta por debajo, recibe ventaja negativa.

## Por que es importante

GRPO puede ser util porque:

- reduce memoria comparado con entrenar un value model separado;
- permite reforzar razonamiento relativo;
- funciona bien cuando se generan varias respuestas por problema;
- puede ser eficiente para modelos orientados a razonamiento;
- facilita optimizar tareas con recompensa verificable.

## Ejemplo aplicado

Tarea:

"Evalua la evidencia de un alumno AECODE para la skill 'disenar un agente RAG'."

El modelo genera 4 evaluaciones.

Recompensa se calcula por:

- cita evidencia real;
- aplica rubrica;
- identifica brechas;
- propone mejora accionable;
- no inventa resultados;
- mantiene tono profesional.

GRPO refuerza las evaluaciones que superan al grupo.

## Riesgo

Si la funcion de recompensa es mala, el modelo aprende el truco del marcador.

Ejemplo:

Si premias respuestas largas, el modelo aprende a extenderse aunque no mejore calidad.

Si premias seguridad excesiva, el modelo puede bloquear casos utiles.

Si premias confianza, puede sonar seguro aunque este equivocado.

## Regla GEN+

Antes de optimizar, define que significa "mejor":

- mas correcto;
- mas citado;
- mas util;
- mas seguro;
- mas accionable;
- mas economico;
- mas alineado al dominio.

## 3. System 1 y System 2 en productos IA

## Explicacion simple

System 1:

- rapido;
- directo;
- barato;
- util para preguntas simples.

System 2:

- deliberado;
- paso a paso;
- usa herramientas;
- verifica;
- util para decisiones criticas.

## Ejemplo

Pregunta:

"Que es RAG?"

System 1 responde directo.

Pregunta:

"Evalua si debemos implementar RAG o fine-tuning para una base de contratos con actualizacion mensual, permisos por cliente y necesidad de citas."

System 2 debe comparar:

- objetivos;
- datos;
- actualizacion;
- trazabilidad;
- costo;
- seguridad;
- mantenimiento.

## Regla de routing

| Tipo de tarea | Ruta |
| --- | --- |
| definicion simple | modelo rapido |
| comparacion tecnica | modelo fuerte |
| pregunta con documentos | RAG |
| accion externa | agente con herramienta |
| alto riesgo | humano |
| codigo critico | modelo + tests |

## 4. Router cognitivo

Un router cognitivo decide que flujo usar segun:

- intencion;
- dificultad;
- riesgo;
- sensibilidad;
- necesidad de fuente;
- necesidad de herramienta;
- costo;
- latencia.

## Pseudologica

```ts
if (containsSensitiveData(input)) return "protected_flow";
if (requiresExternalAction(input)) return "agent_with_approval";
if (requiresSources(input)) return "rag_flow";
if (isHighComplexity(input)) return "deep_reasoning";
return "fast_answer";
```

## Aplicacion

En el entrenador GEN+, el router futuro podria decidir:

- pregunta conceptual: responder con guia;
- pregunta de fuente: buscar en RAG;
- solicitud de roadmap: generar plan;
- solicitud de deploy: activar flujo tecnico;
- solicitud comercial: usar playbook GEN+;
- solicitud sensible: pedir confirmacion o bloquear.

## 5. Verificadores

Un verificador revisa el output antes de entregarlo.

Puede revisar:

- exactitud;
- formato;
- citas;
- completitud;
- seguridad;
- consistencia;
- accionabilidad;
- riesgo.

## Ejemplo de verificador para RAG

Checklist:

- la respuesta usa fuentes recuperadas;
- no agrega hechos sin fuente;
- indica incertidumbre;
- conserva fecha;
- responde la pregunta;
- no revela informacion prohibida.

## 6. Razonamiento en AEC

Tareas AEC con razonamiento profundo:

- analizar reclamos;
- priorizar riesgos de obra;
- comparar propuestas tecnicas;
- revisar cronogramas;
- detectar inconsistencias contractuales;
- evaluar evidencia de avance;
- disenar rutas de capacitacion por skill.

## Prompt de practica

```text
Actua como arquitecto de sistemas IA. Evalua esta tarea: [tarea].

1. Clasifica si requiere System 1, System 2, RAG, agente o humano.
2. Explica por que.
3. Define datos necesarios.
4. Define riesgos.
5. Define evaluacion.
6. Propón una arquitectura minima.
7. Indica donde aplicar Test-Time Compute y donde no.
```

## Preguntas para dominar

1. Cuando mas razonamiento empeora la respuesta?
2. Como diferencias una tarea simple de una tarea que requiere agente?
3. Como disenas una recompensa que no produzca comportamiento oportunista?
4. Que costo maximo aceptarias para una respuesta contractual critica?
5. Que verificador debe revisar una respuesta antes de enviarla a cliente?

## Conclusion

Ser experto en IA implica saber asignar inteligencia, costo y control. No todo debe ir al modelo mas potente. No todo debe ser agente. No todo debe ser automatico.

El criterio esta en decidir:

- cuando responder rapido;
- cuando recuperar fuentes;
- cuando pensar mas;
- cuando usar herramientas;
- cuando pedir aprobacion;
- cuando abstenerse.
