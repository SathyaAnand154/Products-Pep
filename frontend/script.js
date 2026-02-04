fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("loader").style.display = "none";

    data.products.forEach((p) => {
      const div = document.createElement("div");
      div.innerHTML = `<h3>${p.title}</h3>`;
      document.getElementById("products").appendChild(div);
    });
  });
