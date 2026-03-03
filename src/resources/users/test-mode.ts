// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage users, user attributes, events, and diagnostics for an application.
 */
export class TestMode extends APIResource {
  /**
   * Update User Test Mode
   */
  update(
    appUserID: string,
    body: TestModeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TestModeUpdateResponse> {
    return this._client.patch(path`/v2/users/${appUserID}/test-mode`, { body, ...options });
  }

  /**
   * List Test Mode Users
   */
  list(query: TestModeListParams, options?: RequestOptions): APIPromise<TestModeListResponse> {
    return this._client.get('/v2/users/test-mode', { query, ...options });
  }
}

export interface TestModeUpdateResponse {
  app_user_id: string;

  object: 'test_mode_user';

  test_mode_enabled: boolean;
}

export interface TestModeListResponse {
  data: Array<TestModeListResponse.Data>;

  object: 'list';
}

export namespace TestModeListResponse {
  export interface Data {
    id: number;

    app_user_id: string;

    created_at: string;
  }
}

export interface TestModeUpdateParams {
  /**
   * Application ID
   */
  application_id: string;

  test_mode_enabled: boolean;
}

export interface TestModeListParams {
  /**
   * Application ID
   */
  application_id: string;
}

export declare namespace TestMode {
  export {
    type TestModeUpdateResponse as TestModeUpdateResponse,
    type TestModeListResponse as TestModeListResponse,
    type TestModeUpdateParams as TestModeUpdateParams,
    type TestModeListParams as TestModeListParams,
  };
}
