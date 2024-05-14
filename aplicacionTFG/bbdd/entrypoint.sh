#!/bin/bash
# Espera hasta que Cassandra esté disponible

until cqlsh -e "DESCRIBE KEYSPACES"; do
    echo "Cassandra no está disponible todavía - esperando..."
    sleep 10
done
echo "Cassandra está disponible - continuando..."
