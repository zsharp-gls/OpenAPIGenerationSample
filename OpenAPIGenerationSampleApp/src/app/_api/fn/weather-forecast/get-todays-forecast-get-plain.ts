/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { WeatherForecast } from '../../models/weather-forecast';

export interface GetTodaysForecastGet$Plain$Params {

/**
 * Set to true when the user doesn't want to be presented with any bad news
 */
  tellMeTheWeatherIsGood: boolean;
}

export function getTodaysForecastGet$Plain(http: HttpClient, rootUrl: string, params: GetTodaysForecastGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<WeatherForecast>>> {
  const rb = new RequestBuilder(rootUrl, getTodaysForecastGet$Plain.PATH, 'get');
  if (params) {
    rb.path('tellMeTheWeatherIsGood', params.tellMeTheWeatherIsGood, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<WeatherForecast>>;
    })
  );
}

getTodaysForecastGet$Plain.PATH = '/api/WeatherForecast/GetTodaysForecast/{tellMeTheWeatherIsGood}';
