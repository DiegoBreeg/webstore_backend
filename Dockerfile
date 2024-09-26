FROM node:22.9.0

EXPOSE $PORT

WORKDIR /usr/src/helena_paixao_backend

COPY package.json ./

COPY . ./

RUN npm install

CMD ["npm", "run", "serve"]