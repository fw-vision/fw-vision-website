import { describe, expect, test } from "bun:test";
import { normalizeSourceUrl, updateIdFor } from "./import-cbc-investment-summit";

const entry = {
  sourceUrl: "https://www.cbc.ca/example/?utm_source=x&id=42#top",
  sourcePublishedAt: "2026-09-15T19:35:00-04:00",
  sourceUpdateKey: "summit-direction",
  sourceTitle: "Summit update",
  publisher: "CBC News",
  facts: ["A fact"],
};

describe("CBC update identity", () => {
  test("removes fragments and tracking parameters while retaining meaningful parameters", () => {
    expect(normalizeSourceUrl(entry.sourceUrl)).toBe("https://www.cbc.ca/example?id=42");
  });
  test("is deterministic and changes with the immutable update key", () => {
    expect(updateIdFor(entry)).toBe(updateIdFor(entry));
    expect(updateIdFor({ ...entry, sourceUpdateKey: "airport-governance" })).not.toBe(updateIdFor(entry));
  });
});
