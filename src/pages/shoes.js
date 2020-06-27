import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppAPI from "../AppAPI";
import Loading from "../components/Loading";

const shoes = () => {
  const [gela, setData] = useState([]);
  const [loading, setLoading] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await AppAPI.get("/shoes");
      await setData(data.data.sort((a, b) => b - a));
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(loading);
  return (
    <div id="container">
      <div id="prod_wrapper" style={{ minHeight: "400px" }}>
        <div id="prod_nav">
          <h2
            style={{
              fontSize: "44px",
              color: "black",
              marginTop: "30px",
              marginBottom: "10px",
            }}
          >
            {" "}
            store
          </h2>
          {loading ? (
            <Loading />
          ) : (
            <ul>
              {gela &&
                gela.map((shoe) => (
                  <li key={shoe.id} style={{ marginBottom: "50px" }}>
                    {" "}
                    <Link to={`/store/shoes/${shoe.id}`}>
                      <img src={shoe.imageUrl} width="160" alt="" />
                      <strong>{shoe.title}</strong> {shoe.price}
                    </Link>
                  </li>
                ))}
              <div style={{ clear: "both" }}></div>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default shoes;
