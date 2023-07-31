import { DopplerSDK } from '@dopplerhq/node-sdk';

const DOPPLERSDK_BEARER_TOKEN = '';
const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const result = await sdk.projects.list();
  console.log(result);
})();
