import React, { useState, useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import { useParams } from "react-router-dom";

const category = [
  "smartphones",
  "laptops",
  "furniture",
  "womens-dresses",
  "sunglasses",
  "mens-watches",
];

const UserDetailsForm = () => {
  const { categories } = useContext(ApiContext);
  // const { id } = useParams();
  // const data = show?.find((pd) => pd.show.id === parseInt(id));

  const [name, setName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Store user details in local storage
    localStorage.setItem("name", name);
    localStorage.setItem("selectedOption", selectedOption);
    // Reset form fields
    setName("");
    setSelectedOption("");
  };

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close p-3"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            {/* <div className="modal-body mx-auto">
              <img src={data.show.image.medium} alt="" />
              <h2 className="text-center">{data.show.name}</h2>
              <p className="text-center">No. of Tickets: 0{selectedOption}</p>
            </div> */}
            <div className="modal-footer mx-auto">
              <form onSubmit={handleFormSubmit}>
                <label className="form-label">
                  <input
                    className="form-control"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <br />
                <label className="form-label">
                  Categories:
                  <select
                    className="form-select"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="laptops">Laptops</option>
                    <option value="furniture">Furniture</option>
                    <option value="womens-dresses">Womens Dresses</option>
                    <option value="sunglasses">Sunglasses</option>
                    <option value="mens-watches">Watches</option>
                  </select>
                </label>
                <div>
                  {/* <button
                    type="submit"
                    data-bs-dismiss="modal"
                    className="btn btn-primary mt-2"
                  >
                    Buy Now
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetailsForm;
