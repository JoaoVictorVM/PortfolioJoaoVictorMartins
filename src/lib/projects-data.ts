export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  siteUrl: string;
  repoUrl: string;
  technologies: Technology[];
}

export const projects: Project[] = [
  {
    name: 'Project 1',
    description: 'Description for project 1',
    image: '/images/projects/previewBikcraft.png',
    siteUrl: 'https://example.com/project1',
    repoUrl: 'https://github.com/user/project1',
    technologies: [
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' }
    ]
  },
  {
    name: 'Project 2',
    description: 'Description for project 2',
    image: '/images/projects/project2.png',
    siteUrl: 'https://example.com/project2',
    repoUrl: 'https://github.com/user/project2',
    technologies: [
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'CSS', icon: '/icons/css.svg' }
    ]
  }
];
