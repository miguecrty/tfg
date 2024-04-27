FROM docker.io/python:3.9
WORKDIR /app
COPY requisitos.txt ./
RUN pip install --no-cache-dir -r requisitos.txt
COPY . .
CMD ["python", "backend.py"]
