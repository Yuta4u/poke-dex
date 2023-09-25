import { QueryClient, QueryClientProvider } from "react-query"
import PokemonCollection from "./components/pokemonCollection"

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonCollection />
    </QueryClientProvider>
  )
}

export default App
