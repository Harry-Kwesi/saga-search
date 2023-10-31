import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, setSearchTerm } from "./actions";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);
  const searchTerm = useSelector((state) => state.searchTerm);

  useEffect(() => {
    // Trigger the data fetching when the component mounts
    dispatch(fetchData());
  }, [dispatch]);

  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  // Filter the data based on the search term
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>Saga</h1>
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <div>
        {error ? (
          <p>Error: {error.message}</p>
        ) : (
          <ul>
            {filteredData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
