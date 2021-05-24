let goods = [...items]
console.log(goods)
for(let i = 0; i < goods.length; i++){

}


const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', function(e){
   

// console.log(modal)
let id
    if(e.target.className === 'cardTopPart'){
        id = e.target.id
    // console.log(e.target.id)
    }
    else if(e.target.parentNode.className === 'cardTopPart'){
        id = e.target.parentNode.id
        // console.log(e.target.parentNode.id)
    }
    const res = goods.find(el => el.id == id)
    // console.log(res)
})







const renderCard = good => {
    const card = document.createElement('card');
    card.className = 'card'
    // card.id = good.id
    // card.onclick = console.log(good.name)
    // card.addEventListener('click')
   
        let mark = function(){
            if(good.orderInfo.reviews === 0){
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
            
            <div class="cardTopPart" id='${(good.id)}'>
            
                    <img class="imgItem" src="img/${good.imgUrl}"width = '200px', min-width = '100px'  alt="picture">
                    <h2>${good.name}</h2>
                    
                    <img class="favorite" src="img/icons/like_empty.svg" alt=".">
                    <div class="reviews">${good.orderInfo.inStock} left in stock</div>
                    <div class="reviews">Price: ${good.price}  $ </div>
                    
                   
                </div>
            <div class="cardFloor">
                        
                        <img class="heart" src="img/icons/like_filled.svg" alt="." >
                        
                        <div class="positiveMark"> ${good.orderInfo.reviews} % positive reviews</br>${mark()}</div>
                        
                        <div class="orders">${getRandomIntInclusive(5, 80)}</br>orders</div>
                        

                    </div>
            `
           
            const btn = document.createElement('button');
            btn.className = 'buttonAdd'
            btn.onclick = function(){
                console.log(good.name)
            }
            btn.innerText = ('Add to cart');
            const cardBody = document.getElementsByClassName('cardTopPart');
            [].forEach.call(cardBody, el => el.appendChild(btn))
            
            
            // const cards = document.querySelectorAll('card');
            // cards.onclick = function () {
            //     console.log(11)
            // }

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
    
    goods.forEach(el =>{
        const card = renderCard(el);
        wrapper.appendChild(card)
        
        
    })
    // goods.forEach.onclick = console.log(good.name)
}

const createModel = function(){
    let modal = document.createElement('div')
    modal.className = 'modal'
    modal.innerHTML = `
    <div class="modal"><.div>
    `
 wrapper.appendChild(modal)
 console.log(modal)
}    
createModel()

renderCards(goods)
