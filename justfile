set positional-arguments

all: reset build serve

# builds for development
build:
    docker-compose build
    pnpm install

# serves for development
serve:
	docker-compose up

# reset/deletes the project files/images
reset:
    docker-compose rm -svf
    rm -rf .pnpm-store node_modules

# cleans all orphaned/stopped containers in docker
prune:
    docker system prune -af

# allows you to debug a specified container in the compose file
@debug container:
    docker-compose exec $1 sh

# updates images + dependencies for project
update:
	pnpm update --latest
	docker-compose build --no-cache --pull

@eslint *args='':
    ./node_modules/.bin/eslint $@

@prettier *args='':
    ./node_modules/.bin/prettier $@
