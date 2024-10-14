FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

COPY pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

RUN pnpm run build

FROM node:18 AS production

WORKDIR /app

COPY --from=build /app/ .

EXPOSE 3000

CMD ["pnpm", "start"]
