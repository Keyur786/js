// a=document.all
// Array.from(a).forEach(function(element){
//     console.log(element)
// })
// a=document.links[0].href;
// console.log(a)

// let element = document.getElementById('first')
// let element = document.body

// element = element.className;
// element= element.childNodes;
// element = element.parentNode;
// element.style.color = 'red'
// element.style.backgroundColor = 'grey'
// element.innerHTML="<b>Inner text changed"
// console.log(element);
// let sel = document.querySelector('#first')
//  sel = document.querySelector('.child')
//  sel = document.querySelector('h1')
//  sel.style.color = 'green'
// let cont = document.querySelector('.no')
// cont = document.querySelector('div.container')
// //  let nodeName = cont.childNodes[0].nodeName

// console.log(cont.children[1].children[1].children)

// let attr = document.createElement('li');
// attr.innerText = "Hello";
// // console.log(attr)
// attr.className="childul";
// ele = document.querySelector('ul.this');
// ele.appendChild(attr);
// // console.log(ele);

// let elem2 = document.createElement("h3");
// elem2.id = 'elem2';
// elem2.className ='elem2';
// elem2.innerText = "this is a elem2"
// attr.replaceWith(elem2)

// let myul = document.getElementById('this')
// myul.replaceChild(attr,document.getElementById("ful"))
// myul.removeChild(document.getElementById("lul"))

// let myhead=document.createElement('a')
// myhead.innerHTML = "<br>Goto code with harry"
// let heading =  document.getElementById("heading")
// heading.appendChild(myhead)
// myhead.setAttribute('href',"https://www.codewithharry.com")

// document.getElementById("heading").addEventListener("mouseover",function(e){
//     let vari = e.target;
//     console.log("you have clicked heading");
//     console.log(vari);
// });

// document.querySelector(".container").addEventListener("mousemove",function(e){
//     document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},55)`
//     console.log("you moved your mouse")
// })

// let str = "facebook";
// let links = document.links;
// Array.from(links).forEach(function (element) {
//   let href = element.href;
//   if (href.includes(str)) {
//     console.log(href);
//   }
// });

// let array = ["nimbu","kobi","pyaz"]
// // localStorage.setItem("name","keyur")
// // localStorage.setItem("name1","nimo")
// localStorage.setItem("sabji",JSON.stringify(array))
// let op = JSON.parse(localStorage.getItem("sabji"))
// console.log(op)


// let name=localStorage.getItem("name")
// console.log(name)
// localStorage.removeItem("name1")

