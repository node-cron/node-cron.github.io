function init() {
    const demo = new GDemo('#demo');
    
    const code = `
    const cron = require('node-cron');

    cron.schedule('* * * * * *', () => {
        console.log('running a task every second!');
    });
    `
    
    demo
    .openApp('editor', {minHeight: '350px', windowTitle: 'cron.js'})
    .write(code, {onCompleteDelay: 1000})
    .openApp('terminal', {minHeight: '350px', promptString: '$'})
    .command('node ./cron.js', {onCompleteDelay: 500})
    .respond('running a task every second!', {onCompleteDelay: 1000})
    .respond('running a task every second!', {onCompleteDelay: 1000})
    .respond('running a task every second!', {onCompleteDelay: 1000})
    .respond('running a task every second!', {onCompleteDelay: 1000})
    .respond('running a task every second!', {onCompleteDelay: 1000})
    .command('')
    .end();
}