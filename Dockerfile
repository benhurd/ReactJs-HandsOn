FROM node:8.7

RUN npm install webpack -g

WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/

RUN npm install

ENV PORT=4000

# Expose the app port
EXPOSE 4000

# Start the app
CMD npm start