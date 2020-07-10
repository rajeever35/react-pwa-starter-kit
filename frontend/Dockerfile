
FROM node:lts-slim

RUN mkdir /app

COPY . /app

WORKDIR /app/frontend

RUN yarn install
RUN yarn build

RUN ls /app/frontend/  

EXPOSE 8080

CMD [ "yarn", "start" ]
