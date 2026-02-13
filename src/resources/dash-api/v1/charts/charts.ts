// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as StatisticsAPI from './statistics';
import { StatisticRetrieveConfigResponse, Statistics } from './statistics';

export class Charts extends APIResource {
  statistics: StatisticsAPI.Statistics = new StatisticsAPI.Statistics(this._client);
}

Charts.Statistics = Statistics;

export declare namespace Charts {
  export {
    Statistics as Statistics,
    type StatisticRetrieveConfigResponse as StatisticRetrieveConfigResponse,
  };
}
