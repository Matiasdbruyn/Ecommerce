const Productos = [
    {
        id: 1,
        category: "Cafe Molido Fino",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_713453-MLA45786692718_052021-O.webp",
        description:"Espresso Fuerte",
        price: 4000,
        stock: 50,
    },
    {
        id: 2,
        category: "Cafe Molido Medio",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_713453-MLA45786692718_052021-O.webp",
        description:"Equilibrio Café",
        price: 5000,
        stock: 12,
    },
    {
        id: 3,
        category: "Cafe Molido Grueso",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_713453-MLA45786692718_052021-O.webp",
        description:"Prensa Noble",
        price: 3000,
        stock: 4,
    },
    {
        id: 4,
        category: "Cafe Grano Entero",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_713453-MLA45786692718_052021-O.webp",
        description:"Grano Supremo",
        price: 2000,
        stock: 0,
    },
    {
        id: 5,
        category: "Cafe Molido Fino",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_713453-MLA45786692718_052021-O.webp",
        description:"Toro Negro",
        price: 4000,
        stock: 0,
    },
    {
        id: 6,
        category: "Cafe Molido Medio",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_713453-MLA45786692718_052021-O.webp",
        description:"Brisa Andina",
        price: 5000,
        stock: 12,
    },
    {
        id: 7,
        category: "Cafe Molido Grueso",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_713453-MLA45786692718_052021-O.webp",
        description:"Montaña Clara",
        price: 3000,
        stock: 0,
    },
    {
        id: 8,
        category: "Cafe Grano Entero",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_713453-MLA45786692718_052021-O.webp",
        description:"Noble Grano",
        price: 2000,
        stock: 70,
    },
    {
        id: 9,
        category: "Cafe Molido Fino",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_713453-MLA45786692718_052021-O.webp",
        description:"Alma Oscura",
        price: 4000,
        stock: 50,
    },
    {
        id: 10,
        category: "Cafe Molido Medio",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_713453-MLA45786692718_052021-O.webp",
        description:"Aroma Clásico",
        price: 5000,
        stock: 0,
    },
    {
        id: 11,
        category: "Cafe Molido Grueso",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_713453-MLA45786692718_052021-O.webp",
        description:"Horizonte Café",
        price: 3000,
        stock: 30,
    },
    {
        id: 12,
        category: "Cafe Grano Entero",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_713453-MLA45786692718_052021-O.webp",
        description:"Origen Puro",
        price: 2000,
        stock: 1,
    },
]

export const getProducts = () => {
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(Productos)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(Productos.filter((prod) => prod.category == categoryId))
        }, 1000)
    })
}

export const getProductoById = (productId) => {
    return new Promise((resolve)=> {
        setTimeout( () => {
            resolve(Productos.find((prod)=> prod.id == productId))
        }, 1000)
    })
}