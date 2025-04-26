export default function InsightsFeedback() {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold">Key Insights & Feedback</h2>
          <div className="flex  justify-between items-center ">
          <p className="text-3xl mt-2 flex flex-col justify-between">10% 
          <span className="text-sm mt-2">Sales Growth</span>
          </p>
          <div className="left flex flex-col  items-center" >
          <img
          src="Avatar.png"
          alt="Phoenix Baker"
          className="w-10 h-10 rounded-full object-cover"
        />
          <p className="text-sm mt-2">Top Performer</p>
          </div>  
          </div>

         <div className=" steps text-sm">
        <h3><strong>Feedback</strong> </h3>
        <div className="step flex justify-between" >
          <p className="flex "><span className="dot"></span>Franchisees are requesting more detailed training materials.</p>
        </div>
      </div>
      </div>
    );
  }
  