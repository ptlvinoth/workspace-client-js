/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.33.2671
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
    define(['ApiClient', 'model/InlineResponse2001Data', 'model/InlineResponse200Status'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2001Data'), require('./InlineResponse200Status'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.InlineResponse2001 = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.InlineResponse2001Data, root.WorkspaceApi.InlineResponse200Status);
  }
}(this, function(ApiClient, InlineResponse2001Data, InlineResponse200Status) {
  'use strict';




  /**
   * The InlineResponse2001 model module.
   * @module model/InlineResponse2001
   * @version 9.0.000.33.2671
   */

  /**
   * Constructs a new <code>InlineResponse2001</code>.
   * @alias module:model/InlineResponse2001
   * @class
   * @param status {module:model/InlineResponse200Status} 
   */
  var exports = function(status) {
    var _this = this;

    _this['status'] = status;

  };

  /**
   * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2001} obj Optional instance to populate.
   * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = InlineResponse200Status.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = InlineResponse2001Data.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse200Status} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/InlineResponse2001Data} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


