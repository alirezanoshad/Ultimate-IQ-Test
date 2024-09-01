"use strict";
const containerTag = document.createElement("div");
containerTag.classList.add("container");
document.body.append(containerTag);
const mainDiv = document.createElement("div");
mainDiv.id = "main";
containerTag.append(mainDiv);
const mainLeftDiv = document.createElement("div");
mainLeftDiv.id = "mainLeft";
mainDiv.append(mainLeftDiv);
const itemsDiv = document.createElement("div");
itemsDiv.id = "items";
mainLeftDiv.append(itemsDiv);
const menuImg = document.createElement("img");
menuImg.id = "menuImg";
menuImg.src = "docs/Bulleted List.png";
itemsDiv.append(menuImg);
const menuUl = document.createElement("ul");
itemsDiv.append(menuUl);
const li1 = document.createElement("li");
menuUl.append(li1);
const liA1 = document.createElement("a");
liA1.href = "https://alirezanoshad.github.io/Ultimate-IQ-Test/";
liA1.textContent = "Home";
li1.append(liA1);
const li2 = document.createElement("li");
menuUl.append(li2);
const liA2 = document.createElement("a");
liA2.href = "https://alirezanoshad.github.io/Ultimate-IQ-Test/";
liA2.textContent = "About Us";
li2.append(liA2);
const li3 = document.createElement("li");
menuUl.append(li3);
const liA3 = document.createElement("a");
liA3.href = "https://alirezanoshad.github.io/Ultimate-IQ-Test/";
liA3.textContent = "Contact Us";
li3.append(liA3);
const startBtn = document.createElement("div");
startBtn.id = "startBtn";
startBtn.textContent = "Start";
itemsDiv.append(startBtn);
const mainRightDiv = document.createElement("div");
mainRightDiv.id = "mainRight";
mainDiv.append(mainRightDiv);
const rigthBackground = document.createElement("div");
rigthBackground.id = "rightBackground";
mainRightDiv.append(rigthBackground);
const iconImg = document.createElement("img");
iconImg.id = "iconImg";
iconImg.src = "docs/Frame 2 (1).png";
rigthBackground.append(iconImg);
const pWelcome = document.createElement("p");
pWelcome.id = "welcome";
pWelcome.textContent = "WELCOME!";
rigthBackground.append(pWelcome);
const pText = document.createElement("p");
pText.id = "text";
pText.textContent = "Please Enter Your Information";
rigthBackground.append(pText);
const boxDiv = document.createElement("div");
boxDiv.id = "box";
rigthBackground.append(boxDiv);
const input1Div = document.createElement("div");
input1Div.id = "input1";
boxDiv.append(input1Div);
const personIconImg = document.createElement("img");
personIconImg.id = "personIconImg";

// personIconImg.src = "docs/image.png2.png";
input1Div.append(personIconImg);
personIconImg.src = "docs/image.png2.png";
input1Div.append(personIconImg);
const input1 = document.createElement("input");
input1.placeholder = "Name";
input1.type = "text";
input1Div.append(input1);
const input22Div = document.createElement("div");
input22Div.id = "input2";
boxDiv.append(input22Div);
const input2 = document.createElement("input");
input2.id = "age";
input2.placeholder = "Age";
input2.type = "text";
input22Div.append(input2);
const startTestBtn = document.createElement("a");
startTestBtn.id = "startTestBtn";
startTestBtn.href = "./testPage/testPages.html";
startTestBtn.textContent = "Start Test";
boxDiv.append(startTestBtn);

console.log(containerTag);
//
const leftDiv = document.createElement('div')
leftDiv.id = 'leftDiv'
mainDiv.append(leftDiv)
//
const leftDivImg = document.createElement('img')
leftDivImg.id = 'leftDivImg';
leftDivImg.src = "./docs/bolo.gif"
leftDiv.append(leftDivImg)
//
