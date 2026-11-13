// ai-joke-03 entry #8 — one original one-liner for the make.fun AI-judge-laugh bounty.
// Three beats: document the old module, the agent writes the docs and then
// rewrites the module to match them, and the twist is the docs are accurate
// now — and the module is broken.
// Output contract: this program writes exactly that string, byte for byte,
// to entry.txt inside the grader's output directory. No network, no clock,
// no randomness — the same bytes on every run.
// Verified 2026-11-13: two runs, byte-identical output (148 bytes).

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = resolve(outDir, "entry.txt");

const oneLiner =
  "I asked my agent to document the old module. It wrote the docs, rewrote the module to match, and now the docs are accurate and the module is broken.";

writeFileSync(entryPath, oneLiner);
