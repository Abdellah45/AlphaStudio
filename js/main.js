


function getImgs(num){
    let Imgs = []
    for (let i = 1;i<=num;i++){
        Imgs.push(`img_${i}.jpg`);
    }
    return Imgs;
}

let nb = 4;
let indexN = 0;
let imgs = getImgs(nb);
function preloadImages() {
    imgs.forEach(img => {
        const imgElement = new Image();
        imgElement.src = `img/sl/${img}`;
    });
}

preloadImages();

function createImags(n){
    for(let i=0;i<n;i++){
        let imgDiv = document.createElement("div");
        imgDiv.classList.add("d");
        let img = document.createElement("img");
        img.src = `img/sl/${imgs[i]}`;
        imgDiv.appendChild(img);
        document.querySelector(".img_cont").appendChild(imgDiv);
        console.log("hhh")
    }
}
createImags(nb);
function createSps(active){
    for (let a=0;a<nb;a++){
        let cSpan = document.createElement("span");
        cSpan.dataset.index = a;
        if (a == active){
            cSpan.classList.add("active");
        }
        document.querySelector(".dots").appendChild(cSpan);
    }
}

const prev = document.querySelector(".pre");
const next = document.querySelector(".ne");


function btnHundle(){
    if (indexN == 0){
        prev.classList.add("limit");
    }else{
        if (prev.classList.contains("limit")){
            prev.classList.remove("limit");
        }
    }
    if (indexN == nb-1){
        next.classList.add("limit");
    }else{
        if (next.classList.contains("limit")){
            next.classList.remove("limit");
        }
    }
}






let dots;


window.addEventListener("load",()=>{
    document.querySelector(".loader").classList.add("loaded");
    if (localStorage.getItem("sl_Pic") !== null){
        indexN = parseInt(localStorage.getItem("sl_Pic"));
        document.querySelector(".img_cont").style.transform = `translateX(-${indexN * 900}px)`;
        createSps(indexN);
        btnHundle();
        
    }else{
        createSps(0);
        btnHundle();
    }
    dots = document.querySelectorAll(".dots span");
});





prev.addEventListener("click",() => {
        dots[indexN].classList.remove("active");
        indexN -= 1;
        document.querySelector(".img_cont").style.transform = `translateX(-${indexN * 900}px)`;
        dots[indexN].classList.add("active");
        btnHundle();
        localStorage.setItem("sl_Pic",indexN);
});
next.addEventListener("click",() => {
    dots[indexN].classList.remove("active");
    indexN++;
    document.querySelector(".img_cont").style.transform = `translateX(-${indexN * 900}px)`;
    dots[indexN].classList.add("active");
    btnHundle();
    localStorage.setItem("sl_Pic",indexN);
});


document.querySelector(".dots").addEventListener("click",(e)=>{
    if (e.target.tagName === "SPAN"){
        dots[indexN].classList.remove("active");
        indexN = e.target.dataset.index;
        document.querySelector(".img_cont").style.transform = `translateX(-${indexN * 900}px)`;
        e.target.classList.add("active");
        btnHundle();
        localStorage.setItem("sl_Pic",indexN);
    }
});
