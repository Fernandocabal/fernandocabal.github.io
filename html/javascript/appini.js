var btnAbrir=document.getElementById('maps'),
    ubicaciones=document.getElementById('ubicaciones'),
    contenedor_ubicaciones=document.getElementById('contenedor_ubicaciones'),
    btncerrar=document.getElementById('btn-cerrar'),
    contini=document.getElementById('contenido_inicio'),
    barrainf=document.getElementById('barrainf'),
    cont_principal=document.getElementById('contenedor_principal'),
    hambur=document.getElementById('hambur'),
    barralateral=document.getElementById('barralateral'),
    cerrarlateral=document.getElementById('lateral-cerrar'),
    cuerpo2=document.getElementById('cuerpo2'),
    cuerpo=document.getElementById('cuerpo');
// Seccion de cajon de ubicaciones
let abrirubi=function(){
    ubicaciones.classList.add('active');
    contini.classList.add('active');
    contenedor_ubicaciones.classList.add('active');
}
let cerrarubi=function(){
    ubicaciones.classList.remove('active');
    contini.classList.remove('active');
    contenedor_ubicaciones.classList.remove('active');
}
btnAbrir.addEventListener('click', abrirubi);
btncerrar.addEventListener('click', cerrarubi);
cuerpo2.addEventListener('click', cerrarubi)

// Seccion de cajon de barra lateral
let openbarra=function(){
    cuerpo.classList.add('show'),
    contini.classList.add('show'),
    barralateral.classList.add('active');
 }
let cerrabarr=function(){
    cuerpo.classList.remove('show'),
    contini.classList.remove('show'),
    barralateral.classList.remove('active');
}
 document.addEventListener('keydown', function(event){
    if (event.key === "Escape"){
    cuerpo.classList.remove('show'),
    contini.classList.remove('show'),  
    barralateral.classList.remove("active")
    }
})
hambur.addEventListener('click', openbarra);
cerrarlateral.addEventListener('click', cerrabarr);
cuerpo.addEventListener('click',cerrabarr);




    
