import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CertificateCard } from "./CertificateCard";
import sImg1 from "../assets/img/s1.png";
import sImg2 from "../assets/img/s2.png";
import sImg3 from "../assets/img/s3.png";
import sImg4 from "../assets/img/s4.png";
import sImg5 from "../assets/img/s5.png";
import sImg6 from "../assets/img/s6.png";
import sImg7 from "../assets/img/s7.png";
import sImg8 from "../assets/img/s8.png";
import sImg9 from "../assets/img/s9.png";
import sImg10 from "../assets/img/s10.png";
import sImg11 from "../assets/img/s11.png";
import sImg12 from "../assets/img/s12.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Certificates = () => {
  const courses = [
    { imgUrl: sImg2 },
    { imgUrl: sImg3 },
    { imgUrl: sImg4 },
    { imgUrl: sImg5 },
    { imgUrl: sImg6 },
    { imgUrl: sImg7 },
    { imgUrl: sImg8 },
    { imgUrl: sImg9 },
    { imgUrl: sImg10 },
  ];

  const bnsp = [{ imgUrl: sImg1 }];

  const achievements = [{ imgUrl: sImg11 }, { imgUrl: sImg12 }];

  return (
    <section className="project" id="Certificates">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>License and Certificate</h2>
                  <p>
                    Some of the certificates that I have obtained include
                    learning certificates and also awards.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Course</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">BNSP</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Achievement</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {courses.map((course, index) => (
                            <CertificateCard key={index} {...course} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {bnsp.map((item, index) => (
                            <CertificateCard key={index} {...item} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {achievements.map((item, index) => (
                            <CertificateCard key={index} {...item} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
