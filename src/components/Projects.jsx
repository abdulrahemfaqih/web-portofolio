

import sekolah from '../assets/images/sekolah.png';
import sidik from '../assets/images/sidik.png';
import tambol from '../assets/images/tambol.svg';
import kanker_payudara from '../assets/images/kanker_payudara.png';
import rencana from '../assets/images/rencana.png';
import studi1 from '../assets/images/studi1.png';
import kasir from '../assets/images/kasir.png';
import sister from '../assets/images/sister.png';
import puskesmas from '../assets/images/puskesmas.png';
import toast from 'react-hot-toast';

// eslint-disable-next-line react/prop-types
const Project = ({ title, description, image, techStack, repoLink, isPrivate }) => {
    const handleRepoClick = (e) => {
        if (isPrivate) {
            e.preventDefault();
            toast.error('This repository is private');
            return;
        }
    };

    return (
        <div className="bg-white  overflow-hidden shadow-sm hover:border hover:border-gray-200 duration-300 flex flex-col">
            {/* Image Container - Fixed height */}
            <div className="relative h-52 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Content Container - Flex with dynamic height */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Title - Fixed height */}
                <h3 className="text-xl font-semibold mb-3 text-gray-800 h-7 line-clamp-1">
                    {title}
                </h3>

                {/* Description - Fixed height with line clamp */}
                <div className="mb-4 h-[4.5rem]">
                    <p className="text-gray-600 line-clamp-3">
                        {description}
                    </p>
                </div>

                {/* Tech Stack - Auto height, pushed to bottom */}
                <div className="mt-auto">
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

                    {/* Repository Link */}
                    <div className="pt-4 border-t border-gray-100">
                        <a
                            href={repoLink}
                            onClick={handleRepoClick}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center font-medium ${isPrivate ? 'text-gray-400 cursor-not-allowed' : 'hover:text-blue-800'}`}
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
        </div>
    );
};
const Projects = () => {
    const projectData = [
        {
            title: "Learning Management System",
            description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
            image: sekolah,
            techStack: [
                {
                    name: "JavaScript",
                    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                },
                {
                    name: "Laravel",
                    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg"
                },
                {
                    name: "Tailwind",
                    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
                },
                {
                    name: "MySQL",
                    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
                }
            ],
            repoLink: "https://github.com/yourusername/project1",
            isPrivate: false
        },
        {
            title: "Tambal Ban Online",
            description: "A collaborative task management application with real-time updates and team features.",
            image: tambol,
            techStack: [
                {
                    name: "React",
                    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                },
                {
                    name: "MySQL",
                    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
                },
                {
                    name: "Tailwind",
                    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
                },
            ],
            repoLink: "https://github.com/yourusername/project2",
            isPrivate: false
        },
        {
            title: "Sitem Indikator Kinerja - SIDIK",
            description: "A collaborative task management application with real-time updates and team features.",
            image: sidik,
            techStack: [
                {
                    name: "Codeigniter",
                    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/codeigniter/codeigniter-plain.svg"
                },
                {
                    name: "MySQL",
                    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
                },
                {
                    name: "Bootstrap",
                    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"
                }
            ],
            repoLink: "https://github.com/yourusername/project2",
            isPrivate: true
        },
        {
            title: "Sistem Klasidikasi Kanker Payudara",
            description: "A collaborative task management application with real-time updates and team features.",
            image: kanker_payudara,
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
            repoLink: "https://github.com/yourusername/project2",
            isPrivate: false
        },
        {
            title: "Sistem Informasi Puskesmas",
            description: "A collaborative task management application with real-time updates and team features.",
            image: puskesmas,
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
            repoLink: "https://github.com/yourusername/project2",
            isPrivate: true
        },
        {
            title: "Sistem Rencana Studi",
            description: "A collaborative task management application with real-time updates and team features.",
            image: rencana,
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
            repoLink: "https://github.com/yourusername/project2",
            isPrivate: false
        },

        {
            title: "Sistem Cuti Akademik",
            description: "A collaborative task management application with real-time updates and team features.",
            image: studi1,
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
            repoLink: "https://github.com/yourusername/project2",
            isPrivate: false
        },
        {
            title: "Microservice Sistem Cuti Akademik",
            description: "A collaborative task management application with real-time updates and team features.",
            image: sister,
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
            repoLink: "https://github.com/yourusername/project2",
            isPrivate: false
        },
        {
            title: "Sistem Kasir Toko",
            description: "A collaborative task management application with real-time updates and team features.",
            image: kasir,
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
            repoLink: "https://github.com/yourusername/project2",
            isPrivate: false
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