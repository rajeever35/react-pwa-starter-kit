
FROM node:lts-slim

RUN mkdir /app

COPY . /app

WORKDIR /app/backend

RUN yarn install

EXPOSE 8081

CMD [ "yarn", "start" ]
