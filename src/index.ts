import ProjectsService from './services/Projects';
import EnvironmentsService from './services/Environments';
import ConfigsService from './services/Configs';
import SecretsService from './services/Secrets';
import ConfigLogsService from './services/ConfigLogs';
import V3Service from './services/V3';
import ActivityLogsService from './services/ActivityLogs';
import ServiceTokensService from './services/ServiceTokens';
import DynamicSecretsService from './services/DynamicSecrets';
import IntegrationsService from './services/Integrations';
import SyncsService from './services/Syncs';
import TrustedIpsService from './services/TrustedIps';
import WorkplaceRolesService from './services/WorkplaceRoles';
import ProjectRolesService from './services/ProjectRoles';
import ProjectMembersService from './services/ProjectMembers';
import InvitesService from './services/Invites';
import ServiceAccountsService from './services/ServiceAccounts';
import GroupsService from './services/Groups';

export * from './models';

export class DopplerSDK {
  public projects: ProjectsService;
  public environments: EnvironmentsService;
  public configs: ConfigsService;
  public secrets: SecretsService;
  public configLogs: ConfigLogsService;
  public v3: V3Service;
  public activityLogs: ActivityLogsService;
  public serviceTokens: ServiceTokensService;
  public dynamicSecrets: DynamicSecretsService;
  public integrations: IntegrationsService;
  public syncs: SyncsService;
  public trustedIps: TrustedIpsService;
  public workplaceRoles: WorkplaceRolesService;
  public projectRoles: ProjectRolesService;
  public projectMembers: ProjectMembersService;
  public invites: InvitesService;
  public serviceAccounts: ServiceAccountsService;
  public groups: GroupsService;

  constructor(accessToken: string = '') {
    this.projects = new ProjectsService(accessToken);
    this.environments = new EnvironmentsService(accessToken);
    this.configs = new ConfigsService(accessToken);
    this.secrets = new SecretsService(accessToken);
    this.configLogs = new ConfigLogsService(accessToken);
    this.v3 = new V3Service(accessToken);
    this.activityLogs = new ActivityLogsService(accessToken);
    this.serviceTokens = new ServiceTokensService(accessToken);
    this.dynamicSecrets = new DynamicSecretsService(accessToken);
    this.integrations = new IntegrationsService(accessToken);
    this.syncs = new SyncsService(accessToken);
    this.trustedIps = new TrustedIpsService(accessToken);
    this.workplaceRoles = new WorkplaceRolesService(accessToken);
    this.projectRoles = new ProjectRolesService(accessToken);
    this.projectMembers = new ProjectMembersService(accessToken);
    this.invites = new InvitesService(accessToken);
    this.serviceAccounts = new ServiceAccountsService(accessToken);
    this.groups = new GroupsService(accessToken);
  }

  setAccessToken(accessToken: string) {
    this.projects.setAccessToken(accessToken);
    this.environments.setAccessToken(accessToken);
    this.configs.setAccessToken(accessToken);
    this.secrets.setAccessToken(accessToken);
    this.configLogs.setAccessToken(accessToken);
    this.v3.setAccessToken(accessToken);
    this.activityLogs.setAccessToken(accessToken);
    this.serviceTokens.setAccessToken(accessToken);
    this.dynamicSecrets.setAccessToken(accessToken);
    this.integrations.setAccessToken(accessToken);
    this.syncs.setAccessToken(accessToken);
    this.trustedIps.setAccessToken(accessToken);
    this.workplaceRoles.setAccessToken(accessToken);
    this.projectRoles.setAccessToken(accessToken);
    this.projectMembers.setAccessToken(accessToken);
    this.invites.setAccessToken(accessToken);
    this.serviceAccounts.setAccessToken(accessToken);
    this.groups.setAccessToken(accessToken);
  }
}

export default DopplerSDK;
