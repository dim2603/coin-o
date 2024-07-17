import {cryptoAssets} from './data'
const API_KEY = ''

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': API_KEY
    }
  };

export function fetchCrypto() {
    return fetch('https://openapiv1.coinstats.app/coins', options)
    .then(response => {
      if (!response.ok) {
        alert('Please check API_KEY in /src/api.js and specify correct from coinstats.app')
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => data)
    .catch(err => {
      console.error('Fetch error:', err);
    });
}

export function fetchAssets() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cryptoAssets)
        }, 1)
    })
}