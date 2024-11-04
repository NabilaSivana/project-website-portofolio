import { Col } from "react-bootstrap";

export const CertificateCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />

          </div>
    </Col>
  );
};
