FROM node:16-alpine

ENV NODE_ENV=development

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 3001
ENV PORT 3001

CMD [ "yarn", "start" ]