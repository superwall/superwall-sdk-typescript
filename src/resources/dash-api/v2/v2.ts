// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ChartsAPI from './charts';
import {
  ChartDataParams,
  ChartDataResponse,
  ChartRetrieveDefinitionsParams,
  ChartRetrieveDefinitionsResponse,
  Charts,
} from './charts';
import * as ProductsAPI from './products';
import {
  ProductCreateParams,
  ProductCreateResponse,
  ProductDeleteResponse,
  ProductListParams,
  ProductListResponse,
  ProductRetrieveResponse,
  ProductUpdateParams,
  ProductUpdateResponse,
  Products,
} from './products';
import * as CampaignsAPI from './campaigns/campaigns';
import {
  CampaignArchiveResponse,
  CampaignCreateParams,
  CampaignCreateResponse,
  CampaignListParams,
  CampaignListResponse,
  CampaignRetrieveResponse,
  CampaignUnarchiveResponse,
  CampaignUpdateParams,
  CampaignUpdateResponse,
  Campaigns,
} from './campaigns/campaigns';
import * as EntitlementsAPI from './entitlements/entitlements';
import {
  EntitlementCreateParams,
  EntitlementCreateResponse,
  EntitlementDeleteResponse,
  EntitlementListParams,
  EntitlementListResponse,
  EntitlementRetrieveResponse,
  EntitlementUpdateParams,
  EntitlementUpdateResponse,
  Entitlements,
} from './entitlements/entitlements';
import * as MeAPI from './me/me';
import { Me } from './me/me';
import * as PaywallsAPI from './paywalls/paywalls';
import {
  PaywallArchiveResponse,
  PaywallCreateParams,
  PaywallCreateResponse,
  PaywallListParams,
  PaywallListResponse,
  PaywallPublishResponse,
  PaywallRetrieveResponse,
  PaywallUnarchiveResponse,
  PaywallUpdateParams,
  PaywallUpdateResponse,
  Paywalls,
} from './paywalls/paywalls';
import * as ProjectsAPI from './projects/projects';
import {
  ProjectArchiveResponse,
  ProjectCreateParams,
  ProjectCreateResponse,
  ProjectListParams,
  ProjectListResponse,
  ProjectRetrieveResponse,
  ProjectUnarchiveResponse,
  ProjectUpdateParams,
  ProjectUpdateResponse,
  Projects,
} from './projects/projects';
import * as UsersAPI from './users/users';
import {
  UserQueryParams,
  UserQueryResponse,
  UserRetrieveActiveEntitlementsParams,
  UserRetrieveActiveEntitlementsResponse,
  UserRetrieveAttributesParams,
  UserRetrieveAttributesResponse,
  UserRetrieveDeviceAttributesParams,
  UserRetrieveDeviceAttributesResponse,
  UserRetrieveEventNamesParams,
  UserRetrieveEventNamesResponse,
  UserRetrieveFilterPropertiesParams,
  UserRetrieveFilterPropertiesResponse,
  UserRetrieveResolveParams,
  UserRetrieveResolveResponse,
  UserRetrieveSubscriptionSummaryParams,
  UserRetrieveSubscriptionSummaryResponse,
  Users,
} from './users/users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class V2 extends APIResource {
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  me: MeAPI.Me = new MeAPI.Me(this._client);
  paywalls: PaywallsAPI.Paywalls = new PaywallsAPI.Paywalls(this._client);
  campaigns: CampaignsAPI.Campaigns = new CampaignsAPI.Campaigns(this._client);
  charts: ChartsAPI.Charts = new ChartsAPI.Charts(this._client);
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * Returns a list of manual grants for the specified device/user. Requires
   * entitlements:read scope.
   */
  retrieveGrants(
    query: V2RetrieveGrantsParams,
    options?: RequestOptions,
  ): APIPromise<V2RetrieveGrantsResponse> {
    return this._client.get('/dash-api/v2/grants', { query, ...options });
  }
}

export interface V2RetrieveGrantsResponse {
  /**
   * List of results
   */
  data: Array<V2RetrieveGrantsResponse.Data>;

  /**
   * Whether there are more results available beyond this page
   */
  has_more: boolean;

  /**
   * Object type, always `list`
   */
  object: 'list';

  /**
   * API endpoint URL for this list
   */
  url: '/v2/grants';
}

export namespace V2RetrieveGrantsResponse {
  export interface Data {
    /**
     * Unique identifier for the grant
     */
    id: string;

    /**
     * Device ID the grant applies to
     */
    device_id: string;

    /**
     * ID of the entitlement being granted
     */
    entitlement: string;

    /**
     * Identifier string of the entitlement being granted
     */
    entitlement_identifier: string;

    /**
     * ISO 8601 timestamp of when the grant expires, or null for permanent grants
     */
    expires_at: string | null;

    /**
     * ISO 8601 timestamp of when the grant was created
     */
    granted_at: string;

    /**
     * Identifier of who granted this entitlement
     */
    granted_by: string;

    /**
     * Object type, always `entitlement_grant`
     */
    object: 'entitlement_grant';

    /**
     * Reason for the grant, or null
     */
    reason: string | null;

    /**
     * Current status of the grant
     */
    status: 'active' | 'expired' | 'revoked';

    /**
     * User ID the grant applies to, or null
     */
    user_id: string | null;
  }
}

export interface V2RetrieveGrantsParams {
  /**
   * Project ID (required)
   */
  project_id: string;

  device_id?: string;

  ending_before?: string;

  /**
   * Include expired grants (default: false)
   */
  include_expired?: 'true' | 'false';

  /**
   * Include revoked grants (default: false)
   */
  include_revoked?: 'true' | 'false';

  /**
   * Maximum number of items to return (1-100, default: 10)
   */
  limit?: string;

  starting_after?: string;

  user_id?: string;
}

V2.Projects = Projects;
V2.Me = Me;
V2.Paywalls = Paywalls;
V2.Campaigns = Campaigns;
V2.Charts = Charts;
V2.Entitlements = Entitlements;
V2.Products = Products;
V2.Users = Users;

export declare namespace V2 {
  export {
    type V2RetrieveGrantsResponse as V2RetrieveGrantsResponse,
    type V2RetrieveGrantsParams as V2RetrieveGrantsParams,
  };

  export {
    Projects as Projects,
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectUpdateResponse as ProjectUpdateResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectArchiveResponse as ProjectArchiveResponse,
    type ProjectUnarchiveResponse as ProjectUnarchiveResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
  };

  export { Me as Me };

  export {
    Paywalls as Paywalls,
    type PaywallCreateResponse as PaywallCreateResponse,
    type PaywallRetrieveResponse as PaywallRetrieveResponse,
    type PaywallUpdateResponse as PaywallUpdateResponse,
    type PaywallListResponse as PaywallListResponse,
    type PaywallArchiveResponse as PaywallArchiveResponse,
    type PaywallPublishResponse as PaywallPublishResponse,
    type PaywallUnarchiveResponse as PaywallUnarchiveResponse,
    type PaywallCreateParams as PaywallCreateParams,
    type PaywallUpdateParams as PaywallUpdateParams,
    type PaywallListParams as PaywallListParams,
  };

  export {
    Campaigns as Campaigns,
    type CampaignCreateResponse as CampaignCreateResponse,
    type CampaignRetrieveResponse as CampaignRetrieveResponse,
    type CampaignUpdateResponse as CampaignUpdateResponse,
    type CampaignListResponse as CampaignListResponse,
    type CampaignArchiveResponse as CampaignArchiveResponse,
    type CampaignUnarchiveResponse as CampaignUnarchiveResponse,
    type CampaignCreateParams as CampaignCreateParams,
    type CampaignUpdateParams as CampaignUpdateParams,
    type CampaignListParams as CampaignListParams,
  };

  export {
    Charts as Charts,
    type ChartDataResponse as ChartDataResponse,
    type ChartRetrieveDefinitionsResponse as ChartRetrieveDefinitionsResponse,
    type ChartDataParams as ChartDataParams,
    type ChartRetrieveDefinitionsParams as ChartRetrieveDefinitionsParams,
  };

  export {
    Entitlements as Entitlements,
    type EntitlementCreateResponse as EntitlementCreateResponse,
    type EntitlementRetrieveResponse as EntitlementRetrieveResponse,
    type EntitlementUpdateResponse as EntitlementUpdateResponse,
    type EntitlementListResponse as EntitlementListResponse,
    type EntitlementDeleteResponse as EntitlementDeleteResponse,
    type EntitlementCreateParams as EntitlementCreateParams,
    type EntitlementUpdateParams as EntitlementUpdateParams,
    type EntitlementListParams as EntitlementListParams,
  };

  export {
    Products as Products,
    type ProductCreateResponse as ProductCreateResponse,
    type ProductRetrieveResponse as ProductRetrieveResponse,
    type ProductUpdateResponse as ProductUpdateResponse,
    type ProductListResponse as ProductListResponse,
    type ProductDeleteResponse as ProductDeleteResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };

  export {
    Users as Users,
    type UserQueryResponse as UserQueryResponse,
    type UserRetrieveActiveEntitlementsResponse as UserRetrieveActiveEntitlementsResponse,
    type UserRetrieveAttributesResponse as UserRetrieveAttributesResponse,
    type UserRetrieveDeviceAttributesResponse as UserRetrieveDeviceAttributesResponse,
    type UserRetrieveEventNamesResponse as UserRetrieveEventNamesResponse,
    type UserRetrieveFilterPropertiesResponse as UserRetrieveFilterPropertiesResponse,
    type UserRetrieveResolveResponse as UserRetrieveResolveResponse,
    type UserRetrieveSubscriptionSummaryResponse as UserRetrieveSubscriptionSummaryResponse,
    type UserQueryParams as UserQueryParams,
    type UserRetrieveActiveEntitlementsParams as UserRetrieveActiveEntitlementsParams,
    type UserRetrieveAttributesParams as UserRetrieveAttributesParams,
    type UserRetrieveDeviceAttributesParams as UserRetrieveDeviceAttributesParams,
    type UserRetrieveEventNamesParams as UserRetrieveEventNamesParams,
    type UserRetrieveFilterPropertiesParams as UserRetrieveFilterPropertiesParams,
    type UserRetrieveResolveParams as UserRetrieveResolveParams,
    type UserRetrieveSubscriptionSummaryParams as UserRetrieveSubscriptionSummaryParams,
  };
}
