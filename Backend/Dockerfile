FROM node:lts-alpine

# Install build tools and dependencies
RUN apk add --no-cache --virtual .build-deps python3 make g++

WORKDIR /usr/src/app/backend

COPY package*.json ./

RUN npm install

# Install bcrypt from source
RUN npm rebuild bcrypt --build-from-source

COPY . .

# Clean up build dependencies
RUN apk del .build-deps

EXPOSE 5555
CMD ["npm", "start"] 