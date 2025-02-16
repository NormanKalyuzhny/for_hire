import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const saveAudioMetadata = mutation({
  args: {
    storageId: v.id("_storage"),
    fileName: v.string(),
    //duration: v.number(),
    artist: v.string(),
    genre: v.optional(v.string()),
    year: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("audioMetadata", {
      storageId: args.storageId,
      fileName: args.fileName,
      //duration: args.duration,
      artist: args.artist,
      genre: args.genre,
      year: args.year,
      format: "mp3",
    });
  },
});