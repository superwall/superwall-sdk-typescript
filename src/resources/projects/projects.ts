// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ApplicationsAPI from './applications';
import {
  ApplicationCreateParams,
  ApplicationCreateResponse,
  ApplicationGetStatisticsParams,
  ApplicationGetStatisticsResponse,
  ApplicationListRecentTransactionsParams,
  ApplicationListRecentTransactionsResponse,
  ApplicationUpdateParams,
  ApplicationUpdateResponse,
  ApplicationUpdateSettingsParams,
  ApplicationUpdateSettingsResponse,
  Applications,
} from './applications';
import * as EventsAPI from './events';
import {
  EventListAttemptsParams,
  EventListAttemptsResponse,
  EventListParams,
  EventListResponse,
  EventRetrieveParams,
  EventRetrieveResponse,
  EventRetryDeliveryParams,
  EventRetryDeliveryResponse,
  Events,
} from './events';
import * as WebhookEndpointsAPI from './webhook-endpoints';
import {
  WebhookEndpointCreateParams,
  WebhookEndpointCreateResponse,
  WebhookEndpointDeleteParams,
  WebhookEndpointDeleteResponse,
  WebhookEndpointListParams,
  WebhookEndpointListResponse,
  WebhookEndpointRetrieveParams,
  WebhookEndpointRetrieveResponse,
  WebhookEndpointRotateSecretParams,
  WebhookEndpointRotateSecretResponse,
  WebhookEndpointUpdateParams,
  WebhookEndpointUpdateResponse,
  WebhookEndpoints,
} from './webhook-endpoints';
import * as UsersAPI from '../users/users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Projects extends APIResource {
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);
  webhookEndpoints: WebhookEndpointsAPI.WebhookEndpoints = new WebhookEndpointsAPI.WebhookEndpoints(
    this._client,
  );
  events: EventsAPI.Events = new EventsAPI.Events(this._client);

  /**
   * Creates a new project in the organization. Requires projects:write scope.
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<ProjectCreateResponse> {
    return this._client.post('/v2/projects', { body, ...options });
  }

  /**
   * Retrieves a project by ID. Requires projects:read scope.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ProjectRetrieveResponse> {
    return this._client.get(path`/v2/projects/${id}`, options);
  }

  /**
   * Updates a project's name or metadata. Requires projects:write scope.
   */
  update(id: string, body: ProjectUpdateParams, options?: RequestOptions): APIPromise<ProjectUpdateResponse> {
    return this._client.patch(path`/v2/projects/${id}`, { body, ...options });
  }

  /**
   * Returns a list of projects for the organization. Supports pagination and
   * filtering by archived status. Requires projects:read scope.
   */
  list(
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectListResponse> {
    return this._client.get('/v2/projects', { query, ...options });
  }

  /**
   * Archives a project. Archived projects are not returned in list queries by
   * default. Requires projects:write scope.
   */
  archive(id: string, options?: RequestOptions): APIPromise<ProjectArchiveResponse> {
    return this._client.post(path`/v2/projects/${id}/archive`, options);
  }

  /**
   * Unarchives a previously archived project. Requires projects:write scope.
   */
  unarchive(id: string, options?: RequestOptions): APIPromise<ProjectUnarchiveResponse> {
    return this._client.post(path`/v2/projects/${id}/unarchive`, options);
  }
}

export interface ProjectCreateResponse {
  /**
   * Unique identifier for the project
   */
  id: string;

  /**
   * List of applications in this project
   */
  applications: Array<ProjectCreateResponse.Application>;

  /**
   * Whether the project is archived
   */
  archived: boolean;

  /**
   * ISO 8601 timestamp of when the project was created
   */
  created_at: string;

  metadata: unknown;

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

export namespace ProjectCreateResponse {
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

export interface ProjectRetrieveResponse {
  /**
   * Unique identifier for the project
   */
  id: string;

  /**
   * List of applications in this project
   */
  applications: Array<ProjectRetrieveResponse.Application>;

  /**
   * Whether the project is archived
   */
  archived: boolean;

  /**
   * ISO 8601 timestamp of when the project was created
   */
  created_at: string;

  metadata: unknown;

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

export namespace ProjectRetrieveResponse {
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

export interface ProjectUpdateResponse {
  /**
   * Unique identifier for the project
   */
  id: string;

  /**
   * List of applications in this project
   */
  applications: Array<ProjectUpdateResponse.Application>;

  /**
   * Whether the project is archived
   */
  archived: boolean;

  /**
   * ISO 8601 timestamp of when the project was created
   */
  created_at: string;

  metadata: unknown;

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

export namespace ProjectUpdateResponse {
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

export interface ProjectListResponse {
  /**
   * List of results
   */
  data: Array<ProjectListResponse.Data>;

  /**
   * Whether there are more results available beyond this page
   */
  has_more: boolean;

  /**
   * Object type, always `list`
   */
  object: 'list';

  /**
   * API endpoint URL for this list
   */
  url: '/v2/projects';
}

export namespace ProjectListResponse {
  export interface Data {
    /**
     * Unique identifier for the project
     */
    id: string;

    /**
     * List of applications in this project
     */
    applications: Array<Data.Application>;

    /**
     * Whether the project is archived
     */
    archived: boolean;

    /**
     * ISO 8601 timestamp of when the project was created
     */
    created_at: string;

    metadata: unknown;

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

  export namespace Data {
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
}

export interface ProjectArchiveResponse {
  /**
   * ID of the project
   */
  id: string;

  /**
   * Whether the project is now archived
   */
  archived: boolean;

  /**
   * Object type, always `project`
   */
  object: 'project';
}

export interface ProjectUnarchiveResponse {
  /**
   * ID of the project
   */
  id: string;

  /**
   * Whether the project is now archived
   */
  archived: boolean;

  /**
   * Object type, always `project`
   */
  object: 'project';
}

export interface ProjectCreateParams {
  /**
   * Display name of the project
   */
  name: string;

  /**
   * Organization ID to create the project in
   */
  organization_id: number;

  /**
   * Arbitrary key-value metadata to attach to the project
   */
  metadata?: unknown;
}

export interface ProjectUpdateParams {
  /**
   * Arbitrary key-value metadata to attach to the project
   */
  metadata?: unknown;

  /**
   * Display name of the project
   */
  name?: string;
}

export interface ProjectListParams {
  /**
   * Include archived items (default: false)
   */
  archived?: UsersAPI.BooleanFromString;

  /**
   * a string to be decoded into a number
   */
  ending_before?: string;

  /**
   * Maximum number of items to return (1-100, default: 10)
   */
  limit?: string;

  /**
   * a string to be decoded into a number
   */
  organization_id?: string;

  /**
   * a string to be decoded into a number
   */
  starting_after?: string;
}

Projects.Applications = Applications;
Projects.WebhookEndpoints = WebhookEndpoints;
Projects.Events = Events;

export declare namespace Projects {
  export {
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectUpdateResponse as ProjectUpdateResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectArchiveResponse as ProjectArchiveResponse,
    type ProjectUnarchiveResponse as ProjectUnarchiveResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
  };

  export {
    Applications as Applications,
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

  export {
    WebhookEndpoints as WebhookEndpoints,
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

  export {
    Events as Events,
    type EventRetrieveResponse as EventRetrieveResponse,
    type EventListResponse as EventListResponse,
    type EventListAttemptsResponse as EventListAttemptsResponse,
    type EventRetryDeliveryResponse as EventRetryDeliveryResponse,
    type EventRetrieveParams as EventRetrieveParams,
    type EventListParams as EventListParams,
    type EventListAttemptsParams as EventListAttemptsParams,
    type EventRetryDeliveryParams as EventRetryDeliveryParams,
  };
}
