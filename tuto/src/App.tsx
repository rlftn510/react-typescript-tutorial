import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RootReducerType } from './Store'
import { fetchPokemonData } from './_actions/PokemonActions'
import { theme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

function App() {
   const [pokemonName, setPokemonName] = useState('')   
   const pokemonReducer = useSelector((state:RootReducerType) => state.PokemonReducer)
   const dispatch = useDispatch()

   const handlePokemonName = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value)
   const searchButtonTapped = () => {
      dispatch(fetchPokemonData(pokemonName))
   }

   const CusButton = styled.button`
      height:40px;
      background-color: ${props => props.theme.color.main};
      border: 1px solid #ccc;
      border-radius: 4px
   `


   return (
      <ThemeProvider theme={theme}>
      <div className="App">
         <input value={pokemonName} onChange={handlePokemonName}/>
         <CusButton onClick={searchButtonTapped}>포켓폰찾기</CusButton>
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
      </ThemeProvider>
   );
}

export default App;
