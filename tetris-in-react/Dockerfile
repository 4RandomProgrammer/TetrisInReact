FROM node:20-alpine
EXPOSE 5173
WORKDIR /app 
ENV NODE_ENV=production
COPY package*.json .
RUN npm install
RUN npm install -g vite
COPY . .
CMD ["npm", "run", "dev"]