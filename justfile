set positional-arguments

# builds docker-compose for development
build:
    docker-compose build
    pnpm install

# serves docker-compose for development
serve:
	docker-compose up

# reset/deletes the project files/images
reset:
    docker-compose rm -svf
    rm -rf .pnpm-store node_modules

# cleans all orphaned/stopped containers in docker
prune:
    docker system prune -af

# installs packages using pnpm
@install package-name:
    docker-compose run --rm client pnpm install $@

@install-dev package-name:
    docker-compose run --rm client pnpm install -D $@

@remove package-name:
    docker-compose run --rm client pnpm remove $@

# allows you to debug a specified container in the compose file
@debug container:
    docker-compose exec $1 sh

# updates docker images and pnpm packages
update:
	docker-compose build --no-cache --pull
	docker-compose run --rm client pnpm update --latest

@eslint arguments:
    ./node_modules/.bin/eslint $@

@prettier arguments:
    ./node_modules/.bin/prettier $@
