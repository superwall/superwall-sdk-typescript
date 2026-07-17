// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Manage products (in-app purchases and subscriptions). A Product represents a purchasable item shown on paywalls. Products are scoped to a project (cross-platform) rather than a single application, so they can be shared across iOS, Android, and web.
 */
export class Products extends APIResource {
  /**
   * Creates a new product in the specified application. Requires products:write
   * scope.
   */
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<ProductCreateResponse> {
    return this._client.post('/v2/products', { body, ...options });
  }

  /**
   * Retrieves a product by ID. Requires products:read scope.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ProductRetrieveResponse> {
    return this._client.get(path`/v2/products/${id}`, options);
  }

  /**
   * Updates a product's name, description, entitlements, or metadata. Requires
   * products:write scope.
   */
  update(id: string, body: ProductUpdateParams, options?: RequestOptions): APIPromise<ProductUpdateResponse> {
    return this._client.patch(path`/v2/products/${id}`, { body, ...options });
  }

  /**
   * Returns a list of products for the specified project. Requires products:read
   * scope. The `project_id` query parameter is required.
   */
  list(query: ProductListParams, options?: RequestOptions): APIPromise<ProductListResponse> {
    return this._client.get('/v2/products', { query, ...options });
  }

  /**
   * Deletes a product. Products can only be deleted if not referenced by any active
   * paywalls. Requires products:write scope.
   */
  delete(id: string, options?: RequestOptions): APIPromise<ProductDeleteResponse> {
    return this._client.delete(path`/v2/products/${id}`, options);
  }
}

export interface ProductCreateResponse {
  /**
   * Unique identifier for the product
   */
  id: string;

  /**
   * App Store Connect metadata for iOS App Store products, or null
   */
  app_store_info: ProductCreateResponse.AppStoreInfo | null;

  /**
   * ID of the application this product is stored under
   */
  application_id: string;

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

  metadata: { [key: string]: string };

  /**
   * Monthly billing plan price for annual iOS products, or null
   */
  monthly_billing_plan_price: ProductCreateResponse.MonthlyBillingPlanPrice | null;

  /**
   * Monthly billing plan trial days, or null
   */
  monthly_billing_plan_trial_period_days: number | null;

  /**
   * Monthly billing plan trial price, or null
   */
  monthly_billing_plan_trial_price: ProductCreateResponse.MonthlyBillingPlanTrialPrice | null;

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
  platform: 'ios' | 'android' | 'stripe' | 'promotional' | 'custom';

  /**
   * Price of the product, or null
   */
  price: ProductCreateResponse.Price | null;

  /**
   * ID of the project this product belongs to
   */
  project_id: string;

  /**
   * Store backing the product, when applicable
   */
  store: 'app_store' | 'custom' | null;

  /**
   * Subscription details, or null for one-time purchases
   */
  subscription: ProductCreateResponse.Subscription | null;

  /**
   * Trial or introductory price of the product, or null
   */
  trial_price: ProductCreateResponse.TrialPrice | null;

  /**
   * ISO 8601 timestamp of when the product was last updated
   */
  updated_at: string;
}

export namespace ProductCreateResponse {
  /**
   * App Store Connect metadata for iOS App Store products, or null
   */
  export interface AppStoreInfo {
    in_app_purchase_type: string;

    product_id: string;

    reference_name: string;

    state: string;
  }

  /**
   * Monthly billing plan price for annual iOS products, or null
   */
  export interface MonthlyBillingPlanPrice {
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
  }

  /**
   * Monthly billing plan trial price, or null
   */
  export interface MonthlyBillingPlanTrialPrice {
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
  }

  /**
   * Price of the product, or null
   */
  export interface Price {
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

  /**
   * Trial or introductory price of the product, or null
   */
  export interface TrialPrice {
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
  }
}

export interface ProductRetrieveResponse {
  /**
   * Unique identifier for the product
   */
  id: string;

  /**
   * App Store Connect metadata for iOS App Store products, or null
   */
  app_store_info: ProductRetrieveResponse.AppStoreInfo | null;

  /**
   * ID of the application this product is stored under
   */
  application_id: string;

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

  metadata: { [key: string]: string };

  /**
   * Monthly billing plan price for annual iOS products, or null
   */
  monthly_billing_plan_price: ProductRetrieveResponse.MonthlyBillingPlanPrice | null;

  /**
   * Monthly billing plan trial days, or null
   */
  monthly_billing_plan_trial_period_days: number | null;

  /**
   * Monthly billing plan trial price, or null
   */
  monthly_billing_plan_trial_price: ProductRetrieveResponse.MonthlyBillingPlanTrialPrice | null;

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
  platform: 'ios' | 'android' | 'stripe' | 'promotional' | 'custom';

  /**
   * Price of the product, or null
   */
  price: ProductRetrieveResponse.Price | null;

  /**
   * ID of the project this product belongs to
   */
  project_id: string;

  /**
   * Store backing the product, when applicable
   */
  store: 'app_store' | 'custom' | null;

  /**
   * Subscription details, or null for one-time purchases
   */
  subscription: ProductRetrieveResponse.Subscription | null;

  /**
   * Trial or introductory price of the product, or null
   */
  trial_price: ProductRetrieveResponse.TrialPrice | null;

  /**
   * ISO 8601 timestamp of when the product was last updated
   */
  updated_at: string;
}

export namespace ProductRetrieveResponse {
  /**
   * App Store Connect metadata for iOS App Store products, or null
   */
  export interface AppStoreInfo {
    in_app_purchase_type: string;

    product_id: string;

    reference_name: string;

    state: string;
  }

  /**
   * Monthly billing plan price for annual iOS products, or null
   */
  export interface MonthlyBillingPlanPrice {
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
  }

  /**
   * Monthly billing plan trial price, or null
   */
  export interface MonthlyBillingPlanTrialPrice {
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
  }

  /**
   * Price of the product, or null
   */
  export interface Price {
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

  /**
   * Trial or introductory price of the product, or null
   */
  export interface TrialPrice {
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
  }
}

export interface ProductUpdateResponse {
  /**
   * Unique identifier for the product
   */
  id: string;

  /**
   * App Store Connect metadata for iOS App Store products, or null
   */
  app_store_info: ProductUpdateResponse.AppStoreInfo | null;

  /**
   * ID of the application this product is stored under
   */
  application_id: string;

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

  metadata: { [key: string]: string };

  /**
   * Monthly billing plan price for annual iOS products, or null
   */
  monthly_billing_plan_price: ProductUpdateResponse.MonthlyBillingPlanPrice | null;

  /**
   * Monthly billing plan trial days, or null
   */
  monthly_billing_plan_trial_period_days: number | null;

  /**
   * Monthly billing plan trial price, or null
   */
  monthly_billing_plan_trial_price: ProductUpdateResponse.MonthlyBillingPlanTrialPrice | null;

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
  platform: 'ios' | 'android' | 'stripe' | 'promotional' | 'custom';

  /**
   * Price of the product, or null
   */
  price: ProductUpdateResponse.Price | null;

  /**
   * ID of the project this product belongs to
   */
  project_id: string;

  /**
   * Store backing the product, when applicable
   */
  store: 'app_store' | 'custom' | null;

  /**
   * Subscription details, or null for one-time purchases
   */
  subscription: ProductUpdateResponse.Subscription | null;

  /**
   * Trial or introductory price of the product, or null
   */
  trial_price: ProductUpdateResponse.TrialPrice | null;

  /**
   * ISO 8601 timestamp of when the product was last updated
   */
  updated_at: string;
}

export namespace ProductUpdateResponse {
  /**
   * App Store Connect metadata for iOS App Store products, or null
   */
  export interface AppStoreInfo {
    in_app_purchase_type: string;

    product_id: string;

    reference_name: string;

    state: string;
  }

  /**
   * Monthly billing plan price for annual iOS products, or null
   */
  export interface MonthlyBillingPlanPrice {
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
  }

  /**
   * Monthly billing plan trial price, or null
   */
  export interface MonthlyBillingPlanTrialPrice {
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
  }

  /**
   * Price of the product, or null
   */
  export interface Price {
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

  /**
   * Trial or introductory price of the product, or null
   */
  export interface TrialPrice {
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
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
     * App Store Connect metadata for iOS App Store products, or null
     */
    app_store_info: Data.AppStoreInfo | null;

    /**
     * ID of the application this product is stored under
     */
    application_id: string;

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

    metadata: { [key: string]: string };

    /**
     * Monthly billing plan price for annual iOS products, or null
     */
    monthly_billing_plan_price: Data.MonthlyBillingPlanPrice | null;

    /**
     * Monthly billing plan trial days, or null
     */
    monthly_billing_plan_trial_period_days: number | null;

    /**
     * Monthly billing plan trial price, or null
     */
    monthly_billing_plan_trial_price: Data.MonthlyBillingPlanTrialPrice | null;

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
    platform: 'ios' | 'android' | 'stripe' | 'promotional' | 'custom';

    /**
     * Price of the product, or null
     */
    price: Data.Price | null;

    /**
     * ID of the project this product belongs to
     */
    project_id: string;

    /**
     * Store backing the product, when applicable
     */
    store: 'app_store' | 'custom' | null;

    /**
     * Subscription details, or null for one-time purchases
     */
    subscription: Data.Subscription | null;

    /**
     * Trial or introductory price of the product, or null
     */
    trial_price: Data.TrialPrice | null;

    /**
     * ISO 8601 timestamp of when the product was last updated
     */
    updated_at: string;
  }

  export namespace Data {
    /**
     * App Store Connect metadata for iOS App Store products, or null
     */
    export interface AppStoreInfo {
      in_app_purchase_type: string;

      product_id: string;

      reference_name: string;

      state: string;
    }

    /**
     * Monthly billing plan price for annual iOS products, or null
     */
    export interface MonthlyBillingPlanPrice {
      amount: number;

      /**
       * ISO 4217 currency code (e.g. `USD`)
       */
      currency: string;
    }

    /**
     * Monthly billing plan trial price, or null
     */
    export interface MonthlyBillingPlanTrialPrice {
      amount: number;

      /**
       * ISO 4217 currency code (e.g. `USD`)
       */
      currency: string;
    }

    /**
     * Price of the product, or null
     */
    export interface Price {
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

    /**
     * Trial or introductory price of the product, or null
     */
    export interface TrialPrice {
      amount: number;

      /**
       * ISO 4217 currency code (e.g. `USD`)
       */
      currency: string;
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
   * Android product intent. The backend constructs and validates the canonical
   * composite identifier.
   */
  android?: ProductCreateParams.Android;

  /**
   * ID of the application to create the product in. Defaults to a supported project
   * application.
   */
  application_id?: string;

  /**
   * List of entitlement IDs to grant with this product
   */
  entitlements?: Array<string>;

  /**
   * Arbitrary key-value metadata to attach to the product
   */
  metadata?: { [key: string]: string };

  /**
   * Monthly billing plan price for annual iOS products
   */
  monthly_billing_plan_price?: ProductCreateParams.MonthlyBillingPlanPrice;

  /**
   * Monthly billing plan trial days
   */
  monthly_billing_plan_trial_period_days?: number;

  /**
   * Monthly billing plan trial price
   */
  monthly_billing_plan_trial_price?: ProductCreateParams.MonthlyBillingPlanTrialPrice;

  /**
   * Display name of the product
   */
  name?: string;

  /**
   * Price of the product
   */
  price?: ProductCreateParams.Price;

  /**
   * Store backing the product. `custom` creates or uses the project's custom-store
   * app.
   */
  store?: 'app_store' | 'custom';

  /**
   * Subscription details for recurring products
   */
  subscription?: ProductCreateParams.Subscription;

  /**
   * Trial price of the product
   */
  trial_price?: ProductCreateParams.TrialPrice;
}

export namespace ProductCreateParams {
  /**
   * Android product intent. The backend constructs and validates the canonical
   * composite identifier.
   */
  export interface Android {
    automatically_pick_purchase_option?: boolean;

    base_plan_or_purchase_option_id?: string;

    offer_id?: string;

    offer_mode?: 'auto' | 'none' | 'specific';
  }

  /**
   * Monthly billing plan price for annual iOS products
   */
  export interface MonthlyBillingPlanPrice {
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
  }

  /**
   * Monthly billing plan trial price
   */
  export interface MonthlyBillingPlanTrialPrice {
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
  }

  /**
   * Price of the product
   */
  export interface Price {
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

  /**
   * Trial price of the product
   */
  export interface TrialPrice {
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
  }
}

export interface ProductUpdateParams {
  /**
   * Android product intent. The backend constructs and validates the canonical
   * composite identifier.
   */
  android?: ProductUpdateParams.Android;

  /**
   * Target application ID when moving a custom product back to an application-backed
   * store
   */
  application_id?: string;

  /**
   * List of entitlement IDs to grant with this product
   */
  entitlements?: Array<string>;

  /**
   * Platform-specific product identifier
   */
  identifier?: string;

  /**
   * Arbitrary key-value metadata to attach to the product
   */
  metadata?: { [key: string]: string };

  /**
   * Monthly billing plan price. Null clears the monthly billing plan.
   */
  monthly_billing_plan_price?: ProductUpdateParams.MonthlyBillingPlanPrice | null;

  /**
   * Monthly billing plan trial days. Null clears the monthly billing plan trial.
   */
  monthly_billing_plan_trial_period_days?: number | null;

  /**
   * Monthly billing plan trial price. Null clears the monthly billing plan trial
   * price.
   */
  monthly_billing_plan_trial_price?: ProductUpdateParams.MonthlyBillingPlanTrialPrice | null;

  /**
   * Display name of the product
   */
  name?: string;

  /**
   * Price of the product. Null clears the stored price.
   */
  price?: ProductUpdateParams.Price | null;

  /**
   * Store backing the product. `custom` moves or keeps it under the project's
   * custom-store app.
   */
  store?: 'app_store' | 'custom';

  /**
   * Subscription details. Null marks the product as one-time.
   */
  subscription?: ProductUpdateParams.Subscription | null;

  /**
   * Trial price of the product. Null clears the stored trial price.
   */
  trial_price?: ProductUpdateParams.TrialPrice | null;
}

export namespace ProductUpdateParams {
  /**
   * Android product intent. The backend constructs and validates the canonical
   * composite identifier.
   */
  export interface Android {
    automatically_pick_purchase_option?: boolean;

    base_plan_or_purchase_option_id?: string;

    offer_id?: string;

    offer_mode?: 'auto' | 'none' | 'specific';
  }

  /**
   * Monthly billing plan price. Null clears the monthly billing plan.
   */
  export interface MonthlyBillingPlanPrice {
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
  }

  /**
   * Monthly billing plan trial price. Null clears the monthly billing plan trial
   * price.
   */
  export interface MonthlyBillingPlanTrialPrice {
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
  }

  /**
   * Price of the product. Null clears the stored price.
   */
  export interface Price {
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
  }

  /**
   * Subscription details. Null marks the product as one-time.
   */
  export interface Subscription {
    /**
     * Billing period for the subscription
     */
    period: 'day' | 'week' | 'month' | 'year';

    period_count?: number;

    trial_period_days?: number;
  }

  /**
   * Trial price of the product. Null clears the stored trial price.
   */
  export interface TrialPrice {
    amount: number;

    /**
     * ISO 4217 currency code (e.g. `USD`)
     */
    currency: string;
  }
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
  platform?: 'ios' | 'android' | 'stripe' | 'promotional' | 'custom';

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
