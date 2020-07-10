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
    define(['ApiClient', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.VoicecallsidsinglesteptransferData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The VoicecallsidsinglesteptransferData model module.
   * @module model/VoicecallsidsinglesteptransferData
   * @version 9.0.000.78.3880
   */

  /**
   * Constructs a new <code>VoicecallsidsinglesteptransferData</code>.
   * @alias module:model/VoicecallsidsinglesteptransferData
   * @class
   * @param destination {String} The number where the call should be transferred.
   */
  var exports = function(destination) {
    var _this = this;

    _this['destination'] = destination;




  };

  /**
   * Constructs a <code>VoicecallsidsinglesteptransferData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoicecallsidsinglesteptransferData} obj Optional instance to populate.
   * @return {module:model/VoicecallsidsinglesteptransferData} The populated <code>VoicecallsidsinglesteptransferData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('destination')) {
        obj['destination'] = ApiClient.convertToType(data['destination'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('userData')) {
        obj['userData'] = ApiClient.convertToType(data['userData'], [Kvpair]);
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
   * The number where the call should be transferred.
   * @member {String} destination
   */
  exports.prototype['destination'] = undefined;
  /**
   * Name of the remote location in the form of <SwitchName> or <T-ServerApplicationName>@<SwitchName>. This value is used by Workspace to set the location attribute for the corresponding T-Server requests. When there is no need to specify a T-Server for location, this parameter must have the value NULL, not an empty string.
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * Key/value data to include with the call.
   * @member {Array.<module:model/Kvpair>} userData
   */
  exports.prototype['userData'] = undefined;
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


