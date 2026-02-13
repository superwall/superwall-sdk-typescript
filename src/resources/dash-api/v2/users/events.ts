// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Events extends APIResource {
  /**
   * Retrieve User Event
   */
  retrieve(
    eventID: string,
    query: EventRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<EventRetrieveResponse> {
    return this._client.get(path`/dash-api/v2/users/events/${eventID}`, { query, ...options });
  }

  /**
   * List User Events
   */
  list(appUserID: string, query: EventListParams, options?: RequestOptions): APIPromise<EventListResponse> {
    return this._client.get(path`/dash-api/v2/users/${appUserID}/events`, { query, ...options });
  }
}

export interface EventRetrieveResponse {
  id: string;

  event_source: 'subscription' | 'sdk';

  name: string;

  properties: { [key: string]: unknown };

  source: string;

  timestamp: string;

  app_version?: string | null;

  debug?: unknown;

  device_locale?: string | null;

  headers?: unknown;

  inserted_at?: string;

  platform?: string | null;
}

export interface EventListResponse {
  data: Array<EventListResponse.Data>;

  has_more: boolean;

  object: 'list';

  total_count: number;

  url: '/v2/users/:app_user_id/events';
}

export namespace EventListResponse {
  export interface Data {
    id: string;

    name: string;

    properties: { [key: string]: unknown };

    source: string;

    timestamp: string;

    app_version?: string | null;

    device_locale?: string | null;

    headers?: unknown;

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
    type EventRetrieveResponse as EventRetrieveResponse,
    type EventListResponse as EventListResponse,
    type EventRetrieveParams as EventRetrieveParams,
    type EventListParams as EventListParams,
  };
}
