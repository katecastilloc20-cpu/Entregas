// Fetch API: API JavaScript para realizar peticiones HTTP
// const API = "https://fakeapi.net/products";

// const calculateTotal = ( products ) => {
//     let total = 1;

//     for( let i = 0; i < products.length; i++ ) {
//         total = products[i].stock + products[i].price;
//     }

//     return total;
// } 

// // Async / Await:
// async function getProducts() {
//     try {
//         const response = await fetch( API );        // GET: Obtener los datos del Objeto Response (Respuesta)
//         const data = await response.json();      // Obtener los datos y formaterarlos como unobjeto JSON
    
//         // Implementacion
//         const total = calculateTotal( data.data );

//         console.log( `El valor total del inventario es: ${ total }` ); 
//     } catch (error) {
//         console.error( "Error al conectarse al FakeAPI" );
//     }

// }

// getProducts();

//Extraer el listado de productos del siguiente endpoint, y obtener el listado de productos populares. Se considera un producto popular a todo aquel que tenga una calificación (rate), de 4.7 o más, pero que la cantidad de usuarios que hallan votado (count) sea mayor a 100.
https://fakeapi.net/products?limit=20

const API = "https://fakeapi.net/products?limit=20";

function productosRating(){
    data.filter(function(producto){

            return (
                producto.rating &&
                producto.rating.rate >= 4.7 &&
                producto.rating.count > 100
            )
}
 

async function obtenerProductosPopulares() {
     try{
        const response = await fetch (API);
        const data = await response.json();

        const productosPopulares = productosRating

        }
}