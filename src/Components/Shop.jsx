import React from "react";
import grey from "../assets/grey.png";
import green from "../assets/green.png";
import blue from "../assets/blue.png";
import ShopBox from "./ShopBox";
import red from "../assets/red_black.png";
import AOS from "aos";

export default function Shop() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="py-5">
      <h1
        className="title text-uppercase fw-bolder fs-4 text-center py-3"
        data-aos="fade-up"
      >
        <span>Shop For your favourite Hood</span>
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex " data-aos="fade-up">
              <ShopBox title="Black hood" price="$700" image={red} />
              <ShopBox title="Grey Hood" price="$400" image={grey} />
              <ShopBox title="Red and black hood" price="$800" image={red} />
              <ShopBox title="Blue Hood" price="$500" image={blue} />
              <ShopBox title="Green" price="$300" image={green} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
