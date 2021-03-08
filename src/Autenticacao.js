

function Autenticacao() {
    if (JSON.parse(localStorage.getItem('key')) === true) {
        return true
    }
    else {
         return false
    }
};

export default Autenticacao;