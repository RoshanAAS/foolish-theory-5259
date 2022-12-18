  document.querySelector("#hotel").addEventListener("click",function(){
      window.location.href="hotel.html"
  })
  document.querySelector("#basket").addEventListener("click",function(){
    
     window.location.href="basket.html"
    
  })
   
  let doctitle=document.title;
window.addEventListener("blur",function(){
   this.document.title="come back :("
})

window.addEventListener("focus",function(){
    this.document.title=doctitle;
})

  fetchData()
   async function fetchData(){
     try {
        let responce= await fetch("./jsfile/hoteldata.json")
        let responceData= await responce.json()
        displayCartPageOne(responceData)
        displayCartPageTwo(responceData)
        displayCartPageThree(responceData)
        displaycartpageFour(responceData)
        let bookNowData=JSON.parse(localStorage.getItem("book-now"))
        document.querySelector("#basket_count").innerText=bookNowData.length
     } catch (error) {
         console.log(error)
     } 
   }


   function displayCartPageOne(data){
      
      for(let i=0; i<data.length; i++)
      {
        let cart=document.createElement("div")
         let image=document.createElement("img")
             image.setAttribute("src",data[i].thumb)
         let rate=document.createElement("p")
           rate.setAttribute("id","rating")
         
         rate.innerHTML=`<span class="fa fa-circle" aria-hidden="true"></span>
         <span class="fa fa-circle" aria-hidden="true"></span>
         <span class="fa fa-circle" aria-hidden="true"></span>
         <span class="fa fa-circle" aria-hidden="true"></span> `
         let name=document.createElement("h3")
             name.innerText=data[i].name
         let like=document.createElement("h5")
            like.setAttribute("id","like")
           like.innerHTML=`<i class="fa fa-heart-o" aria-hidden="true"></i>`
        cart.append(image,name,rate,like)
        document.querySelector("#cart_page1").append(cart)
   
         if(i==3){
            break
         }
      }
   }

  function displayCartPageTwo(data){
         let count=0;
      for(let i=0; i<data.length; i++)
      {
         if(data[i].city_name==="kolkata")
         {
            let cart=document.createElement("div")
         let image=document.createElement("img")
             image.setAttribute("src",data[i].thumb)
         let rate=document.createElement("p")
           rate.setAttribute("id","rating")
         
         rate.innerHTML=`<span class="fa fa-circle" aria-hidden="true"></span>
         <span class="fa fa-circle" aria-hidden="true"></span>
         <span class="fa fa-circle" aria-hidden="true"></span>
         <span class="fa fa-circle" aria-hidden="true"></span> `
         let name=document.createElement("h3")
             name.innerText=data[i].name
         let like=document.createElement("h5")
            like.setAttribute("id","like")
           like.innerHTML=`<i class="fa fa-heart-o" aria-hidden="true"></i>`
         let price=document.createElement("h4")
           price.innerText=`From: ₹${data[i].cost} per adult`
        cart.append(image,name,rate,like,price)
        document.querySelector("#cart_page2").append(cart)
        count++
         }
         if(count==4)
         {
            break
         }

         }
  }


   function displayCartPageThree(data){
   
      for(let i=0; i<data.length; i++)
      {
          if(data[i].city_name==="Goa"){

            let cart=document.createElement("div")
            let image=document.createElement("img")
                image.setAttribute("src",data[i].thumb)
            let location=document.createElement("h1")
              location.setAttribute("id","location")
               location.innerText=data[i].locality
              cart.append(image,location)
              document.querySelector("#cart_page3").append(cart)

          }
       
      }

   }


   function displaycartpageFour(data){

       for(let i=0; i<data.length; i++)
       {
         if(data[i]._id==="60"||data[i]._id==="62"|| data[i]._id==="66"){

            let cart=document.createElement("div")
            let image=document.createElement("img")
                image.setAttribute("src",data[i].thumb)
            let location=document.createElement("h1")
              location.setAttribute("id","location")
               location.innerText=data[i].locality
            let price=document.createElement("h3")
               price.innerText=`From: ₹${data[i].cost} per adult`
            let type=document.createElement("h3")
                type.innerText=data[i].type[1].name
              cart.append(image,price,location,type)
              document.querySelector("#cart_page4").append(cart)
         }

       }
      
      
   }
    

  