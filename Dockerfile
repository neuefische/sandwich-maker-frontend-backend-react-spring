FROM maven:3.8.3-openjdk-17 AS build

WORKDIR /app

COPY /backend/.mvn .mvn
COPY /backend/mvnw /backend/pom.xml ./
RUN mvn -B package -f pom.xml

COPY . ./app

ENTRYPOINT ["java","-jar","/app/target/sandwich-maker-0-0.1.jar"]

#FROM eclipse-temurin:17-jdk-focal
#COPY --from=build /home/app/target/sandwich-maker-0.0.1.jar /usr/local/lib/sandwichshop.jar
#EXPOSE 8080
#ENTRYPOINT ["java","-jar","/usr/local/lib/sandwichshop.jar"]