import { intro, select, spinner, text } from "@clack/prompts";
import * as fs from "fs";
import * as path from "path";

const s = spinner();

intro(`Initialize New Project With Radium`);

(async () => {
  const name = await text({
    message: "What is the name of your project?",
    placeholder: "radium",
    validate(value) {
      if (value.length === 0) return `Project name is required!`;
    },
  });

  const projectConfirm = await select({
    message: "Start with",
    options: [
      {
        value: "new",
        label: "New Project",
      },
      {
        value: "existing",
        label: "Existing Template",
      },
    ],
  });

  console.log("   We recommend you to use TypeScript..");

  if (projectConfirm === "new") {
    console.log(
      `   Creating New Project with custom tools and configs are in alpha stage currently, please use existing templates and request custome template on github issues as feature request.`,
    );
  } else {
    console.log("   Let's Start With Existing Template");

    const template = await select({
      message: "Select Template",
      options: [
        {
          value: "next-general",
          label:
            "next.js basic template with tailwindcss, shadcn-ui, geist font, next-theme and proper folder structure.",
        },
        {
          value: "react-general",
          label:
            "react.js basic template with tanstack-router, vite, tailwindcss, shadcn-ui, geist font, next-theme and proper folder structure.",
        },
        {
          value: "turborepo-general",
          label: "turborepo basic template with tailwindcss and bun.",
        },
      ],
    });

    s.start(`Initializing template ${template}...`);

    try {
      const templatePath = path.resolve(__dirname, `./templates/${template}`);

      const targetPath = path.resolve(process.cwd(), name.toString());

      fs.mkdirSync(targetPath, { recursive: true });
      fs.cpSync(templatePath, targetPath, { recursive: true });

      process.chdir(targetPath);

      s.stop(
        `cd ${name.toString()} and install dependencies with your favorite package manager (pnpm i, yarn i, npm i, bun i).`,
      );
    } catch (error) {
      s.stop("An error occurred while setting up the template.");
      console.error(error);
    }
  }
})();
