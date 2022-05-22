const domainList = [
    {
        domainName: "example1",
        domainExtension: ".ge",
        price: 299,
        categories: [1,3]
    },
    {
        domainName: "example2",
        domainExtension: ".com",
        price: 299,
        categories: [2]
    },
    {
        domainName: "example3",
        domainExtension: ".edu",
        price: 299,
        categories: [3,2]
    },
    {
        domainName: "example4",
        domainExtension: ".ge",
        price: 299,
        categories: [2,1]
    },
    {
        domainName: "example5",
        domainExtension: ".org",
        price: 299,
        categories: [1,3]
    }
]


$('document').ready(function(){
    addProducts();
    addToCart();

   function addProducts(){
   domainList.forEach((obj) => {
    let products = `<div class="each_product">
            <div class="each_product_wrap"> <button class="arrow_btn">  </button> <p class="product_name">${obj.domainName + obj.domainExtension}</p> <div class="product_price"> <span class="price_one">${obj.price} $ </span>
            <span class="price_two">${obj.price}  ₾ </span> </div> <button class="cart_btn"> <p class="add_cart"><span>დამატება</span><img src="assets/cart.svg" alt="cart"></p> </button> </div> </div>`;
            $('.product_wrap').append(products);

   });
}

function addToCart(){
   let addItem = 0;
   $('.cart_btn').one("click", function(){
       $(this).addClass('active');
       let cart_inside = '';
       cart_inside += '<p class="already_cart"> <img src="assets/Group 4868.svg"" alt="checkmark">კალათაშია </p>';
       $(this).siblings('.product_price').addClass('active');      
       $(this).append(cart_inside);
   
       addItem += 1;
       let cartcount = document.querySelector('.cart_count');
       cartcount.innerHTML = addItem;
       
     
       localStorage.setItem('cart', addItem);
       
   });

  
   
}
let categorie;
$('.each_checkbox').click(function(){
    $('.each_checkbox').prop('checked', false);
    categorie = this;
    $(categorie).prop('checked', true);
    
    if (categorie.checked){
        $( ".product_wrap" ).empty();
        let products = document.querySelectorAll('.each_product');
        let value = categorie.value;


        domainList.forEach((obj) => {
            if(categorie.value == obj.categories[0] || categorie.value == obj.categories[1] ){
            let products = `<div class="each_product">
            <div class="each_product_wrap"> <button class="arrow_btn">  </button> <p class="product_name">${obj.domainName + obj.domainExtension}</p> <div class="product_price"> <span class="price_one">${obj.price} $ </span>
            <span class="price_two">${obj.price}  ₾ </span> </div> <button class="cart_btn"> <p class="add_cart"><span>დამატება</span><img src="assets/cart.svg" alt="cart"></p> </button> </div> </div>`;
            $('.product_wrap').append(products);
            }
            });
       /*for(let i = 0 ; i < products.length; i++){
        let prCategories = products[i].getAttribute('categories');
        if (prCategories.indexOf(value) > -1)
        {
            $(products[i]).css("display","block");
        }else{
            $(products[i]).css("display","none");
        }
        }*/
    }

});



 $('.each_checkbox_domain').click(function(){
    $('.each_checkbox_domain').prop('checked', false);
    let domain = this;
    $(domain).prop('checked', true);
    
    if (domain.checked){
        $(".product_wrap").empty();
        let products = document.querySelectorAll('.each_product');
        let value = domain.value;

        domainList.forEach((obj) => {
            if(value == obj.domainExtension ){
            let products = `<div class="each_product">
            <div class="each_product_wrap"> <button class="arrow_btn">  </button> <p class="product_name">${obj.domainName + obj.domainExtension}</p> <div class="product_price"> <span class="price_one">${obj.price} $ </span>
            <span class="price_two">${obj.price}  ₾ </span> </div> <button class="cart_btn"> <p class="add_cart"><span>დამატება</span><img src="assets/cart.svg" alt="cart"></p> </button> </div> </div>`;
            $('.product_wrap').append(products);
            }
            });
}
});



$('.input_name_search').keyup(function(){
    let products = document.querySelectorAll('.each_product')
    for (i = 0; i < products.length; i++) {
        let productId = products[i].getAttribute('whole-name');
        var valThis = $(this).val().toLowerCase();
        if (productId !== valThis) {
            $(products[i]).css("display","none");
            
        }else if(productId == valThis ){
            $(products[i]).css("display","block");
        }
      }


});

});