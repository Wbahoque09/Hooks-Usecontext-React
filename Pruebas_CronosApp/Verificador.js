
const Verificador = async (info, time = 1000) => {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(info);
        }, time);
      });
};

export default Verificador;
