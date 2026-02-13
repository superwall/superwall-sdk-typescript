// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ApplicationsAPI from './applications/applications';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Paywalls extends APIResource {
  /**
   * List Paywalls
   */
  retrieve(
    applicationID: string,
    query: PaywallRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaywallRetrieveResponse> {
    return this._client.get(path`/dash-api/v1/paywalls/${applicationID}`, {
      query,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Prepare Paywall Snapshot for Promotion
   */
  prepareSnapshot(
    id: string,
    body: PaywallPrepareSnapshotParams,
    options?: RequestOptions,
  ): APIPromise<PaywallPrepareSnapshotResponse> {
    return this._client.post(path`/dash-api/v1/paywalls/${id}/prepare-snapshot`, {
      body,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  promoteFromSnapshot(
    id: string,
    body: PaywallPromoteFromSnapshotParams,
    options?: RequestOptions,
  ): APIPromise<PaywallPromoteFromSnapshotResponse> {
    return this._client.post(path`/dash-api/v1/paywalls/${id}/promote-from-snapshot`, {
      body,
      ...options,
      __security: { bearerAuth: true },
    });
  }
}

export interface PaywallRetrieveResponse {
  data: Array<PaywallRetrieveResponse.Data>;

  object: 'list';

  pagination: PaywallRetrieveResponse.UnionMember0 | PaywallRetrieveResponse.UnionMember1;
}

export namespace PaywallRetrieveResponse {
  export interface Data {
    /**
     * a string to be decoded into a number
     */
    id: string;

    /**
     * a string to be decoded into a number
     */
    applicationId: string;

    /**
     * a string to be decoded into a Date
     */
    archivedAt: string | null;

    /**
     * a string to be decoded into a Date
     */
    createdAt: string;

    /**
     * The url to open the paywall editor
     */
    editorUrl: string;

    name: string;

    object: 'paywall';

    /**
     * The presentation style of the paywall
     */
    presentationStyle: 'FULLSCREEN' | 'MODAL' | 'PUSH' | 'NO_ANIMATION' | 'DRAWER';

    /**
     * The url to the preview image of the paywall
     */
    previewImageUrl: string | null;

    /**
     * a string to be decoded into a Date
     */
    updatedAt: string;

    /**
     * The actual url fed to the SDK
     */
    url: string;

    v4: boolean;
  }

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

export interface PaywallPrepareSnapshotResponse {
  data: PaywallPrepareSnapshotResponse.Data;

  success: boolean;
}

export namespace PaywallPrepareSnapshotResponse {
  export interface Data {
    snapshotIdentifier: string;
  }
}

export interface PaywallPromoteFromSnapshotResponse {
  version: number;
}

export interface PaywallRetrieveParams {
  /**
   * a string to be decoded into a boolean
   */
  archived?: ApplicationsAPI.BooleanFromString;

  /**
   * A string that is interpreted as being Base64Url-encoded and will be decoded into
   * a UTF-8 string
   */
  cursor?: string;

  /**
   * a string to be decoded into a number
   */
  limit?: string;

  /**
   * A string that is interpreted as being Base64Url-encoded and will be decoded into
   * a UTF-8 string
   */
  orderBy?: string;
}

export interface PaywallPrepareSnapshotParams {
  /**
   * an integer
   */
  applicationId: number;

  snapshot: PaywallPrepareSnapshotParams.Snapshot;

  bypassProductsMissingValues?: boolean;
}

export namespace PaywallPrepareSnapshotParams {
  export interface Snapshot {
    schema: unknown;

    store: unknown;
  }
}

export interface PaywallPromoteFromSnapshotParams {
  /**
   * an integer
   */
  applicationId: number;

  snapshotIdentifier: string;
}

export declare namespace Paywalls {
  export {
    type PaywallRetrieveResponse as PaywallRetrieveResponse,
    type PaywallPrepareSnapshotResponse as PaywallPrepareSnapshotResponse,
    type PaywallPromoteFromSnapshotResponse as PaywallPromoteFromSnapshotResponse,
    type PaywallRetrieveParams as PaywallRetrieveParams,
    type PaywallPrepareSnapshotParams as PaywallPrepareSnapshotParams,
    type PaywallPromoteFromSnapshotParams as PaywallPromoteFromSnapshotParams,
  };
}
