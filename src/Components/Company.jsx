import React from "react";
import adidas from "../assets/adidas_red.png";
import pokemon from "../assets/pokemon.png";
import nike from "../assets/nike_hood.png";
import adidas2 from "../assets/red_black.png";
import jordan from "../assets/jordan.png";
import ShopBox from "./ShopBox";
import AOS from "aos";

export default function Company() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="pb-3">
      <h1
        className="title text-uppercase fw-bolder fs-4 text-center py-3"
        data-aos="slide-up"
      >
        <span>Hoods from Leading Brands</span>
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex " data-aos="slide-up">
              <ShopBox title="Red Adidas " price="$650" image={adidas} />
              <ShopBox title="Blue Pokemon " price="$400" image={pokemon} />
              <ShopBox title="white and black Nike" price="$800" image={nike} />
              <ShopBox title="Blue Nike Hood" price="$500" image={adidas2} />
              <ShopBox title="Jordan hood" price="$350" image={jordan} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
