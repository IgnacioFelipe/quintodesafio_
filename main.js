alert ("Hola escoge tu producto");

do{
    let option = mostrarMenu();
    if (option === productos.length + 1) break;
    let qty = parseInt(prompt(SelectedQty));

    agregarAlCarro(option,qty);

    resp = prompt('¿Desea agregar mas productos? S/N'); 
} while (resp === "S" | resp === "s");

if (cart > 0){
    alert(`El total de su compra es $${cart}`);
}

alert ("Gracias por su preferencia")
