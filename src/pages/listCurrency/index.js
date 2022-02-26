import React from 'react';

const ListCurrency = () => {
  // dummy email dewed45602@spruzme.com
  // dummy pass password124
  //d9403daf-0d85-42b9-bbe4-ce2873b24d37

  const axios = require('axios');

  let response = null;
  new Promise(async (resolve, reject) => {
    try {
      response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
        'Access-Control-Allow-Origin': '*',
      },
    });
    } catch(ex) {
      response = null;
      // error
      console.log(ex);
      reject(ex);
    }
    if (response) {
      // success
      const jsonResp = response.data;
      console.log(jsonResp);
      resolve(jsonResp);
    }
  });



    return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'Left',
            alignItems: 'Left',
            height: '100vh'
          }}
        >
          <h1>{response}</h1>
        </div>
      );
}

export default ListCurrency;