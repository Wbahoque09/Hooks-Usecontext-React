import useCounter from '../hooks/useCounter';



const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter();  

  return (
    <>
        <h1>Counter with Hook: { counter } </h1>
        <hr />

        <button onClick={increment} className="btn btn-primary">+1</button>
        <button onClick={reset} className="btn btn-primary">Reset</button>
        <button onClick={decrement} className="btn btn-primary">-1</button>

        {/* <h1>Contáctanos</h1>
        <fieldset>

        
            <form action="mailto:william.bahoque@silverapp.co?subject=asunto" method="post" >

                <label htmlFor="nombre">Nombre:</label>
                <input type="text" name="nombre" id="nombre" required />
                <br />
                <label htmlFor="email">Email:</label>

                <input type="email" name="email" id="email"  required />
                <br />
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
                <br />
                <input type="submit" value="Enviar" />

            </form>
        </fieldset> */}

    </>
  )
}

export default CounterWithCustomHook;
