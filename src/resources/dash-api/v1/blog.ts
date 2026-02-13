// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Blog extends APIResource {
  /**
   * Get Post By Slug
   */
  getPostBySlug(postSlug: string, options?: RequestOptions): APIPromise<BlogGetPostBySlugResponse> {
    return this._client.get(path`/dash-api/v1/blog/posts/${postSlug}`, { ...options, __security: {} });
  }
}

export interface BlogGetPostBySlugResponse {
  /**
   * a string to be decoded into a Date
   */
  createdAt: string;

  object: 'blog_post';

  slug: string;

  subtitle: string;

  title: string;

  /**
   * a string to be decoded into a Date
   */
  updatedAt: string;

  url: string;

  author?: BlogGetPostBySlugResponse.Author;

  image?: BlogGetPostBySlugResponse.Image;
}

export namespace BlogGetPostBySlugResponse {
  export interface Author {
    name: string;

    email?: string;

    image?: Author.Image;

    linkedin?: string;

    slug?: string;

    title?: string;

    twitter?: string;
  }

  export namespace Author {
    export interface Image {
      contentType: string;

      description: string;

      fileName: string;

      title: string;

      url: string;
    }
  }

  export interface Image {
    contentType: string;

    description: string;

    fileName: string;

    title: string;

    url: string;
  }
}

export declare namespace Blog {
  export { type BlogGetPostBySlugResponse as BlogGetPostBySlugResponse };
}
