
// м'ясо
let paparoniMany = 0
let bekonMany = 0
let shunkaMany = 0
let chickenMany = 0
// овочі
let olivesMany = 0
let mushroomsMany = 0
let kukurudzaMany = 0
let perecMany = 0
let ananasMany = 0
let tomatoMany = 0
let shpunatMany = 0

let animationRush = false
let haveCheese = false 

// сири
let cheese = {
    fetaMany, motzaMany, cheddarMany
}
cheese.fetaMany = 0
cheese.motzaMany = 0
cheese.cheddarMany = 0

let totalPrice = 35;
function costUptade(){
    $('#pay').html(`З вас <span class="bold">${totalPrice}</span> грн`);
}
let totalAll = 0
let costCheese = 35
let totalCheese = costCheese
function countCheese(cheese) {
    // Спочатку віднімемо попередню вартість сиру з totalPrice
    totalPrice -= totalCheese;

    // Оновимо загальну вартість сиру
    let total = 0;
    for (let key in cheese) {
        total += cheese[key];
    }
    totalCheese = total * costCheese;

    totalPrice += totalCheese;
    costUptade()
    console.log(totalPrice);
    return total;
}




// м'ясо
let sausage = {
    paparoniMany, bekonMany, shunkaMany, chickenMany
}
cheese.fetaMany = 0
cheese.motzaMany = 0
cheese.cheddarMany = 0

let costSausage = 35
let totalSausage = costSausage
function countSausage(sausage) {
    let total = 0;
    for (let key in sausage) {
        total += sausage[key];
    }
    
    totalSausage += costSausage
    if(totalPrice / costSausage !== total){
        totalSausage = total * costSausage
    }
    totalPrice =+ totalSausage
    costUptade()
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
// console.log(animationDuration)
function rotateElement() {
    rotation++; 
    $('.pizzaWrapper').css('transform', `rotate(${rotation}deg)`)
}
setInterval(rotateElement, animationDuration / 360); 




    
// $('.cheeseGroup').hide(0);
$('.sausageGroup').hide(0);
$('.vegetablesGroup').hide(0);


$('#cheese').click(function(){
    $('.cheeseGroup').slideToggle(300);
})
$('#meat').click(function(){
    $('.sausageGroup').slideToggle(300);
})
$('#vegetable').click(function(){
    $('.vegetablesGroup').slideToggle(300);
})

let totalFunctionCheese = countCheese(cheese)


// фета
// $('#minusFeta').click(function () {
//     if(fetaMany < 1){
//         fetaMany = 0
//         totalPrice -= 0;
//     } else{
//         fetaMany--;
//         totalPrice -= 35;
//     }
//     $('#fetaMany').text(`x${cheese.fetaMany}`)
//     costUptade()
// })
$('#plusFeta').click(function () {
    cheese.fetaMany++;
    countCheese(cheese);
    $('#fetaMany').text(`x${cheese.fetaMany}`);
});
// моцарела
// $('#minusMotza').click(function () {
//     if(cheese.motzaMany < 1){
//         cheese.motzaMany = 0
//         totalPrice -= 0;
//     } else{
//         cheese.motzaMany--;
//         totalPrice -= 35;
//     }
//     $('#motzaMany').text(`x${cheese.motzaMany}`)
//     costUptade()
// })
$('#plusMotza').click(function () {
    cheese.motzaMany++;
    countCheese(cheese);
    $('#motzaMany').text(`x${cheese.motzaMany}`);
});
// чедер
$('#minusCheddar').click(function () {
    if(totalFunctionCheese < 1){
        cheese.cheddarMany = 0
        totalCheese -= 0;
    } else{
        cheese.cheddarMany--;
        totalCheese -= costCheese;
        totalPrice -= costCheese
        totalFunctionCheese - 1
        console.log(totalPrice)
    }
    
    $('#cheddarMany').text(`x${cheese.cheddarMany}`)
    costUptade()
})
$('#plusCheddar').click(function () {
    cheese.cheddarMany++;
    countCheese(cheese);
    $('#cheddarMany').text(`x${cheese.cheddarMany}`);
});