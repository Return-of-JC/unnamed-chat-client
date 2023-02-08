FROM node:18-alpine as develop

RUN apk add --no-cache curl neovim && \
    /bin/sh -o pipefail -c "curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm"

WORKDIR /build
COPY . .
RUN chown -R node:node /build

USER node
RUN pnpm fetch && pnpm install -f --offline

CMD [ "pnpm", "dev-client" ]
