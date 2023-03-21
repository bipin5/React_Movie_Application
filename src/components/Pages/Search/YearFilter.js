export default function YearFilter({ year, setYear }) {
  const getYearsData = () => {
    let years = [];

    for (let i = 2022; i >= 2019; i--) {
      years.push(i);
    }

    return years;
  };
  const yearChangeHandler = (event) => {
    setYear(event.target.value);
  };

  return (
    <div className="col-sm-4 d-flex flex-column">
      <span className="text-white">Release Date:</span>
      <select
        name="year"
        id="year"
        className="form-select"
        value={year}
        onChange={yearChangeHandler}
      >
        <option value="all">All</option>

        {getYearsData().map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
