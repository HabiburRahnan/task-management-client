const Banner = () => {
  return (
    <div
      className="hero h-[600px]"
      style={{
        backgroundImage: "url(https://i.ibb.co/4Jkrmtq/00585a3568a0a7d.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Let'S Explore</h1>
          <p className="mb-5">
            Plan, organize, and collaborate on any project with task management
            that can be customized for every need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
