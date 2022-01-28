import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


import "./service.css";


const Service = () => {
  const [service, setService] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  let size = 10;

  useEffect(() => {
    fetch(`https://guarded-earth-89233.herokuapp.com/services?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data.services)
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);

  return (
    <div className="bg-service">
      <Container className="pt-5 pb-4">
        <div className="my-5 text-center section-title mx-auto">
          <h2>Our Services </h2>
          <p>This Our Services from our valuable Customer, those who get from BD Travel agency. We every time provide best quality services to our cusotmer.</p>
        </div>
        <Row xs={1} md={3} className="g-4">
          {service.map((service, index) => (
            <Col>
              <Card className="box text-center">
                <Card.Img
                  className="services-img"
                  variant="top"
                  src={service.image}
                />
                <Card.Body>
                  <Card.Title className="services-title">
                    {service.title}
                  </Card.Title>
                  <div className="service-meta">

                    <Card.Text>
                      <h5>Cost: {service.cost}</h5>
                    </Card.Text>

                    <Link className="card-btn" to={`/serviceDetails/${service._id}`}>
                      More details
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="pagination">
          {
            [...Array(pageCount).keys()]
              .map(number => <button
                className={number === page ? 'selected' : ''}
                key={number}
                onClick={() => setPage(number)}
              >{number + 1}</button>)
          }
        </div>

      </Container>
    </div>
  );
};

export default Service;
