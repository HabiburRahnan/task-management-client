const About = () => {
  return (
    <div>
      <div>
        <div className="bg-[#6069a6] text-white rounded-lg w-[70%] mx-auto">
          <p className="text-center p-5">
            <p className="text-center py-5 font-semibold text-lg">
              Welcome to Task management sysytem, where sweetness meets
              artistry!
            </p>
            Established [4 years ago/in 2020], Task management sysytem has been
            a haven for cake enthusiasts, creating moments of joy and
            celebration through our delightful confections. Our passion for
            baking drives us to craft cakes that not only look exquisite but
            also enchant your taste buds.
          </p>

          <div className="flex flex-col lg:flex-row justify-between">
            <div className="p-5">
              <h1 className="font-bold text-xl text-center">Address</h1>
              <p className="text-center">Dhaka,Bangladesh</p>
            </div>
            <div className="p-5">
              <h1 className="font-bold text-xl text-center">Email</h1>
              <p className="text-center">habiburrahmanofficial157@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
