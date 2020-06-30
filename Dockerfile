FROM node:lts-slim

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN yarn install
RUN yarn test

EXPOSE 3000

CMD [ "yarn", "workspace, "backend", "start" ]
