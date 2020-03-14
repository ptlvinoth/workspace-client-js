/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.72.3561
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OperationId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OperationId'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.DndOnBody1 = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.OperationId);
  }
}(this, function(ApiClient, OperationId) {
  'use strict';




  /**
   * The DndOnBody1 model module.
   * @module model/DndOnBody1
   * @version 9.0.000.72.3561
   */

  /**
   * Constructs a new <code>DndOnBody1</code>.
   * @alias module:model/DndOnBody1
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DndOnBody1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DndOnBody1} obj Optional instance to populate.
   * @return {module:model/DndOnBody1} The populated <code>DndOnBody1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('operationId')) {
        obj['operationId'] = OperationId.constructFromObject(data['operationId']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OperationId} operationId
   */
  exports.prototype['operationId'] = undefined;



  return exports;
}));


