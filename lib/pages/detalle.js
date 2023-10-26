import { getOneProducts, getProductInCategory } from "../service/products.js"

const id = new URLSearchParams(window.location.search).get('id')
//Inicializar elementes
const product_image = document.getElementById("product-image")
const product_title = document.getElementById("product-title")
const product_price = document.getElementById("product-price")
const product_description = document.getElementById("product-description")

const productos_relacionadosContainer = document.getElementById('productos-relacionados')

const fillProductosRelacionados = async (category) => {
    const products = await getProductInCategory(category)

    products.forEach(product => {
    //crear elemento en la categoria
        productos_relacionadosContainer.innerHTML += `
        <div class="col">
            <div class="card h-100">
                <img 
                style="min-height: 300px; max-height: 300px;"
                class="card-image-top"
                    src="${product.image}"
                    alt="">
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">${product.title}</h5>
                        <span>$${product.price}</span>
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center d-flex gap-1 justify-content-center">
                        <a href="" class="btn btn-outline-success mt-auto">
                            Añadir al carrito
                        </a>
                        <a href="/detalle.html?id=${product.id}" class="btn btn-outline-secondary mt-auto">
                        Ver más
                    </a>
                    </div>
                </div>
            </div>
        </div>
        `;
    
    });
}
//Rellenamos los detalles del producto
const fillDetailProduct = async () => {
    const product = await getOneProducts(id)
    console.log(product)
    if (product) {
        product_image.src = product.image
        product_title.innerText = product.title
        product_price.innerText = `$${product.price}`
        product_description.innerText = product.description

        fillProductosRelacionados(product.category)
    }
}

fillDetailProduct()
