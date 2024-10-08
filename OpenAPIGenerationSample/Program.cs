using OpenAPIGenerationSample.SchemaFilters;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(opt =>
{
    opt.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Version = "v1",
        Title = "Demo API",
        Description = "A demo of linking front and back end services with OpenAPI"
    });

    opt.CustomOperationIds(e => $"{e.ActionDescriptor.RouteValues["action"]}_{e.HttpMethod}");

    opt.SchemaFilter<EnumSchemaFilter>();

    //https://learn.microsoft.com/en-us/aspnet/core/tutorials/getting-started-with-swashbuckle?view=aspnetcore-8.0&tabs=visual-studio#xml-comments
    var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    opt.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));

    ////From https://stackoverflow.com/a/57872872
    //opt.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    //{
    //    Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
    //    Name = "Authorization",
    //    Scheme = "Bearer",
    //    In = ParameterLocation.Header,
    //    Type = SecuritySchemeType.ApiKey,
    //});

    //opt.AddSecurityRequirement(new OpenApiSecurityRequirement {
    //    {
    //        new OpenApiSecurityScheme
    //        {
    //            Reference = new OpenApiReference
    //            {
    //                Id="Bearer",
    //                Type = ReferenceType.SecurityScheme,
    //            }
    //        }, new List<string>()
    //    }
    //});
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
