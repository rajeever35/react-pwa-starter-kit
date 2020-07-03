
FROM node:lts-slim

RUN mkdir /app
WORKDIR /app

COPY .. /app

RUN yarn install

EXPOSE 9000

CMD [ "yarn", "start" ]
