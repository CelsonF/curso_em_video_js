function verificar() {
    let dateNow = new Date();
    let ano = dateNow.getFullYear();
    let fano = document.getElementById('txtAno');
    let resp = document.querySelector('#resp');


    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERROR] Verifique o ano inserido e tente novamente! \nPor Favor digite uma data menor que o ano atual.");
    }
    else {
        let sexVal = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value);
        let genr = '';
        if (sexVal[0].checked) {
            genr = "Homem";
        }else if (sexVal[1].checked){
            genr = "Mulher";
        }
        resp.style.textAlign = 'center';
        resp.innerHTML = `Detectamos ${genr} com a ${idade} anos.`;
    }
}