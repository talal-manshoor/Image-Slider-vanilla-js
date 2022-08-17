const nextbtn = document.querySelector(".next");
const prevbtn = document.querySelector(".prev");
const imagebox = document.querySelector(".images");
const pics = document.querySelectorAll("img");
let timeout;
let picrn = 1;

nextbtn.addEventListener("click",() => {
    picrn++;
    clearTimeout(timeout);
    picchnager();
});

prevbtn.addEventListener("click", () => {
    picrn--;
    clearTimeout(timeout);
    picchnager();
});

picchnager();

function picchnager(){
    if(picrn > pics.length){
        picrn = 1;
    }else if(picrn < 1){
        picrn = pics.length;
    }
    imagebox.style.transform = `translateX(-${(picrn-1)*500}px)`;
    timeout =  setTimeout(()=>{
        picrn++;
        picchnager();
    },3000)
}