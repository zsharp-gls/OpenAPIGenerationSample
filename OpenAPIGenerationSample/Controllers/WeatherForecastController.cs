using Microsoft.AspNetCore.Mvc;

namespace OpenAPIGenerationSample.Controllers
{
    /// <summary>
    /// Information about the weather
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Get the current weather forecast for a fake place
        /// </summary>
        /// <param name="tellMeTheWeatherIsGood">Set to true when the user doesn't want to be presented with any bad news</param>
        /// <returns>Forecasted weather for one day</returns>
        [HttpGet("[action]/{tellMeTheWeatherIsGood:bool}")]
        public IEnumerable<WeatherForecast> GetTodaysForecast(bool tellMeTheWeatherIsGood)
        {
            var result = GetWeatherForecast(1);
            foreach (var item in result)
            {
                if (tellMeTheWeatherIsGood)
                    item.WeatherType = WeatherType.Good;
            }
            return result;
        }

        /// <summary>
        /// Get the current weather forecast for a fake place
        /// </summary>
        /// <returns>Forecasted weather for a user-specified amount of days</returns>
        [HttpGet("[action]/{days:int}")]
        public IEnumerable<WeatherForecast> GetWeatherForecast(int days)
        {
            return Enumerable.Range(1, days).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)],
                WeatherType = WeatherType.Good,
            })
            .ToArray();
        }
    }
}
