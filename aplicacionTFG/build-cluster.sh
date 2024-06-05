#!/bin/bash
podman image rm -f bbdd
podman image rm -f backend
podman image rm -f frontend
cd backend
rm -rf svc_backend/node_modules
podman build -t backend .
id_backend=$(podman inspect --format='{{.Id}}' backend)
podman image push $id_backend docker.io/miguecrty/tfg-backend:v1.0
cd ..
cd frontend
rm -rf svc_frontend/node_modules
rm -rf svc_frontend/.next
podman build -t frontend .
id_frontend=$(podman inspect --format='{{.Id}}' frontend)
podman image push $id_frontend docker.io/miguecrty/tfg-frontend:v1.0
cd ..
cd bbdd
podman build -t bbdd .
id_cassandra=$(podman inspect --format='{{.Id}}' bbdd)
podman image push $id_cassandra docker.io/miguecrty/tfg-bbdd:v1.0
# cd ..
# cd kubernetes
# kind delete cluster
# kind create cluster
# kubectl apply -f .