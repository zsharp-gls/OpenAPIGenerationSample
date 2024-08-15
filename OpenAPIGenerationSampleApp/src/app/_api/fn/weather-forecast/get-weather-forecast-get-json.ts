/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { WeatherForecast } from '../../models/weather-forecast';

export interface GetWeatherForecastGet$Json$Params {
  days: number;
}

export function getWeatherForecastGet$Json(http: HttpClient, rootUrl: string, params: GetWeatherForecastGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<WeatherForecast>>> {
  const rb = new RequestBuilder(rootUrl, getWeatherForecastGet$Json.PATH, 'get');
  if (params) {
    rb.path('days', params.days, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<WeatherForecast>>;
    })
  );
}

getWeatherForecastGet$Json.PATH = '/api/WeatherForecast/GetWeatherForecast/{days}';
