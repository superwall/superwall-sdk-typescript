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
  getStats(
    applicationID: string,
    query: LegacyGetStatsParams,
    options?: RequestOptions,
  ): APIPromise<LegacyGetStatsResponse> {
    return this._client.get(path`/dash-api/v1/applications/${applicationID}/campaigns/legacy/statistics`, {
      query,
      ...options,
      __security: { bearerAuth: true },
    });
  }
}

export interface LegacyGetStatsResponse {
  data: { [key: string]: LegacyGetStatsResponse.Data };

  params: unknown;
}

export namespace LegacyGetStatsResponse {
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

export interface LegacyGetStatsParams {
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
    type LegacyGetStatsResponse as LegacyGetStatsResponse,
    type LegacyGetStatsParams as LegacyGetStatsParams,
  };
}
