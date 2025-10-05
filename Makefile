.PHONY: dev
dev:
	make -j2 tailwind server

tailwind:
	tailwindcss -i ./assets/css/input.css -o ./assets/css/styles.css --minify --watch 

server:
	templ generate --watch --proxy="http://localhost:8080" --open-browser=false --cmd "go run ./cmd/main.go"