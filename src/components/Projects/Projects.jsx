import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import ProjectCard from "../ProjectCard/ProjectCard";
import projectImgOne from "./ProjectsImg/project-1.png";
import projImgThree from "./ProjectsImg/project-4.png";
import projImgTwo from "./ProjectsImg/projectImgOne.png";
import projImgGH from "./ProjectsImg/github.png";

const Projects = () => {
    
    const projects = [
            {
                title: "Landing Page Design",
                description: "Design",
                imgUrl: projectImgOne
            },
            {
                title: "React Project",
                description: "Design & Development",
                imgUrl: projImgTwo
            },
            {
                title: "E-commerce Clone",
                description: "Design & Development",
                imgUrl: projImgThree
            }
    ]

    return (
       <section className="project" id="projects">
          <Container>
            <Row>
                <Col>
                   <h2>Projects</h2>
                   <p>In this section, I invite you to see some of my best projects carried out in the learning course. You can see the designed/development websites and access the GitHub code in case you want to analyze it.</p>
                   <Tab.Container id="projects-tabs" defaultActiveKey="first">
                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Examples</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">View Code</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Projects Description</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                           <Row>
                             {
                                projects.map((project, index) => {
                                    return(
                                        <ProjectCard 
                                           key={index}
                                           {...project}
                                        />
                                    )
                                })
                             }
                           </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <p>You can see my open source projects on my Github.</p>
                            <div className="containerGitHub">
                            <a href="https://github.com/FranciscoPaez" target="_blank">
                                <img src={projImgGH} alt="" className="gitHubLogo"/>
                            </a>
                            </div>
                            <p>https://github.com/FranciscoPaez</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Container>
                            <Row>
                               <Col xs={12} ms={6} xl={4}>
                                  <img src={projectImgOne}  />
                               </Col>
                               <Col >
                                   <p className="parr-project">This project is a Landing Page oriented to a commercial page, which has a drop-down menu and responsive design. It was designed and developed with HTML5, CSS3 and frameworks like Bootstrap.</p>
                                   <a href="https://franciscopaez.github.io/The-North-Face-Project-Design/" className="linkProject" target="_blank">View Page</a> <br/><br/>
                                   <a href="https://github.com/FranciscoPaez/The-North-Face-Project-Design" className="linkProjectCode" target=
                                   "_blank">View Code</a> <br/><br/>
                               </Col>
                            </Row>
                          </Container>
                           <br /><br />
                          <Container>
                            <Row>
                               <Col xs={12} ms={6} xl={4}>
                                  <img src={projImgTwo}  />
                               </Col>
                               <Col >
                                   <p className="parr-project">This project is a informative web page , built with React JS and frameworks like Bootstrap React. In the button below you can see the code and analyze it.</p>
                                   <a href="https://github.com/FranciscoPaez/project-gym-react" className="linkProjectCode" target=
                                   "_blank">View Code</a> 
                               </Col>
                            </Row>
                          </Container>
                          <br /><br />
                          <Container>
                            <Row>
                               <Col xs={12} ms={6} xl={4}>
                                  <img src={projImgThree}  />
                               </Col>
                               <Col >
                                   <p className="parr-project">This project is a e-commerce clone oriented to electronic products, which has a drop-down menu and responsive design. Easy navigation and also has a section for the sale of products, contact form and more. It was designed and developed with HTML5, CSS3, JavaScript and frameworks like Bootstrap.</p>
                                   <a href="https://franciscopaez.github.io/Clone-Sony-CarritoDeCompras/" className="linkProject" target="_blank">View Page</a> <br/><br/>
                                   <a href="https://github.com/FranciscoPaez/Clone-Sony-CarritoDeCompras" className="linkProjectCode" target=
                                   "_blank">View Code</a> <br/><br/>
                               </Col>
                            </Row>
                          </Container>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
          </Container>
       </section>
    )
}

export default Projects