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
    define(['ApiClient', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.VoicecallsiddeletefromconferenceData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The VoicecallsiddeletefromconferenceData model module.
   * @module model/VoicecallsiddeletefromconferenceData
   * @version 9.0.000.27.2423
   */

  /**
   * Constructs a new <code>VoicecallsiddeletefromconferenceData</code>.
   * @alias module:model/VoicecallsiddeletefromconferenceData
   * @class
   * @param dnToDrop {String} The DN of the party to drop from the conference.
   */
  var exports = function(dnToDrop) {
    var _this = this;

    _this['dnToDrop'] = dnToDrop;


  };

  /**
   * Constructs a <code>VoicecallsiddeletefromconferenceData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoicecallsiddeletefromconferenceData} obj Optional instance to populate.
   * @return {module:model/VoicecallsiddeletefromconferenceData} The populated <code>VoicecallsiddeletefromconferenceData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dnToDrop')) {
        obj['dnToDrop'] = ApiClient.convertToType(data['dnToDrop'], 'String');
      }
      if (data.hasOwnProperty('reasons')) {
        obj['reasons'] = ApiClient.convertToType(data['reasons'], [Kvpair]);
      }
      if (data.hasOwnProperty('extensions')) {
        obj['extensions'] = ApiClient.convertToType(data['extensions'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * The DN of the party to drop from the conference.
   * @member {String} dnToDrop
   */
  exports.prototype['dnToDrop'] = undefined;
  /**
   * Information on causes for, and results of, actions taken by the user of the current DN. For details about reasons, refer to the [*Genesys Events and Models Reference Manual*](https://docs.genesys.com/Documentation/System/Current/GenEM/Reasons).
   * @member {Array.<module:model/Kvpair>} reasons
   */
  exports.prototype['reasons'] = undefined;
  /**
   * Media device/hardware reason codes and similar information. For details about extensions, refer to the [*Genesys Events and Models Reference Manual*](https://docs.genesys.com/Documentation/System/Current/GenEM/Extensions).
   * @member {Array.<module:model/Kvpair>} extensions
   */
  exports.prototype['extensions'] = undefined;



  return exports;
}));


