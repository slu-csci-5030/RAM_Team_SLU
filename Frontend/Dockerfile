FROM node:lts-alpine
WORKDIR /usr/src/app/frontend
COPY package*.json ./
RUN npm install
COPY . .

CMD [ "npm", "run", "dev" ]
