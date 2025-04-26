export default function FinancialWellbeing() {
    return (
      <div className="bg-white p-4 rounded shadow ">
        <h2 className="font-bold">Financial Wellbeing</h2>
          <div className="flex  justify-between items-center ">
          <p className="text-3xl mt-2 flex flex-col justify-between">20 
          <span className="text-sm mt-2">Total Franchisees</span>
          </p>
          <span className="text-green-500 px-2 border rounded-full h-1/2 text-xl">+2.1%</span>
          </div>
        <div className="grid grid-cols-2 gap-4 py-2">
          <div className="flex flex-col bg-red-50 justify-center items-center gap-6 p-4 rounded-xl" style={{ backgroundColor: 'rgba(246, 247, 251, 1)'}}>
            <p>Target</p>
            <h1 className="text-3xl">$500,000</h1>
            </div>
          <div className="flex flex-col bg-red-50 justify-center items-center gap-6 p-4 rounded-xl" style={{ backgroundColor: 'rgba(246, 247, 251, 1)'}}>
            <p>Current</p>
            <h1 className="text-3xl">$500,000</h1>
            </div>
         
        </div>
      </div>
    );
  }
  