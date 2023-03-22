export default function OrderByFilter({ setOrderBy }) {
  const orderByChangeHandler = (event) => {
    setOrderBy(`release_date.${event.target.value}`);
  };
  const orderByItems = [
    {
      name: "None",
      value: "none",
    },
    {
      name: "Latest",
      value: "desc",
    },
    {
      name: "Oldest",
      value: "asc",
    },
  ];

  return (
    <div className="col-sm-4 d-flex flex-column">
      <span className="text-white">Order By:</span>
      <select
        name="orderBy"
        className="form-select"
        onChange={orderByChangeHandler}
      >
        {orderByItems.map((item) => (
          <option value={item.value}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}
