FROM php:7.4-apache
RUN apt-get update && apt-get install -y libicu-dev libonig-dev

RUN docker-php-ext-install intl mbstring pdo pdo_mysql

RUN a2enmod rewrite
