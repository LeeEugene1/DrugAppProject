
var acc = document.getElementsByClassName('accordion_btn');

for(var i = 0; i<acc.length; i++){
    acc[i].addEventListener('click',function(){
        let content = this.nextElementSibling;
        this.classList.toggle('.accordion_btn--active');        
        
        if(content.style.display === "block"){
            content.style.display = "none";
        }else{
            content.style.display = "block";
        }
    })
}
