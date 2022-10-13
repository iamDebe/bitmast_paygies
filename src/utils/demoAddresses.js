import React from 'react'

export function demoAddresses()  {
    const cryptoWalletDetails = {
          bitcoin: {
              pseudonym: 'Bitcoin',
              icon: 'fab-bitcoin'
          },
          litecoin: {
              pseudonym: 'Litecoin',
              icon: 'fab-litecoin'
          },
          Dash: {
              pseudonym: 'Dashcoin',
              icon: 'fab-dashcoin'
          },
          Doge: {
              pseudonym: 'Dogecoin',
              icon: 'fab-dogecoin'
          }
    }
    return cryptoWalletDetails;
  }
  