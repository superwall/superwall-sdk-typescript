// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Applications extends APIResource {
  /**
   * Creates a new application and adds it to the project. Will fail if the project
   * already has an application for that platform. Requires projects:write scope. For
   * web platform, domain is required.
   */
  create(
    id: string,
    body: ApplicationCreateParams,
    options?: RequestOptions,
  ): APIPromise<ApplicationCreateResponse> {
    return this._client.post(path`/v2/projects/${id}/applications`, { body, ...options });
  }

  /**
   * Updates core application identity fields (name, app_id, bundle_id) within a
   * project. Requires applications:write scope.
   */
  update(
    applicationID: string,
    params: ApplicationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ApplicationUpdateResponse> {
    const { id, ...body } = params;
    return this._client.patch(path`/v2/projects/${id}/applications/${applicationID}`, { body, ...options });
  }

  /**
   * Returns overview statistics for the given application and date range within a
   * project. Requires applications:read scope.
   */
  getStatistics(
    applicationID: string,
    params: ApplicationGetStatisticsParams,
    options?: RequestOptions,
  ): APIPromise<ApplicationGetStatisticsResponse> {
    const { id, ...query } = params;
    return this._client.get(path`/v2/projects/${id}/applications/${applicationID}/statistics`, {
      query,
      ...options,
    });
  }

  /**
   * Returns recent transactions for the given application and date range within a
   * project. Requires applications:read scope.
   */
  listRecentTransactions(
    applicationID: string,
    params: ApplicationListRecentTransactionsParams,
    options?: RequestOptions,
  ): APIPromise<ApplicationListRecentTransactionsResponse> {
    const { id, ...query } = params;
    return this._client.get(path`/v2/projects/${id}/applications/${applicationID}/recent-transactions`, {
      query,
      ...options,
    });
  }

  /**
   * Updates platform-scoped application settings. Only settings supported by the
   * application's platform are accepted. Requires applications:write scope.
   */
  updateSettings(
    applicationID: string,
    params: ApplicationUpdateSettingsParams,
    options?: RequestOptions,
  ): APIPromise<ApplicationUpdateSettingsResponse> {
    const { id, ...body } = params;
    return this._client.patch(path`/v2/projects/${id}/applications/${applicationID}/settings`, {
      body,
      ...options,
    });
  }
}

export interface ApplicationCreateResponse {
  /**
   * Unique identifier for the project
   */
  id: string;

  /**
   * List of applications in this project
   */
  applications: Array<ApplicationCreateResponse.Application>;

  /**
   * Whether the project is archived
   */
  archived: boolean;

  /**
   * ISO 8601 timestamp of when the project was created
   */
  created_at: string;

  metadata: { [key: string]: string };

  /**
   * Display name of the project
   */
  name: string;

  /**
   * Object type, always `project`
   */
  object: 'project';

  /**
   * ID of the organization that owns this project
   */
  organization_id: number;

  /**
   * ISO 8601 timestamp of when the project was last updated
   */
  updated_at: string;
}

export namespace ApplicationCreateResponse {
  export interface Application {
    /**
     * Application ID
     */
    id: string;

    /**
     * App Store or Play Store app ID
     */
    app_id: string | null;

    /**
     * ISO 8601 timestamp of when the application was archived, or null if active
     */
    archived_at: string | null;

    /**
     * Bundle identifier (iOS) or package name (Android)
     */
    bundle_id: string | null;

    /**
     * ISO 8601 timestamp of when the application was created
     */
    created_at: string;

    /**
     * List of enabled feature flags for the application
     */
    features_enabled: Array<string>;

    /**
     * Whether the application has been integrated with the SDK
     */
    integrated: boolean;

    /**
     * Display name of the application
     */
    name: string;

    /**
     * Platform of the application
     */
    platform: 'ios' | 'android' | 'flutter' | 'react_native' | 'web';

    /**
     * Public API key for SDK integration
     */
    public_api_key: string;

    /**
     * URL-safe identifier for the application
     */
    slug: string;

    /**
     * ISO 8601 timestamp of when the application was last updated
     */
    updated_at: string;
  }
}

export interface ApplicationUpdateResponse {
  /**
   * Unique identifier for the project
   */
  id: string;

  /**
   * List of applications in this project
   */
  applications: Array<ApplicationUpdateResponse.Application>;

  /**
   * Whether the project is archived
   */
  archived: boolean;

  /**
   * ISO 8601 timestamp of when the project was created
   */
  created_at: string;

  metadata: { [key: string]: string };

  /**
   * Display name of the project
   */
  name: string;

  /**
   * Object type, always `project`
   */
  object: 'project';

  /**
   * ID of the organization that owns this project
   */
  organization_id: number;

  /**
   * ISO 8601 timestamp of when the project was last updated
   */
  updated_at: string;
}

export namespace ApplicationUpdateResponse {
  export interface Application {
    /**
     * Application ID
     */
    id: string;

    /**
     * App Store or Play Store app ID
     */
    app_id: string | null;

    /**
     * ISO 8601 timestamp of when the application was archived, or null if active
     */
    archived_at: string | null;

    /**
     * Bundle identifier (iOS) or package name (Android)
     */
    bundle_id: string | null;

    /**
     * ISO 8601 timestamp of when the application was created
     */
    created_at: string;

    /**
     * List of enabled feature flags for the application
     */
    features_enabled: Array<string>;

    /**
     * Whether the application has been integrated with the SDK
     */
    integrated: boolean;

    /**
     * Display name of the application
     */
    name: string;

    /**
     * Platform of the application
     */
    platform: 'ios' | 'android' | 'flutter' | 'react_native' | 'web';

    /**
     * Public API key for SDK integration
     */
    public_api_key: string;

    /**
     * URL-safe identifier for the application
     */
    slug: string;

    /**
     * ISO 8601 timestamp of when the application was last updated
     */
    updated_at: string;
  }
}

export interface ApplicationGetStatisticsResponse {
  object: 'application_statistics';

  params: ApplicationGetStatisticsResponse.Params;

  statistics: Array<ApplicationGetStatisticsResponse.Statistic>;
}

export namespace ApplicationGetStatisticsResponse {
  export interface Params {
    /**
     * a string to be decoded into a number
     */
    application_id: string;

    environment: 'PRODUCTION' | 'SANDBOX';

    from: string;

    to: string;
  }

  export interface Statistic {
    chart: string;

    description: string;

    key: string;

    name: string;

    value: Statistic.UnionMember0 | Statistic.UnionMember1 | Statistic.UnionMember2 | Statistic.UnionMember3;
  }

  export namespace Statistic {
    export interface UnionMember0 {
      type: 'currency';

      value: number;
    }

    export interface UnionMember1 {
      type: 'number';

      value: number;
    }

    export interface UnionMember2 {
      type: 'percentage';

      value: number;
    }

    export interface UnionMember3 {
      type: 'error';

      value: string;
    }
  }
}

export interface ApplicationListRecentTransactionsResponse {
  data: Array<ApplicationListRecentTransactionsResponse.Data>;

  object: 'list';
}

export namespace ApplicationListRecentTransactionsResponse {
  export interface Data {
    id: string;

    event_type: string;

    integration: string;

    is_processing: boolean;

    object: 'recent_transaction';

    paywall: Data.Paywall | null;

    placement: string | null;

    price: number | null;

    purchased_at: string;

    store: string | null;

    user: Data.User | null;
  }

  export namespace Data {
    export interface Paywall {
      name: string;

      object: 'recent_transaction_paywall';
    }

    export interface User {
      app_user_id: string;

      object: 'recent_transaction_user';
    }
  }
}

export interface ApplicationUpdateSettingsResponse {
  /**
   * Application ID
   */
  application_id: string;

  /**
   * Object type, always `application_settings_update`
   */
  object: 'application_settings_update';

  /**
   * Project ID
   */
  project_id: string;

  /**
   * Whether the settings were updated
   */
  updated: true;
}

export interface ApplicationCreateParams {
  /**
   * Display name of the application
   */
  name: string;

  /**
   * Platform for the application
   */
  platform: 'ios' | 'android' | 'web';

  /**
   * App Store or Play Store app ID
   */
  app_id?: string;

  /**
   * Bundle identifier (iOS) or package name (Android)
   */
  bundle_id?: string;

  /**
   * Domain for web applications
   */
  domain?: string;
}

export interface ApplicationUpdateParams {
  /**
   * Path param: Project ID
   */
  id: string;

  /**
   * Body param: App Store or Play Store app ID
   */
  app_id?: string | null;

  /**
   * Body param: Bundle identifier (iOS) or package name (Android)
   */
  bundle_id?: string | null;

  /**
   * Body param: Display name of the application
   */
  name?: string;
}

export interface ApplicationGetStatisticsParams {
  /**
   * Path param: Project ID
   */
  id: string;

  /**
   * Query param: Environment to query
   */
  environment: 'PRODUCTION' | 'SANDBOX';

  /**
   * Query param: Start datetime
   */
  from: string;

  /**
   * Query param: End datetime
   */
  to: string;
}

export interface ApplicationListRecentTransactionsParams {
  /**
   * Path param: Project ID
   */
  id: string;

  /**
   * Query param: Environment to query
   */
  environment: 'PRODUCTION' | 'SANDBOX';

  /**
   * Query param: Start datetime
   */
  from: string;

  /**
   * Query param: End datetime
   */
  to: string;
}

export interface ApplicationUpdateSettingsParams {
  /**
   * Path param: Project ID
   */
  id: string;

  /**
   * Body param: App Store Connect shared secret
   */
  app_store_connect_shared_secret?: string | null;

  /**
   * Body param: Apple Small Business Program end date (ISO-8601 string)
   */
  apple_small_business_end_date?: string | null;

  /**
   * Body param: Apple Small Business Program start date (ISO-8601 string)
   */
  apple_small_business_start_date?: string | null;

  /**
   * Body param: URL scheme used for deep links on mobile
   */
  apple_url_scheme?: string | null;

  /**
   * Body param: Notification redirect URL for iOS applications
   */
  notification_redirect_url?: string | null;

  /**
   * Body param: RevenueCat public API key
   */
  revenue_cat_public_api_key?: string | null;

  /**
   * Body param: Stripe private key for web/stripe applications
   */
  stripe_private_key?: string | null;
}

export declare namespace Applications {
  export {
    type ApplicationCreateResponse as ApplicationCreateResponse,
    type ApplicationUpdateResponse as ApplicationUpdateResponse,
    type ApplicationGetStatisticsResponse as ApplicationGetStatisticsResponse,
    type ApplicationListRecentTransactionsResponse as ApplicationListRecentTransactionsResponse,
    type ApplicationUpdateSettingsResponse as ApplicationUpdateSettingsResponse,
    type ApplicationCreateParams as ApplicationCreateParams,
    type ApplicationUpdateParams as ApplicationUpdateParams,
    type ApplicationGetStatisticsParams as ApplicationGetStatisticsParams,
    type ApplicationListRecentTransactionsParams as ApplicationListRecentTransactionsParams,
    type ApplicationUpdateSettingsParams as ApplicationUpdateSettingsParams,
  };
}
