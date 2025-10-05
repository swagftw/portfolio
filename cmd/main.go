package main

import (
	"log/slog"
	"net/http"
	"os"
	"os/signal"
	"syscall"

	"github.com/swagftw/portfolio/pkg/server"
	"github.com/swagftw/portfolio/site/routes"
)

func main() {
	mux := http.NewServeMux()
	svr := server.New(":8080", mux)
	defer server.Shutdown(svr)

	errChan := make(chan error)
	signChan := make(chan os.Signal, 1)
	signal.Notify(signChan, syscall.SIGINT, syscall.SIGTERM)

	routes.InitRoutes(mux)

	go func() {
		errChan <- server.Run(svr)
	}()

	select {
	case s := <-signChan:
		slog.Error("signal received, stopped server", "signal", s)
	case err := <-errChan:
		slog.Error("stopped server with error", "err", err)
	}
}
