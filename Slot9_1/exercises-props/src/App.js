import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import Welcome from './components/Welcome';
import UserProfile from './components/UserProfile';
import NameList from './components/NameList';
import StudentCard from './components/StudentCard';


function App() {
  const userData = { name: "tientvde180640@fpt.edu.vn", age: 21 };
  const namesList = ["tientvde180640@fpt.edu.vn", "test@fpt.edu.vn"];
  const students = [
    { name: "tientvde180640@fpt.edu.vn", age: 21, avatar:  "/image/image_1.png" },
    { name: "khanhde180641@fpt.edu.vn", age: 21, avatar:  "/image/image_2.png" },
    { name: "huynchde180662@fpt.edu.vn", age: 21, avatar:  "/image/image_3.png" },
  ];

  return (
    <>
      <Welcome name="tientvde180640@fpt.edu.vn" />
      <UserProfile user={userData} />
      <NameList names={namesList} />

    <Container className="py-4">

      <h1 className="text-center my-4">Student information</h1>
      <Row>
        {students.map((student, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4 d-flex">
            <StudentCard student={student} />
          </Col>
        ))}
      </Row>
    </Container></>
    
  );
}

export default App;
