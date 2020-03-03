# Docker testing

```
cd /usr/local/bin
mkdir docker-test
cd docker-test

mkdir src
nano ./src/index.php
```

`<?php Echo "Hello, world!"; ?>`

Create a docker file (hub.docker.com)

`nano Dockerfile`

```
FROM php:7.4-apache
COPY src/ /var/www/html/
EXPOSE 80
```

Build and run

```
docker build -t hello-world
docker run -p 80:80 hello-world
```

Next port forward Windows localhost:8989 (whatever) to Alpine Linux 80 on VirtualBox.
Now the port forwarding is: Windows localhost 8989 -> Alpine Linux 80 -> Docker container 80
Should be able to connect to localhost:8989 on Windows machine now and confirm that the container works.