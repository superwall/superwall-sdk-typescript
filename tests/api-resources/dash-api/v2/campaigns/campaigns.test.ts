// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SuperwallAPI from 'superwall-api';

const client = new SuperwallAPI({
  apiKey: 'My API Key',
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource campaigns', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.dashAPI.v2.campaigns.create({
      application_id: 'application_id',
      audiences: [
        {
          variants: [
            {
              paywall: 'paywall',
              percentage: 0,
              type: 'treatment',
            },
          ],
        },
      ],
      description: 'x',
      placements: [{ event_name: 'x' }],
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
  test.skip('create: required and optional params', async () => {
    const response = await client.dashAPI.v2.campaigns.create({
      application_id: 'application_id',
      audiences: [
        {
          variants: [
            {
              paywall: 'paywall',
              percentage: 0,
              type: 'treatment',
            },
          ],
          description: 'description',
          enabled: true,
          expression: 'expression',
          variant_optimization: 'none',
        },
      ],
      description: 'x',
      placements: [
        {
          event_name: 'x',
          enabled: true,
          remove_from_other_campaigns: true,
        },
      ],
      notes: 'notes',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.dashAPI.v2.campaigns.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.dashAPI.v2.campaigns.update('audience_id', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.dashAPI.v2.campaigns.update('audience_id', {
      id: 'id',
      description: 'description',
      enabled: true,
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.dashAPI.v2.campaigns.list({ application_id: 'application_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.dashAPI.v2.campaigns.list({
      application_id: 'application_id',
      archived: 'true',
      ending_before: 'ending_before',
      limit: 'limit',
      starting_after: 'starting_after',
    });
  });

  // Prism tests are disabled
  test.skip('archive', async () => {
    const responsePromise = client.dashAPI.v2.campaigns.archive('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('unarchive', async () => {
    const responsePromise = client.dashAPI.v2.campaigns.unarchive('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
