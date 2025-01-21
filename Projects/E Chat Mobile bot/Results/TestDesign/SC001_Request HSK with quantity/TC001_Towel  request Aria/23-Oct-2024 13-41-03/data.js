var DATA={"axeReport":false,"releaseName":"HSK request Test","noTests":1,"perfReport":false,"EXECUTIONS":[{"noTests":18,"iterationType":"Single","description":"Test Run","platform":"WIN10","exeTime":"00:01:03","iterations":1,"testcaseName":"TC001_Towel  request Aria","browser":"Chrome","nopassTests":"16","startTime":"23-Oct-2024 13:41:03.003","endTime":"23-Oct-2024 13:42:06.006","scenarioName":"SC001_Request HSK with quantity","bversion":"130","nofailTests":"2","STEPS":[{"data":[{"data":[{"data":{"stepno":1,"stepName":"Open","tStamp":"23-Oct-2024 13:41:08.008","action":"Open","description":"Opened Url: file:\/\/\/C:\/Users\/AGOPAL\/OneDrive%20-%20MGM%20Resorts%20International\/E-chat\/Mobile%20app%20data\/Bot%20-%20QA%20Aria%20LCO.html","status":"DONE"},"name":"Open the Url [<Data>] in the Browser","type":"step"},{"data":{"stepno":2,"stepName":"pause","tStamp":"23-Oct-2024 13:41:13.013","action":"pause","description":"Thread sleep for '5000","status":"DONE"},"name":"Wait for [<Data>] milli seconds","type":"step"},{"data":{"stepno":3,"stepName":"Click","tStamp":"23-Oct-2024 13:41:13.013","action":"Click","description":"Clicking on Let's Chat button","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":4,"stepName":"pause","tStamp":"23-Oct-2024 13:41:23.023","action":"pause","description":"Thread sleep for '10000","status":"DONE"},"name":"Wait for [<Data>] milli seconds","type":"step"},{"data":{"stepno":5,"stepName":"assertElementPresent","tStamp":"23-Oct-2024 13:41:23.023","link":"\\img\\SC001_Request HSK with quantity_TC001_Towel  request Aria_Step-5_13-41-23.png","action":"assertElementPresent","description":"Element [Start conversation text] is Present","status":"PASS"},"name":"Assert if [<Object>] is present","type":"step"},{"data":{"stepno":6,"stepName":"pause","tStamp":"23-Oct-2024 13:41:27.027","action":"pause","description":"Thread sleep for '3000","status":"DONE"},"name":"Wait for [<Data>] milli seconds","type":"step"}],"name":"General:Launch Web Chat_Aria","description":"","startTime":"23-Oct-2024 13:41:05.005","endTime":"23-Oct-2024 13:41:27.027","type":"reusable","status":"PASS"},{"data":[{"data":{"stepno":7,"stepName":"assertElementPresent","tStamp":"23-Oct-2024 13:41:27.027","link":"\\img\\SC001_Request HSK with quantity_TC001_Towel  request Aria_Step-7_13-41-27.png","action":"assertElementPresent","description":"Element [Chat text box] is Present","status":"PASS"},"name":"Assert if [<Object>] is present","type":"step"},{"data":{"stepno":8,"stepName":"doubleClickElement","tStamp":"23-Oct-2024 13:41:27.027","action":"doubleClickElement","description":"'[[ChromeDriver: chrome on WINDOWS (b5844b9f021a5402e1dcfb54f73dad40)] -> xpath: \/\/div[@class='webchat__send-box__main']\/\/form[1]\/\/textarea[@aria-label='Message input box']]' is doubleClicked","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":9,"stepName":"Set","tStamp":"23-Oct-2024 13:41:28.028","action":"Set","description":"Entered Text 'Can you please send some towels to my room?' on 'Chat text box'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":10,"stepName":"ClickIfExists","tStamp":"23-Oct-2024 13:41:28.028","action":"ClickIfExists","description":"Clicking on Send button","status":"DONE"},"name":"Click the [<Object>] if it exists","type":"step"},{"data":{"stepno":11,"stepName":"pause","tStamp":"23-Oct-2024 13:41:33.033","action":"pause","description":"Thread sleep for '5000","status":"DONE"},"name":"Wait for [<Data>] milli seconds","type":"step"}],"name":"General:Request for a Towel","description":"","startTime":"23-Oct-2024 13:41:27.027","endTime":"23-Oct-2024 13:41:33.033","type":"reusable","status":"PASS"},{"data":[{"data":{"stepno":12,"stepName":"Click","tStamp":"23-Oct-2024 13:41:33.033","action":"Click","description":"Clicking on Chat text box","status":"DONE"},"name":"Send Keys [<Data>]  to object [<Object>].","type":"step"},{"data":{"stepno":13,"stepName":"Set","tStamp":"23-Oct-2024 13:41:33.033","action":"Set","description":"Entered Text '2' on 'Chat text box'","status":"DONE"},"name":"Send Keys [<Data>]  to object [<Object>].","type":"step"},{"data":{"stepno":14,"stepName":"ClickIfExists","tStamp":"23-Oct-2024 13:41:33.033","action":"ClickIfExists","description":"Clicking on Send button","status":"DONE"},"name":"Click the [<Object>] if it exists","type":"step"},{"data":{"stepno":15,"stepName":"pause","tStamp":"23-Oct-2024 13:41:39.039","action":"pause","description":"Thread sleep for '6000","status":"DONE"},"name":"Wait for [<Data>] milli seconds","type":"step"}],"name":"General:Enter required quantity","description":"","startTime":"23-Oct-2024 13:41:33.033","endTime":"23-Oct-2024 13:41:39.039","type":"reusable","status":"PASS"},{"data":{"stepno":16,"stepName":"pause","tStamp":"23-Oct-2024 13:41:44.044","action":"pause","description":"Thread sleep for '5000","status":"DONE"},"name":"Wait for [<Data>] milli seconds","type":"step"},{"data":{"stepno":17,"stepName":"assertElementPresent","tStamp":"23-Oct-2024 13:41:54.054","link":"\\img\\SC001_Request HSK with quantity_TC001_Towel  request Aria_Step-17_13-41-54.png","action":"assertElementPresent","description":"Element [Confirmation message 1] is not Present","status":"FAIL"},"name":"Assert if [<Object>] is present","type":"step"},{"data":{"stepno":18,"stepName":"storeTextPresent","tStamp":"23-Oct-2024 13:42:05.005","link":"\\img\\SC001_Request HSK with quantity_TC001_Towel  request Aria_Step-18_13-42-05.png","action":"storeTextPresent","description":"Seems Like the Element [Confirmation message 1] is Not Present\/Found in the page Try Adding wait or heal it","status":"FAIL"},"name":"Store in variable true or false based on presence of text in [<Object>] element -> [<Data>]","type":"step"}],"name":"Iteration_1","type":"iteration","status":"FAIL"}],"status":"FAIL"}],"iterationMode":"ContinueOnError","exeTime":"00:01:04","testRun":true,"runConfiguration":"Local","themes":["Amethyst","Coral","Pearl","Sapphire"],"testsetName":"Aria HSK_Towel request","nopassTests":"0","theme":"Sapphire","startTime":"23-Oct-2024 13:41:03.003","endTime":"23-Oct-2024 13:42:07.007","projectName":"E Chat Mobile bot","maxThreads":1,"bddReport":false,"nofailTests":"1"};