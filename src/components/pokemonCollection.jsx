import { getAllUrlPokemon } from "../api/api"
import { useQuery } from "react-query"

import PokemonList from "./pokemonList"

function PokemonCollection() {
  const { isError, data, error } = useQuery("allUrlPokemon", getAllUrlPokemon, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  if (data) {
    const allUrlPokemon = data?.data?.results.map((e) => e.url)

    return <>{<PokemonList allUrl={allUrlPokemon} />}</>
  }
}

export default PokemonCollection
