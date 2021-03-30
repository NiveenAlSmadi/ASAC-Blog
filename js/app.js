'use strict';
//DOM//
let form=document.getElementById('form');
let result=document.getElementById('result');
let cont=0;//construct functuin/////
function Blog (Title,photo, Author,date ,subject ,content ){

  this.Title=Title;
  this.photo=`./img/${photo}.jpg`;
  this.Author=Author;
  this.date=date;
  this.likes=getRandom();
  this.subject=subject;
  this.content=content;
  Blog.prototype.all.push(this);
}
Blog.prototype.all=[];
if(localStorage.blog){
  Blog.all.JSON.parse(localStorage.getItem('blog'));
}
Blog.prototype.addTolocalStorage=function(){
  localStorage.setItem('blog' ,JSON.stringify(Blog.all));
};

//random
function getRandom(min, max) {
  return Math.floor(Math.random() * (500 - 1 + 1) + 1);
}
getRandom();
//render////
function render(){
  let txt=document.createElement('t');
  result.appendChild(txt);

 let Title =document.createElement('th');
 txt.appendChild
}


Blog.prototype.render=function(){ 
  let txt=document.createElement('t');
 

  result.appendChild(txt);

  let txt1 =document.createElement('td');
  txt1.textContent=this.Title;
  txt.append(txt1);

  let txt2 =document.createElement('td');
  txt2.textContent=this.Author;
  txt.append(txt2);

  let txt3 =document.createElement('td');
  txt3.textContent=this.date;
  txt.append(txt3);

  let txt4 =document.createElement('td');
  txt4.textContent=this.subject;
  txt.append(txt4);

  let txt5 =document.createElement('td');
  txt5.textContent=this.content;
  txt.append(txt5);

  let txt6 =document.createElement('td');
  txt6.innerHTML=`<img src='${Blog.all.photo}'/>`;
  txt.append(txt6);

  let txt7 =document.createElement('td');
  txt7.textContent=this.getRandom();
  txt.append(txt7);


};
form.addEventListener('submit',handlsumbit);
function handlsumbit(event){
  event.prevntDefault();
  let id=cont;
  let title1=event.target.Title.value;
  let title2=event.target.Author.value;
  let title3=event.target.content.value;
  let title4=event.target.subject.value;

  let newti=new Blog(title1,title2,title3,title4);
  newti.addTolocalStorage();
  render();
}
