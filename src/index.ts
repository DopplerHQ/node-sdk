import { ProjectsService } from './services/projects/Projects';
import { SecretsService } from './services/secrets/Secrets';
import { ConfigLogsService } from './services/configLogs/ConfigLogs';
import { EnvironmentsService } from './services/environments/Environments';
import { ConfigsService } from './services/configs/Configs';
import { ActivityLogsService } from './services/activityLogs/ActivityLogs';
import { WorkplaceService } from './services/workplace/Workplace';
import { ServiceTokensService } from './services/serviceTokens/ServiceTokens';
import { AuditService } from './services/audit/Audit';
import { DynamicSecretsService } from './services/dynamicSecrets/DynamicSecrets';
import { AuthService } from './services/auth/Auth';
import { IntegrationsService } from './services/integrations/Integrations';
import { SyncsService } from './services/syncs/Syncs';
import { WorkplaceRolesService } from './services/workplaceRoles/WorkplaceRoles';
import { ProjectRolesService } from './services/projectRoles/ProjectRoles';
import { ProjectMembersService } from './services/projectMembers/ProjectMembers';
import { InvitesService } from './services/invites/Invites';
import { ServiceAccountsService } from './services/serviceAccounts/ServiceAccounts';
import { GroupsService } from './services/groups/Groups';
import { UsersService } from './services/users/Users';

export * from './models';

export * as SecretsModels from './services/secrets';
export * as ProjectMembersModels from './services/projectMembers';
export * as GroupsModels from './services/groups';
export * as ProjectsModels from './services/projects';
export * as ConfigLogsModels from './services/configLogs';
export * as EnvironmentsModels from './services/environments';
export * as ConfigsModels from './services/configs';
export * as ServiceTokensModels from './services/serviceTokens';
export * as ActivityLogsModels from './services/activityLogs';
export * as WorkplaceModels from './services/workplace';
export * as AuditModels from './services/audit';
export * as DynamicSecretsModels from './services/dynamicSecrets';
export * as IntegrationsModels from './services/integrations';
export * as SyncsModels from './services/syncs';
export * as AuthModels from './services/auth';
export * as WorkplaceRolesModels from './services/workplaceRoles';
export * as ProjectRolesModels from './services/projectRoles';
export * as InvitesModels from './services/invites';
export * as ServiceAccountsModels from './services/serviceAccounts';
export * as UsersModels from './services/users';

type Config = {
  accessToken?: string;
};

export class DopplerSDK {
  public projects: ProjectsService;
  public secrets: SecretsService;
  public configLogs: ConfigLogsService;
  public environments: EnvironmentsService;
  public configs: ConfigsService;
  public activityLogs: ActivityLogsService;
  public workplace: WorkplaceService;
  public serviceTokens: ServiceTokensService;
  public audit: AuditService;
  public dynamicSecrets: DynamicSecretsService;
  public auth: AuthService;
  public integrations: IntegrationsService;
  public syncs: SyncsService;
  public workplaceRoles: WorkplaceRolesService;
  public projectRoles: ProjectRolesService;
  public projectMembers: ProjectMembersService;
  public invites: InvitesService;
  public serviceAccounts: ServiceAccountsService;
  public groups: GroupsService;
  public users: UsersService;

  constructor({ accessToken = '' }: Config) {
    this.projects = new ProjectsService(accessToken);
    this.secrets = new SecretsService(accessToken);
    this.configLogs = new ConfigLogsService(accessToken);
    this.environments = new EnvironmentsService(accessToken);
    this.configs = new ConfigsService(accessToken);
    this.activityLogs = new ActivityLogsService(accessToken);
    this.workplace = new WorkplaceService(accessToken);
    this.serviceTokens = new ServiceTokensService(accessToken);
    this.audit = new AuditService(accessToken);
    this.dynamicSecrets = new DynamicSecretsService(accessToken);
    this.auth = new AuthService(accessToken);
    this.integrations = new IntegrationsService(accessToken);
    this.syncs = new SyncsService(accessToken);
    this.workplaceRoles = new WorkplaceRolesService(accessToken);
    this.projectRoles = new ProjectRolesService(accessToken);
    this.projectMembers = new ProjectMembersService(accessToken);
    this.invites = new InvitesService(accessToken);
    this.serviceAccounts = new ServiceAccountsService(accessToken);
    this.groups = new GroupsService(accessToken);
    this.users = new UsersService(accessToken);
  }

  setBaseUrl(url: string): void {
    this.projects.setBaseUrl(url);
    this.secrets.setBaseUrl(url);
    this.configLogs.setBaseUrl(url);
    this.environments.setBaseUrl(url);
    this.configs.setBaseUrl(url);
    this.activityLogs.setBaseUrl(url);
    this.workplace.setBaseUrl(url);
    this.serviceTokens.setBaseUrl(url);
    this.audit.setBaseUrl(url);
    this.dynamicSecrets.setBaseUrl(url);
    this.auth.setBaseUrl(url);
    this.integrations.setBaseUrl(url);
    this.syncs.setBaseUrl(url);
    this.workplaceRoles.setBaseUrl(url);
    this.projectRoles.setBaseUrl(url);
    this.projectMembers.setBaseUrl(url);
    this.invites.setBaseUrl(url);
    this.serviceAccounts.setBaseUrl(url);
    this.groups.setBaseUrl(url);
    this.users.setBaseUrl(url);
  }

  setAccessToken(accessToken: string) {
    this.projects.setAccessToken(accessToken);
    this.secrets.setAccessToken(accessToken);
    this.configLogs.setAccessToken(accessToken);
    this.environments.setAccessToken(accessToken);
    this.configs.setAccessToken(accessToken);
    this.activityLogs.setAccessToken(accessToken);
    this.workplace.setAccessToken(accessToken);
    this.serviceTokens.setAccessToken(accessToken);
    this.audit.setAccessToken(accessToken);
    this.dynamicSecrets.setAccessToken(accessToken);
    this.auth.setAccessToken(accessToken);
    this.integrations.setAccessToken(accessToken);
    this.syncs.setAccessToken(accessToken);
    this.workplaceRoles.setAccessToken(accessToken);
    this.projectRoles.setAccessToken(accessToken);
    this.projectMembers.setAccessToken(accessToken);
    this.invites.setAccessToken(accessToken);
    this.serviceAccounts.setAccessToken(accessToken);
    this.groups.setAccessToken(accessToken);
    this.users.setAccessToken(accessToken);
  }
}

export default DopplerSDK;
