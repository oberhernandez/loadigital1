firebase.initializeApp({
    apiKey: "AIzaSyBXW-68yNj5m-fuvHf3G3jBa463Z_kIrs8",
    authDomain: "loadigital-546c1.firebaseapp.com",
    projectId: "loadigital-546c1",
});

const db = firebase.firestore();



//menu
const buttonMenu = document.querySelector("#buttonMenu");
const menu = document.querySelector("#menu");
const buttonDesplegar = document.querySelector(".bi-list");
const buttonCerrar = document.querySelector(".bi-x-circle-fill")
buttonMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
    
    for(var  i = 0; i < 1; i++){
        if(buttonDesplegar.classList.contains("bi-list")){
            buttonDesplegar.classList.remove("bi-list");
            buttonDesplegar.removeAttribute("style");
            buttonCerrar.style.display="block";
            document.querySelector(".menu").style.position="sticky";
        } else{
            buttonDesplegar.classList.add("bi-list");
            buttonCerrar.style.display="none";
            document.querySelector(".menu").style.position="absolute";
        }
    }
});

//submenu
const buttonSubMenu = document.querySelectorAll(".container__subMenu");
const hide = document.querySelectorAll(".hide");
for(let i=0; i < buttonSubMenu.length; i++){
    buttonSubMenu[i].addEventListener("click", function(){
         const subMenu = this.nextElementSibling;
         const height = subMenu.scrollHeight;
         if(subMenu.classList.contains("desplegar")){
            subMenu.classList.remove("desplegar");
            subMenu.removeAttribute("style");
         } else{
            subMenu.classList.add("desplegar");
            subMenu.style.height = height + "px";
         }
    });
}
menu.addEventListener('click', e => {
    addHide(e);
});
const setHide = ()=>{
    if(menu.classList.contains("mostrar")){
        menu.classList.remove("mostrar");
        menu.removeAttribute("style");
     } else{
        menu.classList.add("menu");
        menu.style.margin = margin-left + "px";
     } 
     for(var  i = 0; i < 1; i++){
        if(buttonDesplegar.classList.contains("bi-list")){
            buttonDesplegar.classList.remove("bi-list");
            buttonDesplegar.removeAttribute("style");
            buttonCerrar.style.display="block";  
        } else{
            buttonDesplegar.classList.add("bi-list");
            buttonCerrar.style.display="none";
        }
    }
}
  const addHide = e => {
    if(e.target.classList.contains('hide')){
        setHide(e.target.parentElement);
      };
    e.stopPropagation();
   };

const movies = document.getElementById('movies');
const resumen = document.getElementById('resumen');
const video = document.getElementById("intro__text");
const tMovie1 = document.getElementById('t_movie1').content;
const fragment = document.createDocumentFragment();
let container = {};

resumen.addEventListener('click', e => {addPlay(e);});
const setPlay = () => {
    document.querySelector("#video__resumen").style="display:flex;flex-direction: row;flex-wrap: wrap;justify-content: center";
    document.querySelector(".card__resumen").style.display="none";
    document.querySelector(".container__logo").style.display="none";
    document.querySelector(".container__search").style.display="none";
}
const addPlay = e => {
    if(e.target.classList.contains('play')){
        setPlay(e.target.parentElement);
      };
    e.stopPropagation();//play R
   };

movies.addEventListener('click', e => {
    addContainer(e);
});//click img

movies.addEventListener('click', e => {addClose(e);});
const setClose = () => {
    const container__menu = document.querySelector(".container__menu");
    const bi_arrow_left_short= document.querySelector("#arrow-left-short");
    movies.style.display="none"; 
    container__menu.style.display="none";
    
    bi_arrow_left_short.style.display="block";
    buttonMenu.style.display="none";
    document.querySelector(".container__logo").style.display="none";
    document.querySelector(".container__search").style.display="none";
}
const addClose = e => {
    if(e.target.classList.contains('EM__click')){
        setClose(e.target.parentElement);
      };
    e.stopPropagation();//close movies
   };

const addContainer = e => {
 if(e.target.classList.contains('EM__click')){
   setContainer(e.target.parentElement);

 };
 e.stopPropagation();
};



//funcion para seleccionar y agregar un solo elemento por su id
const setContainer = objeto => {
    const content = {
        id: objeto.querySelector('.EM__click').dataset.id,
        title: objeto.querySelectorAll('h5')[0].textContent,
        genero: objeto.querySelectorAll('h5')[1].textContent,
        puntuacion: objeto.querySelectorAll('h5')[2].textContent,
        fecha: objeto.querySelectorAll('h5')[3].textContent,
        resumen: objeto.querySelector('p').textContent,
        linkImg: objeto.querySelector('img').src,
        linkAtras: objeto.querySelectorAll('a')[0].href,
        linkReproducir: objeto.querySelectorAll('a')[1].href,
        linkDescarga: objeto.querySelectorAll('a')[2].href,
        linkSeries: [
            objeto.querySelectorAll('iframe')[0].src,
            objeto.querySelectorAll('iframe')[1].src,
            objeto.querySelectorAll('iframe')[2].src,
            objeto.querySelectorAll('iframe')[3].src,
            objeto.querySelectorAll('iframe')[4].src,
            objeto.querySelectorAll('iframe')[5].src,
            objeto.querySelectorAll('iframe')[6].src,
            objeto.querySelectorAll('iframe')[7].src,
            objeto.querySelectorAll('iframe')[8].src,
            objeto.querySelectorAll('iframe')[9].src,
        ],
        textCapitulo:[
            objeto.querySelectorAll('h5')[4].textContent,
            objeto.querySelectorAll('h5')[5].textContent, 
            objeto.querySelectorAll('h5')[6].textContent,        
            objeto.querySelectorAll('h5')[7].textContent,
            objeto.querySelectorAll('h5')[8].textContent,
            objeto.querySelectorAll('h5')[9].textContent,
            objeto.querySelectorAll('h5')[10].textContent,
            objeto.querySelectorAll('h5')[11].textContent,
            objeto.querySelectorAll('h5')[12].textContent,
            objeto.querySelectorAll('h5')[13].textContent,
        ],
    }
      
    //empujar
    container[content.id] = {...content}
    pintarContainer();
}

//contenedor resumen
const pintarContainer = () => {
    resumen.innerHTML = "";//limpiar html 
    Object.values(container).forEach(content => {
        const card__resumen = document.createElement("div");
        card__resumen.className = "card__resumen";
        const intro__img = document.createElement("div");
        intro__img.className = "intro__img";
        const intro__text = document.createElement("div");
        intro__text.className = "intro__text";
        intro__text.id = "intro__text";
        const img_01 = document.createElement("img");
        img_01.src = content.linkImg;
        const div_0 = document.createElement("div");
        div_0.className = "intro__HU";
        const div_1 = document.createElement("div");
        div_1.className = "intro__HU";
        const div_2 = document.createElement("div");
        div_2.className = "intro__HU";
        const div_3 = document.createElement("div");
        div_3.className = "intro__HU";
        const div_4 = document.createElement("div");
        div_4.className = "intro__HU";
        const h5_00 = document.createElement("h5");
        h5_00.textContent = content.title;
        h5_00.className = "bi-file-font-fill"
        const h5_11 = document.createElement("h5");
        h5_11.textContent = content.genero;
        h5_11.className = "bi-people-fill"
        const h5_22 = document.createElement("h5");
        h5_22.textContent = content.puntuacion;
        h5_22.className = "bi-star-fill"
        const h5_33 = document.createElement("h5");
        h5_33.textContent = content.fecha;
        h5_33.className = "bi-calendar3"
        const p_00 = document.createElement("p");
        p_00.textContent = content.resumen;
        const botones__resumen = document.createElement("div");
        botones__resumen.className = "botones__resumen";
        const a = document.createElement("a");
        a.innerHTML = "Atras";
        a.href = content.linkAtras;
        const a_11 = document.createElement("a");
        a_11.innerHTML = "Ver";;a_11.className = "play";
        a_11.href = "#";
        const a_22 = document.createElement("a");
        a_22.innerHTML = "Descarga";;
        a_22.href = content.linkDescarga;  
        botones__resumen.appendChild(a);
        botones__resumen.appendChild(a_11);
        botones__resumen.appendChild(a_22);
        const containerIframe = document.createElement("div");
        containerIframe.className = "video__resumen";
        containerIframe.id = "video__resumen";
        const h5_text_1 = document.createElement("h5");
        const h5_text_2 = document.createElement("h5");
        const h5_text_3 = document.createElement("h5");
        const h5_text_4 = document.createElement("h5");
        const h5_text_5 = document.createElement("h5");
        const h5_text_6 = document.createElement("h5");
        const h5_text_7 = document.createElement("h5");
        const h5_text_8 = document.createElement("h5");
        const h5_text_9 = document.createElement("h5");
        const h5_text_10 = document.createElement("h5");
        h5_text_1.textContent = content.textCapitulo[0];
        h5_text_2.textContent = content.textCapitulo[1];
        h5_text_3.textContent = content.textCapitulo[2];
        h5_text_4.textContent = content.textCapitulo[3];
        h5_text_5.textContent = content.textCapitulo[4];
        h5_text_6.textContent = content.textCapitulo[5];
        h5_text_7.textContent = content.textCapitulo[6];
        h5_text_8.textContent = content.textCapitulo[7];
        h5_text_9.textContent = content.textCapitulo[8];
        h5_text_10.textContent = content.textCapitulo[9];
        const iframe_0 = document.createElement("iframe");
        const iframe_1 = document.createElement("iframe");
        const iframe_2 = document.createElement("iframe");
        const iframe_3 = document.createElement("iframe");
        const iframe_4 = document.createElement("iframe");
        const iframe_5 = document.createElement("iframe");
        const iframe_6 = document.createElement("iframe");
        const iframe_7 = document.createElement("iframe");
        const iframe_8 = document.createElement("iframe");
        const iframe_9 = document.createElement("iframe");            
        iframe_0.src = content.linkSeries[0];
        iframe_0.allow="fullscreen";
        iframe_1.src = content.linkSeries[1];
        iframe_1.allow="fullscreen";
        iframe_2.src = content.linkSeries[2];
        iframe_2.allow="fullscreen";
        iframe_3.src = content.linkSeries[3];
        iframe_3.allow="fullscreen";
        iframe_4.src = content.linkSeries[4];
        iframe_4.allow="fullscreen";
        iframe_5.src = content.linkSeries[5];
        iframe_5.allow="fullscreen";
        iframe_6.src = content.linkSeries[6];
        iframe_6.allow="fullscreen";
        iframe_7.src = content.linkSeries[7];
        iframe_7.allow="fullscreen";
        iframe_8.src = content.linkSeries[8];
        iframe_8.allow="fullscreen";
        iframe_9.src = content.linkSeries[9];
        iframe_9.allow="fullscreen";         
        containerIframe.appendChild(h5_text_1);
        containerIframe.appendChild(iframe_0)
        containerIframe.appendChild(h5_text_2);
        containerIframe.appendChild(iframe_1)
        containerIframe.appendChild(h5_text_3);
        containerIframe.appendChild(iframe_2)
        containerIframe.appendChild(h5_text_4);
        containerIframe.appendChild(iframe_3)
        containerIframe.appendChild(h5_text_5);
        containerIframe.appendChild(iframe_4)
        containerIframe.appendChild(h5_text_6);
        containerIframe.appendChild(iframe_5)
        containerIframe.appendChild(h5_text_7);
        containerIframe.appendChild(iframe_6)
        containerIframe.appendChild(h5_text_8);
        containerIframe.appendChild(iframe_7)
        containerIframe.appendChild(h5_text_9);
        containerIframe.appendChild(iframe_8)
        containerIframe.appendChild(h5_text_10);
        containerIframe.appendChild(iframe_9)
        div_0.appendChild(h5_00);
        div_1.appendChild(h5_11);
        div_2.appendChild(h5_22);
        div_3.appendChild(h5_33);
        div_4.appendChild(p_00);
        intro__text.appendChild(div_0); 
        intro__text.appendChild(div_1); 
        intro__text.appendChild(div_2); 
        intro__text.appendChild(div_3); 
        intro__text.appendChild(div_4); 
        intro__img.appendChild(img_01);
        intro__text.appendChild(botones__resumen); 
        intro__text.appendChild(containerIframe);
        card__resumen.appendChild(intro__img);
        card__resumen.appendChild(intro__text);        
        const containerVideo = document.createElement("div");
        containerVideo.className = "containerVideo";
        tMovie1.appendChild(card__resumen);
        containerVideo.appendChild(containerIframe)
        tMovie1.appendChild(containerVideo);
    const clone = tMovie1.cloneNode(true);
    fragment.appendChild(clone);
})
resumen.appendChild(fragment);
//localStorage.setItem('contenedor', JSON.stringify(contenedor));
}

//leer datos
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

        const card__movies = document.createElement("div");
        card__movies.className = "card__movies";
        card__movies.dataset.category= doc.data().categoria;
        card__movies.id = doc.data().id; 
        const movies = document.createElement("div");
        movies.className = "movies";
        const card__text = document.createElement("div");
        card__text.className = "card__text";
        const img_0 = document.createElement("img");
        img_0.src = doc.data().linkImg;
        img_0.style = "display:none;"
        const img_1 = document.createElement("img");
        img_1.src = doc.data().linkImg;
        img_1.className = "EM__click";
        img_1.dataset.id = doc.data().id;        
        const h5_0 = document.createElement("h5");
        h5_0.textContent = doc.data().title;
        h5_0.style="display: block;text-align: center;font-family: Arial";
        h5_0.className = "h5_0";
        const h5_1 = document.createElement("h5");
        h5_1.textContent = doc.data().genero;
        const h5_2 = document.createElement("h5");
        h5_2.textContent = doc.data().puntuacion;
        const h5_3 = document.createElement("h5");
        h5_3.textContent = doc.data().fecha;
        const p_0 = document.createElement("p");
        p_0.textContent = doc.data().resumen;
        const a_0 = document.createElement("a");
        a_0.innerHTML = "Atras";
        a_0.href = doc.data().linkAtras;        
        const a_1 = document.createElement("a");
        a_1.innerHTML = "Ver";        
        const a_2 = document.createElement("a");
        a_2.innerHTML = "Descarga";
        a_2.href = doc.data().linkDescarga;
        card__text.appendChild(img_1);
        card__text.appendChild(h5_0);
        card__text.appendChild(h5_1);
        card__text.appendChild(h5_2);
        card__text.appendChild(h5_3);
        card__text.appendChild(p_0);
        card__text.appendChild(a_0);
        card__text.appendChild(a_1);
        card__text.appendChild(a_2);
        const h5_text_1 = document.createElement("h5");
        const h5_text_2 = document.createElement("h5");
        const h5_text_3 = document.createElement("h5");
        const h5_text_4 = document.createElement("h5");
        const h5_text_5 = document.createElement("h5");
        const h5_text_6 = document.createElement("h5");
        const h5_text_7 = document.createElement("h5");
        const h5_text_8 = document.createElement("h5");
        const h5_text_9 = document.createElement("h5");
        const h5_text_10 = document.createElement("h5");
        h5_text_1.textContent = doc.data().textCapitulo[0];
        h5_text_2.textContent = doc.data().textCapitulo[1];
        h5_text_3.textContent = doc.data().textCapitulo[2];
        h5_text_4.textContent = doc.data().textCapitulo[3];
        h5_text_5.textContent = doc.data().textCapitulo[4];
        h5_text_6.textContent = doc.data().textCapitulo[5];
        h5_text_7.textContent = doc.data().textCapitulo[6];
        h5_text_8.textContent = doc.data().textCapitulo[7];
        h5_text_9.textContent = doc.data().textCapitulo[8];
        h5_text_10.textContent = doc.data().textCapitulo[9];
        const iframe_0 = document.createElement("iframe");
        const iframe_1 = document.createElement("iframe");
        const iframe_2 = document.createElement("iframe");
        const iframe_3 = document.createElement("iframe");
        const iframe_4 = document.createElement("iframe");
        const iframe_5 = document.createElement("iframe");
        const iframe_6 = document.createElement("iframe");
        const iframe_7 = document.createElement("iframe");
        const iframe_8 = document.createElement("iframe");
        const iframe_9 = document.createElement("iframe");
        iframe_0.src = doc.data().linkSeries[0];
        iframe_0.allow="fullscreen";
        iframe_1.src = doc.data().linkSeries[1];
        iframe_1.allow="fullscreen";
        iframe_2.src = doc.data().linkSeries[2];
        iframe_2.allow="fullscreen";
        iframe_3.src = doc.data().linkSeries[3];
        iframe_3.allow="fullscreen";
        iframe_4.src = doc.data().linkSeries[4];
        iframe_4.allow="fullscreen";
        iframe_5.src = doc.data().linkSeries[5];
        iframe_5.allow="fullscreen";
        iframe_6.src = doc.data().linkSeries[6];
        iframe_6.allow="fullscreen";
        iframe_7.src = doc.data().linkSeries[7];
        iframe_7.allow="fullscreen";
        iframe_8.src = doc.data().linkSeries[8];
        iframe_8.allow="fullscreen";
        iframe_9.src = doc.data().linkSeries[9];
        iframe_9.allow="fullscreen";  
        card__text.appendChild(h5_text_1);
        card__text.appendChild(iframe_0);
        card__text.appendChild(h5_text_2);
        card__text.appendChild(iframe_1);
        card__text.appendChild(h5_text_3);
        card__text.appendChild(iframe_2);
        card__text.appendChild(h5_text_4);
        card__text.appendChild(iframe_3);
        card__text.appendChild(h5_text_5);
        card__text.appendChild(iframe_4);
        card__text.appendChild(h5_text_6);
        card__text.appendChild(iframe_5);
        card__text.appendChild(h5_text_7);
        card__text.appendChild(iframe_6);
        card__text.appendChild(h5_text_8);
        card__text.appendChild(iframe_7);
        card__text.appendChild(h5_text_9);
        card__text.appendChild(iframe_8);
        card__text.appendChild(h5_text_10);
        card__text.appendChild(iframe_9);
        movies.appendChild(card__text );        
        card__movies.appendChild(movies);     
        const clone = card__movies.cloneNode(true);           
        fragment.appendChild(clone);
        console.log(`${doc.id} => ${doc.data()}`);
    });
    movies.appendChild(fragment);
});


   

//filtro
$(document).ready(function(){
 
    $('.link').click(function(){
        var catMovies = $(this).attr('data-category');
        
		$('.card__movies').css('transform', 'scale(0)');
		function hideMovies(){
			$('.card__movies').hide();
		} setTimeout(hideMovies,400);
		function showMovies(){
			$('.card__movies[data-category="'+catMovies+'"]').show();
			$('.card__movies[data-category="'+catMovies+'"]').css('transform', 'scale(1)');
		} setTimeout(showMovies,400);
	});
	$('.menu__link[data-category="all"]').click(function(){
		function showAll(){
			$('.card__movie').show();
			$('.card__movie').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});

   




