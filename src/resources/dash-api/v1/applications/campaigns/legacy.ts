// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Legacy extends APIResource {
  /**
   * Get Campaign Stats
   *
   * @deprecated
   */
  retrieveStatistics(
    applicationID: string,
    query: LegacyRetrieveStatisticsParams,
    options?: RequestOptions,
  ): APIPromise<LegacyRetrieveStatisticsResponse> {
    return this._client.get(path`/dash-api/v1/applications/${applicationID}/campaigns/legacy/statistics`, {
      query,
      ...options,
      __security: { bearerAuth: true },
    });
  }
}

export interface LegacyRetrieveStatisticsResponse {
  data: { [key: string]: LegacyRetrieveStatisticsResponse.Data };

  params: unknown;
}

export namespace LegacyRetrieveStatisticsResponse {
  export interface Data {
    campaignId: string;

    grossProceeds: Data.GrossProceeds;

    paywallConvRate: Data.PaywallConvRate;

    paywallUsers: Data.PaywallUsers;

    transactionCompletes: Data.TransactionCompletes;
  }

  export namespace Data {
    export interface GrossProceeds {
      currency?: number;

      error?: string;

      number?: number;

      percentage?: number;
    }

    export interface PaywallConvRate {
      currency?: number;

      error?: string;

      number?: number;

      percentage?: number;
    }

    export interface PaywallUsers {
      currency?: number;

      error?: string;

      number?: number;

      percentage?: number;
    }

    export interface TransactionCompletes {
      currency?: number;

      error?: string;

      number?: number;

      percentage?: number;
    }
  }
}

export interface LegacyRetrieveStatisticsParams {
  environment: 'PRODUCTION' | 'SANDBOX';

  from: string;

  /**
   * a string to be decoded into a number
   */
  organizationId: string;

  to: string;
}

export declare namespace Legacy {
  export {
    type LegacyRetrieveStatisticsResponse as LegacyRetrieveStatisticsResponse,
    type LegacyRetrieveStatisticsParams as LegacyRetrieveStatisticsParams,
  };
}
