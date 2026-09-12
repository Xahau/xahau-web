import { z } from 'astro:content'

/**
 * Schema for src/data/xas.json — the Xahau Standards (XAS) index.
 *
 * Design rule: **the JSON is what the site shows.** Nothing is fetched from
 * GitHub at build time, so a malformed or mistyped discussion title upstream
 * never reaches the website. Each entry carries its own `code`/`title`/
 * `summary`; `sourceTitle` records the raw GitHub title only so a reviewer can
 * see what was overridden and why (`note`).
 *
 * Used by XahauStandards.astro for build-time validation: a bad entry fails
 * `npm run build` rather than rendering a broken card.
 */

/** `status` values, ordered as they are rendered on the page. */
export const xasStatuses = [
  'draft',
  'discussion',
  'accepted',
  'implemented',
  'rejected',
] as const

export type XasStatus = (typeof xasStatuses)[number]

export const xasItem = z.object({
  /** Stable slug, used as the anchor id (e.g. `xas-008d`). */
  id: z
    .string()
    .regex(
      /^[a-z0-9-]+$/,
      'id must be lowercase kebab-case, e.g. "xas-008d" or "uritoken-transfer-fees"',
    ),

  /**
   * Standard code as the site displays it, e.g. "XAS-008d".
   * Omit for ideas that have not been assigned a number yet — the card then
   * renders without a badge instead of inventing one.
   */
  code: z.string().min(1).optional(),

  /** Sort key. Numbered standards sort by this; unnumbered ones fall back to `opened`. */
  number: z.number().int().min(0).optional(),

  /** Headline shown on the site. Free to differ from the GitHub title. */
  title: z.string().min(1),

  /** Raw GitHub title, kept for provenance when `title`/`code` override it. */
  sourceTitle: z.string().min(1).optional(),

  /**
   * Editorial note explaining an override — rendered as small print on the
   * card. Use it when the upstream title is wrong (typo, wrong prefix) so the
   * correction is visible rather than silent.
   */
  note: z.string().min(1).optional(),

  /** One or two sentences. Written here, not scraped. */
  summary: z.string().min(1),

  /** GitHub handle of the proposer, as displayed. */
  author: z.string().min(1),

  /** Discussion number on Xahau/xahaud. */
  discussion: z.number().int().positive(),

  /** ISO date the discussion was opened. */
  opened: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Use ISO format, e.g. '2026-08-26'"),

  /** Comment count at the time of the last review. Optional — omit if unknown. */
  comments: z.number().int().min(0).optional(),

  status: z.enum(xasStatuses),

  /** Free-form topic tags, e.g. ["hooks", "uritoken"]. */
  tags: z.array(z.string().min(1)).default([]),

  /** Keep the entry in the file but drop it from the page. */
  hidden: z.boolean().default(false),
})

export type XasItem = z.infer<typeof xasItem>

export const xasSchema = z.object({
  meta: z.object({
    /** ISO date this file was last reconciled against GitHub. Shown on the page. */
    updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    /** Repo discussions category everything here comes from. */
    source: z.string().url(),
    /** Base URL a discussion number is appended to. */
    discussionBase: z.string().url(),
  }),
  pageMeta: z.record(
    z.string(),
    z.object({ title: z.string(), description: z.string() }),
  ),
  labels: z.object({
    title: z.string(),
    subtitle: z.string(),
    statement: z.string(),
    cta: z.string(),
    ctaNote: z.string(),
    contribute: z.string(),
    updated: z.string(),
    statuses: z.record(
      z.string(),
      z.object({ label: z.string(), blurb: z.string() }),
    ),
    meta: z.object({
      author: z.string(),
      /** Plural noun, e.g. "comments". */
      comments: z.string(),
      /** Singular form, used when the count is exactly 1. */
      commentsOne: z.string(),
      discuss: z.string(),
    }),
  }),
  items: z.array(xasItem),
})
