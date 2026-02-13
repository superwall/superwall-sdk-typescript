// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Integrations extends APIResource {
  /**
   * Create Web2App Integration
   */
  create(
    projectID: string,
    body: IntegrationCreateParams,
    options?: RequestOptions,
  ): APIPromise<Web2appIntegrationModel> {
    return this._client.post(path`/dash-api/v1/web2appintegrations/${projectID}/integrations`, {
      body,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Update Web2App Integration
   */
  update(
    integrationID: string,
    params: IntegrationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Web2appIntegrationModel> {
    const { projectId, ...body } = params;
    return this._client.patch(
      path`/dash-api/v1/web2appintegrations/${projectId}/integrations/${integrationID}`,
      { body, ...options, __security: { bearerAuth: true } },
    );
  }

  /**
   * List Web2App Integrations
   */
  list(projectID: string, options?: RequestOptions): APIPromise<IntegrationListResponse> {
    return this._client.get(path`/dash-api/v1/web2appintegrations/${projectID}/integrations`, {
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Delete Web2App Integration
   */
  delete(integrationID: string, params: IntegrationDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.delete(
      path`/dash-api/v1/web2appintegrations/${projectId}/integrations/${integrationID}`,
      {
        ...options,
        headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
        __security: { bearerAuth: true },
      },
    );
  }

  /**
   * Get Web2App Integration
   */
  get(
    integrationID: string,
    params: IntegrationGetParams,
    options?: RequestOptions,
  ): APIPromise<Web2appIntegrationModel> {
    const { projectId } = params;
    return this._client.get(
      path`/dash-api/v1/web2appintegrations/${projectId}/integrations/${integrationID}`,
      { ...options, __security: { bearerAuth: true } },
    );
  }
}

export interface Web2appIntegrationModel {
  /**
   * an integer
   */
  id: number;

  /**
   * an integer
   */
  applicationId: number;

  config: unknown;

  /**
   * a string to be decoded into a Date
   */
  createdAt: string;

  /**
   * a string to be decoded into a Date
   */
  deletedAt: string | null;

  enabled: boolean;

  integrationId: 'facebook-pixel' | 'console-logger' | 'google-tag-manager';

  name: string;

  object: 'web2app_integration';

  /**
   * a string to be decoded into a Date
   */
  updatedAt: string;
}

export interface IntegrationListResponse {
  data: Array<Web2appIntegrationModel>;

  object: 'list';
}

export interface IntegrationCreateParams {
  integrationId: 'facebook-pixel' | 'console-logger' | 'google-tag-manager';

  name: string;

  config?: unknown;

  enabled?: boolean;
}

export interface IntegrationUpdateParams {
  /**
   * Path param: a string to be decoded into a number
   */
  projectId: string;

  /**
   * Body param
   */
  config?: unknown;

  /**
   * Body param
   */
  enabled?: boolean;

  /**
   * Body param
   */
  body_integrationId?: 'facebook-pixel' | 'console-logger' | 'google-tag-manager';

  /**
   * Body param
   */
  name?: string;
}

export interface IntegrationDeleteParams {
  /**
   * a string to be decoded into a number
   */
  projectId: string;
}

export interface IntegrationGetParams {
  /**
   * a string to be decoded into a number
   */
  projectId: string;
}

export declare namespace Integrations {
  export {
    type Web2appIntegrationModel as Web2appIntegrationModel,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationCreateParams as IntegrationCreateParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationDeleteParams as IntegrationDeleteParams,
    type IntegrationGetParams as IntegrationGetParams,
  };
}
