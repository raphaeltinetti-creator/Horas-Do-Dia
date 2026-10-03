function carregar(){
    
var corpo = window.document.getElementById('corpo');
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('imagem');
var data = new Date()
var hora = data.getHours();



msg.innerHTML = `Agora são ${hora} horas.`;
if (hora >= 0  && hora < 12){
    console.log('Bom dia!');
    img.src = 'manha.png';
    corpo.style.backgroundColor = '#1a5774';
} else if (hora >= 12 && hora < 18){
    console.log('Boa tarde!');
    img.src = 'tarde.png';
    corpo.style.backgroundColor = '#e9b046';
} else {
    console.log('Boa noite');
    img.src  = 'noite.png';
    corpo.style.backgroundColor = '#010f1a';
    
}


}
