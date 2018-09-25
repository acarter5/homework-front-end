FROM mysql:5.7

MAINTAINER me

ENV MYSQL_DATABASE=eaze
ENV MYSQL_ROOT_PASSWORD=mysqlpwd

ADD schema.sql /docker-entrypoint-initdb.d

EXPOSE 3306