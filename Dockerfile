FROM node:18-alpine

WORKDIR /src

COPY package.json .

RUN pnpm install

COPY . .

EXPOSE 3000 5173

CMD ["pnpm", "run", "build", "--", "--host"]

