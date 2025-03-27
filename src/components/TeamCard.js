import TranslateFragment from "./Animations/TranslateFragment"

const TeamCard = ({ name, surname, role }) => {
    return (
        <div className=" duration-150 min-w-1/4">
            <TranslateFragment y="100">
                <div className=" flex-col gap-y-4 px-2 md:px-8 text-center py-2 md:py-4 border backdrop-blur-md hover:scale-105 duration-150 cursor-pointer">
                <div className="flex flex-col justify-center items-center"> 
                    <div className="text-[11px] md:text-lg lg:text-2xl font-heading font-semibold">{name}</div>
                    <div className="text-[11px] md:text-lg lg:text-2xl font-heading font-semibold">{surname}</div>
                </div>
                    <div className="text-[8px] md:text-base font-basic text-[#252525]">{role}</div>
                </div>
            </TranslateFragment>
        </div>
    )
}

export default TeamCard
