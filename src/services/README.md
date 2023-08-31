# DopplerSDK Services
A list of all services and services methods.
- Services

    - [Projects](#projects)

    - [Environments](#environments)

    - [Configs](#configs)

    - [Secrets](#secrets)

    - [ConfigLogs](#configlogs)

    - [V3](#v3)

    - [ActivityLogs](#activitylogs)

    - [ServiceTokens](#servicetokens)

    - [DynamicSecrets](#dynamicsecrets)

    - [Integrations](#integrations)

    - [Syncs](#syncs)

    - [TrustedIps](#trustedips)

    - [WorkplaceRoles](#workplaceroles)

    - [ProjectRoles](#projectroles)

    - [ProjectMembers](#projectmembers)

    - [Invites](#invites)

    - [ServiceAccounts](#serviceaccounts)

    - [Groups](#groups)
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


## V3

| Method    | Description|
| :-------- | :----------|
| [me](#me) | Me |


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


## DynamicSecrets

| Method    | Description|
| :-------- | :----------|
| [issueLease](#issuelease) | Issue Lease |
| [revokeLease](#revokelease) | Revoke Lease |


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


## TrustedIps

| Method    | Description|
| :-------- | :----------|
| [add](#add) | Add |
| [list](#list) | List |
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




## All Methods


### **update**
Update
- HTTP Method: POST
- Endpoint: /v3/projects/project

**Required Parameters**

| input | object | Request body. |



**Return Type**

[UpdateResponse](/src/models/README.md#updateresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = { default_project_role: 'default_project_role', name: 'name' };
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

[GetResponse](/src/models/README.md#getresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = { ip: 'ip' };
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

[CreateResponse](/src/models/README.md#createresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = { default_project_role: 'default_project_role', name: 'name' };
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

[ListResponse](/src/models/README.md#listresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[CreateResponse](/src/models/README.md#createresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = { default_project_role: 'default_project_role', name: 'name' };
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

[ListResponse](/src/models/README.md#listresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[GetResponse](/src/models/README.md#getresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[RenameResponse](/src/models/README.md#renameresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[CreateResponse](/src/models/README.md#createresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = { default_project_role: 'default_project_role', name: 'name' };
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

[ListResponse](/src/models/README.md#listresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[UpdateResponse](/src/models/README.md#updateresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = { default_project_role: 'default_project_role', name: 'name' };
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

[GetResponse](/src/models/README.md#getresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[DeleteResponse](/src/models/README.md#deleteresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = { ip: 'ip' };
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

[CloneResponse](/src/models/README.md#cloneresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[LockResponse](/src/models/README.md#lockresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[UnlockResponse](/src/models/README.md#unlockresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = { config: 'CONFIG_NAME', project: 'PROJECT_NAME' };
  const result = await sdk.configs.unlock(input);
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

[UpdateResponse](/src/models/README.md#updateresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = { default_project_role: 'default_project_role', name: 'name' };
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

[ListResponse](/src/models/README.md#listresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const result = await sdk.secrets.list('PROJECT_NAME', 'CONFIG_NAME', {
    accepts: 'application/json',
    includeDynamicSecrets: true,
    dynamicSecretsTtlSec: 65880966,
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

[GetResponse](/src/models/README.md#getresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[DownloadResponse](/src/models/README.md#downloadresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const result = await sdk.secrets.download('project', 'config', {
    format: 'json',
    nameTransformer: 'upper-camel',
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

[NamesResponse](/src/models/README.md#namesresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[UpdateNoteResponse](/src/models/README.md#updatenoteresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[ListResponse](/src/models/README.md#listresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[GetResponse](/src/models/README.md#getresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[RollbackResponse](/src/models/README.md#rollbackresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const result = await sdk.configLogs.rollback('PROJECT_NAME', 'CONFIG_NAME', 'LOG_ID');
  console.log(result);
})();

```


### **me**
Me
- HTTP Method: GET
- Endpoint: /v3/me


**Return Type**

[MeResponse](/src/models/README.md#meresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const result = await sdk.v3.me();
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

[ListResponse](/src/models/README.md#listresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[RetrieveResponse](/src/models/README.md#retrieveresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[CreateResponse](/src/models/README.md#createresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = { default_project_role: 'default_project_role', name: 'name' };
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

[ListResponse](/src/models/README.md#listresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[DeleteResponse](/src/models/README.md#deleteresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = { ip: 'ip' };
  const result = await sdk.serviceTokens.delete(input);
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

[IssueLeaseResponse](/src/models/README.md#issueleaseresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = {
    config: 'config',
    dynamic_secret: 'dynamic_secret',
    project: 'project',
    ttl_sec: 5969302,
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

[RevokeLeaseResponse](/src/models/README.md#revokeleaseresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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


### **create**
Create
- HTTP Method: POST
- Endpoint: /v3/integrations

**Required Parameters**

| input | object | Request body. |



**Return Type**

[CreateResponse](/src/models/README.md#createresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = { default_project_role: 'default_project_role', name: 'name' };
  const result = await sdk.integrations.create(input);
  console.log(result);
})();

```

### **list**
List
- HTTP Method: GET
- Endpoint: /v3/integrations


**Return Type**

[ListResponse](/src/models/README.md#listresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[GetResponse](/src/models/README.md#getresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[DeleteResponse](/src/models/README.md#deleteresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[UpdateResponse](/src/models/README.md#updateresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = { default_project_role: 'default_project_role', name: 'name' };
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

[CreateResponse](/src/models/README.md#createresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = { default_project_role: 'default_project_role', name: 'name' };
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

[GetResponse](/src/models/README.md#getresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[DeleteResponse](/src/models/README.md#deleteresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const result = await sdk.syncs.delete('project', 'config', 'sync', true);
  console.log(result);
})();

```


### **add**
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

[AddResponse](/src/models/README.md#addresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = {
    environments: ['dolore incididunt in enim', 'non laboris'],
    role: 'role',
    slug: 'slug',
    type_: 'workplace_user',
  };
  const result = await sdk.trustedIps.add(input, 'project', 'config');
  console.log(result);
})();

```

### **list**
List
- HTTP Method: GET
- Endpoint: /v3/configs/config/trusted_ips

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| project | string |  |
| config | string |  |



**Return Type**

[ListResponse](/src/models/README.md#listresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const result = await sdk.trustedIps.list('project', 'config');
  console.log(result);
})();

```

### **delete**
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

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = { ip: 'ip' };
  const result = await sdk.trustedIps.delete(input, 'project', 'config');
  console.log(result);
})();

```


### **create**
Create
- HTTP Method: POST
- Endpoint: /v3/workplace/roles


**Return Type**

[CreateResponse](/src/models/README.md#createresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[ListResponse](/src/models/README.md#listresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[ListPermissionsResponse](/src/models/README.md#listpermissionsresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[GetResponse](/src/models/README.md#getresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[UpdateResponse](/src/models/README.md#updateresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[CreateResponse](/src/models/README.md#createresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[ListResponse](/src/models/README.md#listresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[GetResponse](/src/models/README.md#getresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[UpdateResponse](/src/models/README.md#updateresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[ListPermissionsResponse](/src/models/README.md#listpermissionsresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[AddResponse](/src/models/README.md#addresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = {
    environments: ['pariatur aliquip voluptate', 'in adipisicing'],
    role: 'role',
    slug: 'slug',
    type_: 'service_account',
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

[ListResponse](/src/models/README.md#listresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[GetResponse](/src/models/README.md#getresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const result = await sdk.projectMembers.get('project', 'workplace_user', 'slug');
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

[UpdateResponse](/src/models/README.md#updateresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = { default_project_role: 'default_project_role', name: 'name' };
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

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const result = await sdk.projectMembers.delete('workplace_user', 'slug', 'project');
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

[ListResponse](/src/models/README.md#listresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[CreateResponse](/src/models/README.md#createresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = { default_project_role: 'default_project_role', name: 'name' };
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

[ListResponse](/src/models/README.md#listresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[GetResponse](/src/models/README.md#getresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[UpdateResponse](/src/models/README.md#updateresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const input = { default_project_role: 'default_project_role', name: 'name' };
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

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[CreateResponse](/src/models/README.md#createresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[ListResponse](/src/models/README.md#listresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[GetResponse](/src/models/README.md#getresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

[UpdateResponse](/src/models/README.md#updateresponse)

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

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
| type | [Type](/src/models/README.md#type) |  |
| memberSlug | string | The member's slug |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_ACCESS_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_ACCESS_TOKEN);

(async () => {
  const result = await sdk.groups.deleteMember('slug', 'workplace_user', 'member_slug');
  console.log(result);
})();

```




