import React from "react";
import { SArticle } from "./styles";
import { IItem } from "@/typeModels/ItemShop/iteminterfaces";
import item_sample from "@/assets/imgs/retro/item_sample.png";
import coin from "@/assets/imgs/retro/coin.png";
import ItemWrapper from "../ItemWrapper/ItemWrapper";

interface ItemProps {
  item: IItem;
}

const ItemItem = ({ item }: ItemProps) => {
  return (
    <SArticle>
      {/* <img src={item_sample} className="item__img"></img> */}
      <ItemWrapper />
      <div className="item__description__wrapper">
        <div className="item__name">{item.name}</div>
        <div className="item__description">
          <div className="coin__wrapper">
            <img src={coin} className="coin"></img>
            {item.point}
          </div>
          {/* {item.category} */}
          <button className="buy__btn">Buy</button>
        </div>
      </div>
    </SArticle>
  );
};

export default ItemItem;
