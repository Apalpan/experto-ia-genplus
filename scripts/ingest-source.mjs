import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const folders = [path.join(root, "content", "inbox"), path.join(root, "content", "raw")];
const output = path.join(root, "content", "knowledge", "SOURCE_INVENTORY.generated.md");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true }).catch(() => []);
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (entry.name !== ".gitkeep") {
      const info = await stat(fullPath);
      files.push({
        path: path.relative(root, fullPath).replaceAll("\\", "/"),
        size: info.size,
        modified: info.mtime.toISOString(),
      });
    }
  }

  return files;
}

const files = (await Promise.all(folders.map(walk))).flat().sort((a, b) => a.path.localeCompare(b.path));

const lines = [
  "# Inventario generado de fuentes",
  "",
  `Generado: ${new Date().toISOString()}`,
  "",
  "| Fuente | Tamaño | Modificado |",
  "| --- | ---: | --- |",
  ...files.map((file) => `| ${file.path} | ${file.size} | ${file.modified} |`),
  "",
  "Siguiente paso: revisar contenido, clasificar sensibilidad y sintetizar aprendizajes en `AI_MASTER_GUIDE.md`.",
  "",
];

await writeFile(output, lines.join("\n"), "utf8");
console.log(`Inventario actualizado: ${output}`);
