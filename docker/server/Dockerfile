FROM alpine:latest as develop

ENV USER=user
ENV UID=1000
ENV GID=1000
ENV HOME=/home/${USER}
ENV DIR=${HOME}/server

RUN apk add --no-cache npm neovim && npm i -g pnpm && \
    addgroup -g ${GID} ${USER} && \
    adduser -D -H -G ${USER} -u ${UID} ${USER}

WORKDIR ${DIR}
COPY . .
RUN chown -R ${USER}:${USER} ${HOME}

USER ${USER}
RUN pnpm install
VOLUME ${DIR}/node_modules

CMD [ "pnpm", "dev-server" ]
