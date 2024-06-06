FROM node:22-alpine

WORKDIR /app/svc_frontend
COPY svc_frontend/package*.json ./
RUN npm install
COPY svc_frontend .

RUN npm run build
EXPOSE 8080

CMD ["npm", "start"]
