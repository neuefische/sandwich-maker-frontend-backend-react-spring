FROM openjdk:19

ENV ENVIROMENT=prod

MAINTAINER Sergej Grilborzer <sergej.grilborzer@neuefische.de>

EXPOSE 8080

ADD backend/target/sandwich_maker.jar sandwich_maker.jar

CMD [ "sh", "-c", "java -jar /sandwich_maker.jar" ]