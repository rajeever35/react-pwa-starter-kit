
FROM node:lts-slim

RUN mkdir /app
WORKDIR /app

COPY . ./
COPY package.json ./
COPY tsconfig.json ./

RUN yarn install
RUN yarn build

EXPOSE 4000

CMD [ "yarn", "start" ]
