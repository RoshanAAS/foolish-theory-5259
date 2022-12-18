// document.querySelector("#basket").addEventListener("click",function(){

//    window.location.href="signin.html"
// })


let doctitle=document.title;
window.addEventListener("blur",function(){
   this.document.title="come back :("
})

window.addEventListener("focus",function(){
    this.document.title=doctitle;
})

let basketDataFromLs=JSON.parse(localStorage.getItem("book-now"))
   displaybasket(basketDataFromLs)
   function displaybasket(data){
          document.querySelector("#basket_count").innerText=data.length
       data.forEach(function(el,index){
        let div1=document.createElement("div")
           div1.setAttribute("id","cart")
        let checkin=document.createElement("input")
           checkin.setAttribute("type","date")
        let checkout=document.createElement("input")
          checkout.setAttribute("type","date")
        let img=document.createElement("img")
            img.setAttribute("src",el.thumb)
        let roomdetail=document.createElement("h4")
           roomdetail.innerText=`Type : ${el.type[2].name}   TotalRooms : ${el.type[1].roomtype}`
        let name=document.createElement("h2")
            name.innerText=el.name
        let price=document.createElement("h4")
            price.innerText=`Price : ${el.cost} per day`
        let book=document.createElement("button")
            book.innerText="BOOK SECURELY"
            book.setAttribute("id","book")
     
         let remove=document.createElement("button")
             remove.innerText="Remove"
             remove.setAttribute("id","remove")
             remove.addEventListener("click",function(){

                basketDataFromLs.splice(index,1)

                localStorage.setItem("book-now",JSON.stringify(basketDataFromLs))

                window.location.reload()
                
             })
        div1.append(checkin,checkout,img,name,roomdetail,price,book,remove)
        document.querySelector("#basket").append(div1)

        
})
    
 }