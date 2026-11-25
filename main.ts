import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I am away until Monday; my houseplant has the full briefing and will forward anything urgent by dying dramatically.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
