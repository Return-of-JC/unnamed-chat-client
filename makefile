all: build server

build:
	docker-compose build


server:
	docker-compose up

fresh:
	docker-compose build --no-cache
