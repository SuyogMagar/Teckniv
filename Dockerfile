# =======================================
# Stage 1: Build React Frontend
# =======================================
FROM node:20-alpine AS frontend-builder
WORKDIR /app

# Copy frontend package files and install dependencies
COPY Teckniv/Frontend/package*.json ./
RUN npm install

# Copy rest of the frontend code and build
COPY Teckniv/Frontend/ ./
RUN npm run build

# =======================================
# Stage 2: Build Spring Boot Backend
# =======================================
FROM maven:3.9-eclipse-temurin-21 AS backend-builder
WORKDIR /app

# Copy backend pom.xml and download dependencies
COPY Teckniv/src/pom.xml ./
RUN mvn dependency:go-offline

# Copy backend source code
COPY Teckniv/src ./src

# Build the backend JAR (skipping tests for speed)
RUN mvn clean package -DskipTests

# =======================================
# Stage 3: Run the Application
# =======================================
FROM eclipse-temurin:21-jre-slim
WORKDIR /app

# Copy the built Spring Boot JAR
COPY --from=backend-builder /app/target/*.jar app.jar

# Copy the React build into static resources
# (Assuming Spring Boot is configured to serve static content from /static)
COPY --from=frontend-builder /app/build ./static

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
