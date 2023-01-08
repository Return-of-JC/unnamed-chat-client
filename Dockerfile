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

RUN apk add npm make
RUN npm i -g pnpm

FROM base as dev-client
RUN apk add neovim
USER ${USER}

CMD pnpm dev-client

FROM base as dev-server
RUN apk add neovim
USER ${USER}

CMD pnpm dev-server

FROM base as builder

FROM nginx:alpine as deploy
