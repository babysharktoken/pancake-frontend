import React from 'react'
import transakSDK from '@transak/transak-sdk'

/* eslint-disable new-cap */
const transakSettings = {
  apiKey: '33ba59d3-7927-469f-831e-82480e3fe336',  // Your API Key (Required)
  environment: 'STAGING', // STAGING/PRODUCTION (Required)
  defaultCryptoCurrency: 'ETH',
  walletAddress: '', // Your customer wallet address
  themeColor: '000000', // App theme color in hex
  email: '', // Your customer email address (Optional)
  redirectURL: '',
  hostURL: window.location.origin, // Required field
  widgetHeight: '550px',
  widgetWidth: '450px'
};

export function loadTransak() {
  const transak = new transakSDK(transakSettings);

  transak.init();

  // To get all the events
  transak.on(transak.ALL_EVENTS, (data) => {
    console.log(data);
  });

  // This will trigger when the user closed the widget
  transak.on(transak.EVENTS.TRANSAK_WIDGET_CLOSE, (orderData) => {
    window.location.href = '/swap';
  });

  // This will trigger when the user marks payment is made.
  transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
    console.log(orderData);
    window.location.href = '/swap';
  });
}

loadTransak();
const Buy: React.FC = (props: any) => {
  return (
    <>
    </>
  )
}

export default Buy
