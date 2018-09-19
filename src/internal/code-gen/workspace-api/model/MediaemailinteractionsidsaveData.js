/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.22.2269
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
    root.WorkspaceApi.MediaemailinteractionsidsaveData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediaemailinteractionsidsaveData model module.
   * @module model/MediaemailinteractionsidsaveData
   * @version 9.0.000.22.2269
   */

  /**
   * Constructs a new <code>MediaemailinteractionsidsaveData</code>.
   * @alias module:model/MediaemailinteractionsidsaveData
   * @class
   * @param from {String} from address.
   * @param to {Array.<String>} to addresses
   */
  var exports = function(from, to) {
    var _this = this;






    _this['from'] = from;
    _this['to'] = to;


  };

  /**
   * Constructs a <code>MediaemailinteractionsidsaveData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediaemailinteractionsidsaveData} obj Optional instance to populate.
   * @return {module:model/MediaemailinteractionsidsaveData} The populated <code>MediaemailinteractionsidsaveData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
      if (data.hasOwnProperty('bodyAsPlainText')) {
        obj['bodyAsPlainText'] = ApiClient.convertToType(data['bodyAsPlainText'], 'String');
      }
      if (data.hasOwnProperty('mime')) {
        obj['mime'] = ApiClient.convertToType(data['mime'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'String');
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], ['String']);
      }
      if (data.hasOwnProperty('cc')) {
        obj['cc'] = ApiClient.convertToType(data['cc'], ['String']);
      }
      if (data.hasOwnProperty('bcc')) {
        obj['bcc'] = ApiClient.convertToType(data['bcc'], ['String']);
      }
    }
    return obj;
  }

  /**
   * HTML body of email.
   * @member {String} body
   */
  exports.prototype['body'] = undefined;
  /**
   * Plain text body of email.
   * @member {String} bodyAsPlainText
   */
  exports.prototype['bodyAsPlainText'] = undefined;
  /**
   * Multipurpose internet mail extensions of email.
   * @member {String} mime
   */
  exports.prototype['mime'] = undefined;
  /**
   * Subject of email.
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * Subject of email.
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * from address.
   * @member {String} from
   */
  exports.prototype['from'] = undefined;
  /**
   * to addresses
   * @member {Array.<String>} to
   */
  exports.prototype['to'] = undefined;
  /**
   * cc addresses
   * @member {Array.<String>} cc
   */
  exports.prototype['cc'] = undefined;
  /**
   * bcc addresses
   * @member {Array.<String>} bcc
   */
  exports.prototype['bcc'] = undefined;



  return exports;
}));


