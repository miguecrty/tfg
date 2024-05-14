# NOTE: will also work with other cassandra version tags
FROM cassandra:latest

COPY ./init_keyspace.cql /

# this is the script that will patch the already existing entrypoint from cassandra image
COPY entrypoint.sh /
CMD ["chmod", "777", "/entrypoint.sh"]
# Override ENTRYPOINT, keep CMD
ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 9042
CMD ["cqlsh", "-f", "init_keyspace.cql"]