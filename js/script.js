let carts = document.querySelectorAll('.add-cart');

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', ()=>{
        cartNumbers();
    })
    
}



function cartNumbers (){
    let productNumbers = localStorage.getItem('cartNumbers');
    console.log(productNumbers);


    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers+1);
        document.querySelector('.header span ').textContent = productNumbers+1;


    } else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.header span ').textContent = 1;

    }

/*
    productNumbers = parseInt(productNumbers);
    localStorage.setItem('cartNumbers', 1);

    if (productNumbers) {

        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.numberCart span').textContent= productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.numberCart span').textContent = 1    
    }
    */
}