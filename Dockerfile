FROM node:22.9.0

EXPOSE 3030

WORKDIR /usr/src/helena_paixao_backend

COPY package.json ./

COPY . ./

RUN npm install