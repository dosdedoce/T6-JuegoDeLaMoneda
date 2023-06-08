let tiradaCara=0; 
let tiradaCruz=0;
let tiradaGlobal=0;

let resultadosCaras=document.querySelector('.resultados__cara');
let resultadosCruces=document.querySelector('.resultados__cruz');
let btnLanzar=document.getElementById('btnLanzar');
let btnReiniciar=document.getElementById('btnReiniciar');;
let monedas=document.querySelector('.contiene__monedas');

const iniciarVbles = () => {
        tiradaCara=0; 
        tiradaCruz=0;
        tiradaGlobal=0
        resultadosCaras.textContent=0;
        resultadosCruces.textContent=0;
};

const generarTirada=() =>{
        return Math.floor(Math.random() * (2));
};

btnLanzar.addEventListener('click',()=>{
        let i=generarTirada();
        monedas.style.animation ='none';
        monedas.style.opacity=0;
        if(i) {
                setTimeout(function(){
                        monedas.style.opacity=1;
                        monedas.style.animation = 'girar-cara 3s forwards'; 
                }, 100);
                tiradaCara++;
        }else{
                setTimeout(function(){
                        monedas.style.opacity=1;
                        monedas.style.animation = 'girar-cruz 3s forwards';
                }, 100);
                tiradaCruz++;
        }
        monedas.style.opacity=0;
        setTimeout(mostrarTirada, 3000);
        desactivaBoton();
});

const mostrarTirada=()=>{
        resultadosCaras.textContent=tiradaCara;
        resultadosCruces.textContent=tiradaCruz;
};

const desactivaBoton=()=>{
        btnLanzar.disabled = true;
        btnReiniciar.disabled = true;
        let colorStyleLanzar=btnLanzar.style.backgroundColor;
        let colorStyleReiniciar=btnReiniciar.style.backgroundColor;
        btnLanzar.style.backgroundColor='rgb(222, 222, 222)';
        btnReiniciar.style.backgroundColor='rgb(222, 222, 222)';
        setTimeout(function(){
                btnLanzar.disabled = false;
                btnLanzar.style.backgroundColor=colorStyleLanzar;
                btnReiniciar.disabled = false;
                btnReiniciar.style.backgroundColor=colorStyleReiniciar;
        },3000);
}

btnReiniciar.addEventListener('click',() => {
        monedas.style.animation ='none';
        iniciarVbles();
        mostrarTirada();
});
