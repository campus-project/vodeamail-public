FROM node:14-alpine as build

WORKDIR /usr/local/app

COPY dist package.json ./

RUN yarn install --production

FROM node:14-alpine

WORKDIR /usr/local/app

COPY --from=build /usr/local/app .

EXPOSE 3010

CMD ["node", "main.js"]