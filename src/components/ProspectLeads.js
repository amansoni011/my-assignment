export default function ProspectLeads() {
  const leads = [
    { 
      name: "Cody Fisher", 
      stage: "Initial Inquiry", 
      img: "https://randomuser.me/api/portraits/men/32.jpg" 
    },
    { 
      name: "Wade Warren", 
      stage: "Initial Inquiry", 
      img: "https://randomuser.me/api/portraits/men/45.jpg" 
    },
    { 
      name: "Ava Wright", 
      stage: "Initial Inquiry", 
      img: "https://randomuser.me/api/portraits/women/65.jpg" 
    }
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-4">Prospect Leads</h2>
      <div className="">
        {leads.map((lead, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 my-2 rounded-2xl"
          >
            <div className="flex items-center gap-3">
              {/* Profile Image */}
              <img
                src={lead.img}
                alt={lead.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              {/* Name */}
              <span className=" text-gray-800">{lead.name}</span>
            </div>
            {/* Stage */}
            <span className="text-gray-500 text-sm">Stage: {lead.stage}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
