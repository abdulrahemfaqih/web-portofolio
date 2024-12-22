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

export default Project;