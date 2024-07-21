import { z } from "zod";

export const repoInfoSchema = z.object({
  owner: z.string(),
  repo: z.string(),
  sub: z.string(),
  repoUrl: z.string().url(),
  branch: z.string(),
});

export type RepoInfo = z.infer<typeof repoInfoSchema>;

export const newArgsValuesSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Project name is required!" })
    .toLowerCase()
    .refine((name) => {
      if (!name.includes(" ") || name.match(/^\d/)) {
        return true;
      }
      return false;
    }),
});

export type NewArgsValues = z.infer<typeof newArgsValuesSchema>;

export const withArgsValuesSchema = newArgsValuesSchema.extend({
  url: z.string().url(),
});

export type WithArgsValues = z.infer<typeof withArgsValuesSchema>;
