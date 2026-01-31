import { query } from "./_generated/server";
import { v } from "convex/values";

// Return the last 100 companies in a given company list.
export const getCompaniesList = query({
  // args: { companyListId: v.id("companyLists") },
  args: {  },
  handler: async (ctx, args) => {
    const companies = await ctx.db
      .query("companies")
      // .withIndex("companyListId", (q) => q.eq("companyListId", args.companyListId))
      .order("desc")
      .take(100);
    return companies;
  },
});