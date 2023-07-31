import BadRequest from './errors/BadRequest';
import Unauthorized from './errors/Unauthorized';
import PaymentRequired from './errors/PaymentRequired';
import Forbidden from './errors/Forbidden';
import NotFound from './errors/NotFound';
import MethodNotAllowed from './errors/MethodNotAllowed';
import NotAcceptable from './errors/NotAcceptable';
import ProxyAuthenticationRequired from './errors/ProxyAuthenticationRequired';
import RequestTimeout from './errors/RequestTimeout';
import Conflict from './errors/Conflict';
import Gone from './errors/Gone';
import LengthRequired from './errors/LengthRequired';
import PreconditionFailed from './errors/PreconditionFailed';
import PayloadTooLarge from './errors/PayloadTooLarge';
import UriTooLong from './errors/UriTooLong';
import UnsupportedMediaType from './errors/UnsupportedMediaType';
import RangeNotSatisfiable from './errors/RangeNotSatisfiable';
import ExpectationFailed from './errors/ExpectationFailed';
import MisdirectedRequest from './errors/MisdirectedRequest';
import UnprocessableEntity from './errors/UnprocessableEntity';
import Locked from './errors/Locked';
import FailedDependency from './errors/FailedDependency';
import TooEarly from './errors/TooEarly';
import UpgradeRequired from './errors/UpgradeRequired';
import PreconditionRequired from './errors/PreconditionRequired';
import TooManyRequests from './errors/TooManyRequests';
import RequestHeaderFieldsTooLarge from './errors/RequestHeaderFieldsTooLarge';
import UnavailableForLegalReasons from './errors/UnavailableForLegalReasons';
import InternalServerError from './errors/InternalServerError';
import NotImplemented from './errors/NotImplemented';
import BadGateway from './errors/BadGateway';
import ServiceUnavailable from './errors/ServiceUnavailable';
import GatewayTimeout from './errors/GatewayTimeout';
import HttpVersionNotSupported from './errors/HttpVersionNotSupported';
import VariantAlsoNegotiates from './errors/VariantAlsoNegotiates';
import UnsufficientStorage from './errors/UnsufficientStorage';
import LoopDetected from './errors/LoopDetected';
import NotExtended from './errors/NotExtended';
import NetworkAuthenticationRequired from './errors/NetworkAuthenticationRequired';
import { BaseHTTPError } from './errors/base';

interface HttpResponseWithError {
  status: number;
  headers: any;
  data?: any;
}

interface NumberToClass {
  [key: number]: any;
}

const statusCodeToErrorFunction: NumberToClass = {
  400: BadRequest,
  401: Unauthorized,
  402: PaymentRequired,
  403: Forbidden,
  404: NotFound,
  405: MethodNotAllowed,
  406: NotAcceptable,
  407: ProxyAuthenticationRequired,
  408: RequestTimeout,
  409: Conflict,
  410: Gone,
  411: LengthRequired,
  412: PreconditionFailed,
  413: PayloadTooLarge,
  414: UriTooLong,
  415: UnsupportedMediaType,
  416: RangeNotSatisfiable,
  417: ExpectationFailed,
  421: MisdirectedRequest,
  422: UnprocessableEntity,
  423: Locked,
  424: FailedDependency,
  425: TooEarly,
  426: UpgradeRequired,
  428: PreconditionRequired,
  429: TooManyRequests,
  431: RequestHeaderFieldsTooLarge,
  451: UnavailableForLegalReasons,
  500: InternalServerError,
  501: NotImplemented,
  502: BadGateway,
  503: ServiceUnavailable,
  504: GatewayTimeout,
  505: HttpVersionNotSupported,
  506: VariantAlsoNegotiates,
  507: UnsufficientStorage,
  508: LoopDetected,
  510: NotExtended,
  511: NetworkAuthenticationRequired,
};

/**
 * @summary This function will throw an error.
 *
 * @param {HttpResponseWithError} response - the response from a request, must contain a status and data fields
 * @throws {Error} - an http error
 */
export default function throwHttpError(response: HttpResponseWithError): never {
  // certain error codes have special handling, we try those first
  switch (response.status) {
    case 401:
      throw new Unauthorized(response.data, response.headers['WWW-Authenticate']);
    case 405:
      // this indicates a bug in the spec if it allows a method that the server rejects
      throw new MethodNotAllowed(response.data, response.headers.allowed);
    case 407:
      throw new ProxyAuthenticationRequired(response.data, response.headers['Proxy-Authenticate']);
    case 413:
      throw new PayloadTooLarge(response.data, response.headers['Retry-After']);
    case 429:
      throw new TooManyRequests(response.data, response.headers['Retry-After']);
    case 503:
      throw new ServiceUnavailable(response.data, response.headers['Retry-After']);
    default:
      if (response.status in statusCodeToErrorFunction) {
        throw new statusCodeToErrorFunction[response.status](response.data);
      } else {
        const error = new BaseHTTPError(response.data);
        error.statusCode = response.status;
        error.title = 'unknown error';
        throw error;
      }
  }
}
