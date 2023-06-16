# BUILD THE BACK

FROM node:16.20-alpine3.17 as back-end
USER node
WORKDIR /app
ARG DB
ENV DB_FOLDER=$DB
COPY --chown=node:node package*.json .
RUN npm install
COPY --chown=node:node . .
EXPOSE 9428
CMD [ "npm","run","start" ]
