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
        let img = document.createElement('img');

        img.setAttribute('class', 'foto');
        img.setAttribute('class','moldura');

        if (sexVal[0].checked) {
            genr = "Homem";
            if (idade >= 0 && idade < 10) {
               img.setAttribute('src','assets/imgs/img-child-trat.png');
              
            }
            else {
                if (idade < 21) {
                    img.setAttribute('src','assets/imgs/img-man-teen-alter.jpeg');
                   
                }
                else {
                    if (idade < 50) {
                        img.setAttribute('src','assets/imgs/img-man-trat.png');
                       
                    } else {
                        img.setAttribute('src','assets/imgs/img-man-old-trat.png');
                        
                    }
                }
            }
        }
        else {
            if (sexVal[1].checked) {
                genr = "Mulher";
                if (idade >= 0 && idade < 10) {
                 img.setAttribute('src','assets/imgs/img-girl-child-alter.jpeg');
                }
                else {
                    if (idade < 21) {
                        img.setAttribute('src','assets/imgs/img-girl-teen-alter.jpeg');
                    }
                    else {
                        if (idade < 50) {
                            img.setAttribute('src','assets/imgs/img-girl-woman-alter.jpeg');
                        } else {
                            img.setAttribute('src','assets/imgs/img-girl-old-alter.jpeg');
                        }
                    }
                }
            }
        }
        resp.style.textAlign = 'center';
        resp.innerHTML = `<p>Nós detectamos ${genr} com a ${idade} anos.<p/>`;
        resp.appendChild(img);
    }
}