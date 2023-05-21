const productos =[
    {nombre: "Top", precio: 3000, id: "1", img: "../img/top.jpg", idCat: "2" },
    {nombre: "calza", precio: 5000, id: "2", img: "../img/calza.jpg", idCat: "2" },
    {nombre: "calza larga", precio: 6000, id: "3", img: "../img/calzalarga.jpg", idCat:"3" },
    {nombre: "Top de atras", precio: 3200, id: "4", img: "../img/topdeatras.jpg", idCat:"3" },
]

export const getProductos=()=> {
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(productos);
        }, 100)
    })
}

export const getUnProducto =(id) => {
    return new promise(resolve => {
        setTimeout (() =>{
        const producto = productos.find(prod => prod.id === id)
        resolve(producto);
        
    }, 100)
})
}

export const getProductosPorCategoria =(idCategoria) => {
    return new Promise( resolve => {
        setTimeout ( ()=>{
            const productosCategoria = productos.filter(prod.idCat === idCategoria)
resolve(productosCategoria)
        }, 100)
    })
    }
