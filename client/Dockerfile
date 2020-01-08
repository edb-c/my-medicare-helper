FROM node:10.15.3
RUN mkdir /client-code
WORKDIR  /client-code
COPY package.json /client-code/package.json
COPY package-lock.json /client-code/package-lock.json

RUN npm install react-scripts@3.0.3 -g --silent
COPY . /client-code

CMD ["npm","start"]
