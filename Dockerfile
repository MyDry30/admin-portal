FROM node:18

WORKDIR /frontend

COPY ./package.json .

COPY . .

RUN npm install

EXPOSE 5000

ENTRYPOINT [ "npm", "run", "dev" ]
