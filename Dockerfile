FROM python:3.12-slim AS base

WORKDIR /app

# Install Node.js for frontend build
RUN apt-get update && apt-get install -y --no-install-recommends curl \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y --no-install-recommends nodejs \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Install frontend dependencies and build
COPY frontend/package.json frontend/package-lock.json* frontend/
RUN cd frontend && npm install

COPY frontend/ frontend/
RUN cd frontend && npm run build

# Copy backend source
COPY src/ src/

ENV PYTHONPATH=/app/src
ENV SERVE_FRONTEND=true

EXPOSE 8000

CMD ["uvicorn", "kitkat.main:app", "--host", "0.0.0.0", "--port", "8000"]
