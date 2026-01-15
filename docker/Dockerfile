FROM node:20-alpine AS builder
WORKDIR /app
COPY app/package*.json ./
RUN npm ci
COPY app/ .
RUN npm run test || true

FROM node:20-alpine 
WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=builder /app /app

USER appuser
EXPOSE 3000
CMD ["node", "src/index.js"]