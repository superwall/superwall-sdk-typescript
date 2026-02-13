// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BlogAPI from './blog';
import { Blog } from './blog';
import * as CampaignsAPI from './campaigns';
import { Campaigns } from './campaigns';
import * as EntitlementsAPI from './entitlements';
import { Entitlements } from './entitlements';
import * as PaywallsAPI from './paywalls';
import { Paywalls } from './paywalls';
import * as UsersAPI from './users';
import { Users } from './users';
import * as ApplicationsAPI from './applications/applications';
import { Applications, BooleanFromString } from './applications/applications';
import * as ChartsAPI from './charts/charts';
import { Charts } from './charts/charts';
import * as OpsAPI from './ops/ops';
import { Ops } from './ops/ops';
import * as ProjectsAPI from './projects/projects';
import { Projects } from './projects/projects';
import * as Web2appintegrationsAPI from './web2appintegrations/web2appintegrations';
import { Web2appintegrations } from './web2appintegrations/web2appintegrations';
import * as WebpaywallsAPI from './webpaywalls/webpaywalls';
import { Webpaywalls } from './webpaywalls/webpaywalls';
import * as ClientAPI from './client/client';
import { Client } from './client/client';

export class V1 extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);
  client: ClientAPI.Client = new ClientAPI.Client(this._client);
  paywalls: PaywallsAPI.Paywalls = new PaywallsAPI.Paywalls(this._client);
  webpaywalls: WebpaywallsAPI.Webpaywalls = new WebpaywallsAPI.Webpaywalls(this._client);
  web2appintegrations: Web2appintegrationsAPI.Web2appintegrations =
    new Web2appintegrationsAPI.Web2appintegrations(this._client);
  blog: BlogAPI.Blog = new BlogAPI.Blog(this._client);
  charts: ChartsAPI.Charts = new ChartsAPI.Charts(this._client);
  campaigns: CampaignsAPI.Campaigns = new CampaignsAPI.Campaigns(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  ops: OpsAPI.Ops = new OpsAPI.Ops(this._client);
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);
}

V1.Users = Users;
V1.Applications = Applications;
V1.Client = Client;
V1.Paywalls = Paywalls;
V1.Webpaywalls = Webpaywalls;
V1.Web2appintegrations = Web2appintegrations;
V1.Blog = Blog;
V1.Charts = Charts;
V1.Campaigns = Campaigns;
V1.Projects = Projects;
V1.Ops = Ops;
V1.Entitlements = Entitlements;

export declare namespace V1 {
  export { Users as Users };

  export { Applications as Applications, type BooleanFromString as BooleanFromString };

  export { Client as Client };

  export { Paywalls as Paywalls };

  export { Webpaywalls as Webpaywalls };

  export { Web2appintegrations as Web2appintegrations };

  export { Blog as Blog };

  export { Charts as Charts };

  export { Campaigns as Campaigns };

  export { Projects as Projects };

  export { Ops as Ops };

  export { Entitlements as Entitlements };
}
