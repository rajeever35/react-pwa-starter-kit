
FROM node:lts-slim

RUN mkdir /app
WORKDIR /app

COPY . ./app
COPY package.json /app
RUN yarn install
RUN yarn build

EXPOSE 4000

CMD [ "yarn", "start" ]
