// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Entitlements extends APIResource {
  /**
   * List all manual entitlement grants for an application
   */
  list(body: EntitlementListParams, options?: RequestOptions): APIPromise<EntitlementListResponse> {
    return this._client.post('/dash-api/v1/entitlements/list', {
      body,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Manually grant an entitlement to a user or device
   */
  grant(body: EntitlementGrantParams, options?: RequestOptions): APIPromise<EntitlementGrantResponse> {
    return this._client.post('/dash-api/v1/entitlements/grant', {
      body,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Revoke a previously granted manual entitlement
   */
  revoke(body: EntitlementRevokeParams, options?: RequestOptions): APIPromise<EntitlementRevokeResponse> {
    return this._client.post('/dash-api/v1/entitlements/revoke', {
      body,
      ...options,
      __security: { bearerAuth: true },
    });
  }
}

export type EntitlementListResponse = Array<EntitlementListResponse.EntitlementListResponseItem>;

export namespace EntitlementListResponse {
  export interface EntitlementListResponseItem {
    id: number;

    /**
     * an integer
     */
    applicationId: number;

    deviceId: string;

    /**
     * The identifier for the entitlement
     */
    entitlementId: string;

    /**
     * a string to be decoded into a DateTime.Utc
     */
    grantedAt: string;

    grantedBy: string;

    isActive: boolean;

    /**
     * A unique identifier for a user of the app, supplied by the developer
     */
    appUserId?: string | null;

    /**
     * a string to be decoded into a DateTime.Utc
     */
    expiresAt?: string;

    reason?: string;

    /**
     * a string to be decoded into a DateTime.Utc
     */
    revokedAt?: string;

    revokedBy?: string;
  }
}

export interface EntitlementGrantResponse {
  id: number;
}

export interface EntitlementRevokeResponse {
  success: true;
}

export interface EntitlementListParams {
  /**
   * an integer
   */
  projectId: number;

  /**
   * A unique identifier for a user of the app, supplied by the developer
   */
  appUserId?: string;

  deviceId?: string;

  includeExpired?: boolean;

  includeRevoked?: boolean;
}

export interface EntitlementGrantParams {
  deviceId: string;

  /**
   * The identifier for the entitlement
   */
  entitlementId: string;

  /**
   * an integer
   */
  projectId: number;

  /**
   * A unique identifier for a user of the app, supplied by the developer
   */
  appUserId?: string | null;

  expiresAt?: number;

  reason?: string;
}

export interface EntitlementRevokeParams {
  grantId: number;

  /**
   * an integer
   */
  projectId: number;
}

export declare namespace Entitlements {
  export {
    type EntitlementListResponse as EntitlementListResponse,
    type EntitlementGrantResponse as EntitlementGrantResponse,
    type EntitlementRevokeResponse as EntitlementRevokeResponse,
    type EntitlementListParams as EntitlementListParams,
    type EntitlementGrantParams as EntitlementGrantParams,
    type EntitlementRevokeParams as EntitlementRevokeParams,
  };
}
