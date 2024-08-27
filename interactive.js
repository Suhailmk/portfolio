const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

// hamburger.addEventListener("click", ()=>{
//   menu.classList.toggle("hidden")
//   hamburger.classList.toggle("bg-white")
// })

hLinks.forEach(link=>{
  link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  })
})

moon.addEventListener("click", ()=>{
  body.classList.toggle("dark")
})


const yenthelum = document.querySelectorAll("#hamburger > div"); 
hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  yenthelum.forEach(element => {
      element.classList.toggle("bg-white");
      element.classList.toggle("bg-black"); 
     
  });
});




function sendMail(event){
  event.preventDefault();
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  }

  const serviceId ="service_6vtlj2a";
  const templateId ="template_jkc8k6e";

  emailjs.send(serviceId, templateId, params)
  .then(
      res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        console.log(res);
        alert("Your message was sent successfully");
      }
  )
  .catch(err => console.log(err));
}

