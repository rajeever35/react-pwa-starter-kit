FROM node:lts-slim

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN yarn install
RUN yarn test

EXPOSE 9000

CMD [ "yarn", "workspace, "backend", "start" ]
