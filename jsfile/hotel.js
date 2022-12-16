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
    //    console.log(responceData)
       displayCart(responceData)
       highToLow(responceData)
    } catch (error) {
        console.log(error)
    }
}


  function displayCart(data){
   document.querySelector("#cart_section").innerHTML=null
    data.forEach(function(el,index){
        let cart=document.createElement("div")
        cart.setAttribute("class","cart_div")
    let div1=document.createElement("div")
    let img=document.createElement("img")
        img.setAttribute("src",el.thumb)
        let div2=document.createElement("div")
    let name=document.createElement("h1")
       name.innerText=el.name
    let city_name=document.createElement("h4")
       city_name.innerText=`City : ${el.city_name}`
    let rating=document.createElement("h4")
       rating.innerText=`Rating : ${el.rating}`
    let locality=document.createElement("h4")
       locality.innerText=`Locality : ${el.locality}`
    let cost=document.createElement("h4")
       cost.innerText=`Price : ₹${el.cost} Per Day`
    let type=document.createElement("h4")
       type.innerText=`Type : ${el.type[1].name}`
    let bookNow=document.createElement("button")
        bookNow.innerText="Book Now"
        bookNow.setAttribute("class","booknow")

        bookNow.addEventListener("click",function(){
         let bookNowData=JSON.parse(localStorage.getItem("book-now"))||[]

             let isavlable=false;

             bookNowData.forEach(function(element){
                 if(element._id===el._id)
                 {
                    isavlable=true
                   
                 }
             })

             if(isavlable==true)
             {
                alert("Alredy Added in Basket")
             }
              if(isavlable==false)
             {
                bookNowData.push(el)
                localStorage.setItem("book-now",JSON.stringify(bookNowData))
                alert("Successfully Added in Basket")
             }
           console.log(index)
        })
    div1.append(img)
    div2.append(name,city_name,rating,locality,cost,type,bookNow)
    cart.append(div1,div2)

    document.querySelector("#cart_section").append(cart)

    })

  }


   function highToLow(data){
  
          let filterHightoLow=document.querySelector("#filter_price")
     
          filterHightoLow.addEventListener("change",function(){
         
             if(filterHightoLow.value==="High To Low")
             {
               let highToLow=data.sort(function(a,b){
                 
                  return b.cost-a.cost
               
                 
               })
               displayCart(highToLow)
             }
             if(filterHightoLow.value==="Low To High")
             {
               let lowToHigh=data.sort(function(a,b){
                 

                  return a.cost-b.cost
                 
               })
               displayCart(lowToHigh)
             }
           
       })

   }
