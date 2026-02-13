// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SuperwallAPI from 'superwall-api';

const client = new SuperwallAPI({
  apiKey: 'My API Key',
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.dashAPI.v1.projects.webhooks.create('projectId', { url: 'x' });
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
    const response = await client.dashAPI.v1.projects.webhooks.create('projectId', {
      url: 'x',
      description: 'description',
      filterTypes: ['string'],
      headers: { foo: 'string' },
      metadata: { foo: 'string' },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.dashAPI.v1.projects.webhooks.retrieve('endpointId', {
      projectId: 'projectId',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.dashAPI.v1.projects.webhooks.retrieve('endpointId', {
      projectId: 'projectId',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.dashAPI.v1.projects.webhooks.update('endpointId', {
      projectId: 'projectId',
      disabled: true,
      url: 'url',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.dashAPI.v1.projects.webhooks.update('endpointId', {
      projectId: 'projectId',
      disabled: true,
      url: 'url',
      description: 'description',
      filterTypes: ['string'],
      headers: { foo: 'string' },
      metadata: { foo: 'string' },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.dashAPI.v1.projects.webhooks.list('projectId');
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
      client.dashAPI.v1.projects.webhooks.list(
        'projectId',
        { iterator: 'iterator', limit: 'limit' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SuperwallAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.dashAPI.v1.projects.webhooks.delete('endpointId', {
      projectId: 'projectId',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.dashAPI.v1.projects.webhooks.delete('endpointId', {
      projectId: 'projectId',
    });
  });

  // Prism tests are disabled
  test.skip('manage', async () => {
    const responsePromise = client.dashAPI.v1.projects.webhooks.manage('projectId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAttempts: only required params', async () => {
    const responsePromise = client.dashAPI.v1.projects.webhooks.retrieveAttempts('endpointId', {
      projectId: 'projectId',
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
  test.skip('retrieveAttempts: required and optional params', async () => {
    const response = await client.dashAPI.v1.projects.webhooks.retrieveAttempts('endpointId', {
      projectId: 'projectId',
      after: 'after',
      before: 'before',
      channel: 'channel',
      eventTypes: ['string'],
      iterator: 'iterator',
      limit: 'limit',
      status: 'status',
      statusCodeClass: 'statusCodeClass',
      tag: 'tag',
      withContent: 'true',
      withMsg: 'true',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveStats: only required params', async () => {
    const responsePromise = client.dashAPI.v1.projects.webhooks.retrieveStats('endpointId', {
      projectId: 'projectId',
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
  test.skip('retrieveStats: required and optional params', async () => {
    const response = await client.dashAPI.v1.projects.webhooks.retrieveStats('endpointId', {
      projectId: 'projectId',
      since: 'since',
      until: 'until',
    });
  });

  // Prism tests are disabled
  test.skip('updateHeaders: only required params', async () => {
    const responsePromise = client.dashAPI.v1.projects.webhooks.updateHeaders('endpointId', {
      projectId: 'projectId',
      headers: { foo: 'string' },
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
  test.skip('updateHeaders: required and optional params', async () => {
    const response = await client.dashAPI.v1.projects.webhooks.updateHeaders('endpointId', {
      projectId: 'projectId',
      headers: { foo: 'string' },
    });
  });
});
