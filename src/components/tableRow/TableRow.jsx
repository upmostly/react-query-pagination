import "./TableRow.css";

const TableRow = () => {
  return (
    <div className="table-row">
      <span>
        <img
          src="https://randomuser.me/api/portraits/men/88.jpg"
          alt="avatar"
        />
        <span>Lukas Graham</span>
      </span>
      <span>emailid@gmail.com</span>
    </div>
  );
};

export default TableRow;
