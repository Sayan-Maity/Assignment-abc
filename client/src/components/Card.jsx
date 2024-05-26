
const Card = ({title, data, color}) => {
  return (
    <div className={`bg-white shadow-md p-6 w-[15rem] rounded-md items-center text-center justify-center border-emerald-300 border-l-4 ${color === "red"? "border-red-300": color==="green"? "border-emerald-300" : color==="yellow" ? "border-yellow-300" : "border-blue-300"}`}>
        <p className="">🌡️ {title}</p>
        <p className="text-3xl font-bold ">{data}</p>
      
    </div>
  )
}

export default Card
