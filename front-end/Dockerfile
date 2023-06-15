# BUILD THE WEBSITE

FROM node:20-alpine3.17 as front-end
WORKDIR /app
COPY --chown=node:node ./package*.json .
RUN npm install
COPY --chown=node:node . .
USER node
CMD [ "npm","run","build" ]


# PUT THE WEBSITE IN NGINX

FROM nginx:1.25.1-alpine
COPY --from=front-end /app/dist/front-end /usr/share/nginx/html
COPY --from=front-end /app/default.conf /etc/nginx/conf.d/default.conf
USER nginx
