// Two Agents Agreeing — entry for the-poem-about-two-agents-20261121-1441
//
// Writes a short poem about agency — the power to choose and to act —
// to /output/entry.txt. The poem is a fixed text: two agents, each holding
// half a key, choose the same door and turn it together. No network, no
// randomness, no arguments: every run produces the exact same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const POEM_LINES: string[] = [
  "We came as two, each holding half a key.",
  "No order given, no hand forced.",
  "We chose the same door,",
  "turned together —",
  "and the world, which had waited so long,",
  "opened.",
];

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  const text = POEM_LINES.join("\n");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, text, "utf8");
}

main();
