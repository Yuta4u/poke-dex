import { getPokemon } from "../api/api"
import { useQuery, useQueryClient } from "react-query"
import PokemonCard from "./pokemonCard"

function PokemonList({ allUrl }) {
  const queryClient = useQueryClient()
  const pokemonData = queryClient.getQueryData("pokemon-data")

  const { isLoading } = useQuery(
    "pokemon-data",
    async () => {
      return await Promise.all(allUrl.map((url) => getPokemon(url)))
    },
    {
      onSuccess: (data) => queryClient.setQueryData("pokemon-data", data),
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  )

  if (isLoading) {
    return (
      <span className="loading loading-ring loading-lg absolute top-2/4 left-2/4"></span>
    )
  }

  if (pokemonData) {
    return (
      <>
        <PokemonCard data={pokemonData} />
      </>
    )
  }
}

export default PokemonList
