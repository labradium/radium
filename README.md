## Radium, Initialize any new project in seconds with custom toolings.

### Getting Started

You can install radium globally or use it as executable whenever you need.

#### For Global Installation (Recommended)

```bash
bun add -g radium-cli
```
```bash
npm add -g radium-cli
```
```bash
pnpm add -g radium-cli
```
```bash
yarn add -g radium-cli
```
#### For Executable

```bash
bunx radium-cli@latest
```
```bash
npx radium-cli@latest
```
```bash
pnpm dlx radium-cli@latest
```
```bash
yarn dlx radium-cli@latest
```
### Usage

`radium` comes with two commands currently, `init` and `describe`.

`radium init` have two options currently `--with` is used to initialize a project with an github template, just paste your url - no matter if it's sub-directory of any monorepo or not and second option `--new` is used to initialize a new project with a specific tooling.

`radium describe` is used to initialize project by just describing a project in words, and our `Radium AI` will list out the required tools for you to get started and initialize the project for you.

> `radium describe` is still in alpha stage, so it's not recommended to use it for now. You can hit radium describe but it'll just say hello and exit.

### Examples

```bash
radium init --with
```

```bash
radium init --new
```

### Upcoming Features

- We're working on `radium add` command to initialize any new tool in existing project.
### Contributing

Contributions are welcome! Please open an issue or submit a pull request. 