FROM node 

WORKDIR /mern_app

COPY package*.json /mern_app/

RUN npm install

COPY . /mern_app/

EXPOSE 2020

CMD ["npm","start"]