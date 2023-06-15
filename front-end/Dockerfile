# BUILD THE WEBSITE

FROM node:16.20-alpine3.17 AS build-front
WORKDIR /app
USER node
COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node . .
RUN npm run build

# PUT THE WEBSITE IN NGINX

FROM nginx:1.24.0 AS display-front
COPY --from=build-front /app/dist/front-end /usr/share/nginx/html
COPY --from=build-front /app/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
#USER nginx
#CMD ["nginx", "-g", "daemon off;"]
