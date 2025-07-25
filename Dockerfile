FROM  alpine:3.21

WORKDIR  /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 80

CMD ["node", "app.js"]



