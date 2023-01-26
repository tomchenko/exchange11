import Itter from "../../ui/Itter/Itter";
import { useDispatch, useSelector } from "react-redux";
import { setValue1, setValue2, exchange } from "../../../redux/exchangeSlice";

const CurrencyRatio = () => {
  const dispatch = useDispatch();
  const currencyExchange = () => {
    dispatch(exchange({ value1, value2 }));
  };

  const value1 = useSelector((state) => state.exchange.value1);
  const value2 = useSelector((state) => state.exchange.value2);

  const handleChange1 = (e) => {
    dispatch(setValue1(e.target.value));
  };
  const handleChange2 = (e) => {
    dispatch(setValue2(e.target.value));
  };

  return (
    <div className="flex gap-10 justify-center">
      <select
        className="rounded-xl p-1"
        value={value1}
        onChange={handleChange1}
      >
        <option selected disabled></option>
        <Itter />
      </select>
      <select
        className="rounded-xl p-1"
        value={value2}
        onChange={handleChange2}
      >
        <option selected disabled></option>
        <Itter />
      </select>
      <button
        onClick={currencyExchange}
        className="bg-[#CD9575] hover:bg-[#a17154] text-white p-3 rounded-lg"
      >
        Добавить
      </button>
    </div>
  );
};

export default CurrencyRatio;
