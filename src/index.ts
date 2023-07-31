import ProjectsService from './services/Projects';
import SecretsService from './services/Secrets';
import ConfigLogsService from './services/ConfigLogs';
import EnvironmentsService from './services/Environments';
import ConfigsService from './services/Configs';
import ActivityLogsService from './services/ActivityLogs';
import V3Service from './services/V3';
import ServiceTokensService from './services/ServiceTokens';
import DynamicSecretsService from './services/DynamicSecrets';
import IntegrationsService from './services/Integrations';
import SyncsService from './services/Syncs';

export * from './models';

export class DopplerSDK {
  public projects: ProjectsService;

  public secrets: SecretsService;

  public configLogs: ConfigLogsService;

  public environments: EnvironmentsService;

  public configs: ConfigsService;

  public activityLogs: ActivityLogsService;

  public v3: V3Service;

  public serviceTokens: ServiceTokensService;

  public dynamicSecrets: DynamicSecretsService;

  public integrations: IntegrationsService;

  public syncs: SyncsService;

  constructor(bearerToken: string = '') {
    this.projects = new ProjectsService(bearerToken);
    this.secrets = new SecretsService(bearerToken);
    this.configLogs = new ConfigLogsService(bearerToken);
    this.environments = new EnvironmentsService(bearerToken);
    this.configs = new ConfigsService(bearerToken);
    this.activityLogs = new ActivityLogsService(bearerToken);
    this.v3 = new V3Service(bearerToken);
    this.serviceTokens = new ServiceTokensService(bearerToken);
    this.dynamicSecrets = new DynamicSecretsService(bearerToken);
    this.integrations = new IntegrationsService(bearerToken);
    this.syncs = new SyncsService(bearerToken);
  }

  setBearerToken(bearerToken: string) {
    this.projects.setToken(bearerToken);
    this.secrets.setToken(bearerToken);
    this.configLogs.setToken(bearerToken);
    this.environments.setToken(bearerToken);
    this.configs.setToken(bearerToken);
    this.activityLogs.setToken(bearerToken);
    this.v3.setToken(bearerToken);
    this.serviceTokens.setToken(bearerToken);
    this.dynamicSecrets.setToken(bearerToken);
    this.integrations.setToken(bearerToken);
    this.syncs.setToken(bearerToken);
  }
}

export default DopplerSDK;
