   const logos = [
      "assets/image/carrusel-empresas/fantastic.webp",
      "assets/image/carrusel-empresas/lavatech.webp",
      "assets/image/carrusel-empresas/merlin.webp",
      "assets/image/carrusel-empresas/fantastic.webp",
      "assets/image/carrusel-empresas/lavatech.webp",
      "assets/image/carrusel-empresas/merlin.webp",
    ];

    const indicators = document.querySelector("#logoCarousel .carousel-indicators");
    const inner = document.querySelector("#logoCarousel .carousel-inner");

    const isMobile = window.innerWidth < 768;
    const perSlide = isMobile ? 1 : 3;
    const numSlides = Math.ceil(logos.length / perSlide);

    for (let i = 0; i < numSlides; i++) {
      const item = document.createElement("div");
      item.className = "carousel-item" + (i === 0 ? " active" : "");

      const container = document.createElement("div");
      container.className = "container";

      const row = document.createElement("div");
      row.className = "row justify-content-center";

      for (let j = i * perSlide; j < (i + 1) * perSlide && j < logos.length; j++) {
        const col = document.createElement("div");
        col.className = "col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0";

        const img = document.createElement("img");
        img.src = logos[j];
        img.alt = "Logo " + (j + 1);
        img.className = "img-fluid";
        img.style.maxHeight = "80px";
        

        col.appendChild(img);
        row.appendChild(col);
      }

      container.appendChild(row);
      item.appendChild(container);
      inner.appendChild(item);

      // Crear el indicador
      const indicator = document.createElement("button");
      indicator.type = "button";
      indicator.dataset.bsTarget = "#logoCarousel";
      indicator.dataset.bsSlideTo = i;
      if (i === 0) indicator.className = "active";

      indicators.appendChild(indicator);
    }

