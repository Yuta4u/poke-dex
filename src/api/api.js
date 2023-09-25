import axios from "axios"

export const getAllUrlPokemon = async () => {
  const res = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=700&offset=0"
  )
  return res
}

export const getPokemon = async (url) => {
  const res = await axios.get(url)
  return res
}
