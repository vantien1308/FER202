import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const heroImages = [
  '/images/pizza1.jpg',
  '/images/pizza2.jpg',
  '/images/pizza3.jpg',
  '/images/pizza4.jpg',
  '/images/pizza5.jpg',
];

const App = () => {
  const pizzas = [
    {
      id: 1,
      name: 'Margherita Pizza',
      originalPrice: '$40.00',
      discountPrice: '$24.00',
      image: '/images/menu1.jpg',
    },
    {
      id: 2,
      name: 'Mushroom Pizza',
      originalPrice: '',
      discountPrice: '$25.00',
      image: '/images/menu2.jpg',
    },
    {
      id: 3,
      name: 'Hawaiian Pizza',
      originalPrice: '',
      discountPrice: '$30.00',
      image: '/images/menu3.jpg',
    },
    {
      id: 4,
      name: 'Pesto Pizza',
      originalPrice: '$50.00',
      discountPrice: '$30.00',
      image: '/images/menu4.jpg',
    },
  ];

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Pizza House</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>

      {/* Hero Section - Carousel */}
      <div className="hero-section">
        <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-indicators">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to={idx}
                className={idx === 0 ? 'active' : ''}
                aria-current={idx === 0}
                aria-label={`Slide ${idx + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {heroImages.map((img, idx) => (
              <div className={`carousel-item${idx === 0 ? ' active' : ''}`} key={img}>
                <img src={img} className="d-block w-100 hero-img" alt={`pizza${idx + 1}`} />
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="display-4">Neapolitan Pizza</h1>
                  <p className="lead">If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Menu Section */}
      <div className="container menu-section pb-5">
        <h2 className="mb-4">Our Menu</h2>
        <div className="row">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-3 mb-4" key={pizza.id}>
              <div className="card">
                <img src={pizza.image} className="card-img-top" alt={pizza.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{pizza.name}</h5>
                  <p className="card-text">
                    {pizza.originalPrice ? (
                      <>
                        <span className="text-muted text-decoration-line-through me-2">
                          {pizza.originalPrice}
                        </span>
                        <span className="discount-price">{pizza.discountPrice}</span>
                      </>
                    ) : (
                      <span>{pizza.discountPrice}</span>
                    )}
                  </p>
                  <button className="btn custom-btn custom-btn-wide">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book Table Section */}
      <div className="container book-table-section py-5">
        <h2 className="text-center mb-4">Book Your Table</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <form className="book-table-form">
              <div className="row">
                <div className="col-12 col-md-4 mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <select className="form-control" required>
                    <option value="">Select a Service</option>
                    <option value="dine-in">Dine-In</option>
                    <option value="takeaway">Takeaway</option>
                    <option value="delivery">Delivery</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <textarea className="form-control" placeholder="Please write your comment" rows="3" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-warning">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
