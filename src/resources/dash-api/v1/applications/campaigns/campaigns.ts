// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as ApplicationsAPI from '../applications';
import * as LegacyAPI from './legacy';
import { Legacy, LegacyRetrieveStatisticsParams, LegacyRetrieveStatisticsResponse } from './legacy';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Campaigns extends APIResource {
  legacy: LegacyAPI.Legacy = new LegacyAPI.Legacy(this._client);

  /**
   * List Campaigns
   */
  list(
    applicationID: string,
    query: CampaignListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CampaignListResponse> {
    return this._client.get(path`/dash-api/v1/applications/${applicationID}/campaigns`, {
      query,
      ...options,
      __security: { bearerAuth: true },
    });
  }
}

export interface CampaignListResponse {
  data: Array<CampaignListResponse.Data>;

  object: 'list';

  pagination: CampaignListResponse.UnionMember0 | CampaignListResponse.UnionMember1;
}

export namespace CampaignListResponse {
  export interface Data {
    /**
     * a string to be decoded into a number
     */
    id: string;

    /**
     * a string to be decoded into a number
     */
    applicationId: string;

    audiences: Array<Data.Audience>;

    description: string | null;

    object: 'campaign';

    triggers: Array<Data.Trigger>;
  }

  export namespace Data {
    export interface Audience {
      /**
       * a string to be decoded into a number
       */
      id: string;

      /**
       * a string to be decoded into a number
       */
      campaignId: string;

      /**
       * a string to be decoded into a number
       */
      experimentId: string;

      expression: string | null;

      object: 'audience';

      variants: Array<Audience.UnionMember0 | Audience.UnionMember1>;
    }

    export namespace Audience {
      export interface UnionMember0 {
        /**
         * a string to be decoded into a number
         */
        id: string;

        /**
         * a string to be decoded into a number
         */
        experimentId: string;

        object: 'variant';

        /**
         * a string to be decoded into a number
         */
        paywallId: string;

        percentage: number;

        type: 'PAYWALL';

        variantType: 'TREATMENT';
      }

      export interface UnionMember1 {
        /**
         * a string to be decoded into a number
         */
        id: string;

        /**
         * a string to be decoded into a number
         */
        experimentId: string;

        object: 'variant';

        percentage: number;

        type: 'NONE';

        variantType: 'HOLDOUT';
      }
    }

    export interface Trigger {
      /**
       * a string to be decoded into a number
       */
      id: string;

      /**
       * a string to be decoded into a number
       */
      campaignId: string;

      enabled: boolean;

      eventName: string;

      object: 'trigger';
    }
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

export interface CampaignListParams {
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
}

Campaigns.Legacy = Legacy;

export declare namespace Campaigns {
  export { type CampaignListResponse as CampaignListResponse, type CampaignListParams as CampaignListParams };

  export {
    Legacy as Legacy,
    type LegacyRetrieveStatisticsResponse as LegacyRetrieveStatisticsResponse,
    type LegacyRetrieveStatisticsParams as LegacyRetrieveStatisticsParams,
  };
}
