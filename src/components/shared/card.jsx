import { Type } from "../../utils/badgeColor"
import Modal from "./modal"

function card({ data }) {
  const dataPokemon = data?.data
  const pokeName = dataPokemon.name
  const pokeImage = dataPokemon.sprites.other.dream_world.front_default
  const pokeType = dataPokemon.types
  const pokeStats = dataPokemon.stats
    .sort((a, b) => b.base_stat - a.base_stat)
    .slice(0, 2)

  return (
    <div
      className="card w-96 bg-base-100 shadow-inner shadow-white hover:scale-105 cursor-pointer active:scale-95"
      onClick={() =>
        document.getElementById(`my_modal_${dataPokemon.name}`).showModal()
      }
    >
      <Modal data={dataPokemon} />
      <div className="flex justify-center h-44 p-5 m-2 rounded-lg bg-slate-200">
        <img src={pokeImage} />
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {pokeName}
          {pokeType.map((e, i) => (
            <div
              className={`badge ${Type[e.type.name].color}  text-fuchsia-50`}
              key={i}
            >
              {e.type.name.toUpperCase()}
            </div>
          ))}
        </h2>
        <p>pokemon lucu banget tapi masih lucuan kamu sih xixixixi</p>
        <div className="card-actions justify-end">
          {pokeStats.map((e, i) => (
            <div key={i} className="badge badge-outline text-xs">
              {e.stat.name.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default card
