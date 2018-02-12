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
    define(['ApiClient', 'model/MediaemailinteractionsidreplyData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediaemailinteractionsidreplyData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ReplyData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediaemailinteractionsidreplyData);
  }
}(this, function(ApiClient, MediaemailinteractionsidreplyData) {
  'use strict';




  /**
   * The ReplyData model module.
   * @module model/ReplyData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ReplyData</code>.
   * @alias module:model/ReplyData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ReplyData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReplyData} obj Optional instance to populate.
   * @return {module:model/ReplyData} The populated <code>ReplyData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = MediaemailinteractionsidreplyData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MediaemailinteractionsidreplyData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


