const productos =[
    {nombre: "Calza A", precio: 6000, id: "3",stock:10, img: "../img/Calza.jpg", idCat:"3" },
    {nombre: "Calza B", precio: 5000, id: "2",stock:10, img: "../img/Calza1.jpg", idCat: "3" }, 
    {nombre: "Top 1", precio: 3200, id: "4",stock:10, img: "../img/Top2.jpg", idCat:"3" },
    {nombre: "Top 2", precio: 3000, id: "1",stock:10, img: "../img/Top1.jpg", idCat: "3" },
    {nombre: "Over 1", precio: 3000, id: "5",stock:10, img: "../img/Over1.jpg", idCat: "2" },
    {nombre: "Over 2", precio: 3000, id: "6",stock:10, img: "../img/Over2.jpg", idCat: "2" },
    {nombre: "Over 3", precio: 3000, id: "7",stock:10, img: "../img/Over3.jpg", idCat: "2" },
    {nombre: "Over 4", precio: 3000, id: "8",stock:10, img: "../img/Over4.jpg", idCat: "2" },
    {nombre: "Over 5", precio: 3000, id: "9",stock:10, img: "../img/Over5.jpg", idCat: "2" },
]

export const getProductos=()=> {
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(productos);
        }, 100)
    })
}

export const getUnProducto =(id) => {
    return new Promise(resolve => {
        setTimeout (() =>{
        const producto = productos.find(prod => prod.id === id)
        resolve(producto);
        
    }, 100)
})
}

export const getProductosPorCategoria =(idCategoria) => {
    return new Promise( resolve => {
        setTimeout ( ()=>{
            const productosCategoria = productos.filter(prod=> prod.idCat === idCategoria)
resolve(productosCategoria)
        }, 100)
    })
    }
