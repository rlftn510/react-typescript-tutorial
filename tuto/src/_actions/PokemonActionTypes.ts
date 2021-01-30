export const POKEMON_SUCCES = 'POKEMON_SUCCES'
export const POKEMON_FAIL = 'POKEMON_FAIL'

export type PokemonType = {
   abilities: PokemonAbility[]
   sprites: PokemonSprities
}

export type PokemonAbility = {
   ability: {
      name: string
      url: string
   },
   is_hidden: boolean
   slot: number
}

export type PokemonSprities = {
   front_default: string
}

export interface pokemonFailDispatch {
   type: typeof POKEMON_FAIL
}

export interface pokemonSuccessDispatch {
   type: typeof POKEMON_SUCCES
   payload: {
      abilities: PokemonAbility[],
      sprites: PokemonSprities
   }
}

export type PokemonDispatchType = pokemonFailDispatch | pokemonSuccessDispatch