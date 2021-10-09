import React from 'react';
import './carousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      totalSlides: 4,
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.next, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateSlider = ({ target: { currentIndex, value } }) => {
    this.setState({ [currentIndex]: value });
  };

  next = () => {
    const { currentIndex, totalSlides } = this.state;
    if (currentIndex < totalSlides - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
      });
    } else if (currentIndex === totalSlides - 1) {
      this.setState({
        currentIndex: 0,
      });
    }
  };

  prev = () => {
    const { currentIndex, totalSlides } = this.state;
    if (currentIndex > 0) {
      this.setState({
        currentIndex: currentIndex - 1,
      });
    } else if (currentIndex === 0) {
      this.setState({
        currentIndex: totalSlides - 1,
      });
    }
  };

  render() {
    return (
      <div className="carouselContainer">
        <div className="carouselWrapper">
          <button className="leftArrow" onClick={this.prev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="rightArrow" onClick={this.next}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <div className="carouselcontainerWrapper">
            <div
              className="carouselContent"
              style={{
                transform: `translateX(-${this.state.currentIndex * 100}%)`,
              }}
            >
              <img src="/image/1.png" alt="img1" />
              <img src="/image/2.png" alt="img2" />
              <img src="/image/3.png" alt="img3" />
              <img src="/image/4.png" alt="img4" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
