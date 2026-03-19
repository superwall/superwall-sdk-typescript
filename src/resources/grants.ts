// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UsersAPI from './users/users';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Query manual entitlement grants by device or user.
 */
export class Grants extends APIResource {
  /**
   * Returns a list of manual grants for the specified device/user. Requires
   * entitlements:read scope.
   */
  list(query: GrantListParams, options?: RequestOptions): APIPromise<GrantListResponse> {
    return this._client.get('/v2/grants', { query, ...options });
  }
}

export interface GrantListResponse {
  /**
   * List of results
   */
  data: Array<GrantListResponse.Data>;

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

export namespace GrantListResponse {
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

export interface GrantListParams {
  /**
   * Project ID (required)
   */
  project_id: string;

  device_id?: string;

  ending_before?: string;

  /**
   * Include expired grants (default: false)
   */
  include_expired?: UsersAPI.BooleanFromString;

  /**
   * Include revoked grants (default: false)
   */
  include_revoked?: UsersAPI.BooleanFromString;

  /**
   * Maximum number of items to return (1-100, default: 10)
   */
  limit?: string;

  starting_after?: string;

  user_id?: string;
}

export declare namespace Grants {
  export { type GrantListResponse as GrantListResponse, type GrantListParams as GrantListParams };
}
