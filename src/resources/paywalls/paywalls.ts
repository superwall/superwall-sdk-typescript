// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TemplatesAPI from './templates';
import { TemplateListParams, TemplateListResponse, TemplateRetrieveResponse, Templates } from './templates';
import * as UsersAPI from '../users/users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage paywalls and paywall templates. A Paywall is a monetization screen shown to users.
 */
export class Paywalls extends APIResource {
  templates: TemplatesAPI.Templates = new TemplatesAPI.Templates(this._client);

  /**
   * Creates a new paywall in the specified application. Optionally create from a
   * template by providing the `template` field. Requires paywalls:write scope.
   */
  create(body: PaywallCreateParams, options?: RequestOptions): APIPromise<PaywallCreateResponse> {
    return this._client.post('/v2/paywalls', { body, ...options });
  }

  /**
   * Retrieves a paywall by ID. Requires paywalls:read scope.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PaywallRetrieveResponse> {
    return this._client.get(path`/v2/paywalls/${id}`, options);
  }

  /**
   * Updates a paywall's name, presentation style, products, feature gating, or
   * metadata. Requires paywalls:write scope.
   */
  update(id: string, body: PaywallUpdateParams, options?: RequestOptions): APIPromise<PaywallUpdateResponse> {
    return this._client.patch(path`/v2/paywalls/${id}`, { body, ...options });
  }

  /**
   * Returns a list of paywalls for the specified application. Requires paywalls:read
   * scope. The `application_id` query parameter is required.
   */
  list(query: PaywallListParams, options?: RequestOptions): APIPromise<PaywallListResponse> {
    return this._client.get('/v2/paywalls', { query, ...options });
  }

  /**
   * Archives a paywall. Archived paywalls are not returned in list queries by
   * default. Requires paywalls:write scope.
   */
  archive(id: string, options?: RequestOptions): APIPromise<PaywallArchiveResponse> {
    return this._client.post(path`/v2/paywalls/${id}/archive`, options);
  }

  /**
   * Publishes the current draft as a new version. Requires paywalls:write scope.
   */
  publish(id: string, options?: RequestOptions): APIPromise<PaywallPublishResponse> {
    return this._client.post(path`/v2/paywalls/${id}/publish`, options);
  }

  /**
   * Restores an archived paywall. Requires paywalls:write scope.
   */
  unarchive(id: string, options?: RequestOptions): APIPromise<PaywallUnarchiveResponse> {
    return this._client.post(path`/v2/paywalls/${id}/unarchive`, options);
  }
}

export interface PaywallCreateResponse {
  /**
   * Unique identifier for the paywall
   */
  id: string;

  /**
   * ID of the application this paywall belongs to
   */
  application_id: string;

  /**
   * Whether the paywall is archived
   */
  archived: boolean;

  /**
   * ISO 8601 timestamp of when the paywall was created
   */
  created_at: string;

  /**
   * Whether the feature is gated behind a purchase
   */
  feature_gating: 'gated' | 'non_gated';

  /**
   * URL-safe identifier (slug) for the paywall
   */
  identifier: string;

  metadata: { [key: string]: string };

  /**
   * Display name of the paywall
   */
  name: string;

  /**
   * Object type, always `paywall`
   */
  object: 'paywall';

  /**
   * URL to the interactive paywall
   */
  paywall_url: string;

  /**
   * How the paywall is presented to the user
   */
  presentation_style: 'fullscreen' | 'modal' | 'sheet' | 'push';

  /**
   * URL to a preview screenshot of the paywall, or null
   */
  preview_url: string | null;

  /**
   * List of product identifiers attached to this paywall
   */
  products: Array<string>;

  /**
   * ISO 8601 timestamp of when the paywall was last published, or null
   */
  published_at: string | null;

  /**
   * a string to be decoded into a number
   */
  source_template: string | null;

  /**
   * Current status of the paywall
   */
  status: 'draft' | 'active' | 'archived';

  /**
   * ISO 8601 timestamp of when the paywall was last updated
   */
  updated_at: string;

  /**
   * Current published version number
   */
  version: number;
}

export interface PaywallRetrieveResponse {
  /**
   * Unique identifier for the paywall
   */
  id: string;

  /**
   * ID of the application this paywall belongs to
   */
  application_id: string;

  /**
   * Whether the paywall is archived
   */
  archived: boolean;

  /**
   * ISO 8601 timestamp of when the paywall was created
   */
  created_at: string;

  /**
   * Whether the feature is gated behind a purchase
   */
  feature_gating: 'gated' | 'non_gated';

  /**
   * URL-safe identifier (slug) for the paywall
   */
  identifier: string;

  metadata: { [key: string]: string };

  /**
   * Display name of the paywall
   */
  name: string;

  /**
   * Object type, always `paywall`
   */
  object: 'paywall';

  /**
   * URL to the interactive paywall
   */
  paywall_url: string;

  /**
   * How the paywall is presented to the user
   */
  presentation_style: 'fullscreen' | 'modal' | 'sheet' | 'push';

  /**
   * URL to a preview screenshot of the paywall, or null
   */
  preview_url: string | null;

  /**
   * List of product identifiers attached to this paywall
   */
  products: Array<string>;

  /**
   * ISO 8601 timestamp of when the paywall was last published, or null
   */
  published_at: string | null;

  /**
   * a string to be decoded into a number
   */
  source_template: string | null;

  /**
   * Current status of the paywall
   */
  status: 'draft' | 'active' | 'archived';

  /**
   * ISO 8601 timestamp of when the paywall was last updated
   */
  updated_at: string;

  /**
   * Current published version number
   */
  version: number;
}

export interface PaywallUpdateResponse {
  /**
   * Unique identifier for the paywall
   */
  id: string;

  /**
   * ID of the application this paywall belongs to
   */
  application_id: string;

  /**
   * Whether the paywall is archived
   */
  archived: boolean;

  /**
   * ISO 8601 timestamp of when the paywall was created
   */
  created_at: string;

  /**
   * Whether the feature is gated behind a purchase
   */
  feature_gating: 'gated' | 'non_gated';

  /**
   * URL-safe identifier (slug) for the paywall
   */
  identifier: string;

  metadata: { [key: string]: string };

  /**
   * Display name of the paywall
   */
  name: string;

  /**
   * Object type, always `paywall`
   */
  object: 'paywall';

  /**
   * URL to the interactive paywall
   */
  paywall_url: string;

  /**
   * How the paywall is presented to the user
   */
  presentation_style: 'fullscreen' | 'modal' | 'sheet' | 'push';

  /**
   * URL to a preview screenshot of the paywall, or null
   */
  preview_url: string | null;

  /**
   * List of product identifiers attached to this paywall
   */
  products: Array<string>;

  /**
   * ISO 8601 timestamp of when the paywall was last published, or null
   */
  published_at: string | null;

  /**
   * a string to be decoded into a number
   */
  source_template: string | null;

  /**
   * Current status of the paywall
   */
  status: 'draft' | 'active' | 'archived';

  /**
   * ISO 8601 timestamp of when the paywall was last updated
   */
  updated_at: string;

  /**
   * Current published version number
   */
  version: number;
}

export interface PaywallListResponse {
  /**
   * List of results
   */
  data: Array<PaywallListResponse.Data>;

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
  url: '/v2/paywalls';
}

export namespace PaywallListResponse {
  export interface Data {
    /**
     * Unique identifier for the paywall
     */
    id: string;

    /**
     * ID of the application this paywall belongs to
     */
    application_id: string;

    /**
     * Whether the paywall is archived
     */
    archived: boolean;

    /**
     * ISO 8601 timestamp of when the paywall was created
     */
    created_at: string;

    /**
     * Whether the feature is gated behind a purchase
     */
    feature_gating: 'gated' | 'non_gated';

    /**
     * URL-safe identifier (slug) for the paywall
     */
    identifier: string;

    metadata: { [key: string]: string };

    /**
     * Display name of the paywall
     */
    name: string;

    /**
     * Object type, always `paywall`
     */
    object: 'paywall';

    /**
     * URL to the interactive paywall
     */
    paywall_url: string;

    /**
     * How the paywall is presented to the user
     */
    presentation_style: 'fullscreen' | 'modal' | 'sheet' | 'push';

    /**
     * URL to a preview screenshot of the paywall, or null
     */
    preview_url: string | null;

    /**
     * List of product identifiers attached to this paywall
     */
    products: Array<string>;

    /**
     * ISO 8601 timestamp of when the paywall was last published, or null
     */
    published_at: string | null;

    /**
     * a string to be decoded into a number
     */
    source_template: string | null;

    /**
     * Current status of the paywall
     */
    status: 'draft' | 'active' | 'archived';

    /**
     * ISO 8601 timestamp of when the paywall was last updated
     */
    updated_at: string;

    /**
     * Current published version number
     */
    version: number;
  }
}

export interface PaywallArchiveResponse {
  /**
   * ID of the paywall
   */
  id: string;

  /**
   * Whether the paywall is now archived
   */
  archived: boolean;

  /**
   * Object type, always `paywall`
   */
  object: 'paywall';
}

export interface PaywallPublishResponse {
  /**
   * ID of the paywall
   */
  id: string;

  /**
   * Object type, always `paywall`
   */
  object: 'paywall';

  /**
   * ISO 8601 timestamp of when the paywall was published
   */
  published_at: string;

  /**
   * The new published version number
   */
  version: number;
}

export interface PaywallUnarchiveResponse {
  /**
   * ID of the paywall
   */
  id: string;

  /**
   * Whether the paywall is now archived
   */
  archived: boolean;

  /**
   * Object type, always `paywall`
   */
  object: 'paywall';
}

export interface PaywallCreateParams {
  /**
   * ID of the application to create the paywall in
   */
  application_id: string;

  /**
   * Display name of the paywall
   */
  name: string;

  /**
   * Whether the feature is gated behind a purchase. Defaults to `non_gated`
   */
  feature_gating?: 'gated' | 'non_gated';

  /**
   * URL-safe identifier (slug). Auto-generated from name if not provided
   */
  identifier?: string;

  /**
   * Arbitrary key-value metadata to attach to the paywall
   */
  metadata?: { [key: string]: string };

  /**
   * How the paywall is presented. Defaults to `fullscreen`
   */
  presentation_style?: 'fullscreen' | 'modal' | 'sheet' | 'push';

  /**
   * List of product identifiers to attach to this paywall
   */
  products?: Array<string>;

  /**
   * ID of the template to create the paywall from
   */
  template?: string;
}

export interface PaywallUpdateParams {
  /**
   * Whether the feature is gated behind a purchase
   */
  feature_gating?: 'gated' | 'non_gated';

  /**
   * Arbitrary key-value metadata to attach to the paywall
   */
  metadata?: { [key: string]: string };

  /**
   * Display name of the paywall
   */
  name?: string;

  /**
   * How the paywall is presented to the user
   */
  presentation_style?: 'fullscreen' | 'modal' | 'sheet' | 'push';

  /**
   * List of product identifiers to attach to this paywall
   */
  products?: Array<string>;
}

export interface PaywallListParams {
  /**
   * Filter by application ID (required)
   */
  application_id: string;

  /**
   * Include archived paywalls (default: false)
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
  starting_after?: string;

  /**
   * Current status of the paywall
   */
  status?: 'draft' | 'active' | 'archived';
}

Paywalls.Templates = Templates;

export declare namespace Paywalls {
  export {
    type PaywallCreateResponse as PaywallCreateResponse,
    type PaywallRetrieveResponse as PaywallRetrieveResponse,
    type PaywallUpdateResponse as PaywallUpdateResponse,
    type PaywallListResponse as PaywallListResponse,
    type PaywallArchiveResponse as PaywallArchiveResponse,
    type PaywallPublishResponse as PaywallPublishResponse,
    type PaywallUnarchiveResponse as PaywallUnarchiveResponse,
    type PaywallCreateParams as PaywallCreateParams,
    type PaywallUpdateParams as PaywallUpdateParams,
    type PaywallListParams as PaywallListParams,
  };

  export {
    Templates as Templates,
    type TemplateRetrieveResponse as TemplateRetrieveResponse,
    type TemplateListResponse as TemplateListResponse,
    type TemplateListParams as TemplateListParams,
  };
}
