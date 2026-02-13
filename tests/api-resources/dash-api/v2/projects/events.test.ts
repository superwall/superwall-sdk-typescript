// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SuperwallAPI from 'superwall-api';

const client = new SuperwallAPI({
  apiKey: 'My API Key',
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource events', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.dashAPI.v2.projects.events.retrieve('event_id', {
      project_id: 'project_id',
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
    const response = await client.dashAPI.v2.projects.events.retrieve('event_id', {
      project_id: 'project_id',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.dashAPI.v2.projects.events.list('project_id');
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
      client.dashAPI.v2.projects.events.list(
        'project_id',
        {
          after: 'after',
          before: 'before',
          channel: 'channel',
          event_types: ['string'],
          iterator: 'iterator',
          limit: 'limit',
          tag: 'tag',
          with_content: 'true',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SuperwallAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveAttempts: only required params', async () => {
    const responsePromise = client.dashAPI.v2.projects.events.retrieveAttempts('event_id', {
      project_id: 'project_id',
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
    const response = await client.dashAPI.v2.projects.events.retrieveAttempts('event_id', {
      project_id: 'project_id',
      after: 'after',
      before: 'before',
      iterator: 'iterator',
      limit: 'limit',
      status: 'status',
      status_code_class: 'status_code_class',
    });
  });

  // Prism tests are disabled
  test.skip('retry: only required params', async () => {
    const responsePromise = client.dashAPI.v2.projects.events.retry('event_id', {
      project_id: 'project_id',
      endpoint_id: 'endpoint_id',
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
  test.skip('retry: required and optional params', async () => {
    const response = await client.dashAPI.v2.projects.events.retry('event_id', {
      project_id: 'project_id',
      endpoint_id: 'endpoint_id',
    });
  });
});
