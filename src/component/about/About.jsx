import TiltCard from "./TiltCard";

const About = () => {
  return (
    <>
      <section
        id="about"
        className=" w-full   bg-secondary dark:bg-slate-900 dark:text-white  box-border  "
      >
        <div className="max-w-screen-xl px-5 container h-fit grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 py-20  ">
          <div className=" ">
            <TiltCard />
          </div>
          <div className=" ">
            <h1 className="font-bold text-3xl text-gray-800 dark:text-white py-3 max-sm:text-2xl">
              ABOUT ME
            </h1>
            <p className="text-justify dark:text-gray-400 max-sm:text-lg ">
              I&apos;m a web developer from the{" "}
              <span>City of Joy-KOLKATA, </span>
              Passionate about creating seamless user experiences and staying
              abreast of the latest design trends and technologies. Dedicated to
              continuous learning and expanding my skill set to adapt to the
              ever-evolving landscape of front-end development. As an effective
              communicator and team player, I love to collaborate with designers
              and back-end developers to achieve the project goals.
            </p>
            <p className="pt-4 dark:text-gray-400">
              Excited about the possibilities of creating innovative and
              user-centric web experiences. Let&apos;s build something amazing
              together!
            </p>
            <div className="flex justify-between py-3 max-sm:my-2">
              <div className="details1">
                <h3 className="font-bold uppercase dark:text-gray-200 ">
                  Name
                </h3>
                <p className="dark:text-gray-400">Manash Halder</p>
                <h3 className="font-bold uppercase pt-2 dark:text-gray-200">
                  Nationality
                </h3>
                <p className="dark:text-gray-400">Indian</p>
              </div>
              <div className="details1">
                <h3 className="font-bold uppercase dark:text-gray-200">
                  Email
                </h3>
                <p className="dark:text-gray-400">manashhalder2212@gmail.com</p>
                <h3 className="font-bold uppercase dark:text-gray-200">
                  Employment
                </h3>
                <p className="dark:text-gray-400">Open</p>
              </div>
            </div>
            <div className="">
              <button className=" border-red-800 rounded-md  font-bold dark:text-white cursor-pointer primary-btn !px-6">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
