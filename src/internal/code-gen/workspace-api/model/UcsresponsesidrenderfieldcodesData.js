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
    root.WorkspaceApi.UcsresponsesidrenderfieldcodesData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The UcsresponsesidrenderfieldcodesData model module.
   * @module model/UcsresponsesidrenderfieldcodesData
   * @version 9.0.000.33.2671
   */

  /**
   * Constructs a new <code>UcsresponsesidrenderfieldcodesData</code>.
   * @alias module:model/UcsresponsesidrenderfieldcodesData
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>UcsresponsesidrenderfieldcodesData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UcsresponsesidrenderfieldcodesData} obj Optional instance to populate.
   * @return {module:model/UcsresponsesidrenderfieldcodesData} The populated <code>UcsresponsesidrenderfieldcodesData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('interactionId')) {
        obj['interactionId'] = ApiClient.convertToType(data['interactionId'], 'String');
      }
      if (data.hasOwnProperty('usePlainText')) {
        obj['usePlainText'] = ApiClient.convertToType(data['usePlainText'], 'Boolean');
      }
      if (data.hasOwnProperty('customProperties')) {
        obj['customProperties'] = ApiClient.convertToType(data['customProperties'], [Kvpair]);
      }
      if (data.hasOwnProperty('agentCustomProperties')) {
        obj['agentCustomProperties'] = ApiClient.convertToType(data['agentCustomProperties'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * id of the interaction
   * @member {String} interactionId
   */
  exports.prototype['interactionId'] = undefined;
  /**
   * true to use Plain Text
   * @member {Boolean} usePlainText
   */
  exports.prototype['usePlainText'] = undefined;
  /**
   * A key/value pairs list of the custom properties to render.
   * @member {Array.<module:model/Kvpair>} customProperties
   */
  exports.prototype['customProperties'] = undefined;
  /**
   * A key/value pairs list of the agent custom properties to render.
   * @member {Array.<module:model/Kvpair>} agentCustomProperties
   */
  exports.prototype['agentCustomProperties'] = undefined;



  return exports;
}));


