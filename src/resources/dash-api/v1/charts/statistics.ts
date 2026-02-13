// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Statistics extends APIResource {
  /**
   * Get Statistics Config
   */
  getConfig(options?: RequestOptions): APIPromise<StatisticGetConfigResponse> {
    return this._client.get('/dash-api/v1/charts/statistics/config', {
      ...options,
      __security: { bearerAuth: true },
    });
  }
}

export interface StatisticGetConfigResponse {
  date: StatisticGetConfigResponse.Date;

  environment: StatisticGetConfigResponse.Environment;
}

export namespace StatisticGetConfigResponse {
  export interface Date {
    id: 'date';

    allowsMultiple: boolean;

    name: string;

    options: Array<Date.Option>;
  }

  export namespace Date {
    export interface Option {
      id: string;

      isDefault: boolean;

      label: string;

      value: Option.Value;
    }

    export namespace Option {
      export interface Value {
        id: string;

        /**
         * a string to be decoded into a Date
         */
        from: string;

        /**
         * a string to be decoded into a Date
         */
        to: string;
      }
    }
  }

  export interface Environment {
    id: 'environment';

    allowsMultiple: boolean;

    name: string;

    options: Array<Environment.Option>;
  }

  export namespace Environment {
    export interface Option {
      id: string;

      isDefault: boolean;

      label: string;

      value: string;
    }
  }
}

export declare namespace Statistics {
  export { type StatisticGetConfigResponse as StatisticGetConfigResponse };
}
