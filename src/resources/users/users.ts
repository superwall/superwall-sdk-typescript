// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EventsAPI from './events';
import {
  EventListParams,
  EventListResponse,
  EventRetrieveParams,
  EventRetrieveResponse,
  Events,
  JsonValue,
} from './events';
import * as TestModeAPI from './test-mode';
import {
  TestMode,
  TestModeListParams,
  TestModeListResponse,
  TestModeUpdateParams,
  TestModeUpdateResponse,
} from './test-mode';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage users, user attributes, events, and diagnostics for an application.
 */
export class Users extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  testMode: TestModeAPI.TestMode = new TestModeAPI.TestMode(this._client);

  /**
   * List User Event Names
   */
  listEventNames(
    query: UserListEventNamesParams,
    options?: RequestOptions,
  ): APIPromise<UserListEventNamesResponse> {
    return this._client.get('/v2/users/event-names', { query, ...options });
  }

  /**
   * List User Filter Properties
   */
  listFilterProperties(
    query: UserListFilterPropertiesParams,
    options?: RequestOptions,
  ): APIPromise<UserListFilterPropertiesResponse> {
    return this._client.get('/v2/users/filter-properties', { query, ...options });
  }

  /**
   * Resolve User
   */
  resolve(query: UserResolveParams, options?: RequestOptions): APIPromise<UserResolveResponse> {
    return this._client.get('/v2/users/resolve', { query, ...options });
  }

  /**
   * Get User Active Entitlements
   */
  retrieveActiveEntitlements(
    appUserID: string,
    query: UserRetrieveActiveEntitlementsParams,
    options?: RequestOptions,
  ): APIPromise<UserRetrieveActiveEntitlementsResponse> {
    return this._client.get(path`/v2/users/${appUserID}/active-entitlements`, { query, ...options });
  }

  /**
   * Get User Attributes
   */
  retrieveAttributes(
    appUserID: string,
    query: UserRetrieveAttributesParams,
    options?: RequestOptions,
  ): APIPromise<UserRetrieveAttributesResponse> {
    return this._client.get(path`/v2/users/${appUserID}/attributes`, { query, ...options });
  }

  /**
   * Get User Device Attributes
   */
  retrieveDeviceAttributes(
    appUserID: string,
    query: UserRetrieveDeviceAttributesParams,
    options?: RequestOptions,
  ): APIPromise<UserRetrieveDeviceAttributesResponse> {
    return this._client.get(path`/v2/users/${appUserID}/device-attributes`, { query, ...options });
  }

  /**
   * Get User Subscription Summary
   */
  retrieveSubscriptionSummary(
    appUserID: string,
    query: UserRetrieveSubscriptionSummaryParams,
    options?: RequestOptions,
  ): APIPromise<UserRetrieveSubscriptionSummaryResponse> {
    return this._client.get(path`/v2/users/${appUserID}/subscription-summary`, { query, ...options });
  }
}

/**
 * a string to be decoded into a boolean
 */
export type BooleanFromString = 'true' | 'false';

export interface UserListEventNamesResponse {
  data: Array<UserListEventNamesResponse.Data>;

  object: 'list';
}

export namespace UserListEventNamesResponse {
  export interface Data {
    automatically_tracked: boolean;

    cnt: number;

    name: string;

    source: string;
  }
}

export interface UserListFilterPropertiesResponse {
  device_properties: { [key: string]: Array<string> };

  object: 'user_filter_properties';

  other_properties: { [key: string]: Array<string> };

  user_properties: { [key: string]: Array<string> };
}

export interface UserResolveResponse {
  application_user_aliases: Array<UserResolveResponse.ApplicationUserAlias>;

  application_user_found: boolean;

  object: 'user_resolution';
}

export namespace UserResolveResponse {
  export interface ApplicationUserAlias {
    app_user_id: string;

    created_at: string;
  }
}

export interface UserRetrieveActiveEntitlementsResponse {
  app_user_id: string;

  entitlements: Array<string>;

  object: 'user_active_entitlements';

  debug?: { [key: string]: EventsAPI.JsonValue };
}

export interface UserRetrieveAttributesResponse {
  app_user_id: string;

  error: boolean;

  object: 'user_attributes';

  properties: { [key: string]: EventsAPI.JsonValue } | null;

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

  debug?: { [key: string]: EventsAPI.JsonValue };
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

export interface UserListEventNamesParams {
  /**
   * Application ID
   */
  application_id: string;

  /**
   * a string to be decoded into a boolean
   */
  include_all?: BooleanFromString;

  /**
   * a string to be decoded into a boolean
   */
  is_web?: BooleanFromString;

  /**
   * a string to be decoded into a number
   */
  limit?: string;

  /**
   * a string to be decoded into a number
   */
  offset?: string;
}

export interface UserListFilterPropertiesParams {
  /**
   * Application ID
   */
  application_id: string;
}

export interface UserResolveParams {
  /**
   * App user identifier
   */
  app_user_id: string;

  /**
   * Application ID
   */
  application_id: string;
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
    type BooleanFromString as BooleanFromString,
    type UserListEventNamesResponse as UserListEventNamesResponse,
    type UserListFilterPropertiesResponse as UserListFilterPropertiesResponse,
    type UserResolveResponse as UserResolveResponse,
    type UserRetrieveActiveEntitlementsResponse as UserRetrieveActiveEntitlementsResponse,
    type UserRetrieveAttributesResponse as UserRetrieveAttributesResponse,
    type UserRetrieveDeviceAttributesResponse as UserRetrieveDeviceAttributesResponse,
    type UserRetrieveSubscriptionSummaryResponse as UserRetrieveSubscriptionSummaryResponse,
    type UserListEventNamesParams as UserListEventNamesParams,
    type UserListFilterPropertiesParams as UserListFilterPropertiesParams,
    type UserResolveParams as UserResolveParams,
    type UserRetrieveActiveEntitlementsParams as UserRetrieveActiveEntitlementsParams,
    type UserRetrieveAttributesParams as UserRetrieveAttributesParams,
    type UserRetrieveDeviceAttributesParams as UserRetrieveDeviceAttributesParams,
    type UserRetrieveSubscriptionSummaryParams as UserRetrieveSubscriptionSummaryParams,
  };

  export {
    Events as Events,
    type JsonValue as JsonValue,
    type EventRetrieveResponse as EventRetrieveResponse,
    type EventListResponse as EventListResponse,
    type EventRetrieveParams as EventRetrieveParams,
    type EventListParams as EventListParams,
  };

  export {
    TestMode as TestMode,
    type TestModeUpdateResponse as TestModeUpdateResponse,
    type TestModeListResponse as TestModeListResponse,
    type TestModeUpdateParams as TestModeUpdateParams,
    type TestModeListParams as TestModeListParams,
  };
}
