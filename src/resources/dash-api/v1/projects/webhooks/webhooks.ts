// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as MessagesAPI from './messages';
import {
  MessageListParams,
  MessageListResponse,
  MessageRetrieveAttemptsParams,
  MessageRetrieveAttemptsResponse,
  Messages,
} from './messages';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Webhooks extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Creates a new webhook endpoint for the given project
   */
  create(
    projectID: string,
    body: WebhookCreateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookCreateResponse> {
    return this._client.post(path`/dash-api/v1/projects/${projectID}/webhooks`, {
      body,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Gets a specific webhook endpoint with its headers
   */
  retrieve(
    endpointID: string,
    params: WebhookRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<WebhookRetrieveResponse> {
    const { projectId } = params;
    return this._client.get(path`/dash-api/v1/projects/${projectId}/webhooks/${endpointID}`, {
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Updates a specific webhook endpoint
   */
  update(
    endpointID: string,
    params: WebhookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookUpdateResponse> {
    const { projectId, ...body } = params;
    return this._client.put(path`/dash-api/v1/projects/${projectId}/webhooks/${endpointID}`, {
      body,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Lists all webhook endpoints for the given project with their headers
   */
  list(
    projectID: string,
    query: WebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookListResponse> {
    return this._client.get(path`/dash-api/v1/projects/${projectID}/webhooks`, {
      query,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Deletes a specific webhook endpoint
   */
  delete(
    endpointID: string,
    params: WebhookDeleteParams,
    options?: RequestOptions,
  ): APIPromise<WebhookDeleteResponse> {
    const { projectId } = params;
    return this._client.delete(path`/dash-api/v1/projects/${projectId}/webhooks/${endpointID}`, {
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Creates and returns a management portal URL for configuring webhooks for the
   * given project
   */
  manage(projectID: string, options?: RequestOptions): APIPromise<WebhookManageResponse> {
    return this._client.post(path`/dash-api/v1/projects/${projectID}/webhooks/manage`, {
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Lists message attempts for a specific webhook endpoint with optional filtering
   */
  retrieveAttempts(
    endpointID: string,
    params: WebhookRetrieveAttemptsParams,
    options?: RequestOptions,
  ): APIPromise<WebhookRetrieveAttemptsResponse> {
    const { projectId, ...query } = params;
    return this._client.get(path`/dash-api/v1/projects/${projectId}/webhooks/${endpointID}/attempts`, {
      query,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Gets delivery statistics for a specific webhook endpoint with optional date
   * filtering
   */
  retrieveStats(
    endpointID: string,
    params: WebhookRetrieveStatsParams,
    options?: RequestOptions,
  ): APIPromise<WebhookRetrieveStatsResponse> {
    const { projectId, ...query } = params;
    return this._client.get(path`/dash-api/v1/projects/${projectId}/webhooks/${endpointID}/stats`, {
      query,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Updates the headers for a specific webhook endpoint
   */
  updateHeaders(
    endpointID: string,
    params: WebhookUpdateHeadersParams,
    options?: RequestOptions,
  ): APIPromise<WebhookUpdateHeadersResponse> {
    const { projectId, ...body } = params;
    return this._client.put(path`/dash-api/v1/projects/${projectId}/webhooks/${endpointID}/headers`, {
      body,
      ...options,
      __security: { bearerAuth: true },
    });
  }
}

export interface WebhookCreateResponse {
  /**
   * Unique identifier for the webhook endpoint
   */
  id: string;

  /**
   * Channels this endpoint is subscribed to
   */
  channels: Array<string> | null;

  /**
   * ISO 8601 timestamp of when the endpoint was created
   */
  createdAt: string;

  /**
   * Description of the webhook endpoint
   */
  description: string | null;

  /**
   * Whether the webhook endpoint is disabled
   */
  disabled: boolean;

  /**
   * Event types this endpoint is subscribed to
   */
  filterTypes: Array<string> | null;

  /**
   * ISO 8601 timestamp of when the endpoint was last updated
   */
  updatedAt: string;

  /**
   * The URL where webhook events are sent
   */
  url: string;

  /**
   * API version for the webhook
   */
  version: number;

  /**
   * Custom headers configured for this endpoint
   */
  headers?: { [key: string]: string };

  /**
   * The secret for the webhook endpoint
   */
  secret?: string;
}

export interface WebhookRetrieveResponse {
  /**
   * Unique identifier for the webhook endpoint
   */
  id: string;

  /**
   * Channels this endpoint is subscribed to
   */
  channels: Array<string> | null;

  /**
   * ISO 8601 timestamp of when the endpoint was created
   */
  createdAt: string;

  /**
   * Description of the webhook endpoint
   */
  description: string | null;

  /**
   * Whether the webhook endpoint is disabled
   */
  disabled: boolean;

  /**
   * Event types this endpoint is subscribed to
   */
  filterTypes: Array<string> | null;

  /**
   * ISO 8601 timestamp of when the endpoint was last updated
   */
  updatedAt: string;

  /**
   * The URL where webhook events are sent
   */
  url: string;

  /**
   * API version for the webhook
   */
  version: number;

  /**
   * Custom headers configured for this endpoint
   */
  headers?: { [key: string]: string };

  /**
   * The secret for the webhook endpoint
   */
  secret?: string;
}

export interface WebhookUpdateResponse {
  /**
   * Unique identifier for the webhook endpoint
   */
  id: string;

  /**
   * Channels this endpoint is subscribed to
   */
  channels: Array<string> | null;

  /**
   * ISO 8601 timestamp of when the endpoint was created
   */
  createdAt: string;

  /**
   * Description of the webhook endpoint
   */
  description: string | null;

  /**
   * Whether the webhook endpoint is disabled
   */
  disabled: boolean;

  /**
   * Event types this endpoint is subscribed to
   */
  filterTypes: Array<string> | null;

  /**
   * ISO 8601 timestamp of when the endpoint was last updated
   */
  updatedAt: string;

  /**
   * The URL where webhook events are sent
   */
  url: string;

  /**
   * API version for the webhook
   */
  version: number;

  /**
   * Custom headers configured for this endpoint
   */
  headers?: { [key: string]: string };

  /**
   * The secret for the webhook endpoint
   */
  secret?: string;
}

export interface WebhookListResponse {
  data: Array<WebhookListResponse.Data>;

  /**
   * Whether there are more results to fetch
   */
  done: boolean;

  /**
   * Iterator for fetching the next page of results
   */
  iterator?: string;

  /**
   * Iterator for fetching the previous page of results
   */
  prevIterator?: string;
}

export namespace WebhookListResponse {
  export interface Data {
    /**
     * Unique identifier for the webhook endpoint
     */
    id: string;

    /**
     * Channels this endpoint is subscribed to
     */
    channels: Array<string> | null;

    /**
     * ISO 8601 timestamp of when the endpoint was created
     */
    createdAt: string;

    /**
     * Description of the webhook endpoint
     */
    description: string | null;

    /**
     * Whether the webhook endpoint is disabled
     */
    disabled: boolean;

    /**
     * Event types this endpoint is subscribed to
     */
    filterTypes: Array<string> | null;

    /**
     * ISO 8601 timestamp of when the endpoint was last updated
     */
    updatedAt: string;

    /**
     * The URL where webhook events are sent
     */
    url: string;

    /**
     * API version for the webhook
     */
    version: number;

    /**
     * Custom headers configured for this endpoint
     */
    headers?: { [key: string]: string };

    /**
     * The secret for the webhook endpoint
     */
    secret?: string;
  }
}

export interface WebhookDeleteResponse {
  success: true;
}

export interface WebhookManageResponse {
  managementPortalUrl: string;

  /**
   * A unique identifier for a project.
   */
  projectId: number;
}

export interface WebhookRetrieveAttemptsResponse {
  data: Array<WebhookRetrieveAttemptsResponse.Data>;

  /**
   * Whether there are more results to fetch
   */
  done: boolean;

  /**
   * Iterator for fetching the next page of results
   */
  iterator?: string;

  /**
   * Iterator for fetching the previous page of results
   */
  prevIterator?: string;
}

export namespace WebhookRetrieveAttemptsResponse {
  export interface Data {
    /**
     * Unique identifier for the message attempt
     */
    id: string;

    /**
     * ID of the endpoint this attempt was made to
     */
    endpointId: string;

    /**
     * ID of the message this attempt is for
     */
    msgId: string;

    /**
     * Response from the webhook endpoint
     */
    response: string;

    /**
     * Response time in milliseconds
     */
    responseDurationMs: number;

    /**
     * HTTP status code from the webhook endpoint response
     */
    responseStatusCode: number;

    /**
     * Status of the attempt (0=Success, 1=Pending, 2=Fail, 3=Sending)
     */
    status: number;

    /**
     * ISO 8601 timestamp of when the attempt was made
     */
    timestamp: string;

    /**
     * Type of trigger that caused this attempt
     */
    triggerType: number;

    /**
     * The URL the request was sent to
     */
    url: string;

    /**
     * Full message object if requested with withMsg=true
     */
    msg?: Data.Msg;
  }

  export namespace Data {
    /**
     * Full message object if requested with withMsg=true
     */
    export interface Msg {
      /**
       * Unique identifier for the webhook message
       */
      id: string;

      /**
       * Type of the event
       */
      eventType: string;

      /**
       * The payload data of the webhook message
       */
      payload: { [key: string]: unknown };

      /**
       * ISO 8601 timestamp of when the message was created
       */
      timestamp: string;

      /**
       * Channels this message was sent to
       */
      channels?: Array<string> | null;

      /**
       * Unique identifier for the event
       */
      eventId?: string | null;
    }
  }
}

export interface WebhookRetrieveStatsResponse {
  /**
   * Number of failed webhook deliveries
   */
  fail: number;

  /**
   * Number of webhook deliveries that are pending/queued
   */
  pending: number;

  /**
   * Number of webhook deliveries currently being sent
   */
  sending: number;

  /**
   * Number of successful webhook deliveries
   */
  success: number;
}

export interface WebhookUpdateHeadersResponse {
  success: true;
}

export interface WebhookCreateParams {
  /**
   * The URL where webhook events will be sent
   */
  url: string;

  /**
   * A description of the webhook endpoint
   */
  description?: string;

  /**
   * Array of event types to filter for this endpoint
   */
  filterTypes?: Array<string>;

  /**
   * Custom headers to include with webhook requests
   */
  headers?: { [key: string]: string };

  /**
   * Metadata to include with webhook requests
   */
  metadata?: { [key: string]: string };
}

export interface WebhookRetrieveParams {
  /**
   * a string to be decoded into a number
   */
  projectId: string;
}

export interface WebhookUpdateParams {
  /**
   * Path param: a string to be decoded into a number
   */
  projectId: string;

  /**
   * Body param
   */
  disabled: boolean;

  /**
   * Body param
   */
  url: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  filterTypes?: Array<string>;

  /**
   * Body param
   */
  headers?: { [key: string]: string };

  /**
   * Body param
   */
  metadata?: { [key: string]: string };
}

export interface WebhookListParams {
  /**
   * Iterator from previous response for pagination
   */
  iterator?: string;

  /**
   * Maximum number of results to return
   */
  limit?: string;
}

export interface WebhookDeleteParams {
  /**
   * a string to be decoded into a number
   */
  projectId: string;
}

export interface WebhookRetrieveAttemptsParams {
  /**
   * Path param: a string to be decoded into a number
   */
  projectId: string;

  /**
   * Query param: Filter attempts after this date
   */
  after?: string;

  /**
   * Query param: Filter attempts before this date
   */
  before?: string;

  /**
   * Query param: Filter by channel
   */
  channel?: string;

  /**
   * Query param: Filter by event types
   */
  eventTypes?: Array<string>;

  /**
   * Query param: Iterator from previous response for pagination
   */
  iterator?: string;

  /**
   * Query param: Maximum number of results to return
   */
  limit?: string;

  /**
   * Query param: Filter by attempt status (0=Success, 1=Pending, 2=Fail, 3=Sending)
   */
  status?: string;

  /**
   * Query param: Filter by HTTP status code class (1=1xx, 2=2xx, 3=3xx, 4=4xx,
   * 5=5xx)
   */
  statusCodeClass?: string;

  /**
   * Query param: Filter by tag
   */
  tag?: string;

  /**
   * Query param: Include message content in response
   */
  withContent?: 'true' | 'false';

  /**
   * Query param: Include full message object in response
   */
  withMsg?: 'true' | 'false';
}

export interface WebhookRetrieveStatsParams {
  /**
   * Path param: a string to be decoded into a number
   */
  projectId: string;

  /**
   * Query param: Start date for stats calculation (inclusive)
   */
  since?: string;

  /**
   * Query param: End date for stats calculation (inclusive)
   */
  until?: string;
}

export interface WebhookUpdateHeadersParams {
  /**
   * Path param: a string to be decoded into a number
   */
  projectId: string;

  /**
   * Body param: Headers to set for the webhook endpoint
   */
  headers: { [key: string]: string };
}

Webhooks.Messages = Messages;

export declare namespace Webhooks {
  export {
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookRetrieveResponse as WebhookRetrieveResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhookManageResponse as WebhookManageResponse,
    type WebhookRetrieveAttemptsResponse as WebhookRetrieveAttemptsResponse,
    type WebhookRetrieveStatsResponse as WebhookRetrieveStatsResponse,
    type WebhookUpdateHeadersResponse as WebhookUpdateHeadersResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookRetrieveParams as WebhookRetrieveParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
    type WebhookDeleteParams as WebhookDeleteParams,
    type WebhookRetrieveAttemptsParams as WebhookRetrieveAttemptsParams,
    type WebhookRetrieveStatsParams as WebhookRetrieveStatsParams,
    type WebhookUpdateHeadersParams as WebhookUpdateHeadersParams,
  };

  export {
    Messages as Messages,
    type MessageListResponse as MessageListResponse,
    type MessageRetrieveAttemptsResponse as MessageRetrieveAttemptsResponse,
    type MessageListParams as MessageListParams,
    type MessageRetrieveAttemptsParams as MessageRetrieveAttemptsParams,
  };
}
