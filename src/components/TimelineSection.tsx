export default function TimelineSection() {
  // Modified steps with emphasized words using JSX
  const steps = [
    <>Socially conscious <span className="font-bold text-[#BBD0FF]">computer science students</span> lead the program.</>,
    <>Representatives from <span className="font-bold text-[#BBD0FF]">every campus department</span> join the committee.</>,
    <>Department representatives propose <span className="font-bold text-[#BBD0FF]">faculty-led projects</span> requiring technical expertise.</>,
    <>The committee outlines <span className="font-bold text-[#BBD0FF]">technical requirements</span>, students needed, outcomes, and timeline.</>,
    <>The <span className="font-bold text-[#BBD0FF]">technical faculty advisor</span> ensures feasibility and approves the project.</>,
    <>Approved projects are sent to <span className="font-bold text-[#BBD0FF]">computer science professors</span> teaching relevant courses.</>,
    <>Students can <span className="font-bold text-[#BBD0FF]">apply to work</span> on projects, with applications evaluated by the committee.</>
  ];

  return (
    <section className="p-6 mb-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 mt-5 text-center">How Beyond Code Works</h2>
      
      <div className="overflow-x-auto py-8">
        <div className="flex min-w-max relative">
          {/* Horizontal line */}
          <div className="absolute top-6 left-8 right-8 h-1 bg-[#9999BB]"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative px-4 flex-shrink-0 w-64">
              {/* Circle indicator */}
              <div className="absolute w-5 h-5 bg-[#8282B0] rounded-full top-4 left-1/2 -ml-2.5 z-10 border-2 border-[#262633] 
                  " />
              
              {/* Step number */}
              <div className="text-center text-[#B8B8D8] font-bold mb-8 mt-12">Step {index + 1}</div>
              
              {/* Card with hover animations */}
              <div className="bg-[#5D5D7A] shadow-lg p-3 rounded-xl h-40 overflow-y-auto border border-[#7979A1]
                   transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-[#6A6A8A] 
                   hover:border-[#8989B1] transform origin-center">
                <p className="text-white text-sm">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
