import { z } from "astro:content";

/**
 * Schema for src/data/roadmap.json.
 * Keep this in sync with the JSON file — if you add a field there, add it here.
 *
 * Used by XahauRoadmap.astro (build-time validation) and optionally by a
 * Content Collection if you ever promote the JSON to `src/content/`.
 */

const localized = z
  .union([z.string(), z.record(z.string(), z.string())])
  .transform((v) => (typeof v === "string" ? { en: v } : v));

export const quarterId = z
  .string()
  .regex(/^\d{4}-Q[1-4]$/, "Quarter must look like '2026-Q2'");

export const roadmapItem = z.object({
  id: z.string().min(1),
  lane: z.enum(["tech", "rollout"]),
  status: z.enum([
    "feature",
    "live",
    "pilot",
    "partnership",
    "launch",
  ]),
  // Start quarter (required).
  quarter: quarterId,
  // How many quarters the activity covers, starting from `quarter`. Defaults to 1.
  span: z.number().int().min(1).max(6).default(1),
  // Alternative to `span`: an explicit end quarter (inclusive). Takes precedence if set.
  endQuarter: quarterId.optional(),
  // Ongoing activity with no firm end date. Stretches to the end of the visible
  // window and renders a "continues" indicator. Overrides `span`/`endQuarter`.
  openEnded: z.boolean().optional().default(false),
  tag: localized.optional(),
  title: localized,
  description: localized.optional(),
  link: z.string().url().optional(),
});

export const roadmapLabels = z.object({
  title: z.string(),
  subtitle: z.string(),
  statement: z.string(),
  kpis: z.object({
    features: z.string(),
    quarters: z.string(),
    rollouts: z.string(),
  }),
  laneTech: z.string(),
  laneRollout: z.string(),
  now: z.string(),
  updated: z.string(),
  philosophy: z
    .array(z.object({ t: z.string(), v: z.string() }))
    .min(1)
    .max(6),
  legend: z.object({
    feature: z.string(),
    live: z.string(),
    pilot: z.string(),
    partnership: z.string(),
    launch: z.string(),
  }),
  foot: z.string(),
});

export const roadmapSchema = z.object({
  meta: z.object({
    updated: z.string(),
    window: z.object({
      mode: z.enum(["auto", "manual"]).default("auto"),
      start: z.string().nullable().default(null),
    }),
    i18n: z.object({
      defaultLocale: z.string(),
      locales: z.array(z.string()).min(1),
    }),
  }),
  labels: z.record(z.string(), roadmapLabels),
  items: z.array(roadmapItem),
});

export type Roadmap = z.infer<typeof roadmapSchema>;
export type RoadmapItem = z.infer<typeof roadmapItem>;
export type RoadmapLabels = z.infer<typeof roadmapLabels>;
