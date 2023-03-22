import { Container, Row, Col, Navbar } from "react-bootstrap";
import navIcon from "./FooterImg/footer-icon.svg";
import navIcon2 from "./FooterImg/footer-icon2.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <Navbar.Brand href="/">
             <span className="nav-logo">Z</span><span className="mayusLogo">D</span><span className="point-logo">.</span>
          </Navbar.Brand>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/francisco-paez" target="_blank"><img src={navIcon} alt="Icon" /></a>
              <a href="https://www.instagram.com/ifranyb/" target="_blank"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Tel: +54 9 1153317260</p>
            <p>Email Contact: frpz490@gmail.com</p>
            <p>© 2023 PZDesign. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer