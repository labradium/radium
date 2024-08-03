# Radium, Initialize any new project in seconds with custom toolings

## Introduction

Radium, Rapidly Ship Projects. Radium offers CLI, Templates, Starters, and Stacks to kick off your next project at speed of light and best architecture.

[Radium CLI](#radium-cli) :- Initialize any new project in seconds with custom toolings.

[Radium Templates](#radium-templates) :- Ready to ship templates that you can use to kickstart your next project.

[Radium Stacks](#radium-stacks) :- Perfectly configured stacks that you can use to kickstart your next project.

[Radium Starters](#radium-starters) :- Essential starters that you can use to kickstart your next project.

### Radium CLI

You can install radium globally or use it as executable whenever you need.

For Global Installation (Recommended)

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

For Executable

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

#### Usage

`radium` comes with two commands currently, `init` and `describe`.

`radium init` have two options currently `--with` is used to initialize a project with an github template, just paste your url - no matter if it's sub-directory of any monorepo or not and second option `--new` is used to initialize a new project with a custom tooling.

`radium describe` is used to initialize project by just describing a project in words, and our `Radium AI` will list out the required tools for you to get started and initialize the project for you.

> `radium describe` is still in alpha stage, so it's not recommended to use it for now. You can hit `radium describe` but it'll just say hello and exit.

#### Examples

```bash
radium init --with
```

```bash
radium init --new
```

### Radium Templates

Ready to ship templates that you can use to kickstart your next project. Checkout Radium Templates [here](https://github.com/radiumlabs/radium/blob/main/TEMPLATES.md).

### Radium Stacks

Perfectly configured stacks that you can use to kickstart your next project. Checkout Radium Stacks [here](https://github.com/radiumlabs/radium/blob/main/STACKS.md).

### Radium Starters

Essential starters that you can use to kickstart your next project. Checkout Radium Starters [here](https://github.com/radiumlabs/radium/blob/main/STARTERS.md).

### Upcoming Features

- `radium add` :- Add any new tool in existing project.
- `radium migrate` :- Migrate existing project to any new tool.
- `radium stack` :- Use Stacks to kickstart your next project.
- `radium starter` :- Use Starters to kickstart your next project.
- `radium template` :- Use Templates to kickstart your next project.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request.
