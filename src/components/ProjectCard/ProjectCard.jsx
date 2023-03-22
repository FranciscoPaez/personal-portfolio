import { Col } from "react-bootstrap";
import "./ProjectCard.css"

const ProjectCard = ({ title, description, imgUrl }) => {
    return (
       <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgUrl} alt="" />
            <div className="proj-txtx">
                <h4 className="projectTitle">{title}</h4>
                <span>{description}</span>
            </div>
        </div>
       </Col>
    )
}

export default ProjectCard