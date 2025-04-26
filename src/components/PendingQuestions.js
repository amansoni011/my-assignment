export default function PendingQuestions() {
    return (
      <div className="bg-white mt-6 p-4 w-90">
      <h2 className="font-bold mb-2 flex px-4 justify-between">Pending Questions <span className="bg-blue-400 px-2 rounded " style={{color:"white",background:"rgba(47, 189, 255, 1)"}}>02</span></h2>

      <div className="flex items-start gap-3 p-4 rounded-xl">
      <div className="relative">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Phoenix Baker"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>

        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 absolute bottom-3 left-[-15px] "></div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-gray-900">Phoenix Baker</p>
            <p className="text-xs text-gray-400">@phoenix</p>
          </div>
          <span className="text-xs text-gray-400">5min ago</span>
        </div>
        <p className="text-sm text-gray-700 mt-1">
          What are the requirements for opening a new store?
        </p>
      </div>
    </div>
     
    </div>
    );
  }
  