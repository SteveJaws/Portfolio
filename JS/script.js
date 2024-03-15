let burger = document.getElementById("burger");
let blueBar = document.getElementById("blueBar");
let menuBtn = document.getElementById("menuBtn");
let burgerImg = document.getElementById("burgerImg");
let categories = document.getElementById("categories");
let pickOne = document.getElementById("pickOne");

function menu(){
    removeClass();
    burger.classList.add("transmenu");
    blueBar.classList.add("menuBlue");
    menuBtn.style.display = "none";
    document.getElementById("projectTxt").style.display = "none";
    document.getElementById("homeTitle").style.display = "none";
    document.getElementById("burgerImg").style.display = "none";
    document.getElementById("projectImg").style.display = "none";
    document.getElementById("work").style.display = "none";
    document.getElementById("portret").style.display = "none";
    document.getElementById("aboutInfo").style.display = "none";
    document.getElementById("contact").style.display = 'none';
    document.getElementById("projectLink").style.display = "none";
    setTimeout(function(){
        burger.style.height = "120%";
        blueBar.style.width = '100%';
        blueBar.style.height = '100%';
        blueBar.style.borderRadius = '50%';
        blueBar.style.transform = 'rotate(90deg)';
        blueBar.style.top = '2%';
        blueBar.style.left = '-55%';
        document.getElementById("pickOne").style.display = "block";
        document.getElementById("categories").style.display = "flex";
    },400)
}

function home(){
    burger.classList.add("menuHome");
    blueBar.classList.add("menuBlueHome");
    menuBtn.style.display = "block";
    burger.style.height = "20%";
    document.getElementById("pickOne").style.display = "none";
    document.getElementById("categories").style.display = "none";
    setTimeout(function(){
        burgerImg.style.display = "block";
        document.getElementById("homeTitle").style.display = "block";
        blueBar.style.left = "-10%"
        blueBar.style.width = "150%"
        blueBar.style.height = "30%"
        blueBar.style.transform = "rotate(-12deg)"
        blueBar.style.borderRadius = "0%"
        blueBar.style.top = "33%";
        blueBar.style.left = "-33%";
    },400)
}

function work(){
    burger.classList.add("menuHome");
    burger.style.height = "20%";
    menuBtn.style.display = "block";
    categories.style.display = "none";
    blueBar.classList.add("transWork");
    pickOne.style.display = "none";
    setTimeout(function(){
        document.getElementById("work").style.display = "flex";
        burgerImg.style.display = "block";
        blueBar.style.left = "-10%"
        blueBar.style.width = "150%"
        blueBar.style.height = "30%"
        blueBar.style.transform = "rotate(50deg)"
        blueBar.style.borderRadius = "0%"
        blueBar.style.top = "33%";
        blueBar.style.left = "-33%";
    },400)
}

function project(id){
    burger.classList.add("menuHome");
    burger.style.height = "20%";
    menuBtn.style.display = "block";
    categories.style.display = "none";
    blueBar.classList.add("transProject");
    pickOne.style.display = "none";
    document.getElementById("work").style.display = "none";
    setTimeout(function(){
        document.getElementById("projectLink").style.display = "block";
        document.getElementById("projectImg").style.display = "block";
        document.getElementById("projectImg").style.backgroundImage = "url(./media/" + projectInfo[id].img + ".png";
        document.getElementById('projectTxt').style.display = "block";
        document.getElementById('projectTxt').innerHTML = projectInfo[id].info;
        document.getElementById('linklink').href = projectInfo[id].link;
        burgerImg.style.display = "block";
        blueBar.style.left = "-10%"
        blueBar.style.width = "150%"
        blueBar.style.height = "30%"
        blueBar.style.transform = "rotate(5deg)"
        blueBar.style.borderRadius = "0%"
        blueBar.style.top = "55%";
        blueBar.style.left = "-33%";
    },400)
}

function about(){
    burger.classList.add("menuHome");
    burger.style.height = "20%";
    menuBtn.style.display = "block";
    categories.style.display = "none";
    blueBar.classList.add("transAbout");
    pickOne.style.display = "none";
    setTimeout(function(){
        document.getElementById("portret").style.display = "block";
        document.getElementById("aboutInfo").style.display = "block";
        burgerImg.style.display = "block";
        blueBar.style.width = "150%"
        blueBar.style.height = "33%"
        blueBar.style.transform = "rotate(112deg)"
        blueBar.style.borderRadius = "0%"
        blueBar.style.top = "50%";
        blueBar.style.left = "-61%";
    },400)
}

function contact(){
    burger.classList.add("menuHome");
    burger.style.height = "20%";
    menuBtn.style.display = "block";
    categories.style.display = "none";
    blueBar.classList.add("transContact");
    pickOne.style.display = "none";
    setTimeout(function(){
        document.getElementById("contact").style.display = 'block';
        burgerImg.style.display = "block";
        blueBar.style.left = "25%";
        blueBar.style.width = "50%";
        blueBar.style.height = "100%";
        blueBar.style.transform = "rotate(0deg)";
        blueBar.style.borderRadius = "2%";
        blueBar.style.top = "40%";
    },400)
}

function removeClass(){
    burger.classList.remove("menuHome");
    burger.classList.remove("transmenu");
    blueBar.classList.remove("menuBlue");
    blueBar.classList.remove("menuBlueHome");
    blueBar.classList.remove("transWork");
    blueBar.classList.remove("transProject");
    blueBar.classList.remove("transAbout");
    blueBar.classList.remove("transContact");
}