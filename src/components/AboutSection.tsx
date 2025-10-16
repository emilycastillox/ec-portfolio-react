export default function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <div className="page-header space-left">
          <h3>About<span className="text-primary">.</span></h3>
        </div>

        {/* About Content */}
        <div className="row mb-5">
          <div className="col-lg-8">
            <div className="about-content mb-5" style={{ marginBottom: '4rem' }}>
              <p className="lead mb-4">
                I'm a Full Stack Web Developer with 3+ years of experience building end-to-end web applications. From freelance projects, to working with stakeholders directly to deliver solutions, I am a communicator at heart.
                Coming from a first-generation Dominican-American family, I bring diverse perspectives to technology and 
                am committed to using my skills to promote diversity, equity, and inclusion in the tech industry. With involvement in organizations like Latinas in Tech, and Resilient Coders, I am dedicated to empowering others and building a more inclusive tech community.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-info">
              <div className="info-item">
                <strong>Location:</strong> Boston, MA
              </div>
              <div className="info-item">
                <strong>Education:</strong> College of The Holy Cross
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="experience-section mb-5">
          <div className="page-header space-left">
            <h3>Experience<span className="text-primary">.</span></h3>
          </div>
          <div className="row">
            <div className="col-lg-6">
            <div className="experience-item">
                <h5>Full Stack Web Developer - College of the Holy Cross</h5>
                <p className="text-muted">August 2022 - August 2025</p>
                <ul>
                  <li><b>Secure File Transfer System</b> - A web application that allows internal and external users to upload and download files securely.</li>
                  <li><b>Equipment Lending System</b> - Internal web application to track loaner devices to students and faculty, and allows reservations in advance.</li>
                  <li><b>Equipment Replacement System</b> - Internal web application to track lifecycle of staff devices and handle the replacement process and notification with emails and ticketing system.</li>
                  <li><b>OpenAI Zoom Integration/Chatbot</b> - Integrated OpenAI's API with Zoom's API to create a chatbot that can answer questions and help with tasks natively as a Zoom app.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="experience-item">
                <h5>Full Stack Web Developer/AI Engineer - Resilient Coders</h5>
                <p className="text-muted">2022 - Present</p>
                <ul>
                  <li><b>Resilient Coders - Learning Platform</b> - A web application utilizing AIfor bootcamp students to get personalized learning in webdevelopment and admins to monitor their progress.</li>
                </ul>
              </div>
              <div className="experience-item">
                <h5>Freelance Web Developer</h5>
                <p className="text-muted">2022 - Present</p>
                <ul>
                  <li>Developed responsive websites for small businesses</li>
                  <li>Built full-stack applications using React, Node.js, and MongoDB</li>
                  <li>Collaborated with clients to understand requirements and deliver solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div id="skills">
          <div className="page-header space-left">
            <h3>Skills<span className="text-primary">.</span></h3>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="skill-category">
                <h6>Frontend</h6>
                <div className="skill-tags">
                  <span className="skill-tag">HTML5/CSS3</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Next.js</span>
                  <span className="skill-tag">Tailwind CSS</span>
                  <span className="skill-tag">Ruby on Rails</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="skill-category">
                <h6>Backend</h6>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Ruby</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">PostgreSQL</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="skill-category">
                <h6>Cloud & DevOps</h6>
                <div className="skill-tags">
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">EC2</span>
                  <span className="skill-tag">ECS</span>
                  <span className="skill-tag">Lambda</span>
                  <span className="skill-tag">DynamoDB</span>
                  <span className="skill-tag">S3</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">CI/CD</span>
                  <span className="skill-tag">GitHub Actions</span>
                  <span className="skill-tag">GitLab CI/CD</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="skill-category">
                <h6>Data & Analytics</h6>
                <div className="skill-tags">
                  <span className="skill-tag">Salesforce</span>
                  <span className="skill-tag">Tableau</span>
                  <span className="skill-tag">PowerBI</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="skill-category">
                <h6>Languages</h6>
                <div className="skill-tags">
                  <span className="skill-tag">English</span>
                  <span className="skill-tag">Spanish</span>
                  <span className="skill-tag">Chinese</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
