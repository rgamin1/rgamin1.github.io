const headers = new Headers()
headers.append("Content-Type", "application/json")

var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

const body = {
  "user_agent": navigator.userAgent,
  "url": baseUrl,
  "timezoneoffset" : Intl.DateTimeFormat().resolvedOptions().timeZone
}
 
const options = {
  method: "POST",
  headers,
  mode: "cors",
  body: JSON.stringify(body),
}
 
fetch("https://en2vswvr7591m4q.m.pipedream.net", options)