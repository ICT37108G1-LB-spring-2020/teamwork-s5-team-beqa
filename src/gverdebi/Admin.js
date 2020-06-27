import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import AppAPI from "../AppAPI";
import Loading from "../components/Loading";
const Admin = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await AppAPI.get("/shoes");
      await setData(data.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  const handleLinkChange = (id, e) => {
    return history.push({ pathname: `/admin/shoes/${id}/edit` });
  };

  const handleDelete = (id) => {
    let newData = data.filter((shoe) => shoe.id !== id);
    setData(newData);
    return AppAPI.delete(`shoe/${id}`);
  };
  return (
    <div id="container">
      <div
        id="prod_wrapper"
        style={{ minHeight: "410px", paddingBottom: "100px" }}
      >
        <div id="prod_nav">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "80px",
            }}
          >
            <h2
              style={{
                fontSize: "44px",
                color: "black",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            >
              {" "}
              Admin Panel
            </h2>
            <Link
              style={{
                fontSize: "20px",
                color: "teal",
                border: "double 5px pink",
                height: "50px",
                lineHeight: "40px",
                paddingTop: "10px",
                paddingBottom: "0",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
              to="/admin/shoes/new"
            >
              Add shoes
            </Link>
          </div>
          {loading ? (
            <Loading />
          ) : (
            <ul>
              {data &&
                data.map((shoe) => (
                  <li
                    key={shoe.id}
                    style={{
                      marginBottom: "50px",
                      position: "relative",
                      overflow: "hidden",
                      height: "230px",
                    }}
                    className="adminTeritory"
                  >
                    {" "}
                    <Link to={`/admin/shoes/${shoe.id}/edit`}>
                      <img src={shoe.imageUrl} width="160" alt="" />
                      <strong>{shoe.title}</strong> {shoe.price}
                    </Link>
                    <button
                      className="editButton"
                      onClick={(e) => handleLinkChange(shoe.id, e)}
                    >
                      🛠
                    </button>
                    <button
                      onClick={() => handleDelete(shoe.id)}
                      className="removeButton"
                    >
                      🗑
                    </button>
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

export default Admin;
