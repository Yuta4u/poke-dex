import { useState } from "react"
import Card from "./shared/card"
import GithubIcon from "../assets/github-yuta4u.png"

function PokemonCard({ data }) {
  const [pages, setPages] = useState(1)
  const [pagesData, setPagesData] = useState(data)

  // HANDLE PAGINATION
  const handleOnClickLeftPage = () => pages > 1 && setPages(pages - 1)
  const handleOnClickRightPage = () =>
    Math.floor(pagesData.length / 15) >= pages && setPages(pages + 1)

  // HANDLE SEARCH INPUT
  const handleInput = (e) => {
    if (e.target.value.length === 0) {
      setPagesData(data)
    } else {
      setPagesData(
        data.filter((data) => data.data.name.includes(e.target.value))
      )
      setPages(1)
    }
  }

  const pagesDataPerPage = pagesData.slice((pages - 1) * 15, pages * 15)

  return (
    <div className="mockup-browser bg-base-300">
      <div className="mockup-browser-toolbar ">
        <input
          className="input input-md"
          onChange={handleInput}
          placeholder="pokedex by yuta"
        />
        <a href="https://www.w3schools.com" className="w-14 h-6 ">
          <div className="w-6 h-6 rounded-full ml-5 flex justify-center hover:cursor-pointer">
            <img src={GithubIcon} />
          </div>
        </a>
      </div>

      <div className="px-4 py-16 bg-base-200">
        {/* PAGES DATA  */}
        <div className="flex justify-center flex-wrap gap-6">
          {pagesDataPerPage?.map((e, i) => (
            <Card key={i} data={e} />
          ))}
        </div>

        {/* PAGINATION  */}
        <div className="join flex justify-center m-4">
          <button className="join-item btn" onClick={handleOnClickLeftPage}>
            «
          </button>
          <button className="join-item btn">{pages && pages}</button>
          <button className="join-item btn" onClick={handleOnClickRightPage}>
            »
          </button>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
