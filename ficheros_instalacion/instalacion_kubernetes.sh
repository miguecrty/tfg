#!/bin/bash
echo "-----------------------------------------------------------";
echo "-----------------------------------------------------------";
echo "-----------------------------------------------------------";
echo "---------  Bienvenido al instalador de Kubernetes  --------";
echo "-----------------------------------------------------------";
echo "-----------------------------------------------------------";
echo "-----------------------------------------------------------";
echo "¿Desea continuar? (y/n)"
read response
if [ "$response" = "y" ]; then
echo "Instalando kind...";
sleep 1    
[ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.22.0/kind-$(uname)-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind

echo "Instalando kubectl...";
sleep 1
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
rm -rf kubectl
echo "Instalando gcloud...";
sleep 1
curl -O https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-cli-472.0.0-linux-x86_64.tar.gz
tar -xf google-cloud-cli-472.0.0-linux-x86_64.tar.gz
./google-cloud-sdk/install.sh
source ~/.bashrc
echo "Instalando componentes de gcloud...";
sleep 1
gcloud components update
gcloud components install gke-gcloud-auth-plugin
echo "---------  Kubernetes instalado correctamente  --------";
else
    echo "Kubernetes no se instalará"
fi


    
