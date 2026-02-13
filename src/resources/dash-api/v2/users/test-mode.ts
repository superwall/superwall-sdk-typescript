// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class TestMode extends APIResource {
  /**
   * List Test Mode Users
   */
  retrieveTestMode(
    query: TestModeRetrieveTestModeParams,
    options?: RequestOptions,
  ): APIPromise<TestModeRetrieveTestModeResponse> {
    return this._client.get('/dash-api/v2/users/test-mode', { query, ...options });
  }

  /**
   * Update User Test Mode
   */
  updateTestMode(
    appUserID: string,
    body: TestModeUpdateTestModeParams,
    options?: RequestOptions,
  ): APIPromise<TestModeUpdateTestModeResponse> {
    return this._client.patch(path`/dash-api/v2/users/${appUserID}/test-mode`, { body, ...options });
  }
}

export interface TestModeRetrieveTestModeResponse {
  data: Array<TestModeRetrieveTestModeResponse.Data>;

  object: 'list';
}

export namespace TestModeRetrieveTestModeResponse {
  export interface Data {
    id: number;

    app_user_id: string;

    created_at: string;
  }
}

export interface TestModeUpdateTestModeResponse {
  app_user_id: string;

  object: 'test_mode_user';

  test_mode_enabled: boolean;
}

export interface TestModeRetrieveTestModeParams {
  /**
   * Application ID
   */
  application_id: string;
}

export interface TestModeUpdateTestModeParams {
  /**
   * Application ID
   */
  application_id: string;

  test_mode_enabled: boolean;
}

export declare namespace TestMode {
  export {
    type TestModeRetrieveTestModeResponse as TestModeRetrieveTestModeResponse,
    type TestModeUpdateTestModeResponse as TestModeUpdateTestModeResponse,
    type TestModeRetrieveTestModeParams as TestModeRetrieveTestModeParams,
    type TestModeUpdateTestModeParams as TestModeUpdateTestModeParams,
  };
}
