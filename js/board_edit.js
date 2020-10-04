let url=location.href;
let parameters=(url.slice(url.indexOf('=')+1,url.length)).split('&').toString();
let checkPassword;
let editTime;

function getTime(){
    let date =new Date();
    let year =date.getFullYear();
    let month= date.getMonth()+1;
    let day = date.getDate();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    month=month>9 ?  month : "0"+month;
    hours=hours>9 ?  hours : "0"+hours;
    minutes=minutes >9 ? minutes : "0"+minutes;
    editTime=year+"년"+month+"월"+day+"일"+hours+"시"+minutes+"분";
    console.log(editTime);
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
function getDatas(){
    let data=  firebase.database().ref('/devnote/');
    data.on('value',function(snapshot){
        listData(snapshot.val());
    });
    firebase.database().ref('/admin/').once('value', function(snapshot){
        checkId = snapshot.val().id;
        checkPassword = snapshot.val().password;
    });
}
function listData(postElement){
    postData=Object.entries(postElement);
}
let div=document.querySelector(".edit_date");
let editTitle= document.querySelector("input[name=edit_title");
let editDate=div.querySelector('p');
let editContent=document.querySelector("textarea[name=edit_content");


function paintData(){
    for(let i=0; i<postData.length; i++){
        const [key,body]=postData[i];
        if(parameters===key){
            editTitle.value=body.title;
            editDate.innerText=body.time;
            editContent.value=body.content;
        }
    }
}
function editPost(title,content,time){
    const editData = {
        title: title,
        content: content,
        time :time,
      };
    database.ref('devnote').child(parameters).update(editData);
}

function edit(){
    let editform = document.editForm;
    let edittitle = editform.edit_title.value;
    let editcontent = editform.edit_content.value;
    let inputPassword = editform.adminpassword.value;
    console.log(edittitle,editcontent,editTime);
    if(inputPassword===checkPassword&&editcontent!=null&&edittitle!=null){
        editPost(edittitle,editcontent,editTime);
        location.replace('./board.html');
    }
    else{
        alert("비밀번호가 틀리거나 내용이 없습니다.");
    }
}


function validcheck(){

}


getDatas();
getTime();
setTimeout(paintData,650);