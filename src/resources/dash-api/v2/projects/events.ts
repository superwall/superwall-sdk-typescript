// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Events extends APIResource {
  /**
   * Retrieves an event by ID. Requires webhooks:read scope.
   */
  retrieve(
    eventID: string,
    params: EventRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<EventRetrieveResponse> {
    const { project_id } = params;
    return this._client.get(path`/dash-api/v2/projects/${project_id}/events/${eventID}`, options);
  }

  /**
   * Returns a list of events (webhook messages) for the project. Supports pagination
   * and filtering. Requires webhooks:read scope.
   */
  list(
    projectID: string,
    query: EventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EventListResponse> {
    return this._client.get(path`/dash-api/v2/projects/${projectID}/events`, { query, ...options });
  }

  /**
   * Returns a list of delivery attempts for an event. Requires webhooks:read scope.
   */
  retrieveAttempts(
    eventID: string,
    params: EventRetrieveAttemptsParams,
    options?: RequestOptions,
  ): APIPromise<EventRetrieveAttemptsResponse> {
    const { project_id, ...query } = params;
    return this._client.get(path`/dash-api/v2/projects/${project_id}/events/${eventID}/attempts`, {
      query,
      ...options,
    });
  }

  /**
   * Retries delivery of an event to a specific endpoint. Requires webhooks:write
   * scope.
   */
  retry(eventID: string, params: EventRetryParams, options?: RequestOptions): APIPromise<EventRetryResponse> {
    const { project_id, ...body } = params;
    return this._client.post(path`/dash-api/v2/projects/${project_id}/events/${eventID}/retry`, {
      body,
      ...options,
    });
  }
}

export interface EventRetrieveResponse {
  /**
   * Unique identifier for the event
   */
  id: string;

  /**
   * Channels the event was sent to
   */
  channels: Array<string> | null;

  /**
   * External event ID, or null
   */
  event_id: string | null;

  /**
   * Type of the event
   */
  event_type: string;

  /**
   * Object type, always `event`
   */
  object: 'event';

  /**
   * Event payload data
   */
  payload: { [key: string]: unknown };

  /**
   * ISO 8601 timestamp of when the event occurred
   */
  timestamp: string;
}

export interface EventListResponse {
  /**
   * List of events
   */
  data: Array<EventListResponse.Data>;

  /**
   * Whether there are more results available
   */
  has_more: boolean;

  /**
   * Object type, always `list`
   */
  object: 'list';

  /**
   * Cursor for forward pagination
   */
  iterator?: string;

  /**
   * Cursor for backward pagination
   */
  prev_iterator?: string;
}

export namespace EventListResponse {
  export interface Data {
    /**
     * Unique identifier for the event
     */
    id: string;

    /**
     * Channels the event was sent to
     */
    channels: Array<string> | null;

    /**
     * External event ID, or null
     */
    event_id: string | null;

    /**
     * Type of the event
     */
    event_type: string;

    /**
     * Object type, always `event`
     */
    object: 'event';

    /**
     * Event payload data
     */
    payload: { [key: string]: unknown };

    /**
     * ISO 8601 timestamp of when the event occurred
     */
    timestamp: string;
  }
}

export interface EventRetrieveAttemptsResponse {
  /**
   * List of delivery attempts
   */
  data: Array<EventRetrieveAttemptsResponse.Data>;

  /**
   * Whether there are more results available
   */
  has_more: boolean;

  /**
   * Object type, always `list`
   */
  object: 'list';

  /**
   * Cursor for forward pagination
   */
  iterator?: string;

  /**
   * Cursor for backward pagination
   */
  prev_iterator?: string;
}

export namespace EventRetrieveAttemptsResponse {
  export interface Data {
    /**
     * Unique identifier for the attempt
     */
    id: string;

    /**
     * ID of the webhook endpoint
     */
    endpoint_id: string;

    /**
     * ID of the event
     */
    event_id: string;

    /**
     * Object type, always `event_attempt`
     */
    object: 'event_attempt';

    /**
     * Response body from the endpoint
     */
    response: string;

    /**
     * Response time in milliseconds
     */
    response_duration_ms: number;

    /**
     * HTTP status code from the endpoint
     */
    response_status_code: number;

    /**
     * Delivery status code
     */
    status: number;

    /**
     * ISO 8601 timestamp of the attempt
     */
    timestamp: string;

    /**
     * Type of trigger that initiated the delivery
     */
    trigger_type: number;

    /**
     * URL the event was sent to
     */
    url: string;
  }
}

export interface EventRetryResponse {
  /**
   * ID of the event being retried
   */
  id: string;

  /**
   * Object type, always `event`
   */
  object: 'event';

  /**
   * Always true for retry responses
   */
  retried: true;
}

export interface EventRetrieveParams {
  /**
   * Project ID
   */
  project_id: string;
}

export interface EventListParams {
  /**
   * a string to be decoded into a Date
   */
  after?: string;

  /**
   * a string to be decoded into a Date
   */
  before?: string;

  channel?: string;

  event_types?: Array<string>;

  iterator?: string;

  /**
   * Maximum number of items to return (default: 20)
   */
  limit?: string;

  tag?: string;

  /**
   * Include event payload content (default: true)
   */
  with_content?: 'true' | 'false';
}

export interface EventRetrieveAttemptsParams {
  /**
   * Path param: Project ID
   */
  project_id: string;

  /**
   * Query param: a string to be decoded into a Date
   */
  after?: string;

  /**
   * Query param: a string to be decoded into a Date
   */
  before?: string;

  /**
   * Query param
   */
  iterator?: string;

  /**
   * Query param: Maximum number of items to return (default: 20)
   */
  limit?: string;

  /**
   * Query param: a string to be decoded into a number
   */
  status?: string;

  /**
   * Query param: a string to be decoded into a number
   */
  status_code_class?: string;
}

export interface EventRetryParams {
  /**
   * Path param: Project ID
   */
  project_id: string;

  /**
   * Body param: ID of the webhook endpoint to retry delivery to
   */
  endpoint_id: string;
}

export declare namespace Events {
  export {
    type EventRetrieveResponse as EventRetrieveResponse,
    type EventListResponse as EventListResponse,
    type EventRetrieveAttemptsResponse as EventRetrieveAttemptsResponse,
    type EventRetryResponse as EventRetryResponse,
    type EventRetrieveParams as EventRetrieveParams,
    type EventListParams as EventListParams,
    type EventRetrieveAttemptsParams as EventRetrieveAttemptsParams,
    type EventRetryParams as EventRetryParams,
  };
}
