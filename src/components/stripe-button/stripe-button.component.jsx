import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JmQLSImoeZv34ovq2pALRuKFDMqYXKiQGRD8Pv7lMTbBuK8tm7s6zXwQgGiWFP6x0RKxXdEiQk3a8GRyYHhstqd00WHZU2tEV';
  //  const secretKey = 'sk_test_51JmQLSImoeZv34ovKRK37XLnqKYnOysH0JsoUTjB1nC769QpMf8d2Qq6CzX2VEkSBwFuN6V2J6vkpq3YdQgfvOPo00cuazfGxF';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }  

    return (
        
        <StripeCheckout
            lable='Pay Now'
            name='Monkey Island'
            billingAddress
            shippingAddress
            image= 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ede74449-e1f1-4d22-97dc-cde51bbc0b53/d6ckyl4-eb25396b-7bac-4f4b-8861-3f2accf97439.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkZTc0NDQ5LWUxZjEtNGQyMi05N2RjLWNkZTUxYmJjMGI1M1wvZDZja3lsNC1lYjI1Mzk2Yi03YmFjLTRmNGItODg2MS0zZjJhY2NmOTc0MzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Asw3hZSYKpRuDkYpppDsdcfN4tm0_f-9U2_9g2gE5bc'
            currency='gbp'
            description={`Your total is $£{price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;