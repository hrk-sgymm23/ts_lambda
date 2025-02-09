PHONY: build up build-run

build:
	cd src && \
	npm run build && \
	docker compose build --no-cache

up:
	docker compose up -d

curl:
	curl "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'

down:
	docker-compose down

exec:
	docker-compose exec localstack /bin/bash

build-lambda:
	export $$(cat .env | xargs) && \
	cd src/ && \
    GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o ../build/main

zip:
	cd src/ && \
	zip zenn_app.zip bootstrap