// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EventsAPI from './events';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage users, user attributes, events, and diagnostics for an application.
 */
export class Events extends APIResource {
  /**
   * Retrieves a single event by ID. The `application_id` query parameter is required
   * for authorization. Requires users:read scope.
   */
  retrieve(
    eventID: string,
    query: EventRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<EventRetrieveResponse> {
    return this._client.get(path`/v2/users/events/${eventID}`, { query, ...options });
  }

  /**
   * List User Events
   */
  list(appUserID: string, query: EventListParams, options?: RequestOptions): APIPromise<EventListResponse> {
    return this._client.get(path`/v2/users/${appUserID}/events`, { query, ...options });
  }
}

export type JsonValue = string | number | boolean | null | Array<JsonValue> | unknown;

export interface EventRetrieveResponse {
  /**
   * Unique event identifier
   */
  id: string;

  /**
   * Categorized event origin: 'subscription' for payment/billing events, 'sdk' for
   * client SDK events
   */
  event_source: 'subscription' | 'sdk';

  /**
   * Event name
   */
  name: string;

  properties: { [key: string]: JsonValue };

  /**
   * Human-readable source label for the event (e.g. integration name, SDK version)
   */
  source: string;

  /**
   * ISO 8601 timestamp of when the event occurred
   */
  timestamp: string;

  app_version?: string | null;

  debug?: JsonValue | null;

  device_locale?: string | null;

  headers?: string | null;

  inserted_at?: string;

  platform?: string | null;
}

export interface EventListResponse {
  data: Array<EventListResponse.Data>;

  has_more: boolean;

  object: 'list';

  total_count: number;

  url: '/v2/users/events';
}

export namespace EventListResponse {
  export interface Data {
    /**
     * Unique event identifier
     */
    id: string;

    /**
     * Event name
     */
    name: string;

    properties: { [key: string]: EventsAPI.JsonValue };

    /**
     * Human-readable source label for the event (e.g. integration name, SDK version)
     */
    source: string;

    /**
     * ISO 8601 timestamp of when the event occurred
     */
    timestamp: string;

    app_version?: string | null;

    device_locale?: string | null;

    headers?: string | null;

    inserted_at?: string;

    platform?: string | null;
  }
}

export interface EventRetrieveParams {
  /**
   * Application ID
   */
  application_id: string;
}

export interface EventListParams {
  /**
   * Application ID
   */
  application_id: string;

  event_group?: 'app' | 'sdk' | 'integration' | 'subscription' | 'overview' | 'all';

  /**
   * a string to be decoded into a number
   */
  limit?: string;

  /**
   * a string to be decoded into a number
   */
  offset?: string;

  search_term?: string;
}

export declare namespace Events {
  export {
    type JsonValue as JsonValue,
    type EventRetrieveResponse as EventRetrieveResponse,
    type EventListResponse as EventListResponse,
    type EventRetrieveParams as EventRetrieveParams,
    type EventListParams as EventListParams,
  };
}
