/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.24.2336
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
    define(['ApiClient', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/GetSnapshotContentData', 'model/GetSnapshotData', 'model/MgtManageUserData', 'model/MgtMoveToQueue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/GetSnapshotContentData'), require('../model/GetSnapshotData'), require('../model/MgtManageUserData'), require('../model/MgtMoveToQueue'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediaManagementApi = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.ApiErrorResponse, root.WorkspaceApi.ApiSuccessResponse, root.WorkspaceApi.GetSnapshotContentData, root.WorkspaceApi.GetSnapshotData, root.WorkspaceApi.MgtManageUserData, root.WorkspaceApi.MgtMoveToQueue);
  }
}(this, function(ApiClient, ApiErrorResponse, ApiSuccessResponse, GetSnapshotContentData, GetSnapshotData, MgtManageUserData, MgtMoveToQueue) {
  'use strict';

  /**
   * MediaManagement service.
   * @module api/MediaManagementApi
   * @version 9.0.000.24.2336
   */

  /**
   * Constructs a new MediaManagementApi. 
   * @alias module:api/MediaManagementApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * get the details of the interaction
     * get the detailsd of interaction specified.
     * @param {String} id Id of the interaction
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.getDetailsWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDetails");
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
        '/media-management/interactions/{id}/get-details', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * get the details of the interaction
     * get the detailsd of interaction specified.
     * @param {String} id Id of the interaction
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.getDetails = function(id) {
      return this.getDetailsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a snapshot based on the attribute condition
     * Create a snapshot based on the attribute condition and returns elements specified by startIndex and size.
     * @param {module:model/GetSnapshotData} getSnapshotData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.getSnapshotWithHttpInfo = function(getSnapshotData) {
      var postBody = getSnapshotData;

      // verify the required parameter 'getSnapshotData' is set
      if (getSnapshotData === undefined || getSnapshotData === null) {
        throw new Error("Missing the required parameter 'getSnapshotData' when calling getSnapshot");
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
        '/media-management/get-snapshot', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a snapshot based on the attribute condition
     * Create a snapshot based on the attribute condition and returns elements specified by startIndex and size.
     * @param {module:model/GetSnapshotData} getSnapshotData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.getSnapshot = function(getSnapshotData) {
      return this.getSnapshotWithHttpInfo(getSnapshotData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the content of snapshot specified by startIndex and size.
     * Get the content of snapshot specified by startIndex and size.
     * @param {String} snapshotId Id of the snapshot
     * @param {module:model/GetSnapshotContentData} getSnapshotContentData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.getSnapshotContentWithHttpInfo = function(snapshotId, getSnapshotContentData) {
      var postBody = getSnapshotContentData;

      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling getSnapshotContent");
      }

      // verify the required parameter 'getSnapshotContentData' is set
      if (getSnapshotContentData === undefined || getSnapshotContentData === null) {
        throw new Error("Missing the required parameter 'getSnapshotContentData' when calling getSnapshotContent");
      }


      var pathParams = {
        'snapshotId': snapshotId
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
        '/media-management/{snapshotId}/get-snapshot-content', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the content of snapshot specified by startIndex and size.
     * Get the content of snapshot specified by startIndex and size.
     * @param {String} snapshotId Id of the snapshot
     * @param {module:model/GetSnapshotContentData} getSnapshotContentData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.getSnapshotContent = function(snapshotId, getSnapshotContentData) {
      return this.getSnapshotContentWithHttpInfo(snapshotId, getSnapshotContentData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Change the userData of bulk of interactions
     * Change the userData of bulk of interactions
     * @param {module:model/MgtManageUserData} mgtManageUserData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.mgtManageUserDataWithHttpInfo = function(mgtManageUserData) {
      var postBody = mgtManageUserData;

      // verify the required parameter 'mgtManageUserData' is set
      if (mgtManageUserData === undefined || mgtManageUserData === null) {
        throw new Error("Missing the required parameter 'mgtManageUserData' when calling mgtManageUserData");
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
        '/media-management/manage-user-data', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Change the userData of bulk of interactions
     * Change the userData of bulk of interactions
     * @param {module:model/MgtManageUserData} mgtManageUserData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.mgtManageUserData = function(mgtManageUserData) {
      return this.mgtManageUserDataWithHttpInfo(mgtManageUserData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Move a bulk of interactions to a queue
     * Move a buld of interactions to specified queue
     * @param {module:model/MgtMoveToQueue} mgtMoveToQueue 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.mgtMoveToQueueWithHttpInfo = function(mgtMoveToQueue) {
      var postBody = mgtMoveToQueue;

      // verify the required parameter 'mgtMoveToQueue' is set
      if (mgtMoveToQueue === undefined || mgtMoveToQueue === null) {
        throw new Error("Missing the required parameter 'mgtMoveToQueue' when calling mgtMoveToQueue");
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
        '/media-management/move-to-queue', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Move a bulk of interactions to a queue
     * Move a buld of interactions to specified queue
     * @param {module:model/MgtMoveToQueue} mgtMoveToQueue 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.mgtMoveToQueue = function(mgtMoveToQueue) {
      return this.mgtMoveToQueueWithHttpInfo(mgtMoveToQueue)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Release the snapshot
     * Release the snapshot specified.
     * @param {String} snapshotId Id of the snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.releaseSnapshotWithHttpInfo = function(snapshotId) {
      var postBody = null;

      // verify the required parameter 'snapshotId' is set
      if (snapshotId === undefined || snapshotId === null) {
        throw new Error("Missing the required parameter 'snapshotId' when calling releaseSnapshot");
      }


      var pathParams = {
        'snapshotId': snapshotId
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
        '/media-management/{snapshotId}/release-snapshot', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Release the snapshot
     * Release the snapshot specified.
     * @param {String} snapshotId Id of the snapshot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.releaseSnapshot = function(snapshotId) {
      return this.releaseSnapshotWithHttpInfo(snapshotId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
