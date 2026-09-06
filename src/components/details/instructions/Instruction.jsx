
const Instruction = ({instructions}) => {
  return (
    <div className="mt-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-10 bg-blue-500 rounded-full"></div>

              <h2 className="text-white font-bold text-xl">Instructions</h2>
            </div>

            <p className="text-white leading-7">
              {instructions}
            </p>
          </div>
  )
}

export default Instruction
