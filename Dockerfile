ARG NODE_VERSION=22.17.0-alpine
FROM node:${NODE_VERSION} AS base

WORKDIR /app

COPY --link package.json package-lock.json ./

ENV NODE_ENV=production

RUN npm ci --omit=dev && npm cache clean --force

FROM base AS builder

COPY --link . .

RUN npm run build

FROM node:${NODE_VERSION} AS runner

USER node

ENV PORT=3000

ENV NEXT_TELEMETRY_DISABLE=1

WORKDIR /app

COPY --link --from=builder /app/.next/standalone ./      
COPY --link --from=builder /app/.next/static ./.next/static
COPY --link --from=builder /app/public ./public              

EXPOSE 3000

ENTRYPOINT ["node", "server.js"]