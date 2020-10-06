const categorylist = document.querySelector(".category_list");
let board = document.querySelector(".board");
let initpage = document.querySelector(".initpage");
let menubtn = document.getElementsByClassName("menu_btn");
let devlist = document.querySelector(".category_title");


let youtubecontrol=document.querySelector(".youtubeControl"),
playbtn=youtubecontrol.querySelector(".btn_play"),
pausebtn=youtubecontrol.querySelector(".btn_pause"),
stopbtn=youtubecontrol.querySelector(".btn_stop");

// youtube API 불러옴
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 플레이어변수 설정
var youTubePlayer;

function onYouTubeIframeAPIReady() {
    youTubePlayer = new YT.Player('youTubePlayer1', {
        width: '0',
        height: '0',
        videoId: 'q57XybMOiEA',
        events: {
          'onReady': onPlayerReady, //로딩할때 이벤트 실행
          'onStateChange': onPlayerStateChange //플레이어 상태 변화시 이벤트실행
        }
    });//youTubePlayer1셋팅
}

function onPlayerReady(event) {
    event.target.playVideo();//자동재생
    //로딩할때 실행될 동작을 작성한다.
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        //플레이어가 재생중일때 작성한 동작이 실행된다.
    }
  }
playbtn.addEventListener('click',function(){
    youTubePlayer.playVideo();
});

pausebtn.addEventListener('click',function(){
    youTubePlayer.pauseVideo();
});

stopbtn.addEventListener('click',function(){
    youTubePlayer.stopVideo();
});


let postData;
let listItems;

devlist.onclick=()=>{
    if(categorylist.style.display=='none'){
        categorylist.style.display='block';
    }else{
        categorylist.style.display='none';
    }
}

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

function pageChange(){
    location.replace('../board/board_writing.html');
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
           youtubecontrol.style.background="#F0F0F0";
           if(matchMedia("screen and (max-width:420px)").matches){
               categorylist.style.display="none";
           }
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


