import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import projImg13 from "../assets/img/project-img13.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Web Attendance",
      description:
        "Realtime Object and Human Detection for Attendance and Safety Building",
      description:
        "The project was Project Based Learning (PBL) when I was an exchange student at Batam State Polytechnic. This project was a project submitted by PT. Kinema ",
      imgUrl: projImg4,
      url: "https://github.com/OMGSPRX/PBL-IF-23-2-3.git",
    },
    {
      title: "Website sistem informasi rs",
      description: "project internship at rsud kab. Tangerang",
      imgUrl: projImg11,
      url: "https://github.com/NabilaSivana/web-rs.git",
    },
    {
      title: "Web Digitalisasi KTP",
      description:
        "This website is one of the innovations in the field of e-government, or digitalization of government service systems. With the available features. This project is not only to fulfill course requirements but has also started a competition to validate and disseminate ideas",
      imgUrl: projImg2,
      url: "https://media.journoportfolio.com/users/395287/uploads/95c5624f-7c2b-4707-b071-c09f667da524.pdf",
    },
    {
      title: "web dinamis kesehatan",
      description:
        "Sehat Plus is a website with the theme health services which facilitates calculating ideal body weight using Body Mass Index principles digitally and also for education and early detection of stunting in children.",
      imgUrl: projImg3,
      url: "https://media.journoportfolio.com/users/395287/uploads/b3029e55-2a01-4514-9368-8bff3a0ec464.pdf",
    },
    {
      title: "web e-commerce",
      description: "Project simple e-commerce for subbmission class",
      imgUrl: projImg1,
      url: "https://media.journoportfolio.com/users/395287/uploads/b3029e55-2a01-4514-9368-8bff3a0ec464.pdf",
    },
  ];
  // Tambahkan data proyek untuk kategori lainnya
  const uiUxProjects = [
    {
      title: "Redesign Instagram",
      description:
        "The following project is a redesign project for the Instagram application interface by trying to imitate the design with the assessment criteria of how detailed it is to produce a UI design that is as similar as possible",
      imgUrl: projImg5,
      url: "https://www.figma.com/design/IyhkabNArvZUeBYFf6Q2Bq/INSTAGRAM%2FNabilaIhza?node-id=0-1&t=J5i9i4E2oqAmHcEm-1",
    },
    {
      title: "Linesvpay",
      description:
        "Design UI/UX Payment Application based mobile, this application is an application design from an information systems design course project",
      imgUrl: projImg6,
      url: "https://media.journoportfolio.com/users/395287/uploads/64796bed-b42a-41de-8859-e4967a99e752.pdf",
    },
    {
      title: "Desain PMB app",
      description:
        "UI/UX Design of PMB Polines Application, This project is a simple mockup of several pages such as splash, homepage, etc",
      imgUrl: projImg7,
      url: "https://www.figma.com/file/xbUryiUVSogBguaOzqJTtH/utsppb?type=design&nodeid=0%3A1&mode=design&t=K7MQIQNoxg7Gf8Lu-1",
    },
    {
      title: "Redesign BCA mobile",
      description:
        "The following project is a challenge to create an innovative user interface from an existing application, and I am trying to redesign BCA Mobile",
      imgUrl: projImg8,
      url: "https://www.figma.com/design/FGdYYnYJT2SxaCaaonK3K4/Tugas-3---33422117---Nabila-Ihza-Sivana---IK1B?node-id=0-1&t=J5i9i4E2oqAmHcEm-1",
    },
    {
      title: "Design simrs",
      description: "Design interface information system hospital",
      imgUrl: projImg9,
      url: "https://www.figma.com/design/Ceu9afOfntuJspkmZkMoow/Untitled?node-id=0-1&m=dev&t=CMnIl6fHw0ov0PBA-1",
    },
    {
      title: "Design aplikasi Tahsin",
      description:
        "Design Aplication Tahsin is Design UI Aplication Created with~ Figma",
      imgUrl: projImg10,
      url: "https://www.figma.com/file/xbUryiUVSogBguaOzqJTtH/utsppb?type=design&nodeid=0%3A1&mode=design&t=K7MQIQNoxg7Gf8Lu-1",
    },
    // Tambahkan data proyek lainnya
  ];

  const otherProjects = [
    {
      title: "Smart Door",
      description: "Project using Internet of Things with ESP32cam",
      imgUrl: projImg12,
    },
    {
      title: "Deteksi Kebakaran",
      description: "Project embeded system",
      imgUrl: projImg13,
    },
    // Tambahkan data proyek lainnya
  ];

  return (
    <section className="project" id="projects">
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
                  <h2>Projects</h2>
                  <p>
                    During my time as a computer science student trying to make
                    some simple projects. Here are some projects that I have
                    built to hone my skills.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web-Dev</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">UI/UX</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">others</Nav.Link>
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
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {uiUxProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {otherProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
