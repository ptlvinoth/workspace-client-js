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
    define(['ApiClient', 'model/MediachatinteractionsidinvitebyqueueData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediachatinteractionsidinvitebyqueueData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ConsultData1 = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediachatinteractionsidinvitebyqueueData);
  }
}(this, function(ApiClient, MediachatinteractionsidinvitebyqueueData) {
  'use strict';




  /**
   * The ConsultData1 model module.
   * @module model/ConsultData1
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ConsultData1</code>.
   * @alias module:model/ConsultData1
   * @class
   * @param data {module:model/MediachatinteractionsidinvitebyqueueData} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;
  };

  /**
   * Constructs a <code>ConsultData1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConsultData1} obj Optional instance to populate.
   * @return {module:model/ConsultData1} The populated <code>ConsultData1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = MediachatinteractionsidinvitebyqueueData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MediachatinteractionsidinvitebyqueueData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


