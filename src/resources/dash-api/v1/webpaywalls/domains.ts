// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Domains extends APIResource {
  /**
   * List Web Paywall Domains
   */
  list(
    applicationID: string,
    query: DomainListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DomainListResponse> {
    return this._client.get(path`/dash-api/v1/webpaywalls/${applicationID}/domains`, {
      query,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Add Web Paywall Domain
   */
  add(
    applicationID: string,
    body: DomainAddParams,
    options?: RequestOptions,
  ): APIPromise<WebPaywallDomainModel> {
    return this._client.post(path`/dash-api/v1/webpaywalls/${applicationID}/domains`, {
      body,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Check Web Paywall Domain Availability
   */
  checkAvailability(
    domain: string,
    params: DomainCheckAvailabilityParams,
    options?: RequestOptions,
  ): APIPromise<DomainCheckAvailabilityResponse> {
    const { applicationId } = params;
    return this._client.get(path`/dash-api/v1/webpaywalls/${applicationId}/domains/${domain}`, {
      ...options,
      __security: { bearerAuth: true },
    });
  }
}

export interface WebPaywallDomainModel {
  baseDomain: string;

  /**
   * a string to be decoded into a Date
   */
  createdAt: string;

  /**
   * a string to be decoded into a Date
   */
  deletedAt: string | null;

  domain: string | null;

  object: 'web_paywall_domain';
}

export interface DomainListResponse {
  data: Array<WebPaywallDomainModel>;

  object: 'list';

  pagination: DomainListResponse.UnionMember0 | DomainListResponse.UnionMember1;
}

export namespace DomainListResponse {
  export interface UnionMember0 {
    /**
     * A string that is interpreted as being Base64Url-encoded and will be decoded into
     * a UTF-8 string
     */
    cursor: string;

    hasMore: true;
  }

  export interface UnionMember1 {
    cursor: null;

    hasMore: false;
  }
}

export interface DomainCheckAvailabilityResponse {
  available: boolean;
}

export interface DomainListParams {
  /**
   * A string that is interpreted as being Base64Url-encoded and will be decoded into
   * a UTF-8 string
   */
  cursor?: string;

  /**
   * a string to be decoded into a number
   */
  limit?: string;
}

export interface DomainAddParams {
  domain: string;
}

export interface DomainCheckAvailabilityParams {
  /**
   * a string to be decoded into a number
   */
  applicationId: string;
}

export declare namespace Domains {
  export {
    type WebPaywallDomainModel as WebPaywallDomainModel,
    type DomainListResponse as DomainListResponse,
    type DomainCheckAvailabilityResponse as DomainCheckAvailabilityResponse,
    type DomainListParams as DomainListParams,
    type DomainAddParams as DomainAddParams,
    type DomainCheckAvailabilityParams as DomainCheckAvailabilityParams,
  };
}
