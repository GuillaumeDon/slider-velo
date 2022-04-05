const imgs = document.querySelectorAll('.container-slides img');
const droite =document.querySelector('.right');
const gauche = document.querySelector('.left');
const cercles = document.querySelectorAll('.cercle');
const play = document.querySelector('.play');
const arret= document.querySelector('.arret');
let index = 0;

droite.addEventListener('click', slideSuivante);

function slideSuivante(){
    if(index < 2){
        imgs[index].classList.remove('active');
        index++;
        imgs[index].classList.add('active');
    }
    else if(index===2){
        imgs[index].classList.remove('active');
        index = 0;
        imgs[index].classList.add('active');

    }

    for(i =0; i<cercles.length; i++){
        if(cercles[i].getAttribute('data-clic') -1 === index){
            cercles[i].classList.add('active-cercle');
        }
        else
        {
            cercles[i].classList.remove('active-cercle');
        }
    }
    return;
}

gauche.addEventListener('click', slidePrecedente);

function slidePrecedente(){
    if(index > 0){
        imgs[index].classList.remove('active');
        index--;
        imgs[index].classList.add('active');
    }
    else if(index===0){
        imgs[index].classList.remove('active');
        index = 2;
        imgs[index].classList.add('active');

    }
    for(i =0; i<cercles.length; i++){
        if(cercles[i].getAttribute('data-clic') -1 === index){
            cercles[i].classList.add('active-cercle');
        }
        else
        {
            cercles[i].classList.remove('active-cercle');
        }
    }
}


//////////// CERCLES //////

cercles.forEach(cercle => {

    cercle.addEventListener('click', function(){

        for(i = 0; i < cercles.length; i++) {
            cercles[i].classList.remove('active-cercle');
        }
        this.classList.add('active-cercle');

        imgs[index].classList.remove('active');
        index = this.getAttribute('data-clic') - 1;
        imgs[index].classList.add('active');
    })

})

play.addEventListener('click', demarrer);


    function demarrer(){
        delais = setInterval(slideSuivante, 3000);
         
    };


arret.addEventListener('click',arreter);

function arreter(){
    
    clearInterval(delais);
}