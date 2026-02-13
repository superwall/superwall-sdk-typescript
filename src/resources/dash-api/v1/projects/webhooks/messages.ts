// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Lists webhook messages for the given project with filtering options
   */
  list(
    projectID: string,
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListResponse> {
    return this._client.get(path`/dash-api/v1/projects/${projectID}/webhooks/messages`, {
      query,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Lists all message attempts for a specific message ID with optional filtering
   */
  listAttempts(
    messageID: string,
    params: MessageListAttemptsParams,
    options?: RequestOptions,
  ): APIPromise<MessageListAttemptsResponse> {
    const { projectId, ...query } = params;
    return this._client.get(
      path`/dash-api/v1/projects/${projectId}/webhooks/messages/${messageID}/attempts`,
      { query, ...options, __security: { bearerAuth: true } },
    );
  }
}

export interface MessageListResponse {
  data: Array<MessageListResponse.Data>;

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

export namespace MessageListResponse {
  export interface Data {
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

export interface MessageListAttemptsResponse {
  data: Array<MessageListAttemptsResponse.Data>;

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

export namespace MessageListAttemptsResponse {
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

export interface MessageListParams {
  /**
   * Filter messages after this date
   */
  after?: string;

  /**
   * Filter messages before this date
   */
  before?: string;

  /**
   * Filter by channel
   */
  channel?: string;

  /**
   * Filter by event types
   */
  eventTypes?: Array<string>;

  /**
   * Iterator from previous response for pagination
   */
  iterator?: string;

  /**
   * Maximum number of results to return
   */
  limit?: string;

  /**
   * Filter by tag
   */
  tag?: string;

  /**
   * Include message content in response
   */
  withContent?: 'true' | 'false';
}

export interface MessageListAttemptsParams {
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

export declare namespace Messages {
  export {
    type MessageListResponse as MessageListResponse,
    type MessageListAttemptsResponse as MessageListAttemptsResponse,
    type MessageListParams as MessageListParams,
    type MessageListAttemptsParams as MessageListAttemptsParams,
  };
}
