all:

build:
	docker-compose build --no-cache

server:
	docker-compose up

synapse-config:
	docker run -it --rm
