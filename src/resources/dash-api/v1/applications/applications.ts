// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as LegacyAPI from './legacy';
import {
  Legacy,
  LegacyGetRecentTransactionsParams,
  LegacyGetRecentTransactionsResponse,
  LegacyGetStatsParams,
  LegacyGetStatsResponse,
} from './legacy';
import * as CampaignsAPI from './campaigns/campaigns';
import { CampaignListParams, CampaignListResponse, Campaigns } from './campaigns/campaigns';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Applications extends APIResource {
  campaigns: CampaignsAPI.Campaigns = new CampaignsAPI.Campaigns(this._client);
  legacy: LegacyAPI.Legacy = new LegacyAPI.Legacy(this._client);

  /**
   * Create Application
   */
  create(body: ApplicationCreateParams, options?: RequestOptions): APIPromise<ApplicationModel> {
    return this._client.post('/dash-api/v1/applications', {
      body,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * List Applications
   */
  list(
    query: ApplicationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ApplicationListResponse> {
    return this._client.get('/dash-api/v1/applications', {
      query,
      ...options,
      __security: { bearerAuth: true },
    });
  }
}

export interface ApplicationModel {
  /**
   * a string to be decoded into a number
   */
  id: string;

  /**
   * a string to be decoded into a Date
   */
  createdAt: string;

  iconUrl: string;

  name: string | null;

  object: 'application';

  /**
   * a string to be decoded into a number
   */
  organizationId: string;

  platform: ApplicationModel.Platform;

  appId?: string | null;

  projectId?: string | null;
}

export namespace ApplicationModel {
  export interface Platform {
    android?: true;

    ios?: true;

    paddle?: true;

    promotional?: true;

    stripe?: true;

    unknown?: true;
  }
}

/**
 * a string to be decoded into a boolean
 */
export type BooleanFromString = 'true' | 'false';

export interface ApplicationListResponse {
  data: Array<ApplicationModel>;

  object: 'list';

  pagination: ApplicationListResponse.UnionMember0 | ApplicationListResponse.UnionMember1;
}

export namespace ApplicationListResponse {
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

export type ApplicationCreateParams = ApplicationCreateParams.Variant0 | ApplicationCreateParams.Variant1;

export declare namespace ApplicationCreateParams {
  export interface Variant0 {
    iconUrl: string;

    name: string | null;

    /**
     * a string to be decoded into a number
     */
    organizationId: string;

    platform: 'IOS' | 'ANDROID' | 'UNKNOWN' | 'PROMOTIONAL';

    appId?: string | null;

    marketingMetadata?: { [key: string]: unknown };
  }

  export interface Variant1 {
    domain: string;

    iconUrl: string;

    name: string | null;

    /**
     * a string to be decoded into a number
     */
    organizationId: string;

    platform: 'STRIPE' | 'PADDLE';

    appId?: string | null;

    marketingMetadata?: { [key: string]: unknown };
  }
}

export interface ApplicationListParams {
  /**
   * a string to be decoded into a boolean
   */
  archived?: BooleanFromString;

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

Applications.Campaigns = Campaigns;
Applications.Legacy = Legacy;

export declare namespace Applications {
  export {
    type ApplicationModel as ApplicationModel,
    type BooleanFromString as BooleanFromString,
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationCreateParams as ApplicationCreateParams,
    type ApplicationListParams as ApplicationListParams,
  };

  export {
    Campaigns as Campaigns,
    type CampaignListResponse as CampaignListResponse,
    type CampaignListParams as CampaignListParams,
  };

  export {
    Legacy as Legacy,
    type LegacyGetRecentTransactionsResponse as LegacyGetRecentTransactionsResponse,
    type LegacyGetStatsResponse as LegacyGetStatsResponse,
    type LegacyGetRecentTransactionsParams as LegacyGetRecentTransactionsParams,
    type LegacyGetStatsParams as LegacyGetStatsParams,
  };
}
