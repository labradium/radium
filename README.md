## Radium Init, Initialize any new project in seconds with custom toolings.

### Getting Started

You can install radium `init` globally or use it as executable whenever you need.

#### For Global Installation (Recommended)

```bash
bun add -g radium-init
```
```bash
npm add -g radium-init
```
```bash
pnpm add -g radium-init
```
```bash
yarn add -g radium-init
```
#### For Executable

```bash
bunx radium-init@latest
```
```bash
npx radium-init@latest
```
```bash
pnpm dlx radium-init@latest
```
```bash
yarn dlx radium-init@latest
```
### Usage

`init` comes with two commands currently, `init with` and `init new`.

`init with` is used to initialize a project with an github template, just paste your url - no matter if it's sub-directory of any monorepo or not.

`init with` have two sub-commands `-u` for github url and `-n` for name of the project.

`init new` is used to initialize a new project with a specific tooling, just specify name of project with `-n` flag.

### Examples

```bash
init with -u https://github.com/vgseven/next-essential -n next-essential
```

```bash
init new -n next-essential
```

### Contributing

Contributions are welcome! Please open an issue or submit a pull request. 