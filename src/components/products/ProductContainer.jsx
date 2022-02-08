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

import LinkPage from './Link';
import Support from './Support';
import DigitalProduct from './DigitalProduct';

const RenderItems = ({viewing, profile}) => {
  if (viewing == 'link') {
    return <LinkPage profile={profile} />
  } else if (viewing == 'support') {
    return <Support profile={profile} />
  } else if (viewing == 'digital-product') {
    return <DigitalProduct profile={profile} />
  }
}

function ProductContainer({profile}) {
  let { path, url } = useRouteMatch();
  let { viewing } = useParams();
  if (viewing == undefined) {
    viewing = "link";
  }

  return (
    <div className={style.productContainer}>
      <div className={style.categoryList}>
        <Link to={`link`}>
          <HiLink className={viewing == 'link' || viewing === undefined ? style.iconCategoryActive : style.iconCategory} />
        </Link>
        <Link to={`event`}>
          <BiCalendarStar className={viewing == 'event' ? style.iconCategoryActive : style.iconCategory} />
        </Link>
        <Link to={`digital-product`}>
          <MdOutlineShoppingBag className={viewing == 'digital-product' ? style.iconCategoryActive : style.iconCategory} />
        </Link>
        <Link to={`physical`}>
          <BsBoxSeam className={viewing == 'physical' ? style.iconCategoryActive : style.iconCategory} />
        </Link>
        <Link to={`support`}>
          <RiHandHeartLine className={viewing == 'support' ? style.iconCategoryActive : style.iconCategory} />
        </Link>
      </div>

      <Switch>
        <Route exact path={path}>
          {/* <Product /> */}
          <RenderItems viewing={viewing} profile={profile} />
        </Route>
        <Route path={`/:username/:viewing`}>
          <ProductByCategory />
        </Route>
      </Switch>
    </div>
  );
}

export default ProductContainer;
