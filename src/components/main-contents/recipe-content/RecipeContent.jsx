
const RecipeContent = () => {
    return (
        
            <div className="w-full">
                {/* recipe cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[clamp(200px,3vw,250px)] lg:auto-rows-auto gap-5 sm:gap-6 lg:gap-7">

                    <div className="bg-[#3A4358] p-2 rounded-xl overflow-hidden">
                        <img
                            src="https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg"
                            className="w-full aspect-[clamp(6/3,6/3,6/2)] sm:aspect-4/2 md:h-35 xl:h-50 object-cover rounded-xl"
                        />
                        <p className="text-white py-2 px-1">
                            Apam balik
                        </p>
                    </div>

                    <div className="bg-[#3A4358] p-2 rounded-xl overflow-hidden">
                        <img
                            src="https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg"
                            className="w-full aspect-[clamp(6/3,6/3,6/2)] sm:aspect-4/2 md:h-35 xl:h-50 object-cover rounded-xl"
                        />
                        <p className="text-white py-2 px-1">
                            Apple & Blackberry Crumble
                        </p>
                    </div>

                    <div className="bg-[#3A4358] p-2 rounded-xl overflow-hidden">
                        <img
                            src="https://www.themealdb.com/images/media/meals/wxywrq1468235064.jpg"
                            className="w-full aspect-[clamp(6/3,6/3,6/2)] sm:aspect-4/2 rounded-xl"
                        />
                        <p className="text-white py-2 px-1">
                            Apple Frangipan Tart
                        </p>
                    </div>

                    <div className="bg-[#3A4358] p-2 rounded-xl overflow-hidden">
                        <img
                            src="https://www.themealdb.com/images/media/meals/rwqxrv1468232899.jpg"
                            className="w-full aspect-5/3 sm:aspect-3/2 object-cover rounded-xl"
                        />
                        <p className="text-white py-2 px-1">
                            Bakewell tart
                        </p>
                    </div>

                    <div className="bg-[#3A4358] p-2 rounded-xl overflow-hidden">
                        <img
                            src="https://www.themealdb.com/images/media/meals/vyruqu1511792916.jpg"
                            className="w-full aspect-5/3 sm:aspect-3/2 object-cover rounded-xl"
                        />
                        <p className="text-white py-2 px-1">
                            Banana Pancakes
                        </p>
                    </div>

                    <div className="bg-[#3A4358] p-2 rounded-xl overflow-hidden">
                        <img
                            src="https://www.themealdb.com/images/media/meals/hwwsvt1468261302.jpg"
                            className="w-full aspect-5/3 sm:aspect-3/2 object-cover rounded-xl"
                        />
                        <p className="text-white py-2 px-1">
                            Battenberg Cake
                        </p>
                    </div>

                </div>
            </div>

    )
}

export default RecipeContent
