import { useState } from 'react';
import { toast } from 'react-hot-toast';

const Project = ({ title, description, image, techStack, repoLink, isPrivate, isLive, url }) => {
    const handleRepoClick = (e) => {
        if (isPrivate) {
            e.preventDefault();
            toast.error('This repository is private');
            return;
        }
    };

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="bg-white  overflow-hidden shadow-sm hover:border hover:border-gray-200 duration-300 flex flex-col">
            {/* Image Container - Fixed height */}
            <div
                className="relative h-48 cursor-pointer"
                onClick={() => setShowModal(true)}
            >
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
                    <div className="pt-4 border-t border-gray-100 flex gap-x-4">
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
                        {isLive && (
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center font-medium hover:text-blue-800"
                            >
                                View Live
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
                        )}
                    </div>
                </div>
            </div>
            {/* Image Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
                            onClick={() => setShowModal(false)}
                        >
                            ✕
                        </button>
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Project;