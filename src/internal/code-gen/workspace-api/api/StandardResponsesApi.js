/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.22.2269
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/GetCategoryData', 'model/GetRootCategoriesData', 'model/GetStandardResponseData', 'model/LuceneSearchStandardResponseData', 'model/RenderStandardResponseFieldCodesData', 'model/ReportStandareResponseUsageData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/GetCategoryData'), require('../model/GetRootCategoriesData'), require('../model/GetStandardResponseData'), require('../model/LuceneSearchStandardResponseData'), require('../model/RenderStandardResponseFieldCodesData'), require('../model/ReportStandareResponseUsageData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.StandardResponsesApi = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.ApiErrorResponse, root.WorkspaceApi.ApiSuccessResponse, root.WorkspaceApi.GetCategoryData, root.WorkspaceApi.GetRootCategoriesData, root.WorkspaceApi.GetStandardResponseData, root.WorkspaceApi.LuceneSearchStandardResponseData, root.WorkspaceApi.RenderStandardResponseFieldCodesData, root.WorkspaceApi.ReportStandareResponseUsageData);
  }
}(this, function(ApiClient, ApiErrorResponse, ApiSuccessResponse, GetCategoryData, GetRootCategoriesData, GetStandardResponseData, LuceneSearchStandardResponseData, RenderStandardResponseFieldCodesData, ReportStandareResponseUsageData) {
  'use strict';

  /**
   * StandardResponses service.
   * @module api/StandardResponsesApi
   * @version 9.0.000.22.2269
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
     * Remove all Standard Response Favorites
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.deleteAllStandardResponseFavoritesWithHttpInfo = function() {
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
        '/ucs/responses/remove-all-favorites', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove all Standard Response Favorites
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.deleteAllStandardResponseFavorites = function() {
      return this.deleteAllStandardResponseFavoritesWithHttpInfo()
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
    this.getCategoryDetailsWithHttpInfo = function(id, getCategoryData) {
      var postBody = getCategoryData;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCategoryDetails");
      }

      // verify the required parameter 'getCategoryData' is set
      if (getCategoryData === undefined || getCategoryData === null) {
        throw new Error("Missing the required parameter 'getCategoryData' when calling getCategoryDetails");
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
    this.getCategoryDetails = function(id, getCategoryData) {
      return this.getCategoryDetailsWithHttpInfo(id, getCategoryData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all Root categories.
     * Get all Root Categories information.
     * @param {Object} opts Optional parameters
     * @param {module:model/GetRootCategoriesData} opts.getRootCategoriesData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.getRootCategoriesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['getRootCategoriesData'];


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
     * @param {Object} opts Optional parameters
     * @param {module:model/GetRootCategoriesData} opts.getRootCategoriesData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.getRootCategories = function(opts) {
      return this.getRootCategoriesWithHttpInfo(opts)
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
     * @param {module:model/RenderStandardResponseFieldCodesData} renderStandardResponseFieldCodesData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.renderStandardResponseFieldCodesWithHttpInfo = function(id, renderStandardResponseFieldCodesData) {
      var postBody = renderStandardResponseFieldCodesData;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling renderStandardResponseFieldCodes");
      }

      // verify the required parameter 'renderStandardResponseFieldCodesData' is set
      if (renderStandardResponseFieldCodesData === undefined || renderStandardResponseFieldCodesData === null) {
        throw new Error("Missing the required parameter 'renderStandardResponseFieldCodesData' when calling renderStandardResponseFieldCodes");
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
     * @param {module:model/RenderStandardResponseFieldCodesData} renderStandardResponseFieldCodesData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.renderStandardResponseFieldCodes = function(id, renderStandardResponseFieldCodesData) {
      return this.renderStandardResponseFieldCodesWithHttpInfo(id, renderStandardResponseFieldCodesData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Specifies Usage of a Standard Response for an interaction.
     * @param {String} id id of the Standard Response
     * @param {module:model/ReportStandareResponseUsageData} reportStandareResponseUsageData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.reportStandareResponseUsageWithHttpInfo = function(id, reportStandareResponseUsageData) {
      var postBody = reportStandareResponseUsageData;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling reportStandareResponseUsage");
      }

      // verify the required parameter 'reportStandareResponseUsageData' is set
      if (reportStandareResponseUsageData === undefined || reportStandareResponseUsageData === null) {
        throw new Error("Missing the required parameter 'reportStandareResponseUsageData' when calling reportStandareResponseUsage");
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
        '/ucs/responses/{id}/report-usage', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Specifies Usage of a Standard Response for an interaction.
     * @param {String} id id of the Standard Response
     * @param {module:model/ReportStandareResponseUsageData} reportStandareResponseUsageData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.reportStandareResponseUsage = function(id, reportStandareResponseUsageData) {
      return this.reportStandareResponseUsageWithHttpInfo(id, reportStandareResponseUsageData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search for standard responses based on search query, using lucene search
     * @param {module:model/LuceneSearchStandardResponseData} luceneSearchStandardResponseData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.searchStandardResponsesWithHttpInfo = function(luceneSearchStandardResponseData) {
      var postBody = luceneSearchStandardResponseData;

      // verify the required parameter 'luceneSearchStandardResponseData' is set
      if (luceneSearchStandardResponseData === undefined || luceneSearchStandardResponseData === null) {
        throw new Error("Missing the required parameter 'luceneSearchStandardResponseData' when calling searchStandardResponses");
      }


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
        '/ucs/responses/search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search for standard responses based on search query, using lucene search
     * @param {module:model/LuceneSearchStandardResponseData} luceneSearchStandardResponseData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.searchStandardResponses = function(luceneSearchStandardResponseData) {
      return this.searchStandardResponsesWithHttpInfo(luceneSearchStandardResponseData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
