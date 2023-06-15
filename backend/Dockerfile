# BUILD THE BACK

FROM node:20-alpine3.17 as back-end
WORKDIR /app
COPY --chown=node:node ./package*.json .
RUN npm install
COPY --chown=node:node . .
USER node
EXPOSE 9428
CMD [ "npm","run","start" ]
