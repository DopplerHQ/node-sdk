import { ProjectsService } from './services/projects/Projects';
import { EnvironmentsService } from './services/environments/Environments';
import { ConfigsService } from './services/configs/Configs';
import { SecretsService } from './services/secrets/Secrets';
import { ConfigLogsService } from './services/configLogs/ConfigLogs';
import { WorkplaceService } from './services/workplace/Workplace';
import { ActivityLogsService } from './services/activityLogs/ActivityLogs';
import { ServiceTokensService } from './services/serviceTokens/ServiceTokens';
import { AuditService } from './services/audit/Audit';
import { DynamicSecretsService } from './services/dynamicSecrets/DynamicSecrets';
import { AuthService } from './services/auth/Auth';
import { IntegrationsService } from './services/integrations/Integrations';
import { SyncsService } from './services/syncs/Syncs';
import { V3Service } from './services/v3/V3';
import { WorkplaceRolesService } from './services/workplaceRoles/WorkplaceRoles';
import { ProjectRolesService } from './services/projectRoles/ProjectRoles';
import { ProjectMembersService } from './services/projectMembers/ProjectMembers';
import { InvitesService } from './services/invites/Invites';
import { ServiceAccountsService } from './services/serviceAccounts/ServiceAccounts';
import { GroupsService } from './services/groups/Groups';

export * from './models';

export * as SecretsModels from './services/secrets';
export * as ProjectMembersModels from './services/projectMembers';
export * as GroupsModels from './services/groups';
export * as ProjectsModels from './services/projects';
export * as EnvironmentsModels from './services/environments';
export * as ConfigsModels from './services/configs';
export * as ServiceTokensModels from './services/serviceTokens';
export * as ConfigLogsModels from './services/configLogs';
export * as WorkplaceModels from './services/workplace';
export * as ActivityLogsModels from './services/activityLogs';
export * as AuditModels from './services/audit';
export * as DynamicSecretsModels from './services/dynamicSecrets';
export * as IntegrationsModels from './services/integrations';
export * as SyncsModels from './services/syncs';
export * as V3Models from './services/v3';
export * as WorkplaceRolesModels from './services/workplaceRoles';
export * as ProjectRolesModels from './services/projectRoles';
export * as InvitesModels from './services/invites';
export * as ServiceAccountsModels from './services/serviceAccounts';
export * as AuthModels from './services/auth';

type Config = {
  accessToken?: string;
};

export class DopplerSDK {
  public projects: ProjectsService;
  public environments: EnvironmentsService;
  public configs: ConfigsService;
  public secrets: SecretsService;
  public configLogs: ConfigLogsService;
  public workplace: WorkplaceService;
  public activityLogs: ActivityLogsService;
  public serviceTokens: ServiceTokensService;
  public audit: AuditService;
  public dynamicSecrets: DynamicSecretsService;
  public auth: AuthService;
  public integrations: IntegrationsService;
  public syncs: SyncsService;
  public v3: V3Service;
  public workplaceRoles: WorkplaceRolesService;
  public projectRoles: ProjectRolesService;
  public projectMembers: ProjectMembersService;
  public invites: InvitesService;
  public serviceAccounts: ServiceAccountsService;
  public groups: GroupsService;

  constructor({ accessToken = '' }: Config) {
    this.projects = new ProjectsService(accessToken);
    this.environments = new EnvironmentsService(accessToken);
    this.configs = new ConfigsService(accessToken);
    this.secrets = new SecretsService(accessToken);
    this.configLogs = new ConfigLogsService(accessToken);
    this.workplace = new WorkplaceService(accessToken);
    this.activityLogs = new ActivityLogsService(accessToken);
    this.serviceTokens = new ServiceTokensService(accessToken);
    this.audit = new AuditService(accessToken);
    this.dynamicSecrets = new DynamicSecretsService(accessToken);
    this.auth = new AuthService(accessToken);
    this.integrations = new IntegrationsService(accessToken);
    this.syncs = new SyncsService(accessToken);
    this.v3 = new V3Service(accessToken);
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
    this.workplace.setAccessToken(accessToken);
    this.activityLogs.setAccessToken(accessToken);
    this.serviceTokens.setAccessToken(accessToken);
    this.audit.setAccessToken(accessToken);
    this.dynamicSecrets.setAccessToken(accessToken);
    this.auth.setAccessToken(accessToken);
    this.integrations.setAccessToken(accessToken);
    this.syncs.setAccessToken(accessToken);
    this.v3.setAccessToken(accessToken);
    this.workplaceRoles.setAccessToken(accessToken);
    this.projectRoles.setAccessToken(accessToken);
    this.projectMembers.setAccessToken(accessToken);
    this.invites.setAccessToken(accessToken);
    this.serviceAccounts.setAccessToken(accessToken);
    this.groups.setAccessToken(accessToken);
  }
}

export default DopplerSDK;
