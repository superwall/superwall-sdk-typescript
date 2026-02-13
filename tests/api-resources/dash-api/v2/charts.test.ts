// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SuperwallAPI from 'superwall-api';

const client = new SuperwallAPI({
  apiKey: 'My API Key',
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource charts', () => {
  // Prism tests are disabled
  test.skip('data: only required params', async () => {
    const responsePromise = client.dashAPI.v2.charts.data({
      application_id: 'application_id',
      x_axis: 'x_axis',
      y_axis: 'y_axis',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('data: required and optional params', async () => {
    const response = await client.dashAPI.v2.charts.data({
      application_id: 'application_id',
      x_axis: 'x_axis',
      y_axis: 'y_axis',
      app_version: ['string'],
      auto_renew_status: ['string'],
      breakdown: 'breakdown',
      campaign_id: ['string'],
      conversion_timeframe: 'd1',
      country_code: ['string'],
      date_filter: {
        dimension: 'purchaseDate',
        preset: 'last_24_hours',
        range: { from: 'from', to: 'to' },
      },
      date_interval: 'auto',
      environment: ['string'],
      event_type: ['string'],
      experiment_id: ['string'],
      include: ['string'],
      max_data_points: 0,
      paywall_id: ['string'],
      placement: ['string'],
      product_duration: ['string'],
      product_id: ['string'],
      revenue_source: ['string'],
      revenue_type: ['string'],
      sdk_version: ['string'],
      store: ['string'],
      sub_start_type: ['string'],
      variant_id: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('retrieveDefinitions: only required params', async () => {
    const responsePromise = client.dashAPI.v2.charts.retrieveDefinitions({
      application_id: 'application_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveDefinitions: required and optional params', async () => {
    const response = await client.dashAPI.v2.charts.retrieveDefinitions({ application_id: 'application_id' });
  });
});
