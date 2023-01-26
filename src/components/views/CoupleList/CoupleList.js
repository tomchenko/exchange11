import { useEffect } from "react";
import { useSelector } from "react-redux";
import CoupleItem from "../CoupleItem/CoupleItem";

const CoupleList = () => {
  const couple = useSelector((state) => state.exchange.couple);

  useEffect(() => {
    localStorage.setItem("couple", JSON.stringify(couple));
  }, [couple]);
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
      {couple.map(({ base, base2, rateBase, rateBase2, id }) => {
        return (
          <CoupleItem
            base={base}
            base2={base2}
            rateBase={rateBase}
            rateBase2={rateBase2}
            key={id}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default CoupleList;
