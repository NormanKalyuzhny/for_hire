import { v } from "convex/values";
import { query } from "./_generated/server";
import { mutation } from "./_generated/server";

export const getMetadata = query({
  args: {
    storageId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.system.get(args.storageId);
  },
});

export const listAllFiles = query({
  handler: async (ctx) => {
    // You can use .paginate() as well
    return await ctx.db.system.query("_storage").collect();
  },
});

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const getFileUrl = query({
  args: { fileId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.fileId);
  },
});