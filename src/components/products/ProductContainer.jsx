import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import style from "./style/ProductContainer.module.css";
//component
import ProductByCategory from "./ProductByCategory";
import { HiLink } from "react-icons/hi";
import { BiCalendarStar } from "react-icons/bi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { RiHandHeartLine } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import Product from "./Product";
function ProductContainer() {
  let { path, url } = useRouteMatch();
  console.log(url);
  return (
    <div className={style.productContainer}>
      <div className={style.categoryList}>
        <Link to={`${url}`}>
          <HiLink className={style.iconCategory} />
        </Link>
        <Link to={`${url}/event`}>
          <BiCalendarStar className={style.iconCategory} />
        </Link>
        <Link to={`${url}/digital`}>
          <MdOutlineShoppingBag className={style.iconCategory} />
        </Link>
        <Link to={`${url}/physical`}>
          <BsBoxSeam className={style.iconCategory} />
        </Link>
        <Link to={`${url}/support`}>
          <RiHandHeartLine className={style.iconCategory} />
        </Link>
      </div>

      <Switch>
        <Route exact path={path}>
          <p>semua produk</p>
          <Product />
        </Route>
        <Route path={`${path}/:categoryId`}>
          <ProductByCategory />
        </Route>
      </Switch>
    </div>
  );
}

export default ProductContainer;
