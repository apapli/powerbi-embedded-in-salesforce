# powerbi-embedded-in-salesforce

This is a sample code snippet that enables you to build a Salesforce Lightning / Aura component embedding your Power BI report.

## Benefits:
* leverage your Power BI skillset without needing to learn a new analytics product
* provide a true 360 degree view of your cusotmer by leveraging data across your data estate
* re-use Power BI reports and enable end users visibility to the data they need in the application they need them in

## Use cases:
* provide real time streaming data to your service agents, for example mobile tower signal strength, bandwidth utilization and other telemetry
* provide future looking data based on AI you have implemented
* 

## Instructions:
- Create a new lightning component via the Salesforce developer console
- Copy the code in each file in this repo into the appropriate components
- Save the component, wait a minute or two for it to sync and become available in your lightning page builder
- Open the lightning page builder, drag and drop the component onto the page layout you'd like to have it on
- Publish the page
- Enjoy, you now have enterprise grade analytics functionality inside your Salesforce instance to provide amazing insights to your users!

## Credits:
* https://salesforce.stackexchange.com/questions/166612/is-it-posible-to-add-iframe-directly-in-lightning-components
* https://salesforce.stackexchange.com/questions/272462/embed-power-bi-into-salesforce
* https://powerbi.microsoft.com/en-us/blog/easily-embed-secure-power-bi-reports-in-your-internal-portals-or-websites/
* https://trailhead.salesforce.com/en/content/learn/projects/workshop-override-standard-action/override_1


## Further/feference info:
- Note that Power BI embedded is included with your Power BI Premium subscription. It's no additional cost, however just note that using PowerBI embedded will drive a higher amount of consumption of yhour Power BI premium instance.
- What is Power BI Embedded? https://docs.microsoft.com/en-us/power-bi/developer/embedded/azure-pbie-what-is-power-bi-embedded

## Comparison with Einstein Analytics
Note this is my personal view, not that of Microsoft's!

Item                                 | Power BI Embedded                 | Salesforce Einstein Analytics
------------------------------------ | --------------------------------- | -----------------------------
Build a new data platform            | No - leverage existing            | Yes - need to set up a new Einstein Analytics environment complete with pipelines to ingest data
Duplicate data                       | No - leverage existing DW         | Most likely
Native support for streaming data    | Yes                               | No
Use your existing Power BI Skillsets | Yes                               | No
Number of experienced consultants    | In the millions globally          | Ask Salesforce
Re-use existing Power BI Reports     | Yes - just copy your embed code   | No
Row level security on non-Salesforce data | Yes - leverage your existing patterns     | Ask Salesforce
Data residency                       | Per Azure & Power BI DC Locations | Ask Salesforce
Data encryption at rest              | Avaiable                          | Ask Salesforce
Bring your own encryption key        | Yes                               | Ask Salesforce
Additional licensing requirement     | Included with Power BI Premium*   | Ask Salesforce
** Power BI Embedded drives additional consumption on your Power BI premium, but does not attract an additional per-user charge

