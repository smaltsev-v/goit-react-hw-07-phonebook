import PropTypes from 'prop-types';
import s from "./Filter.module.css";
import { BsSearch } from "react-icons/bs";

const Filter = ({ value, onChange }) => {
  
  return (
    <div className={s.filter}>
      <label className={s.labelForm}>
      <BsSearch 
      fill='blue'/>
        Find contacts by name
        <input
          className={s.inputFilter}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
