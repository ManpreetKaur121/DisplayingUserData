let fetchData=document.getElementById("fetch")
let data=[]
fetchData.addEventListener("click",function(user){
  
  fetch("https://reqres.in/api/users")
.then(function(res){
    return res.json()
}).then(function(res){
    console.log(res)
    data=res.data
    displayData(data);
})
  })
let display=document.getElementById("display")


function displayData(data){
    data.forEach((user)=> {
        let div=document.createElement("div")
        let avatar=document.createElement("img")
        avatar.src=user.avatar
        let name=document.createElement("p")
        name.innerText=`NAME : ${user.first_name} ${user.last_name}`
        let email=document.createElement("p")
        email.innerText=`EMAIL : ${user.email}`
      
      
        div.append(avatar,name,email)
        display.append(div)
    });
}


// user's name, email, and avatar.
// 
// 





