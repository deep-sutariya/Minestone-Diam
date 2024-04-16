
const NumbersDisplay = ({number,detail}) => {
  return (
    <div className=" flex flex-col sm:gap-y-2 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ">
        <h1 className="font-heading font-bold md:tracking-wider text-center">{number}</h1>
        <h1 className=" font-basic text-detail tracking-tighter md:tracking-wide">{detail}</h1>
    </div>
  )
}

export default NumbersDisplay