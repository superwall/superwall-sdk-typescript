// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SuperwallAPI from 'superwall-api';

const client = new SuperwallAPI({
  apiKey: 'My API Key',
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource paywalls', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.dashAPI.v1.paywalls.list('applicationId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.dashAPI.v1.paywalls.list(
        'applicationId',
        {
          archived: 'true',
          cursor: 'cursor',
          limit: 'limit',
          orderBy: 'orderBy',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SuperwallAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('prepareSnapshot: only required params', async () => {
    const responsePromise = client.dashAPI.v1.paywalls.prepareSnapshot('id', {
      applicationId: 0,
      snapshot: {
        schema: {},
        store: {},
      },
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
  test.skip('prepareSnapshot: required and optional params', async () => {
    const response = await client.dashAPI.v1.paywalls.prepareSnapshot('id', {
      applicationId: 0,
      snapshot: {
        schema: {},
        store: {},
      },
      bypassProductsMissingValues: true,
    });
  });

  // Prism tests are disabled
  test.skip('promoteFromSnapshot: only required params', async () => {
    const responsePromise = client.dashAPI.v1.paywalls.promoteFromSnapshot('id', {
      applicationId: 0,
      snapshotIdentifier: 'snapshotIdentifier',
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
  test.skip('promoteFromSnapshot: required and optional params', async () => {
    const response = await client.dashAPI.v1.paywalls.promoteFromSnapshot('id', {
      applicationId: 0,
      snapshotIdentifier: 'snapshotIdentifier',
    });
  });
});
