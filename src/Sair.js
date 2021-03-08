
const Sair = () => {
    localStorage.removeItem('key');
    localStorage.removeItem('id')
    window.location.href='/';
};

export default Sair;