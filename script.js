
const hamburger = document.getElementById("hamburger");
function openMenu(){
document.getElementById("navLinks").classList.toggle("active");    
}
const contactForm=
document.getElementById("contactform"); 
if("contactform") {
cotactForm.addEventListener("submit", function(e){
    e.preventDefault();
});
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let whatsappMessage = 
      "Name: " + name + "%0A" +
       "Email: " + email + "%0A" +
        "Message: " + message;
    let phoneNumber = "918129981952";
    window.open(
        "https//wa.me/" + phoneNumber + "? text=" + whatsappMessage,"_blank"
    );
};
    function toggleContact() {
        const policies = document.getElementById("mobilePolicies");
        const icon = document.getElementById("icon");
        
          if (policies.style.display ==="flex"){
            policies.style.display = "none";
    icon.classList.replace("fa-plus","fa-minus");
          } else {
            policies.style.display = "flex";
    icon.classList.replace("fa-minus","fa-plus");
    }
       
    }
   


