/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.23.2279
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
    define(['ApiClient', 'model/MediachatinteractionsidsendtypingstoppedData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediachatinteractionsidsendtypingstoppedData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.AcceptData4 = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediachatinteractionsidsendtypingstoppedData);
  }
}(this, function(ApiClient, MediachatinteractionsidsendtypingstoppedData) {
  'use strict';




  /**
   * The AcceptData4 model module.
   * @module model/AcceptData4
   * @version 9.0.000.23.2279
   */

  /**
   * Constructs a new <code>AcceptData4</code>.
   * @alias module:model/AcceptData4
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AcceptData4</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AcceptData4} obj Optional instance to populate.
   * @return {module:model/AcceptData4} The populated <code>AcceptData4</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = MediachatinteractionsidsendtypingstoppedData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MediachatinteractionsidsendtypingstoppedData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


