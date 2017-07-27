$(() => {
    let placeholder = $('#northwindplaceholder');
    placeholder.load('/home')
    $('#logolink').click(()=>{
        placeholder.load('/home')
    });
    $('#homelink').click(()=>{
        placeholder.load('/home')
    });
    $('#customerlink').click(()=>{
        placeholder.load('/customers')
    });
    $('#productslink').click(()=>{
        placeholder.load('/products')
    });
    $('#supplierslink').click(()=>{
        placeholder.load('/suppliers')
    });
    $('#categorieslink').click(()=>{
        placeholder.load('/categories')
    });
    $('#orderslink').click(()=>{
        placeholder.load('/orders')
    });
    $('#registerlink').click(()=>{
        placeholder.load('/register')
    });
    


});