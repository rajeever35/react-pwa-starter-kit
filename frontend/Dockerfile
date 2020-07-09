
FROM node:lts-slim

RUN mkdir /app

COPY . /app

WORKDIR /app/frontend

RUN yarn install
RUN yarn build

EXPOSE 8080

CMD [ "yarn", "start" ]

CMD ["s3", "sync", "./dist", "arn:aws:s3:::lazylowbucket"]
