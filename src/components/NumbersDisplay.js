
const NumbersDisplay = ({number,detail}) => {
  return (
    <div className=" flex flex-col gap-y-2 text-5xl ">
        <h1 className="font-heading font-bold tracking-wider text-center">{number}</h1>
        <h1 className=" font-basic text-detail">{detail}</h1>
    </div>
  )
}

export default NumbersDisplay