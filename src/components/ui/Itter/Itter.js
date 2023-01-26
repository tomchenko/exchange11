import { valutes } from "../../../valutes";

// for option to select
const Itter = () => {
  return valutes.map(({ rat }) => {
    return <option key={rat}>{rat}</option>;
  });
};
export default Itter;
