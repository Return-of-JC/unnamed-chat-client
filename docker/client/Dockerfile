FROM alpine:latest as develop 

ARG USER=chatter
ARG UID=1000
ARG GID=1000

RUN apk add --no-cache npm neovim && npm i -g pnpm && \
    addgroup -g ${GID} ${USER} && \
    adduser -D -G ${USER} -u ${UID} ${USER}

WORKDIR /build
COPY . .
RUN chown -R ${USER}:${USER} /build

USER ${USER}
RUN pnpm install

CMD [ "pnpm", "dev-client" ]
