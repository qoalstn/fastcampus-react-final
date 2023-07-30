import "./Dropdown.css";

const Dropdown = ({list=[],selected,onChange}) => {

  return (
    <div className="dropdown-box">
        <select value={selected} onChange={onChange}>
          {list.length > 0 && (
            list.map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))
          ) }
        </select>
    </div>
  );
};

export default Dropdown;
