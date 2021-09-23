var coorientadoresContainer = document.getElementById('coorientadoresContainer');
var addCoorientador = document.getElementById('addCoorientador');
var delCoorientador = document.getElementById('delCoorientador');

addCoorientador.onclick = function () {
    var novoCampo = document.createElement('input');
    novoCampo.setAttribute('type', 'text');
    novoCampo.setAttribute('name', 'coorientadores[]');
    novoCampo.setAttribute('class', 'form-control mb-2 col-6');
    novoCampo.setAttribute('id', 'coorientadores');
    novoCampo.setAttribute('placeholder', 'Coorientador(a)');
    coorientadoresContainer.appendChild(novoCampo);

    delCoorientador.setAttribute('class', 'btn btn-success');
}

delCoorientador.onclick = function () {
    var qtdCampos = coorientadoresContainer.getElementsByTagName('input');
    if (qtdCampos.length > 1) {
        coorientadoresContainer.removeChild(qtdCampos[(qtdCampos.length) - 1]);
        if (qtdCampos.length == 1) {
            delCoorientador.setAttribute('class', 'btn btn-success disabled');
        }
    }
}


var bancaContainer = document.getElementById('bancaContainer');
var addBanca = document.getElementById('addBanca');
var delBanca = document.getElementById('delBanca');

addBanca.onclick = function () {
    var novoCampo = document.createElement('input');
    novoCampo.setAttribute('type', 'text');
    novoCampo.setAttribute('name', 'banca[]');
    novoCampo.setAttribute('class', 'form-control mb-2');
    novoCampo.setAttribute('placeholder', 'Membro da Banca');
    bancaContainer.appendChild(novoCampo);

    delBanca.setAttribute('class', 'btn btn-success');
}

delBanca.onclick = function () {
    var qtdCampos = bancaContainer.getElementsByTagName('input');
    if (qtdCampos.length > 1) {
        bancaContainer.removeChild(qtdCampos[(qtdCampos.length) - 1]);
        if (qtdCampos.length == 1) {
            delBanca.setAttribute('class', 'btn btn-success disabled');
        }
    }
}