// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage paywalls and paywall templates. A Paywall is a monetization screen shown to users. Paywalls are scoped to a specific application (per-platform) since their design and behavior are platform-specific.
 */
export class Templates extends APIResource {
  /**
   * Retrieves a paywall template by ID. Requires paywalls:read scope.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TemplateRetrieveResponse> {
    return this._client.get(path`/v2/paywalls/templates/${id}`, options);
  }

  /**
   * Returns a list of available paywall templates. Filter by category or visibility.
   * Requires paywalls:read scope.
   */
  list(query: TemplateListParams, options?: RequestOptions): APIPromise<TemplateListResponse> {
    return this._client.get('/v2/paywalls/templates', { query, ...options });
  }
}

export interface TemplateRetrieveResponse {
  /**
   * Unique identifier for the template
   */
  id: string;

  /**
   * Categories this template belongs to
   */
  categories: Array<string>;

  /**
   * ISO 8601 timestamp of when the template was created
   */
  created_at: string;

  /**
   * Description of the template, or null
   */
  description: string | null;

  /**
   * Display name of the template
   */
  name: string;

  /**
   * Object type, always `paywall_template`
   */
  object: 'paywall_template';

  /**
   * Default presentation style of the template
   */
  presentation_style: 'fullscreen' | 'modal' | 'sheet' | 'push';

  /**
   * URL to preview the template, or null
   */
  preview_url: string | null;

  /**
   * ISO 8601 timestamp of when the template was last updated
   */
  updated_at: string;

  /**
   * Visibility scope of the template
   */
  visibility: 'public' | 'organization';
}

export interface TemplateListResponse {
  /**
   * List of results
   */
  data: Array<TemplateListResponse.Data>;

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
  url: '/v2/paywalls/templates';
}

export namespace TemplateListResponse {
  export interface Data {
    /**
     * Unique identifier for the template
     */
    id: string;

    /**
     * Categories this template belongs to
     */
    categories: Array<string>;

    /**
     * ISO 8601 timestamp of when the template was created
     */
    created_at: string;

    /**
     * Description of the template, or null
     */
    description: string | null;

    /**
     * Display name of the template
     */
    name: string;

    /**
     * Object type, always `paywall_template`
     */
    object: 'paywall_template';

    /**
     * Default presentation style of the template
     */
    presentation_style: 'fullscreen' | 'modal' | 'sheet' | 'push';

    /**
     * URL to preview the template, or null
     */
    preview_url: string | null;

    /**
     * ISO 8601 timestamp of when the template was last updated
     */
    updated_at: string;

    /**
     * Visibility scope of the template
     */
    visibility: 'public' | 'organization';
  }
}

export interface TemplateListParams {
  /**
   * Filter by application ID (required)
   */
  application_id: string;

  category?: string;

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
   * Visibility scope of the template
   */
  visibility?: 'public' | 'organization';
}

export declare namespace Templates {
  export {
    type TemplateRetrieveResponse as TemplateRetrieveResponse,
    type TemplateListResponse as TemplateListResponse,
    type TemplateListParams as TemplateListParams,
  };
}
