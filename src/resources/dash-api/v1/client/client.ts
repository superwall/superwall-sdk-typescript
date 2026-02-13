// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import {
  SubscriptionListResponse,
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
  retrieveMeta(
    query: ClientRetrieveMetaParams,
    options?: RequestOptions,
  ): APIPromise<ClientRetrieveMetaResponse> {
    return this._client.get('/dash-api/v1/client/meta', {
      query,
      ...options,
      __security: { bearerAuth: true },
    });
  }
}

export interface ClientRetrieveMetaResponse {
  data: ClientRetrieveMetaResponse.Data;

  object: 'client.meta';
}

export namespace ClientRetrieveMetaResponse {
  export interface Data {
    requiresUpgrade: boolean;
  }
}

export interface ClientRetrieveMetaParams {
  platform: 'ios';

  version: string;
}

Client.Subscriptions = Subscriptions;

export declare namespace Client {
  export {
    type ClientRetrieveMetaResponse as ClientRetrieveMetaResponse,
    type ClientRetrieveMetaParams as ClientRetrieveMetaParams,
  };

  export {
    Subscriptions as Subscriptions,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionSubscribeResponse as SubscriptionSubscribeResponse,
    type SubscriptionUnsubscribeResponse as SubscriptionUnsubscribeResponse,
    type SubscriptionSubscribeParams as SubscriptionSubscribeParams,
    type SubscriptionUnsubscribeParams as SubscriptionUnsubscribeParams,
  };
}
