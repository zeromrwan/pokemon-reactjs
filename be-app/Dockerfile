FROM node:12.18.0-alpine

ENV TZ Asia/Jakarta

WORKDIR /home/node/app
ADD . /home/node/app
RUN npm install pm2 -g
EXPOSE 3001
CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
