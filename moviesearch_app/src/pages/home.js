import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';


const Home = () => {
  return (

    <div className="container mt-4 slider">
      <div className="row">
        <Carousel style={{
          width: '100vw',
          height: '80vh'

        }}>
          <CarouselItem className="item " interval={3000}  >
            <div>
              <img className="img-slider" src="https://i.ytimg.com/vi/wZti8QKBWPo/maxresdefault.jpg" alt="" />
            </div>
          </CarouselItem>

          <CarouselItem className="item" interval={3000} fade>

            <div>
              <img className="img-slider" src="https://wallpaperaccess.com/full/645142.jpg" alt="" />
            </div>
          </CarouselItem>

          <CarouselItem className="item" interval={3000} fade>

            <div >
              <img className="img-slider" src="https://collider.com/wp-content/uploads/tron-yellow-billboard-movie-poster.jpg" alt="" />
            </div>
          </CarouselItem>
        </Carousel>

        <footer>
          <div class="container">
            <div class="row text-light text-center py-4 justify-content-center">

              <div class="col-sm-10 col-md-8 col-lg-6">
                <p>Magnificent React App Made by S.F.K With Love</p>
                <p>&copy;All rights reserved</p>
                <ul class="social pt-3">
                  <li><a href="" target="_blank"><i class="fab fa-facebook fa-3x"></i></a></li>
                  <li><a href="" target="_blank"><i class="fab fa-instagram fa-3x"></i></a></li>
                  <li><a href="" target="_blank"><i class="fab fa-twitter fa-3x"></i></a></li>
                  <li><a href="" target="_blank"><i class="fab fa-github fa-3x"></i></a></li>
                </ul>
              </div>

            </div>
          </div>
        </footer>

      </div>
    </div>








    // <Container>
    //   <Row>
    //     <Carousel>
    //       <Carousel.Item>
    //         <img
    //           className="d-block w-100"
    //           src="../images/image1.jpeg"
    //           alt="First slide"
    //         />
    //         <Carousel.Caption>
    //           <h3>First slide label</h3>
    //           <p>
    //             Nulla vitae elit libero, a pharetra augue mollis interdum.
    //           </p>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img
    //           className="d-block w-100"
    //           src="../images/image2.jpeg"
    //           alt="Second slide"
    //         />
    //         <Carousel.Caption>
    //           <h3>Second slide label</h3>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img
    //           className="d-block w-100"
    //           src="../images/images.jpeg"
    //           alt="Third slide"
    //         />
    //         <Carousel.Caption>
    //           <h3>Third slide label</h3>
    //           <p>
    //             Praesent commodo cursus magna, vel scelerisque nisl
    //             consectetur.
    //           </p>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //     </Carousel>
    //   </Row>
    // </Container>
  );
};

export default Home;