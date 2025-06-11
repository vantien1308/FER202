import React from "react";
import { Card, Button } from "react-bootstrap";

const StudentCard = ({ student }) => {
  return (
    <Card className="text-center" style={{ width: "70%" }}>
      <Card.Img
        variant="top"
        src={student.avatar}
        alt={`${student.name}'s avatar`}
        style={{ height: "280px", objectFit: "cover", borderRadius: "0" }}
      />
      <Card.Body>
        <Card.Title style={{ marginLeft: "-15px" }}>{student.name}</Card.Title>
        <Card.Text style={{ marginLeft: "-210px" }}>Age: {student.age}</Card.Text>
        <Button style={{ marginLeft: "-210px" }} variant="primary">Edit</Button>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;
