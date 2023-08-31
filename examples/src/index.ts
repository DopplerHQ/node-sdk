import { DopplerSDK } from '@dopplerhq/node-sdk';

const DOPPLERSDK_ACCESS_TOKEN = '';
const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const result = await sdk.projects.list();
  console.log(result);
})();
