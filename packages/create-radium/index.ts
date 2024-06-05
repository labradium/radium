import { intro, select, spinner, text } from '@clack/prompts';
import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);
const s = spinner();

intro(`Initialize New Project With Radium`);

(async () => {
  const name = await text({
    message: 'What is the name of your project?',
    placeholder: 'radium',
    validate(value) {
      if (value.length === 0) return `Project name is required!`;
    },
  });

  const projectConfirm = await select({
    message: 'Start with',
    options: [
      {
        value: 'new',
        label: 'New Project',
      },
      {
        value: 'existing',
        label: 'Existing Template',
      },
    ],
  });

  console.log('   We recommend you to use TypeScript..');

  if (projectConfirm === 'new') {
    console.log(`   Creating New Project ${name.toString()}`);
  } else {
    console.log("   Let's Start With Existing Template");

    const template = await select({
      message: 'Select Template',
      options: [
        {
          value: 'next-general',
          label:
            'Next.js Basic Template with TailwindCSS, ShadcnUI, Geist Font, Theme and Folder Structure.',
        },
        {
          value: 'next-million',
          label:
            'Next.js Basic Template but with millionjs and million lint to supercharge speed.',
        },
      ],
    });

    const packageManager = await select({
      message: 'Select Package Manager',
      options: [
        {
          value: 'pnpm',
          label: 'pnpm',
        },
        {
          value: 'yarn',
          label: 'yarn',
        },
        {
          value: 'npm',
          label: 'npm',
        },
        {
          value: 'bun',
          label: 'bun',
        },
      ],
    });

    s.start(
      `Downloading and extracting template ${template} using ${packageManager}...`,
    );

    try {
      const templatePath = path.resolve(__dirname, `./next/${template}`);

      const targetPath = path.resolve(process.cwd(), name.toString());

      fs.mkdirSync(targetPath, { recursive: true });
      fs.cpSync(templatePath, targetPath, { recursive: true });

      process.chdir(targetPath);

      let installCommand;
      switch (packageManager) {
        case 'pnpm':
          installCommand = 'pnpm i';
          break;
        case 'yarn':
          installCommand = 'yarn';
          break;
        case 'npm':
          installCommand = 'npm i';
          break;
        case 'bun':
          installCommand = 'bun i';
          break;
      }

      await execAsync(installCommand as string);

      s.stop('Template setup completed successfully!');
      console.log(
        `Project ${name.toString()} has been set up at ${targetPath}`,
      );
    } catch (error) {
      s.stop('An error occurred while setting up the template.');
      console.error(error);
    }
  }
})();
