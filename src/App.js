import { useEffect } from "react";
import { axiosExchange } from "./redux/exchangeSlice";
import CurrencyRatio from "./components/views/CurrencyRatio/CurrencyRatio";
import Calculator from "./components/views/Calculator";
import CoupleList from "./components/views/CoupleList";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axiosExchange());
  }, [dispatch]);

  return (
    <div className="p-5 flex flex-col gap-10 items-center justify-center h-[max-content] bg-[#FAF0E6]">
      <CurrencyRatio />
      <Calculator />
      <CoupleList />
    </div>
  );
}

export default App;
