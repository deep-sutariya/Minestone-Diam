import TranslateFragment from "./Animations/TranslateFragment"

const TeamCard = ({ name, surname, role }) => {
    return (
        <div className="flex-1 min-w-[250px] max-w-[300px] h-[350px] duration-150">
            <TranslateFragment y="100">
                <div className="flex flex-col gap-y-4 px-2 md:px-8 text-center py-2 md:py-4 border backdrop-blur-md hover:scale-105 duration-150 cursor-pointer h-full overflow-hidden">
                    <div className="flex flex-col justify-center items-center"> 
                        <div className="text-[9px] md:text-lg lg:text-xl font-heading font-semibold">{name}</div>
                        <div className="text-[9px] md:text-lg lg:text-xl font-heading font-semibold">{surname}</div>
                    </div>
                    <div className="text-[7px] md:text-base font-basic text-[#252525]">{role}</div>
                </div>
            </TranslateFragment>
        </div>
    )
}

export default TeamCard
