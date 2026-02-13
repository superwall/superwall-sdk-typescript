// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ApplicationsAPI from '../../v1/applications/applications';
import * as PlacementsAPI from './placements';
import {
  PlacementCreateParams,
  PlacementCreateResponse,
  PlacementDeleteParams,
  PlacementDeleteResponse,
  PlacementUpdateParams,
  PlacementUpdateResponse,
  Placements,
} from './placements';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Campaigns extends APIResource {
  placements: PlacementsAPI.Placements = new PlacementsAPI.Placements(this._client);

  /**
   * Creates a new campaign with placements and audiences. Requires campaigns:write
   * scope.
   */
  create(body: CampaignCreateParams, options?: RequestOptions): APIPromise<CampaignCreateResponse> {
    return this._client.post('/dash-api/v2/campaigns', { body, ...options });
  }

  /**
   * Retrieves a campaign by ID. Requires campaigns:read scope.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CampaignRetrieveResponse> {
    return this._client.get(path`/dash-api/v2/campaigns/${id}`, options);
  }

  /**
   * Updates an audience's enabled status or description. Requires campaigns:write
   * scope.
   */
  update(
    audienceID: string,
    params: CampaignUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignUpdateResponse> {
    const { id, ...body } = params;
    return this._client.patch(path`/dash-api/v2/campaigns/${id}/audiences/${audienceID}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a list of campaigns for the specified application. Requires
   * campaigns:read scope. The `application_id` query parameter is required.
   */
  list(query: CampaignListParams, options?: RequestOptions): APIPromise<CampaignListResponse> {
    return this._client.get('/dash-api/v2/campaigns', { query, ...options });
  }

  /**
   * Archives a campaign. Archived campaigns are not returned in list queries by
   * default. Requires campaigns:write scope.
   */
  archive(id: string, options?: RequestOptions): APIPromise<CampaignArchiveResponse> {
    return this._client.post(path`/dash-api/v2/campaigns/${id}/archive`, options);
  }

  /**
   * Unarchives a previously archived campaign. Requires campaigns:write scope.
   */
  unarchive(id: string, options?: RequestOptions): APIPromise<CampaignUnarchiveResponse> {
    return this._client.post(path`/dash-api/v2/campaigns/${id}/unarchive`, options);
  }
}

export interface CampaignCreateResponse {
  /**
   * Unique identifier for the campaign
   */
  id: string;

  /**
   * ID of the application this campaign belongs to
   */
  application_id: string;

  /**
   * Whether the campaign is archived
   */
  archived: boolean;

  /**
   * List of audiences in this campaign
   */
  audiences: Array<CampaignCreateResponse.Audience>;

  /**
   * ISO 8601 timestamp of when the campaign was created
   */
  created_at: string;

  /**
   * Description of the campaign
   */
  description: string;

  /**
   * Whether this is a legacy campaign
   */
  is_legacy: boolean;

  /**
   * Internal notes about the campaign
   */
  notes: string | null;

  /**
   * Object type, always `campaign`
   */
  object: 'campaign';

  /**
   * List of placements (triggers) in this campaign
   */
  placements: Array<CampaignCreateResponse.Placement>;

  /**
   * ISO 8601 timestamp of when the campaign was last updated
   */
  updated_at: string;
}

export namespace CampaignCreateResponse {
  export interface Audience {
    /**
     * Unique identifier for the audience
     */
    id: string;

    /**
     * Human-readable description of the audience
     */
    description: string | null;

    /**
     * Whether this audience is enabled
     */
    enabled: boolean;

    /**
     * Filter expression for matching users, or null for all users
     */
    expression: string | null;

    /**
     * Object type, always `audience`
     */
    object: 'audience';

    /**
     * Priority rank of this audience within the campaign
     */
    rank: string;

    /**
     * Optimization strategy for variant allocation
     */
    variant_optimization: 'none' | 'ucb1_bandit';

    /**
     * List of variants in this audience
     */
    variants: Array<Audience.Variant>;
  }

  export namespace Audience {
    export interface Variant {
      /**
       * Unique identifier for the variant
       */
      id: string;

      /**
       * Object type, always `variant`
       */
      object: 'variant';

      /**
       * a string to be decoded into a number
       */
      paywall: string | null;

      /**
       * Traffic percentage allocated to this variant (0-100)
       */
      percentage: number;

      /**
       * Whether this is a treatment or holdout variant
       */
      type: 'treatment' | 'holdout';
    }
  }

  export interface Placement {
    /**
     * Unique identifier for the placement
     */
    id: string;

    /**
     * Whether this placement is enabled
     */
    enabled: boolean;

    /**
     * Event name that triggers this placement
     */
    event_name: string;

    /**
     * Object type, always `placement`
     */
    object: 'placement';
  }
}

export interface CampaignRetrieveResponse {
  /**
   * Unique identifier for the campaign
   */
  id: string;

  /**
   * ID of the application this campaign belongs to
   */
  application_id: string;

  /**
   * Whether the campaign is archived
   */
  archived: boolean;

  /**
   * List of audiences in this campaign
   */
  audiences: Array<CampaignRetrieveResponse.Audience>;

  /**
   * ISO 8601 timestamp of when the campaign was created
   */
  created_at: string;

  /**
   * Description of the campaign
   */
  description: string;

  /**
   * Whether this is a legacy campaign
   */
  is_legacy: boolean;

  /**
   * Internal notes about the campaign
   */
  notes: string | null;

  /**
   * Object type, always `campaign`
   */
  object: 'campaign';

  /**
   * List of placements (triggers) in this campaign
   */
  placements: Array<CampaignRetrieveResponse.Placement>;

  /**
   * ISO 8601 timestamp of when the campaign was last updated
   */
  updated_at: string;
}

export namespace CampaignRetrieveResponse {
  export interface Audience {
    /**
     * Unique identifier for the audience
     */
    id: string;

    /**
     * Human-readable description of the audience
     */
    description: string | null;

    /**
     * Whether this audience is enabled
     */
    enabled: boolean;

    /**
     * Filter expression for matching users, or null for all users
     */
    expression: string | null;

    /**
     * Object type, always `audience`
     */
    object: 'audience';

    /**
     * Priority rank of this audience within the campaign
     */
    rank: string;

    /**
     * Optimization strategy for variant allocation
     */
    variant_optimization: 'none' | 'ucb1_bandit';

    /**
     * List of variants in this audience
     */
    variants: Array<Audience.Variant>;
  }

  export namespace Audience {
    export interface Variant {
      /**
       * Unique identifier for the variant
       */
      id: string;

      /**
       * Object type, always `variant`
       */
      object: 'variant';

      /**
       * a string to be decoded into a number
       */
      paywall: string | null;

      /**
       * Traffic percentage allocated to this variant (0-100)
       */
      percentage: number;

      /**
       * Whether this is a treatment or holdout variant
       */
      type: 'treatment' | 'holdout';
    }
  }

  export interface Placement {
    /**
     * Unique identifier for the placement
     */
    id: string;

    /**
     * Whether this placement is enabled
     */
    enabled: boolean;

    /**
     * Event name that triggers this placement
     */
    event_name: string;

    /**
     * Object type, always `placement`
     */
    object: 'placement';
  }
}

export interface CampaignUpdateResponse {
  /**
   * Unique identifier for the audience
   */
  id: string;

  /**
   * Human-readable description of the audience
   */
  description: string | null;

  /**
   * Whether this audience is enabled
   */
  enabled: boolean;

  /**
   * Filter expression for matching users, or null for all users
   */
  expression: string | null;

  /**
   * Object type, always `audience`
   */
  object: 'audience';

  /**
   * Priority rank of this audience within the campaign
   */
  rank: string;

  /**
   * Optimization strategy for variant allocation
   */
  variant_optimization: 'none' | 'ucb1_bandit';

  /**
   * List of variants in this audience
   */
  variants: Array<CampaignUpdateResponse.Variant>;
}

export namespace CampaignUpdateResponse {
  export interface Variant {
    /**
     * Unique identifier for the variant
     */
    id: string;

    /**
     * Object type, always `variant`
     */
    object: 'variant';

    /**
     * a string to be decoded into a number
     */
    paywall: string | null;

    /**
     * Traffic percentage allocated to this variant (0-100)
     */
    percentage: number;

    /**
     * Whether this is a treatment or holdout variant
     */
    type: 'treatment' | 'holdout';
  }
}

export interface CampaignListResponse {
  /**
   * List of results
   */
  data: Array<CampaignListResponse.Data>;

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
  url: '/v2/campaigns';
}

export namespace CampaignListResponse {
  export interface Data {
    /**
     * Unique identifier for the campaign
     */
    id: string;

    /**
     * ID of the application this campaign belongs to
     */
    application_id: string;

    /**
     * Whether the campaign is archived
     */
    archived: boolean;

    /**
     * List of audiences in this campaign
     */
    audiences: Array<Data.Audience>;

    /**
     * ISO 8601 timestamp of when the campaign was created
     */
    created_at: string;

    /**
     * Description of the campaign
     */
    description: string;

    /**
     * Whether this is a legacy campaign
     */
    is_legacy: boolean;

    /**
     * Internal notes about the campaign
     */
    notes: string | null;

    /**
     * Object type, always `campaign`
     */
    object: 'campaign';

    /**
     * List of placements (triggers) in this campaign
     */
    placements: Array<Data.Placement>;

    /**
     * ISO 8601 timestamp of when the campaign was last updated
     */
    updated_at: string;
  }

  export namespace Data {
    export interface Audience {
      /**
       * Unique identifier for the audience
       */
      id: string;

      /**
       * Human-readable description of the audience
       */
      description: string | null;

      /**
       * Whether this audience is enabled
       */
      enabled: boolean;

      /**
       * Filter expression for matching users, or null for all users
       */
      expression: string | null;

      /**
       * Object type, always `audience`
       */
      object: 'audience';

      /**
       * Priority rank of this audience within the campaign
       */
      rank: string;

      /**
       * Optimization strategy for variant allocation
       */
      variant_optimization: 'none' | 'ucb1_bandit';

      /**
       * List of variants in this audience
       */
      variants: Array<Audience.Variant>;
    }

    export namespace Audience {
      export interface Variant {
        /**
         * Unique identifier for the variant
         */
        id: string;

        /**
         * Object type, always `variant`
         */
        object: 'variant';

        /**
         * a string to be decoded into a number
         */
        paywall: string | null;

        /**
         * Traffic percentage allocated to this variant (0-100)
         */
        percentage: number;

        /**
         * Whether this is a treatment or holdout variant
         */
        type: 'treatment' | 'holdout';
      }
    }

    export interface Placement {
      /**
       * Unique identifier for the placement
       */
      id: string;

      /**
       * Whether this placement is enabled
       */
      enabled: boolean;

      /**
       * Event name that triggers this placement
       */
      event_name: string;

      /**
       * Object type, always `placement`
       */
      object: 'placement';
    }
  }
}

export interface CampaignArchiveResponse {
  /**
   * ID of the campaign
   */
  id: string;

  /**
   * Whether the campaign is now archived
   */
  archived: boolean;

  /**
   * Object type, always `campaign`
   */
  object: 'campaign';
}

export interface CampaignUnarchiveResponse {
  /**
   * ID of the campaign
   */
  id: string;

  /**
   * Whether the campaign is now archived
   */
  archived: boolean;

  /**
   * Object type, always `campaign`
   */
  object: 'campaign';
}

export interface CampaignCreateParams {
  /**
   * ID of the application to create the campaign in
   */
  application_id: string;

  /**
   * List of audiences for the campaign. At least one is required
   */
  audiences: Array<CampaignCreateParams.Audience>;

  /**
   * Description of the campaign
   */
  description: string;

  /**
   * List of placements (triggers) for the campaign. At least one is required
   */
  placements: Array<CampaignCreateParams.Placement>;

  /**
   * Internal notes about the campaign
   */
  notes?: string | null;
}

export namespace CampaignCreateParams {
  export interface Audience {
    /**
     * List of variants in this audience. At least one is required
     */
    variants: Array<Audience.Variant>;

    /**
     * Human-readable description of the audience
     */
    description?: string | null;

    /**
     * Whether this audience is enabled. Defaults to true
     */
    enabled?: boolean;

    /**
     * Filter expression for matching users
     */
    expression?: string | null;

    /**
     * Optimization strategy for variant allocation. Defaults to `none`
     */
    variant_optimization?: 'none' | 'ucb1_bandit';
  }

  export namespace Audience {
    export interface Variant {
      /**
       * a string to be decoded into a number
       */
      paywall: string | null;

      percentage: number;

      /**
       * Whether this is a treatment or holdout variant
       */
      type: 'treatment' | 'holdout';
    }
  }

  export interface Placement {
    /**
     * Event name that triggers this placement
     */
    event_name: string;

    /**
     * Whether this placement is enabled. Defaults to true
     */
    enabled?: boolean;

    /**
     * If true and this event name exists in another campaign, move it to this
     * campaign. If false and event exists elsewhere, returns a conflict error
     */
    remove_from_other_campaigns?: boolean;
  }
}

export interface CampaignUpdateParams {
  /**
   * Path param: Campaign ID
   */
  id: string;

  /**
   * Body param: Human-readable description of the audience
   */
  description?: string | null;

  /**
   * Body param: Whether this audience is enabled
   */
  enabled?: boolean;
}

export interface CampaignListParams {
  /**
   * Filter by application ID (required)
   */
  application_id: string;

  /**
   * Include archived campaigns (default: false)
   */
  archived?: ApplicationsAPI.BooleanFromString;

  /**
   * a string to be decoded into a number
   */
  ending_before?: string;

  /**
   * Maximum number of items to return (1-100, default: 10)
   */
  limit?: string;

  /**
   * a string to be decoded into a number
   */
  starting_after?: string;
}

Campaigns.Placements = Placements;

export declare namespace Campaigns {
  export {
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
    Placements as Placements,
    type PlacementCreateResponse as PlacementCreateResponse,
    type PlacementUpdateResponse as PlacementUpdateResponse,
    type PlacementDeleteResponse as PlacementDeleteResponse,
    type PlacementCreateParams as PlacementCreateParams,
    type PlacementUpdateParams as PlacementUpdateParams,
    type PlacementDeleteParams as PlacementDeleteParams,
  };
}
