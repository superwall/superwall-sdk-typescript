// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DomainsAPI from './domains';
import {
  DomainAddParams,
  DomainCheckAvailabilityParams,
  DomainCheckAvailabilityResponse,
  DomainListParams,
  DomainListResponse,
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

  getConfiguration(options?: RequestOptions): APIPromise<WebpaywallGetConfigurationResponse> {
    return this._client.get('/dash-api/v1/webpaywalls/configuration', {
      ...options,
      __security: { bearerAuth: true },
    });
  }
}

export interface WebpaywallGetConfigurationResponse {
  baseUrl: string;
}

Webpaywalls.Domains = Domains;
Webpaywalls.Stripe = Stripe;

export declare namespace Webpaywalls {
  export { type WebpaywallGetConfigurationResponse as WebpaywallGetConfigurationResponse };

  export {
    Domains as Domains,
    type WebPaywallDomainModel as WebPaywallDomainModel,
    type DomainListResponse as DomainListResponse,
    type DomainCheckAvailabilityResponse as DomainCheckAvailabilityResponse,
    type DomainListParams as DomainListParams,
    type DomainAddParams as DomainAddParams,
    type DomainCheckAvailabilityParams as DomainCheckAvailabilityParams,
  };

  export { Stripe as Stripe };
}
