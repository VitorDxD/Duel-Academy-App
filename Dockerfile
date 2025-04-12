FROM node:23:slim AS build

COPY . /app/.

WORKDIR /app
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]