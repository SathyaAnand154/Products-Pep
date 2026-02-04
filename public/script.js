fetch("/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    document.getElementById("loader").style.display = "none";

    data.products.forEach((p) => {
      const div = document.createElement("div");
      div.innerHTML = `<h3>${p.title}</h3>`;
      document.getElementById("products").appendChild(div);
    });
  });
