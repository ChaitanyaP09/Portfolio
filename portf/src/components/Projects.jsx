import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Law Firm Website",
    description: "A modern, responsive law firm website designed to clearly present legal services, improve client reach, and ensure fast, reliable access across all devices.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    link: "https://github.com/ChaitanyaP09/Verdict_.git"
  },
  {
    title: "Text Editor Using C",
    description: "A GUI-based text editor built in C using GTK, featuring custom data structures for text handling, efficient cursor navigation, and real-time editing.",
    tags: ["C", "GTK", "Tries", "Data Structures"],
    link: "https://github.com/SurajSonawane174/Text_editor.git"
  },
  {
    title: "Movie Recommendation System",
    description: "A movie recommendation system built using machine learning and data science techniques, integrated into a web application to deliver personalized content suggestions in real time.",
    tags: ["Machine Learning", "Python", "Data Science"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
             Selected work focused on clarity, performance, and execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }} // Lifts up on hover
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-80"
            >
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-800 border-t border-gray-700">
                <a href={project.link} className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                  View Source Code <span className="ml-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;