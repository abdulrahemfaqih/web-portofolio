

// eslint-disable-next-line react/prop-types
const Project = ({ title, description, image, techStack, repoLink }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:border hover:border-gray-200 duration-300">
    {/* Image Container */}
    <div className="relative h-52 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Content Container - Using flex-col and h-full to ensure consistent heights */}
    <div className="p-6 flex flex-col h-[calc(100%-13rem)]">
      {/* Title */}
      <h3 className="text-xl font-semibold mb-3 text-gray-800">
        {title}
      </h3>

      {/* Description - Using line-clamp to ensure consistent height */}
      <p className="text-gray-600 mb-4 line-clamp-3">
        {description}
      </p>

      {/* Tech Stack - Using flex-wrap and gap for consistent spacing */}
       <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100 flex items-center gap-1"
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-4 h-4"
          />
          {tech.name}
        </span>
    ))}
  </div>

      {/* Repository Link - Using mt-auto to push to bottom */}
      <div className="mt-auto pt-4 border-t border-gray-100">
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center  hover:text-blue-800 font-medium"
        >
          View Repository
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projectData = [
    {
      title: "Sistem Sekolah Terintegrasi",
      description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      image: "/api/placeholder/400/300",
      techStack: [
        {
          name: "React",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        },
        {
          name: "Node.js",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
        },
        {
          name: "MongoDB",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
        },
        {
          name: "Express",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
        }
      ],
      repoLink: "https://github.com/yourusername/project1"
    },
    {
      title: "Tambal Ban Online",
      description: "A collaborative task management application with real-time updates and team features.",
      image: "/api/placeholder/400/300",
      techStack: [
        {
          name: "React",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        },
        {
          name: "Firebase",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg"
        },
        {
          name: "Tailwind",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
        }
      ],
      repoLink: "https://github.com/yourusername/project2"
    },
    {
      title: "Sitem Indikator Kinerja",
      description: "A collaborative task management application with real-time updates and team features.",
      image: "/api/placeholder/400/300",
      techStack: [
        {
          name: "React",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        },
        {
          name: "Firebase",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg"
        },
        {
          name: "Tailwind",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
        }
      ],
      repoLink: "https://github.com/yourusername/project2"
    },
    {
      title: "Sistem Klasidikasi Kanker Payudara",
      description: "A collaborative task management application with real-time updates and team features.",
      image: "/api/placeholder/400/300",
      techStack: [
        {
          name: "React",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        },
        {
          name: "Firebase",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg"
        },
        {
          name: "Tailwind",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
        }
      ],
      repoLink: "https://github.com/yourusername/project2"
    },
    {
      title: "Sistem Informasi Puskesmas",
      description: "A collaborative task management application with real-time updates and team features.",
      image: "/api/placeholder/400/300",
      techStack: [
        {
          name: "React",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        },
        {
          name: "Firebase",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg"
        },
        {
          name: "Tailwind",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
        }
      ],
      repoLink: "https://github.com/yourusername/project2"
    },
    {
      title: "Sistem Rencana Studi",
      description: "A collaborative task management application with real-time updates and team features.",
      image: "/api/placeholder/400/300",
      techStack: [
        {
          name: "React",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        },
        {
          name: "Firebase",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg"
        },
        {
          name: "Tailwind",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
        }
      ],
      repoLink: "https://github.com/yourusername/project2"
    },

    {
      title: "Sistem Cuti Akademik",
      description: "A collaborative task management application with real-time updates and team features.",
      image: "/api/placeholder/400/300",
      techStack: [
        {
          name: "React",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        },
        {
          name: "Firebase",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg"
        },
        {
          name: "Tailwind",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
        }
      ],
      repoLink: "https://github.com/yourusername/project2"
    },
    {
      title: "Microservice Sistem Cuti Akademik",
      description: "A collaborative task management application with real-time updates and team features.",
      image: "/api/placeholder/400/300",
      techStack: [
        {
          name: "React",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        },
        {
          name: "Firebase",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg"
        },
        {
          name: "Tailwind",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
        }
      ],
      repoLink: "https://github.com/yourusername/project2"
    },
    {
      title: "Sistem Kasir Toko",
      description: "A collaborative task management application with real-time updates and team features.",
      image: "/api/placeholder/400/300",
      techStack: [
        {
          name: "React",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        },
        {
          name: "Firebase",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg"
        },
        {
          name: "Tailwind",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
        }
      ],
      repoLink: "https://github.com/yourusername/project2"
    }
  ];

  return (
    <div className="container  py-16" id='projects'>
      <h1 className="relative-hover-effect text-4xl font-bold mb-12 text-gray-900">
        PROJECT
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;