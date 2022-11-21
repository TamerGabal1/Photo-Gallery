function openFullImg(pic){
    var fullImgBox =  document.getElementById("fullImgBox");
    fullImgBox.style.display = "flex";
    var fullImg = document.getElementById("fullImg");
    fullImg.src = pic;
}
function closeFullImg(){
    var fullImgBox =  document.getElementById("fullImgBox");
    fullImgBox.style.display = "none";
}
function openFullImg1(pic){
    var fullImgBox1 =  document.getElementById("fullImgBox1");
    fullImgBox1.style.display = "flex";
    var fullImg1 = document.getElementById("fullImg1");
    fullImg1.src = pic;
}
function closeFullImg1(){
    var fullImgBox1 =  document.getElementById("fullImgBox1");
    fullImgBox1.style.display = "none";
}
function openMission(){
    var header = document.getElementById("container");
    header.style.display = "none";
    var subheader = document.getElementById("subheader");
    subheader.style.display = "none";
    var button = document.querySelector(".openButton");
    button.style.display = "none";
    var mission = document.getElementById("statement");
    mission.style.display = "block";
    var button1 = document.querySelector(".closeButton");
    button1.style.display = "block";
    
}
function closeMission(){
    var header = document.getElementById("container");
    header.style.display = "block";
    var subheader = document.getElementById("subheader");
    subheader.style.display = "block";
    var button = document.querySelector(".openButton");
    button.style.display = "block";
    var mission = document.getElementById("statement");
    mission.style.display = "none";
    var button1 = document.querySelector(".closeButton");
    button1.style.display = "none";
}

function openAbout(){
    console.log("clicked")
    var header = document.getElementById("container2");
    header.style.display = "none";
    // var subheader = document.getElementById("subheader");
    // subheader.style.display = "none";
    var button = document.querySelector(".openButton");
    button.style.display = "none";
    var about = document.getElementById("us");
    about.style.display = "grid";
    var button1 = document.querySelector(".closeButton");
    button1.style.display = "block";
    
}
function closeAbout(){
    var header = document.getElementById("container2");
    header.style.display = "block";
    // var subheader = document.getElementById("subheader");
    // subheader.style.display = "block";
    var button = document.querySelector(".openButton");
    button.style.display = "block";
    var about = document.getElementById("us");
    about.style.display = "none";
    var button1 = document.querySelector(".closeButton");
    button1.style.display = "none";
}