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
    define(['ApiClient', 'model/InlineResponse200Data', 'model/InlineResponse200Status'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse200Data'), require('./InlineResponse200Status'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.InlineResponse200 = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.InlineResponse200Data, root.WorkspaceApi.InlineResponse200Status);
  }
}(this, function(ApiClient, InlineResponse200Data, InlineResponse200Status) {
  'use strict';




  /**
   * The InlineResponse200 model module.
   * @module model/InlineResponse200
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse200</code>.
   * @alias module:model/InlineResponse200
   * @class
   * @param status {module:model/InlineResponse200Status} 
   */
  var exports = function(status) {
    var _this = this;

    _this['status'] = status;

  };

  /**
   * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200} obj Optional instance to populate.
   * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = InlineResponse200Status.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = InlineResponse200Data.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse200Status} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/InlineResponse200Data} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


