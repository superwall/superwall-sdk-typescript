// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DomainsAPI from './domains';
import { Domains } from './domains';
import * as StripeAPI from './stripe';
import { Stripe } from './stripe';

export class Webpaywalls extends APIResource {
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  stripe: StripeAPI.Stripe = new StripeAPI.Stripe(this._client);
}

Webpaywalls.Domains = Domains;
Webpaywalls.Stripe = Stripe;

export declare namespace Webpaywalls {
  export { Domains as Domains };

  export { Stripe as Stripe };
}
