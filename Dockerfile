FROM node:24-bookworm AS stage1  
WORKDIR /app
COPY ./package*.json .
RUN npm install
COPY . .
RUN npm run build

# final stage (creates an image with only the build artifacts and a HTTP server)
FROM nginx:1.27.5-alpine
COPY --from=stage1 /app/build/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
