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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediachatinteractionsidupdatenicknameData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediachatinteractionsidupdatenicknameData model module.
   * @module model/MediachatinteractionsidupdatenicknameData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MediachatinteractionsidupdatenicknameData</code>.
   * @alias module:model/MediachatinteractionsidupdatenicknameData
   * @class
   * @param nickname {String} The new nickname.
   */
  var exports = function(nickname) {
    var _this = this;

    _this['nickname'] = nickname;

  };

  /**
   * Constructs a <code>MediachatinteractionsidupdatenicknameData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediachatinteractionsidupdatenicknameData} obj Optional instance to populate.
   * @return {module:model/MediachatinteractionsidupdatenicknameData} The populated <code>MediachatinteractionsidupdatenicknameData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('nickname')) {
        obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
      }
      if (data.hasOwnProperty('visibility')) {
        obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
      }
    }
    return obj;
  }

  /**
   * The new nickname.
   * @member {String} nickname
   */
  exports.prototype['nickname'] = undefined;
  /**
   * Defines which participants in the chat can see the message.
   * @member {module:model/MediachatinteractionsidupdatenicknameData.VisibilityEnum} visibility
   */
  exports.prototype['visibility'] = undefined;


  /**
   * Allowed values for the <code>visibility</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VisibilityEnum = {
    /**
     * value: "All"
     * @const
     */
    "All": "All",
    /**
     * value: "Agent"
     * @const
     */
    "Agent": "Agent",
    /**
     * value: "Supervisor"
     * @const
     */
    "Supervisor": "Supervisor"  };


  return exports;
}));

