import { useLayoutEffect, useRef } from 'react';
import useCounter from '../hooks/useCounter';
import useFetch from '../hooks/useFetch';


const Layout = () => {

    const { counter, increment } = useCounter(1);

    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    // console.log({data, isLoading, hasError});
    const { author, quote } = !!data && data[0];

    const pRef = useRef();  

    useLayoutEffect(() => {

        console.log(pRef.current);

    }, []);

  return (
    <>
    
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
          isLoading
          ? (
            <div className="alert alert-info text-center">
              Loading...
            </div>
          )
          : (
            <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
              <p ref={ pRef }className="mb-1">{ quote }</p>
              <footer className="blockquote-footer">{ author }</footer>
            </blockquote>
          )
        }

        <button onClick={ () => increment() } disabled={ isLoading } className='btn btn-primary'>
          Next quote
        </button>
        

        
    
    </>
  )
}

export default Layout;