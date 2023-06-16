# BUILD THE BACK

FROM node:16.20-alpine3.17 as back-end
ARG ENV
ENV ENV_VAR=$ENV
USER node
WORKDIR /app
COPY --chown=node:node package*.json .
RUN npm install
COPY --chown=node:node . .
EXPOSE 9428
CMD npm run start$ENV_VAR
