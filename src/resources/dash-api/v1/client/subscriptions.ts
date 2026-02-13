// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * Get user's OneSignal subscription information by player ID
   */
  get(playerID: string, options?: RequestOptions): APIPromise<SubscriptionGetResponse> {
    return this._client.get(path`/dash-api/v1/client/${playerID}/subscriptions`, {
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Subscribe user to up to 10 applications via OneSignal
   */
  subscribe(
    playerID: string,
    body: SubscriptionSubscribeParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionSubscribeResponse> {
    return this._client.post(path`/dash-api/v1/client/${playerID}/subscriptions/subscribe`, {
      body,
      ...options,
      __security: { bearerAuth: true },
    });
  }

  /**
   * Unsubscribe user from applications via OneSignal
   */
  unsubscribe(
    playerID: string,
    body: SubscriptionUnsubscribeParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionUnsubscribeResponse> {
    return this._client.post(path`/dash-api/v1/client/${playerID}/subscriptions/unsubscribe`, {
      body,
      ...options,
      __security: { bearerAuth: true },
    });
  }
}

/**
 * User's OneSignal subscription information
 */
export interface SubscriptionGetResponse {
  oneSignalPlayerId: string;

  /**
   * Array of application objects the user is subscribed to
   */
  subscribedApplications: Array<SubscriptionGetResponse.SubscribedApplication>;
}

export namespace SubscriptionGetResponse {
  /**
   * Application object containing ID
   */
  export interface SubscribedApplication {
    /**
     * a string to be decoded into a number
     */
    applicationId: string;
  }
}

/**
 * User's OneSignal subscription information
 */
export interface SubscriptionSubscribeResponse {
  oneSignalPlayerId: string;

  /**
   * Array of application objects the user is subscribed to
   */
  subscribedApplications: Array<SubscriptionSubscribeResponse.SubscribedApplication>;
}

export namespace SubscriptionSubscribeResponse {
  /**
   * Application object containing ID
   */
  export interface SubscribedApplication {
    /**
     * a string to be decoded into a number
     */
    applicationId: string;
  }
}

/**
 * User's OneSignal subscription information
 */
export interface SubscriptionUnsubscribeResponse {
  oneSignalPlayerId: string;

  /**
   * Array of application objects the user is subscribed to
   */
  subscribedApplications: Array<SubscriptionUnsubscribeResponse.SubscribedApplication>;
}

export namespace SubscriptionUnsubscribeResponse {
  /**
   * Application object containing ID
   */
  export interface SubscribedApplication {
    /**
     * a string to be decoded into a number
     */
    applicationId: string;
  }
}

export interface SubscriptionSubscribeParams {
  applications: Array<SubscriptionSubscribeParams.Application>;
}

export namespace SubscriptionSubscribeParams {
  export interface Application {
    applicationId: string;
  }
}

export interface SubscriptionUnsubscribeParams {
  /**
   * Array of application objects to subscribe/unsubscribe from
   */
  applications: Array<SubscriptionUnsubscribeParams.Application>;
}

export namespace SubscriptionUnsubscribeParams {
  /**
   * Application object containing ID
   */
  export interface Application {
    /**
     * a string to be decoded into a number
     */
    applicationId: string;
  }
}

export declare namespace Subscriptions {
  export {
    type SubscriptionGetResponse as SubscriptionGetResponse,
    type SubscriptionSubscribeResponse as SubscriptionSubscribeResponse,
    type SubscriptionUnsubscribeResponse as SubscriptionUnsubscribeResponse,
    type SubscriptionSubscribeParams as SubscriptionSubscribeParams,
    type SubscriptionUnsubscribeParams as SubscriptionUnsubscribeParams,
  };
}
