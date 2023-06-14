# BUILD THE BACK

from node:20-alpine3.17 as back-end
WORKDIR /app
copy --chown=node:node ./package*.json .
RUN npm install
COPY --chown=node:node . .
User node
EXPOSE 9428
CMD [ "npm","run","start" ]
