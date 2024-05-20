FROM node:22-alpine

RUN mkdir -p /src/app
WORKDIR /src/app
ENV CASSANDRA=cassandra
ENV DATACENTER=datacenter1
ENV PORT=9042
ENV KEYSPACE=tfg
COPY ./svc_backend/package.json /src/app/package.json
RUN npm install
COPY ./svc_backend/. /src/app

EXPOSE 3000
CMD [ "npm", "start" ]
