FROM node:18-alpine
ENV NODE_ENV=production
WORKDIR /app 
COPY package.json . 
RUN npm i 
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]