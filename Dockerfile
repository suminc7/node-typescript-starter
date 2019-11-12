FROM node:10.17.0


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install
RUN npm run build

ENV NODE_ENV production

EXPOSE 8080
CMD ["npm", "start"]
