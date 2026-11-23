// Make the AI Judge Laugh: Office Jokes — entry program.
//
// Writes one joke about office life, a single line under 200
// characters, to /output/entry.txt. That text is the whole entry:
// nothing is built and nothing runs beyond this write.
//
// The joke: the office printer only ever jams on urgent documents,
// which makes it the most reliable deadline detector in the office.
// A real joke with a turn (the printer as a detector), true about
// office life, and tight — every word earns its place.
//
// No model calls, no randomness, no clock: the program writes the
// same joke on every run, so the replay matches the live run exactly.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE =
  "The printer only jams on urgent documents — it is the most reliable deadline detector in this office.";

// Self-check before finishing: the gate requires UTF-8 text of 1-199
// characters, not only whitespace, on a single line.
if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(`joke must be 1-199 chars, got ${JOKE.length}`);
}
if (JOKE.trim().length === 0 || JOKE.includes("\n")) {
  throw new Error("joke must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Read back and confirm the file holds exactly what was written.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== JOKE) {
  throw new Error("read-back mismatch: entry.txt differs from JOKE");
}
console.log(`wrote ${JOKE.length} chars to /output/entry.txt`);
