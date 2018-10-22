import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames'
import styles from "./SectionLegend.module.scss";
import { Body3 } from "../Typography";

const SectionLegend = ({ number, text, textColor = "light" }) => (
  <div className={cn(styles.root, styles[textColor])}>
    <Body3 uppercase monospace>
      {number}
    </Body3>
    <span className={styles.decorator} />
    <Body3 uppercase bold>
      {text}
    </Body3>
  </div>
);

SectionLegend.propTypes = {
  textColor: PropTypes.oneOf(['light', 'dark']),
};

export default SectionLegend;
