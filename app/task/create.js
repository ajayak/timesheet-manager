const Nightmare = require('nightmare');
require('nightmare-window-manager')(Nightmare);
const _ = require('lodash');

const nightmare = Nightmare({
  show: true
});

const values = JSON.parse(_.unescape('{&quot;code&quot;:&quot;IV17035&quot;,&quot;employeeId&quot;:&quot;ajay.kumar&quot;,&quot;createTask&quot;:true,&quot;fillTask&quot;:true}'));
const file = JSON.parse(_.unescape('{&quot;1&quot;:[&quot;Project&quot;,&quot;TASK&quot;,&quot;DATE&quot;,&quot;HRS (H)&quot;,&quot;HRS (DEC)&quot;],&quot;2&quot;:[&quot;Beyano&quot;,&quot;Create wiki on setting up project on Windows&quot;,&quot;2017-04-17&quot;,&quot;00:25:40&quot;,0.42778],&quot;3&quot;:[&quot;Beyano&quot;,&quot;DPO-599 As a dev, store dates only as string in the Review-model.&quot;,&quot;2017-04-17&quot;,&quot;00:31:16&quot;,0.52111],&quot;4&quot;:[&quot;Beyano&quot;,&quot;Project Docs Study&quot;,&quot;2017-04-17&quot;,&quot;00:00:04&quot;,0.00111],&quot;5&quot;:[&quot;Beyano&quot;,&quot;Project KT&quot;,&quot;2017-04-17&quot;,&quot;01:06:39&quot;,1.11083],&quot;6&quot;:[&quot;JIRA: DPOrganizer&quot;,&quot;Add Sentry to server side of dpo-frontend&quot;,&quot;2017-04-26&quot;,&quot;05:47:23&quot;,5.78972],&quot;7&quot;:[&quot;JIRA: DPOrganizer&quot;,&quot;As a User, saves review dates with UTC time&quot;,&quot;2017-04-25&quot;,&quot;04:48:21&quot;,4.80583],&quot;8&quot;:[&quot;JIRA: DPOrganizer&quot;,&quot;As a User, saves review dates with UTC time&quot;,&quot;2017-04-26&quot;,&quot;01:21:18&quot;,1.355],&quot;9&quot;:[&quot;JIRA: DPOrganizer&quot;,&quot;As a dev, store dates only as string in the Review-model.&quot;,&quot;2017-04-17&quot;,&quot;00:00:06&quot;,0.00167],&quot;10&quot;:[&quot;JIRA: DPOrganizer&quot;,&quot;As a dev, store dates only as string in the Review-model.&quot;,&quot;2017-04-21&quot;,&quot;00:00:10&quot;,0.00278],&quot;11&quot;:[&quot;JIRA: DPOrganizer&quot;,&quot;As a dev, store dates only as string in the Review-model.&quot;,&quot;2017-04-23&quot;,&quot;00:00:01&quot;,0.00028],&quot;12&quot;:[&quot;JIRA: DPOrganizer&quot;,&quot;As a dev, store dates only as string in the Review-model.&quot;,&quot;2017-04-24&quot;,&quot;03:52:06&quot;,3.86833],&quot;13&quot;:[&quot;JIRA: DPOrganizer&quot;,&quot;As a dev, store dates only as string in the Review-model.&quot;,&quot;2017-04-25&quot;,&quot;01:46:02&quot;,1.76722],&quot;14&quot;:[&quot;JIRA: DPOrganizer&quot;,&quot;As a reviewer, I don&#39;t want checkboxes at some places&quot;,&quot;2017-04-25&quot;,&quot;00:49:42&quot;,0.82833],&quot;15&quot;:[&quot;JIRA: DPOrganizer&quot;,&quot;Explore the applications &amp; documentation (Ajay)&quot;,&quot;2017-04-17&quot;,&quot;01:28:35&quot;,1.47639],&quot;16&quot;:[&quot;JIRA: DPOrganizer&quot;,&quot;Explore the applications &amp; documentation (Ajay)&quot;,&quot;2017-04-19&quot;,&quot;06:49:32&quot;,6.82556],&quot;17&quot;:[&quot;JIRA: DPOrganizer&quot;,&quot;Explore the applications &amp; documentation (Ajay)&quot;,&quot;2017-04-20&quot;,&quot;07:11:38&quot;,7.19389],&quot;18&quot;:[&quot;JIRA: DPOrganizer&quot;,&quot;Explore the applications &amp; documentation (Ajay)&quot;,&quot;2017-04-21&quot;,&quot;07:23:40&quot;,7.39444],&quot;19&quot;:[&quot;JIRA: DPOrganizer&quot;,&quot;Explore the applications &amp; documentation (Ajay)&quot;,&quot;2017-04-23&quot;,&quot;00:02:23&quot;,0.03972],&quot;20&quot;:[&quot;JIRA: DPOrganizer&quot;,&quot;Explore the applications &amp; documentation (Ajay)&quot;,&quot;2017-04-24&quot;,&quot;03:36:34&quot;,3.60944]}'));
// const file = JSON.parse(_.unescape(process.argv[2]));
// const values = JSON.parse(_.unescape(process.argv[3]));

function getDateString(date) {
  return `${date.getMonth() + 1 }/${date.getDate()}/${date.getFullYear()}`;
}

nightmare
  .windowManager()
  .goto('http://sepg.spanservices.com/SEProcessGroup/?userid=VnpOMGFHRnRSalZNYlhReFlsZEdlV1pXTUQwPQ==&hidAction=timesheet')
  .waitWindowLoad()
  .focusWindow(2)
  .closeWindow(2)
  .click('#projectTaskList')
  .waitWindowLoad()
  .evaluate(function(values) {
    var element = Array
      .from(document.querySelectorAll('#PROJECT_GRID_LIST a'))
      .filter(e => e.innerText.toLowerCase() === values.code.toLowerCase())[0];
    element.setAttribute('id', 'myProject');
  }, values)
  .click("#myProject")
  .waitWindowLoad()
  .click('[title="Add New Task"]')
  .waitWindowLoad()
  // .end()
  .then((result) => {
    console.log(file);
    const allRows = Object.keys(file).map(key => file[key]);
    const rows = allRows.slice(1);
    const group = _.groupBy(rows, row => row[2]);

    Object.keys(group).forEach(taskName => {
      const tasks = group[taskName];
      const task = tasks[0];
      const dates = tasks.map(task => new Date(task[3]));
      const now = new Date();
      const startDate = getDateString(dates.reduce((a, b) => a < b && a != now ? a : b, now));
      const endDate = getDateString(dates.reduce((a, b) => a > b ? a : b, 0));
      const phase = task[0];
      const module = task[1];
      const priority = '773'; // Medium
      const status = '829'; // In Progress
      const label = 'AK';
      const version = '1';
      const hours = tasks.map(q => Math.ceil(q[5])).reduce((a, b) => a + b, 0);
    });

    return nightmare
      .type('[name="ptkTaskName"]', 'github nightmare');
    // .end();
    // rows.forEach((row) =s> {

    // });
  })
  .catch((error) => {
    console.error(error);
  });
