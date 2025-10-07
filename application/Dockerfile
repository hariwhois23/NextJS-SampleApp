# Single stage build

# FROM node:22-bullseye-slim
# WORKDIR /app
# COPY package.json ./
# RUN yarn install --frozen-lockfile

# COPY . .

# EXPOSE 3000
# CMD ["yarn","start"]

#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


# Multi-stage build

#Stage-1 build
FROM node:22-bullseye-slim AS build
WORKDIR /app


COPY package.json  ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

#Stage-2 run
FROM node:22-bullseye-slim AS run
WORKDIR /app

COPY package.json  ./
RUN yarn install --frozen-lockfile --production

COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public


EXPOSE 3000

CMD ["yarn", "start"]
