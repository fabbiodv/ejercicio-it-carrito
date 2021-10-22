var minusBtn = document.getElementById("minus"),
    plusBtn = document.getElementById("plus"),
    minusBtnJean = document.getElementById("minusJean"),
    plusBtnJean = document.getElementById("plusJean"),
    numberPlace = document.getElementById("numberPlace"),
    numberPlaceJean = document.getElementById("numberPlaceJean"),
    numberPlaceCart =  document.getElementById("numberPlaceCart");
    pricePlace = document.getElementById("red-price"),
    pricePlaceJean = document.getElementById("normal-price"),
    subtotalPlace = document.getElementById("subtotalPlace")
    totalPlace = document.getElementById("totalPlace")
    subtotal=14842
    total=14842
    number = 1,
    numberJean = 1
    numberCart=2;
    priceUnity=7421;
    price = 7421;
    priceJean = 7421;
    min = 1
        
    minusBtn.onclick = function(){
        console.log('rest');
        if (number>min ){
            number = number-1;
            numberCart = numberCart-1;
            numberPlace.innerText = number ; /// Display the value in place of the number
            numberPlaceCart.innerText = numberCart ;
            price = price - priceUnity;
            subtotal = subtotal - priceUnity;
            subtotalPlace.innerText = "$"+subtotal;
            totalPlace.innerText = "$"+subtotal;

        }
    }
    plusBtn.onclick = function(){
        console.log('sum');
        number = number+1;
        numberCart = numberCart+1;
        numberPlace.innerText = number ;
        numberPlaceCart.innerText = numberCart ;
        price = price + priceUnity;
        subtotal = price + priceJean;
        subtotalPlace.innerText = "$"+subtotal;
        totalPlace.innerText = "$"+subtotal;

    }     
        
    minusBtnJean.onclick = function(){
        console.log('rest');
        if (numberJean>min){
            numberJean = numberJean-1;
            numberCart = numberCart-1;
            numberPlaceJean.innerText = numberJean ;
            numberPlaceCart.innerText = numberCart ;
            priceJean = priceJean - priceUnity;
            subtotal = subtotal - priceUnity;
            subtotalPlace.innerText = "$"+subtotal;
            totalPlace.innerText = "$"+subtotal;
        }
    }
    plusBtnJean.onclick = function(){
        console.log('sum');

        numberJean = numberJean+1;
        numberCart = numberCart+1;
        numberPlaceJean.innerText = numberJean ;
        numberPlaceCart.innerText = numberCart ;
        priceJean = priceJean + priceUnity;
        subtotal = price + priceJean;
        subtotalPlace.innerText = "$"+subtotal;
        totalPlace.innerText = "$"+subtotal;
    }     

