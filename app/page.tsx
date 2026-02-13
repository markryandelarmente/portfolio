import Image from "next/image";
import { ArrowDownIcon, ExternalLinkIcon, Github } from "lucide-react";

export default function Home() {

  const currentYear = new Date().getFullYear();
  const startYear = 2019;
  const yearsOfExperience = (currentYear - startYear) - 1;
  

  const experiences = [
    {
      company: "Fresh Clinics",
      position: "Full-Stack Software Engineer",
      date: "Nov 2024 - March 2026",
      logo: "/companies/freshclinics.png",
      url: "https://www.freshclinics.com/en-au",
      location: "Australia | Remote",
    },
    {
      company: "Digital Transformation",
      position: "Senior Software Engineer",
      date: "November 2022 - October 2024",
      logo: "/companies/dxform.jpg",
      url: "https://www.dxform.ph",
      location: "PH | On-site",
    },
    {
      company: "Qonvex Technology",
      position: "Junior, Mid Level Software Engineer",
      date: "June 2019 - August 2022",
      logo: "/companies/qonvex.jpg",
      url: "https://www.facebook.com/qonvex",
      location: "PH | On-site",
    },
  ];

  const skillsAndTechnologies = [
    {
      name: "Frontend Development",
      logo: "/skills/frontend.png",
      technologies: [
        { name: "JavaScript", logo: "/skills/javascript.png" },
        { name: "TypeScript", logo: "/skills/typescript.png" },
        { name: "ReactJS / NextJS", logo: "/skills/react.png" },
        { name: "VueJS", logo: "/skills/vue.png" },
        { name: "Tailwind CSS", logo: "/skills/tailwind.png" },
        { name: "Figma", logo: "/skills/figma.png" },
      ]
    },
    {
      name: "Backend Development",
      logo: "/skills/backend.png",
      technologies: [
        { name: "NodeJS", logo: "/skills/node.png" },
        {
          name: "MySQL",
          logo: "/skills/mysql.png",
        },
        {
          name: "PostgreSQL",
          logo: "/skills/postgres.png",
        },
        {
          name: "Redis",
          logo: "/skills/redis.png",
        },
        {
          name: "MongoDB",
          logo: "/skills/mongo.png",
        },
        {
          name: "Auth0",
          logo: "/skills/auth0.png",
        },
        {
          name: "PHP Laravel",
          logo: "/skills/laravel.png",
        }
      ]
    },
    {
      name: "Deployment Tools & Platforms",
      logo: "/skills/tools.png",
      technologies: [
        {
          name: "Git",
          logo: "/skills/git.png",
        },
        {
          name: "GitHub",
          logo: "/skills/github.png",
        },
        {
          name: "Docker",
          logo: "/skills/docker.png",
        },
        {
          name: "Vercel",
          logo: "/skills/vercel1.png",
        },
        {
          name: "Linux",
          logo: "/skills/linux.png",
        },
        {
          name: "Digital Ocean",
          logo: "/skills/digital-ocean.png",
        },
        {
          name: "AWS EC2",
          logo: "/skills/aws-ec2.png",
        },
        {
          name: "Google Cloud",
          logo: "/skills/google-cloud.png",
        },
      ]
    },
    {
      name: "AI Agents & Tools",
      logo: "/skills/tools.png",
      technologies: [
        {
          name: "Claude Code",
          logo: "/skills/claude.png",
        },
        {
          name: "Cursor",
          logo: "/skills/cursor.png",
        },
      ]
    },
  ]

  const portfolio = [
    {
      title: "eAccess",
      url: "https://eaccessph.com",
      github: "",
      bannerImage: "/portfolio/eaccess3.png",
      description: "A B2B travel booking platform for agencies to manage their bookings and customers.",
      technologies: [
        { name: "TypeScript", logo: "/skills/typescript.png" },
        { name: "ReactJS/Vite", logo: "/skills/next.js.png" },
        { name: "Tailwind CSS", logo: "/skills/tailwind.css.png" },
        { name: "Shadcn UI", logo: "/skills/shadcn.png" },
        { name: "Node/Express", logo: "/skills/node.png" },
        { name: "MySQL", logo: "/skills/mysql.png" },
        { name: "Prisma", logo: "/skills/prisma.png" },
        { name: "Redis", logo: "/skills/redis.png" },
        { name: "Docker", logo: "/skills/docker.png" },
        { name: "Digital Ocean", logo: "/skills/digital-ocean.png" },
      ],
    },
    {
      title: "Full Stack Starter Kit",
      url: "",
      github: "https://github.com/markryandelarmente/full-stack-starter-kit",
      bannerImage: "/portfolio/full-stack-starter-kit.png",
      description: "A starter kit for full-stack apps to build web and mobile applications quickly with pre-built components and features.",
      technologies: [
        { name: "Monorepo", logo: "/skills/monorepo.png" },
        { name: "TypeScript", logo: "/skills/typescript.png" },
        { name: "Next.js", logo: "/skills/next.js.png" },
        { name: "Tailwind CSS", logo: "/skills/tailwind.css.png" },
        { name: "Node/Express", logo: "/skills/node.png" },
        { name: "Postgres", logo: "/skills/postgres.png" },
        { name: "Redis", logo: "/skills/redis.png" },
        { name: "Docker", logo: "/skills/docker.png" },
        { name: "Stripe", logo: "/skills/stripe.png" },
        { name: "S3 Bucket", logo: "/skills/s3.png" },
      ],
    },
    {
      title: "Blog CMS",
      url: "https://markryand.com",
      github: "",
      bannerImage: "/portfolio/project2.webp",
      description: "My personal portfolio website built with Next.js, Tailwind CSS, and TypeScript.",
      technologies: [
        { name: "Next.js", logo: "/skills/next.js.png" },
        { name: "Tailwind CSS", logo: "/skills/tailwind.css.png" },
        { name: "TypeScript", logo: "/skills/typescript.png" },
      ],
    },
    {
      title: "Apartment Finder System",
      url: "https://markryand.com",
      github: "",
      bannerImage: "/portfolio/project3.webp",
      description: "My personal portfolio website built with Next.js, Tailwind CSS, and TypeScript.",
      technologies: [
        { name: "Next.js", logo: "/skills/next.js.png" },
        { name: "Tailwind CSS", logo: "/skills/tailwind.css.png" },
        { name: "TypeScript", logo: "/skills/typescript.png" },
      ],
    },
    {
      title: "Board Takers",
      url: "https://markryand.com",
      github: "",
      bannerImage: "/portfolio/project.webp",
      description: "A platform for aspiring professionals to prepare for their board exams.",
      technologies: [
        { name: "Next.js", logo: "/skills/next.js.png" },
        { name: "Tailwind CSS", logo: "/skills/tailwind.css.png" },
        { name: "TypeScript", logo: "/skills/typescript.png" },
      ],
    },
    {
      title: "ezStore",
      url: "https://markryand.com",
      github: "",
      bannerImage: "/portfolio/project.webp",
      description: "A platform for small businesses to create and manage online e-commerce stores.",
      technologies: [
        { name: "Next.js", logo: "/skills/next.js.png" },
        { name: "Tailwind CSS", logo: "/skills/tailwind.css.png" },
        { name: "TypeScript", logo: "/skills/typescript.png" },
      ],
    }
  ]

  return (
    <div className="flex min-h-screen justify-center font-sans px-4">
      <main className="mx-auto max-w-4xl w-full">
        <section className="w-full flex flex-col items-center justify-center gap-8 py-16 lg:pt-20 lg:pb-16 border-[#18264f] lg:border-b lg:flex-row">
          <div className="w-36 h-36 shrink-0 overflow-hidden rounded-full border-3 border-[#18264f]">
            <Image src="/avatar.png" alt="Profile" width={100} height={100} className="h-full w-full object-cover" />
          </div>
          <div className="text-center lg:text-left w-full">
            <h1 className="text-4xl font-semibold leading-12">Mark Ryan D.</h1>
            <p className="text-secondary-foreground text-3xl font-semibold leading-8 mt-2">Full-Stack Software Engineer</p>
            <p className="mt-3 text-sm">{yearsOfExperience}+ years of experience | Calbayog City, Philippines</p>
          </div>
        </section>
        <section className="py-10 lg:py-16 border-[#18264f] lg:border-b">
          <h2 className="text-3xl font-semibold leading-12">About Me</h2>
          <p className="leading-8 mt-4">I’m Mark Ryan, a full-stack software engineer from Calbayog City, Philippines, with <span className="font-semibold">{yearsOfExperience}+ years</span> of experience developing scalable and secured web applications. I worked across various technologies and roles in both front-end and back-end development, with a strong focus on performance, user experience, and clean architecture.</p>
          <p className="leading-8 mt-8">I’m passionate about building software that not only works well but really solves problems and creates real value for users.</p>
          <button className="mt-8 px-4 py-2 text-sm bg-primary text-white rounded-md hover:bg-primary/80 transition-colors duration-300 cursor-pointer">Download Resume <ArrowDownIcon className="w-4 h-4 inline-block" /></button>
        </section>
        <section className="py-10 lg:py-16 border-[#18264f] lg:border-b">
          <h2 className="text-3xl font-semibold leading-12">Experience</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-4">
            {experiences.map((experience, index) => (
              <div key={index} className="flex gap-4 items-center">
                <div className="w-15 h-15 shrink-0 overflow-hidden rounded-full">
                  <Image src={experience.logo} alt="Logo" width={100} height={100} className="w-full h-full object-contain" />
                </div>
                <div>
                  <a href={experience.url} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-base font-semibold hover:text-primary transition-colors duration-300 flex items-center gap-x-2">{experience.company} <ExternalLinkIcon className="w-4 h-4" /></h3>
                  </a>
                  <p className="text-secondary-foreground text-sm leading-8 flex items-center">{experience.position}</p>
                  <p className="text-secondary-foreground text-[16px] leading-6">{experience.location} | {experience.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="py-10 lg:py-16 border-[#18264f] lg:border-b">
          <h2 className="text-3xl font-semibold leading-12">Skills and Technologies</h2>
          <div className="mt-8 flex flex-wrap gap-y-10 gap-x-4">
            {skillsAndTechnologies.map((skill, index) => (
              <div key={index}>
                <h4 className="text-2xl leading-12">{skill.name}</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.technologies.map((technology, index) => (
                    <div key={index} className="flex items-center px-6 border border-[#18264f] rounded-md p-1 text-center">
                      <div className="w-10 h-10 shrink-0 overflow-hidden">
                        <Image src={technology.logo ? technology.logo : "/vercel.svg"} alt={technology.name} width={100} height={100} className="w-full h-full p-0 object-contain" />
                      </div>
                      <p className="text-white text-sm" key={index}>{technology.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="py-10 lg:py-16 border-[#18264f] lg:border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold leading-12">Projects</h2>
            {/* <span className="flex items-center gap-x-2 text-sm font-semibold hover:text-primary transition-colors duration-300 cursor-pointer">See All <ArrowRightIcon className="w-4 h-4" /></span> */}
          </div>
          <p className="text-secondary-foreground text-sm mt-2">Here are my personal projects that I have worked on. Other projects are not listed due to company rules and policies.</p>
          <div className="mt-8 grid gap-4 grid-cols-1 md:gap-6">
            {portfolio.map((portfolio, index) => (
              <div key={index} className="group rounded-xl overflow-hidden relative bg-transparent border border-[#18264f] hover:border-primary transition-colors duration-300 md:flex">
                <div className="aspect-video w-full overflow-hidden rounded-t-xl min-h-48 relative md:max-w-1/2 md:min-w-1/2 md:rounded-xl">
                  <Image src={portfolio.bannerImage} alt={portfolio.title} width={600} height={338} className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                    {
                      portfolio.github && (
                        <a href={portfolio.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-colors duration-200"
                        >
                          <Github className="w-5 h-5 text-white" />
                          <span className="text-white text-[16px] font-medium">View Source Code</span>
                        </a>
                      )
                    }
                    {
                      portfolio.url && (
                        <a 
                          href={portfolio.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-colors duration-200"
                        >
                          <ExternalLinkIcon className="w-5 h-5 text-white" />
                          <span className="text-white text-[16px] font-medium">Visit Website</span>
                        </a>
                      )
                    }
                  </div>
                </div>
                <div className="p-6 lg:p-4">
                  <h4 className="text-base font-semibold lg:text-sm">{portfolio.title}</h4>
                  <p className="text-secondary-foreground text-sm mt-2 lg:text-[18px]">{portfolio.description}</p>
                  <p className="text-secondary-foreground text-sm mt-4 lg:text-[18px]">{portfolio.technologies.map((technology) => technology.name).join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="py-10 lg:py-16 text-center">
          <h2 className="text-3xl font-semibold leading-12">Let's create awesome products!</h2>
          <p className="text-secondary-foreground mt-2 leading-8">I'm always open to discuss your project, improve your online presence, or build your next big idea.</p>
          <a href="mailto:markryandelarmente104@gmail.com" className="mt-14 inline-block text-sm px-10 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors duration-300 cursor-pointer no-underline">Say Hello</a>
          <div className="mt-16 flex text-center justify-center gap-x-6 lg:gap-x-10 text-sm">
            <a href="https://github.com/markryandelarmente" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2">
              Github <ExternalLinkIcon className="w-4 h-4 inline-block" />
            </a>
            <a href="https://www.linkedin.com/in/mark-ryan-delarmente" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2">
              LinkedIn <ExternalLinkIcon className="w-4 h-4 inline-block" />
            </a>
            <a href="https://www.linkedin.com/in/mark-ryan-delarmente" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2">
              Twitter <ExternalLinkIcon className="w-4 h-4 inline-block" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
