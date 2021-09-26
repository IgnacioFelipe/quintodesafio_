//Esta funcion verifica el stock del producto 

const esStock = (quantity,stock) =>{
    if (quantity > stock) {
        alert( `no tenemos stock suficiente, el stock actual es ${stock}`);
        return false;
        }
        else return true;
}


//Esta funcion agrega los productos seleccionados al carrito // 
//option = opcion seleccionada por cliente // 
//quantity = la cantidad seleccionada por cliente //
const agregarAlCarro = (option, quantity) => {
   const buscar = productos.find(productos=> productos.id === option);

     if (esStock(quantity, buscar.stock)){
       cart += (quantity * buscar.stock);
       productos [option-1].stock -=quantity;
       alert (`${buscar.nombre} fue agregado a la cuenta`);

    }
}


//Funcion del menu, segun productos existentes
//Retorno Id producto elegido 
const mostrarMenu = () => {
    let menu = "Escoge un producto: \n"
    productos.forEach((productos) =>{
        menu += productos.id + ".-" + productos.nombre + "\n";
    })
    menu += (productos.length + 1) + ".- Salir" 
    return parseInt(prompt(menu));
}