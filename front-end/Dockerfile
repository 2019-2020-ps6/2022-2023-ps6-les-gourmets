# BUILD THE WEBSITE

FROM node:16.20-alpine3.17 AS build-front
WORKDIR /app
COPY package*.json ./
RUN chown -R node:node /app && su node -c "npm install"
USER node
COPY . .
RUN npm run build

# PUT THE WEBSITE IN NGINX

FROM nginx:1.24.0 AS display-stage
COPY --from=build-front /app/dist/front-end /usr/share/nginx/html
COPY --from=build-front /app/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
