import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  audioMetadata: defineTable({
    storageId: v.id("_storage"),
    fileName: v.string(),
    //duration: v.number(),
    artist: v.string(),
    genre: v.optional(v.string()),
    year: v.optional(v.string()),
    format: v.string(),
  }),
});