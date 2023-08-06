import React from "react";
import Company from "./Company";
import Footer from "./Footer";
import Hero from "./Hero";
import Shop from "./Shop";

export default function Home({ data }) {
  return (
    <>
      <Hero />
      <Shop data={data} />
      <Company data={data} />
      <Footer />
    </>
  );
}
