export const customStyles = {
  control: (styles, state) => ({
    ...styles,
    "&:hover": {
      boxShadow: "0 0 0 3px rgba(34 ,197 ,94, 1)",
      border: "none",
    },
    "&:focus": {
      boxShadow: "0 0 0 3px rgba(34 ,197 ,94, 1)",
      border: "none",
    },
    boxShadow: state.isFocused
      ? "0 0 0 3px rgba(34 ,197 ,94, 1)"
      : styles.boxShadow,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    border: state.isFocused ? "none" : "2px solid rgb(21, 169, 135)",
    borderRadius: "5px",
    width: "100px",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
  option: (styles, { isSelected, isFocused }) => ({
    ...styles,
    backgroundColor: !isFocused
      ? !isSelected
        ? "transparent"
        : styles.backgroundColor
      : "rgba(74, 209, 187, 0.7)",
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: `rgba(255, 255, 255, ${
      window.innerWidth < 680 ? 0.8 : 0.7
    })`,
    left: window.innerWidth < 680 ? "0px" : "150px",
    position: "absolute",
    transform: "translateY(-50%)",
  }),
  menuList: (base) => ({
    ...base,
    maxHeight:"300px",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "zinc",
  }),
};
