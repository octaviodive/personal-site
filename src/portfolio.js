import emoji from 'react-easy-emoji';


export const greetings = {
    "name": "Octavio Diaz",
    "title": "Hi, I'm Octavio",
    "description": " I'm a Web Developer and Programmer living in Maracaibo, Venezuela.",
   
}

export const openSource = {
  githubUserName: 'octaviodive',
};

export const contact = {
  
}

export const socialLinks = {
    "twitter": "https://twitter.com/OctavioDiaz_",
    "instagram": "https://www.instagram.com/octaviodiaz_/",
    "github": "https://github.com/octaviodive",
    "linkedin": "https://www.linkedin.com/in/octaviodive/"

}

export const skillsSection = {
    title: 'What I do',
    subTitle: ' I make web applications, usually with django',
    skills: [
      emoji(
        '⚡ Good experience in developing web applications implementing Model View Control architecture using Django'
      ),
      emoji('⚡ Good knowledge on frontend frameworks like CSS Bootstrap'),
      emoji(
        '⚡ Experience in using various version control systems like Git, and GitHub'
      ),
    ],
    
    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'sass',
        fontAwesomeClassname: 'logos:sass',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
        
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'npm',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      {
        skillName: 'sql-database',
        fontAwesomeClassname: 'vscode-icons:file-type-sql',
      },
      {
        skillName: 'python',
        fontAwesomeClassname: 'logos:python',
      },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
      
    ],
}


export const SkillBars = [
    {
      Stack: 'Backend', //Insert stack or technology you have experience in
      progressPercentage: '80', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Frontend',
      progressPercentage: '60',
    },
    {
      Stack: 'Programming',
      progressPercentage: '70',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'freeCodeCamp',
      subHeader: 'Scientific Computing with Python',
      duration: '2020 - 2021',
      desc: 'Python is one of the most popular, flexible programming languages today. You can use it for everything from basic scripting to machine learning.',
      
    },
    {
      schoolName: 'Udemy',
      subHeader: 'Web Development',
      duration: '2020 - 2021',
      desc: 'Web development is the building and maintenance of websites; it’s the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.'
    },
  ]


export const projects = [
    {
      name: "Social Network",
      desc: "This is a photo share platform build in with Django that allows user to save personal photos  in an album. It has a custom user interface and to make it simple, we won’t be using any Frontend Framework in this project. We will use HTML, CSS (Bootstrap and some custom CSS).  ",
      link: {
        name: "code",
        url: "https://github.com/octaviodive/social_network_project"
        }
    },
    {  
      name: "Personal Blog",
      desc: "Blog application with Django that allows users to create, edit, and delete posts. The homepage will list all blog posts, and there will be a dedicated detail page for each individual post. Django is capable of making more advanced stuff but making a blog is an excellent first step to get a good grasp over the framework.",
      link: {
        name: "code",
        url: "https://github.com/octaviodive/blog-portfolio",
        },
    }  

  ]