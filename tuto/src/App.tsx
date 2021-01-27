import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RootReducerType } from './Store'
import { fetchPokemonData } from './_actions/PokemonActions'

function App() {
   const [pokemonName, setPokemonName] = useState('')   
   const pokemonReducer = useSelector((state:RootReducerType) => state.PokemonReducer)
   const dispatch = useDispatch()

   const handlePokemonName = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value)
   const searchButtonTapped = () => {
      dispatch(fetchPokemonData(pokemonName))
   }


   return (
      <div className="App">
         <input value={pokemonName} onChange={handlePokemonName}/>
         <button onClick={searchButtonTapped}>포켓폰찾기</button>
         <div>
         {pokemonReducer.success && 
            <div>
               <p>{pokemonName}</p>
               {pokemonReducer.pokemon?.abilities.map((ability) => {
                  return <div>
                        <p>{ability.ability.name}</p>
                        <p>{ability.slot}</p>
                     </div>
                  
               })}
               <img src={pokemonReducer.pokemon?.sprites.front_default} alt="image"/>
            </div>
         }
            <p></p>
            <img/>
         </div>
      </div>
   );
}

export default App;
