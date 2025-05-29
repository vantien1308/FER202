import React from 'react';
import './Ex5.css';

const students = [
  {
    id: 'DE160182',
    name: 'Nguyễn Hữu Quốc Khánh',
    location: 'DaNang',
    img: '/image/st1.png'
  },
  {
    id: 'DE160377',
    name: 'Choy Vinh Thiện',
    location: 'QuangNam',
    img: '/image/st2.png'
  },
  {
    id: 'DE160547',
    name: 'Đỗ Nguyễn Phúc',
    location: 'QuangNam',
    img: '/image/st3.png'
  },
  {
    id: 'DE170049',
    name: 'Lê Hoàng Minh',
    location: 'DaNang',
    img: '/image/st4.png'
  },
];

const StudentCard = ({ student }) => (
  <div className="card student-card">
    <img src={student.img} alt={student.name} className="card-img-top" />
    <div className="card-body">
      <h6 className="student-id">{student.id}</h6>
      <p className="student-name">{student.name}</p>
      <p className="student-location">{student.location}</p>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name={student.id} id={`${student.id}-absent`} />
        <label className="form-check-label" htmlFor={`${student.id}-absent`}>Absent</label>
        <input className="form-check-input ms-3" type="radio" name={student.id} id={`${student.id}-present`} />
        <label className="form-check-label" htmlFor={`${student.id}-present`}>Present</label>
      </div>
      <button className="btn student-submit-btn">Submit</button>
    </div>
  </div>
);

const StudentPage = () => {
  return (
    <div className="studentpage-bg">
      {/* Header */}
      <div className="header px-4 py-2">
        <div className="header-content">
          <div className="logo-nav">
            <img src="/image/fpt.jpg" alt="FPT Logo" className="logo logo-no-bg" />
            <span className="nav-links">
              <a href="#">Trang chủ</a>
              <a href="#">Ngành học</a>
              <a href="#">Tuyển sinh</a>
              <a href="#">Sinh viên</a>
            </span>
          </div>
          <div className="search">
            <label>Search: </label>
            <input type="text" />
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="banner orange-bg">
        <img src="/image/banner.jpg" alt="Banner" />
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb px-5 py-2">
        <span>Home</span> / <span>Students</span>
      </div>

      {/* Title */}
      <h3 className="student-title">Students Detail</h3>

      {/* Student Cards */}
      <div className="student-cards-container">
        <div className="students-grid">
          {students.map((student, index) => (
            <StudentCard student={student} key={index} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer text-white py-4">
        <div className="footer-container">
          <div>
            <h6>Our Address</h6>
            <p>Khu đô thị FPT Đà Nẵng</p>
            <p>+0822111111</p>
            <p>+82 8276 4321</p>
            <p>thuctap@fpt.edu.vn</p>
          </div>
          <div className="footer-right">
            <div className="social-icons">
              <i className="bi bi-google"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-envelope"></i>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center">
          &copy; Copyright 2023
        </div>
      </footer>
    </div>
  );
};

export default StudentPage;