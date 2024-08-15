/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getTodaysForecastGet$Json } from '../fn/weather-forecast/get-todays-forecast-get-json';
import { GetTodaysForecastGet$Json$Params } from '../fn/weather-forecast/get-todays-forecast-get-json';
import { getTodaysForecastGet$Plain } from '../fn/weather-forecast/get-todays-forecast-get-plain';
import { GetTodaysForecastGet$Plain$Params } from '../fn/weather-forecast/get-todays-forecast-get-plain';
import { getWeatherForecastGet$Json } from '../fn/weather-forecast/get-weather-forecast-get-json';
import { GetWeatherForecastGet$Json$Params } from '../fn/weather-forecast/get-weather-forecast-get-json';
import { getWeatherForecastGet$Plain } from '../fn/weather-forecast/get-weather-forecast-get-plain';
import { GetWeatherForecastGet$Plain$Params } from '../fn/weather-forecast/get-weather-forecast-get-plain';
import { WeatherForecast } from '../models/weather-forecast';

@Injectable({ providedIn: 'root' })
export class WeatherForecastService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getTodaysForecastGet()` */
  static readonly GetTodaysForecastGetPath = '/api/WeatherForecast/GetTodaysForecast/{tellMeTheWeatherIsGood}';

  /**
   * Get the current weather forecast for a fake place.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTodaysForecastGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTodaysForecastGet$Plain$Response(params: GetTodaysForecastGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<WeatherForecast>>> {
    return getTodaysForecastGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get the current weather forecast for a fake place.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTodaysForecastGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTodaysForecastGet$Plain(params: GetTodaysForecastGet$Plain$Params, context?: HttpContext): Observable<Array<WeatherForecast>> {
    return this.getTodaysForecastGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<WeatherForecast>>): Array<WeatherForecast> => r.body)
    );
  }

  /**
   * Get the current weather forecast for a fake place.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTodaysForecastGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTodaysForecastGet$Json$Response(params: GetTodaysForecastGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<WeatherForecast>>> {
    return getTodaysForecastGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get the current weather forecast for a fake place.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTodaysForecastGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTodaysForecastGet$Json(params: GetTodaysForecastGet$Json$Params, context?: HttpContext): Observable<Array<WeatherForecast>> {
    return this.getTodaysForecastGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<WeatherForecast>>): Array<WeatherForecast> => r.body)
    );
  }

  /** Path part for operation `getWeatherForecastGet()` */
  static readonly GetWeatherForecastGetPath = '/api/WeatherForecast/GetWeatherForecast/{days}';

  /**
   * Get the current weather forecast for a fake place.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWeatherForecastGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeatherForecastGet$Plain$Response(params: GetWeatherForecastGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<WeatherForecast>>> {
    return getWeatherForecastGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get the current weather forecast for a fake place.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getWeatherForecastGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeatherForecastGet$Plain(params: GetWeatherForecastGet$Plain$Params, context?: HttpContext): Observable<Array<WeatherForecast>> {
    return this.getWeatherForecastGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<WeatherForecast>>): Array<WeatherForecast> => r.body)
    );
  }

  /**
   * Get the current weather forecast for a fake place.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWeatherForecastGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeatherForecastGet$Json$Response(params: GetWeatherForecastGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<WeatherForecast>>> {
    return getWeatherForecastGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get the current weather forecast for a fake place.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getWeatherForecastGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeatherForecastGet$Json(params: GetWeatherForecastGet$Json$Params, context?: HttpContext): Observable<Array<WeatherForecast>> {
    return this.getWeatherForecastGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<WeatherForecast>>): Array<WeatherForecast> => r.body)
    );
  }

}
