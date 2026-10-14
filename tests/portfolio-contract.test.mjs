import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
const layout = readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
const playbackModule = new URL("../app/video-playback.mjs", import.meta.url);
const sampleFiles = [
  "cafe-reel.mp4",
  "linkedin-corporate-edit.mp4",
  "sauga-city-rentals.mp4",
  "dastaan-e-jurm-ai-story.mp4",
  "ai-luxury-villa-promo.mp4",
  "islamabad-live-concert-teaser.mp4",
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

test("all six video samples are playable local portfolio assets", () => {
  assert.match(page, /<video/);

  for (const file of sampleFiles) {
    assert.ok(page.includes(file), `page should reference ${file}`);
    assert.ok(
      existsSync(new URL(`../public/work/${file}`, import.meta.url)),
      `public/work/${file} should exist`,
    );
  }
});

test("playing one sample pauses every other sample", async () => {
  assert.ok(existsSync(playbackModule), "exclusive playback utility should exist");
  const { bindExclusiveVideoPlayback } = await import(playbackModule.href);

  class FakeVideo extends EventTarget {
    constructor(paused) {
      super();
      this.paused = paused;
    }

    play() {
      this.paused = false;
      this.dispatchEvent(new Event("play"));
    }

    pause() {
      this.paused = true;
    }
  }

  const villa = new FakeVideo(true);
  const concert = new FakeVideo(false);
  const unbind = bindExclusiveVideoPlayback([villa, concert]);

  villa.play();
  assert.equal(villa.paused, false);
  assert.equal(concert.paused, true);

  concert.play();
  assert.equal(villa.paused, true);
  assert.equal(concert.paused, false);

  unbind();
});

test("portfolio videos show posters and do not preload media on refresh", () => {
  assert.match(page, /preload="none"/);
  assert.doesNotMatch(page, /preload="metadata"/);
  assert.match(page, /poster=\{sample\.poster\}/);
});

test("hero uses a custom 360-degree visual instead of Fakher's portrait", () => {
  assert.equal(/\/images\/fakher-nadeem\.webp/.test(page), false, "hero should not use a portrait");
  assert.match(page, /360°/);
  assert.match(page, /creative-orbit/);
  assert.match(styles, /\.creative-orbit/);
});

test("the new villa promo and concert teaser lead the selected work section", () => {
  const villaPosition = page.indexOf('title: "Luxury Villa AI Promo"');
  const concertPosition = page.indexOf('title: "Live Concert Teaser"');
  const cafePosition = page.indexOf('title: "Cafe Social Reel"');

  assert.ok(villaPosition >= 0, "the villa promo should be listed");
  assert.ok(concertPosition > villaPosition, "the concert teaser should follow the villa promo");
  assert.ok(cafePosition > concertPosition, "existing samples should follow the new work");
  assert.match(page, /AI-generated villa promo/);
  assert.match(page, /Concert teaser · 11 sec · Vertical/);
});

test("mobile hero keeps the availability card and visual caption in separate layout space", () => {
  const mobileStyles =
    styles
      .split("@media (max-width: 760px) {")[1]
      ?.split("@media (max-width: 460px) {")[0] ?? "";
  const smallMobileStyles =
    styles.split("@media (max-width: 460px) {")[1]?.split("@media (prefers-reduced-motion")[0] ?? "";
  const availabilityRule =
    mobileStyles.match(/\.availability-card\s*\{([^}]*)\}/)?.[1] ?? "";
  const captionRule =
    mobileStyles.match(/\.visual-caption\s*\{([^}]*)\}/)?.[1] ?? "";
  const smallMobileAvailabilityRule =
    smallMobileStyles.match(/\.availability-card\s*\{([^}]*)\}/)?.[1] ?? "";

  assert.match(availabilityRule, /position:\s*relative/);
  assert.match(captionRule, /position:\s*static/);
  assert.doesNotMatch(smallMobileAvailabilityRule, /(?:right|bottom):/);
});

test("the custom cursor is decorative, fine-pointer only, and disabled for reduced motion", () => {
  assert.match(layout, /className="custom-cursor"\s+aria-hidden="true"/);
  assert.match(page, /matchMedia\("\(hover: hover\) and \(pointer: fine\)"\)/);
  assert.match(styles, /\.custom-cursor\s*\{/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)[\s\S]*?\.custom-cursor\s*\{[^}]*display:\s*none/);
});

test("additional pointer hover effects are present on navigation, the hero visual, and process steps", () => {
  assert.match(styles, /\.nav-links\s+a(?::not\(\.nav-cta\))?::after\s*\{/);
  assert.match(styles, /\.hero-visual:hover\s+\.creative-frame/);
  assert.match(styles, /\.process-grid\s+article:hover/);
});
