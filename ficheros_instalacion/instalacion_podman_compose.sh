#!/bin/bash
echo "-----------------------------------------------------------";
echo "-----------------------------------------------------------";
echo "-----------------------------------------------------------";
echo "------  Bienvenido al instalador de Podman-Compose  -------";
echo "-----------------------------------------------------------";
echo "-----------------------------------------------------------";
echo "-----------------------------------------------------------";
echo "Se instalarán paquetes y dependencias para el correcto funcionamiento"
echo "¿Desea continuar? (y/n)"
read response
if [ "$response" = "y" ]; then
git clone https://github.com/containers/aardvark-dns
cd aardvark-dns
make
make install PREFIX=/usr
sudo apt install python3-pip
pip3 install https://github.com/containers/podman-compose/archive/devel.tar.gz
else
    echo "Podman compose no se instalará"
fi


    
