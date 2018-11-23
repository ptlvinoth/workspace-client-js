/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.27.2423
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
    define(['ApiClient', 'model/UcscontactsidgethistoryData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UcscontactsidgethistoryData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ContactHistoryData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.UcscontactsidgethistoryData);
  }
}(this, function(ApiClient, UcscontactsidgethistoryData) {
  'use strict';




  /**
   * The ContactHistoryData model module.
   * @module model/ContactHistoryData
   * @version 9.0.000.27.2423
   */

  /**
   * Constructs a new <code>ContactHistoryData</code>.
   * @alias module:model/ContactHistoryData
   * @class
   * @param data {module:model/UcscontactsidgethistoryData} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;
  };

  /**
   * Constructs a <code>ContactHistoryData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContactHistoryData} obj Optional instance to populate.
   * @return {module:model/ContactHistoryData} The populated <code>ContactHistoryData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = UcscontactsidgethistoryData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UcscontactsidgethistoryData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


