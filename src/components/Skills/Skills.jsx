import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import htmlImg from "./SkillsImg/html-img.png";
import cssImg from "./SkillsImg/css-img.png";
import javaScriptImg from "./SkillsImg/js-img.png";
import reactImg from "./SkillsImg/react-img.png";
import bootstrapImg from "./SkillsImg/bootstrap-img.png";
import sassImg from "./SkillsImg/sass-img.png";
import gitImg from "./SkillsImg/git-img.png";
import pythonImg from "./SkillsImg/python-img.png";

const Skills = () =>{
        const responsive = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };

        return (
            <section className='skill' id='skills'>
                <Container>
                    <Row>
                        <Col>
                           <div className='skills-bx'>
                            <h2>
                                Skills 
                            </h2>
                            <Carousel responsive={responsive} infinite= {true} className='skills-slider'>
                                <div className="item">
                                    <img src={htmlImg} alt="Image" className='carouselImage'/>
                                </div>
                                <div className="item">
                                    <img src={cssImg} alt="Image" className='carouselImage'/>
                                </div>
                                <div className="item">
                                    <img src={javaScriptImg} alt="Image" className='carouselImage'/>
                                </div>
                                <div className="item">
                                    <img src={reactImg} alt="Image" className='carouselImage'/>
                                </div>
                                <div className="item">
                                    <img src={bootstrapImg} alt="Image" className='carouselImage'/>
                                </div>
                                <div className="item">
                                    <img src={sassImg} alt="Image" className='carouselImage'/>
                                </div>
                                <div className="item">
                                    <img src={gitImg} alt="Image" className='carouselImage'/>
                                </div>
                                <div className="item">
                                    <img src={pythonImg} alt="Image" className='carouselImage'/>
                                </div>
                            </Carousel>
                           </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
}

export default Skills