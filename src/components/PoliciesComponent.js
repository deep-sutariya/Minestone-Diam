const PoliciesComponent = ({ heading, details }) => {
    return (
        <div className=" flex flex-col items-start font-basic gap-y-3 md:gap-y-5">
            <h1 className="md:text-xl font-semibold">{heading}</h1>
            <ul className="list-disc space-y-3 md:space-y-5">
                {
                    details.map((item,index) => {
                        return <li key={index} className=" flex gap-x-2 text-sm md:text-base">
                            <div className=" min-w-fit">{item.title}{" "}{item.des}</div>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default PoliciesComponent