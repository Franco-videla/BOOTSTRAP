export function getAllProducts (){
   return fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>(json))
}

export function getOneProducts (id){
   return fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>(json))
}

export function getProductInCategory (categoria){
   return fetch(`https://fakestoreapi.com/products/category/${categoria}`)
            .then(res=>res.json())
            .then(json=>(json))
}