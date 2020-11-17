FROM node:12
EXPOSE 3000
WORKDIR /volume

COPY . .

RUN npm i

CMD ['npm','run','dev']
