import React, { Component, Children } from "react";
import Slick from "react-slick";
import styles from "./Slider.module.scss";

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

class Slider extends Component {
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
    const DEFAULT_SETTINGS = {
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      beforeChange: this.handleChange,
      variableWidth: false,
      arrows: true,
      responsive: [
        { breakpoint: 600, settings: { slidesToShow: 1.25, infinite: false, arrows: false } },
        { breakpoint: 960, settings: { slidesToShow: 2 } },
        { breakpoint: 1300, settings: { slidesToShow: 3 } },
        { breakpoint: 1800, settings: { slidesToShow: 4 } },
      ],
    };
    const { settings = DEFAULT_SETTINGS } = this.props;
    const { totalSlides, activeIndex } = this.state;
    return (
      <>
        <Slick {...settings}>{this.props.children}</Slick>
        <Paging totalSlides={totalSlides} activeIndex={activeIndex} />
      </>
    );
  }
}

export default Slider;
