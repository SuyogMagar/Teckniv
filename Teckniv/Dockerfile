# Multi-stage Dockerfile for Teckniv Application
# Stage 1: Build Frontend with Vite and React
FROM node:18-alpine AS frontend-builder

WORKDIR /app/frontend

# Copy package files first for better caching
COPY Frontend/package.json Frontend/package-lock.json* ./

# Install frontend dependencies
RUN npm ci --legacy-peer-deps

# Copy frontend source code
COPY Frontend/ .

# Build frontend for production
RUN npm run build

# Stage 2: Build Backend with Maven
FROM maven:3.9-eclipse-temurin-17 AS backend-builder

WORKDIR /app

# Copy pom.xml for dependency caching
COPY pom.xml .

# Download dependencies (creates cache layer)
RUN mvn dependency:go-offline -B -DskipTests

# Copy backend source code
COPY src ./src

# Build backend JAR (produces: target/Teckniv-0.0.1-SNAPSHOT.jar)
RUN mvn clean package -DskipTests -B

# Stage 3: Production Image
FROM eclipse-temurin:17-jre-alpine

# Install wget for healthcheck
RUN apk add --no-cache wget

WORKDIR /app

# Create non-root user for security
RUN addgroup -S spring && adduser -S spring -G spring

# Copy the built JAR from builder stage
# The JAR name includes version and artifact
COPY --from=backend-builder /app/target/Teckniv-0.0.1-SNAPSHOT.jar app.jar

# Copy frontend build to serve as static files
# Spring Boot will serve files from src/main/resources/static or root
COPY --from=frontend-builder /app/frontend/dist ./static

# Change ownership to spring user
RUN chown -R spring:spring /app

# Switch to non-root user
USER spring:spring

# Expose port 8080 (Spring Boot default)
EXPOSE 8080

# Health check - waits for app to be ready
HEALTHCHECK --interval=30s --timeout=5s --start-period=60s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080 || exit 1

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
