FROM mongo-express
COPY . /jobPortal
WORKDIR /jobPortal
RUN npm install -g nodemon && npm install
CMD [ "npm" , "start" ]