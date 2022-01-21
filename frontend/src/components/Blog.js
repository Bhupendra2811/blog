
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';  
import { Link } from "react-router-dom";

export default function Blog({blog}) {
console.log(blog);

  
  
return (
  <>
  <Row xs={1} md={2} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top" src={blog.imageURL} />
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text>
            {blog.body}
          </Card.Text>
            <Link to={`/blog/${blog._id}`}>
          <button type="button" class="btn btn-dark">
              Read More
            </button>
              </Link>
        </Card.Body>
      </Card>
    </Col>
</Row>
</>
)}