import { COLLECTION_URL } from "../../config/config";
import { useState, useEffect } from "react";
import CollectionCard from "../../Components/CollectionCard";
import MarketFilter from "../../Components/MarketFilter";
import Select from "react-select";
import { CATEGORY_URL } from "../../config/config";
import "./Market.css";

function Market() {
  const [response, setResponse] = useState([]);

  const [collections, setCollections] = useState([]);

  const handleFirst = async () => {
    const query = await fetch(COLLECTION_URL);
    const response = await query.json();

    setCollections(response.collection);
  };

  useEffect(() => {
    handleFirst();
  }, []);

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const query = await fetch(CATEGORY_URL);
    const response = await query.json();

    let finalCategory = [];
    response.categories.forEach((category) => {
      finalCategory.push({ value: category._id, label: category.name });
    });
    setCategories(finalCategory);
  };

  const onChange = async (value) => {
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(value),
    };

    const query = await fetch(COLLECTION_URL + "filter", options);
    const response = await query.json();

    setCollections(response.collections);
  };

  useEffect(() => {
    getCategories();
    return () => {};
  }, []);

  return (
    <>
      <div className="marketContainer">
        {/* <MarketFilter > </MarketFilter> */}
        <Select
            defaultValue={[]}
            isMulti
            name="colors"
            options={categories}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={onChange}
          />

        <div className="articleContainer ">
        

          {collections?.map((item) => (
            <CollectionCard item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Market;
