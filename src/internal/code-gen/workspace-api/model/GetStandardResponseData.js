/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 1.0.0
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
    define(['ApiClient', 'model/UcsresponsesidgetdetailsData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UcsresponsesidgetdetailsData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.GetStandardResponseData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.UcsresponsesidgetdetailsData);
  }
}(this, function(ApiClient, UcsresponsesidgetdetailsData) {
  'use strict';




  /**
   * The GetStandardResponseData model module.
   * @module model/GetStandardResponseData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetStandardResponseData</code>.
   * @alias module:model/GetStandardResponseData
   * @class
   * @param data {module:model/UcsresponsesidgetdetailsData} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;
  };

  /**
   * Constructs a <code>GetStandardResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetStandardResponseData} obj Optional instance to populate.
   * @return {module:model/GetStandardResponseData} The populated <code>GetStandardResponseData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = UcsresponsesidgetdetailsData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UcsresponsesidgetdetailsData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


