import { z } from "zod";

export const repoInfoSchema = z.object({
  owner: z.string(),
  repo: z.string(),
  sub: z.string(),
  repoUrl: z.string().url(),
  branch: z.string(),
});

export type RepoInfo = z.infer<typeof repoInfoSchema>;

export const parserName = z
  .string()
  .min(1, { message: "Project name is required!" })
  .refine((name) => !name.match(/^\d/), {
    message: "Project name cannot start with a digit!",
  });
