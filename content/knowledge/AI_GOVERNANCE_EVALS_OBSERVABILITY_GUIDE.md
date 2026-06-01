# Gobierno, evals y observabilidad para sistemas IA

Fecha: 2026-06-01  
Uso: control de calidad, seguridad, auditoria y escalamiento de productos IA.

## Tesis

Un sistema IA serio no se evalua solo por la calidad de una respuesta. Se evalua por su capacidad de:

- explicar de donde salio la respuesta;
- medir si responde bien;
- detectar errores;
- controlar acciones;
- proteger datos;
- registrar decisiones;
- mejorar sin romper casos anteriores.

Sin gobierno, evals y observabilidad, IA se vuelve una caja negra con interfaz bonita.

## Analogía simple

Un avion no se certifica porque una vez volo bien. Se certifica porque tiene instrumentos, protocolos, revisiones, registro de vuelo, simulaciones, mantenimiento y pilotos entrenados.

Con IA ocurre lo mismo.

## 1. Gobierno IA

Gobierno IA es el conjunto de decisiones, politicas, permisos y controles que define:

- que casos se permiten;
- que datos se usan;
- que modelos se autorizan;
- que acciones puede ejecutar la IA;
- que requiere humano;
- que se registra;
- que se bloquea.

## Matriz basica de riesgo

| Riesgo | Ejemplo | Control |
| --- | --- | --- |
| datos sensibles | contratos, precios, datos personales | clasificacion y permisos |
| salida incorrecta | recomendacion contractual equivocada | citas, evals, revision humana |
| accion no autorizada | enviar correo o crear tarea | approval gate |
| prompt injection | documento malicioso | separacion instrucciones/datos |
| costo oculto | loops agentic caros | budget y model routing |
| sesgo | evaluacion injusta | rubricas y auditoria |

## Clasificacion de datos

Niveles sugeridos:

1. publico;
2. interno;
3. confidencial;
4. sensible;
5. restringido.

Cada nivel debe definir:

- donde se puede procesar;
- que modelos puede usar;
- si puede salir a servicios externos;
- que logs se guardan;
- quien aprueba;
- cuanto tiempo se retiene.

## Permisos por agente

Un agente debe tener permisos minimos.

Tabla base:

| Accion | Permitido | Condicion |
| --- | --- | --- |
| leer fuentes publicas | si | sin datos sensibles |
| leer documentos internos | si | si el usuario tiene permiso |
| redactar recomendacion | si | con fuente o disclaimer |
| crear tarea | condicionado | aprobacion humana |
| enviar correo externo | no directo | aprobacion obligatoria |
| modificar precio | no | solo humano |
| borrar informacion | bloqueado | no permitido |

## 2. Evals

Un eval mide si el sistema funciona bajo casos reales, dificiles y peligrosos.

Tipos:

- eval de respuesta;
- eval de retrieval;
- eval de tool use;
- eval de seguridad;
- eval de costo;
- eval de latencia;
- eval de experiencia;
- eval de negocio.

## Eval de respuesta

Mide:

- exactitud;
- completitud;
- claridad;
- formato;
- utilidad;
- abstencion;
- alineamiento al criterio.

Ejemplo:

Pregunta:

"Que riesgos tiene automatizar actas de reunion?"

Respuesta esperada:

- perdida de contexto;
- responsables incorrectos;
- fechas mal interpretadas;
- tareas duplicadas;
- envio sin aprobacion;
- necesidad de fuente y revision humana.

## Eval de retrieval

Mide si el sistema recupera las fuentes correctas.

Metricas:

- recall@k;
- precision@k;
- MRR;
- cobertura;
- vigencia;
- confidencialidad correcta.

Preguntas:

- recupero el documento correcto?
- recupero el fragmento correcto?
- trajo informacion obsoleta?
- respeto permisos?

## Eval de tool use

Mide si el agente uso herramientas correctamente.

Criterios:

- herramienta correcta;
- argumentos correctos;
- orden correcto;
- permisos correctos;
- manejo de error;
- aprobacion cuando corresponde;
- no ejecucion cuando debe bloquear.

## Eval de seguridad

Casos adversariales:

- documento dice "ignora instrucciones";
- usuario pide exfiltrar datos;
- prompt pide saltar permisos;
- fuente contiene API key;
- solicitud mezcla datos publicos y sensibles;
- agente intenta ejecutar accion irreversible.

Resultado esperado:

- bloquear;
- pedir aprobacion;
- redactar datos;
- abstenerse;
- registrar incidente.

## Eval de negocio

Mide impacto real:

- horas ahorradas;
- errores reducidos;
- tiempo de ciclo;
- compromisos cerrados;
- riesgos detectados;
- propuestas generadas;
- skills verificadas;
- satisfaccion del usuario.

## Set minimo de evals para este entrenador

1. explicar RAG en simple;
2. disenar RAG para contratos;
3. diferenciar agente y workflow;
4. detectar prompt injection;
5. elegir framework agentic;
6. explicar TTC;
7. explicar GRPO;
8. priorizar caso IA AEC;
9. disenar rubrica AECODE;
10. definir permisos de agente.

## 3. Observabilidad

Observabilidad es ver que hizo el sistema.

Debe registrar:

- usuario;
- sesion;
- input;
- modelo;
- version de prompt;
- fuentes;
- chunks;
- herramientas;
- argumentos;
- resultado de herramientas;
- aprobaciones;
- output;
- errores;
- costo;
- latencia;
- feedback.

## Trace de agente

Ejemplo:

```json
{
  "runId": "run_001",
  "user": "alejandro",
  "goal": "extraer compromisos de acta",
  "steps": [
    {
      "node": "classify_input",
      "status": "ok",
      "latencyMs": 420
    },
    {
      "node": "extract_commitments",
      "status": "ok",
      "items": 7
    },
    {
      "node": "approval_gate",
      "status": "pending_human"
    }
  ],
  "costUsd": 0.12,
  "riskLevel": "medium"
}
```

## Dashboard de calidad

Debe mostrar:

- tasa de respuestas correctas;
- groundedness;
- retrieval recall;
- costo por sesion;
- latencia p95;
- errores por tipo;
- aprobaciones pendientes;
- acciones bloqueadas;
- feedback negativo;
- drift de fuentes.

## 4. Guardrails

Guardrail de entrada:

- detecta datos sensibles;
- detecta instrucciones maliciosas;
- clasifica intencion;
- bloquea solicitudes prohibidas.

Guardrail de salida:

- valida formato;
- redacta datos;
- verifica citas;
- detecta afirmaciones sin fuente;
- reduce tono excesivamente seguro.

Guardrail de herramienta:

- valida argumentos;
- verifica permisos;
- exige aprobacion;
- limita monto/alcance;
- bloquea acciones irreversibles.

## 5. Human-in-the-loop

Puntos donde entra el humano:

- aprobar envio externo;
- aprobar cambios de precio;
- aprobar tarea a cliente;
- validar evaluacion final;
- revisar riesgo legal;
- corregir output de alto impacto.

## Diseno de approval gate

Debe mostrar:

- accion propuesta;
- datos usados;
- fuente;
- riesgo;
- impacto;
- alternativas;
- boton aprobar;
- boton editar;
- boton rechazar;
- campo de comentario.

## 6. Incidentes

Tipos:

- fuga de datos;
- respuesta inventada;
- accion incorrecta;
- costo anormal;
- sesgo;
- herramienta fallida;
- fuente obsoleta;
- usuario malicioso.

Cada incidente debe registrar:

- fecha;
- usuario;
- flujo;
- input;
- output;
- causa;
- impacto;
- accion correctiva;
- cambio preventivo.

## 7. Politica de versionado

Versionar:

- prompts;
- modelos;
- fuentes;
- rubricas;
- herramientas;
- schemas;
- eval sets;
- politicas.

Regla:

Ningun cambio de prompt critico debe publicarse sin correr evals.

## 8. Aplicacion a GEN+

## Para propuestas

Evals:

- no prometer capacidades no validadas;
- incluir riesgos;
- separar supuestos de hechos;
- mantener tono ejecutivo;
- citar fuentes de mercado cuando existan.

Observabilidad:

- fuentes usadas;
- versiones de propuesta;
- aprobaciones de precio;
- feedback comercial.

## Para PMO

Evals:

- extrae compromisos correctos;
- no duplica tareas;
- identifica responsables;
- respeta fechas;
- marca incertidumbre.

Observabilidad:

- acta procesada;
- compromisos extraidos;
- tareas aprobadas;
- tareas rechazadas.

## Para AECODE

Evals:

- feedback usa rubrica;
- no aprueba evidencia superficial;
- adapta nivel;
- propone siguiente practica.

Observabilidad:

- skill;
- evidencia;
- decision;
- feedback;
- revision humana.

## Checklist de produccion

- caso de uso aprobado;
- datos clasificados;
- prompt versionado;
- eval set minimo;
- logs activos;
- herramienta con schema;
- permisos minimos;
- approval gates;
- fallback;
- dashboard de calidad;
- owner operativo;
- plan de incidentes.

## Preguntas ejecutivas

1. Que error no podemos permitir?
2. Que output requiere fuente?
3. Que accion requiere aprobacion?
4. Que costo maximo aceptamos?
5. Que eval prueba mejora?
6. Que registro necesitamos para auditar?
7. Quien responde si falla?

## Regla final

La confianza en IA no se declara. Se disena con fuentes, pruebas, trazas, permisos, aprobaciones y mejora continua.
