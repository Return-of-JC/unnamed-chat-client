all: build serve

build:
	docker-compose build
	docker-compose run --rm client pnpm install

serve:
	docker-compose up

reset:
	docker-compose rm -svf
	rm -rf .pnpm-store node_modules

prune:
	docker system prune -af

update:
	docker-compose build --no-cache --pull
	docker-compose run --rm client pnpm update --latest

