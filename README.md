# Untitled Chat Client

a simple chat app build with SolidJS and NodeJS

### Index
- [Before Starting](#before-starting)
- [Installation and Setup](#installation-and-setup)
    - [Using the Just Runner](#using-the-just-runner)
- [Sucssess!](#sucssess)

## Before Starting

please be familiar with these code patterns:
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [BEM](https://getbem.com/)

it's also useful to read up on these:
- [SolidJS](https://www.solidjs.com/)
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [SASS](https://sass-lang.com/)
- [Typescript](https://www.typescriptlang.org/)

you'll also need to setup [Eslint](https://eslint.org/docs/latest/user-guide/integrations) 
and [Prettier](https://prettier.io/docs/en/editors.html) in your editor of choice for
consistent code quality.

## Installation and Setup

You'll need to create a docker account and use [docker login](https://docs.docker.com/engine/reference/commandline/login/)
to pull in images to your local machine.

dependencies that **MUST** be installed to run the project:
- [just](https://github.com/casey/just#installation)
- [pnpm](https://pnpm.io/installation)
- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/install/)

additional dependencies for windows:
- [WSL](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers)

another note: sometimes the mysql database needs time to setup due to it not having health checks. 'just serve' a few times 
and you should see the server up and running normaly.


### Using the Just Runner

to initialize the project for the first time:
```bash
just all
```

if you need to rebuild the project:
```bash
just build
```

if you need to serve the project:
```bash
just serve
```
to list all available commands and what they do:
```bash
just
```

## Sucssess!

you should now be able to view the web app at [localhost:3000](http://localhost:3000)
you'll also have the ability to access adminer sql client at [localhost:3001](http://localhost:3001)

