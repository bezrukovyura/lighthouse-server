import { lighthouseHelper } from "./lighthouse/lighthouseHelper";
import { ChromeFlags } from "./lighthouse/models/ChromeFlags";

const opts = {
    chromeFlags: [ChromeFlags.size1366, ChromeFlags.headless]
};

lighthouseHelper('https://veeam.com', opts).then(results => {
    console.log(results.timing.entries);
    let items = results.audits["network-requests"].details.items.map(item => {
        return {
            size: item.resourceSize,
            url: item.url,
            status: item.statusCode,
            type: item.resourceType,
            time: item.endTime - item.startTime
        }
    });
    console.log(items);
    debugger
});
