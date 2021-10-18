# cacheAPI

cache api

To set-up mongodb, I've used one docker container
steps:

1. docker pull mongo
2. docker run -d --name cache-api -p 27018:27018 -p 28017:28017 -e MONGODB_USER="admin" -e MONGODB_DATABASE="cacheApi" -e MONGODB_PASS="password" mongo:latest
3. check if container is running with docker ps (also check the port tot be 27017)
4. create an .env file and paste this

DB_CONNECT=mongodb://localhost:27017/cache-api
