# Teckniv Docker Setup

This document explains how to build and run the Teckniv application using Docker.

## Prerequisites

- Docker (version 20.10 or higher)
- Docker Compose (version 2.0 or higher)

## Build and Run

### Using Docker Compose (Recommended)

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Stop and remove volumes (clean slate)
docker-compose down -v
```

### Using Docker Only

```bash
# Build the image
docker build -t teckniv-app .

# Run the container
docker run -d \
  -p 8080:8080 \
  --name teckniv-app \
  teckniv-app
```

## Access the Application

Once the containers are running:
- Frontend: http://localhost:8080
- Backend API: http://localhost:8080/api
- PostgreSQL: localhost:5432

## Environment Variables

You can customize the configuration by setting environment variables:

```bash
docker run -d \
  -p 8080:8080 \
  -e SPRING_DATASOURCE_URL=jdbc:postgresql://host:5432/db \
  -e SPRING_DATASOURCE_USERNAME=user \
  -e SPRING_DATASOURCE_PASSWORD=pass \
  teckniv-app
```

## Health Check

The container includes a health check that verifies the application is running:

```bash
docker ps
```

Look for the `STATUS` column to see the health status.

## Troubleshooting

### View Logs
```bash
docker-compose logs -f app
```

### Access Container Shell
```bash
docker exec -it teckniv-app sh
```

### Rebuild After Code Changes
```bash
docker-compose up -d --build
```

## Production Deployment

For production, consider:

1. Using environment-specific configuration files
2. Setting up SSL/TLS certificates
3. Using a reverse proxy (nginx)
4. Setting up proper secrets management
5. Implementing monitoring and logging
6. Using a managed database service

## Build Arguments

You can customize the build with arguments:

```bash
docker build \
  --build-arg NODE_VERSION=18 \
  --build-arg JAVA_VERSION=17 \
  -t teckniv-app .
```

