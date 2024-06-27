## Radium Init, Initialize any new project in seconds with your tools..

### Getting Started

You can install radium `init` globally or use it as executable whenever you need.

#### For Global Installation (Recommended)

```bash
bun add -g @silver-radium/init
```
```bash
npm add -g @silver-radium/init
```
```bash
pnpm add -g @silver-radium/init
```
```bash
yarn add -g @silver-radium/init
```
#### For Executable

```bash
bunx @silver-radium/init [flags]
```
```bash
npx @silver-radium/init [flags]
```
```bash
pnpm dlx @silver-radium/init [flags]
```
```bash
yarn dlx @silver-radium/init [flags]
```
### Usage

```bash
init [flags]
```

### Flags


##### `with`

Initialize a new project with existing starter templates github repository url.

##### `-u, --url <url>`

URL of the starter template.

##### `-n, --name <name>`

Name of the project.

##### `-g, --git`

Initialize git.

##### `-i, --install <package manager>`

Install dependencies with package manager.

##### `--version / -v`

Display current version.

##### `--help / -h`

Display help for a command.

### Examples


Example of initializing a new project with existing starter templates github repository url.

```bash
init with -u https://github.com/silver-radium/starter/tree/main/essential/next -g -i bun
```

### Contributing

Contributions are welcome! Please open an issue or submit a pull request.

### License

This project is licensed under the MIT License. 