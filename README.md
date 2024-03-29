# powerbi-embedded-in-salesforce

This is a sample code snippet that enables you to build a Salesforce Lightning / Aura component embedding your Power BI report.

## Benefits & Use Cases:
* leverage your Power BI skillset without needing to learn a new analytics product
* provide a true 360 degree view of your customers by leveraging data across your data estate
* re-use Power BI reports and enable end users visibility to the data they need in the application they need them in
* provide real time streaming data to your service agents and sales reps, for example mobile tower signal strength, product usage info, bank transaction metadata etc
* provide future looking data based on AI you have implemented inside your Azure data platform

## Instructions:
- Create a new lightning component via the Salesforce developer console
- Copy the code in each file in this repo into the appropriate components
- In line 9 in the PowerBI_1.cmp file, replace the iframe URL with your correct PowerBI report location (ie replace <iframe src='https://msit.powerbi.com/reportEmbed?reportId=xxxxx&amp;autoAuth=true')
- Save the component, wait a minute or two for it to sync and become available in your lightning page builder
- Open the lightning page builder, drag and drop the component onto the page layout you'd like to have it on
- Publish the page
- Enjoy, you now have enterprise grade dashboarding functionality using PowerBI inside your Salesforce instance to provide amazing insights to your users!

## Credits:
* https://salesforce.stackexchange.com/questions/166612/is-it-posible-to-add-iframe-directly-in-lightning-components
* https://salesforce.stackexchange.com/questions/272462/embed-power-bi-into-salesforce
* https://powerbi.microsoft.com/en-us/blog/easily-embed-secure-power-bi-reports-in-your-internal-portals-or-websites/
* https://trailhead.salesforce.com/en/content/learn/projects/workshop-override-standard-action/override_1


## Further/reference info:
- Note that Power BI embedded is included with your Power BI Premium subscription. It's no additional cost, however just note that using PowerBI embedded will drive a higher amount of consumption of yhour Power BI premium instance.
- What is Power BI Embedded? https://docs.microsoft.com/en-us/power-bi/developer/embedded/azure-pbie-what-is-power-bi-embedded
