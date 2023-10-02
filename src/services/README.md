# DopplerSDK Services
A list of all services and services methods.
- Services

    - [Projects](#projects)

    - [Environments](#environments)

    - [Configs](#configs)

    - [Secrets](#secrets)

    - [ConfigLogs](#configlogs)

    - [Workplace](#workplace)

    - [ActivityLogs](#activitylogs)

    - [ServiceTokens](#servicetokens)

    - [Audit](#audit)

    - [DynamicSecrets](#dynamicsecrets)

    - [Auth](#auth)

    - [Integrations](#integrations)

    - [Syncs](#syncs)

    - [WorkplaceRoles](#workplaceroles)

    - [ProjectRoles](#projectroles)

    - [ProjectMembers](#projectmembers)

    - [Invites](#invites)

    - [ServiceAccounts](#serviceaccounts)

    - [Groups](#groups)

    - [Users](#users)
- [All Methods](#all-methods)


## Projects

| Method    | Description|
| :-------- | :----------|
| [update](#update) | Update |
| [get](#get) | Retrieve |
| [delete](#delete) | Delete |
| [create](#create) | Create |
| [list](#list) | List |


## Environments

| Method    | Description|
| :-------- | :----------|
| [create](#create) | Create |
| [list](#list) | List |
| [get](#get) | Retrieve |
| [delete](#delete) | Delete |
| [rename](#rename) | Rename |


## Configs

| Method    | Description|
| :-------- | :----------|
| [create](#create) | Create |
| [list](#list) | List |
| [update](#update) | Update |
| [get](#get) | Retrieve |
| [delete](#delete) | Delete |
| [clone](#clone) | Clone |
| [lock](#lock) | Lock |
| [unlock](#unlock) | Unlock |
| [addTrustedIp](#addtrustedip) | Add |
| [listTrustedIps](#listtrustedips) | List |
| [deleteTrustedIp](#deletetrustedip) | Delete |


## Secrets

| Method    | Description|
| :-------- | :----------|
| [update](#update) | Update |
| [list](#list) | List |
| [get](#get) | Retrieve |
| [delete](#delete) | Delete |
| [download](#download) | Download |
| [names](#names) | List Names |
| [updateNote](#updatenote) | Update Note |


## ConfigLogs

| Method    | Description|
| :-------- | :----------|
| [list](#list) | List |
| [get](#get) | Retrieve |
| [rollback](#rollback) | Rollback |


## Workplace

| Method    | Description|
| :-------- | :----------|
| [update](#update) | Update |
| [get](#get) | Retrieve |


## ActivityLogs

| Method    | Description|
| :-------- | :----------|
| [list](#list) | List |
| [retrieve](#retrieve) | Retrieve |


## ServiceTokens

| Method    | Description|
| :-------- | :----------|
| [create](#create) | Create |
| [list](#list) | List |
| [delete](#delete) | Delete |


## Audit

| Method    | Description|
| :-------- | :----------|
| [getUser](#getuser) | Workplace User |


## DynamicSecrets

| Method    | Description|
| :-------- | :----------|
| [issueLease](#issuelease) | Issue Lease |
| [revokeLease](#revokelease) | Revoke Lease |


## Auth

| Method    | Description|
| :-------- | :----------|
| [revoke](#revoke) | Revoke |
| [me](#me) | Me |


## Integrations

| Method    | Description|
| :-------- | :----------|
| [create](#create) | Create |
| [list](#list) | List |
| [get](#get) | Retrieve |
| [delete](#delete) | Delete |
| [update](#update) | Update |


## Syncs

| Method    | Description|
| :-------- | :----------|
| [create](#create) | Create |
| [get](#get) | Retrieve |
| [delete](#delete) | Delete |


## WorkplaceRoles

| Method    | Description|
| :-------- | :----------|
| [create](#create) | Create |
| [list](#list) | List |
| [listPermissions](#listpermissions) | List Permissions |
| [get](#get) | Retrieve |
| [update](#update) | Update |
| [delete](#delete) | Delete |


## ProjectRoles

| Method    | Description|
| :-------- | :----------|
| [create](#create) | Create |
| [list](#list) | List |
| [get](#get) | Retrieve |
| [update](#update) | Update |
| [delete](#delete) | Delete |
| [listPermissions](#listpermissions) | List Permissions |


## ProjectMembers

| Method    | Description|
| :-------- | :----------|
| [add](#add) | Add |
| [list](#list) | List |
| [get](#get) | Retrieve |
| [update](#update) | Update |
| [delete](#delete) | Delete |


## Invites

| Method    | Description|
| :-------- | :----------|
| [list](#list) | List |


## ServiceAccounts

| Method    | Description|
| :-------- | :----------|
| [create](#create) | Create |
| [list](#list) | List |
| [get](#get) | Retrieve |
| [update](#update) | Update |
| [delete](#delete) | Delete |


## Groups

| Method    | Description|
| :-------- | :----------|
| [create](#create) | Create |
| [list](#list) | List |
| [get](#get) | Retrieve |
| [update](#update) | Update |
| [delete](#delete) | Delete |
| [addMember](#addmember) | Add Member |
| [deleteMember](#deletemember) | Delete Member |


## Users

| Method    | Description|
| :-------- | :----------|
| [list](#list) | List |
| [get](#get) | Retrieve |




## All Methods


### **update**
Update
- HTTP Method: POST
- Endpoint: /v3/projects/project

**Required Parameters**

| input | object | Request body. |



**Return Type**

UpdateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = {
    description: 'PROJECT_DESCRIPTION',
    name: 'PROJECT_NEW_NAME',
    project: 'PROJECT_NAME',
  };
  const result = await sdk.projects.update(input);
  console.log(result);
})();

```

### **get**
Retrieve
- HTTP Method: GET
- Endpoint: /v3/projects/project

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | Unique identifier for the project object. |



**Return Type**

GetResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.projects.get('PROJECT_NAME');
  console.log(result);
})();

```

### **delete**
Delete
- HTTP Method: DELETE
- Endpoint: /v3/projects/project

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { project: 'PROJECT_NAME' };
  const result = await sdk.projects.delete(input);
  console.log(result);
})();

```

### **create**
Create
- HTTP Method: POST
- Endpoint: /v3/projects

**Required Parameters**

| input | object | Request body. |



**Return Type**

CreateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { description: 'PROJECT_DESCRIPTION', name: 'PROJECT_NAME' };
  const result = await sdk.projects.create(input);
  console.log(result);
})();

```

### **list**
List
- HTTP Method: GET
- Endpoint: /v3/projects


**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| page | number | Page number |
| perPage | number | Items per page |


**Return Type**

ListResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.projects.list({ page: 1, perPage: 20 });
  console.log(result);
})();

```


### **create**
Create
- HTTP Method: POST
- Endpoint: /v3/environments

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | The project's name |
| input | object | Request body. |



**Return Type**

EnvironmentsCreateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { name: 'name', slug: 'slug' };
  const result = await sdk.environments.create(input, 'project');
  console.log(result);
})();

```

### **list**
List
- HTTP Method: GET
- Endpoint: /v3/environments

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | The project's name |



**Return Type**

EnvironmentsListResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.environments.list('project');
  console.log(result);
})();

```

### **get**
Retrieve
- HTTP Method: GET
- Endpoint: /v3/environments/environment

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | The project's name |
| environment | string | The environment's slug |



**Return Type**

EnvironmentsGetResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.environments.get('project', 'environment');
  console.log(result);
})();

```

### **delete**
Delete
- HTTP Method: DELETE
- Endpoint: /v3/environments/environment

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | The project's name |
| environment | string | The environment's slug |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.environments.delete('project', 'environment');
  console.log(result);
})();

```

### **rename**
Rename
- HTTP Method: PUT
- Endpoint: /v3/environments/environment

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | The project's name |
| environment | string | The environment's slug |
| input | object | Request body. |



**Return Type**

RenameResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { name: 'name', slug: 'slug' };
  const result = await sdk.environments.rename(input, 'project', 'environment');
  console.log(result);
})();

```


### **create**
Create
- HTTP Method: POST
- Endpoint: /v3/configs

**Required Parameters**

| input | object | Request body. |



**Return Type**

ConfigsCreateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { environment: 'ENVIRONMENT_ID', name: 'CONFIG_NAME', project: 'PROJECT_NAME' };
  const result = await sdk.configs.create(input);
  console.log(result);
})();

```

### **list**
List
- HTTP Method: GET
- Endpoint: /v3/configs

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | The project's name |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| environment | string | (optional) the environment from which to list configs |
| page | number | Page number |
| perPage | number | Items per page |


**Return Type**

ConfigsListResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.configs.list('project', {
    environment: 'Environment slug',
    page: 1,
    perPage: 20,
  });
  console.log(result);
})();

```

### **update**
Update
- HTTP Method: POST
- Endpoint: /v3/configs/config

**Required Parameters**

| input | object | Request body. |



**Return Type**

ConfigsUpdateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { config: 'CONFIG_NAME', name: 'CONFIG_NEW_NAME', project: 'PROJECT_NAME' };
  const result = await sdk.configs.update(input);
  console.log(result);
})();

```

### **get**
Retrieve
- HTTP Method: GET
- Endpoint: /v3/configs/config

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | Unique identifier for the project object. |
| config | string | Name of the config object. |



**Return Type**

ConfigsGetResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.configs.get('PROJECT_NAME', 'CONFIG_NAME');
  console.log(result);
})();

```

### **delete**
Delete
- HTTP Method: DELETE
- Endpoint: /v3/configs/config

**Required Parameters**

| input | object | Request body. |



**Return Type**

DeleteResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { config: 'CONFIG_NAME', project: 'PROJECT_NAME' };
  const result = await sdk.configs.delete(input);
  console.log(result);
})();

```

### **clone**
Clone
- HTTP Method: POST
- Endpoint: /v3/configs/config/clone

**Required Parameters**

| input | object | Request body. |



**Return Type**

CloneResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { config: 'CONFIG_NAME', name: 'NEW_CONFIG_NAME', project: 'PROJECT_NAME' };
  const result = await sdk.configs.clone(input);
  console.log(result);
})();

```

### **lock**
Lock
- HTTP Method: POST
- Endpoint: /v3/configs/config/lock

**Required Parameters**

| input | object | Request body. |



**Return Type**

LockResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { config: 'CONFIG_NAME', project: 'PROJECT_NAME' };
  const result = await sdk.configs.lock(input);
  console.log(result);
})();

```

### **unlock**
Unlock
- HTTP Method: POST
- Endpoint: /v3/configs/config/unlock

**Required Parameters**

| input | object | Request body. |



**Return Type**

UnlockResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { config: 'CONFIG_NAME', project: 'PROJECT_NAME' };
  const result = await sdk.configs.unlock(input);
  console.log(result);
})();

```

### **addTrustedIp**
Add
- HTTP Method: POST
- Endpoint: /v3/configs/config/trusted_ips

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string |  |
| config | string |  |
| input | object | Request body. |



**Return Type**

AddTrustedIpResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { ip: 'ip' };
  const result = await sdk.configs.addTrustedIp(input, 'project', 'config');
  console.log(result);
})();

```

### **listTrustedIps**
List
- HTTP Method: GET
- Endpoint: /v3/configs/config/trusted_ips

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string |  |
| config | string |  |



**Return Type**

ListTrustedIpsResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.configs.listTrustedIps('project', 'config');
  console.log(result);
})();

```

### **deleteTrustedIp**
Delete
- HTTP Method: DELETE
- Endpoint: /v3/configs/config/trusted_ips

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string |  |
| config | string |  |
| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { ip: 'ip' };
  const result = await sdk.configs.deleteTrustedIp(input, 'project', 'config');
  console.log(result);
})();

```


### **update**
Update
- HTTP Method: POST
- Endpoint: /v3/configs/config/secrets

**Required Parameters**

| input | object | Request body. |



**Return Type**

SecretsUpdateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = {
    config: 'CONFIG_NAME',
    project: 'PROJECT_NAME',
    secrets: {
      ALGOLIA: 'N9TOPUCTO',
      DATABASE: '${USER}@aws.dynamodb.com:9876',
      STRIPE: 'sk_test_9YxLnoLDdvOPn2dfjBVPB',
    },
  };
  const result = await sdk.secrets.update(input);
  console.log(result);
})();

```

### **list**
List
- HTTP Method: GET
- Endpoint: /v3/configs/config/secrets

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | Unique identifier for the project object. |
| config | string | Name of the config object. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| accepts | string | Available options are: **application/json**, **text/plain** |
| includeDynamicSecrets | boolean | Whether or not to issue leases and include dynamic secret values for the config |
| dynamicSecretsTtlSec | number | The number of seconds until dynamic leases expire. Must be used with `include_dynamic_secrets`. Defaults to 1800 (30 minutes). |
| secrets | string | A comma-separated list of secrets to include in the response |
| includeManagedSecrets | boolean | Whether to include Doppler's auto-generated (managed) secrets |


**Return Type**

SecretsListResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.secrets.list('PROJECT_NAME', 'CONFIG_NAME', {
    accepts: 'application/json',
    includeDynamicSecrets: true,
    dynamicSecretsTtlSec: 31848192,
    secrets: 'secrets',
    includeManagedSecrets: true,
  });
  console.log(result);
})();

```

### **get**
Retrieve
- HTTP Method: GET
- Endpoint: /v3/configs/config/secret

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | Unique identifier for the project object. |
| config | string | Name of the config object. |
| name | string | Name of the secret. |



**Return Type**

SecretsGetResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.secrets.get('PROJECT_NAME', 'CONFIG_NAME', 'SECRET_NAME');
  console.log(result);
})();

```

### **delete**
Delete
- HTTP Method: DELETE
- Endpoint: /v3/configs/config/secret

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | Unique identifier for the project object. |
| config | string | Name of the config object. |
| name | string | Name of the secret. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.secrets.delete('PROJECT_NAME', 'CONFIG_NAME', 'SECRET_NAME');
  console.log(result);
})();

```

### **download**
Download
- HTTP Method: GET
- Endpoint: /v3/configs/config/secrets/download

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | Unique identifier for the project object. Not required if using a Service Token. |
| config | string | Name of the config object. Not required if using a Service Token. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| format | [Format](/src/models/README.md#format) |  |
| nameTransformer | [NameTransformer](/src/models/README.md#nametransformer) | Transform secret names to a different case |
| includeDynamicSecrets | boolean | Whether or not to issue leases and include dynamic secret values for the config |
| dynamicSecretsTtlSec | number | The number of seconds until dynamic leases expire. Must be used with `include_dynamic_secrets`. Defaults to 1800 (30 minutes). |


**Return Type**

DownloadResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.secrets.download('project', 'config', {
    format: 'json',
    nameTransformer: 'lower-kebab',
    includeDynamicSecrets: true,
    dynamicSecretsTtlSec: 1800,
  });
  console.log(result);
})();

```

### **names**
List Names
- HTTP Method: GET
- Endpoint: /v3/configs/config/secrets/names

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | Unique identifier for the project object. |
| config | string | Name of the config object. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| includeDynamicSecrets | boolean | Whether or not to issue leases and include dynamic secret values for the config |
| includeManagedSecrets | boolean | Whether to include Doppler's auto-generated (managed) secrets |


**Return Type**

NamesResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.secrets.names('PROJECT_NAME', 'CONFIG_NAME', {
    includeDynamicSecrets: true,
    includeManagedSecrets: true,
  });
  console.log(result);
})();

```

### **updateNote**
Update Note
- HTTP Method: POST
- Endpoint: /v3/configs/config/secrets/note

**Required Parameters**

| input | object | Request body. |



**Return Type**

UpdateNoteResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { config: 'CONFIG_NAME', note: 'note', project: 'PROJECT_NAME', secret: 'secret' };
  const result = await sdk.secrets.updateNote(input);
  console.log(result);
})();

```


### **list**
List
- HTTP Method: GET
- Endpoint: /v3/configs/config/logs

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | Unique identifier for the project object. |
| config | string | Name of the config object. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| page | number | Page number |
| perPage | number | Items per page |


**Return Type**

ConfigLogsListResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.configLogs.list('PROJECT_NAME', 'CONFIG_NAME', { page: 1, perPage: 20 });
  console.log(result);
})();

```

### **get**
Retrieve
- HTTP Method: GET
- Endpoint: /v3/configs/config/logs/log

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | Unique identifier for the project object. |
| config | string | Name of the config object. |
| log | string | Unique identifier for the log object. |



**Return Type**

ConfigLogsGetResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.configLogs.get('PROJECT_NAME', 'CONFIG_NAME', 'LOG_ID');
  console.log(result);
})();

```

### **rollback**
Rollback
- HTTP Method: POST
- Endpoint: /v3/configs/config/logs/log/rollback

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | Unique identifier for the project object. |
| config | string | Name of the config object. |
| log | string | Unique identifier for the log object. |



**Return Type**

RollbackResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.configLogs.rollback('PROJECT_NAME', 'CONFIG_NAME', 'LOG_ID');
  console.log(result);
})();

```


### **update**
Update
- HTTP Method: POST
- Endpoint: /v3/workplace

**Required Parameters**

| input | object | Request body. |



**Return Type**

WorkplaceUpdateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { billing_email: 'billing_email', name: 'name', security_email: 'security_email' };
  const result = await sdk.workplace.update(input);
  console.log(result);
})();

```

### **get**
Retrieve
- HTTP Method: GET
- Endpoint: /v3/workplace


**Return Type**

WorkplaceGetResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.workplace.get();
  console.log(result);
})();

```


### **list**
List
- HTTP Method: GET
- Endpoint: /v3/logs


**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| page | string | Page number |
| perPage | number | Items per page |


**Return Type**

ActivityLogsListResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.activityLogs.list({ page: '1', perPage: 20 });
  console.log(result);
})();

```

### **retrieve**
Retrieve
- HTTP Method: GET
- Endpoint: /v3/logs/log

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| log | string | Unique identifier for the log object. |



**Return Type**

RetrieveResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.activityLogs.retrieve('LOG_ID');
  console.log(result);
})();

```


### **create**
Create
- HTTP Method: POST
- Endpoint: /v3/configs/config/tokens

**Required Parameters**

| input | object | Request body. |



**Return Type**

ServiceTokensCreateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = {
    access: 'read',
    config: 'CONFIG_NAME',
    expire_at: '1963-07-04T18:10:26.0Z',
    name: 'TOKEN_NAME',
    project: 'PROJECT_NAME',
  };
  const result = await sdk.serviceTokens.create(input);
  console.log(result);
})();

```

### **list**
List
- HTTP Method: GET
- Endpoint: /v3/configs/config/tokens

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | Unique identifier for the project object. |
| config | string | Name of the config object. |



**Return Type**

ServiceTokensListResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.serviceTokens.list('PROJECT_NAME', 'CONFIG_NAME');
  console.log(result);
})();

```

### **delete**
Delete
- HTTP Method: DELETE
- Endpoint: /v3/configs/config/tokens/token

**Required Parameters**

| input | object | Request body. |



**Return Type**

DeleteResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = {
    config: 'CONFIG_NAME',
    project: 'PROJECT_NAME',
    slug: 'TOKEN_SLUG',
    token: 'TOKEN_VALUE',
  };
  const result = await sdk.serviceTokens.delete(input);
  console.log(result);
})();

```


### **getUser**
Workplace User
- HTTP Method: GET
- Endpoint: /v3/workplace/users/{workplace_user_id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| workplaceUserId | string | The ID of the workplace user |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| settings | boolean | If true, the api will return more information if the user has e.g. SAML enabled and/or Multi Factor Auth enabled |


**Return Type**

GetUserResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.audit.getUser('workplace_user_id', { settings: true });
  console.log(result);
})();

```


### **issueLease**
Issue Lease
- HTTP Method: POST
- Endpoint: /v3/configs/config/dynamic_secrets/dynamic_secret/leases

**Required Parameters**

| input | object | Request body. |



**Return Type**

IssueLeaseResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = {
    config: 'config',
    dynamic_secret: 'dynamic_secret',
    project: 'project',
    ttl_sec: 6446361,
  };
  const result = await sdk.dynamicSecrets.issueLease(input);
  console.log(result);
})();

```

### **revokeLease**
Revoke Lease
- HTTP Method: DELETE
- Endpoint: /v3/configs/config/dynamic_secrets/dynamic_secret/leases/lease

**Required Parameters**

| input | object | Request body. |



**Return Type**

RevokeLeaseResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = {
    config: 'config',
    dynamic_secret: 'dynamic_secret',
    project: 'project',
    slug: 'slug',
  };
  const result = await sdk.dynamicSecrets.revokeLease(input);
  console.log(result);
})();

```


### **revoke**
Revoke
- HTTP Method: POST
- Endpoint: /v3/auth/revoke

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { token: 'token' };
  const result = await sdk.auth.revoke(input);
  console.log(result);
})();

```

### **me**
Me
- HTTP Method: GET
- Endpoint: /v3/me


**Return Type**

MeResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.auth.me();
  console.log(result);
})();

```


### **create**
Create
- HTTP Method: POST
- Endpoint: /v3/integrations

**Required Parameters**

| input | object | Request body. |



**Return Type**

IntegrationsCreateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { data: {}, name: 'name', type_: 'type' };
  const result = await sdk.integrations.create(input);
  console.log(result);
})();

```

### **list**
List
- HTTP Method: GET
- Endpoint: /v3/integrations


**Return Type**

IntegrationsListResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.integrations.list();
  console.log(result);
})();

```

### **get**
Retrieve
- HTTP Method: GET
- Endpoint: /v3/integrations/integration

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| integration | string | The integration slug |



**Return Type**

IntegrationsGetResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.integrations.get('integration');
  console.log(result);
})();

```

### **delete**
Delete
- HTTP Method: DELETE
- Endpoint: /v3/integrations/integration

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| integration | string | The slug of the integration to delete |



**Return Type**

IntegrationsDeleteResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.integrations.delete('integration');
  console.log(result);
})();

```

### **update**
Update
- HTTP Method: PUT
- Endpoint: /v3/integrations/integration

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| integration | string | The slug of the integration to update |
| input | object | Request body. |



**Return Type**

IntegrationsUpdateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { data: 'data', name: 'name' };
  const result = await sdk.integrations.update(input, 'integration');
  console.log(result);
})();

```


### **create**
Create
- HTTP Method: POST
- Endpoint: /v3/configs/config/syncs

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | The project slug |
| config | string | The config slug |
| input | object | Request body. |



**Return Type**

SyncsCreateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { data: {}, import_option: 'none', integration: 'integration' };
  const result = await sdk.syncs.create(input, 'project', 'config');
  console.log(result);
})();

```

### **get**
Retrieve
- HTTP Method: GET
- Endpoint: /v3/configs/config/syncs/sync

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | The project slug |
| config | string | The config slug |
| sync | string | The sync slug |



**Return Type**

SyncsGetResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.syncs.get('project', 'config', 'sync');
  console.log(result);
})();

```

### **delete**
Delete
- HTTP Method: DELETE
- Endpoint: /v3/configs/config/syncs/sync

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | The project slug |
| config | string | The config slug |
| sync | string | The sync slug |
| deleteFromTarget | boolean | Whether or not to delete the synced data from the target integration |



**Return Type**

SyncsDeleteResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.syncs.delete('project', 'config', 'sync', true);
  console.log(result);
})();

```


### **create**
Create
- HTTP Method: POST
- Endpoint: /v3/workplace/roles


**Return Type**

WorkplaceRolesCreateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.workplaceRoles.create();
  console.log(result);
})();

```

### **list**
List
- HTTP Method: GET
- Endpoint: /v3/workplace/roles


**Return Type**

WorkplaceRolesListResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.workplaceRoles.list();
  console.log(result);
})();

```

### **listPermissions**
List Permissions
- HTTP Method: GET
- Endpoint: /v3/workplace/permissions


**Return Type**

ListPermissionsResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.workplaceRoles.listPermissions();
  console.log(result);
})();

```

### **get**
Retrieve
- HTTP Method: GET
- Endpoint: /v3/workplace/roles/role/{role}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| role | string | The role's unique identifier |



**Return Type**

WorkplaceRolesGetResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.workplaceRoles.get('role');
  console.log(result);
})();

```

### **update**
Update
- HTTP Method: PATCH
- Endpoint: /v3/workplace/roles/role/{role}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| role | string | The role's unique identifier |



**Return Type**

WorkplaceRolesUpdateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.workplaceRoles.update('role');
  console.log(result);
})();

```

### **delete**
Delete
- HTTP Method: DELETE
- Endpoint: /v3/workplace/roles/role/{role}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| role | string | The role's unique identifier |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.workplaceRoles.delete('role');
  console.log(result);
})();

```


### **create**
Create
- HTTP Method: POST
- Endpoint: /v3/projects/roles


**Return Type**

ProjectRolesCreateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.projectRoles.create();
  console.log(result);
})();

```

### **list**
List
- HTTP Method: GET
- Endpoint: /v3/projects/roles


**Return Type**

ProjectRolesListResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.projectRoles.list();
  console.log(result);
})();

```

### **get**
Retrieve
- HTTP Method: GET
- Endpoint: /v3/projects/roles/role/{role}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| role | string | The role's unique identifier |



**Return Type**

ProjectRolesGetResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.projectRoles.get('role');
  console.log(result);
})();

```

### **update**
Update
- HTTP Method: PATCH
- Endpoint: /v3/projects/roles/role/{role}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| role | string | The role's unique identifier |



**Return Type**

ProjectRolesUpdateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.projectRoles.update('role');
  console.log(result);
})();

```

### **delete**
Delete
- HTTP Method: DELETE
- Endpoint: /v3/projects/roles/role/{role}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| role | string | The role's unique identifier |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.projectRoles.delete('role');
  console.log(result);
})();

```

### **listPermissions**
List Permissions
- HTTP Method: GET
- Endpoint: /v3/projects/permissions


**Return Type**

ProjectRolesListPermissionsResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.projectRoles.listPermissions();
  console.log(result);
})();

```


### **add**
Add
- HTTP Method: POST
- Endpoint: /v3/projects/project/members

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | Project slug |
| input | object | Request body. |



**Return Type**

AddResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = {
    environments: ['culpa quis occaecat aliqua Lorem', 'Ut'],
    role: 'role',
    slug: 'slug',
    type_: 'group',
  };
  const result = await sdk.projectMembers.add(input, 'project');
  console.log(result);
})();

```

### **list**
List
- HTTP Method: GET
- Endpoint: /v3/projects/project/members

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | Project slug |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| page | number |  |
| perPage | number |  |


**Return Type**

ProjectMembersListResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.projectMembers.list('project', { page: 1, perPage: 20 });
  console.log(result);
})();

```

### **get**
Retrieve
- HTTP Method: GET
- Endpoint: /v3/projects/project/members/member/{type}/{slug}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string | Project slug |
| type | [Type](/src/models/README.md#type) |  |
| slug | string | Member's slug |



**Return Type**

ProjectMembersGetResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.projectMembers.get('project', 'group', 'slug');
  console.log(result);
})();

```

### **update**
Update
- HTTP Method: PATCH
- Endpoint: /v3/projects/project/members/member/{type}/{slug}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| type | [Type](/src/models/README.md#type) |  |
| slug | string | Member's slug |
| project | string | Project slug |
| input | object | Request body. |



**Return Type**

ProjectMembersUpdateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { environments: ['aliqua ut', 'Duis voluptate in sunt'], role: 'role' };
  const result = await sdk.projectMembers.update(input, 'workplace_user', 'slug', 'project');
  console.log(result);
})();

```

### **delete**
Delete
- HTTP Method: DELETE
- Endpoint: /v3/projects/project/members/member/{type}/{slug}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| type | [Type](/src/models/README.md#type) |  |
| slug | string | Member's slug |
| project | string | Project slug |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.projectMembers.delete('invite', 'slug', 'project');
  console.log(result);
})();

```


### **list**
List
- HTTP Method: GET
- Endpoint: /v3/workplace/invites


**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| page | number |  |
| perPage | number |  |


**Return Type**

InvitesListResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.invites.list({ page: 1, perPage: 20 });
  console.log(result);
})();

```


### **create**
Create
- HTTP Method: POST
- Endpoint: /v3/workplace/service_accounts

**Required Parameters**

| input | object | Request body. |



**Return Type**

ServiceAccountsCreateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = {
    name: 'name',
    workplace_role: {
      identifier: 'identifier',
      permissions: ['labore dolore eu do', 'cillum in nostrud qui sint'],
    },
  };
  const result = await sdk.serviceAccounts.create(input);
  console.log(result);
})();

```

### **list**
List
- HTTP Method: GET
- Endpoint: /v3/workplace/service_accounts


**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| page | number |  |
| perPage | number |  |


**Return Type**

ServiceAccountsListResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.serviceAccounts.list({ page: 1, perPage: 20 });
  console.log(result);
})();

```

### **get**
Retrieve
- HTTP Method: GET
- Endpoint: /v3/workplace/service_accounts/service_account/{slug}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| slug | string | Slug of the service account |



**Return Type**

ServiceAccountsGetResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.serviceAccounts.get('slug');
  console.log(result);
})();

```

### **update**
Update
- HTTP Method: PATCH
- Endpoint: /v3/workplace/service_accounts/service_account/{slug}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| slug | string | Slug of the service account |
| input | object | Request body. |



**Return Type**

ServiceAccountsUpdateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = {
    name: 'name',
    workplace_role: {
      identifier: 'identifier',
      permissions: ['deserunt voluptate', 'voluptate incididunt'],
    },
  };
  const result = await sdk.serviceAccounts.update(input, 'slug');
  console.log(result);
})();

```

### **delete**
Delete
- HTTP Method: DELETE
- Endpoint: /v3/workplace/service_accounts/service_account/{slug}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| slug | string | Slug of the service account |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.serviceAccounts.delete('slug');
  console.log(result);
})();

```


### **create**
Create
- HTTP Method: POST
- Endpoint: /v3/workplace/groups

**Required Parameters**

| input | object | Request body. |



**Return Type**

GroupsCreateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { default_project_role: 'default_project_role', name: 'name' };
  const result = await sdk.groups.create(input);
  console.log(result);
})();

```

### **list**
List
- HTTP Method: GET
- Endpoint: /v3/workplace/groups


**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| page | number |  |
| perPage | number |  |


**Return Type**

GroupsListResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.groups.list({ page: 1, perPage: 20 });
  console.log(result);
})();

```

### **get**
Retrieve
- HTTP Method: GET
- Endpoint: /v3/workplace/groups/group/{slug}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| slug | string | The group's slug |



**Return Type**

GroupsGetResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.groups.get('slug');
  console.log(result);
})();

```

### **update**
Update
- HTTP Method: PATCH
- Endpoint: /v3/workplace/groups/group/{slug}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| slug | string | The group's slug |
| input | object | Request body. |



**Return Type**

GroupsUpdateResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { default_project_role: 'default_project_role', name: 'name' };
  const result = await sdk.groups.update(input, 'slug');
  console.log(result);
})();

```

### **delete**
Delete
- HTTP Method: DELETE
- Endpoint: /v3/workplace/groups/group/{slug}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| slug | string | The group's slug |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.groups.delete('slug');
  console.log(result);
})();

```

### **addMember**
Add Member
- HTTP Method: POST
- Endpoint: /v3/workplace/groups/group/{slug}/members

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| slug | string | The group's slug |
| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const input = { slug: 'slug', type_: 'workplace_user' };
  const result = await sdk.groups.addMember(input, 'slug');
  console.log(result);
})();

```

### **deleteMember**
Delete Member
- HTTP Method: DELETE
- Endpoint: /v3/workplace/groups/group/{slug}/members/{type}/{member_slug}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| slug | string | The group's slug |
| type | [GroupsType](/src/models/README.md#groupstype) |  |
| memberSlug | string | The member's slug |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.groups.deleteMember('slug', 'workplace_user', 'member_slug');
  console.log(result);
})();

```


### **list**
List
- HTTP Method: GET
- Endpoint: /v3/workplace/users


**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| page | number | The page of users to fetch |


**Return Type**

UsersListResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.users.list({ page: 1 });
  console.log(result);
})();

```

### **get**
Retrieve
- HTTP Method: GET
- Endpoint: /v3/workplace/users/{slug}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| slug | string | The slug of the workplace user |



**Return Type**

UsersGetResponse

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK({ accessToken: DOPPLERSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.users.get('slug');
  console.log(result);
})();

```




