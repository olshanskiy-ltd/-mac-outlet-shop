let goods = [...items]
// class Items{

// }
// console.log(goods)
// for(let i = 0; i < goods.length; i++){
//   console.log(items[i])
//   for(let y in items[i]){
//   console.log(y)
//   }

// }
let goodInfoKeys 
for(let key in goods[1]){
    console.log(key)
   
}


const mainPage = document.querySelector('.mainPage')

const cardsOfGood = document.querySelector('.cardsOfGood');

// cardsOfGood.addEventListener('click', function(e){
   
    function getRandomIntInclusive(x, min, max) {
        if(x.orderInfo.reviews === 0){
            return 0
        }
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }

const modalWrapper = document.createElement('div')
modalWrapper.className = 'hidden modalWrapper'
mainPage.appendChild(modalWrapper)

const modal = document.createElement('div')
modal.className = 'modal'
modal.innerText = ` info about the good `
modalWrapper.appendChild(modal)

modalWrapper.addEventListener('click', function(e){
    if(e.target.classList.contains('modalWrapper')){
        modalWrapper.classList.toggle('hidden')
    }
    else{
        e.stopPropagation()
        return
    }
    
    
    // console.log(this)


})



    const renderCard = good => {
        const card = document.createElement('card');
        card.className = 'card'
        card.addEventListener('click', function(e){
            if(e.target.classList.contains('buttonAdd')){
                e.stopPropagation()
                console.log(good.name)
            return
                
            }
            modalWrapper.classList.toggle('hidden')
            modal.innerHTML= ` <div class="reviewsOfItem"><h2>${good.name}</h2> 
            <ul>
            
            <li>${good.name} </li>
            <li>category ${good.category} </li>
            
            <li>display ${good.display}" </li> 
            <li>colors ${good.color}</li> 
            <li>$ ${good.price} </li> 
            <li>RAM ${good.ram} </li> 
            <li>front camera ${good.camera.front} </li> 
            <li>back camera ${good.camera.back} </li> 
            <li>OS ${good.os} </li> 
            <li>complect: ${good.InTheBox} </li> 
            </ul>
            </div>
            `
                      
            // console.log(modalWrapper)
            // console.log(good)
        })
    
   
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
            
            <div class="cardTopPart" id='${good.id}'>
            
                    <img class="imgItem" src="img/${good.imgUrl}"width = '200px', min-width = '100px'  alt="picture">
                    <h2>${good.name}</h2>
                    
                    <img class="favorite" src="img/icons/like_empty.svg" alt=".">
                    <div class="reviews">${good.orderInfo.inStock} left in stock</div>
                    <div class="reviews">Price: ${good.price}  $ </div>
                    
                    <button class="buttonAdd">Add to cart</button>
                   
                </div>
                <div class="cardFloor">
                        
                        <img class="heart" src="img/icons/like_filled.svg" alt="." >
                        
                        <div class="positiveMark"> ${good.orderInfo.reviews} % positive reviews</br>${mark()}</div>
                        
                        <div class="orders">${getRandomIntInclusive(good, 5, 80)}</br>orders</div>

                      

                    </div>
            `
    
    return card;

}

 

const renderCards = goods => {
    
    goods.forEach(el =>{
        const card = renderCard(el);
        cardsOfGood.appendChild(card)
        
        
    })
    // goods.forEach.onclick = console.log(good.name)
}



renderCards(goods)




const filterOfPrice = document.getElementById('filterOfPrice')
const needHeed = document.getElementById('needHeed')

filterOfPrice.addEventListener('click', function(){
    // this.style.backgroundColor = '#FFFFFF'
    let hasClass = needHeed.classList.contains('hiddenClass')

    if(!hasClass){
        needHeed.classList.add('hiddenClass')

    }
    else if(hasClass){
        needHeed.classList.remove('hiddenClass')
    }

    // console.log(event.target)
})

const callFilterOfColor = document.getElementById('callFilterOfColor')
const filtresOfColor = document.getElementById('filtresOfColor')

callFilterOfColor.addEventListener('click', function(){
    
    let hasClass = filtresOfColor.classList.contains('hiddenClass')

    
    if(!hasClass){
        filtresOfColor.classList.add('hiddenClass')

    }
    else if(hasClass){
        filtresOfColor.classList.remove('hiddenClass')
    }

})

