FROM node:8-alpine

COPY app.js /app/app.js

WORKDIR /app

RUN npm install express mysql fs
RUN npm install -g --save wait-for-mysql

CMD wait-for-mysql -h $MYSQL_HOST -u $MYSQL_USER -P $MYSQL_PASSWORD && node app.js

