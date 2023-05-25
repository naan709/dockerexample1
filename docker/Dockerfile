FROM node:slim

WORKDIR /app

COPY package.json .

run npm install

COPY . .

EXPOSE 80

CMD ["node", "app.js"]