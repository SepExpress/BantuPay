/**
 * Minimal wrapper around MoMo Open API
 * Replace placeholders with your credentials.
 */
import axios from 'axios';

const BASE_URL = 'https://sandbox.momodeveloper.mtn.com';
const API_USER = '<REPLACE_WITH_API_USER>'; // should be stored securely
const API_KEY = '<REPLACE_WITH_API_KEY>'; // should be stored securely

export async function requestToPay({amount, currency, externalId, phoneNumber}) {
  const url = `${BASE_URL}/collection/v1_0/requesttopay`;
  const payload = {
    amount,
    currency,
    externalId,
    payer: {partyIdType: 'MSISDN', partyId: phoneNumber},
    payerMessage: 'Payment',
    payeeNote: 'Thanks',
  };
  return axios.post(url, payload, {
    headers: {
      'X-Reference-Id': externalId,
      'X-Target-Environment': 'sandbox',
      'Ocp-Apim-Subscription-Key': API_KEY,
    },
  });
}

export async function getTransactionStatus(referenceId) {
  const url = `${BASE_URL}/collection/v1_0/requesttopay/${referenceId}`;
  return axios.get(url, {
    headers: {
      'X-Target-Environment': 'sandbox',
      'Ocp-Apim-Subscription-Key': API_KEY,
    },
  });
}
