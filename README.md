# Trabajo Fin de Grado

   
![Logo](https://www.us.es/sites/default/files/inline-images/US-marca-digital_0.png)


## Objetivos

Este repositorio explora las funcionalidades de diversas tecnologías, con un enfoque en la gestión de contenedores y orquestación de clústeres. A continuación se detallan las tecnologías incluidas:

• **[Podman](https://github.com/containers/podman)**: Una herramienta de gestión de contenedores que ofrece una experiencia similar a Docker pero sin necesidad de un demonio en ejecución.

• **[Apache Cassandra](https://cassandra.apache.org/_/index.html)**: Un sistema de base de datos distribuida altamente escalable y de alto rendimiento.

• **[Podman Compose](https://github.com/containers/podman-compose)**: Una herramienta que permite definir y ejecutar aplicaciones de contenedor multi-contenedor utilizando un archivo YAML similar a Docker Compose.

• **[Kubernetes (Kind)](https://kind.sigs.k8s.io/)**:  Kubernetes es una plataforma de código abierto diseñada para automatizar la implementación, el escalado y la gestión de aplicaciones en contenedores. Kind es una herramienta que ejecuta clústeres de Kubernetes dentro de contenedores de Docker para facilitar el desarrollo local de Kubernetes.

• **[Kubernetes (GKE)](https://cloud.google.com/kubernetes-engine?hl=es-419)**: Google Kubernetes Engine (GKE) es un servicio de gestión de contenedores que te permite implementar, administrar y escalar aplicaciones en contenedores utilizando Kubernetes en la infraestructura de Google Cloud Platform.


## Configuración del proyecto


Clona el proyecto con el comando:
```bash
git clone https://github.com/miguecrty/tfg
```
Cambia de usuario a root:
```bash
su root
```

## Instalación de Podman
Para instalar Podman, ejecuta el siguiente script desde la carpeta ficheros_instalacion del repositorio clonado:
```bash
  cd tfg/ficheros_instalacion
  ./instalacion_podman.sh
```
  ## Instalación de Podman Compose
Para instalar Podman Compose, ejecuta el siguiente script desde la carpeta ficheros_instalacion del repositorio clonado:
```bash
  cd tfg/ficheros_instalacion
  ./instalacion_podman_compose.sh
```
  ## Instalación de Kubernetes (Kind + kubectl + gcloud)
Para instalar Kubernetes, Kind (Kubernetes in Docker), kubectl, y gcloud (Google Cloud SDK), ejecuta el siguiente script desde la carpeta ficheros_instalacion del repositorio clonado:
```bash
  cd tfg/ficheros_instalacion
  ./instalacion_kubernetes.sh
```
## Compatibilidad

**SO:** Linux

**Distribución:** Ubuntu MATE

**Versión:** 22.04

**Arch:** AMDx64


## Autores

- [@miguecrty](https://www.github.com/miguecrty)


## Soporte

Para soporte sobre el repositorio, miguelangelloppez7@gmail.com



## Soporte

Para soporte sobre el repositorio, miguelangelloppez7@gmail.com

