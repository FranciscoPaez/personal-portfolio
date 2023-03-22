import { useState , useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('')
    const [delta, setDelta] = useState (300 - Math.random() * 100)
    const toRotate = ["Francisco Paez","Web Developer"];
    const period = 2000;

    useEffect (() =>{
        let ticker = setInterval(()=> {
           tick()
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
          <Container>
            <Row className="align-item-center">
               <Col xs={12} ms={6} xl={7}>
                  <span className="tagline">Welcome to my Portfolio</span><br />
                  <h1>{`Hi I'm `}<span className="wrap">{text}</span></h1>
                  <p className="parr-banner">Hi There! I'm Francisco Paez. A Frontend Developer having specialization in layout and development of web responsive. I´m 1+ years of experience in practices, courses and projects. I have Frontend Skills in languaje JavaScript ES6 / Python, library React JS and Technologies HTML5 / CSS3 / SASS and CSS Framework Bootstrap.
                  Great understanding of UX and UI, SEO practices.</p>
               </Col>
            </Row>
          </Container>
        </section>
    )
}

export default Banner