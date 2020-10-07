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