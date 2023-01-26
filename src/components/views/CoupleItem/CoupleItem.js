import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../../redux/exchangeSlice";

const CoupleItem = ({ base, base2, rateBase, rateBase2, id }) => {
  const couple = useSelector((state) => state.exchange.couple);
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(removeItem({ id, couple }));
  };

  return (
    <div className="flex flex-col justify-center items-center relative bg-amber-400 bg-opacity-20 p-4 px-10 rounded-lg">
      <div className="flex gap-2">
        <div className="max-w-[30px] max-h-[15px] min-w-[30px] min-h-[15px]">
          <img src={`/img/${base}.jpg`} alt={`${base}`} />
        </div>
        <p>{base}</p>
      </div>
      <p className="font-semibold">{rateBase}</p>
      <p>=</p>
      <div className="flex gap-2">
        <div className="max-w-[30px] max-h-[15px] min-w-[30px] min-h-[15px]">
          <img src={`/img/${base2}.jpg`} alt={`${base2}`} />
        </div>
        <p>{base2}</p>
      </div>
      <p className="font-semibold">{rateBase2}</p>
      <div
        className="absolute right-2 top-1 cursor-pointer"
        onClick={() => remove(id)}
      >
        <span className="text-red-700 text-3xl">&times;</span>
      </div>
    </div>
  );
};

export default CoupleItem;
