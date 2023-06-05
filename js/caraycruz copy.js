var tiradaCara=0; 
var tiradaCruz=0;
var tiradaGlobal=0;

let resultadosCaras=document.querySelector('.resultados__cara');
let resultadosCruces=document.querySelector('.resultados__cruz');
let btnLanzar=document.getElementById('btnLanzar');
let btnReiniciar=document.getElementById('btnReiniciar');
let cara=document.querySelector('.moneda__cara');
let cruz=document.querySelector('.moneda__cruz');

iniciarVbles= () => {
        tiradaCara=0; 
        tiradaCruz=0;
        tiradaGlobal=0
        resultadosCaras.textContent=0;
        resultadosCruces.textContent=0;
};

generarTirada=() =>{
       return Math.floor(Math.random() * (2));
};

mostrarTirada=(tiradaCara,tiradaCruz)=>{
        resultadosCaras.textContent=tiradaCara;
        resultadosCruces.textContent=tiradaCruz;
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
        contarTirada();
});



btnReiniciar.addEventListener('click',iniciarVbles);