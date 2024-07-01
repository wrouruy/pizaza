let totalPrice = 35;

// сири
let costCheese = 35
let cheese = {
    fetaMany, motzaMany, cheddarMany
}
cheese.fetaMany = 0
cheese.motzaMany = 0
cheese.cheddarMany = 0


// м'ясо
let costSausage = 35
let sausage = {
    paparoniMany, bekonMany, shunkaMany, chickenMany
}
sausage.paparoniMany = 0
sausage.bekonMany = 0
sausage.shunkaMany = 0
sausage.chickenMany = 0

// овочі
let costVegetable = 35
let vegetable = {
    olivesMany, mushroomsMany, kukurudzaMany, perecMany, ananasMany, tomatoMany, shpunatMany
}
vegetable.olivesMany = 0
vegetable.mushroomsMany = 0
vegetable.kukurudzaMany = 0
vegetable.perecMany = 0
vegetable.ananasMany = 0
vegetable.tomatoMany = 0
vegetable.shpunatMany = 0

// соуси
let costSauces = 35
let sauces = {
    ketchupMany, bbqMany, chasnykMany, alfredoMany
}
sauces.ketchupMany = 0
sauces.bbqMany = 0
sauces.chasnykMany = 0
sauces.alfredoMany = 0


function costUptade(){
    $('#pay').html(`З вас <span class="bold">${totalPrice}</span> грн`);
}
costUptade()



let height = innerHeight
let pizzaHeight = height
let halfPizzaHeight = pizzaHeight / 2


$('.pizzaWrapper').css('width', pizzaHeight)
$('.pizzaWrapper').css('height', pizzaHeight)
$('.pizzaWrapper').css('right', `-${halfPizzaHeight}`)



// оберт піци
let rotation = 0;
let animationDuration = $('.pizzaWrapper').css('transition')
function rotateElement() {
    rotation++; 
    $('.pizzaWrapper').css('transform', `rotate(${rotation}deg)`)
}
setInterval(rotateElement, animationDuration / 360); 




    
$('.cheeseGroup').hide(0);
$('.sausageGroup').hide(0);
$('.vegetablesGroup').hide(0);
$('.saucesGroup').hide(0);


$('#cheese').click(function(){
    $('.cheeseGroup').slideToggle(300);
})
$('#meat').click(function(){
    $('.sausageGroup').slideToggle(300);
})
$('#vegetable').click(function(){
    $('.vegetablesGroup').slideToggle(500);
})
$('#sauces').click(function(){
    $('.saucesGroup').slideToggle(300);
})

// сир
// фета
$('#minusFeta').click(function () {
    if(cheese.fetaMany < 1){
        cheese.motzaMany = 0
    } else {
        $('#fetaMany').text(`x${cheese.fetaMany - 1}`)
        totalPrice = totalPrice - costCheese
        cheese.fetaMany--
    }
    $('#cheddarMany').text(`x${cheese.cheddarMany}`)
    costUptade()
    if(cheese.fetaMany > 0){
        $('#fetaFixed').css('display', 'flex')
    } else if(cheese.fetaMany <= 0){
        $('#fetaFixed').css('display', 'none')
    }
})
$('#plusFeta').click(function () {
    cheese.fetaMany++;
    totalPrice = totalPrice + costCheese
    costUptade()
    $('#fetaMany').text(`x${cheese.fetaMany}`);
    if(cheese.fetaMany > 0){
        $('#fetaFixed').css('display', 'flex')
    } else if(cheese.fetaMany <= 0){
        $('#fetaFixed').css('display', 'none')
    }
});
// моцарела
$('#minusMotza').click(function () {
    if(cheese.motzaMany < 1){
        cheese.motzaMany = 0
    } else {
        $('#motzaMany').text(`x${cheese.motzaMany - 1}`)
        totalPrice = totalPrice - costCheese
        cheese.motzaMany--
    }
    $('#cheddarMany').text(`x${cheese.cheddarMany}`)
    costUptade()
    if(cheese.motzaMany > 0){
        $('#motzaFixed').css('display', 'flex')
    } else if(cheese.motzaMany <= 0){
        $('#motzaFixed').css('display', 'none')
    }
})
$('#plusMotza').click(function () {
    cheese.motzaMany++;
    totalPrice = totalPrice + costCheese
    costUptade()
    $('#motzaMany').text(`x${cheese.motzaMany}`);
    if(cheese.motzaMany > 0){
        $('#motzaFixed').css('display', 'flex')
    } else if(cheese.motzaMany <= 0){
        $('#motzaFixed').css('display', 'none')
    }
});
// чедер
$('#minusCheddar').click(function () {
    if(cheese.cheddarMany < 1){
        cheese.cheddarMany = 0
    } else {
        $('#cheddarMany').text(`x${cheese.cheddarMany - 1}`)
        totalPrice = totalPrice - costCheese
        cheese.cheddarMany--
    }
    $('#cheddarMany').text(`x${cheese.cheddarMany}`)
    costUptade()
    if(cheese.cheddarMany > 0){
        $('#cheddarFixed').css('display', 'flex')
    } else if(cheese.cheddarMany <= 0){
        $('#cheddarFixed').css('display', 'none')
    }
})
$('#plusCheddar').click(function () {
    cheese.cheddarMany++;
    totalPrice = totalPrice + costCheese
    costUptade()
    $('#cheddarMany').text(`x${cheese.cheddarMany}`);
    if(cheese.cheddarMany > 0){
        $('#cheddarFixed').css('display', 'flex')
    } else if(cheese.cheddarMany <= 0){
        $('#cheddarFixed').css('display', 'none')
    }
});

// м'ясо
// пепероні
$('#minusPaparoni').click(function () {
    if(sausage.paparoniMany < 1){
        sausage.paparoniMany = 0
    } else {
        $('#paparoniMany').text(`x${sausage.paparoniMany - 1}`)
        totalPrice = totalPrice - costSausage
        sausage.paparoniMany--
    }
    $('#paparoniMany').text(`x${sausage.paparoniMany}`)
    costUptade()

    if(sausage.paparoniMany > 0){
        $('#peperoniFixed').css('display', 'flex')
    } else if(sausage.paparoniMany <= 0){
        $('#peperoniFixed').css('display', 'none')
    }
})
$('#plusPaparoni').click(function () {
    sausage.paparoniMany++;
    totalPrice = totalPrice + costSausage
    costUptade()
    $('#paparoniMany').text(`x${sausage.paparoniMany}`);
    if(sausage.paparoniMany > 0){
        $('#peperoniFixed').css('display', 'flex')
    } else if(sausage.paparoniMany <= 0){
        $('#peperoniFixed').css('display', 'none')
    }
});
// бекон
$('#minusBekon').click(function () {
    if(sausage.bekonMany < 1){
        sausage.bekonMany = 0
    } else {
        $('#bekonMany').text(`x${sausage.bekonMany - 1}`)
        totalPrice = totalPrice - costSausage
        sausage.bekonMany--
    }
    $('#paparoniMany').text(`x${sausage.paparoniMany}`)
    costUptade()

    if(sausage.bekonMany > 0){
        $('#bekonFixed').css('display', 'flex')
    } else if(sausage.bekonMany <= 0){
        $('#bekonFixed').css('display', 'none')
    }
})
$('#plusBekon').click(function () {
    sausage.bekonMany++;
    totalPrice = totalPrice + costSausage
    costUptade()
    $('#bekonMany').text(`x${sausage.bekonMany}`);

    if(sausage.bekonMany > 0){
        $('#bekonFixed').css('display', 'flex')
    } else if(sausage.bekonMany <= 0){
        $('#bekonFixed').css('display', 'none')
    }
});
// шинка
$('#minusShunka').click(function () {
    if(sausage.shunkaMany < 1){
        sausage.shunkaMany = 0
    } else {
        $('#shunkaMany').text(`x${sausage.shunkaMany - 1}`)
        totalPrice = totalPrice - costSausage
        sausage.shunkaMany--
    }
    $('#shunkaMany').text(`x${sausage.shunkaMany}`)
    costUptade()

    if(sausage.shunkaMany > 0){
        $('#shunkaFixed').css('display', 'flex')
    } else if(sausage.shunkaMany <= 0){
        $('#shunkaFixed').css('display', 'none')
    }
})
$('#plusShunka').click(function () {
    sausage.shunkaMany++;
    totalPrice = totalPrice + costSausage
    costUptade()
    $('#shunkaMany').text(`x${sausage.shunkaMany}`);
    if(sausage.shunkaMany > 0){
        $('#shunkaFixed').css('display', 'flex')
    } else if(sausage.shunkaMany <= 0){
        $('#shunkaFixed').css('display', 'none')
    }
});
// курка
$('#minusChicken').click(function () {
    if(sausage.chickenMany < 1){
        sausage.chickenMany = 0
    } else {
        $('#chickenMany').text(`x${sausage.chickenMany - 1}`)
        totalPrice = totalPrice - costSausage
        sausage.chickenMany--
    }
    $('#chickenMany').text(`x${sausage.chickenMany}`)
    costUptade()

    if(sausage.chickenMany > 0){
        $('#chikenFixed').css('display', 'flex')
    } else if(sausage.chickenMany <= 0){
        $('#chikenFixed').css('display', 'none')
    }
})
$('#plusChicken').click(function () {
    sausage.chickenMany++;
    totalPrice = totalPrice + costSausage
    costUptade()
    $('#chickenMany').text(`x${sausage.chickenMany}`);
    if(sausage.chickenMany > 0){
        $('#chikenFixed').css('display', 'flex')
    } else if(sausage.chickenMany <= 0){
        $('#chikenFixed').css('display', 'none')
    }
});

// овочі
// оливки
$('#minusOlives').click(function () {
    if(vegetable.olivesMany < 1){
        vegetable.olivesMany = 0
    } else {
        $('#olivesMany').text(`x${vegetable.olivesMany - 1}`)
        totalPrice = totalPrice - costSausage
        vegetable.olivesMany--
    }
    $('#olivesMany').text(`x${vegetable.olivesMany}`)
    costUptade()

    if(vegetable.olivesMany > 0){
        $('#olivesFixed').css('display', 'flex')
    } else if(vegetable.olivesMany <= 0){
        $('#olivesFixed').css('display', 'none')
    }
})
$('#plusOlives').click(function () {
    vegetable.olivesMany++;
    totalPrice = totalPrice + costSausage
    costUptade()
    $('#olivesMany').text(`x${vegetable.olivesMany}`);
    if(vegetable.olivesMany > 0){
        $('#olivesFixed').css('display', 'flex')
    } else if(vegetable.olivesMany <= 0){
        $('#olivesFixed').css('display', 'none')
    }
});
// шампіньйони
$('#minusMushrooms').click(function () {
    if(vegetable.mushroomsMany < 1){
        vegetable.mushroomsMany = 0
    } else {
        $('#mushroomsMany').text(`x${vegetable.mushroomsMany - 1}`)
        totalPrice = totalPrice - costSausage
        vegetable.mushroomsMany--
    }
    $('#mushroomsMany').text(`x${vegetable.mushroomsMany}`)
    costUptade()

    if(vegetable.mushroomsMany > 0){
        $('#mushroomFixed').css('display', 'flex')
    } else if(vegetable.mushroomsMany <= 0){
        $('#mushroomFixed').css('display', 'none')
    }
})
$('#plusMushrooms').click(function () {
    vegetable.mushroomsMany++;
    totalPrice = totalPrice + costSausage
    costUptade()
    $('#mushroomsMany').text(`x${vegetable.mushroomsMany}`);
    if(vegetable.mushroomsMany > 0){
        $('#mushroomFixed').css('display', 'flex')
    } else if(vegetable.mushroomsMany <= 0){
        $('#mushroomFixed').css('display', 'none')
    }
});
// кукурудза
$('#minusKukurudza').click(function () {
    if(vegetable.kukurudzaMany < 1){
        vegetable.kukurudzaMany = 0
    } else {
        $('#kukurudzaMany').text(`x${vegetable.kukurudzaMany - 1}`)
        totalPrice = totalPrice - costSausage
        vegetable.kukurudzaMany--
    }
    $('#kukurudzaMany').text(`x${vegetable.kukurudzaMany}`)
    costUptade()
    if(vegetable.kukurudzaMany > 0){
        $('#kukurudzaFixed').css('display', 'flex')
    } else if(vegetable.kukurudzaMany <= 0){
        $('#kukurudzaFixed').css('display', 'none')
    }
})
$('#plusKukurudza').click(function () {
    vegetable.kukurudzaMany++;
    totalPrice = totalPrice + costSausage
    costUptade()
    $('#kukurudzaMany').text(`x${vegetable.kukurudzaMany}`);
    if(vegetable.kukurudzaMany > 0){
        $('#kukurudzaFixed').css('display', 'flex')
    } else if(vegetable.kukurudzaMany <= 0){
        $('#kukurudzaFixed').css('display', 'none')
    }
});
// перець
$('#minusPerec').click(function () {
    if(vegetable.perecMany < 1){
        vegetable.perecMany = 0
    } else {
        $('#perecMany').text(`x${vegetable.perecMany - 1}`)
        totalPrice = totalPrice - costSausage
        vegetable.perecMany--
    }
    $('#perecMany').text(`x${vegetable.perecMany}`)
    costUptade()

    if(vegetable.perecMany > 0){
        $('#perecFixed').css('display', 'flex')
    } else if(vegetable.perecMany <= 0){
        $('#perecFixed').css('display', 'none')
    }
})
$('#plusPerec').click(function () {
    vegetable.perecMany++;
    totalPrice = totalPrice + costSausage
    costUptade()
    $('#perecMany').text(`x${vegetable.perecMany}`)
    if(vegetable.perecMany > 0){
        $('#perecFixed').css('display', 'flex')
    } else if(vegetable.perecMany <= 0){
        $('#perecFixed').css('display', 'none')
    }
});
// ананас
$('#minusAnanas').click(function () {
    if(vegetable.ananasMany < 1){
        vegetable.ananasMany = 0
    } else {
        $('#ananasMany').text(`x${vegetable.ananasMany - 1}`)
        totalPrice = totalPrice - costSausage
        vegetable.ananasMany--
    }
    $('#ananasMany').text(`x${vegetable.ananasMany}`)
    costUptade()

    if(vegetable.ananasMany > 0){
        $('#ananasFixed').css('display', 'flex')
    } else if(vegetable.ananasMany <= 0){
        $('#ananasFixed').css('display', 'none')
    }
})
$('#plusAnanas').click(function () {
    vegetable.ananasMany++;
    totalPrice = totalPrice + costSausage
    costUptade()
    $('#ananasMany').text(`x${vegetable.ananasMany}`);
    if(vegetable.ananasMany > 0){
        $('#ananasFixed').css('display', 'flex')
    } else if(vegetable.ananasMany <= 0){
        $('#ananasFixed').css('display', 'none')
    }
});
// помідори
$('#minusTomato').click(function () {
    if(vegetable.tomatoMany < 1){
        vegetable.tomatoMany = 0
    } else {
        $('#tomatoMany').text(`x${vegetable.tomatoMany - 1}`)
        totalPrice = totalPrice - costSausage
        vegetable.tomatoMany--
    }
    $('#tomatoMany').text(`x${vegetable.tomatoMany}`)
    costUptade()

    if(vegetable.tomatoMany > 0){
        $('#tomatoFixed').css('display', 'flex')
    } else if(vegetable.tomatoMany <= 0){
        $('#tomatoFixed').css('display', 'none')
    }
})
$('#plusTomato').click(function () {
    vegetable.tomatoMany++;
    totalPrice = totalPrice + costSausage
    costUptade()
    $('#tomatoMany').text(`x${vegetable.tomatoMany}`);
    if(vegetable.tomatoMany > 0){
        $('#tomatoFixed').css('display', 'flex')
    } else if(vegetable.tomatoMany <= 0){
        $('#tomatoFixed').css('display', 'none')
    }
});
// шпинат
$('#minusShpunat').click(function () {
    if(vegetable.shpunatMany < 1){
        vegetable.shpunatMany = 0
    } else {
        $('#shpunatMany').text(`x${vegetable.shpunatMany - 1}`)
        totalPrice = totalPrice - costSausage
        vegetable.shpunatMany--
    }
    $('#shpunatMany').text(`x${vegetable.shpunatMany}`)
    costUptade()

    if(vegetable.shpunatMany > 0){
        $('#shpunatFixed').css('display', 'flex')
    } else if(vegetable.shpunatMany <= 0){
        $('#shpunatFixed').css('display', 'none')
    }
})
$('#plusShpunat').click(function () {
    vegetable.shpunatMany++;
    totalPrice = totalPrice + costSausage
    costUptade()
    $('#shpunatMany').text(`x${vegetable.shpunatMany}`);
    if(vegetable.shpunatMany > 0){
        $('#shpunatFixed').css('display', 'flex')
    } else if(vegetable.shpunatMany <= 0){
        $('#shpunatFixed').css('display', 'none')
    }
});

// соуси
// кетчуп
$('#minusKetchup').click(function () {
    if(sauces.ketchupMany < 1){
        sauces.ketchupMany = 0
    } else {
        $('#ketchupMany').text(`x${sauces.ketchupMany - 1}`)
        totalPrice = totalPrice - costSauces
        sauces.ketchupMany--
    }
    $('#ketchupMany').text(`x${sauces.ketchupMany}`)
    costUptade()
})
$('#plusKetchup').click(function () {
    sauces.ketchupMany++;
    totalPrice = totalPrice + costSauces
    costUptade()
    $('#ketchupMany').text(`x${sauces.ketchupMany}`);
});
// барбек'ю
$('#minusBBQ').click(function () {
    if(sauces.bbqMany < 1){
        sauces.bbqMany = 0
    } else {
        $('#bbqMany').text(`x${sauces.bbqMany - 1}`)
        totalPrice = totalPrice - costSauces
        sauces.bbqMany--
    }
    $('#bbqMany').text(`x${sauces.bbqMany}`)
    costUptade()
})
$('#plusBBQ').click(function () {
    sauces.bbqMany++;
    totalPrice = totalPrice + costSauces
    costUptade()
    $('#bbqMany').text(`x${sauces.bbqMany}`);
});
// соус-часник
$('#minusGarlic').click(function () {
    if(sauces.chasnykMany < 1){
        sauces.chasnykMany = 0
    } else {
        $('#chasnykMany').text(`x${sauces.chasnykMany - 1}`)
        totalPrice = totalPrice - costSauces
        sauces.chasnykMany--
    }
    $('#chasnykMany').text(`x${sauces.chasnykMany}`)
    costUptade()
})
$('#plusGarlic').click(function () {
    sauces.chasnykMany++;
    totalPrice = totalPrice + costSauces
    costUptade()
    $('#chasnykMany').text(`x${sauces.chasnykMany}`);
});
// альфредо
$('#minusAlfredo').click(function () {
    if(sauces.alfredoMany < 1){
        sauces.alfredoMany = 0
    } else {
        $('#alfredoMany').text(`x${sauces.alfredoMany - 1}`)
        totalPrice = totalPrice - costSauces
        sauces.alfredoMany--
    }
    $('#alfredoMany').text(`x${sauces.alfredoMany}`)
    costUptade()
})
$('#plusAlfredo').click(function () {
    sauces.alfredoMany++;
    totalPrice = totalPrice + costSauces
    costUptade()
    $('#alfredoMany').text(`x${sauces.alfredoMany}`);
});


$('.pizzaWrapper').mouseenter(function(){
    $('#follower').css('display', 'flex')
})
$('.pizzaWrapper').mouseleave(function(){
    $('#follower').css('display', 'none')
})

document.addEventListener('mousemove', function(e) { 
    let follower = document.getElementById('follower'); 
    let xPos = e.clientX - (follower.offsetWidth / 2); 
    let yPos = e.clientY - (follower.offsetHeight / 2); 
    $('#follower').css(`left`, (xPos - 40)  + 'px'); 
    $('#follower').css(`top`, (yPos - 40) + 'px'); 
});