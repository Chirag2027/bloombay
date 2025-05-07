import React from 'react'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

const PaypalButton = ({amount, onSuccess, onError}) => {
  return <PayPalScriptProvider options={{"client-id": ""}}>

    <PayPalButtons style={{layout: "vertical"}} 
    createOrder={(data, actions) => {
        return actions.order.create({
            purchase_units: [{amount: {value: amount}}]
        })
    }}

    onApprove={(data, actions) => {
        return actions.order.capture().then(onSuccess)
    }}

    onError={onError}
    />
  </PayPalScriptProvider>
}

export default PaypalButton
