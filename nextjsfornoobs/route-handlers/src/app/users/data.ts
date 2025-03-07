export const usersV1 = [
  { id: 1, email: "john.doe@example.com", name: "John Doe", isMember: true },
  { id: 2, email: "jane.smith@example.com", name: "Jane Smith", isMember: false },
  { id: 3, email: "michael.johnson@example.com", name: "Michael Johnson", isMember: true },
  { id: 4, email: "emily.davis@example.com", name: "Emily Davis", isMember: false },
  { id: 5, email: "chris.wilson@example.com", name: "Chris Wilson", isMember: true }
];

export const usersV2 = [
  { 
    id: 1, 
    email: "john.doe@example.com", 
    name: "John Doe", 
    isMember: true,
    jobDetails: {
      jobTitle: "Frontend Developer",
      framework: "React",
      language: "JavaScript"
    }
  },
  { 
    id: 2, 
    email: "jane.smith@example.com", 
    name: "Jane Smith", 
    isMember: false,
    jobDetails: {
      jobTitle: "Backend Developer",
      framework: "Express.js",
      language: "Node.js"
    }
  },
  { 
    id: 3, 
    email: "michael.johnson@example.com", 
    name: "Michael Johnson", 
    isMember: true,
    jobDetails: {
      jobTitle: "Full Stack Developer",
      framework: "Next.js",
      language: "TypeScript"
    }
  },
  { 
    id: 4, 
    email: "emily.davis@example.com", 
    name: "Emily Davis", 
    isMember: false,
    jobDetails: {
      jobTitle: "Mobile Developer",
      framework: "Flutter",
      language: "Dart"
    }
  },
  { 
    id: 5, 
    email: "chris.wilson@example.com", 
    name: "Chris Wilson", 
    isMember: true,
    jobDetails: {
      jobTitle: "DevOps Engineer",
      framework: "Kubernetes",
      language: "Go"
    }
  }
];




