/* tslint:disable */
/* eslint-disable */
import { DateOnly } from '../models/date-only';
import { WeatherType } from '../models/weather-type';

/**
 * Data about a Weather Forecast
 */
export interface WeatherForecast {
  date?: DateOnly;

  /**
   * A one-word description of the weather
   */
  summary?: string | null;
  temperatureC?: number;
  temperatureF?: number;
  weatherType?: WeatherType;
}
