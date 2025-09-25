# Etapa 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Copia os arquivos de dependência
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm ci

# Copia o restante do projeto
COPY . .

# Build do projeto Next.js
RUN npm run build

# Etapa 2: Produção
FROM node:22-alpine AS runner

WORKDIR /app

# Instala apenas dependências de produção
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copia os arquivos gerados na build
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Define a variável de ambiente
ENV NODE_ENV=production

# Expõe a porta padrão do Next.js
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
