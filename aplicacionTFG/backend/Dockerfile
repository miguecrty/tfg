FROM node:22-alpine

RUN mkdir -p /src/app
WORKDIR /src/app
COPY ./svc_backend/package.json /src/app/package.json
RUN npm install
COPY ./svc_backend/. /src/app

EXPOSE 3000
CMD [ "npm", "start" ]
