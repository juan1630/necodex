import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch'
import { ResultsEntity, Weather } from '../../interfaces/Response.interface';
import { Content } from '../mainContent/Content';

export const SearchBar = () => {

    const [ itemsState, setItemsState  ]  = useState <ResultsEntity[]> (); 
    console.log( itemsState )

    const handleInput = async (event: React.KeyboardEvent<HTMLInputElement> ) => {

        event.preventDefault();
        if( event.currentTarget.value.length > 3 ){
           const items:  ResultsEntity[] = await useFetch( event.currentTarget.value );
            setItemsState(items );
        }
    }

   return(
    <>
        <input type="text" name="serach" className="form-control" onKeyUp={handleInput}/>
        <div className="row mt-5">

        {itemsState ? (
            <Content  results={itemsState}   />
        ) : (
            <div>Loading...</div>
      )}

        </div>
    </>    
   );
};

