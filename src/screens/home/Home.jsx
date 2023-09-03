import React, { useContext, useEffect } from "react";
import Layout from "../../layout/Layout";
import "./home.css";
import ProductCard from "../../components/product/ProductCard";
import { useNavigate } from "react-router-dom";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { items } from "../../data/data";
import { AppContext } from "../../context/AppContext";
import { dbObject } from "../../helper/api";

const Home = () => {
  const navigate = useNavigate();
  const { items, restaurants } = useContext(AppContext);
  return (
    <Layout title="Home">
      <div className="container cm">
        <div className="page-heading d-flex justify-content-between">
          <h2>Most Popular Items</h2>
          <button onClick={() => navigate("/item")} type="button">
            View All
          </button>
        </div>

        <div className="item-container">
          {items.map((item, i) => (
            <ProductCard key={i} item={item} />
          ))}
        </div>

        <hr className="my-5" />

        <div className="page-heading d-flex justify-content-between">
          <h2>Most Popular Items</h2>
          <button onClick={() => navigate("/restaurants")} type="button">
            View All
          </button>
        </div>

        <div className="item-container">
   
          {restaurants?.map((item, i) => (
            <RestaurantCard key={i} item={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
