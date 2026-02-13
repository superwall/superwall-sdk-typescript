// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ApplicationsAPI from '../../v1/applications/applications';
import * as EventsAPI from './events';
import {
  EventListParams,
  EventListResponse,
  EventRetrieveParams,
  EventRetrieveResponse,
  Events,
} from './events';
import * as TestModeAPI from './test-mode';
import {
  TestMode,
  TestModeRetrieveTestModeParams,
  TestModeRetrieveTestModeResponse,
  TestModeUpdateTestModeParams,
  TestModeUpdateTestModeResponse,
} from './test-mode';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Users extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  testMode: TestModeAPI.TestMode = new TestModeAPI.TestMode(this._client);

  /**
   * Query Users
   */
  query(body: UserQueryParams, options?: RequestOptions): APIPromise<UserQueryResponse> {
    return this._client.post('/dash-api/v2/users/query', { body, ...options });
  }

  /**
   * Get User Active Entitlements
   */
  retrieveActiveEntitlements(
    appUserID: string,
    query: UserRetrieveActiveEntitlementsParams,
    options?: RequestOptions,
  ): APIPromise<UserRetrieveActiveEntitlementsResponse> {
    return this._client.get(path`/dash-api/v2/users/${appUserID}/active-entitlements`, { query, ...options });
  }

  /**
   * Get User Attributes
   */
  retrieveAttributes(
    appUserID: string,
    query: UserRetrieveAttributesParams,
    options?: RequestOptions,
  ): APIPromise<UserRetrieveAttributesResponse> {
    return this._client.get(path`/dash-api/v2/users/${appUserID}/attributes`, { query, ...options });
  }

  /**
   * Get User Device Attributes
   */
  retrieveDeviceAttributes(
    appUserID: string,
    query: UserRetrieveDeviceAttributesParams,
    options?: RequestOptions,
  ): APIPromise<UserRetrieveDeviceAttributesResponse> {
    return this._client.get(path`/dash-api/v2/users/${appUserID}/device-attributes`, { query, ...options });
  }

  /**
   * List User Event Names
   */
  retrieveEventNames(
    query: UserRetrieveEventNamesParams,
    options?: RequestOptions,
  ): APIPromise<UserRetrieveEventNamesResponse> {
    return this._client.get('/dash-api/v2/users/event-names', { query, ...options });
  }

  /**
   * List User Filter Properties
   */
  retrieveFilterProperties(
    query: UserRetrieveFilterPropertiesParams,
    options?: RequestOptions,
  ): APIPromise<UserRetrieveFilterPropertiesResponse> {
    return this._client.get('/dash-api/v2/users/filter-properties', { query, ...options });
  }

  /**
   * Resolve User
   */
  retrieveResolve(
    query: UserRetrieveResolveParams,
    options?: RequestOptions,
  ): APIPromise<UserRetrieveResolveResponse> {
    return this._client.get('/dash-api/v2/users/resolve', { query, ...options });
  }

  /**
   * Get User Subscription Summary
   */
  retrieveSubscriptionSummary(
    appUserID: string,
    query: UserRetrieveSubscriptionSummaryParams,
    options?: RequestOptions,
  ): APIPromise<UserRetrieveSubscriptionSummaryResponse> {
    return this._client.get(path`/dash-api/v2/users/${appUserID}/subscription-summary`, {
      query,
      ...options,
    });
  }
}

export interface UserQueryResponse {
  columns: Array<UserQueryResponse.Column>;

  filtered_total: number;

  keys: Array<UserQueryResponse.Key>;

  object: 'users_query_result';

  returned_count: number;

  rows: Array<{ [key: string]: unknown }>;

  time_elapsed: number;

  total: number;
}

export namespace UserQueryResponse {
  export interface Column {
    count: number;

    key: string;

    type: string;
  }

  export interface Key {
    count: number;

    key: string;

    type: string;
  }
}

export interface UserRetrieveActiveEntitlementsResponse {
  app_user_id: string;

  entitlements: Array<string>;

  object: 'user_active_entitlements';

  debug?: unknown;
}

export interface UserRetrieveAttributesResponse {
  app_user_id: string;

  error: boolean;

  object: 'user_attributes';

  properties: { [key: string]: unknown } | null;

  updated_at: string | null;
}

export interface UserRetrieveDeviceAttributesResponse {
  app_user_id: string;

  data: Array<UserRetrieveDeviceAttributesResponse.Data>;

  object: 'device_attributes';
}

export namespace UserRetrieveDeviceAttributesResponse {
  export interface Data {
    key: string;

    max_ts: string;

    ts: string;

    type: string;

    value: string;
  }
}

export interface UserRetrieveEventNamesResponse {
  data: Array<UserRetrieveEventNamesResponse.Data>;

  object: 'list';
}

export namespace UserRetrieveEventNamesResponse {
  export interface Data {
    automatically_tracked: boolean;

    cnt: number;

    name: string;

    source: string;
  }
}

export interface UserRetrieveFilterPropertiesResponse {
  device_properties: { [key: string]: Array<string> };

  object: 'user_filter_properties';

  other_properties: { [key: string]: Array<string> };

  user_properties: { [key: string]: Array<string> };
}

export interface UserRetrieveResolveResponse {
  application_user_aliases: Array<UserRetrieveResolveResponse.ApplicationUserAlias>;

  application_user_found: boolean;

  object: 'user_resolution';
}

export namespace UserRetrieveResolveResponse {
  export interface ApplicationUserAlias {
    app_user_id: string;

    created_at: string;
  }
}

export interface UserRetrieveSubscriptionSummaryResponse {
  active_product_ids: Array<string>;

  auto_renew_enabled: boolean;

  average_order_value: number;

  expiration_date: string | null;

  first_purchase_date: string | null;

  has_active_subscription: boolean;

  integration_partner: string | null;

  is_family_share: boolean;

  last_paywall_conversion: UserRetrieveSubscriptionSummaryResponse.LastPaywallConversion | null;

  last_purchase_date: string | null;

  latest_event: string | null;

  latest_event_ts: string | null;

  lifetime_value: number;

  monthly_recurring_revenue: number;

  net_revenue: number;

  next_renewal_date: string | null;

  object: 'user_subscription_summary';

  primary_product_id: string | null;

  primary_store: string | null;

  subscription_status: 'active' | 'expired' | 'trial' | 'cancelled' | 'none';

  total_refunds: number;

  total_renewals: number;

  total_spend: number;

  debug?: unknown;
}

export namespace UserRetrieveSubscriptionSummaryResponse {
  export interface LastPaywallConversion {
    experiment_id?: string;

    paywall_id?: string;

    paywall_name?: string;

    placement?: string;

    variant_id?: string;
  }
}

export interface UserQueryParams {
  /**
   * Application ID
   */
  application_id: string;

  filters?: Array<UserQueryParams.Filter>;

  is_download?: boolean;

  match_mode?: 'all' | 'any';

  search_term?: string;
}

export namespace UserQueryParams {
  export interface Filter {
    id: string;

    field_id: string;

    values: Array<unknown>;

    operator?: string;
  }
}

export interface UserRetrieveActiveEntitlementsParams {
  /**
   * Application ID
   */
  application_id: string;
}

export interface UserRetrieveAttributesParams {
  /**
   * Application ID
   */
  application_id: string;
}

export interface UserRetrieveDeviceAttributesParams {
  /**
   * Application ID
   */
  application_id: string;
}

export interface UserRetrieveEventNamesParams {
  /**
   * Application ID
   */
  application_id: string;

  /**
   * a string to be decoded into a boolean
   */
  include_all?: ApplicationsAPI.BooleanFromString;

  /**
   * a string to be decoded into a boolean
   */
  is_web?: ApplicationsAPI.BooleanFromString;

  /**
   * a string to be decoded into a number
   */
  limit?: string;

  /**
   * a string to be decoded into a number
   */
  offset?: string;
}

export interface UserRetrieveFilterPropertiesParams {
  /**
   * Application ID
   */
  application_id: string;
}

export interface UserRetrieveResolveParams {
  /**
   * App user identifier
   */
  app_user_id: string;

  /**
   * Application ID
   */
  application_id: string;
}

export interface UserRetrieveSubscriptionSummaryParams {
  /**
   * Application ID
   */
  application_id: string;
}

Users.Events = Events;
Users.TestMode = TestMode;

export declare namespace Users {
  export {
    type UserQueryResponse as UserQueryResponse,
    type UserRetrieveActiveEntitlementsResponse as UserRetrieveActiveEntitlementsResponse,
    type UserRetrieveAttributesResponse as UserRetrieveAttributesResponse,
    type UserRetrieveDeviceAttributesResponse as UserRetrieveDeviceAttributesResponse,
    type UserRetrieveEventNamesResponse as UserRetrieveEventNamesResponse,
    type UserRetrieveFilterPropertiesResponse as UserRetrieveFilterPropertiesResponse,
    type UserRetrieveResolveResponse as UserRetrieveResolveResponse,
    type UserRetrieveSubscriptionSummaryResponse as UserRetrieveSubscriptionSummaryResponse,
    type UserQueryParams as UserQueryParams,
    type UserRetrieveActiveEntitlementsParams as UserRetrieveActiveEntitlementsParams,
    type UserRetrieveAttributesParams as UserRetrieveAttributesParams,
    type UserRetrieveDeviceAttributesParams as UserRetrieveDeviceAttributesParams,
    type UserRetrieveEventNamesParams as UserRetrieveEventNamesParams,
    type UserRetrieveFilterPropertiesParams as UserRetrieveFilterPropertiesParams,
    type UserRetrieveResolveParams as UserRetrieveResolveParams,
    type UserRetrieveSubscriptionSummaryParams as UserRetrieveSubscriptionSummaryParams,
  };

  export {
    Events as Events,
    type EventRetrieveResponse as EventRetrieveResponse,
    type EventListResponse as EventListResponse,
    type EventRetrieveParams as EventRetrieveParams,
    type EventListParams as EventListParams,
  };

  export {
    TestMode as TestMode,
    type TestModeRetrieveTestModeResponse as TestModeRetrieveTestModeResponse,
    type TestModeUpdateTestModeResponse as TestModeUpdateTestModeResponse,
    type TestModeRetrieveTestModeParams as TestModeRetrieveTestModeParams,
    type TestModeUpdateTestModeParams as TestModeUpdateTestModeParams,
  };
}
