# BUILD THE WEBSITE

from node:20-alpine3.17 as front-end
WORKDIR /app
copy --chown=node:node ./package*.json .
RUN npm install
COPY --chown=node:node . .
User node


