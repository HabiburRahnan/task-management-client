const Benefit = () => {
  return (
    <div className="my-16">
      <div className="grid md:grid-cols-2 gap-8 mt-20 w-[400px] md:w-[740px] lg:w-full mx-auto">
        <div className="bg-slate-400 p-10 space-y-4 text-black rounded-lg">
          <img
            className="w-36"
            src="https://i.ibb.co/ZV72K0D/service1-61241c61.webp"
            alt=""
          />
          <h1 className="text-3xl font-bold">Doctors</h1>
          <p className="text-slate-800">
            Doctors benefit from the TASKTRACKER website by efficiently managing
            patient appointments, medical records, and treatment plans. It helps
            streamline healthcare workflows, improves scheduling accuracy,
            ensures better patient care coordination, and assists in timely
            follow-ups, enhancing overall medical practice efficiency.
          </p>
          <h2 className="text-blue-600 text-3xl">
            <span className="underline">Learn More</span> ➥
          </h2>
        </div>
        <div className="bg-slate-400 p-10 space-y-4 text-black rounded-lg">
          <img
            className="w-36 h-36"
            src="https://i.ibb.co/jH2CrQW/images.jpg"
            alt=""
          />
          <h1 className="text-3xl font-bold">Developers</h1>
          <p className="text-slate-800">
            Developers benefit from TASKTRACKER website by efficiently managing
            tasks, deadlines, and collaborations. It streamlines workflow,
            enhances team coordination, and boosts productivity by offering a
            centralized platform for task allocation and monitoring, ensuring
            better project management.
          </p>
          <h2 className="text-blue-600 text-3xl">
            <span className="underline">Learn More</span> ➥
          </h2>
        </div>
        <div className="bg-slate-400 p-10 space-y-4 text-black rounded-lg">
          <img
            className="w-36"
            src="https://i.ibb.co/pR6WHJM/images-1.jpg"
            alt=""
          />
          <h1 className="text-3xl font-bold">Bankers</h1>
          <p className="text-slate-800">
            Bankers benefit from the TASKTRACKER website by efficiently tracking
            financial tasks, managing client requests, and adhering to
            deadlines. It aids in organizing banking operations, monitoring
            transactions, and ensuring regulatory compliance, efficiency and
            customer service within the banking sector.
          </p>
          <h2 className="text-blue-600 text-3xl">
            <span className="underline">Learn More</span> ➥
          </h2>
        </div>
        <div className="bg-slate-400 p-10 space-y-4 text-black rounded-lg">
          <img
            className="w-36 h-36"
            src="https://i.ibb.co/d5zVGxJ/images-2.jpg"
            alt=""
          />
          <h1 className="text-3xl font-bold">Corporate Professionals</h1>
          <p className="text-slate-800">
            Corporate professionals benefit from the TASKTRACKER website by
            efficiently organizing tasks, improving communication among teams,
            and ensuring timely project completion. It facilitates better task
            prioritization, collaboration, and overall project management,
            enhancing productivity within corporate settings.
          </p>
          <h2 className="text-blue-600 text-3xl">
            <span className="underline">Learn More</span> ➥
          </h2>
        </div>
      </div>

      <button className="btn text-white bg-[#6069a6] w-96 flex mx-auto justify-center items-center mt-16 ">
        See All
      </button>
    </div>
  );
};

export default Benefit;
