# BUILD THE WEBSITE

from node:20-alpine3.17
WORKDIR /app
copy --chown=node:node ./package*.json .
RUN npm install
COPY --chown=node:node . .
User node
Expose 7200
CMD [ "npm","start" ]


# PUT THE WEBSITE IN NGINX

