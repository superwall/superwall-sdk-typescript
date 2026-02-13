// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Placements extends APIResource {
  /**
   * Adds a new placement to a campaign. Requires campaigns:write scope.
   */
  create(
    id: string,
    body: PlacementCreateParams,
    options?: RequestOptions,
  ): APIPromise<PlacementCreateResponse> {
    return this._client.post(path`/dash-api/v2/campaigns/${id}/placements`, { body, ...options });
  }

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
    return this._client.patch(path`/dash-api/v2/campaigns/${id}/placements/${placementID}`, {
      body,
      ...options,
    });
  }

  /**
   * Removes a placement from a campaign. Requires campaigns:write scope.
   */
  delete(
    placementID: string,
    params: PlacementDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PlacementDeleteResponse> {
    const { id } = params;
    return this._client.delete(path`/dash-api/v2/campaigns/${id}/placements/${placementID}`, options);
  }
}

export interface PlacementCreateResponse {
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

export interface PlacementDeleteResponse {
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

export interface PlacementCreateParams {
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

export interface PlacementDeleteParams {
  /**
   * Campaign ID
   */
  id: string;
}

export declare namespace Placements {
  export {
    type PlacementCreateResponse as PlacementCreateResponse,
    type PlacementUpdateResponse as PlacementUpdateResponse,
    type PlacementDeleteResponse as PlacementDeleteResponse,
    type PlacementCreateParams as PlacementCreateParams,
    type PlacementUpdateParams as PlacementUpdateParams,
    type PlacementDeleteParams as PlacementDeleteParams,
  };
}
