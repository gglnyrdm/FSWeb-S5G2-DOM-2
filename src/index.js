import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click",function(e){
alert("Bana tıkladın!")
});


// Kodlar buraya gelecek!

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button)=>{
    button.addEventListener("mouseenter",(e)=>{
        e.target.style.color = "orange";
    });
    button.addEventListener("mouseout",(e)=>{
        e.target.style.color = "white";
    })
});

document.getElementsByTagName("a").addEventListener("wheel",(e)=>{
    e.target.style.color = "purple";
})

document.load = function(){
	alert("Sayfa yüklendikten sonra kullanıcıya bildir");
}

const navFocus = document.querySelectorAll("a");
navFocus.forEach(a => {
    a.addEventListener("focus",(e)=>{
        e.target.color = "red";
    })
});

window.addEventListener("resize", function(event) {
    alert("Tarayıcı boyutu değiştirildi!");
  });