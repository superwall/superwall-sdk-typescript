// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Error extends APIResource {
  /**
   * Reports frontend errors to monitoring systems including Slack notifications.
   * Requires authentication.
   */
  reportAuthenticated(
    body: ErrorReportAuthenticatedParams,
    options?: RequestOptions,
  ): APIPromise<ErrorReportAuthenticatedResponse> {
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
  reportUnauthenticated(
    body: ErrorReportUnauthenticatedParams,
    options?: RequestOptions,
  ): APIPromise<ErrorReportUnauthenticatedResponse> {
    return this._client.post('/dash-api/v1/ops/error/unauthenticated', { body, ...options, __security: {} });
  }
}

export interface ErrorReportAuthenticatedResponse {
  success: boolean;

  message?: string;
}

export interface ErrorReportUnauthenticatedResponse {
  success: boolean;

  message?: string;
}

export interface ErrorReportAuthenticatedParams {
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

export interface ErrorReportUnauthenticatedParams {
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
    type ErrorReportAuthenticatedResponse as ErrorReportAuthenticatedResponse,
    type ErrorReportUnauthenticatedResponse as ErrorReportUnauthenticatedResponse,
    type ErrorReportAuthenticatedParams as ErrorReportAuthenticatedParams,
    type ErrorReportUnauthenticatedParams as ErrorReportUnauthenticatedParams,
  };
}
