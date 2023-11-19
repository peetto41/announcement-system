FROM node:lts-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install -g npm \
&& npm install \
&& npm install typescript -g
COPY . ./
RUN tsc
EXPOSE 3000
CMD ["node", "./dist/index.js"]