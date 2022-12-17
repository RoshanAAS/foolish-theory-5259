
let form=document.querySelector("#form")

form.addEventListener("submit",getUserData)

function getUserData(event){
  event.preventDefault()

  let userData={
            userName:form.user_name.value,
            email:form.email.value,
            password:form.password.value
            }

            console.log(userData)
}

