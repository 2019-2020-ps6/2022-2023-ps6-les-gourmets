# BUILD THE WEBSITE

from node:20-alpine3.17 as front-end
WORKDIR /app
copy --chown=node:node ./package*.json .
RUN npm install
COPY --chown=node:node . .
User node
CMD [ "npm","run","build" ]


# PUT THE WEBSITE IN NGINX

FROM nginx:1.25.1-alpine
COPY --from=front-end /app/dist/front-end /usr/share/nginx/html
Expose 4200
