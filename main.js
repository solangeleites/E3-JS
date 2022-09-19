const pizzas = [
    {
        id: 1,
        name: "Calabresa",
        src: "./img/calabresa.jpg",
        ingredients: ["salsa de tomate", "mozzarella", "longaniza", "oregano"],
        price:1020
    },
    {
        id: 2,
        name: "4 Quesos",
        src: "./img/4quesos.jpg",
        ingredients: ["salsa de tomate", "mozzarella", "parmesano", "provolone", "roquefort"],
        price:1300
    },
    {
        id: 3,
        name: "Vegan",
        src: "./img/vegan.jpg",
        ingredients: ["salsa de tomate", "tomates secos", "espinaca", "queso de almendras"],
        price:100
    },
    {
        id: 4,
        name: "Atun",
        src: "./img/atun.jpg",
        ingredients: ["salsa de tomate", "mozzarella", "atun", "huevo picado", "oregano"],
        price:590
    },
    {
        id: 5,
        name: "Fugazzeta",
        src: "./img/fugazzeta.jpg",
        ingredients: ["cebolla", "mozzarella", "oregano"],
        price:990
    },
    {
        id: 6,
        name: "Rúcula",
        src: "./img/rucula.jpg",
        ingredients: ["mozzarella", "jamon crudo", "rucula", "parmesano"],
        price:1250
    }
]
const d = document;

const $card = d.getElementById('card');
const $input = d.getElementById('input');
const $form = d.getElementById('form');
// console.log($input)
let pizza =  []
// *con la funcion ya creada para guardar en el local storage
// *1- le paso como parametro $card que va a ser el contenedor de las cards que se van a renderizar
// *2- uso el local storage y uso set item para agregar lo que necesito que se guarde en el localS.
// *3- le paso como 'key' el array de pizzas. y segundo el valor que se va  a guardar dentro.
//*4- esto me devuelvo un objet
//*5 -
const guardarEnLocalStorage =  card  =>{
    localStorage.setItem('pizzas', JSON.stringify(card))
}
const buscarPizza = value => {
    let pizzaEncontrada = pizzas.find(pizzas => pizzas.id === Number(value));
    return pizzaEncontrada;
}
const renderPizza = pizzas => {
    const {name, src, ingredients, price} = pizzas;
    return `<div class="card"> 
            <h2>Pizza: ${pizzas.name}</h2>
            <img src= ${pizzas.src} alt="pizza" class="imagen">
            <p class = "ingredientes">Ingredientes: ${pizzas.ingredients}</p>
            <p class = "precio">Precio: 
            $ ${pizzas.price}</p>
            </div>`
}
const addPizza = e => {
    e.preventDefault();

    let guardarValor = $input.value;
    $input.value = '';
    if(!guardarValor.length){
        $card.innerHTML = ` <div class = "errores">
                            <img src="./img/vacio.jpg" class="imagen">
                            <p class="input__vacio">Esta vacío. Por favor ingresa un número del 1 al 6</p>
                            </div>`
        return;
    } else if (guardarValor < 1 || guardarValor > 6){
        $card.innerHTML = ` <div class = "errores">
                            <img src="./img/mal.jfif" class="imagen">
                            <p class="error">Te dije que ingreses un numéro del 1 al 6</p>
                            </div>`
        return;
    }
    else{
        let pizzaEncontrada = buscarPizza(guardarValor);
        $card.innerHTML = renderPizza(pizzaEncontrada);
    }

    // *creo la funcion para guardar en el local storage
    // *le paso como parametro la card que es el lugar donde se va a gaurdar lo renderizado y lo que voy a querer que se guarde en el local storage
    guardarEnLocalStorage(card)
}
const init = () => {
$form.addEventListener ('submit', addPizza);
}
init();

