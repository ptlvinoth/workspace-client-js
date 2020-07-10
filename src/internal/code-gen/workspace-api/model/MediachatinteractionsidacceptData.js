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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediachatinteractionsidacceptData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediachatinteractionsidacceptData model module.
   * @module model/MediachatinteractionsidacceptData
   * @version 9.0.000.78.3880
   */

  /**
   * Constructs a new <code>MediachatinteractionsidacceptData</code>.
   * @alias module:model/MediachatinteractionsidacceptData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>MediachatinteractionsidacceptData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediachatinteractionsidacceptData} obj Optional instance to populate.
   * @return {module:model/MediachatinteractionsidacceptData} The populated <code>MediachatinteractionsidacceptData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('nickname')) {
        obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
      }
    }
    return obj;
  }

  /**
   * The agent's nickname, as displayed to the chat participants.
   * @member {String} nickname
   */
  exports.prototype['nickname'] = undefined;



  return exports;
}));


