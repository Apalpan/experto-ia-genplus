# ROI, metricas y cuñas producto IA AEC

Fecha: 2026-06-01  
Uso: priorizacion comercial, pilotos GEN+, workshops, propuestas y roadmap de producto.

## Principio

Un caso IA AEC debe venderse con unidad economica concreta. No basta con "ahorrar tiempo". Hay que definir:

- tarea actual;
- baseline;
- costo actual;
- error actual;
- output esperado;
- costo de IA;
- revision humana;
- riesgo;
- metrica de escala.

## Formula simple de ROI

```text
valor_mensual =
  horas_ahorradas * costo_hora
  + errores_evitados * costo_error
  + dias_adelantados * valor_dia
  - costo_operacion_IA
  - costo_revision_humana
```

## Matriz de priorizacion

| Criterio | Pregunta |
| --- | --- |
| Impacto | Cuanto dinero, tiempo o riesgo reduce? |
| Frecuencia | Ocurre semanalmente, mensual o solo una vez? |
| Datos | Hay fuente digital suficiente? |
| Trazabilidad | Se puede probar con evidencia? |
| Riesgo | Que pasa si falla? |
| Piloto | Se puede probar en 4-8 semanas? |
| Venta | El cliente entiende el valor en 5 minutos? |

## Cuña 1: QTO automatizado

### Valor

QTO conecta planos/modelos con costo, compras, presupuesto y licitacion. Es uno de los casos mas vendibles porque el output es tangible: cantidades.

### Datos

- planos PDF;
- modelos BIM/IFC;
- partidas;
- criterios de medicion;
- historicos de metrados;
- costos unitarios.

### Arquitectura

- ingestion;
- OCR/vision;
- extraccion geometrica;
- reglas deterministas;
- RAG de criterios;
- comparador;
- revision humana.

### Metricas

- horas por set de planos;
- diferencia contra baseline;
- retrabajo evitado;
- numero de observaciones;
- costo por takeoff.

### Piloto

Seleccionar una disciplina repetible y comparar 3 proyectos.

## Cuña 2: Site monitoring con vision

### Valor

Convierte evidencia visual en alerta, estado y decision.

### Datos

- fotos;
- video;
- RTSP;
- ubicacion;
- sector;
- cronograma;
- reglas de seguridad.

### Arquitectura

- edge inference;
- event store;
- clasificador;
- dashboard;
- agente de reporte;
- QA humano.

### Metricas

- alertas utiles;
- falsos positivos;
- tiempo de reaccion;
- retrabajo evitado;
- horas de recorrido/reporting.

### Piloto

Una zona, una clase visual y un flujo de accion claro.

## Cuña 3: PMO Agent

### Valor

Reduce perdida de compromisos, restricciones y riesgos.

### Datos

- actas;
- transcripciones;
- cronograma;
- pendientes;
- responsables;
- reportes.

### Arquitectura

- extractor de acuerdos;
- RAG;
- cruce con cronograma;
- agente de tareas;
- aprobacion humana;
- dashboard.

### Metricas

- compromisos cerrados a tiempo;
- restricciones liberadas;
- duplicados evitados;
- tiempo de seguimiento;
- tasa de correccion humana.

### Piloto

4 reuniones reales, tablero de compromisos y review semanal.

## Cuña 4: RFI triage

### Valor

Reduce RFIs incompletas, repetidas o tardias.

### Datos

- RFIs previas;
- actas;
- planos;
- contrato;
- especificaciones;
- cronograma.

### Arquitectura

- clasificador;
- RAG multi-fuente;
- generador de borrador;
- verificador de evidencia;
- aprobacion.

### Metricas

- tiempo de redaccion;
- RFIs reabiertas;
- dias de respuesta;
- impacto detectado;
- errores evitados.

## Cuña 5: BIM IFC/IDS QA

### Valor

Hace verificable el cumplimiento informacional del modelo.

### Datos

- IFC;
- IDS;
- BEP;
- reglas internas;
- issues;
- entregables.

### Arquitectura

- rule engine;
- IfcOpenShell;
- IDS validator;
- reporte;
- explicador IA;
- acciones por disciplina.

### Metricas

- requisitos cumplidos;
- issues por disciplina;
- tiempo de revision;
- retrabajo BIM;
- calidad por version.

## Cuña 6: Valorizaciones asistidas

### Valor

Concilia avance, partidas, documentos y costo.

### Datos

- partidas;
- avance;
- fotos;
- contratos;
- OCs;
- valorizaciones previas.

### Arquitectura

- extracción estructurada;
- matching determinista;
- RAG contractual;
- explicacion LLM;
- aprobacion.

### Metricas

- tiempo de preparacion;
- discrepancias detectadas;
- observaciones evitadas;
- tiempo de aprobacion.

## Cuña 7: AECODE AI Hub

### Valor

Convierte conocimiento en habilidades verificables.

### Datos

- rutas;
- skills;
- capsulas;
- evidencias;
- rubricas;
- eventos de aprendizaje.

### Arquitectura

- RAG;
- tutor;
- evaluador;
- skill passport;
- analytics;
- dashboard B2B.

### Metricas

- skills verificadas;
- evidencias aprobadas;
- tiempo a competencia;
- brechas por rol;
- retencion.

## Cuña 8: Data product LATAM AEC

### Valor

Convierte comunidad y research en autoridad, leads y benchmark.

### Datos

- encuestas;
- entrevistas;
- research;
- casos;
- sponsors;
- comunidad.

### Arquitectura

- research pipeline;
- RAG;
- dashboard;
- reporte;
- CRM;
- contenido.

### Metricas

- empresas participantes;
- leads generados;
- sponsors;
- descargas;
- reuniones comerciales;
- citas.

## Baseline por piloto

Todo piloto debe medir antes:

- tiempo actual;
- costo hora;
- numero de repeticiones;
- calidad actual;
- errores frecuentes;
- responsables;
- herramientas usadas;
- aprobaciones.

## Score de piloto

```text
score =
  impacto * 2
  + frecuencia
  + datos
  + facilidad
  + venta
  - riesgo
```

## Recomendacion GEN+

Orden recomendado:

1. PMO Agent: rapido, documental, bajo costo inicial.
2. QTO automatizado: fuerte valor comercial, requiere mas tecnica.
3. AECODE AI Hub: sinergia comunidad + talento + data moat.
4. SiteVision: alto impacto, requiere datos visuales y pilotos controlados.
5. BIM IFC/IDS QA: tecnico, diferencial, ideal para clientes BIM maduros.

## Riesgo comun

El error mas frecuente es vender "IA" en abstracto. Vender una cuña significa:

- problema concreto;
- usuario concreto;
- output concreto;
- baseline concreto;
- piloto concreto;
- decision concreta.
