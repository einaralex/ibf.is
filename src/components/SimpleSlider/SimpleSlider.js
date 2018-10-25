import React, { Component, Children } from "react";
import Slider from "react-slick";
import styles from "./SimpleSlider.module.scss";

const Paging = ({ totalSlides, activeIndex }) => {
  const WIDTH = 260;
  const progressWidth = WIDTH / totalSlides;
  return (
    <div className={styles.paging}>
      <div className={styles.pagingBackground}>
        <span
          className={styles.pagingProgress}
          style={{
            width: progressWidth,
            transform: `translateX(${100 * activeIndex}%)`,
          }}
        />
      </div>
    </div>
  );
};

class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      totalSlides: Children.count(props.children),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(oldIndex, newIndex) {
    this.setState({
      activeIndex: newIndex,
    });
  }

  render() {
    const { totalSlides, activeIndex } = this.state;
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      beforeChange: this.handleChange,
      variableWidth: false,
      responsive: [
        { breakpoint: 600, settings: { slidesToShow: 1, arrows: false } },
        { breakpoint: 960, settings: { slidesToShow: 2, arrows: false } },
        { breakpoint: 1300, settings: { slidesToShow: 3 } },
      ],
    };
    return (
      <>
        <Slider {...settings}>{this.props.children}</Slider>
        <Paging totalSlides={totalSlides} activeIndex={activeIndex} />
      </>
    );
  }
}

export default SimpleSlider;