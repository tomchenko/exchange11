import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculator, setInput1 } from "../../../redux/exchangeSlice";
import Itter from "../../ui/Itter/Itter";

const Calculator = () => {
  const [currency1, setCurrency1] = useState("");
  const [currency2, setCurrency2] = useState("");

  const input2 = useSelector((state) => state.exchange.input2);
  const input1 = useSelector((state) => state.exchange.input1);

  const dispatch = useDispatch();

  const calculation = () => {
    dispatch(calculator({ input1, input2, currency2, currency1 }));
  };
  const handleChange = (e) => {
    dispatch(setInput1(e.target.value));
  };

  return (
    <div className="bg-stone-400 opacity-60 gap-7 p-8 rounded-3xl flex flex-col md:flex-row">
      <div className="flex flex-col sm:flex-row gap-3">
        <select
          className="rounded-xl"
          value={currency1}
          onChange={(e) => {
            setCurrency1(e.target.value);
          }}
        >
          <option selected disabled></option>
          <Itter />
        </select>
        <input
          placeholder="..."
          className="rounded-xl p-2"
          type="number"
          value={input1}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <select
          className="rounded-xl"
          value={currency2}
          onChange={(e) => {
            setCurrency2(e.target.value);
          }}
        >
          <option selected disabled></option>
          <Itter />
        </select>
        <input
          placeholder="..."
          className="rounded-xl p-2"
          type="number"
          value={input2}
          readOnly
        />
      </div>
      <button onClick={calculation}>Посчитать</button>
    </div>
  );
};
export default Calculator;
