// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SuperwallAPI from 'superwall-api';

const client = new SuperwallAPI({
  apiKey: 'My API Key',
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource campaigns', () => {
  // Prism tests are disabled
  test.skip('trigger: only required params', async () => {
    const responsePromise = client.dashAPI.v1.campaigns.trigger('experimentGroupId', {
      eventName: 'eventName',
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
  test.skip('trigger: required and optional params', async () => {
    const response = await client.dashAPI.v1.campaigns.trigger('experimentGroupId', {
      eventName: 'eventName',
      removeFromOtherGroups: true,
    });
  });
});
