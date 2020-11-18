FROM node

WORKDIR /mern_client 

COPY package*.json /mern_client/

RUN npm install 

COPY . /mern_client/

EXPOSE 3000 

CMD ["npm","start"]