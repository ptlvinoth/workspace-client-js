/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.31.2540
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
    define(['ApiClient', 'model/MediamanagementgetsnapshotData', 'model/OperationId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediamanagementgetsnapshotData'), require('./OperationId'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.GetSnapshotData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediamanagementgetsnapshotData, root.WorkspaceApi.OperationId);
  }
}(this, function(ApiClient, MediamanagementgetsnapshotData, OperationId) {
  'use strict';




  /**
   * The GetSnapshotData model module.
   * @module model/GetSnapshotData
   * @version 9.0.000.31.2540
   */

  /**
   * Constructs a new <code>GetSnapshotData</code>.
   * @alias module:model/GetSnapshotData
   * @class
   * @param data {module:model/MediamanagementgetsnapshotData} 
   */
  var exports = function(data) {
    var _this = this;


    _this['data'] = data;
  };

  /**
   * Constructs a <code>GetSnapshotData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSnapshotData} obj Optional instance to populate.
   * @return {module:model/GetSnapshotData} The populated <code>GetSnapshotData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('operationId')) {
        obj['operationId'] = OperationId.constructFromObject(data['operationId']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = MediamanagementgetsnapshotData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OperationId} operationId
   */
  exports.prototype['operationId'] = undefined;
  /**
   * @member {module:model/MediamanagementgetsnapshotData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));

