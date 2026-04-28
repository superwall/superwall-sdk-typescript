// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage campaigns, placements, and audiences. A Campaign controls when and to whom paywalls are displayed. Campaigns are scoped to a specific application (per-platform) since triggers and audience rules are platform-specific.
 */
export class Placements extends APIResource {
  /**
   * Updates a placement's event name or enabled status. Requires campaigns:write
   * scope.
   */
  update(
    placementID: string,
    params: PlacementUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PlacementUpdateResponse> {
    const { id, ...body } = params;
    return this._client.patch(path`/v2/campaigns/${id}/placements/${placementID}`, { body, ...options });
  }

  /**
   * Adds a new placement to a campaign. Requires campaigns:write scope.
   */
  add(id: string, body: PlacementAddParams, options?: RequestOptions): APIPromise<PlacementAddResponse> {
    return this._client.post(path`/v2/campaigns/${id}/placements`, { body, ...options });
  }

  /**
   * Removes a placement from a campaign. Requires campaigns:write scope.
   */
  remove(
    placementID: string,
    params: PlacementRemoveParams,
    options?: RequestOptions,
  ): APIPromise<PlacementRemoveResponse> {
    const { id } = params;
    return this._client.delete(path`/v2/campaigns/${id}/placements/${placementID}`, options);
  }
}

export interface PlacementUpdateResponse {
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

export interface PlacementAddResponse {
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

export interface PlacementRemoveResponse {
  /**
   * ID of the deleted placement
   */
  id: string;

  /**
   * Always true for deletion responses
   */
  deleted: true;

  /**
   * Object type, always `placement`
   */
  object: 'placement';
}

export interface PlacementUpdateParams {
  /**
   * Path param: Campaign ID
   */
  id: string;

  /**
   * Body param: Whether this placement is enabled
   */
  enabled?: boolean;

  /**
   * Body param: Event name that triggers this placement
   */
  event_name?: string;
}

export interface PlacementAddParams {
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

export interface PlacementRemoveParams {
  /**
   * Campaign ID
   */
  id: string;
}

export declare namespace Placements {
  export {
    type PlacementUpdateResponse as PlacementUpdateResponse,
    type PlacementAddResponse as PlacementAddResponse,
    type PlacementRemoveResponse as PlacementRemoveResponse,
    type PlacementUpdateParams as PlacementUpdateParams,
    type PlacementAddParams as PlacementAddParams,
    type PlacementRemoveParams as PlacementRemoveParams,
  };
}
