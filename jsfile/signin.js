 let userDatafromLS=JSON.parse(localStorage.getItem("signup-data"))
 let form=document.querySelector("#form")

    form.addEventListener("submit",getUserData)

    function getUserData(event){
         event.preventDefault()
         let userData={
            userName:form.user_name.value,
            password:form.password.value
            }

           
            if(checkEmailPassword(userData.userName,userData.password)==true)
            {
                alert("Login Successful")
                window.location.href="index.html"
            }
            else
            {
                alert("Login Faild Wrong User Credentials")
            }
            
    }

     function checkEmailPassword(userName,password){
             
            let check=false
         userDatafromLS.forEach(function(el){
            
            if(el.userName===userName && el.password===password)
            {
                 check=true
            }
        })

        if(check==true)
        {
          return true
        }
        else{
            return false
        }
     }