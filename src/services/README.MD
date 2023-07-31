# DopplerSDK Services
A list of all services and services methods.
- Services

    - [Projects](#projects)

    - [Secrets](#secrets)

    - [ConfigLogs](#configlogs)

    - [Environments](#environments)

    - [Configs](#configs)

    - [ActivityLogs](#activitylogs)

    - [V3](#v3)

    - [ServiceTokens](#servicetokens)

    - [DynamicSecrets](#dynamicsecrets)

    - [Integrations](#integrations)

    - [Syncs](#syncs)
- [All Methods](#all-methods)


## Projects

| Method    | Description|
| :-------- | :----------| 
| [create](#create) | Create |
| [list](#list) | List |
| [update](#update) | Update |
| [get](#get) | Retrieve |
| [delete](#delete) | Delete |


## Secrets

| Method    | Description|
| :-------- | :----------| 
| [update](#update) | Update |
| [list](#list) | List |
| [get](#get) | Retrieve |
| [download](#download) | Download |
| [listNames](#listnames) | List |
| [updateNote](#updatenote) | Note |


## ConfigLogs

| Method    | Description|
| :-------- | :----------| 
| [list](#list) | List |
| [get](#get) | Retrieve |
| [rollback](#rollback) | Rollback |


## Environments

| Method    | Description|
| :-------- | :----------| 
| [get](#get) | Retrieve |
| [delete](#delete) | Delete |
| [rename](#rename) | Rename |
| [create](#create) | Create |
| [list](#list) | List |


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


## ActivityLogs

| Method    | Description|
| :-------- | :----------| 
| [retrieve](#retrieve) | Retrieve |
| [list](#list) | List |


## V3

| Method    | Description|
| :-------- | :----------| 
| [me](#me) | Me |


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




## All Methods


### **create**
Create
- HTTP Method: POST
- Endpoint: /v3/projects

**Required Parameters**

| input | object | Request body. |



**Return Type**

[ProjectsCreate200Response](../models/README.MD#projectscreate200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

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

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| page | number | Page number |
| perPage | number | Items per page |


**Return Type**

[ProjectsList200Response](../models/README.MD#projectslist200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const result = await sdk.projects.list({ page: 1, perPage: 20 });
  console.log(result);
})();

```

### **update**
Update
- HTTP Method: POST
- Endpoint: /v3/projects/project

**Required Parameters**

| input | object | Request body. |



**Return Type**

[ProjectsUpdate200Response](../models/README.MD#projectsupdate200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

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

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|


**Return Type**

[ProjectsGet200Response](../models/README.MD#projectsget200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

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

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const input = { project: 'PROJECT_NAME' };
  const result = await sdk.projects.delete(input);
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

[SecretsUpdate200Response](../models/README.MD#secretsupdate200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

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

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const result = await sdk.secrets.list('PROJECT_NAME', 'CONFIG_NAME', {
    accepts: 'application/json',
    includeDynamicSecrets: true,
    dynamicSecretsTtlSec: 58532169,
    secrets: 'dolore exercitation nostrud',
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

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|


**Return Type**

[SecretsGet200Response](../models/README.MD#secretsget200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const result = await sdk.secrets.get('PROJECT_NAME', 'CONFIG_NAME', 'SECRET_NAME');
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
| format | string |  |
| nameTransformer | string | Transform secret names to a different case |
| includeDynamicSecrets | boolean | Whether or not to issue leases and include dynamic secret values for the config |
| dynamicSecretsTtlSec | number | The number of seconds until dynamic leases expire. Must be used with `include_dynamic_secrets`. Defaults to 1800 (30 minutes). |


**Return Type**

[SecretsDownload200Response](../models/README.MD#secretsdownload200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const result = await sdk.secrets.download('eiusmod', 'reprehenderit', {
    format: 'json',
    nameTransformer: 'dotnet-env',
    includeDynamicSecrets: true,
    dynamicSecretsTtlSec: 1800,
  });
  console.log(result);
})();

```

### **listNames**
List
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

[SecretsListNames200Response](../models/README.MD#secretslistnames200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const result = await sdk.secrets.listNames('PROJECT_NAME', 'CONFIG_NAME', {
    includeDynamicSecrets: true,
    includeManagedSecrets: true,
  });
  console.log(result);
})();

```

### **updateNote**
Note
- HTTP Method: POST
- Endpoint: /v3/configs/config/secrets/note

**Required Parameters**

| input | object | Request body. |



**Return Type**

[SecretsUpdateNote200Response](../models/README.MD#secretsupdatenote200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const input = {
    config: 'CONFIG_NAME',
    note: 'amet enim',
    project: 'PROJECT_NAME',
    secret: 'proident',
  };
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

[ConfigLogsList200Response](../models/README.MD#configlogslist200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

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

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|


**Return Type**

[ConfigLogsGet200Response](../models/README.MD#configlogsget200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

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

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|


**Return Type**

[ConfigLogsRollback200Response](../models/README.MD#configlogsrollback200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const result = await sdk.configLogs.rollback('PROJECT_NAME', 'CONFIG_NAME', 'LOG_ID');
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

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|


**Return Type**

[EnvironmentsGet200Response](../models/README.MD#environmentsget200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const result = await sdk.environments.get('dolor', 'do deserunt quis Lorem');
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

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const result = await sdk.environments.delete('tempor dolor aliquip in', 'eiusmod ut');
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

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|


**Return Type**

[EnvironmentsRename200Response](../models/README.MD#environmentsrename200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const input = { name: 'nulla minim', slug: 'consectetur sed in' };
  const result = await sdk.environments.rename(input, 'occaecat', 'culpa fugiat nisi');
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

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|


**Return Type**

[EnvironmentsCreate200Response](../models/README.MD#environmentscreate200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const input = { name: 'in consequat in', slug: 'commodo est elit laboris aliqua' };
  const result = await sdk.environments.create(input, 'aute dolore eu');
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

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|


**Return Type**

[EnvironmentsList200Response](../models/README.MD#environmentslist200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const result = await sdk.environments.list('sint');
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

[ConfigsCreate200Response](../models/README.MD#configscreate200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

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

[ConfigsList200Response](../models/README.MD#configslist200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const result = await sdk.configs.list('commodo sunt esse quis', {
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

[ConfigsUpdate200Response](../models/README.MD#configsupdate200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

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

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|


**Return Type**

[ConfigsGet200Response](../models/README.MD#configsget200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

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

[ConfigsDelete200Response](../models/README.MD#configsdelete200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

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

[ConfigsClone200Response](../models/README.MD#configsclone200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

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

[ConfigsLock200Response](../models/README.MD#configslock200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

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

[ConfigsUnlock200Response](../models/README.MD#configsunlock200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const input = { config: 'CONFIG_NAME', project: 'PROJECT_NAME' };
  const result = await sdk.configs.unlock(input);
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

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|


**Return Type**

[ActivityLogsRetrieve200Response](../models/README.MD#activitylogsretrieve200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const result = await sdk.activityLogs.retrieve('LOG_ID');
  console.log(result);
})();

```

### **list**
List
- HTTP Method: GET
- Endpoint: /v3/logs

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| page | string | Page number |
| perPage | number | Items per page |


**Return Type**

[ActivityLogsList200Response](../models/README.MD#activitylogslist200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const result = await sdk.activityLogs.list({ page: '1', perPage: 20 });
  console.log(result);
})();

```


### **me**
Me
- HTTP Method: GET
- Endpoint: /v3/me


**Return Type**

[V3Me200Response](../models/README.MD#v3me200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const result = await sdk.v3.me();
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

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const input = {
    access: 'read',
    config: 'CONFIG_NAME',
    expire_at: '1919-10-16T02:51:47.0Z',
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

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

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

[ServiceTokensDelete200Response](../models/README.MD#servicetokensdelete200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

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


### **issueLease**
Issue Lease
- HTTP Method: POST
- Endpoint: /v3/configs/config/dynamic_secrets/dynamic_secret/leases

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const input = {
    config: 'aliqua ut',
    dynamic_secret: 'velit in',
    project: 'amet enim sint sunt fugiat',
    ttl_sec: 61886594,
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

[DynamicSecretsRevokeLease200Response](../models/README.MD#dynamicsecretsrevokelease200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const input = {
    config: 'nostrud minim ad sint nulla',
    dynamic_secret: 'aliquip',
    project: 'sint veniam',
    slug: 'Ut minim sit',
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

[IntegrationsCreate200Response](../models/README.MD#integrationscreate200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const input = { data: {}, name: 'enim', type_: 'in in' };
  const result = await sdk.integrations.create(input);
  console.log(result);
})();

```

### **list**
List
- HTTP Method: GET
- Endpoint: /v3/integrations


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

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

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|


**Return Type**

[IntegrationsGet200Response](../models/README.MD#integrationsget200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const result = await sdk.integrations.get('eu commodo sint est consequat');
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

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|


**Return Type**

[IntegrationsDelete200Response](../models/README.MD#integrationsdelete200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const result = await sdk.integrations.delete('occaecat exercitation ad minim');
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

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|


**Return Type**

[IntegrationsUpdate200Response](../models/README.MD#integrationsupdate200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const input = { data: 'est Duis cupidatat occaecat labore', name: 'fugiat ex Ut' };
  const result = await sdk.integrations.update(input, 'consectetur culpa');
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

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|


**Return Type**

[SyncsCreate200Response](../models/README.MD#syncscreate200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const input = { data: {}, import_option: 'none', integration: 'in dolore' };
  const result = await sdk.syncs.create(
    input,
    'esse Ut Duis aliquip commodo',
    'ex Duis est reprehenderit dolore',
  );
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

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|


**Return Type**

[SyncsGet200Response](../models/README.MD#syncsget200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const result = await sdk.syncs.get(
    'adipisicing laboris est exercitation',
    'pariatur cupidatat laboris',
    'cillum mollit veniam cupidatat aute',
  );
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

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|


**Return Type**

[SyncsDelete200Response](../models/README.MD#syncsdelete200response) 

**Example Usage Code Snippet**
```Typescript
import { DopplerSDK } from './src';

const DOPPLERSDK_BEARER_TOKEN = '';

const sdk = new DopplerSDK(DOPPLERSDK_BEARER_TOKEN);

(async () => {
  const result = await sdk.syncs.delete('ad', 'ex ea', 'ea ut amet', true);
  console.log(result);
})();

```




