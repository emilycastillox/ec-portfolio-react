'use client';

import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  image: string;
  link: string;
  groups: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AM Interior Design',
    image: '/images/aminteriors.png',
    link: 'https://am-interiors-eight.vercel.app/',
    groups: ['design', 'creative']
  },
  {
    id: 2,
    title: 'Project Intake Hub',
    image: '/images/projectintakehub.png',
    link: 'https://project-intake-hub.vercel.app/',
    groups: ['photography', 'creative']
  },
  {
    id: 3,
    title: 'Resilient Coders - Learning Platform',
    image: '/images/rclearning.png',
    link: 'https://github.com/Resilient-Labs/ai-learning-tool',
    groups: ['photography']
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="page-header space-left">
          <h3>Portfolio<span className="text-primary">.</span></h3>
        </div>

        <div className="row portfolio" id="grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="col-lg-6 col-md-6 col-sm-12 project mb-4" 
              data-groups={JSON.stringify(project.groups)}
            >
              <figure className="portfolio-item">
                <div className="hovereffect">
                  <Image 
                    className="img-responsive" 
                    src={project.image} 
                    alt={project.title}
                    width={600}
                    height={400}
                    unoptimized={project.image.includes('.gif')}
                  />
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <div className="overlay">
                      <div className="hovereffect-title">
                        <h6>{project.title}</h6>
                      </div>
                    </div>
                  </a>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
