/*==================== NAVBAR ====================*/
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");  
};
/*==================== TYPING-TEXT ====================*/
var typed = new Typed(".typing-text", {
  strings: ["", "Photographer", "web developer"],
  loop: true,
  typeSpeed: 150,
});

VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 25,
});

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");

  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/*==================== CONTACT FORM ====================*/

/*
function sendEmail() {
  Email.send({


 SecureToken:'0cc3ca76-137a-4c19-ab29-a4d940563441',

    To: "programmersiam.com@gmail.com",
    From: "programmersiam.com@gmail.com ",
    Subject: "new contact form enquiry",
    Body:
      "Name:" +
      document.getElementById("name").value +
      "<br/> Email :" +
      document.getElementById("email").value +
      "<br/> Subject :" +
      document.getElementById("subject").value +
      "<br/> Textarea: " +
      document.getElementById("textarea").value,
  }).then((message) => alert("Message Sent Successfully"));
}

*/
