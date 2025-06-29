const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
    jsonDir: 'reports',         // Location of JSON file
    reportPath: 'reports/html', // Output HTML folder
    metadata: {
        browser: {
            name: 'chrome',
            version: '114'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '11'
        }
    },
    customData: {
        title: 'Project Info',
        data: [
            { label: 'Project', value: 'Chambre API Tests' },
            { label: 'Release', value: '1.0.0' },
            { label: 'Tested by', value: 'QA Automation' },
            { label: 'Date', value: new Date().toLocaleString() }
        ]
    }
});
