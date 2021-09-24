import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Jcuu5BKcAS7Io9iDxQ8DF7ePOvgxPVAovb8TwYLx6VnIYq7YMh64kYXmsTBa5ywJGMxA1VNIKPt8g6YOoJpUKib00R9TDh4Q5";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Success");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image=""
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      description={`Your total is $${price}`}
    />
  );
};

export default StripeCheckoutButton