import { intro, text } from "@clack/prompts";

intro(`initialize new project with radium`);
const projectName = await text({
  message: "what is the name of your project?",
  validate(value) {
    if (value.length === 0) return `project name is required!`;
  },
});

console.log(projectName);
