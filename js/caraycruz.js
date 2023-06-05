var tiradaCara=0; 
var tiradaCruz=0;
var tiradaGlobal=0;

let resultadosCaras=document.querySelector('.resultados__cara');
let resultadosCruces=document.querySelector('.resultados__cruz');
let btnLanzar=document.getElementById('btnLanzar');
let btnReiniciar=document.getElementById('btnReiniciar');
let cara=document.querySelector('.moneda__cara');
let cruz=document.querySelector('.moneda__cruz');
let monedas=document.querySelector('.contiene__monedas');

iniciarVbles= () => {
        tiradaCara=0; 
        tiradaCruz=0;
        tiradaGlobal=0
        resultadosCaras.textContent=0;
        resultadosCruces.textContent=0;
};

generarTirada=() =>{
        let tiradaGlobal=Math.floor(Math.random() * (2));
        return tiradaGlobal;
};

contarTirada=()=>{
        let tirada=generarTirada();
        if (tirada==0){
                tiradaCara++;
        }else{
                tiradaCruz++;
        }
        mostrarTirada(tiradaCara,tiradaCruz);
};

btnLanzar.addEventListener('click',()=>{
        let i=generarTirada();
        monedas.style.animation ='none';
        if(i) {
                setTimeout(function(){
                        monedas.style.animation = 'girar-cara 3s forwards'; 
                }, 100);
                tiradaCara++;
        }else{
                setTimeout(function(){
                        monedas.style.animation = 'girar-cruz 3s forwards';
                }, 100);
                tiradaCruz++;
        }
        setTimeout(mostrarTirada, 3000);
        desactivaBoton();
});

mostrarTirada=()=>{
        resultadosCaras.textContent=tiradaCara;
        resultadosCruces.textContent=tiradaCruz;
};


function desactivaBoton(){
        btnLanzar.disabled = true;
        setTimeout(function(){
                btnLanzar.disabled = false;
        },3000);
}

btnReiniciar.addEventListener('click',() => {
        monedas.style.animation ='none';
        tiradaCara=0; 
        tiradaCruz=0;
        mostrarTirada();
});
