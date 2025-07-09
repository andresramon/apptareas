FROM node:18

WORKDIR /app
ENV SKIP_PREFLIGHT_CHECK=true
ENV GENERATE_SOURCEMAP=false

COPY package*.json ./
RUN npm ci

COPY . .
EXPOSE 3000
CMD ["npm", "start"]
