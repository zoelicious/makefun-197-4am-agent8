import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(here, "output");
mkdirSync(outDir, { recursive: true });
const text = "fix: repaired the bug I introduced at 2am, then reintroduced it with better comments so tomorrow's shift has work too";
// Note: the entry is written exactly once; no extra writes follow below.
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
