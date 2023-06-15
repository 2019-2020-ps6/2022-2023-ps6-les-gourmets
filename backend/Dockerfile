# BUILD THE BACK

FROM node:16.20-alpine3.17 as back-end
WORKDIR /app
COPY --chown=node:node package*.json .
RUN chown -R node:node /app && su node -c "npm install"
COPY --chown=node:node . .
USER node
EXPOSE 9428
CMD [ "npm","run","start" ]
