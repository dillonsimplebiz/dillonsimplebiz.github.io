bulkList = Object.assign({}, importedList, newList)

searchBar = document.getElementById('searchbar')

searchBar.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    document.getElementById('search').click()
  }
})

document.getElementById('search').addEventListener('click', searchForEmail)

document.getElementById('getFilter').addEventListener('click', showFilters)



function showFilters(){
	document.getElementById('filterPM').style = 'display:block'
	for (var i=0;i<document.getElementsByClassName('filterPM_copy').length;i++){
		document.getElementsByClassName('filterPM_copy')[i].addEventListener('click', copyFilter)
	}
}

function copyFilter(){
	var region = this.innerHTML
	var arr = []
	var keys = Object.keys(bulkList)
	for (var i = 0;i<keys.length;i++){
		var area = getRegionByCode(bulkList[keys[i]].match("[0-9]{3}")[0])
		if (area == region){
			arr.push(keys[i])
		}
	}
	console.log(arr) // array of emails
	//forward to single email, or forward to each region's email?
	//forward to each others email
text = `<?xml version='1.0' encoding='UTF-8'?>
<feed xmlns='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>
	<title>Mail Filters</title>
	<id>tag:mail.google.com,2008:filters:z0000001679679588653*2088132869026123158</id>
	<updated>2023-03-24T17:40:09Z</updated>
	<author>
		<name>Dillon Long</name>
		<email>dillonlong@simple.biz</email>
	</author>`
	filterForEmail = arr.join(' OR ')
	while (filterForEmail != ''){
	filterForEmail = arr.splice(0,((arr.join(' OR ').slice(0,1500).match(/ OR /g) || []).length - 1)).join(' OR ')
	if (filterForEmail == ''){break}
	forward_to = getEmailByName(getLeadByRegion(region))
filename = 'forward to '+region+'.xml'
  text += `	<entry>
		<category term='filter'></category>
		<title>Mail Filter</title>
		<id>tag:mail.google.com,2008:filter:z0000001679679588653*2088132869026123158</id>
		<updated>2023-03-24T17:40:09Z</updated>
		<content></content>
		<apps:property name='from' value='`+filterForEmail+`'/>
		<apps:property name='shouldArchive' value='true'/>
		<apps:property name='forwardTo' value='`+forward_to+`'/>
		<apps:property name='sizeOperator' value='s_sl'/>
		<apps:property name='sizeUnit' value='s_smb'/>
	</entry>`
	
}
text += '</feed>'
var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function searchForEmail() {
  emailToSearch = document.getElementById('searchbar').value
  foundNumber = bulkList[emailToSearch]
  if (foundNumber == undefined) {
    // show no number found
    document.getElementById('results').innerHTML = '<span> Email not found, please look them up and add their email and Local Business Partner below<\span>'

  } else {
    areaCode = foundNumber.match('[0-9]{3}')[0]
    region = getRegionByCode(areaCode)
    projectManager = getLeadByRegion(region)
    pmEmail = getEmailByName(projectManager)
    document.getElementById('results').innerHTML = '<span> Region is ' + region + '. Project manager is ' + projectManager + '. Their email is ' + pmEmail + '.'
  }

}

function getEmailByName(name) {
  var email = "";
  switch (name) {
    case "Andrew":
      email = "andrew@simple.biz";
      break;
    case "Jeffrey":
      email = "jeffrey@simple.biz";
      break;
    case "Ray":
      email = "ray@simple.biz";
      break;
    case "Daniel":
      email = "daniels@simple.biz";
      break;
    case "Michael":
      email = "michael@simple.biz";
      break;
    case "Alan":
      email = "alan@simple.biz";
      break;
    case "Joe":
      email = "joe@simple.biz";
      break;
    case "James":
      email = "james@simple.biz";
      break;
    case "Jim":
      email = "jim@simple.biz";
      break;
    case "Katina":
      email = "katina@simple.biz";
      break;
    case "Alex_old":
      email = "alex@simple.biz";
      break;
    case "Mat":
      email = "mat@simple.biz";
      break;
    case "Theodore":
      email = "theodore@simple.biz";
      break;
    case "Elijah_old":
      email = "elijah@simple.biz";
      break;
    case "Chad":
      email = "chad@simple.biz";
      break;
    case "Haley":
      email = "haley@simple.biz";
      break;
    case "Rob":
      email = "robc@simple.biz";
      break;
    case "Ross":
      email = "rossstone@simple.biz";
      break;
    case "Paul":
      email = "paul@simple.biz";
      break;
    case "Deyon":
      email = "deyon@simple.biz";
      break;
    case "Iain":
      email = "iain@simple.biz";
      break;
    case "Ava":
      email = "ava@simple.biz";
      break;
    case "Amelia":
      email = "amelia@simple.biz";
      break;
    case "Damian":
      email = "damian@simple.biz";
      break;
    case "Dillon":
      email = "dillon@simple.biz";
      break;
    case "Sam":
      email = "samg@simple.biz";
      break;
    case "Jacob":
      email = "jacob@simple.biz";
      break;
    case "Lane":
      email = "lane@simple.biz";
      break;
    case "Sterling":
      email = "sterlingp@simple.biz";
      break;
    case "Nica":
      email = "nicar@simple.biz";
      break;
    case "Leo":
      email = "leod@simple.biz";
      break;
    case "Emma":
      email = "emmac@simple.biz";
      break;
    case "Dax":
      email = "dax@simple.biz";
      break;
    case "John":
      email = "johnr@simple.biz";
      break;
    case "Adrian":
      email = "adrianp@simple.biz";
      break;
    case "Dana":
      email = "danap@simple.biz";
      break;
    case "Patrick":
      email = "patrick@simple.biz";
      break;
    case "Mcgyver":
      email = "mcgyver@simple.biz";
      break;
    case "Josh":
      email = "josht@simple.biz";
      break;
    case "Elijah":
      email = "elijahm@simple.biz";
      break;
    case "Alexander":
      email = "alexandere@simple.biz";
      break;
    case "Reyna":
      email = "reynaj@simple.biz";
      break;
    case "Ralph":
      email = "ralphs@simple.biz";
      break;
    case "nick":
      email = "nickf@simple.biz";
      break;
  }
  return email;
}

function getLeadByRegion(region) {
  var lead = "";
  switch (region) {
    case "JERSEY":
      lead = "Amelia";
      break; 
    case "NORTHFLORIDA":
      lead = "Patrick";
      break;
    case "SOUTHEAST":
      lead = "Jeffrey";
      break; 
    case "VIRGINIA":
      lead = "Mcgyver";
      break; 
    case "NOCAL":
      lead = "Reyna";
      break;
    case "SOCAL":
      lead = "Dana";
      break; 
    case "NORTHLAKES": 
      lead = "Elijah";
      break; 
    case "BAYOU":
      lead = "Emma";
      break; 
    case "WEST":
      lead = "Leo";
      break;
    case "SOUTHFLORIDA": 
      lead = "Josh";
      break; 
    case "MIDATL":
      lead = "John";
      break; 
    case "LOWERLAKES":
      lead = "Andrew";
      break; 
    case "EASTLAKES":
      lead = "Alexander";
      break; 
    case "DC":
      lead = "nick";
      break; 
  }
  return lead;
}


function getRegionByCode(code) {
  var region = '??'
  switch (code) {
    case "856":
    case "609":
    case "640":
    case "732":
    case "973":
    case "862":
    case "201":
    case "551":
    case "718":
    case "347":
    case "917":
    case "929":
    case "212":
    case "332":
    case "646":
    case "914":
    case "631":
    case "934":
    case "203":
    case "475":
    case "860":
    case "959":
    case "413":
    case "508":
    case "774":
    case "617":
    case "857":
    case "781":
    case "339":
    case "978":
    case "351":
    case "207":
    case "603":
    case "516":
    case "401":
    case "802":
    case "848":
      region = 'JERSEY'
      break
    case "659":
    case "407":
    case "689":
    case "772":
    case "321":
    case "352":
    case "386":
    case "850":
    case "904":
    case "229":
    case "912":
    case "478":
    case "334":
    case "251":
    case "205":
    case "256":
    case "938":
      region = 'NORTHFLORIDA'
      break
    case "865":
    case "423":
    case "606":
    case "854":
    case "859":
    case "706":
    case "762":
    case "404":
    case "470":
    case "678":
    case "770":
    case "227":
    case "252":
    case "919":
    case "843":
    case "803":
    case "864":
    case "787":
    case "939":
      region = "SOUTHEAST"
      break
    case "747":
    case "209":
    case "916":
    case "408":
    case "669":
    case "510":
    case "907":
    case "808":
    case "559":
    case "925":
    case "818":
    case "415":
    case "650":
    case "831":
    case "530":
    case "707":
      region = "NOCAL"
      break
    case "820":
    case "805":
    case "760":
    case "619":
    case "858":
    case "909":
    case "951":
    case "949":
    case "714":
    case "657":
    case "562":
    case "626":
    case "213":
    case "323":
    case "310":
    case "424":
    case "661":
      region = "SOCAL"
      break
    case "218":
    case "320":
    case "507":
    case "763":
    case "651":
    case "952":
    case "612":
    case "715":
    case "534":
    case "906":
    case "608":
    case "920":
    case "262":
    case "414":
    case "847":
    case "224":
    case "630":
    case "331":
      region = "NORTHLAKES"
      break
    case "504":
    case "985":
    case "225":
    case "337":
    case "318":
    case "573":
    case "636":
    case "314":
    case "479":
    case "501":
    case "870":
    case "409":
    case "660":
    case "417":
    case "816":
    case "662":
    case "601":
    case "769":
    case "228":
    case "903":
    case "430":
    case "936":
    case "254":
    case "512":
    case "737":
    case "361":
    case "956":
    case "432":
    case "915":
    case "979":
    case "325":
    case "210":
    case "726":
    case "830":
    case "713":
    case "281":
    case "346":
    case "832":
    case "712":
    case "515":
    case "641":
    case "319":
    case "563":
    case "214":
    case "469":
    case "972":
    case "817":
    case "682":
    case "940":
    case "806":
      region = "BAYOU"
      break
    case "360":
    case "564":
    case "503":
    case "971":
    case "509":
    case "541":
    case "458":
    case "208":
    case "986":
    case "406":
    case "775":
    case "801":
    case "385":
    case "435":
    case "928":
    case "623":
    case "602":
    case "480":
    case "520":
    case "702":
    case "725":
    case "403":
    case "587":
    case "780":
    case "236":
    case "250":
    case "604":
    case "672":
    case "778":
    case "206":
    case "253":
    case "425":
    case "316":
    case "620":
    case "785":
    case "913":
    case "308":
    case "402":
    case "531":
    case "605":
    case "701":
    case "303":
    case "720":
    case "970":
    case "307":
    case "575":
    case "505":
    case "719":
    case "580":
    case "405":
    case "918":
    case "539":
      region = "WEST"
      break
    case "786":
    case "954":
    case "754":
    case "305":
    case "239":
    case "561":
    case "863":
    case "941":
    case "727":
    case "813":
      region = "SOUTHFLORIDA"
      break
    case "513":
    case "937":
    case "614":
    case "380":
    case "740":
    case "220":
    case "270":
    case "364":
    case "330":
    case "234":
    case "440":
    case "216":
    case "724":
    case "878":
    case "412":
    case "283":
    case "901":
    case "731":
    case "931":
    case "615":
    case "629":
    case "304":
    case "681":
      region = "MIDATL"
      break
    case "815":
    case "779":
    case "309":
    case "217":
    case "618":
    case "219":
    case "502":
    case "812":
    case "930":
    case "765":
    case "317":
    case "463":
    case "708":
    case "773":
    case "872":
    case "312":
    case "447":
    case "416":
    case "437":
    case "647":
    case "905":
    case "289":
    case "365":
    case "705":
    case "249":
    case "613":
    case "343":
    case "519":
    case "226":
    case "548":
    case "807":
      region = "LOWERLAKES"
      break
    case "276":
    case "540":
    case "434":
    case "804":
    case "757":
    case "410":
    case "443":
    case "667":
    case "302":
    case "202":
    case "703":
    case "571":
      region = "VIRGINIA"
      break
    case "574":
    case "260":
    case "419":
    case "567":
    case "248":
    case "947":
    case "313":
    case "586":
    case "734":
    case "810":
    case "231":
    case "269":
    case "517":
    case "616":
    case "989":
      region = "EASTLAKES"
      break
    case "716":
    case "585":
    case "315":
    case "680":
    case "607":
    case "845":
    case "518":
    case "838":
    case "908":
    case "814":
    case "717":
    case "223":
    case "272":
    case "570":
    case "610":
    case "484":
    case "215":
    case "267":
    case "445":
    case "582":
    case "301":
    case "240":
      region = "DC"
      break
    default:
      return "Missing code";
      break;

  }
  return region
}
