#!/bin/bash

# Stop and remove all running containers
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)

# Remove all Docker images
# docker rmi $(docker images -aq)

# Remove all Docker volumes
docker volume rm $(docker volume ls -q)
