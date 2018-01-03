/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/GetCategoryData', 'model/GetStandardResponseData', 'model/RenderFieldCodesData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/GetCategoryData'), require('../model/GetStandardResponseData'), require('../model/RenderFieldCodesData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.StandardResponsesApi = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.ApiErrorResponse, root.WorkspaceApi.ApiSuccessResponse, root.WorkspaceApi.GetCategoryData, root.WorkspaceApi.GetStandardResponseData, root.WorkspaceApi.RenderFieldCodesData);
  }
}(this, function(ApiClient, ApiErrorResponse, ApiSuccessResponse, GetCategoryData, GetStandardResponseData, RenderFieldCodesData) {
  'use strict';

  /**
   * StandardResponses service.
   * @module api/StandardResponsesApi
   * @version 1.0.0
   */

  /**
   * Constructs a new StandardResponsesApi. 
   * @alias module:api/StandardResponsesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add a Standard Response to Favorites
     * @param {String} id id of the Standard Response to add to Favorites
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.addStandardResponseFavoriteWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addStandardResponseFavorite");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/ucs/responses/{id}/add-to-favorites', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add a Standard Response to Favorites
     * @param {String} id id of the Standard Response to add to Favorites
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.addStandardResponseFavorite = function(id) {
      return this.addStandardResponseFavoriteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove a Standard Response from Favorites
     * @param {String} id id of the Standard Response to remove from Favorites
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.deleteStandardResponseFavoriteWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteStandardResponseFavorite");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/ucs/responses/{id}/remove-from-favorites', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove a Standard Response from Favorites
     * @param {String} id id of the Standard Response to remove from Favorites
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.deleteStandardResponseFavorite = function(id) {
      return this.deleteStandardResponseFavoriteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the details of a Category.
     * Get details of a Category including category sub tree. Only &#39;id&#39;, &#39;standardResponseId&#39;, and &#39;name&#39; attributes are returned for each Standard Response.
     * @param {String} id id of the Category
     * @param {module:model/GetCategoryData} getCategoryData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.getCategoryWithHttpInfo = function(id, getCategoryData) {
      var postBody = getCategoryData;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCategory");
      }

      // verify the required parameter 'getCategoryData' is set
      if (getCategoryData === undefined || getCategoryData === null) {
        throw new Error("Missing the required parameter 'getCategoryData' when calling getCategory");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/ucs/responses/categories/{id}/get-details', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the details of a Category.
     * Get details of a Category including category sub tree. Only &#39;id&#39;, &#39;standardResponseId&#39;, and &#39;name&#39; attributes are returned for each Standard Response.
     * @param {String} id id of the Category
     * @param {module:model/GetCategoryData} getCategoryData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.getCategory = function(id, getCategoryData) {
      return this.getCategoryWithHttpInfo(id, getCategoryData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all Root categories.
     * Get all Root Categories information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.getRootCategoriesWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/ucs/responses/categories/get-root', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all Root categories.
     * Get all Root Categories information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.getRootCategories = function() {
      return this.getRootCategoriesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the details of a Standard Response.
     * @param {String} id id of the Standard Response
     * @param {module:model/GetStandardResponseData} getStandardResponseData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.getStandardResponseWithHttpInfo = function(id, getStandardResponseData) {
      var postBody = getStandardResponseData;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getStandardResponse");
      }

      // verify the required parameter 'getStandardResponseData' is set
      if (getStandardResponseData === undefined || getStandardResponseData === null) {
        throw new Error("Missing the required parameter 'getStandardResponseData' when calling getStandardResponse");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/ucs/responses/{id}/get-details', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the details of a Standard Response.
     * @param {String} id id of the Standard Response
     * @param {module:model/GetStandardResponseData} getStandardResponseData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.getStandardResponse = function(id, getStandardResponseData) {
      return this.getStandardResponseWithHttpInfo(id, getStandardResponseData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the attachment of the Standard Response
     * Get the attachment of the Standard Response specified in the documentId path parameter
     * @param {String} id id of the Standard Response
     * @param {String} documentId id of document to get
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    this.getStandardResponseAttachmentWithHttpInfo = function(id, documentId) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getStandardResponseAttachment");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getStandardResponseAttachment");
      }


      var pathParams = {
        'id': id,
        'documentId': documentId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/octet-stream'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/ucs/responses/{id}/attachments/{documentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the attachment of the Standard Response
     * Get the attachment of the Standard Response specified in the documentId path parameter
     * @param {String} id id of the Standard Response
     * @param {String} documentId id of document to get
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.getStandardResponseAttachment = function(id, documentId) {
      return this.getStandardResponseAttachmentWithHttpInfo(id, documentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Standard Response Favorites
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.getStandardResponseFavoritesWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/ucs/responses/get-favorites', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Standard Response Favorites
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.getStandardResponseFavorites = function() {
      return this.getStandardResponseFavoritesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replaces generic field codes of the Standard Response content with their actual values.
     * @param {String} id id of the Standard Response
     * @param {module:model/RenderFieldCodesData} renderFieldCodesData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.renderFieldCodesWithHttpInfo = function(id, renderFieldCodesData) {
      var postBody = renderFieldCodesData;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling renderFieldCodes");
      }

      // verify the required parameter 'renderFieldCodesData' is set
      if (renderFieldCodesData === undefined || renderFieldCodesData === null) {
        throw new Error("Missing the required parameter 'renderFieldCodesData' when calling renderFieldCodes");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/ucs/responses/{id}/render-field-codes', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replaces generic field codes of the Standard Response content with their actual values.
     * @param {String} id id of the Standard Response
     * @param {module:model/RenderFieldCodesData} renderFieldCodesData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.renderFieldCodes = function(id, renderFieldCodesData) {
      return this.renderFieldCodesWithHttpInfo(id, renderFieldCodesData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
