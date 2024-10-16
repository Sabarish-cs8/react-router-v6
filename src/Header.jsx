import {useContext} from 'react';
import { FaLaptop, FaTableAlt, FaMobileAlt } from "react-icons/fa";
import {DataProvider} from "./context/DataContext";


//for icon download "npm i react-icons"

const Header = ({ title, width }) => {
  const {width}=useContext(DataContext)
  return (
    <header className="header">
      <h1>{title}</h1>
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTableAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
};

export default Header;
