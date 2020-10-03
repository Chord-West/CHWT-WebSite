let checkPassword;

let writeDate = document.querySelector(".write_date"),
writeTitle=writeDate.querySelector("p");
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
    writeTitle.innerText =+year+"년"+month+"월"+day+"일"+hours+"시"+minutes+"분";

}

var firebaseConfig = {
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

function writePost(title,content, time) {
    const postData = {
      title: title,
      content: content,
      time :time,
    };
    // Get a key for a new Post.
    // firebase.database().ref().child('Dev_note').push(postData); 
    firebase.database().ref().child('devnote').push(postData);
}



function validcheck(){
    let writeform = document.writeForm;
    let title = writeform.title.value;
    let content = writeform.content.value;
    let time = articleTitle.innerText;
    let inputPassword = writeform.adminpassword.value;
    console.log(title,content,time,checkPassword);
    if(inputPassword===checkPassword&&title!=null&&content!=null){
        writePost(title,content,time);
        location.replace('./board.html');
    }
    else{
        alert("비밀번호가 틀리거나 내용이 없습니다.");
    }
}

function loadAdminInfo(){
    firebase.database().ref('/admin/').once('value', function(snapshot){
        checkId = snapshot.val().id;
        checkPassword = snapshot.val().password;
    });
}

loadAdminInfo();
setTimeout(getTime(),3000);
console.log(database);