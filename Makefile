.PHONY: build-frontend build dev dev-frontend

build-frontend:
	cd frontend && npm install && npm run build

build: build-frontend

dev:
	PYTHONPATH=src uv run uvicorn kitkat.main:app --reload

dev-frontend:
	cd frontend && npm run dev
