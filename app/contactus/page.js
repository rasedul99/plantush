import ContactForm from "@components/ContactUs/ContactForm";
import Location from "@components/ContactUs/Location";
import Banner from "@components/Shared/Banner";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="w-full h-[400px]  bg-[url('/assets/images/banner/contactus.png')] bg-no-repeat bg-center bg-cover">
        <Banner title="Contact Us" path="Home > Contact Us" />
      </div>

      <ContactForm />
      <Location />
    </div>
  );
};

export default ContactUs;
