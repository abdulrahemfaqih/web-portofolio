import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import projectData from '../data/projectData';
import GithubStats from './common/GithubStats';
import Project from './common/Project';



const Projects = () => {
    return (
        <div className="container py-6" id='projects'>
            <h1 className="relative-effect text-4xl font-bold  text-gray-900">
                PROJECT
            </h1>

            {/* Wrapper dengan padding yang lebih besar */}
            <div className="bg-white p-8  border-b-2 border-gray-200 mb-12 ">
                <div className="flex items-center justify-between">
                    {/* <h2 className="text-2xl font-semibold text-gray-800 mb-6">GitHub Contributions</h2> */}
                    <GithubStats
                        username="abdulrahemfaqih"
                        colorScheme="light"
                        fontSize={14}
                        blockSize={19}  // Memperbesar ukuran block
                        blockMargin={5} // Menjaga jarak antar block
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectData.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </div>
    );
};
export default Projects;