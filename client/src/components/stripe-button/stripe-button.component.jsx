import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JmQLSImoeZv34ovq2pALRuKFDMqYXKiQGRD8Pv7lMTbBuK8tm7s6zXwQgGiWFP6x0RKxXdEiQk3a8GRyYHhstqd00WHZU2tEV';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Hire A GoT'
      billingAddress
      shippingAddress
      image='https://i.pinimg.com/originals/46/7f/fa/467ffa705a9695886a7883674f75e860.png'
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
