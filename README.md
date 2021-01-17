# DrugAppProject
>
> <h2>기술스택 : HTML, SCSS, Javascript, Zeplin</h2><br>
> SCSS를 업무에 적용하고싶은데 현장에서는 css파일을 원하였다. 그래서 쉽고빠른 번들러인 percel을 이용해 SCSS로 작업하여 SassMeister 온라인 컴파일러로 css로 변환하였다. ***신세계를 경험하였다.*** 프로그래밍형식이라 클래스명을 중복 선언한 필요도없고 $변수명처럼 선언하거나 @mixin 처럼 함수타입으로 한번만 선언하면 여러번 재사용할수있어 간편했으나 구조가 익숙하지가 않아서 수정하거나 위치선정을 할때 조금 헤매었다. 잘 활용하면 같은 시간단축이 가능하여 빨리 익숙해져 많이 이용하고싶다.<br><br>
> 제플린으로 받은 디자인의 폰트가 많이 작은 느낌이었다. 역시나 네이버 모바일을 참고해보니 최소폰트크기가 12pt이상이고 작다고 느낀 제플린의 폰트크기는 10pt였다. 웹상에서는 중요하지않은 내용들은 10pt로 가능할수있지만 모바일상에서는 다소 확장할필요가있다고 팀원과 PM에게 의견을 전달했다. 그결과 11~12pt로 크기를 키웠다.<br>
> 
<br>
![drugscreenshot](https://user-images.githubusercontent.com/59987309/104851758-44ab8a00-593a-11eb-8856-c17fd910eb26.jpg)

![ezgif-3-1a46f635638a](https://user-images.githubusercontent.com/59987309/96550384-c3693a80-12eb-11eb-8a0c-cc7d4922a511.gif)

![easydrug1](https://user-images.githubusercontent.com/59987309/95147062-96306e80-07ba-11eb-9143-064ab1d0dc3c.png)<br>
약품리스트, 경고 약품명을 클릭하면 모달창이뜬다.<br><br>

    const openButton = document.querySelector('#open');
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.modal_overlay');
    const closeButton = document.querySelector('.closeButton');

    openButton.addEventListener('click',()=>{
        modal.classList.remove('hidden');
    });

    closeButton.addEventListener('click',()=>{
        modal.classList.add('hidden');
    });

    document.addEventListener('click',(event)=>{
        if(event.target == overlay){
            modal.classList.add('hidden');
        }
    });
![easydrug2](https://user-images.githubusercontent.com/59987309/95147082-a6484e00-07ba-11eb-91ee-36fefc5659d9.png)<br>
keyframe을 적용하여 위에서 아래로 올라오는 효과를 적용하였다.

    .modal_content{
        z-index: 1;
        border-radius: 10px 10px 0 0;
        background-color: #fff;
        /* padding: 50px 100px; */
        position: absolute;
        width: 100%;
        height: 80%;
        top: 20%;
        left:0;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);    
        animation:show .2s;

        @keyframes show{
            from{
                transform: translateY(100%);
            }to{
                transform: translateY(0);
            }
        }

![easydrug3](https://user-images.githubusercontent.com/59987309/95147089-aba59880-07ba-11eb-82e7-1f3b71b4e9b2.png)

화살표 버튼을 누르면 상세내용을 확인할수가있다.<br> 페이지가 넘어가 overflow-y:scroll 처리하고 공유,확인버튼은 absolute를 통해 공중으로띄웠다.

    let acc = document.getElementsByClassName('accordion_btn');

    for(let i = 0; i<acc.length; i++){
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


구현: <a href="https://leeeugene1.github.io/DrugAppProject/">DrugAppProject</a></p>
--
연락: <a href="mailto:happyHackingEugene@gmail.com">happyHackingEugene@gmail.com</a></p>
