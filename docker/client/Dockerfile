FROM alpine:latest as base

ENV USER=chatter
ENV UID=1000
ENV GID=1000
ENV DIR=/home/${USER}/app

RUN addgroup -g ${GID} ${USER}
RUN adduser -D -H -G ${USER} -u ${UID} ${USER}

WORKDIR ${DIR}
COPY . .
RUN chown -R ${USER}:${USER} ${DIR}

RUN apk add npm make
RUN npm i -g pnpm

FROM base as develop

RUN apk add neovim
USER ${USER}
RUN pnpm install
CMD pnpm develop

FROM base as builder

FROM nginx:alpine as deploy
