var buttonContatos = document.getElementById('button-contatos');
var buttonGrupos = document.getElementById('button-grupos');
var divBar = document.getElementById('div-bar');
var divBar1 = document.getElementById('div-bar1');
var Grupos = document.getElementById('Grupos');
var next = document.getElementById('next');
var file = document.getElementById('Upload');





///////////// BLOCO PARA REQUISIÇÃO DOS CONTATOS////////////////


var request = new XMLHttpRequest()

request.open('GET', 'http://demo4084944.mockable.io/contacts', true)
request.onload = function() {

    var myJSON = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        myJSON.forEach((API, i) => {
            var nome = document.getElementsByClassName('nomeAPi');
            nome[i].innerHTML = myJSON[i].nome;

        })
    } else {
        console.log('error')
    }

    if (request.status >= 200 && request.status < 400) {

        myJSON.forEach((API, i) => {

            var nome = document.getElementsByClassName('imagemAPi');
            nome[i].src = myJSON[i].imagem;



        })
    } else {
        console.log('error')
    }

    if (request.status >= 200 && request.status < 400) {

        myJSON.forEach((API, i) => {
            var ultimoAcesso = document.getElementsByClassName('vistoAPi');
            var dataFake = new Date(myJSON[i].ultimoAcesso)
            var day;
            var month;
            var year;
            var hour;
            var minute;
            var second;
            var dayWeek;
            day = dataFake.getDate();
            day = day.toString();

            dayWeek = dataFake.getDay();
            dayWeek = dayWeek.toString();

            month = dataFake.getMonth();
            month = month.toString();

            year = dataFake.getFullYear();
            year = year.toString();

            hour = dataFake.getHours();
            hour = hour.toString();

            minute = dataFake.getMinutes();
            minute = minute.toString();

            second = dataFake.getSeconds();
            second = second.toString();
            if (dayWeek == "0") {
                dayWeek = "No Domingo"
            } else if (dayWeek == "1") {
                dayWeek = "Na Segunda-feira"
            } else if (dayWeek == "2") {
                dayWeek = "Na Terça-feira"
            } else if (dayWeek == "3") {
                dayWeek = "Na Quarta-feira"
            } else if (dayWeek == "4") {
                dayWeek = "Na Quinta-feira"
            } else if (dayWeek == "5") {
                dayWeek = "Na Sexta-feira"
            } else if (dayWeek == "6") {
                dayWeek = "No Sábado"
            }
            ultimoAcesso[i].innerHTML = "Visto por último às: " + hour + ":" + minute + " " + dayWeek;


        })
    } else {
        console.log('error')
    }

    if (request.status >= 200 && request.status < 400) {

        myJSON.forEach((API, i) => {
            var mensagem = document.getElementsByClassName('mensagemAPi');
            mensagem[i].innerHTML = myJSON[i].mensagem;

        })
    } else {
        console.log('error')
    }

}

request.send()

/////////////////////////////////////////////////////


///////////// BLOCO PARA REQUISIÇÃO DOS GRUPOS////////////////

var requestGrupos = new XMLHttpRequest()

requestGrupos.open('GET', 'http://demo4084944.mockable.io/groups', true)
requestGrupos.onload = function() {

    var myJSONGrupos = JSON.parse(this.response)

    if (requestGrupos.status >= 200 && requestGrupos.status < 400) {
        myJSONGrupos.forEach((API, i) => {
            var nome = document.getElementsByClassName('nomeGrupoAPi');
            nome[i].innerHTML = myJSONGrupos[i].nome;

        })
    } else {
        console.log('error')
    }

    if (requestGrupos.status >= 200 && requestGrupos.status < 400) {

        myJSONGrupos.forEach((API, i) => {
            var imagem = document.getElementsByClassName('imagemGrupoAPi');
            imagem[i].src = myJSONGrupos[i].imagem;

        })
    } else {
        console.log('error')
    }

    if (requestGrupos.status >= 200 && requestGrupos.status < 400) {

        myJSONGrupos.forEach((API, i) => {
            var mensagem = document.getElementsByClassName('mensagemGrupoAPi');
            mensagem[i].innerHTML = myJSONGrupos[i].ultimoAcesso.mensagem;

        })
    } else {
        console.log('error')
    }

    if (requestGrupos.status >= 200 && requestGrupos.status < 400) {

        myJSONGrupos.forEach((API, i) => {
            var ultimoAcesso = document.getElementsByClassName('vistoGrupoAPi');
            var dataFake = new Date(myJSONGrupos[i].ultimoAcesso.data)
            var day;
            var month;
            var year;
            var hour;
            var minute;
            var second;
            var dayWeek;
            day = dataFake.getDate();
            day = day.toString();

            dayWeek = dataFake.getDay();
            dayWeek = dayWeek.toString();

            month = dataFake.getMonth();
            month = month.toString();

            year = dataFake.getFullYear();
            year = year.toString();

            hour = dataFake.getHours();
            hour = hour.toString();

            minute = dataFake.getMinutes();
            minute = minute.toString();

            second = dataFake.getSeconds();
            second = second.toString();
            if (dayWeek == "0") {
                dayWeek = "No Domingo"
            } else if (dayWeek == "1") {
                dayWeek = "Na Segunda-feira"
            } else if (dayWeek == "2") {
                dayWeek = "Na Terça-feira"
            } else if (dayWeek == "3") {
                dayWeek = "Na Quarta-feira"
            } else if (dayWeek == "4") {
                dayWeek = "Na Quinta-feira"
            } else if (dayWeek == "5") {
                dayWeek = "Na Sexta-feira"
            } else if (dayWeek == "6") {
                dayWeek = "No Sábado"
            }
            ultimoAcesso[i].innerHTML = "Visto por último às: " + hour + ":" + minute + " " + dayWeek;




        })
    } else {
        console.log('error')
    }

    if (requestGrupos.status >= 200 && requestGrupos.status < 400) {

        myJSONGrupos.forEach((API, i) => {
            var usuario = document.getElementsByClassName('usuarioAPi');
            usuario[i].innerHTML = myJSONGrupos[i].ultimoAcesso.usuario;
            usuario[i].innerHTML = usuario[i].innerHTML + " diz: ";

        })
    } else {
        console.log('error')
    }




}

requestGrupos.send();

function zoomImageContatos() {
    var imagem;
    imagem = document.getElementsByClassName('imagemAPi').value;
    imagem.style.width = '600px';
}

function navigateTabs(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function switchColorButton() {
    if (buttonGrupos.style.backgroundColor = "#B4B4B4") {
        buttonGrupos.style.backgroundColor = "#384CFF";
        buttonContatos.style.backgroundColor = "#B4B4B4";
    }
}

function switchColorButton1() {
    if (buttonGrupos.style.backgroundColor = "#384CFF") {
        buttonGrupos.style.backgroundColor = "#B4B4B4";
        buttonContatos.style.backgroundColor = "#384CFF";
    }
}

function moveDiv() {
    divBar1.style.display = 'flex';
    divBar.style.display = 'none';
}

function moveDiv1() {
    divBar1.style.display = 'none';
    divBar.style.display = 'flex';
}

function hiddenGrupos() {
    Grupos.style.display = 'none'
}


function setCookieNome() {
    var caixaNome = document.getElementById('caixaNome').value;
    var cName = "username=" + caixaNome;
    var d = new Date();
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
    if (caixaNome == "") {
        alert("O campo NOME é obrigatório!");
    } else {
        var expires = "expires=" + d.toGMTString();
        document.cookie = cName + ";" + expires + ";path=/";
        window.location.assign("http://127.0.0.1:5500/html/page3.html");
    }

}



function setCookieEmail() {
    var caixaEmail = document.getElementById('caixaEmail').value;
    var cName = "useremail=" + caixaEmail;
    var d = new Date();
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
    if (caixaEmail == "") {
        alert("O campo EMAIL é obrigatório!");
    } else {
        var expires = "expires=" + d.toGMTString();
        document.cookie = cName + ";" + expires + ";path=/";
        window.location.assign("http://127.0.0.1:5500/html/page4.html");
    }

}

function setCookieSenha() {
    var caixaSenha = document.getElementById('caixaSenha').value;
    var cName = "userpassword=" + caixaSenha;
    var d = new Date();
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
    if (caixaSenha == "") {
        alert("O campo SENHA é obrigatório!");
    } else {
        var expires = "expires=" + d.toGMTString();
        document.cookie = cName + ";" + expires + ";path=/";
        window.location.assign("http://127.0.0.1:5500/html/page5.html");

    }

}

function redirecionaPage(url) {
    window.location.assign(url);
}


function setCookieImage() {
    var upload = document.getElementById('Upload').value;
    var cName = "userimage=" + upload;
    var d = new Date();
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cName + ";" + expires + ";path=/";
    window.location.assign("http://127.0.0.1:5500/html/contatos.html");

}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    return decodedCookie.replace("username=", "Bem vindo ao ChatBox, ").replace("useremail=", "").replace("userpassword=", "").replace("userimage=", "").split(";");
}

function changeName() {
    var getFunction = getCookie();
    var getNome = getFunction[0];
    document.getElementById('name').innerHTML = getNome;
}

// function changeImage() {
//     var getFunction = getCookie();
//     var getImage = getFunction[4];
//     document.getElementById('i-profile-picture').value = getImage;
//     ///// NECESSITO DE RESOLVER O COOKIE DA IMAGEM////

// }


function checkCookie() {
    var user = getCookie("userimage");
    if (user != "") {
        var nm = document.getElementById("userimage");
        nm.innerHTML = nm.innerHTML.replace("$name$", user);
    }
}

function chat() {
    var divContainerClass = document.getElementsByClassName('div-container-class');
    var nomeAPi = this.document.getElementsByClassName('nomeAPi');
    conteudoNomeAPi = nomeAPi[0].innerText;
    console.log(conteudoNomeAPi);
    //divContainerClass.addEventListener('click', redirecionaPage("http://127.0.0.1:5500/html/conversa.html"));
}