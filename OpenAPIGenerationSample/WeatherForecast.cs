namespace OpenAPIGenerationSample
{
    /// <summary>
    /// Data about a Weather Forecast
    /// </summary>
    public class WeatherForecast
    {
        public DateOnly Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        /// <summary>
        /// A one-word description of the weather
        /// </summary>
        public string? Summary { get; set; }

        public WeatherType WeatherType { get; set; }
    }
}
