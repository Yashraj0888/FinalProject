const btnn=document.querySelector(".btn");
btnn.addEventListener('click',()=>{
    event.preventDefault();
    let container = document.getElementById("container");
    let paragraph = document.createElement("h1");
    paragraph.innerHTML="45 lakh"
    container.appendChild(paragraph);
    paragraph.style.color="rgba(255, 179, 203, 1)"
    paragraph.style.paddingTop="10px";
    btnn.disabled = 'true';


})