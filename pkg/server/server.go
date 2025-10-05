package server

import (
	"context"
	"log/slog"
	"net/http"
)

func New(addr string, mux *http.ServeMux) *http.Server {
	return &http.Server{
		Addr:    addr,
		Handler: mux,
	}
}

func Run(server *http.Server) error {
	slog.Info("running server", "addr", server.Addr)
	return server.ListenAndServe()
}

func Shutdown(server *http.Server) {
	server.Shutdown(context.Background())
}
