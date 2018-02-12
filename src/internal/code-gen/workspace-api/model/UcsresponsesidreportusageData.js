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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.UcsresponsesidreportusageData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UcsresponsesidreportusageData model module.
   * @module model/UcsresponsesidreportusageData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UcsresponsesidreportusageData</code>.
   * @alias module:model/UcsresponsesidreportusageData
   * @class
   * @param interactionId {String} id of the interaction
   */
  var exports = function(interactionId) {
    var _this = this;

    _this['interactionId'] = interactionId;

  };

  /**
   * Constructs a <code>UcsresponsesidreportusageData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UcsresponsesidreportusageData} obj Optional instance to populate.
   * @return {module:model/UcsresponsesidreportusageData} The populated <code>UcsresponsesidreportusageData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('interactionId')) {
        obj['interactionId'] = ApiClient.convertToType(data['interactionId'], 'String');
      }
      if (data.hasOwnProperty('responseType')) {
        obj['responseType'] = ApiClient.convertToType(data['responseType'], 'String');
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
   * standard response usage type
   * @member {module:model/UcsresponsesidreportusageData.ResponseTypeEnum} responseType
   */
  exports.prototype['responseType'] = undefined;


  /**
   * Allowed values for the <code>responseType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ResponseTypeEnum = {
    /**
     * value: "SystemAutoResponse"
     * @const
     */
    "SystemAutoResponse": "SystemAutoResponse",
    /**
     * value: "SuggestedResponsesIgnored"
     * @const
     */
    "SuggestedResponsesIgnored": "SuggestedResponsesIgnored",
    /**
     * value: "SuggestedResponseChoosen"
     * @const
     */
    "SuggestedResponseChoosen": "SuggestedResponseChoosen",
    /**
     * value: "SuggestedResponseNotReceived"
     * @const
     */
    "SuggestedResponseNotReceived": "SuggestedResponseNotReceived",
    /**
     * value: "AdministratorResponse"
     * @const
     */
    "AdministratorResponse": "AdministratorResponse"  };


  return exports;
}));


