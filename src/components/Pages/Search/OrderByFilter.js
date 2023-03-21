export default function OrderByFilter({ setOrderBy }) {
  const orderByChangeHandler = (event) => {
    setOrderBy(`release_date.${event.target.value}`);
  };

  return (
    <div className="col-sm-4 d-flex flex-column">
      <span className="text-white">Order By:</span>
      <select
        name="orderBy"
        className="form-select"
        onChange={orderByChangeHandler}
      >
        <option value="none">None</option>
        <option value="desc">Latest</option>
        <option value="asc">Oldest</option>
      </select>
    </div>
  );
}
