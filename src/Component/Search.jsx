import { useState } from "react";
import { dataImg } from "../data";

const Search = () => {
  const [filter, setFilter] = useState("");
  console.log(setFilter);
  let dataSearch = dataImg.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  return (
    <div className="search container">
      <div className="search-input">
        <form action="" className="form">
          <input
            type="text"
            placeholder="searching"
            className="form-control mt-3"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </form>
      </div>
      <div className="row">
        {dataSearch.map((data) => {
          return (
            <div
              className="col-12 col-md-4 col-lg-3 col-sm-6 my-2"
              key={data.id}
            >
              <div className="p-2 h-100 custome-card shadow">
                <img src={data.img} alt="" className=" card-custome-img" />
                <div className="card-body custome-body">
                  <h5 className="card-title custome-title">{data.title}</h5>
                  <p className="card-text custome-text">{data.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
