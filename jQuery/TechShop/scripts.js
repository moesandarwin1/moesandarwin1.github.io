$(document).ready(function(){
    $('.addToCart').click(function(){
        //alert("hello");

        let id = $(this).data('id');
        let name = $(this).data('name');
        let price = $(this).data('price');
        console.log(id,name,price)

        let items={
            id: id,
            name: name,
            price: price,
            qty: 1,
        }
        let itemsString = localStorage.getItem('shops');
        let itemsArray;
        if(itemsString == null){
            itemsArray = [];
        }else{
            itemsArray = JSON.parse(itemsString);
        }


        let status =false;
        $.each(itemsArray, function(i,v){
            if(v.id == id){
                v.qty++;
                status = true;
            }
        })
        if(status == false){
            itemsArray.push(items);
        }

        
        let itemsData = JSON.stringify(itemsArray);
        localStorage.setItem('shops', itemsData);
    })
})