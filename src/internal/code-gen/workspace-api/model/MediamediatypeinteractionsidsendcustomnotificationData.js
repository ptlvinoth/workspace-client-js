/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.72.3561
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
    define(['ApiClient', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediamediatypeinteractionsidsendcustomnotificationData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The MediamediatypeinteractionsidsendcustomnotificationData model module.
   * @module model/MediamediatypeinteractionsidsendcustomnotificationData
   * @version 9.0.000.72.3561
   */

  /**
   * Constructs a new <code>MediamediatypeinteractionsidsendcustomnotificationData</code>.
   * @alias module:model/MediamediatypeinteractionsidsendcustomnotificationData
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>MediamediatypeinteractionsidsendcustomnotificationData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediamediatypeinteractionsidsendcustomnotificationData} obj Optional instance to populate.
   * @return {module:model/MediamediatypeinteractionsidsendcustomnotificationData} The populated <code>MediamediatypeinteractionsidsendcustomnotificationData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('visibility')) {
        obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
      }
      if (data.hasOwnProperty('userData')) {
        obj['userData'] = ApiClient.convertToType(data['userData'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * The message to send to the chat participants.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Defines which participants in the chat can see the message.
   * @member {module:model/MediamediatypeinteractionsidsendcustomnotificationData.VisibilityEnum} visibility
   */
  exports.prototype['visibility'] = undefined;
  /**
   * The data of custom notification. This is an array of objects with the properties key, type, and value.
   * @member {Array.<module:model/Kvpair>} userData
   */
  exports.prototype['userData'] = undefined;


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


