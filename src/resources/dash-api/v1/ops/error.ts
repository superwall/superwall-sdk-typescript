// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Error extends APIResource {
  /**
   * Reports frontend errors to monitoring systems including Slack notifications.
   * Requires authentication.
   */
  create(body: ErrorCreateParams, options?: RequestOptions): APIPromise<ErrorCreateResponse> {
    return this._client.post('/dash-api/v1/ops/error', {
      body,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Reports frontend errors to monitoring systems including Slack notifications.
   * Does not require authentication.
   */
  unauthenticated(
    body: ErrorUnauthenticatedParams,
    options?: RequestOptions,
  ): APIPromise<ErrorUnauthenticatedResponse> {
    return this._client.post('/dash-api/v1/ops/error/unauthenticated', { body, ...options, __security: {} });
  }
}

export interface ErrorCreateResponse {
  success: boolean;

  message?: string;
}

export interface ErrorUnauthenticatedResponse {
  success: boolean;

  message?: string;
}

export interface ErrorCreateParams {
  message: string;

  name: string;

  pathname: string;

  timestamp: string;

  url: string;

  additionalContext?: { [key: string]: unknown };

  environment?: string;

  organizationId?: number;

  organizationName?: string;

  stack?: string;

  userAgent?: string;

  userEmail?: string;

  userId?: string;
}

export interface ErrorUnauthenticatedParams {
  message: string;

  name: string;

  pathname: string;

  timestamp: string;

  url: string;

  additionalContext?: { [key: string]: unknown };

  environment?: string;

  organizationId?: number;

  organizationName?: string;

  stack?: string;

  userAgent?: string;

  userEmail?: string;

  userId?: string;
}

export declare namespace Error {
  export {
    type ErrorCreateResponse as ErrorCreateResponse,
    type ErrorUnauthenticatedResponse as ErrorUnauthenticatedResponse,
    type ErrorCreateParams as ErrorCreateParams,
    type ErrorUnauthenticatedParams as ErrorUnauthenticatedParams,
  };
}
