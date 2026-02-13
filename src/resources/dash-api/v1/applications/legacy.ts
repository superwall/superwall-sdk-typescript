// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Legacy extends APIResource {
  /**
   * Get Recent Transactions
   *
   * @deprecated
   */
  getRecentTransactions(
    applicationID: string,
    query: LegacyGetRecentTransactionsParams,
    options?: RequestOptions,
  ): APIPromise<LegacyGetRecentTransactionsResponse> {
    return this._client.get(path`/dash-api/v1/applications/${applicationID}/legacy/transactions`, {
      query,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Get Application Stats
   *
   * @deprecated
   */
  getStats(
    applicationID: string,
    query: LegacyGetStatsParams,
    options?: RequestOptions,
  ): APIPromise<LegacyGetStatsResponse> {
    return this._client.get(path`/dash-api/v1/applications/${applicationID}/legacy/statistics`, {
      query,
      ...options,
      __security: { bearerAuth: true },
    });
  }
}

export interface LegacyGetRecentTransactionsResponse {
  data: Array<LegacyGetRecentTransactionsResponse.Data>;

  object: 'list';
}

export namespace LegacyGetRecentTransactionsResponse {
  export interface Data {
    id: string;

    integration: string;

    isProcessing: boolean;

    object: 'recent_transaction';

    paywall: Data.Paywall | null;

    placement: string | null;

    price: number | null;

    /**
     * a string to be decoded into a Date
     */
    purchasedAt: string;

    store: string | null;

    type: string;

    user: Data.User | null;
  }

  export namespace Data {
    export interface Paywall {
      name: string;

      object: 'recent_transaction.paywall';
    }

    export interface User {
      appUserId: string;

      object: 'recent_transaction.user';
    }
  }
}

export interface LegacyGetStatsResponse {
  object: 'statistics';

  params: LegacyGetStatsResponse.Params;

  statistics: Array<LegacyGetStatsResponse.Statistic>;
}

export namespace LegacyGetStatsResponse {
  export interface Params {
    applicationId: Array<string>;

    environment: Array<'PRODUCTION' | 'SANDBOX'>;

    from: string;

    /**
     * a string to be decoded into a number
     */
    organizationId: string;

    to: string;
  }

  export interface Statistic {
    id: string;

    chart: string;

    description: string;

    key: string;

    name: string;

    value: Statistic.Value;
  }

  export namespace Statistic {
    export interface Value {
      currency?: number;

      error?: string;

      number?: number;

      percentage?: number;
    }
  }
}

export interface LegacyGetRecentTransactionsParams {
  environment: 'PRODUCTION' | 'SANDBOX';

  from: string;

  /**
   * a string to be decoded into a number
   */
  organizationId: string;

  to: string;
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
    type LegacyGetRecentTransactionsResponse as LegacyGetRecentTransactionsResponse,
    type LegacyGetStatsResponse as LegacyGetStatsResponse,
    type LegacyGetRecentTransactionsParams as LegacyGetRecentTransactionsParams,
    type LegacyGetStatsParams as LegacyGetStatsParams,
  };
}
