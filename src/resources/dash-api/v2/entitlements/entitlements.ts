// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as GrantsAPI from './grants';
import {
  GrantCreateParams,
  GrantCreateResponse,
  GrantDeleteParams,
  GrantDeleteResponse,
  GrantListParams,
  GrantListResponse,
  Grants,
} from './grants';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Entitlements extends APIResource {
  grants: GrantsAPI.Grants = new GrantsAPI.Grants(this._client);

  /**
   * Creates a new entitlement in the specified application. Requires
   * entitlements:write scope.
   */
  create(body: EntitlementCreateParams, options?: RequestOptions): APIPromise<EntitlementCreateResponse> {
    return this._client.post('/dash-api/v2/entitlements', { body, ...options });
  }

  /**
   * Retrieves an entitlement by ID. Requires entitlements:read scope.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EntitlementRetrieveResponse> {
    return this._client.get(path`/dash-api/v2/entitlements/${id}`, options);
  }

  /**
   * Updates an entitlement's name, description, products, or metadata. Requires
   * entitlements:write scope.
   */
  update(
    id: string,
    body: EntitlementUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EntitlementUpdateResponse> {
    return this._client.patch(path`/dash-api/v2/entitlements/${id}`, { body, ...options });
  }

  /**
   * Returns a list of entitlements for the specified project. Requires
   * entitlements:read scope. The `project_id` query parameter is required.
   */
  list(query: EntitlementListParams, options?: RequestOptions): APIPromise<EntitlementListResponse> {
    return this._client.get('/dash-api/v2/entitlements', { query, ...options });
  }

  /**
   * Deletes an entitlement. Requires entitlements:write scope.
   */
  delete(id: string, options?: RequestOptions): APIPromise<EntitlementDeleteResponse> {
    return this._client.delete(path`/dash-api/v2/entitlements/${id}`, options);
  }
}

export interface EntitlementCreateResponse {
  /**
   * Unique identifier for the entitlement
   */
  id: string;

  /**
   * ISO 8601 timestamp of when the entitlement was created
   */
  created_at: string;

  /**
   * Description of the entitlement, or null
   */
  description: string | null;

  /**
   * Unique identifier string for the entitlement
   */
  identifier: string;

  metadata: unknown;

  /**
   * Display name of the entitlement, or null
   */
  name: string | null;

  /**
   * Object type, always `entitlement`
   */
  object: 'entitlement';

  /**
   * List of product IDs that grant this entitlement
   */
  products: Array<string>;

  /**
   * ID of the project this entitlement belongs to
   */
  project_id: string;

  /**
   * ISO 8601 timestamp of when the entitlement was last updated
   */
  updated_at: string;
}

export interface EntitlementRetrieveResponse {
  /**
   * Unique identifier for the entitlement
   */
  id: string;

  /**
   * ISO 8601 timestamp of when the entitlement was created
   */
  created_at: string;

  /**
   * Description of the entitlement, or null
   */
  description: string | null;

  /**
   * Unique identifier string for the entitlement
   */
  identifier: string;

  metadata: unknown;

  /**
   * Display name of the entitlement, or null
   */
  name: string | null;

  /**
   * Object type, always `entitlement`
   */
  object: 'entitlement';

  /**
   * List of product IDs that grant this entitlement
   */
  products: Array<string>;

  /**
   * ID of the project this entitlement belongs to
   */
  project_id: string;

  /**
   * ISO 8601 timestamp of when the entitlement was last updated
   */
  updated_at: string;
}

export interface EntitlementUpdateResponse {
  /**
   * Unique identifier for the entitlement
   */
  id: string;

  /**
   * ISO 8601 timestamp of when the entitlement was created
   */
  created_at: string;

  /**
   * Description of the entitlement, or null
   */
  description: string | null;

  /**
   * Unique identifier string for the entitlement
   */
  identifier: string;

  metadata: unknown;

  /**
   * Display name of the entitlement, or null
   */
  name: string | null;

  /**
   * Object type, always `entitlement`
   */
  object: 'entitlement';

  /**
   * List of product IDs that grant this entitlement
   */
  products: Array<string>;

  /**
   * ID of the project this entitlement belongs to
   */
  project_id: string;

  /**
   * ISO 8601 timestamp of when the entitlement was last updated
   */
  updated_at: string;
}

export interface EntitlementListResponse {
  /**
   * List of results
   */
  data: Array<EntitlementListResponse.Data>;

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
  url: '/v2/entitlements';
}

export namespace EntitlementListResponse {
  export interface Data {
    /**
     * Unique identifier for the entitlement
     */
    id: string;

    /**
     * ISO 8601 timestamp of when the entitlement was created
     */
    created_at: string;

    /**
     * Description of the entitlement, or null
     */
    description: string | null;

    /**
     * Unique identifier string for the entitlement
     */
    identifier: string;

    metadata: unknown;

    /**
     * Display name of the entitlement, or null
     */
    name: string | null;

    /**
     * Object type, always `entitlement`
     */
    object: 'entitlement';

    /**
     * List of product IDs that grant this entitlement
     */
    products: Array<string>;

    /**
     * ID of the project this entitlement belongs to
     */
    project_id: string;

    /**
     * ISO 8601 timestamp of when the entitlement was last updated
     */
    updated_at: string;
  }
}

export interface EntitlementDeleteResponse {
  /**
   * ID of the deleted entitlement
   */
  id: string;

  /**
   * Always true for deletion responses
   */
  deleted: true;

  /**
   * Object type, always `entitlement`
   */
  object: 'entitlement';
}

export interface EntitlementCreateParams {
  /**
   * Unique identifier string for the entitlement
   */
  identifier: string;

  /**
   * ID of the project to create the entitlement in
   */
  project_id: string;

  description?: string;

  metadata?: unknown;

  /**
   * a string at most 255 character(s) long
   */
  name?: string;

  /**
   * List of product IDs that grant this entitlement
   */
  products?: Array<string>;
}

export interface EntitlementUpdateParams {
  /**
   * Description of the entitlement
   */
  description?: string;

  /**
   * Arbitrary key-value metadata to attach to the entitlement
   */
  metadata?: unknown;

  /**
   * Display name of the entitlement
   */
  name?: string;

  /**
   * List of product IDs that grant this entitlement
   */
  products?: Array<string>;
}

export interface EntitlementListParams {
  /**
   * Filter by project ID (required)
   */
  project_id: string;

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

Entitlements.Grants = Grants;

export declare namespace Entitlements {
  export {
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
    Grants as Grants,
    type GrantCreateResponse as GrantCreateResponse,
    type GrantListResponse as GrantListResponse,
    type GrantDeleteResponse as GrantDeleteResponse,
    type GrantCreateParams as GrantCreateParams,
    type GrantListParams as GrantListParams,
    type GrantDeleteParams as GrantDeleteParams,
  };
}
