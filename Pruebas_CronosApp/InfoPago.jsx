/*
TIENE QUE HABER UN JSX || JS
return (
<>

<form onSubmit={ buscarCreidto || enviarPago}>
 <input>
 {datosTraidos ? <input>}
 <button
</form>

<loading/> : <Respuesta>
{datosTraidos ? <h1>Datos traidos</h1>}
</Respuesta>
</>
)
 */

import { useState } from 'react';
import Verificador from './Verificador';


const InfoPago = () => {

  const [numre, setNumre] = useState("number");
  const [vt,setVt] = useState("number"); 
  const [loading,setLoading] = useState(false);
  const [indata,setIndata] = useState(false);
  const cambiarNumref = ({target}) => {

    // console.log(target.value);
    setNumre(target.value);

  };
  const cambiarVT= ({target}) => {

    // console.log(target.value);
    setVt(target.value);

  };

  const capture = async() =>{
    setLoading(true);
    setIndata(false);
    const resp = await Verificador({ok:true,data:numre},3000);
    console.log(resp);
    setLoading(false);
    if(resp?.ok){
      console.log(resp.data)
      setIndata(true)
      return
    };
    console.log("no hubo respuesta");

  };

  const envcapture = async() => {

    const envresp = await capture({ok:true,data:numre},3000);
    if (resp?.ok) {
      <h1>H</h1>
      console.log(setIndata);
    }

  }

  return (
    <>

            <label>N° Ref: 
              <input type="number"
              placeholder='Ingrese Número Referencia' 
              value={numre} 
              onChange={cambiarNumref}/>
            </label>
            { indata && <input
            onChange={cambiarVT} 
            placeholder='Valor de transacción'/> }
            <button onClick={capture}>{ indata? 'Pagar' : 'Buscar Crédito'}</button>
            {loading  &&"cargando"}
            

    </>
  );
};

export default InfoPago;
