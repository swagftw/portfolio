package routes

import (
	"net/http"

	"github.com/swagftw/portfolio/site/pages"
)

func InitRoutes(mux *http.ServeMux) {
	// embed fs for static files
	fileServer := http.FileServer(http.Dir("./assets"))
	mux.Handle("GET /assets/", http.StripPrefix("/assets/", fileServer))

	// home page
	mux.HandleFunc("GET /", handleHomePage)
}

func handleHomePage(w http.ResponseWriter, r *http.Request) {
	page := pages.Page()
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.WriteHeader(http.StatusOK)
	page.Render(r.Context(), w)
}
