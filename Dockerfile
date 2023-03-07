#Specify a base image
FROM node:14-alpine

WORKDIR /user/app
#custom command 
COPY ./package.json ./
RUN npm install
COPY ./ ./

#Default command
CMD ["npm" , "start"]