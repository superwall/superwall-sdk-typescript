// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import {
  SubscriptionGetResponse,
  SubscriptionSubscribeParams,
  SubscriptionSubscribeResponse,
  SubscriptionUnsubscribeParams,
  SubscriptionUnsubscribeResponse,
  Subscriptions,
} from './subscriptions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Client extends APIResource {
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);

  /**
   * Get Meta
   */
  getMeta(query: ClientGetMetaParams, options?: RequestOptions): APIPromise<ClientGetMetaResponse> {
    return this._client.get('/dash-api/v1/client/meta', {
      query,
      ...options,
      __security: { bearerAuth: true },
    });
  }
}

export interface ClientGetMetaResponse {
  data: ClientGetMetaResponse.Data;

  object: 'client.meta';
}

export namespace ClientGetMetaResponse {
  export interface Data {
    requiresUpgrade: boolean;
  }
}

export interface ClientGetMetaParams {
  platform: 'ios';

  version: string;
}

Client.Subscriptions = Subscriptions;

export declare namespace Client {
  export {
    type ClientGetMetaResponse as ClientGetMetaResponse,
    type ClientGetMetaParams as ClientGetMetaParams,
  };

  export {
    Subscriptions as Subscriptions,
    type SubscriptionGetResponse as SubscriptionGetResponse,
    type SubscriptionSubscribeResponse as SubscriptionSubscribeResponse,
    type SubscriptionUnsubscribeResponse as SubscriptionUnsubscribeResponse,
    type SubscriptionSubscribeParams as SubscriptionSubscribeParams,
    type SubscriptionUnsubscribeParams as SubscriptionUnsubscribeParams,
  };
}
