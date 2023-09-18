# @dopplerhq/node-sdk

Doppler's SDK for Node provides convenient access to the Doppler API from applications written in JavaScript or TypeScript. 

- API version: 3
- SDK version: 1.1.3

## Installation

```sh
npm install @dopplerhq/node-sdk
```

> Doppler's Node SDK leverages Node's builtin request libraries and will not install any external dependencies

## Usage

```ts
import DopplerSDK from '@dopplerhq/node-sdk'

const doppler = new DopplerSDK({ accessToken: 'dp.xx.yyy' });

const res = await doppler.projects.list();
console.log(res);
```

## Reference Docs

[A list of all services and service methods](./src/services/README.MD)
