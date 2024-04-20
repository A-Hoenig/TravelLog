import PropTypes from "prop-types";
import styles from "./CityItem.module.css";

CityItem.propTypes = {
  city: PropTypes.object,
};

function CityItem({ city }) {
  return (
    <li className={styles.cityItem}>
      {city.cityName}, {city.country}
    </li>
  );
}

export default CityItem;
