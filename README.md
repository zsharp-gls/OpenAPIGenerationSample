# OpenAPIGenerationSample

## What is this repository?
OpenAPI is a language-agnostic format for publishing information about how to use HTTP API endpoints. In GLS's standard stack, it's used to generate client code in our Angular apps that seamlessly calls into our backend C# apps. By routinely publishing (from the ASP.NET app) and consuming (into the Angular app) a `swagger.json` OpenAPI spec, we can reduce typos and developer grunt work to set up API calls from the Angular app.

## Using this repository
This repository doesn't do anything. Instead, the commit log can be viewed as a kind of checklist for changes to make to standard ASP.NET and Angular apps to configure an easy-to-use OpenAPI link between them. Each commit describes the conceptual change being made, shows the code changes that constitue the technical change, and may give more description around why a change is made or which commands to execute to make it happen. 

I suggest understanding it by cloning the repository to your local machine, then stepping through each commit one-by-one, noting the changes between commits and experimenting as you go.

If you mostly know what you're doing and just need some reminders, you can just review the commit log from GitHub and check the commits you have questions about for their specifics.

## Future Considerations
Microsoft is working to transition away from Swashbuckle as the default OpenAPI spec provider for ASP.NET apps. As of ASP.NET 9.0, they're building on a Microsoft-created tool, [Microsoft.AspNetCore.OpenApi](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/openapi/overview?view=aspnetcore-9.0). See [this GitHub issue](https://github.com/dotnet/aspnetcore/issues/54599) for more context on why.

While this won't mean anything for GLS projects today, it does mean that projects created in .NET 9.0 and greater will need to find new ways to configure the ASP.NET side of OpenAPI that's represented in this repository - especially non-default configurations like the `x-enumName` extension.

The Swashbuckle CLI tool will no longer work. Instead, the package uses a `OpenApiGenerateDocuments` property on the `csproj` file.

Though the concrete steps may be different, the overarching concepts as laid out in this repository will still be important.