function modal({ data }) {
  const stats = data.stats
  return (
    <dialog id={`my_modal_${data.name}`} className="modal">
      <div className="modal-box h-96">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-3xl">Stat</h3>
        <h3 className="text-lg">{data.name}</h3>
        <div className="h-4/6 my-5 flex flex-col justify-between">
          {stats.map((e, i) => (
            <div key={i} className="flex justify-between">
              <div className="w-30">{e.stat.name}</div>
              <div className="justfiy-center">
                <progress
                  className="progress w-36"
                  value={e.base_stat}
                  max="100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </dialog>
  )
}

export default modal
