 


document.getElementById('sub').onclick = function(){

let NaMe = document.getElementById('name').value;
let Name = document.getElementById('name2').value;
let DATE = document.getElementById('db').value;
let eMail = document.getElementById('email').value;
let HOME = document.getElementById('hm').value;
let PHONE = document.getElementById('num').value;

document.getElementById('fname').innerHTML = NaMe;
document.getElementById('dbirth').innerHTML = DATE;
document.getElementById('eaddress').innerHTML = eMail;
document.getElementById('hom').innerHTML = HOME;
document.getElementById('phob').innerHTML = PHONE;

}
