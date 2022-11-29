

const ShowIncrement = ({ increment }) => {

    console.log('Me volvi a generar XD !!!');

  return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment();
            }}    
        >
            Incrementar
        </button>
  )
}

export default ShowIncrement;
