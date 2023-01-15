FROM alpine:latest as base

ENV USER=client
ENV UID=1000
ENV GID=1000
ENV DIR=/chat-client

RUN addgroup -g ${GID} ${USER}
RUN adduser -D -H -G ${USER} -u ${UID} ${USER}

WORKDIR ${DIR}
COPY . .
RUN chown -R ${USER}:${USER} ${DIR}

RUN apk add npm neovim
RUN npm i -g pnpm

USER ${USER}
RUN pnpm install
VOLUME ${DIR}/node_modules ${DIR}/.pnpm-store

FROM base as dev-client
CMD pnpm dev-client

FROM base as dev-server
CMD pnpm dev-server

FROM base as builder

FROM nginx:alpine as deploy
