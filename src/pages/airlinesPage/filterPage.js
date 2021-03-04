import React, { useState } from "react";
import CheckboxComponent from "../../component/common/checkbox";
import FilterComponent from "../../component/common/range";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faAngleDown,
  faAngleUp,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
const FilterPage = () => {
  const [show, setShow] = useState(false);

  const onShowFilter = () => {
    setShow(!show);
  };
  return (
      <div className="FilterCheckBoxContainer">
        <div className="CategoryTitleandLogo" onClick={onShowFilter}>
          <div className="CategoryTitle">Stops</div>
          <div className="CategoryLogo">
            <FontAwesomeIcon
              className="LowerIcon"
              size="2x"
              icon={show ?faAngleUp:faAngleDown}
            />
          </div>
          
        </div>
        {show &&<div>
             <CheckboxComponent title="Direct" />
             <CheckboxComponent title="1 Stop" />
             </div>}
      </div>
   
  );
};
export default FilterPage;
