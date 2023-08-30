/* ========== SIDEBAR ========== */
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
});

  searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

  // following are the code to change sidebar button(optional)
function menuBtnChange() {
    if(sidebar.classList.contains("open")){
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    }else {
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
    }
}

//========== MODAL ==========//

const buttons = document.querySelectorAll('.custom-btn');
const modal = document.querySelector('.modal-container');
const closeModal = document.querySelector('.close__btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

//========== SUBMENU ==========//

// Obtener todos los elementos de la lista con submenús
    const menuItems = document.querySelectorAll('.nav-list li[data-submenu]');

    // Agregar evento de clic a cada elemento con submenú
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Ocultar todos los submenús
            const submenus = document.querySelectorAll('.submenu');
            submenus.forEach(submenu => submenu.style.display = 'none');

            // Mostrar el submenú correspondiente al elemento clickeado
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'flex';
            }
        });
    });


//========== PRODUCTOS ==========//

const productInput = document.getElementById("productoInput");
const autocompleteList = document.getElementById("autocompleteList");
const productTableBody = document.getElementById("productTableBody");
const totalValue = document.getElementById("totalValue");

const products = [
    { name: "Cocacola", price: 3000 },
    { name: "Papas", price: 2500 },
    { name: "Chocolatina", price: 1500 },
    { name: "Galletas", price: 2000 },
    { name: "Chicles", price: 1000 },
    { name: "Shampoo", price: 12000 },
    { name: "Acondicionador", price: 10000 },
    { name: "Jabón de baño", price: 3500 },
    { name: "Pasta dental", price: 4000 },
    { name: "Cepillo de dientes", price: 2500 },
    { name: "Toalla", price: 25000 },
    { name: "Sábana", price: 35000 },
    { name: "Almohada", price: 15000 },
    { name: "Pijama", price: 30000 },
    { name: "Pantuflas", price: 8000 },
    { name: "Camiseta", price: 25000 },
    { name: "Pantalón", price: 40000 },
    { name: "Vestido", price: 45000 },
    { name: "Shorts", price: 30000 },
    { name: "Sombrero", price: 10000 },
    { name: "Llavero", price: 5000 },
    { name: "Imán de nevera", price: 3000 },
    { name: "Taza", price: 12000 },
    { name: "Vaso", price: 8000 },
    { name: "Plato", price: 15000 },
    { name: "Cubiertos", price: 10000 },
    { name: "Agua mineral", price: 2000 },
    { name: "Refresco", price: 2500 },
    { name: "Cerveza", price: 5000 },
    { name: "Jugo natural", price: 3000 },
    { name: "Café", price: 3500 },
    { name: "Agua de coco", price: 4000 },
    { name: "Chocolatina", price: 2000 },
    { name: "Papitas", price: 2500 },
    { name: "Chicles", price: 1000 },
    { name: "Jabón en barra", price: 2000 },
    { name: "Gel de ducha", price: 8000 },
    { name: "Crema hidratante", price: 10000 },
    { name: "Pañuelos desechables", price: 1500 },
    { name: "Desodorante", price: 5000 },
    { name: "Gorro", price: 7000 },
    { name: "Bufanda", price: 10000 },
    { name: "Guantes", price: 8000 },
    { name: "Lentes de sol", price: 12000 },
    { name: "Bloqueador solar", price: 15000 },
    { name: "Cepillo para el cabello", price: 2500 },
    { name: "Peine", price: 2000 },
    { name: "Agenda", price: 10000 },
    { name: "Libreta", price: 8000 },
];

productInput.addEventListener("input", () => {
    const inputValue = productInput.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(inputValue));
    
    autocompleteList.innerHTML = "";
    filteredProducts.forEach(product => {
        const option = document.createElement("div");
        option.textContent = product.name;
        option.addEventListener("click", () => {
            productInput.value = product.name;
            autocompleteList.innerHTML = "";
        });
        autocompleteList.appendChild(option);
    });
});

productInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        event.preventDefault();
        const productName = productInput.value;
        const selectedProduct = products.find(product => product.name === productName);
        if (selectedProduct) {
            const quantityInput = document.querySelector('input[name="cantidad"]');
            const quantity = parseInt(quantityInput.value) || 1;
            const value = selectedProduct.price * quantity;
            addToTable(selectedProduct.name, quantity, value);
            productInput.value = "";
            quantityInput.value = "";
        }
    }
});

const quantityInput = document.querySelector('input[name="cantidad"]');
quantityInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        event.preventDefault();
        const productName = productInput.value;
        const selectedProduct = products.find(product => product.name === productName);
        if (selectedProduct) {
            const quantity = parseInt(quantityInput.value) || 1;
            const value = selectedProduct.price * quantity;
            addToTable(selectedProduct.name, quantity, value);
            productInput.value = "";
            quantityInput.value = "";
        }
    }
});


let productsList = [];

function addToTable(product, quantity, value) {
    const row = productTableBody.insertRow();
    row.innerHTML = `
        <td>${product}</td>
        <td>${quantity}</td>
        <td>${value}</td>
        <td><i class="bx bxs-trash delete-icon" onclick="removeFromTable(this)"></i></td>
    `;
    
    productsList.push({ product, quantity, value });
    updateTotal();
}

function removeFromTable(deleteIcon) {
    const row = deleteIcon.closest("tr");
    const index = row.rowIndex - 1;
    row.remove();
    productsList.splice(index, 1);
    updateTotal();
}

function updateTotal() {
    let total = 0;
    productsList.forEach(item => {
        total += parseFloat(item.value) * parseInt(item.quantity);
    });
    totalValue.textContent = `$${total.toFixed(2)}`;
}

function clearForm() {
    productTableBody.innerHTML = "";
    productsList = [];
    totalValue.textContent = "$0.00";
    productInput.value = "";
}


