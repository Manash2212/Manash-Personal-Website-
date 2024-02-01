// import React from 'react'

// import TiltCard from "../about/TiltCard";
import ContactImg from "../../../public/contact.png";
// import BgMap from "../../../public/map.png";

const Contact = () => {
  const backgrouundStyle = {
    backgroundImage: "url(../../../public/map2.png",
    backgrouundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <section
        id="contact"
        className={`w-full h-fit py-10 bg-secondary dark:bg-slate-900 dark:text-white box-border border-2 border-white 
         `}
        style={backgrouundStyle}
      >
        <div className="container text-center">
          <h1 className="heading text-7xl max-sm:text-5xl font-bold">
            Get In Touch
          </h1>
          <div className="max-w-screen-xl mx-auto  flex items-center justify-between max-sm:flex-col max-sm:gap-5 py-20 px-5">
            <div className="contactImg  w-5/12 h-3/5 max-sm:w-full max-sm:h-full max-md:w-full max-md:h-full shadow-xl rounded-xl py-3">
              <img
                src={ContactImg}
                alt="ContactImg"
                className="mx-auto w-full   "
              />
            </div>
            <div className="contactForm shadow-xl rounded-xl py-3">
              {" "}
              <div className="contactPage flex flex-col items-center justify-center gap-5">
                <h2 className="contactTitle text-5xl font-bold max-sm:text-3xl">
                  Contact Me
                </h2>
                <span className="contactDesc text-base font-medium text-slate-900 dark:text-slate-300 ">
                  Want to get in touch? I would love to hear from you. Here is
                  the form to connect with me.
                </span>
                <form
                  action=""
                  className="contactForm w-full flex flex-col items-center justify-center gap-6  "
                >
                  <input
                    type="text"
                    className=" name w-3/5 max-sm:w-full border-none outline-none text-base font-medium rounded-xl py-2 bg-slate-400 placeholder-gray-800 dark:bg-slate-300 px-2 text-black dark:text-gray-900"
                    name="from_name"
                    placeholder="Enter your name"
                    required
                  />
                  <input
                    type="email"
                    className=" email w-3/5 max-sm:w-full border-none outline-none text-base font-medium rounded-xl py-2 bg-slate-400 placeholder-gray-800 dark:bg-slate-300 px-2 text-black dark:text-gray-900"
                    name="your_email"
                    placeholder="Enter your email"
                    required
                  />
                  <textarea
                    className="msg w-3/5 max-sm:w-full border-none outline-none text-base font-medium rounded-xl py-2 bg-slate-400 placeholder-gray-800 dark:bg-slate-300 px-2 text-black dark:text-gray-900"
                    name="message"
                    placeholder="Leave a message"
                    rows="5"
                  ></textarea>
                  <button
                    value="Send"
                    className="submitButton border-2 border-black text-white bg-gray-900 font-bold dark:bg-secondary dark:text-gray-900 py-1 px-3 rounded-2xl text-xl"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
