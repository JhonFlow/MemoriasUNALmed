const routes = {
  home: {
    path: "home",
  },
  anonimo: {
    path: "Anonimo",
  },
  bloque12: {
    path: "Bloque12",
  },
  about: {
    path: "About",
  },
  nosotros: {
    path: "Nosotros",
  },
};

export function loadRoute() {
  const hash = window.location.hash.replace("#", "") || "home";
  const route = routes[hash];

  if (!route) {
    document.getElementById("app").innerHTML = "<p>Sección no encontrada.</p>";
    return;
  }

  // Ajusta la ruta para GitHub Pages (rutas relativas a /sections/)
  const htmlPath = `sections/${route.path}/${route.path.toLowerCase()}.html`;
  const cssPath = `sections/${route.path}/${route.path.toLowerCase()}.css`;

  fetch(htmlPath)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("app").innerHTML = html;

      const oldStyle = document.querySelector("link[data-dynamic-style]");
      if (oldStyle) oldStyle.remove();

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssPath;
      link.setAttribute("data-dynamic-style", "true");
      document.head.appendChild(link);
    });
}


