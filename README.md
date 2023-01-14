# Untitled Chat Client

a simple chat app build with SolidJS and NodeJS

### Index
- [Before Starting](#before-starting)
- [Installation and Setup](#installation-and-setup)
    - [Using the Just Runner](#using-the-just-runner)

## Before Starting

please be familiar with these code patterns:
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [BEM](https://getbem.com/)

it's also usefull to read up on these:
- [SolidJS](https://www.solidjs.com/)
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [SASS](https://sass-lang.com/)
- [Typescript](https://www.typescriptlang.org/)

you'll also need to setup [Eslint](https://eslint.org/docs/latest/user-guide/integrations) 
and [Prettier](https://prettier.io/docs/en/editors.html) in your editor of choice for
consistant code quality.

## Installation and Setup

You'll need to create a docker account and use [docker login](https://docs.docker.com/engine/reference/commandline/login/)
to pull in images to your local machine.

dependencies that **MUST** be installed to run the project:
- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/install/)
- [just](https://github.com/casey/just)

additional dependencies for windows:
- [WSL](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers)
- [PNPM](https://pnpm.io/)

to initalize the project for the first time:
```bash
just linux
just serve
```

### Using the Just Runner

if you need to rebuild the project:
```bash
just linux (Linux + MacOS)
just windows (Windows Only)
```

if you need to serve the project:
```bash
just serve
```

to debug a running container:
```bash
just debug <container-name>
```

if you need to reset the project
```bash
just reset
```

updating the project:
```bash
just update
```
