FROM node:lts-alpine

# Install build tools and dependencies
RUN apk add --no-cache --virtual .build-deps python3 make g++

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install bcrypt from source
RUN npm rebuild bcrypt --build-from-source

# Copy the application code
COPY . .

# Clean up build dependencies
RUN apk del .build-deps

EXPOSE 5555
CMD ["npm", "start"] 