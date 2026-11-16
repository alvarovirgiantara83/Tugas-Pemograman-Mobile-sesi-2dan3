function showPage(page) {

    document.querySelectorAll(".page").forEach(function(item) {
        item.classList.remove("active");
    });

    document.getElementById(page).classList.add("active");

    window.scrollTo(0, 0);
}


function searchProduct() {

    let keyword =
        document.getElementById("search").value.toLowerCase();

    let products =
        document.querySelectorAll(".product");

    products.forEach(function(product) {

        let name =
            product.querySelector("h3")
            .innerText
            .toLowerCase();

        if (name.includes(keyword)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}


function filterCategory(category) {

    let products =
        document.querySelectorAll(".product");

    products.forEach(function(product) {

        if (product.dataset.category === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}