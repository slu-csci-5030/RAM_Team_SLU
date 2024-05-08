FROM node:22-alpine3.18

WORKDIR /app/RAM-BACKEND

COPY . /app/RAM-BACKEND

RUN npm install
RUN npm uninstall bcrypt
RUN npm install bcrypt

EXPOSE 85

CMD ["npm", "start "]