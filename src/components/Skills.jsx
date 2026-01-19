import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: "Core & Algorithms", items: ["C/C++ (DSA)", "Java(OOP)", "Python"] },
  { category: "Frontend Development", items: ["React.js", "Tailwind CSS", "JavaScript"] },
  { category: "Other", items: ["Machine Learning", "MySQL", "REST API"] },
  { category: "Tools", items: ["Git & GitHub", "VS Code", "Linux"] }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 } // Delays each child by 0.3s
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-white  sm:text-4xl">Technical Skills</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            My tech stack for building scalable applications.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Triggers when 20% visible
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }} // Slight pop on hover
              className="bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-200 mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;