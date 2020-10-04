const categorylist = document.querySelector(".category_list");
let board = document.querySelector(".board");
let initpage = document.querySelector(".initpage");
let menubtn = document.getElementsByClassName("menu_btn");


let checkPassword;

menubtn[0].onclick = function(){
    let navbar = document.getElementsByClassName("menu");
    console.log(navbar);
    if(navbar[0].style.display=='none'){
        navbar[0].style.display='block';
    }else{
        navbar[0].style.display='none';
    }
}


let firebaseConfig = {
    apiKey: "AIzaSyAbRit_OIY4dohuub5-CzMHaQfJu7G2-N4",
    authDomain: "chord-west.firebaseapp.com",
    databaseURL: "https://chord-west.firebaseio.com",
    projectId: "chord-west",
    storageBucket: "chord-west.appspot.com",
    messagingSenderId: "940341606564",
    appId: "1:940341606564:web:83b27a9bd69a114baa4e31",
    measurementId: "G-9WMM1JDHV5"
};

firebase.initializeApp(firebaseConfig);
let database = firebase.database();



let postData;
let listItems;

function getPosts(){
    let data=  firebase.database().ref('/devnote/');
    data.on('value',function(snapshot){
        listData(snapshot.val());
    });
}


function listData(postElement){
    postData=Object.entries(postElement);
    for(let i=0; i<postData.length; i++){
        const [key,body] = postData[i];
        const li =document.createElement('li');
        li.classList.add(key);
        li.innerText=body.title;
        categorylist.appendChild(li);     
    }
    listItems=document.querySelectorAll('li');
    listItems.forEach((item) => {
        item.addEventListener('click', (event) => {
           paintData(event.currentTarget.className);
           board.style.display="block";
           initpage.style.display="none";
        });
      });
}

const boardTitle = document.querySelector(".board_title");
const articleItem = document.querySelector(".article_item"),
articleDate=articleItem.querySelector(".article_date"),
articleContent=articleItem.querySelector(".article_content");
let h2=document.createElement('h2');
let current_key;

function paintData(event){
    current_key=event;
    for(let i=0; i<postData.length; i++){
        const [key,body]=postData[i];
        if(event===key){
            h2.innerText=body.title;
            articleDate.innerText=body.time;
            articleContent.innerText=body.content;
            boardTitle.appendChild(h2);
        }
    }
}
function editItem(){
    let body = document.querySelector('body');
    let form = document.createElement("form");
    form.name='tempPost';
    form.method='get';
    form.action='../board/board_edit.html';
    let input = document.createElement("input");
    input.type="hidden";
    input.name="json";
    input.value=current_key;
    form.append(input);
    body.append(form);
    form.submit();
}
function removeItem(){

    if(prompt("비밀번호 입력")==checkPassword){
        database.ref('devnote').child(current_key).remove();
        location.reload();
        alert("ok");
    }else{
        alert("실패하셨습니다");
        return
    }
}

function loadAdminInfo(){
    firebase.database().ref('/admin/').once('value', function(snapshot){
        checkId = snapshot.val().id;
        checkPassword = snapshot.val().password;
    });
}

loadAdminInfo();
getPosts();


