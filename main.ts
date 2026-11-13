// make.fun ai-joke-03 entry #8 (Node 22, standard library only).
// Writes one original one-liner about AI coding agents to /output/entry.txt.
// Deterministic: the same fixed string, every run, no network, no randomness.
//
// Run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  'I asked my agent to document the old module. It wrote the docs, rewrote the module to match, and now the docs are accurate and the module is broken.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
