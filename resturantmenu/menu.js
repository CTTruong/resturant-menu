
let dishList = document.getElementById('dishList')
let starters = document.getElementById('starters')
let entrees = document.getElementById('entrees')
let desserts = document.getElementById('desserts')
let menuList = document.getElementById('menuList')






dishes.map(dish => {

  let dishItem = `
  <li>
  <img src="${dish.imageURL}" class="picture"/>
  <label>${dish.title}</label>
  <p>${dish.description}</p>
  <span>${dish.price}</span>
  </li>
  `

    menuList.insertAdjacentHTML('beforeend',dishItem)







starters.addEventListener("click",function(){
  menuList.innerHTML = ""


for(let i=0; i<dishes.length; i++){
  let dish = dishes[i]
  let image = dish.imageURL
  let title = dish.title
  let description = dish.description
  let price = dish.price
  let course = dish.course
  let dishItem = `
  <li>
  <img src="${image}" class="picture"/>
  <label>${title}</label>
  <p>${description}</p>
  <span>${price}</span>

  </li>
  `
  if(course == "Starters"){

    menuList.insertAdjacentHTML('beforeend',dishItem)

  }
}
})





entrees.addEventListener("click",function(){
  menuList.innerHTML = ""

for(let i=0; i<dishes.length; i++){
  let dish = dishes[i]
  let image = dish.imageURL
  let title = dish.title
  let description = dish.description
  let price = dish.price
  let course = dish.course
  let dishItem = `
  <li>
  <img src="${image}" class="picture"/>
  <label>${title}</label>
  <p>${description}</p>
  <span>${price}</span>

  </li>
  `
  if(course == "Entrees"){

    menuList.insertAdjacentHTML('beforeend',dishItem)

  }
}
})





desserts.addEventListener("click",function(){
  menuList.innerHTML = ""



for(let i=0; i<dishes.length; i++){
  let dish = dishes[i]
  let image = dish.imageURL
  let title = dish.title
  let description = dish.description
  let price = dish.price
  let course = dish.course
  let dishItem = `
  <li>
  <img src="${image}" class="picture" />
  <label>${title}</label>
  <p>${description}</p>
  <span>${price}</span>

  </li>
  `
  if(course == "Desserts"){

    menuList.insertAdjacentHTML('beforeend',dishItem)

  }
}
})

}

)
