# Stage 1: Build application with OpenJDK 25 and Maven
FROM eclipse-temurin:25-jdk-noble AS build
WORKDIR /app

# Copy Maven wrapper and POM configuration
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN chmod +x mvnw

# Download dependencies
RUN ./mvnw dependency:go-offline -B || true

# Copy source files and build production jar
COPY src ./src
RUN ./mvnw clean package -DskipTests

# Stage 2: Runtime image using minimal Java 25 JRE
FROM eclipse-temurin:25-jre-noble
WORKDIR /app

# Copy built jar from build stage
COPY --from=build /app/target/*.jar app.jar

# Expose default port
EXPOSE 8081

ENTRYPOINT ["java", "-jar", "app.jar"]
