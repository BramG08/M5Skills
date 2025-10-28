document.getElementsByClassName("articles")[0].style.color = "white";
document.getElementsByClassName("articles")[0].style.background = "black";
document.getElementsByClassName("articles")[0].innerText = "Nick en Isaiah houden van mannen en vrouwen in zn anus en vooral als ze Bram heten";
document.getElementsByClassName("articles")[1].textContent = "Ik pas elementen aan met JavaScript";
document.getElementsByClassName("articles")[2].append(" plop");


let carElement = document.createElement("div");
let body = document.querySelector("body");
body.append(carElement);
carElement.innerText = "Dit is een nieuwe div";
carElement.style.backgroundColor = "lightblue";
carElement.style.color = "white";