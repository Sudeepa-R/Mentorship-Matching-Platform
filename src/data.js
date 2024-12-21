const allSkills = [
  "JavaScript",
  "React",
  "Node.js",
  "TypeScript",
  "Material UI",
  "HTML/CSS",
  "Git",
  "REST APIs",
  "GraphQL",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Python",
  "Java",
  "C++",
  "SQL",
  "NoSQL",
];

function getRandomSkills(skillList, numSkills) {
  const shuffled = skillList.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numSkills);
}

export const sampleUsers = {
  1: {
    name: "John Doe",
    location: "New York, NY",
    profilePic: "",
    jobTitle: "Senior Software Developer",
    skills: getRandomSkills(allSkills, 5),
  },
  2: {
    name: "Jane Smith",
    location: "Los Angeles, CA",
    profilePic: "",
    jobTitle: "Frontend Engineer",
    skills: getRandomSkills(allSkills, 5),
  },
  3: {
    name: "Alice Johnson",
    location: "Chicago, IL",
    profilePic: "",
    jobTitle: "Backend Developer",
    skills: getRandomSkills(allSkills, 5),
  },
  4: {
    name: "Bob Brown",
    location: "San Francisco, CA",
    profilePic: "",
    jobTitle: "Full Stack Developer",
    skills: getRandomSkills(allSkills, 5),
  },
  // Add more users as needed
};


export const stories = [
  {
    image:
      "https://img.freepik.com/free-vector/3d-cartoon-people-concept-online-meeting-virtual-conference-video-call_40876-3763.jpg?t=st=1734586121~exp=1734589721~hmac=4ba87f4f92998bcd4b2e739c142939f95eef8dbe4b98f5e022e8b1b04dd69cd5&w=900",
    title: "Story 1",
    content:
      "Learn more about how our platform can help you connect with mentors and unlock new opportunities.",
  },
  {
    image:
      "https://img.freepik.com/free-vector/3d-cartoon-people-concept-online-meeting-virtual-conference-video-call_40876-3763.jpg?t=st=1734586121~exp=1734589721~hmac=4ba87f4f92998bcd4b2e739c142939f95eef8dbe4b98f5e022e8b1b04dd69cd5&w=900",
    title: "Story 2",
    content:
      "Learn more about how our platform can help you connect with mentors and unlock new opportunities.",
  },
  {
    image:
      "https://img.freepik.com/free-vector/3d-cartoon-people-concept-online-meeting-virtual-conference-video-call_40876-3763.jpg?t=st=1734586121~exp=1734589721~hmac=4ba87f4f92998bcd4b2e739c142939f95eef8dbe4b98f5e022e8b1b04dd69cd5&w=900",
    title: "Story 3",
    content:
      "Learn more about how our platform can help you connect with mentors and unlock new opportunities.",
  },
]

export const plans = [
  { title: 'Unlimited', content: 'Learn more about how our platform can help you connect with mentors and unlock new opportunities.Learn more about how our platform can help you connect with mentors and unlock new opportunities.Learn more about how our platform can help you connect with mentors and unlock new opportunities.', subHeading: 'Credits $12/months' },
  { title: 'Pro', content: 'Learn more about how our platform can help you connect with mentors and unlock new opportunities.Learn more about how our platform can help you connect with mentors and unlock new opportunities.Learn more about how our platform can help you connect with mentors and unlock new opportunities.', subHeading: 'Credits $12/months' },
  { title: 'Free', content: 'Learn more about how our platform can help you connect with mentors and unlock new opportunities.Learn more about how our platform can help you connect with mentors and unlock new opportunities.Learn more about how our platform can help you connect with mentors and unlock new opportunities.', subHeading: 'Free' },
]