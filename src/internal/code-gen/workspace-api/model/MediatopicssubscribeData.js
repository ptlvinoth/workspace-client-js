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
    define(['ApiClient', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediatopicssubscribeData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The MediatopicssubscribeData model module.
   * @module model/MediatopicssubscribeData
   * @version 9.0.000.33.2671
   */

  /**
   * Constructs a new <code>MediatopicssubscribeData</code>.
   * @alias module:model/MediatopicssubscribeData
   * @class
   * @param topicList {Array.<module:model/Kvpair>} A collection of key/value pairs.
   */
  var exports = function(topicList) {
    var _this = this;

    _this['topicList'] = topicList;

  };

  /**
   * Constructs a <code>MediatopicssubscribeData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediatopicssubscribeData} obj Optional instance to populate.
   * @return {module:model/MediatopicssubscribeData} The populated <code>MediatopicssubscribeData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('topicList')) {
        obj['topicList'] = ApiClient.convertToType(data['topicList'], [Kvpair]);
      }
      if (data.hasOwnProperty('extension')) {
        obj['extension'] = ApiClient.convertToType(data['extension'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * A collection of key/value pairs.
   * @member {Array.<module:model/Kvpair>} topicList
   */
  exports.prototype['topicList'] = undefined;
  /**
   * A collection of key/value pairs.
   * @member {Array.<module:model/Kvpair>} extension
   */
  exports.prototype['extension'] = undefined;



  return exports;
}));


