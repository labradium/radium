import { exec } from "child_process";

exec("bun changeset version");
exec("bun install");