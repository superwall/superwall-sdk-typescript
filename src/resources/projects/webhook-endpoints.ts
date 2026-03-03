// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage webhook endpoints for receiving real-time event notifications. Webhooks deliver events to your specified URLs.
 */
export class WebhookEndpoints extends APIResource {
  /**
   * Creates a new webhook endpoint for the project. Requires webhooks:write scope.
   */
  create(
    projectID: string,
    body: WebhookEndpointCreateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookEndpointCreateResponse> {
    return this._client.post(path`/v2/projects/${projectID}/webhook_endpoints`, { body, ...options });
  }

  /**
   * Retrieves a webhook endpoint by ID. Requires webhooks:read scope.
   */
  retrieve(
    endpointID: string,
    params: WebhookEndpointRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<WebhookEndpointRetrieveResponse> {
    const { project_id } = params;
    return this._client.get(path`/v2/projects/${project_id}/webhook_endpoints/${endpointID}`, options);
  }

  /**
   * Updates a webhook endpoint's URL, description, or other settings. Requires
   * webhooks:write scope.
   */
  update(
    endpointID: string,
    params: WebhookEndpointUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookEndpointUpdateResponse> {
    const { project_id, ...body } = params;
    return this._client.patch(path`/v2/projects/${project_id}/webhook_endpoints/${endpointID}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a list of webhook endpoints for the project. Supports pagination.
   * Requires webhooks:read scope.
   */
  list(
    projectID: string,
    query: WebhookEndpointListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookEndpointListResponse> {
    return this._client.get(path`/v2/projects/${projectID}/webhook_endpoints`, { query, ...options });
  }

  /**
   * Deletes a webhook endpoint. Requires webhooks:write scope.
   */
  delete(
    endpointID: string,
    params: WebhookEndpointDeleteParams,
    options?: RequestOptions,
  ): APIPromise<WebhookEndpointDeleteResponse> {
    const { project_id } = params;
    return this._client.delete(path`/v2/projects/${project_id}/webhook_endpoints/${endpointID}`, options);
  }

  /**
   * Rotates the signing secret for a webhook endpoint. The new secret will be used
   * immediately. Requires webhooks:write scope.
   */
  rotateSecret(
    endpointID: string,
    params: WebhookEndpointRotateSecretParams,
    options?: RequestOptions,
  ): APIPromise<WebhookEndpointRotateSecretResponse> {
    const { project_id } = params;
    return this._client.post(
      path`/v2/projects/${project_id}/webhook_endpoints/${endpointID}/rotate_secret`,
      options,
    );
  }
}

export interface WebhookEndpointCreateResponse {
  /**
   * Unique identifier for the webhook endpoint
   */
  id: string;

  /**
   * Webhook channels
   */
  channels: Array<string> | null;

  /**
   * ISO 8601 timestamp of when the endpoint was created
   */
  created_at: string;

  /**
   * Description of the webhook endpoint
   */
  description: string | null;

  /**
   * Whether the webhook endpoint is disabled
   */
  disabled: boolean;

  /**
   * List of event types being filtered, or null for all events
   */
  filter_types: Array<string> | null;

  /**
   * Object type, always `webhook_endpoint`
   */
  object: 'webhook_endpoint';

  /**
   * ISO 8601 timestamp of when the endpoint was last updated
   */
  updated_at: string;

  /**
   * The URL where webhook events are sent
   */
  url: string;

  /**
   * Webhook endpoint version
   */
  version: number;

  /**
   * Custom headers included with webhook requests
   */
  headers?: { [key: string]: string };

  /**
   * Webhook signing secret (only returned on creation)
   */
  secret?: string;
}

export interface WebhookEndpointRetrieveResponse {
  /**
   * Unique identifier for the webhook endpoint
   */
  id: string;

  /**
   * Webhook channels
   */
  channels: Array<string> | null;

  /**
   * ISO 8601 timestamp of when the endpoint was created
   */
  created_at: string;

  /**
   * Description of the webhook endpoint
   */
  description: string | null;

  /**
   * Whether the webhook endpoint is disabled
   */
  disabled: boolean;

  /**
   * List of event types being filtered, or null for all events
   */
  filter_types: Array<string> | null;

  /**
   * Object type, always `webhook_endpoint`
   */
  object: 'webhook_endpoint';

  /**
   * ISO 8601 timestamp of when the endpoint was last updated
   */
  updated_at: string;

  /**
   * The URL where webhook events are sent
   */
  url: string;

  /**
   * Webhook endpoint version
   */
  version: number;

  /**
   * Custom headers included with webhook requests
   */
  headers?: { [key: string]: string };

  /**
   * Webhook signing secret (only returned on creation)
   */
  secret?: string;
}

export interface WebhookEndpointUpdateResponse {
  /**
   * Unique identifier for the webhook endpoint
   */
  id: string;

  /**
   * Webhook channels
   */
  channels: Array<string> | null;

  /**
   * ISO 8601 timestamp of when the endpoint was created
   */
  created_at: string;

  /**
   * Description of the webhook endpoint
   */
  description: string | null;

  /**
   * Whether the webhook endpoint is disabled
   */
  disabled: boolean;

  /**
   * List of event types being filtered, or null for all events
   */
  filter_types: Array<string> | null;

  /**
   * Object type, always `webhook_endpoint`
   */
  object: 'webhook_endpoint';

  /**
   * ISO 8601 timestamp of when the endpoint was last updated
   */
  updated_at: string;

  /**
   * The URL where webhook events are sent
   */
  url: string;

  /**
   * Webhook endpoint version
   */
  version: number;

  /**
   * Custom headers included with webhook requests
   */
  headers?: { [key: string]: string };

  /**
   * Webhook signing secret (only returned on creation)
   */
  secret?: string;
}

export interface WebhookEndpointListResponse {
  /**
   * List of webhook endpoints
   */
  data: Array<WebhookEndpointListResponse.Data>;

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

export namespace WebhookEndpointListResponse {
  export interface Data {
    /**
     * Unique identifier for the webhook endpoint
     */
    id: string;

    /**
     * Webhook channels
     */
    channels: Array<string> | null;

    /**
     * ISO 8601 timestamp of when the endpoint was created
     */
    created_at: string;

    /**
     * Description of the webhook endpoint
     */
    description: string | null;

    /**
     * Whether the webhook endpoint is disabled
     */
    disabled: boolean;

    /**
     * List of event types being filtered, or null for all events
     */
    filter_types: Array<string> | null;

    /**
     * Object type, always `webhook_endpoint`
     */
    object: 'webhook_endpoint';

    /**
     * ISO 8601 timestamp of when the endpoint was last updated
     */
    updated_at: string;

    /**
     * The URL where webhook events are sent
     */
    url: string;

    /**
     * Webhook endpoint version
     */
    version: number;

    /**
     * Custom headers included with webhook requests
     */
    headers?: { [key: string]: string };

    /**
     * Webhook signing secret (only returned on creation)
     */
    secret?: string;
  }
}

export interface WebhookEndpointDeleteResponse {
  /**
   * ID of the deleted webhook endpoint
   */
  id: string;

  /**
   * Always true for deletion responses
   */
  deleted: true;

  /**
   * Object type, always `webhook_endpoint`
   */
  object: 'webhook_endpoint';
}

export interface WebhookEndpointRotateSecretResponse {
  /**
   * ID of the webhook endpoint
   */
  id: string;

  /**
   * Object type, always `webhook_endpoint`
   */
  object: 'webhook_endpoint';

  /**
   * The new webhook signing secret
   */
  secret: string;
}

export interface WebhookEndpointCreateParams {
  /**
   * The URL where webhook events will be sent
   */
  url: string;

  /**
   * Description of the webhook endpoint
   */
  description?: string;

  /**
   * List of event types to filter. If omitted, all events are sent
   */
  filter_types?: Array<string>;

  /**
   * Custom headers to include with webhook requests
   */
  headers?: { [key: string]: string };

  /**
   * Arbitrary key-value metadata
   */
  metadata?: { [key: string]: string };
}

export interface WebhookEndpointRetrieveParams {
  /**
   * Project ID
   */
  project_id: string;
}

export interface WebhookEndpointUpdateParams {
  /**
   * Path param: Project ID
   */
  project_id: string;

  /**
   * Body param: Description of the webhook endpoint
   */
  description?: string | null;

  /**
   * Body param: Whether the webhook endpoint is disabled
   */
  disabled?: boolean;

  /**
   * Body param: List of event types to filter
   */
  filter_types?: Array<string>;

  /**
   * Body param: Custom headers to include with webhook requests
   */
  headers?: { [key: string]: string };

  /**
   * Body param: Arbitrary key-value metadata
   */
  metadata?: { [key: string]: string };

  /**
   * Body param: The URL where webhook events will be sent
   */
  url?: string;
}

export interface WebhookEndpointListParams {
  iterator?: string;

  /**
   * Maximum number of items to return (default: 20)
   */
  limit?: string;
}

export interface WebhookEndpointDeleteParams {
  /**
   * Project ID
   */
  project_id: string;
}

export interface WebhookEndpointRotateSecretParams {
  /**
   * Project ID
   */
  project_id: string;
}

export declare namespace WebhookEndpoints {
  export {
    type WebhookEndpointCreateResponse as WebhookEndpointCreateResponse,
    type WebhookEndpointRetrieveResponse as WebhookEndpointRetrieveResponse,
    type WebhookEndpointUpdateResponse as WebhookEndpointUpdateResponse,
    type WebhookEndpointListResponse as WebhookEndpointListResponse,
    type WebhookEndpointDeleteResponse as WebhookEndpointDeleteResponse,
    type WebhookEndpointRotateSecretResponse as WebhookEndpointRotateSecretResponse,
    type WebhookEndpointCreateParams as WebhookEndpointCreateParams,
    type WebhookEndpointRetrieveParams as WebhookEndpointRetrieveParams,
    type WebhookEndpointUpdateParams as WebhookEndpointUpdateParams,
    type WebhookEndpointListParams as WebhookEndpointListParams,
    type WebhookEndpointDeleteParams as WebhookEndpointDeleteParams,
    type WebhookEndpointRotateSecretParams as WebhookEndpointRotateSecretParams,
  };
}
