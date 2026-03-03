// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from '../users/users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage entitlements and manual grants. An Entitlement represents a feature or capability that can be unlocked for users through product purchases or manual grants.
 */
export class Grants extends APIResource {
  /**
   * Grants an entitlement to a user/device. Requires entitlements:write scope.
   */
  create(id: string, body: GrantCreateParams, options?: RequestOptions): APIPromise<GrantCreateResponse> {
    return this._client.post(path`/v2/entitlements/${id}/grants`, { body, ...options });
  }

  /**
   * Returns a list of manual grants for the specified entitlement. Requires
   * entitlements:read scope.
   */
  list(
    id: string,
    query: GrantListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GrantListResponse> {
    return this._client.get(path`/v2/entitlements/${id}/grants`, { query, ...options });
  }

  /**
   * Revokes a manual grant. Requires entitlements:write scope.
   */
  revoke(
    grantID: string,
    params: GrantRevokeParams,
    options?: RequestOptions,
  ): APIPromise<GrantRevokeResponse> {
    const { id } = params;
    return this._client.delete(path`/v2/entitlements/${id}/grants/${grantID}`, options);
  }
}

export interface GrantCreateResponse {
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
  url: '/v2/entitlements/:id/grants';
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

export interface GrantRevokeResponse {
  /**
   * ID of the revoked grant
   */
  id: string;

  /**
   * Always true for deletion responses
   */
  deleted: true;

  /**
   * Object type, always `entitlement_grant`
   */
  object: 'entitlement_grant';
}

export interface GrantCreateParams {
  /**
   * Device ID to grant the entitlement to
   */
  device_id: string;

  /**
   * ISO 8601 timestamp of when the grant should expire. Omit for permanent grants
   */
  expires_at?: string;

  /**
   * Reason for granting the entitlement
   */
  reason?: string;

  /**
   * User ID to grant the entitlement to
   */
  user_id?: string;
}

export interface GrantListParams {
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
}

export interface GrantRevokeParams {
  /**
   * Entitlement ID
   */
  id: string;
}

export declare namespace Grants {
  export {
    type GrantCreateResponse as GrantCreateResponse,
    type GrantListResponse as GrantListResponse,
    type GrantRevokeResponse as GrantRevokeResponse,
    type GrantCreateParams as GrantCreateParams,
    type GrantListParams as GrantListParams,
    type GrantRevokeParams as GrantRevokeParams,
  };
}
