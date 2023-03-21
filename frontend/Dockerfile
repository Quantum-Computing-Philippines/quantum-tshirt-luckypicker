# To do

# Use Node.js LTS version as base image
FROM node:18.15.0-alpine3.17

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the entire application to the container
COPY . .

# # Build the application
# RUN npm run build

# Expose the port the application will run on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
