const Menu = ({ itemsForDinner }) => {
  return (
    <>
      <div className="menu-container">
        {itemsForDinner.map((item, idx) => {
          return (
            <div key={`${item}${idx}`}>
              {idx + 1}. {item}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
