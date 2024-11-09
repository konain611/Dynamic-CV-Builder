import React, { useState } from 'react';
import styles from './SkillsInput.module.css'; 

const predefinedSkills =[
    "Agile", "Algorithms", "Angular", "Apache", "AutoCAD", "AWS", "Babel", "Big Data", 
    "Blender", "Blockchain", "Bootstrap", "CI/CD", "Command Line", "Content Writing", 
    "Contentful", "Copywriting", "Cybersecurity", "Data Analysis", "Data Science", 
    "Data Structures", "Data Visualization", "Deep Learning", "Django", "Electron", 
    "Empathy", "Ethereum", "Express.js", "Firebase", "Flask", "Game Development", 
    "Git", "GitHub", "Google Analytics", "Google Cloud", "HTML", "Illustrator", 
    "InDesign", "Interpersonal Skills", "Java", "JavaScript", "JIRA", "jQuery", "Keras", 
    "Kubernetes", "Linux", "Machine Learning", "Material UI", "Microsoft Office", 
    "MongoDB", "MySQL", "Nginx", "NoSQL", "Node.js", "Notion", "PHP", "Penetration Testing", 
    "Photoshop", "Power BI", "PowerPoint", "Product Management", "Project Management", 
    "Python", "R", "React", "REST API", "Ruby on Rails", "Salesforce", "Scikit-learn", 
    "Sketch", "Smart Contracts", "Solidity", "Spring Boot", "SQL", "Tableau", "Tailwind CSS", 
    "Team Leadership", "Technical Writing", "TensorFlow", "Time Management", "Trello", 
    "TypeScript", "UI/UX Design", "Unreal Engine", "Unix", "Vue.js", "WebSockets", "Webpack", 
    "WordPress", "XML", "AWS", "Azure", "Docker", "Google Cloud", "Kubernetes", "Terraform", 
    "Deep Learning", "Data Analysis", "Data Science", "Machine Learning", "Pandas", "NumPy", 
    "PyTorch", "Scikit-learn", "TensorFlow", "3D Modeling", "Adobe XD", "After Effects", 
    "Blender", "Figma", "Illustrator", "InDesign", "Interpersonal Skills", "Java", "JavaScript", 
    "JIRA", "jQuery", "Keras", "Kubernetes", "Linux", "Machine Learning", "Material UI", 
    "Microsoft Office", "MongoDB", "MySQL", "Nginx", "NoSQL", "Node.js", "Notion", "PHP", 
    "Penetration Testing", "Photoshop", "Power BI", "PowerPoint", "Product Management", 
    "Project Management", "Python", "R", "React", "REST API", "Ruby on Rails", "Salesforce", 
    "Scikit-learn", "Sketch", "Smart Contracts", "Solidity", "Spring Boot", "SQL", "Tableau", 
    "Tailwind CSS", "Team Leadership", "Technical Writing", "TensorFlow", "Time Management", 
    "Trello", "TypeScript", "UI/UX Design", "Unreal Engine", "Unix", "Vue.js", "WebSockets", 
    "Webpack", "WordPress", "XML", "Bitcoin", "Blockchain", "Cryptography", "Ethereum", 
    "Penetration Testing", "Smart Contracts", "Solidity", "Game Development", "3D Modeling", 
    "AutoCAD", "Blender", "Game Development", "Unity", "Unreal Engine", "Excel", "Microsoft Office", 
    "PowerPoint", "Word", "Asana", "Confluence", "JIRA", "Notion", "Slack", "Trello", "Google Analytics", 
    "Content Writing", "Copywriting", "Digital Marketing", "Marketing Automation", "SEO", "SEM", 
    "Social Media Marketing", "Public Speaking", "Team Leadership", "Time Management", "Problem Solving", 
    "Critical Thinking", "Decision Making", "Analytical Skills", "Adaptability", "Interpersonal Skills", 
    "Communication", "Creativity", "Collaboration", "Empathy", "Emotional Intelligence", "Conflict Resolution", 
    "Negotiation", "Customer Service"
  ];

export default function SkillsInput() {
    const [input, setInput] = useState('');
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [suggestions, setSuggestions] = useState([]);


    const handleInputChange = (e) => {
        const inputValue = e.target.value.toLowerCase();
        setInput(inputValue);

        if (inputValue) {
            setSuggestions(predefinedSkills.filter(skill =>
                skill.toLowerCase().includes(inputValue) && !selectedSkills.includes(skill)
            ));
        } else {
            setSuggestions([]);
        }
    };

    const selectSkill = (skill) => {
        setSelectedSkills([...selectedSkills, skill]);
        setInput('');
        setSuggestions([]);
    };

    const removeSkill = (skill) => {
        setSelectedSkills(selectedSkills.filter(s => s !== skill));
    };

    return (
        <div className="form-group">
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type to search skills..."
                className={styles.skillsInput}
            />

            <div className={styles.suggestions}>
                {suggestions.map((skill, index) => (
                    <div key={index} className={styles.suggestion} onClick={() => selectSkill(skill)}>
                        {skill}
                    </div>
                ))}
            </div>

            <div className={styles.selectedSkills}>
                {selectedSkills.map((skill, index) => (
                    <span2 key={index} className={styles.skillTag}>
                        {skill}
                        <span2 className={styles.remove} onClick={() => removeSkill(skill)}>×</span2>
                    </span2>
                ))}
            </div>
        </div>
    );
}
