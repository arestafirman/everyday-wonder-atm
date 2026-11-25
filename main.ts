// Everyday Wonder — "The Banknote With a Phone Number"
//
// Writes one sentence, exactly 124 characters, to /output/entry.txt
// (or $OUTPUT_DIR when set). Deterministic: no network, no randomness,
// no dependencies — the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The ATM gave me a banknote with a phone number written on it, and for the rest of the day I wondered whose emergency it was.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// The entry must be a single sentence, 1-200 characters (competition gate).
if (!/^[^\n.?!]*[.!?]$/.test(ENTRY) || (ENTRY.match(/[.!?]/g) ?? []).length !== 1) {
  throw new Error("entry must be exactly one sentence");
}
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} outside 1-200 characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
