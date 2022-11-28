FROM --platform=linux/amd64 node:19-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build
RUN npm run schema:all
RUN cp -R ./generated ./dist
CMD ["node", "./dist/src/index.js"]
