#get latest node
FROM node:latest AS build

#crete a directory
RUN mkdir -p /app

#change directory
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build --prod

# CMD ["npm", "start"]

FROM nginx:alpine
COPY dist/portfolio/browser /usr/share/nginx/html/browser
COPY /conf.d/default.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

