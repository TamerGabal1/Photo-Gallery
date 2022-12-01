function openFullImg(pic){
    let fullImgBox =  document.getElementById("fullImgBox");
    fullImgBox.style.display = "flex";
    let fullImg = document.getElementById("fullImg");
    fullImg.src = pic;
}
function closeFullImg(){
    let fullImgBox =  document.getElementById("fullImgBox");
    fullImgBox.style.display = "none";
}
function openFullImg1(pic){
    let fullImgBox1 =  document.getElementById("fullImgBox1");
    fullImgBox1.style.display = "flex";
    let fullImg1 = document.getElementById("fullImg1");
    fullImg1.src = pic;
}
function closeFullImg1(){
    let fullImgBox1 =  document.getElementById("fullImgBox1");
    fullImgBox1.style.display = "none";
}
function openMission(){
    let header = document.getElementById("container");
    header.style.display = "none";
    let subheader = document.getElementById("subheader");
    subheader.style.display = "none";
    let button = document.querySelector(".openButton");
    button.style.display = "none";
    let mission = document.getElementById("statement");
    mission.style.display = "block";
    let button1 = document.querySelector(".closeButton");
    button1.style.display = "flex";
    
}
function closeMission(){
    let header = document.getElementById("container");
    header.style.display = "block";
    let subheader = document.getElementById("subheader");
    subheader.style.display = "block";
    let button = document.querySelector(".openButton");
    button.style.display = "flex";
    let mission = document.getElementById("statement");
    mission.style.display = "none";
    let button1 = document.querySelector(".closeButton");
    button1.style.display = "none";
}

function openAbout(){
    console.log("clicked")
    let header = document.getElementById("container2");
    header.style.display = "none";
    // let subheader = document.getElementById("subheader");
    // subheader.style.display = "none";
    let contact = document.getElementById("contactUs");
    contact.style.display = "flex";
    let button = document.querySelector(".openButton");
    button.style.display = "none";
    let about = document.getElementById("us");
    about.style.display = "grid";
    let button1 = document.querySelector(".closeButton");
    button1.style.display = "flex";
    
}
function closeAbout(){
    let header = document.getElementById("container2");
    header.style.display = "block";
    // let subheader = document.getElementById("subheader");
    // subheader.style.display = "block";
    let contact = document.getElementById("contactUs");
    contact.style.display = "none";
    let button = document.querySelector(".openButton");
    button.style.display = "flex";
    let about = document.getElementById("us");
    about.style.display = "none";
    let button1 = document.querySelector(".closeButton");
    button1.style.display = "none";
}