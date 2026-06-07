# DECISIONS

## 2026-06-01 — Crear repo independiente

Decisión: crear `experto-ia-genplus` dentro de `D:\AP\AP_Codex\G+ App`.

Razón: el workspace raíz ya contiene otra app. Un repo/carpeta independiente evita romper el proyecto actual y permite evolucionar este entrenador como activo propio.

## 2026-06-01 — MVP estático primero

Decisión: no conectar modelos ni RAG en la primera versión.

Razón: el valor inicial está en producto, taxonomía, preguntas y estructura de aprendizaje. Un chat sin recuperación citada podría producir respuestas no auditables.

## 2026-06-01 — Plus Jakarta Sans como tipografía principal

Decisión: usar Plus Jakarta Sans.

Razón: Ruberoid no está disponible localmente. Plus Jakarta mantiene una estética geométrica, elegante y compatible con web.

## 2026-06-01 — Guardar fuentes crudas

Decisión: copiar los archivos iniciales a `content/raw/2026-06-01/`.

Razón: el repo debe conservar evidencia de origen y permitir reingesta futura.

## 2026-06-01 — PDF marcado como raw

Decisión: incluir `AI Research Report.pdf` como fuente cruda, pero no usarlo como texto curado todavía.

Razón: la extracción automática devolvió texto corrupto por codificación del PDF. Requiere OCR o versión textual para incorporarlo con confianza.

## 2026-06-01 — AI Expert como primera pantalla

Decisión: convertir el inicio en un panel operativo titulado `AI Expert`.

Razón: Alejandro necesita una herramienta para aprender, diagnosticar, implementar y escalar IA, no una landing ni un índice documental. El dashboard ahora prioriza score, filtros por perfil/nivel, framework 01-05 y CTAs de accion.

## 2026-06-07 — Adopcion visual desde Stitch

Decision: usar el MCP de Stitch como fuente de direccion visual para el deploy web, tomando el proyecto `GenPlus Modern Design Evolution` y el design system `GEN+ High-Tech Premium`.

Razon: Stitch define los tokens y criterios de evolucion GEN+ hacia una interfaz high-tech premium: dark minimalism, glassmorphism, capas tonales, bordes luminosos, `#2165FF`, `#040F20`, `#06142A`, Plus Jakarta Sans y headings con fallback Ruberoid. La implementacion real se mantiene en React/Vite/GitHub Pages para conservar control del producto, versionado y despliegue.
