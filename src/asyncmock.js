const productos =[
    {nombre: "Top", precio: $3000, id:1, img: "./img/top.jpg" },
    {nombre: "calza", precio: $5000, id:2, img: "./img/calza.jpg" },
    {nombre: "calza larga", precio: $6000, id:3, img: "./img/calzalarga.jpg" },
    {nombre: "Top de atras", precio: $3200, id:4, img: "./img/topdeatras.jpg" }
]

export const getProductos=()=> {
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(productos);
        }, 2000)
    })
}