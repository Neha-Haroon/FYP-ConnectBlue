import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ServiceDetails from "../components/Services/ServiceDetails";
import SuggestedService from "../components/Services/SuggestedService";
import { useSelector } from "react-redux";
import NavbarNew from "../components/Layout/NavbarNew";

const ServiceDetailsPage = () => {
  const { allServices } = useSelector((state) => state.services);
  const { allEvents } = useSelector((state) => state.events);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  useEffect(() => {
    if (eventData !== null) {
      const data = allEvents && allEvents.find((i) => i._id === id);
      setData(data);
    } else {
      const data = allServices && allServices.find((i) => i._id === id);
      setData(data);
    }
  }, [allServices, allEvents]);

  return (
    <div>
      {/* <Header /> */}

      <NavbarNew />
      <ServiceDetails data={data} />
      {!eventData && <>{data && <SuggestedService data={data} />}</>}
      <Footer />
    </div>
  );
};

export default ServiceDetailsPage;
