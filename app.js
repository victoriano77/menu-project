 
  

  const items = [
      {
          id :1,
         img:`https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixid=
         MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTMlMjBwcm8lMjBtYXh8ZW58MHx8MHx8&ixlib=rb-1.2.1
         &auto=format&fit=crop&w=500&q=60`,
                   title: `iphone 13 pro max`,
                  amount : `$1000`, 
                  category : `phone`,
                  desc : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. `,
          


      },
      

      {
        id :2,
        img:`https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixid=
               MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.
                1&auto=format&fit=crop&w=500&q=60`,
                title: `clothing`,
                amount : `$26.79`, 
                category : `fashions`,
                desc : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. `,

            
         },




         {
            id :3,
            img:`https://images.unsplash.com/photo-1459682687441-7761439a709d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGFuaW1hbHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
                    title: `Animals`,
                    amount : `$100`, 
                    category : `Wildlife`,
                    desc : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. `,
    
                
             },





             {
                id :4,
                img:`https://images.unsplash.com/photo-1508030358362-c071fa056233?
                ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdGllc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1
                &auto=format&fit=crop&w=500&q=60`,
                        title: `cities`,
                        amount : `$300`, 
                        category : `Tourism`,
                        desc : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. `,
        
                    
                 },


                 
             {
                id :5,
                img:`https://images.unsplash.com/photo-1580518337843-f959e992563b?ixid=
                MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWN0b3Jz
                fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
                        title: `Awesome actors`,
                        amount : `$500`, 
                        category : `peoples`,
                        desc : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. `,
        
                    
                 },




  ]


  // selecting the dom element//
   const container = document.querySelector('.btn-container')
   const wrapper = document.querySelector('.wrapper')



   //ALL FUNCTIONS ARE HERE//

   window.addEventListener('DOMContentLoaded', () => {
       display(items)


   const getButton = items.reduce((acc,curr) => {
       if (!acc.includes(curr.category)) { 
           acc.push(curr.category)
       }

        return acc
      },['all'])

    
const setButton = getButton.map((button)=>{
    return `<button class="phones" data-id=${button}>${button}</button>`
  }).join(` `)
  button.innerHTML = setButton
   const myBtn = document.querySelectorAll('.phones')
    myBtn.forEach((button)=>{
        button.addEventListener('click',(e)=>{
    const categories = e.currentTarget.dataset.id

    const fill = items.filter((item)=>{
        return item.category == categories
    })
      if (categories ==='all') {
        return display(items)
      }
          return display (fill)
        })
    })
})
       //display function//

       const display = (show) =>{
         const person = show.map((item) =>{
           const {id ,img , title , amount ,category , desc} = item
           return `<div class= "item-box">
           <div class = "image">
           <img src= ${img} alt ="" >
           </div>
           <div class = "desc">
           <h3>${title}<span id="amount">${amount}</span></h3>
           <p>${desc}</p>
           </div>
           </div>`
                   })
            const fullPerson = person.join('')
            wrapper.innerHTML = fullPerson
       }