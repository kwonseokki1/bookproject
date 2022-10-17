export function CustomButton({ buttonStyles }) {
  const { text, onClick } = buttonStyles;
  const defaultStyle = CustomButton.defaultProps;
  const customStyle = buttonStyles;
  const assignedStyle = Object.assign(defaultStyle, customStyle);

  return (
    <div
      style={{
        ...assignedStyle.buttonStyles,
        ...assignedStyle,
        fontWeight: "bold",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "5px",
      }}
      onClick={() => onClick}
    >
      {text}
    </div>
  );
}

CustomButton.defaultProps = {
  buttonStyles: {
    color: "#ffffff",
    text: "button",
    background: "gray",
    padding: "10px 20px",
    onClick: () => {},
  },
};
