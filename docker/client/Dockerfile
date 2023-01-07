FROM alpine:latest as base
WORKDIR /app/client
COPY . .
RUN apk add npm make

FROM base as develop
RUN apk add neovim

FROM base as builder

FROM nginx:alpine as deploy
