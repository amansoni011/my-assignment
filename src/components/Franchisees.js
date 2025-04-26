export default function Franchisees() {
  const avatars = [
    { img: "https://randomuser.me/api/portraits/women/68.jpg" },
    { img: "https://randomuser.me/api/portraits/men/75.jpg" },
    { img: "https://randomuser.me/api/portraits/women/45.jpg" },
    { img: "https://randomuser.me/api/portraits/women/50.jpg" },
    { img: "https://randomuser.me/api/portraits/women/30.jpg" },
  ];

  return (
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold">Total Franchisees Onboard</h2>
       <div className="flex justify-between">
       <p className="text-3xl mt-2 flex items-center gap-4">
          14 
          <span className="text-green-500 px-2 border rounded-full text-xl ">+7.4%</span>
        </p>
   
        <div className="flex -space-x-4">
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={avatar.img}
          alt={`Avatar ${index}`}
          className="w-10 h-10 rounded-full border-2 border-white object-cover"
        />
      ))}

      <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600">
        +7
      </div>
    </div>
  
       </div>
        <div className="Lines flex py-6 gap-2">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <div className="onboard text-sm flex flex-col gap-3">
        <div className=" flex justify-between" >
          <p className="flex "><span className="dot" style={{ backgroundColor: 'rgba(31, 126, 170, 1)'}}></span>Stage 1 (Initial Inquiry)</p>
          <strong>02</strong>
        </div>
        <div className="step flex justify-between" >
          <p className="flex "><span className="dot" style={{ backgroundColor: 'rgba(47, 189, 255, 1)'}}></span>Stage 2 (Document Submission)</p>
          <strong>07</strong>
        </div>
        <div className="step flex justify-between" >
          <p className="flex "><span className="dot" style={{ backgroundColor: 'rgba(151, 222, 255, 1)'}}></span>Stage 2 (Document Submission)</p>
          <strong>07</strong>
        </div>
      </div>

      </div>
    );
  }
  