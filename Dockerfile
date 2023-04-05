FROM alpine:latest

RUN apk add nodejs
RUN apk add npm

COPY ./ /var/chatgpt-api

WORKDIR /var/chatgpt-api
# RUN npm ci --no-color --quiet
RUN npm install

ENV API_HOST=0.0.0.0
ENV OPENAI_API_KEY=
EXPOSE 3000

ENTRYPOINT npm start
