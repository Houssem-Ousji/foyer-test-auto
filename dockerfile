# Use Node.js v23 slim image
FROM node:23-slim

# Set working directory
WORKDIR /app

# Copy only necessary files first for better caching (excluding node_modules and reports)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the workspace, still excluding node_modules and reports
COPY . .

# Run test suite
CMD ["npm", "run", "ci-test"]
