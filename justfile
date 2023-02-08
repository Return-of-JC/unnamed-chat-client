set positional-arguments

default: 
    @just --list

all: reset init build serve

# initializes environment variables and dependencies
init:
    @rm -rf .env
    @echo "UID=$(id -u)"   >> .env
    @echo "GID=$(id -g)"   >> .env
    @echo "USER=$(whoami)" >> .env
    @read -s -p "Enter Password: " PASS1 && echo && \
     read -s -p "Confirm Password: " PASS2 && echo && \
     if [[ "$PASS1" == "$PASS2" ]]; then \
         echo "PASSWORD=\"$PASS1\"" >> .env; \
     else \
         echo "incorrect! try again"; exit 1; fi
    pnpm install

# builds for development
build:
    docker-compose build

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

# allows you to run eslint in the docker container
@eslint *args='':
    docker-compose exec client ./node_modules/.bin/eslint $@

# allows you to run prettier in the docker container
@prettier *args='':
    docker-compose exec client ./node_modules/.bin/prettier $@
