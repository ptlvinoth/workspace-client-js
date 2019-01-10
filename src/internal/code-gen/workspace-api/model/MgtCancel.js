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
    define(['ApiClient', 'model/MediamanagementcancelData', 'model/OperationId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediamanagementcancelData'), require('./OperationId'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MgtCancel = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediamanagementcancelData, root.WorkspaceApi.OperationId);
  }
}(this, function(ApiClient, MediamanagementcancelData, OperationId) {
  'use strict';




  /**
   * The MgtCancel model module.
   * @module model/MgtCancel
   * @version 9.0.000.31.2540
   */

  /**
   * Constructs a new <code>MgtCancel</code>.
   * @alias module:model/MgtCancel
   * @class
   * @param data {module:model/MediamanagementcancelData} 
   */
  var exports = function(data) {
    var _this = this;


    _this['data'] = data;
  };

  /**
   * Constructs a <code>MgtCancel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MgtCancel} obj Optional instance to populate.
   * @return {module:model/MgtCancel} The populated <code>MgtCancel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('operationId')) {
        obj['operationId'] = OperationId.constructFromObject(data['operationId']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = MediamanagementcancelData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OperationId} operationId
   */
  exports.prototype['operationId'] = undefined;
  /**
   * @member {module:model/MediamanagementcancelData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));

