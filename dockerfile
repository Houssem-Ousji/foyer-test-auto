FROM node:22.15.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm cache clean --force
RUN npm install -g npm@10.5.0

RUN npm install

COPY . .

EXPOSE 8085

CMD ["npm", "run", "ci-test"]
