// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * User-centric endpoints. These endpoints only require user authentication and do not require organization context.
 */
export class Organizations extends APIResource {
  /**
   * Creates a new organization with the authenticated user as the owner.
   */
  create(body: OrganizationCreateParams, options?: RequestOptions): APIPromise<OrganizationCreateResponse> {
    return this._client.post('/v2/me/organizations', { body, ...options });
  }

  /**
   * Returns a list of organizations the authenticated user is a member of, including
   * their role in each organization.
   */
  list(options?: RequestOptions): APIPromise<OrganizationListResponse> {
    return this._client.get('/v2/me/organizations', options);
  }
}

export interface OrganizationCreateResponse {
  id: string;

  created_at: string;

  name: string;

  object: 'organization';

  role: 'OWNER';
}

export interface OrganizationListResponse {
  data: Array<OrganizationListResponse.Data>;

  object: 'list';
}

export namespace OrganizationListResponse {
  export interface Data {
    id: string;

    name: string;

    role: 'OWNER' | 'ADMIN' | 'USER' | 'EDITOR' | 'READER' | 'ANALYST';
  }
}

export interface OrganizationCreateParams {
  /**
   * a string at least 1 character(s) long
   */
  name: string;
}

export declare namespace Organizations {
  export {
    type OrganizationCreateResponse as OrganizationCreateResponse,
    type OrganizationListResponse as OrganizationListResponse,
    type OrganizationCreateParams as OrganizationCreateParams,
  };
}
