// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Products extends APIResource {
  /**
   * Creates a new product in the specified application. Requires products:write
   * scope.
   */
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<ProductCreateResponse> {
    return this._client.post('/dash-api/v2/products', { body, ...options });
  }

  /**
   * Retrieves a product by ID. Requires products:read scope.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ProductRetrieveResponse> {
    return this._client.get(path`/dash-api/v2/products/${id}`, options);
  }

  /**
   * Updates a product's name, description, entitlements, or metadata. Requires
   * products:write scope.
   */
  update(id: string, body: ProductUpdateParams, options?: RequestOptions): APIPromise<ProductUpdateResponse> {
    return this._client.patch(path`/dash-api/v2/products/${id}`, { body, ...options });
  }

  /**
   * Returns a list of products for the specified project. Requires products:read
   * scope. The `project_id` query parameter is required.
   */
  list(query: ProductListParams, options?: RequestOptions): APIPromise<ProductListResponse> {
    return this._client.get('/dash-api/v2/products', { query, ...options });
  }

  /**
   * Deletes a product. Products can only be deleted if not referenced by any active
   * paywalls. Requires products:write scope.
   */
  delete(id: string, options?: RequestOptions): APIPromise<ProductDeleteResponse> {
    return this._client.delete(path`/dash-api/v2/products/${id}`, options);
  }
}

export interface ProductCreateResponse {
  /**
   * Unique identifier for the product
   */
  id: string;

  /**
   * ISO 8601 timestamp of when the product was created
   */
  created_at: string;

  /**
   * List of entitlement IDs granted by this product
   */
  entitlements: Array<string>;

  /**
   * Platform-specific product identifier
   */
  identifier: string;

  metadata: unknown;

  /**
   * Display name of the product, or null
   */
  name: string | null;

  /**
   * Object type, always `product`
   */
  object: 'product';

  /**
   * Platform the product belongs to
   */
  platform: 'ios' | 'android' | 'stripe' | 'paddle' | 'promotional';

  /**
   * Price of the product, or null
   */
  price: ProductCreateResponse.Price | null;

  /**
   * ID of the project this product belongs to
   */
  project_id: string;

  /**
   * Subscription details, or null for one-time purchases
   */
  subscription: ProductCreateResponse.Subscription | null;

  /**
   * ISO 8601 timestamp of when the product was last updated
   */
  updated_at: string;
}

export namespace ProductCreateResponse {
  /**
   * Price of the product, or null
   */
  export interface Price {
    /**
     * Price amount in the smallest currency unit (e.g. cents)
     */
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
  }

  /**
   * Subscription details, or null for one-time purchases
   */
  export interface Subscription {
    /**
     * Billing period
     */
    period: 'day' | 'week' | 'month' | 'year';

    /**
     * Number of periods per billing cycle
     */
    period_count: number;

    /**
     * Number of trial days, or null
     */
    trial_period_days: number | null;

    /**
     * Introductory offer details
     */
    introductory_offer?: Subscription.IntroductoryOffer;
  }

  export namespace Subscription {
    /**
     * Introductory offer details
     */
    export interface IntroductoryOffer {
      /**
       * Duration of the introductory offer in days
       */
      duration_days: number;

      /**
       * Type of introductory offer
       */
      type: 'free_trial' | 'pay_as_you_go' | 'pay_up_front';
    }
  }
}

export interface ProductRetrieveResponse {
  /**
   * Unique identifier for the product
   */
  id: string;

  /**
   * ISO 8601 timestamp of when the product was created
   */
  created_at: string;

  /**
   * List of entitlement IDs granted by this product
   */
  entitlements: Array<string>;

  /**
   * Platform-specific product identifier
   */
  identifier: string;

  metadata: unknown;

  /**
   * Display name of the product, or null
   */
  name: string | null;

  /**
   * Object type, always `product`
   */
  object: 'product';

  /**
   * Platform the product belongs to
   */
  platform: 'ios' | 'android' | 'stripe' | 'paddle' | 'promotional';

  /**
   * Price of the product, or null
   */
  price: ProductRetrieveResponse.Price | null;

  /**
   * ID of the project this product belongs to
   */
  project_id: string;

  /**
   * Subscription details, or null for one-time purchases
   */
  subscription: ProductRetrieveResponse.Subscription | null;

  /**
   * ISO 8601 timestamp of when the product was last updated
   */
  updated_at: string;
}

export namespace ProductRetrieveResponse {
  /**
   * Price of the product, or null
   */
  export interface Price {
    /**
     * Price amount in the smallest currency unit (e.g. cents)
     */
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
  }

  /**
   * Subscription details, or null for one-time purchases
   */
  export interface Subscription {
    /**
     * Billing period
     */
    period: 'day' | 'week' | 'month' | 'year';

    /**
     * Number of periods per billing cycle
     */
    period_count: number;

    /**
     * Number of trial days, or null
     */
    trial_period_days: number | null;

    /**
     * Introductory offer details
     */
    introductory_offer?: Subscription.IntroductoryOffer;
  }

  export namespace Subscription {
    /**
     * Introductory offer details
     */
    export interface IntroductoryOffer {
      /**
       * Duration of the introductory offer in days
       */
      duration_days: number;

      /**
       * Type of introductory offer
       */
      type: 'free_trial' | 'pay_as_you_go' | 'pay_up_front';
    }
  }
}

export interface ProductUpdateResponse {
  /**
   * Unique identifier for the product
   */
  id: string;

  /**
   * ISO 8601 timestamp of when the product was created
   */
  created_at: string;

  /**
   * List of entitlement IDs granted by this product
   */
  entitlements: Array<string>;

  /**
   * Platform-specific product identifier
   */
  identifier: string;

  metadata: unknown;

  /**
   * Display name of the product, or null
   */
  name: string | null;

  /**
   * Object type, always `product`
   */
  object: 'product';

  /**
   * Platform the product belongs to
   */
  platform: 'ios' | 'android' | 'stripe' | 'paddle' | 'promotional';

  /**
   * Price of the product, or null
   */
  price: ProductUpdateResponse.Price | null;

  /**
   * ID of the project this product belongs to
   */
  project_id: string;

  /**
   * Subscription details, or null for one-time purchases
   */
  subscription: ProductUpdateResponse.Subscription | null;

  /**
   * ISO 8601 timestamp of when the product was last updated
   */
  updated_at: string;
}

export namespace ProductUpdateResponse {
  /**
   * Price of the product, or null
   */
  export interface Price {
    /**
     * Price amount in the smallest currency unit (e.g. cents)
     */
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
  }

  /**
   * Subscription details, or null for one-time purchases
   */
  export interface Subscription {
    /**
     * Billing period
     */
    period: 'day' | 'week' | 'month' | 'year';

    /**
     * Number of periods per billing cycle
     */
    period_count: number;

    /**
     * Number of trial days, or null
     */
    trial_period_days: number | null;

    /**
     * Introductory offer details
     */
    introductory_offer?: Subscription.IntroductoryOffer;
  }

  export namespace Subscription {
    /**
     * Introductory offer details
     */
    export interface IntroductoryOffer {
      /**
       * Duration of the introductory offer in days
       */
      duration_days: number;

      /**
       * Type of introductory offer
       */
      type: 'free_trial' | 'pay_as_you_go' | 'pay_up_front';
    }
  }
}

export interface ProductListResponse {
  /**
   * List of results
   */
  data: Array<ProductListResponse.Data>;

  /**
   * Whether there are more results available beyond this page
   */
  has_more: boolean;

  /**
   * Object type, always `list`
   */
  object: 'list';

  /**
   * API endpoint URL for this list
   */
  url: '/v2/products';
}

export namespace ProductListResponse {
  export interface Data {
    /**
     * Unique identifier for the product
     */
    id: string;

    /**
     * ISO 8601 timestamp of when the product was created
     */
    created_at: string;

    /**
     * List of entitlement IDs granted by this product
     */
    entitlements: Array<string>;

    /**
     * Platform-specific product identifier
     */
    identifier: string;

    metadata: unknown;

    /**
     * Display name of the product, or null
     */
    name: string | null;

    /**
     * Object type, always `product`
     */
    object: 'product';

    /**
     * Platform the product belongs to
     */
    platform: 'ios' | 'android' | 'stripe' | 'paddle' | 'promotional';

    /**
     * Price of the product, or null
     */
    price: Data.Price | null;

    /**
     * ID of the project this product belongs to
     */
    project_id: string;

    /**
     * Subscription details, or null for one-time purchases
     */
    subscription: Data.Subscription | null;

    /**
     * ISO 8601 timestamp of when the product was last updated
     */
    updated_at: string;
  }

  export namespace Data {
    /**
     * Price of the product, or null
     */
    export interface Price {
      /**
       * Price amount in the smallest currency unit (e.g. cents)
       */
      amount: number;

      /**
       * ISO 4217 currency code (e.g. `USD`)
       */
      currency: string;
    }

    /**
     * Subscription details, or null for one-time purchases
     */
    export interface Subscription {
      /**
       * Billing period
       */
      period: 'day' | 'week' | 'month' | 'year';

      /**
       * Number of periods per billing cycle
       */
      period_count: number;

      /**
       * Number of trial days, or null
       */
      trial_period_days: number | null;

      /**
       * Introductory offer details
       */
      introductory_offer?: Subscription.IntroductoryOffer;
    }

    export namespace Subscription {
      /**
       * Introductory offer details
       */
      export interface IntroductoryOffer {
        /**
         * Duration of the introductory offer in days
         */
        duration_days: number;

        /**
         * Type of introductory offer
         */
        type: 'free_trial' | 'pay_as_you_go' | 'pay_up_front';
      }
    }
  }
}

export interface ProductDeleteResponse {
  /**
   * ID of the deleted product
   */
  id: string;

  /**
   * Always true for deletion responses
   */
  deleted: true;

  /**
   * Object type, always `product`
   */
  object: 'product';
}

export interface ProductCreateParams {
  /**
   * Platform-specific product identifier
   */
  identifier: string;

  /**
   * ID of the project to create the product in
   */
  project_id: string;

  /**
   * List of entitlement IDs to grant with this product
   */
  entitlements?: Array<string>;

  /**
   * Arbitrary key-value metadata to attach to the product
   */
  metadata?: unknown;

  /**
   * Display name of the product
   */
  name?: string;

  /**
   * Price of the product
   */
  price?: ProductCreateParams.Price;

  /**
   * Subscription details for recurring products
   */
  subscription?: ProductCreateParams.Subscription;
}

export namespace ProductCreateParams {
  /**
   * Price of the product
   */
  export interface Price {
    /**
     * Price amount in the smallest currency unit (e.g. cents)
     */
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
  }

  /**
   * Subscription details for recurring products
   */
  export interface Subscription {
    /**
     * Billing period for the subscription
     */
    period: 'day' | 'week' | 'month' | 'year';

    period_count?: number;

    trial_period_days?: number;
  }
}

export interface ProductUpdateParams {
  /**
   * List of entitlement IDs to grant with this product
   */
  entitlements?: Array<string>;

  /**
   * Arbitrary key-value metadata to attach to the product
   */
  metadata?: unknown;

  /**
   * Display name of the product
   */
  name?: string;
}

export interface ProductListParams {
  /**
   * Filter by project ID (required)
   */
  project_id: string;

  /**
   * a string to be decoded into a number
   */
  ending_before?: string;

  /**
   * Maximum number of items to return (1-100, default: 10)
   */
  limit?: string;

  /**
   * Platform the product belongs to
   */
  platform?: 'ios' | 'android' | 'stripe' | 'paddle' | 'promotional';

  /**
   * a string to be decoded into a number
   */
  starting_after?: string;
}

export declare namespace Products {
  export {
    type ProductCreateResponse as ProductCreateResponse,
    type ProductRetrieveResponse as ProductRetrieveResponse,
    type ProductUpdateResponse as ProductUpdateResponse,
    type ProductListResponse as ProductListResponse,
    type ProductDeleteResponse as ProductDeleteResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };
}
