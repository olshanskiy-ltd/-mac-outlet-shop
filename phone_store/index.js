let goods = [...items]
console.log(goods)









const renderCard = good => {
    const card = document.createElement('card');
    card.className = 'card'
    let mark = function(){
        if(good.orderInfo.reviews == 0){
            return 'no reviews yet'
        }
        
        else if(good.orderInfo.reviews > 50){
            return 'above average'
        }
        else if(good.orderInfo.reviews === 50){
            return 'average'
        }
        else if(good.orderInfo.reviews < 50){
            return 'below average'
        }
        
    }

    card.innerHTML = `
    <div class="cardTopPart">
        <img class="imgItem" src="/img/${good.imgUrl}"width = '200px', min-width = '100px'  alt="picture">
        <h2>${good.name}</2>
        
        <img class="favorite" src="/img/icons/like_empty.svg" alt=".">
        <div class="reviews">${good.orderInfo.inStock} left in stock</div>
        <div class="reviews">Price: ${good.price}  $ </div>
        
        <button class="buttonAdd">Add to cart</button>
    </div>
        <div class="cardFloor">
                
                <img class="heart" src="/img/icons/like_filled.svg" alt="." >
                
                <div class="positiveMark"> ${good.orderInfo.reviews} % positive reviews</br>${mark()}</div>
                
                <div class="orders">${getRandomIntInclusive(5, 80)}</br>orders</div>
                

            </div>
`


function getRandomIntInclusive(min, max) {
    if(good.orderInfo.reviews === 0){
        return 0
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }
return card;

}
 

const renderCards = goods => {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = '';
    goods.forEach(item =>{
        const card = renderCard(item);
        wrapper.appendChild(card)
    })
}

renderCards(goods.splice(0))