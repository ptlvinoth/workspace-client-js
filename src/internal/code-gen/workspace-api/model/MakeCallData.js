/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.78.3880
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
    define(['ApiClient', 'model/OperationId', 'model/VoicemakecallData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OperationId'), require('./VoicemakecallData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MakeCallData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.OperationId, root.WorkspaceApi.VoicemakecallData);
  }
}(this, function(ApiClient, OperationId, VoicemakecallData) {
  'use strict';




  /**
   * The MakeCallData model module.
   * @module model/MakeCallData
   * @version 9.0.000.78.3880
   */

  /**
   * Constructs a new <code>MakeCallData</code>.
   * @alias module:model/MakeCallData
   * @class
   * @param data {module:model/VoicemakecallData} 
   */
  var exports = function(data) {
    var _this = this;


    _this['data'] = data;
  };

  /**
   * Constructs a <code>MakeCallData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MakeCallData} obj Optional instance to populate.
   * @return {module:model/MakeCallData} The populated <code>MakeCallData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('operationId')) {
        obj['operationId'] = OperationId.constructFromObject(data['operationId']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = VoicemakecallData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OperationId} operationId
   */
  exports.prototype['operationId'] = undefined;
  /**
   * @member {module:model/VoicemakecallData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


