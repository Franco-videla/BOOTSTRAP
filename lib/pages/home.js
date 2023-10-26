import { getAllProducts } from "../service/products.js"

//instancias de elementos

const contenedor_trabajo = document.getElementById("contenedor-trabajo")
const contenedor_Administrar = document.getElementById("contenedor-administrar")
const contenedor_Modificar = document.getElementById("contenedor-modificar")
const contenedor_Comprar = document.getElementById("contenedor-comprar")

const fillProducts = async ()=>{
    const products = await getAllProducts() 

products.forEach(product => {
    const category = product.category


let container
if (category == "men's clothing") {
    container = contenedor_trabajo
}else if(category == "jewelery"){
    container = contenedor_Administrar
}else if(category == "electronics"){
    container = contenedor_Modificar
}else if(category == "women's clothing"){
    container = contenedor_Comprar
}
//crear elemento en la categoria
    container.innerHTML += `
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
                <div class="text-center" d-flex gap-1>
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
    `
});
    
}

fillProducts()
