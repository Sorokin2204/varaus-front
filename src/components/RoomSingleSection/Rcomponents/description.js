import React from 'react';
import { Link } from 'react-router-dom';
import Pricing from '../Rcomponents/descontent/pricing';
import Review from '../Rcomponents/descontent/review';
import AddReview from '../Rcomponents/descontent/addReview';
import OtherRoom from '../Rcomponents/descontent/otherRoom';
import rmd1 from '../../../images/room/img-7.jpg';
import rmd2 from '../../../images/room/img-8.jpg';

const Description = ({ value }) => {
  return (
    <div className="Room-details-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="room-description">
              <div className="room-title">
                <h2>Описание</h2>
              </div>
              <p className="p-wrap">{value?.FULL_DESC}</p>
            </div>
            <div className="room-details-service">
              <div className="row">
                <div className="room-details-item">
                  <div className="row">
                    <div className="col-md-5 col-sm-12 col-12">
                      <div className="room-d-text">
                        <div className="room-title">
                          <h2>Amenities</h2>
                        </div>
                        <ul>
                          <li>
                            <Link to="/room-single">Refrigerator and water</Link>
                          </li>
                          <li>
                            <Link to="/room-single">Air Conditioner Facilities</Link>
                          </li>
                          <li>
                            <Link to="/room-single">Fruits are always available</Link>
                          </li>
                          <li>
                            <Link to="/room-single">2 Sets of nightwear</Link>
                          </li>
                          <li>
                            <Link to="/room-single">Tables and Chairs</Link>
                          </li>
                          <li>
                            <Link to="/room-single">2 Elevator Available</Link>
                          </li>
                          <li>
                            <Link to="/room-single">Room Side Belcony</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-12 col-12">
                      <div className="room-d-img">
                        <img src={rmd1} alt="" />
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-12 col-12">
                      <div className="room-d-img">
                        <img src={rmd2} alt="" />
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-12 col-12">
                      <div className="room-d-text2">
                        <div className="room-title">
                          <h2>Room Services</h2>
                        </div>
                        <ul>
                          <li>
                            <Link to="/room-single">Daily Cleaning</Link>
                          </li>
                          <li>
                            <Link to="/room-single">Special Swimming Pool</Link>
                          </li>
                          <li>
                            <Link to="/room-single">Free Parking</Link>
                          </li>
                          <li>
                            <Link to="/room-single">Free-to-use smartphone </Link>
                          </li>
                          <li>
                            <Link to="/room-single">Free Wifi</Link>
                          </li>
                          <li>
                            <Link to="/room-single">2 Elevator Available</Link>
                          </li>
                          <li>
                            <Link to="/room-single">Room Side Belcony</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Pricing />
            <Review />
            <AddReview />
            <OtherRoom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
