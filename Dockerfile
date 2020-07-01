FROM node:lts-slim

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN yarn install
RUN yarn workspace frontend build

EXPOSE 4000

CMD [ "yarn", "workspace", "frontend", "start" ]
