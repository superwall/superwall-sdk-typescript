// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Charts extends APIResource {
  /**
   * Returns available chart definitions including y-axis metrics, x-axis dimensions,
   * breakdowns, filters, and date presets. This is static configuration data.
   * Requires charts:read scope.
   */
  getDefinitions(
    query: ChartGetDefinitionsParams,
    options?: RequestOptions,
  ): APIPromise<ChartGetDefinitionsResponse> {
    return this._client.get('/v2/charts/definitions', { query, ...options });
  }

  /**
   * Queries chart data from ClickHouse based on the provided parameters. Returns
   * time series data with optional breakdowns and filters. Requires charts:read
   * scope.
   */
  queryData(body: ChartQueryDataParams, options?: RequestOptions): APIPromise<ChartQueryDataResponse> {
    return this._client.post('/v2/charts/data', { body, ...options });
  }
}

export interface ChartGetDefinitionsResponse {
  /**
   * Available breakdown dimensions
   */
  breakdowns: Array<ChartGetDefinitionsResponse.Breakdown>;

  /**
   * Available chart types
   */
  chart_types: Array<ChartGetDefinitionsResponse.ChartType>;

  /**
   * Available date intervals
   */
  date_intervals: Array<ChartGetDefinitionsResponse.DateInterval>;

  /**
   * Available date presets
   */
  date_presets: Array<
    | 'last_24_hours'
    | 'today'
    | 'yesterday'
    | 'last_7_days'
    | 'last_30_days'
    | 'last_90_days'
    | 'last_180_days'
    | 'last_365_days'
    | 'year_to_date'
    | 'custom'
  >;

  /**
   * Available filters
   */
  filters: Array<ChartGetDefinitionsResponse.Filter>;

  /**
   * Object type, always `chart_definitions`
   */
  object: 'chart_definitions';

  /**
   * Available x-axis dimensions
   */
  x_axis: Array<ChartGetDefinitionsResponse.XAxi>;

  /**
   * Available y-axis metrics
   */
  y_axis: Array<ChartGetDefinitionsResponse.YAxi>;
}

export namespace ChartGetDefinitionsResponse {
  export interface Breakdown {
    /**
     * Whether this breakdown is currently active
     */
    active: boolean;

    /**
     * Description of the breakdown
     */
    description: string;

    /**
     * Breakdown key
     */
    key: string;

    /**
     * Display name
     */
    name: string;

    /**
     * Value type of the breakdown
     */
    value_type: 'string' | 'date';

    /**
     * Group this breakdown belongs to
     */
    group?: string;
  }

  export interface ChartType {
    /**
     * Default date dimension
     */
    date_dimension: 'purchaseDate' | 'installDate' | 'firstPurchaseDate' | 'tsDate' | 'mrrDate';

    /**
     * Description of the chart type
     */
    description: string;

    /**
     * Additional metrics included by default
     */
    include: Array<string>;

    /**
     * Chart type key
     */
    key: string;

    /**
     * Display name
     */
    name: string;

    /**
     * Default x-axis dimension
     */
    x_axis: string;

    /**
     * Default y-axis metric
     */
    y_axis: string;

    /**
     * Default breakdown dimension
     */
    default_breakdown?: string;

    /**
     * Default visualization type
     */
    default_chart_type?: 'line' | 'stackedArea' | 'bar' | 'stackedBar';

    /**
     * Group this chart type belongs to
     */
    group?: string;
  }

  export interface DateInterval {
    /**
     * Description of the interval
     */
    description: string;

    /**
     * Interval key
     */
    key: 'auto' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'totals';

    /**
     * Display name
     */
    name: string;
  }

  export interface Filter {
    /**
     * Whether this filter is currently active
     */
    active: boolean;

    /**
     * Description of the filter
     */
    description: string;

    /**
     * Filter key
     */
    key: string;

    /**
     * Display name
     */
    name: string;

    /**
     * Value type of the filter
     */
    value_type: 'string' | 'date';
  }

  export interface XAxi {
    /**
     * Description of the dimension
     */
    description: string;

    /**
     * Dimension key
     */
    key: string;

    /**
     * Display name
     */
    name: string;

    /**
     * Value type of the dimension
     */
    value_type: 'date' | 'string';
  }

  export interface YAxi {
    /**
     * Description of the metric
     */
    description: string;

    /**
     * Metric key
     */
    key: string;

    /**
     * Display name
     */
    name: string;

    /**
     * How to format the value
     */
    value_type: 'number' | 'percentage' | 'currency';
  }
}

export interface ChartQueryDataResponse {
  /**
   * Available breakdowns
   */
  breakdowns: Array<ChartQueryDataResponse.Breakdown>;

  /**
   * Chart data points
   */
  data: Array<ChartQueryDataResponse.Data>;

  /**
   * Date filter definitions
   */
  date_filters: Array<ChartQueryDataResponse.DateFilter>;

  /**
   * Request timing information
   */
  duration: ChartQueryDataResponse.Duration;

  /**
   * Enriched metadata for the response
   */
  enriched_data: { [key: string]: string };

  /**
   * Available filters
   */
  filters: Array<ChartQueryDataResponse.Filter>;

  /**
   * Object type, always `chart_data`
   */
  object: 'chart_data';

  /**
   * Unique identifier for this request
   */
  request_id: string;

  /**
   * List of data series in the response
   */
  series: Array<ChartQueryDataResponse.Series>;

  /**
   * X-axis definition
   */
  x_axis: ChartQueryDataResponse.XAxis;

  /**
   * Y-axis definition
   */
  y_axis: ChartQueryDataResponse.YAxis;
}

export namespace ChartQueryDataResponse {
  export interface Breakdown {
    /**
     * Whether this breakdown is currently active
     */
    active: boolean;

    /**
     * Description of the breakdown
     */
    description: string;

    /**
     * Breakdown key
     */
    key: string;

    /**
     * Display name
     */
    name: string;

    /**
     * Value type of the breakdown
     */
    value_type: 'string' | 'date';

    /**
     * Group this breakdown belongs to
     */
    group?: string;
  }

  export interface Data {
    /**
     * Whether this data point represents an incomplete period
     */
    incomplete: boolean;

    /**
     * Values keyed by series key
     */
    values: { [key: string]: Data.Values };

    /**
     * X-axis value (typically a date string)
     */
    x: string;
  }

  export namespace Data {
    export interface Values {
      /**
       * Additional metric values
       */
      extra: { [key: string]: number };

      /**
       * Y-axis value
       */
      y: number;
    }
  }

  export interface DateFilter {
    /**
     * Whether this date filter is active
     */
    active: boolean;

    /**
     * Display name of the date filter
     */
    name: string;

    /**
     * Active preset
     */
    preset:
      | 'last_24_hours'
      | 'today'
      | 'yesterday'
      | 'last_7_days'
      | 'last_30_days'
      | 'last_90_days'
      | 'last_180_days'
      | 'last_365_days'
      | 'year_to_date'
      | 'custom';

    /**
     * Resolved date range
     */
    range: DateFilter.Range;
  }

  export namespace DateFilter {
    /**
     * Resolved date range
     */
    export interface Range {
      /**
       * Start date (ISO 8601)
       */
      from: string;

      /**
       * End date (ISO 8601)
       */
      to: string;
    }
  }

  /**
   * Request timing information
   */
  export interface Duration {
    /**
     * Total request duration in milliseconds
     */
    duration_ms: number;

    /**
     * Request end time in milliseconds
     */
    end_time: number;

    /**
     * Request start time in milliseconds
     */
    start_time: number;
  }

  export interface Filter {
    /**
     * Whether this filter is currently active
     */
    active: boolean;

    /**
     * Description of the filter
     */
    description: string;

    /**
     * Filter key
     */
    key: string;

    /**
     * Display name
     */
    name: string;

    /**
     * Value type of the filter
     */
    value_type: 'string' | 'date';
  }

  export interface Series {
    /**
     * Breakdown dimension key
     */
    breakdown: string;

    /**
     * Series key value, or null
     */
    key: string | null;
  }

  /**
   * X-axis definition
   */
  export interface XAxis {
    /**
     * Description of the dimension
     */
    description: string;

    /**
     * Dimension key
     */
    key: string;

    /**
     * Display name
     */
    name: string;

    /**
     * Value type of the dimension
     */
    value_type: 'date' | 'string';
  }

  /**
   * Y-axis definition
   */
  export interface YAxis {
    /**
     * Description of the metric
     */
    description: string;

    /**
     * Metric key
     */
    key: string;

    /**
     * Display name
     */
    name: string;

    /**
     * How to format the value
     */
    value_type: 'number' | 'percentage' | 'currency';
  }
}

export interface ChartGetDefinitionsParams {
  /**
   * Application ID (required for org resolution)
   */
  application_id: string;
}

export interface ChartQueryDataParams {
  /**
   * Application ID to query data for
   */
  application_id: string;

  /**
   * X-axis dimension (e.g. `purchaseDate`, `installDate`)
   */
  x_axis: string;

  /**
   * Y-axis metric to display (e.g. `netProceeds`, `newUsers`, `trialConversionRate`)
   */
  y_axis: string;

  /**
   * Filter by app version
   */
  app_version?: Array<string>;

  /**
   * Filter by auto renew status
   */
  auto_renew_status?: Array<string>;

  /**
   * Optional breakdown dimension (e.g. `countryCode`, `placement`)
   */
  breakdown?: string | null;

  /**
   * Filter by campaign IDs
   */
  campaign_id?: Array<string>;

  /**
   * Conversion timeframe for SDK events
   */
  conversion_timeframe?: 'd1' | 'd3' | 'd7' | 'd14' | 'd30' | 'd90';

  /**
   * Filter by country codes
   */
  country_code?: Array<string>;

  /**
   * Date filter configuration
   */
  date_filter?: ChartQueryDataParams.DateFilter;

  /**
   * Date interval for grouping (hour, day, week, month, quarter, year)
   */
  date_interval?: 'auto' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'totals';

  /**
   * Filter by environment (SANDBOX, PRODUCTION)
   */
  environment?: Array<string>;

  /**
   * Filter by event type
   */
  event_type?: Array<string>;

  /**
   * Filter by experiment IDs
   */
  experiment_id?: Array<string>;

  /**
   * Additional y-axis metrics to include in the response
   */
  include?: Array<string>;

  /**
   * Maximum number of data points to return (default: 1000)
   */
  max_data_points?: number;

  /**
   * Filter by paywall IDs
   */
  paywall_id?: Array<string>;

  /**
   * Filter by placements
   */
  placement?: Array<string>;

  /**
   * Filter by product duration
   */
  product_duration?: Array<string>;

  /**
   * Filter by product IDs
   */
  product_id?: Array<string>;

  /**
   * Filter by revenue source (Superwall, Your App)
   */
  revenue_source?: Array<string>;

  /**
   * Filter by revenue type
   */
  revenue_type?: Array<string>;

  /**
   * Filter by SDK version
   */
  sdk_version?: Array<string>;

  /**
   * Filter by store (APP_STORE, PLAY_STORE, STRIPE)
   */
  store?: Array<string>;

  /**
   * Filter by subscription start type
   */
  sub_start_type?: Array<string>;

  /**
   * Filter by variant IDs
   */
  variant_id?: Array<string>;
}

export namespace ChartQueryDataParams {
  /**
   * Date filter configuration
   */
  export interface DateFilter {
    /**
     * Date dimension to filter on
     */
    dimension: 'purchaseDate' | 'installDate' | 'firstPurchaseDate' | 'tsDate' | 'mrrDate';

    /**
     * Preset date range
     */
    preset?:
      | 'last_24_hours'
      | 'today'
      | 'yesterday'
      | 'last_7_days'
      | 'last_30_days'
      | 'last_90_days'
      | 'last_180_days'
      | 'last_365_days'
      | 'year_to_date'
      | 'custom';

    /**
     * Custom date range (required when preset is `custom`)
     */
    range?: DateFilter.Range;
  }

  export namespace DateFilter {
    /**
     * Custom date range (required when preset is `custom`)
     */
    export interface Range {
      /**
       * Start date (ISO 8601)
       */
      from: string;

      /**
       * End date (ISO 8601)
       */
      to: string;
    }
  }
}

export declare namespace Charts {
  export {
    type ChartGetDefinitionsResponse as ChartGetDefinitionsResponse,
    type ChartQueryDataResponse as ChartQueryDataResponse,
    type ChartGetDefinitionsParams as ChartGetDefinitionsParams,
    type ChartQueryDataParams as ChartQueryDataParams,
  };
}
