const allSkills = [
    'JavaScript', 'React', 'Node.js', 'TypeScript', 'Material UI',
    'HTML/CSS', 'Git', 'REST APIs', 'GraphQL', 'Docker', 'Kubernetes',
    'AWS', 'Azure', 'Python', 'Java', 'C++', 'SQL', 'NoSQL'
  ];
  
  function getRandomSkills(skillList, numSkills) {
    const shuffled = skillList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numSkills);
  }
  
  export const sampleUsers = {
    1: {
      name: 'John Doe',
      location: 'New York, NY',
      profilePic: '',
      jobTitle: 'Senior Software Developer',
      skills: getRandomSkills(allSkills, 5),
    },
    2: {
      name: 'Jane Smith',
      location: 'Los Angeles, CA',
      profilePic: '',
      jobTitle: 'Frontend Engineer',
      skills: getRandomSkills(allSkills, 5),
    },
    3: {
      name: 'Alice Johnson',
      location: 'Chicago, IL',
      profilePic: '',
      jobTitle: 'Backend Developer',
      skills: getRandomSkills(allSkills, 5),
    },
    4: {
      name: 'Bob Brown',
      location: 'San Francisco, CA',
      profilePic: '',
      jobTitle: 'Full Stack Developer',
      skills: getRandomSkills(allSkills, 5),
    },
    // Add more users as needed
  };