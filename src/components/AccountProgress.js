export default function AccountProgress() {
  const percentage = 85;
  const radius = 60;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="Account bg-white p-4  rounded shadow flex flex-col items-center">
      <h2 className="font-bold mb-4">Account Progress</h2>

      <div className="relative w-32 h-32 mb-2">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="absolute top-0 left-0 rotate-[-90deg]"
        >
          {/* Background Circle */}
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          {/* Progress Circle */}
          <circle
            stroke="rgba(39, 157, 212, 1)"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>

        {/* Text in the Center */}
        <div className="absolute inset-0 flex items-center justify-center text-center  font-bold text-xl"
      >
          {percentage}%
        </div>
      </div>

      <div className=" steps text-sm ">
        <h3><strong>Steps Completed</strong> </h3>
        
        <div className="step flex justify-between" >
          <p className="flex "><span className="dot"></span> Profile Setup</p>
        </div>

        <div className="step flex justify-between " >
          <p className="flex "><span className="dot"></span>Initial Training</p>
          <i>I</i>
        </div>

        <div className="step flex justify-between" >
          <p className="flex "><span className="dot"></span>Legal Documents</p>
          <i>I</i>
        </div>

      </div>

      <div className=" steps text-sm">
        <h3><strong>Steps Remaining</strong></h3>
        <div className="step flex justify-between" >
          <p className="flex "><span className="dot"></span>Financial Integration</p>
          <i>I</i>
        </div>

        <div className="step flex justify-between" >
          <p className="flex "><span className="dot"></span>Final Review</p>
          <i>I</i>
        </div>
      </div>
    </div>
  );
}
