import { useState } from "react";

const Home = ({ itemsForDinner }) => {
  const [randomItemIndex, setRandomItemIndex] = useState(-1);
  const [lastItemRecord, setLastItemRecord] = useState([]);
  const randomItemSelector = () => {
    const index = Math.floor(Math.random() * itemsForDinner.length) + 1;
    setRandomItemIndex(index);
    setLastItemRecord([...lastItemRecord, itemsForDinner[index]]);
    //console.log(lastItemRecord, ": lastItemRecord");
  };
  return (
    <div className="home-container">
      <h1>
        Aaj wanao
        <br />
        <span className="selected-item">
          {randomItemIndex >= 0
            ? itemsForDinner[
                randomItemIndex > itemsForDinner.length
                  ? randomItemIndex - 1
                  : randomItemIndex
              ]
            : ""}
        </span>
      </h1>
      <button onClick={randomItemSelector} className="button-1">
        koi wanao??
      </button>
      <div>
        {/* Last 10 items:
        {lastItemRecord
          .slice(
            lastItemRecord.length > 10
              ? lastItemRecord.length - 10
              : lastItemRecord.length
          )
          .map((lastItem, idx) => {
            return <div key={`${idx * Math.random()}`}>{lastItem}</div>;
          })} */}
      </div>
    </div>
  );
};
export default Home;
