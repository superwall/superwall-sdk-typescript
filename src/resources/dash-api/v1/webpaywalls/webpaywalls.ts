// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DomainsAPI from './domains';
import {
  DomainCreateParams,
  DomainListParams,
  DomainListResponse,
  DomainRetrieveParams,
  DomainRetrieveResponse,
  Domains,
  WebPaywallDomainModel,
} from './domains';
import * as StripeAPI from './stripe';
import { Stripe } from './stripe';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Webpaywalls extends APIResource {
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  stripe: StripeAPI.Stripe = new StripeAPI.Stripe(this._client);

  retrieveConfiguration(options?: RequestOptions): APIPromise<WebpaywallRetrieveConfigurationResponse> {
    return this._client.get('/dash-api/v1/webpaywalls/configuration', {
      ...options,
      __security: { bearerAuth: true },
    });
  }
}

export interface WebpaywallRetrieveConfigurationResponse {
  baseUrl: string;
}

Webpaywalls.Domains = Domains;
Webpaywalls.Stripe = Stripe;

export declare namespace Webpaywalls {
  export { type WebpaywallRetrieveConfigurationResponse as WebpaywallRetrieveConfigurationResponse };

  export {
    Domains as Domains,
    type WebPaywallDomainModel as WebPaywallDomainModel,
    type DomainRetrieveResponse as DomainRetrieveResponse,
    type DomainListResponse as DomainListResponse,
    type DomainCreateParams as DomainCreateParams,
    type DomainRetrieveParams as DomainRetrieveParams,
    type DomainListParams as DomainListParams,
  };

  export { Stripe as Stripe };
}
