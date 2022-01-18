import { useState } from "react";
import TableHeader from "./components/tableHeader/TableHeader";
import TableRow from "./components/tableRow/TableRow";
import Pagination from "./components/pagination/Pagination";

const App = () => {
  const [activePage, setActivePage] = useState(1);

  return (
    <>
      <TableHeader />
      <TableRow />
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        pages={2}
      />
    </>
  );
};

export default App;
