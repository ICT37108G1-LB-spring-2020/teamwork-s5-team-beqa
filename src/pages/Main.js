import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppAPI from "./../AppAPI";
import Loading from "./../components/Loading";

const MainPage = () => {
  const [gela, setData] = useState([]);
  const [loading, setLoading] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await AppAPI.get("/shoes");
      await setData(
        data.data
          .slice(data.data.length - 5, data.data.length)
          .sort((a, b) => b - a)
      );
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div id="container">
      <div
        id="prod_wrapper"
        style={{ height: "305px", minHeight: "305px", paddingBottom: "50px" }}
      >
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
            Our Best 5 shoes
          </h2>
          {loading ? (
            <Loading />
          ) : (
            <ul>
              {gela &&
                gela.map((shoe) => (
                  <li key={shoe.id} style={{ marginBottom: "80px" }}>
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
          <Link
            style={{
              fontSize: "24px",
              color: "black",
              width: "100%",
              textAlign: "center",
              marginTop: "10px",
              fontFamily: "Parisienne, sans-serif",
            }}
            to="/store/shoes"
          >
            See Our store
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
