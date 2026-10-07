import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
const sampleFiles = [
  "cafe-reel.mp4",
  "linkedin-corporate-edit.mp4",
  "sauga-city-rentals.mp4",
  "dastaan-e-jurm-ai-story.mp4",
];

test("the portfolio focuses on video, graphic design, and AI storytelling", () => {
  assert.ok(page.includes("Stories that<br /><em>stop the<br />scroll.</em>"));
  assert.match(page, /Video Editing/);
  assert.match(page, /Graphic Design/);
  assert.match(page, /AI Video|AI Storytelling/);
  assert.doesNotMatch(page, /Web Development|AI Solutions/);
});

test("the contact and profile details match Fakher's brief", () => {
  assert.match(page, /const contactEmail = "nadeemfakher02@gmail\.com"/);
  assert.match(page, /href=\{\`mailto:\$\{contactEmail\}\`\}/);
  assert.match(page, /const phoneNumber = "\+923224791519"/);
  assert.match(page, /href=\{\`tel:\$\{phoneNumber\}\`\}/);
  assert.match(page, /360 Tech Solution/);
  assert.match(page, /Adobe Premiere Pro/);
  assert.match(page, /CapCut Pro/);
  assert.match(page, /Photoshop/);
  assert.match(page, /remote/i);
  assert.match(page, /part-time/i);
});

test("all four supplied video samples are playable local portfolio assets", () => {
  assert.match(page, /<video/);

  for (const file of sampleFiles) {
    assert.ok(page.includes(file), `page should reference ${file}`);
    assert.ok(
      existsSync(new URL(`../public/work/${file}`, import.meta.url)),
      `public/work/${file} should exist`,
    );
  }
});
