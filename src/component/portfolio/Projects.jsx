import { Link } from "react-router-dom";

const projects = [
  {
    name: "Personal portfolio",
    description:
      "Implemented a Personal Portfolio using Vite+React Tailwind CSS, Framer motion , and Lots of",
    image: "../../../public/Project_2.jpg",
    url: "https://github.com/",
  },
  {
    name: "Video hub",
    description: "Implemented a Video Service app ",
    image: "../../../public/Project_2.jpg",
    url: "https://video-hub-chakra-ui-eight.vercel.app/",
  },
  {
    name: "Restaurent website",
    description:
      "Implemented a Restaurent Website using HTML5 and CSS3 to utilize my FlexBox Skill",
    image: "../../../public/Project_3.jpg",
    url: "https://restaurent-flex.vercel.app/",
  },
  {
    name: "Crypto tracker",
    description: "Implemented a crypto curruency tracker application",
    image: "../../../public/Project_4.jpg",
    url: "https://crypto-currency-chakra-ui.vercel.app/",
  },
];

const Projects = () => {
  return (
    <>
      <section id="projects" className="my-10 container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order- ">
          {projects.map((project, i) => (
            <div
              key={i}
              className=" bg-slate-200 dark:bg-gray-800 flex items-center justify-between max-sm:flex-col rounded-xl hover:bg-slate-300 shadow-lg py-4"
            >
              <Link
                to={project.url}
                target="_blank"
                className=" w-full flex items-center justify-between gap-2 max-sm:flex-col"
              >
                <img
                  src={project.image}
                  alt=""
                  className="max-w-48 max-h-48 m-2 rounded-xl"
                />
                <div className="aboutContent mx-auto flex flex-col gap-2 text-center">
                  <h2 className="text-3xl max-sm:text-2xl dark:text-white  ">
                    {project.name}
                  </h2>
                  <p className="text-sm text-center dark:text-gray-400 font-medium">
                    {project.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
