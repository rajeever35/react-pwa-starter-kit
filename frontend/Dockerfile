
FROM node:lts-slim

RUN mkdir /app

COPY . /app

WORKDIR /app/frontend

RUN yarn install
RUN yarn build
CMD ["s3", "sync", "./", "arn:aws:s3:::lazylowbucket"]

EXPOSE 8080

CMD [ "yarn", "start" ]
