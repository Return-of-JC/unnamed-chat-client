all: build serve

update:
	docker-compose build --no-cache --pull
	docker-compose run --rm client pnpm install

build:
	docker-compose build
	docker-compose run --rm client pnpm install

serve:
	docker-compose up


clean:
	docker-compose rm -svf
