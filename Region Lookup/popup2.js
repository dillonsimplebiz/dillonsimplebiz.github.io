document.addEventListener('DOMContentLoaded', function() {
  var entryvalue = document.getElementById('entryvalue');
  entryvalue.focus();
  var codeSpan = document.getElementById('code');
  var stateSpan = document.getElementById('state');
  var regionSpan = document.getElementById('region');
  var leadSpan = document.getElementById('lead');
  var numberSpan = document.getElementById('number');
  var guidanceSpan = document.getElementById('guidance');
  regionSpan.addEventListener('click', function() {
    copySpan("region")
  });
  leadSpan.addEventListener('click', function() {
    copySpan("lead")
  });
  guidanceSpan.addEventListener('click', function() {
    copySpan("guidance")
  });
  numberSpan.addEventListener('click', function() {
    copySpan("number")
  });
  var checkButton = document.getElementById('checkbutton');
  checkButton.addEventListener('click', function() {
    var inputText = entryvalue.value;


    var stateResult = getStateByCode(inputText);
    var regionResult = getRegionByCode(inputText);
    var leadResult = getLeadByRegion(regionResult);
    var numberResult = getNumberByCode(inputText);
    var guidanceResult = getGuidanceByCode(inputText);

    codeSpan.innerHTML = inputText;
    stateSpan.innerHTML = stateResult;
    regionSpan.innerHTML = regionResult;
    leadSpan.innerHTML = leadResult;
    numberSpan.innerHTML = numberResult;
    guidanceSpan.innerHTML = guidanceResult;
  });

  var snakeSpan = document.getElementById('snake');
  snakeSpan.addEventListener('click', init);

  var form = document.getElementById("myForm");

  function handleForm(event) {
    event.preventDefault();
  }
  form.addEventListener('submit', handleForm);
}, false);

function copySpan(elem) {
  console.log("copySpan" + elem);
  var copyText = "";
  var noticeText = "";
  switch (elem) {
    case "region":
      copyText = document.getElementById('region').innerHTML;
      noticeText = "[copied region]";
      break;
    case "lead":
      var leadName = document.getElementById('lead').innerHTML;
      copyText = getEmailByName(leadName);
      noticeText = "[copied lead email]";
      break;
    case "guidance":
      copyText = document.getElementById('number').innerHTML + " " + document.getElementById('guidance').innerHTML;
      noticeText = "[copied guidance]";
      break;
    case "number":
      copyText = removePhoneFormat(document.getElementById('number').innerHTML);
      noticeText = "[copied " + copyText + "]";
      break;
  }
  var noticeSpan = document.getElementById('notice');
  navigator.clipboard.writeText(copyText).then(function() {
    /* clipboard successfully set */

    noticeSpan.innerHTML = noticeText;
  }, function() {
    /* clipboard write failed */

  });
}

/**
 * @license HTML5 experiment Snake
 * http://www.xarg.org/project/html5-snake/
 *
 * Copyright (c) 2011, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
function init() {

  var ctx;
  var turn = [];

  var xV = [-1, 0, 1, 0];
  var yV = [0, -1, 0, 1];
  var queue = [];

  var elements = 1;
  var map = [];

  var X = 5 + (Math.random() * (45 - 10)) | 0;
  var Y = 5 + (Math.random() * (30 - 10)) | 0;

  var direction = Math.random() * 3 | 0;

  var interval = 0;

  var score = 0;
  var inc_score = 50;

  var sum = 0,
    easy = 0;

  var i, dir;

  var canvas = document.createElement('canvas');

  for (i = 0; i < 45; i++) {
    map[i] = [];
  }

  canvas.setAttribute('width', 45 * 10);
  canvas.setAttribute('height', 30 * 10);
  canvas.setAttribute('style', 'border:1px solid black');

  ctx = canvas.getContext('2d');

  document.body.appendChild(canvas);

  function placeFood() {

    var x, y;

    do {
      x = Math.random() * 45 | 0;
      y = Math.random() * 30 | 0;
    } while (map[x][y]);

    map[x][y] = 1;
    ctx.strokeRect(x * 10 + 1, y * 10 + 1, 10 - 2, 10 - 2);
  }
  placeFood();


  function clock() {

    if (easy) {
      X = (X + 45) % 45;
      Y = (Y + 30) % 30;
    }

    --inc_score;

    if (turn.length) {
      dir = turn.pop();
      if ((dir % 2) !== (direction % 2)) {
        direction = dir;
      }
    }

    if (

      (easy || (0 <= X && 0 <= Y && X < 45 && Y < 30))


      &&
      2 !== map[X][Y]) {

      if (1 === map[X][Y]) {
        score += Math.max(5, inc_score);
        inc_score = 50;
        placeFood();
        elements++;
      }

      ctx.fillRect(X * 10, Y * 10, 10 - 1, 10 - 1);
      map[X][Y] = 2;
      queue.unshift([X, Y]);

      X += xV[direction];
      Y += yV[direction];

      if (elements < queue.length) {
        dir = queue.pop()

        map[dir[0]][dir[1]] = 0;
        ctx.clearRect(dir[0] * 10, dir[1] * 10, 10, 10);
      }

    } else if (!turn.length) {

      if (confirm("You lost! Play again? Your Score is " + score)) {

        ctx.clearRect(0, 0, 450, 300);

        queue = [];

        elements = 1;
        map = [];

        X = 5 + (Math.random() * (45 - 10)) | 0;
        Y = 5 + (Math.random() * (30 - 10)) | 0;

        direction = Math.random() * 3 | 0;

        score = 0;
        inc_score = 50;

        for (i = 0; i < 45; i++) {
          map[i] = [];
        }

        placeFood();
      } else {
        window.clearInterval(interval);
      }
    }

  }

  interval = window.setInterval(clock, 60);

  document.onkeydown = function(e) {

    var code = e.keyCode - 37;

    /*
     * 0: left
     * 1: up
     * 2: right
     * 3: down
     **/
    if (0 <= code && code < 4 && code !== turn[0]) {
      turn.unshift(code);
    } else if (-5 == code) {

      if (interval) {
        window.clearInterval(interval);
        interval = null;
      } else {
        interval = window.setInterval(clock, 60);
      }

    } else { // O.o
      dir = sum + code;
      if (dir == 44 || dir == 94 || dir == 126 || dir == 171) {
        sum += code
      } else if (dir === 218) easy = 1;
    }
  }
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
    case "516":
    case "848":
      region = 'JERSEY'
      break
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
    case "401":
    case "802":
      region = 'NEST'
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
      region = "BAYOU"
      break
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
      region = "TEXAS"
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
      region = "WEST"
      break
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
    case "712":
    case "515":
    case "641":
    case "319":
    case "563":
      region = "DAKOTA"
      break
    case "575":
    case "505":
    case "719":
    case "580":
    case "405":
    case "918":
    case "539":
    case "214":
    case "469":
    case "972":
    case "817":
    case "682":
    case "940":
    case "806":
      region = "DESERT"
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

function getStateByCode(code) {
  var stateAbbr = "??";
  switch (code) {
	//adding north carolina
	case "704":
	case "252":
	case "336":
	case "704":
	case "828":
	case "910":
	case "919":
	case "980":
	case "984":
	  stateAbbr = "NC";
	  break;
    case "403":
    case "587":
    case "780":
      stateAbbr = "AB";
      break;

    case "659":
    case "938":
      stateAbbr = "AL";
      break;

    case "334":
    case "251":
    case "256":
    case "205":
      stateAbbr = "AL-2";
      break;

    case "479":
    case "501":
    case "870":
      stateAbbr = "AR";
      break;


    case "623":
    case "520":
    case "928":
    case "602":
    case "480":
      stateAbbr = "AZ";
      break;

    case "236":
    case "250":
    case "604":
    case "672":
    case "778":
      stateAbbr = "BC";
      break;

    case "310":
    case "747":
    case "209":
    case "916":
    case "949":
    case "714":
    case "657":
    case "408":
    case "669":
    case "510":
    case "805":
      stateAbbr = "CA";
      break;

    case "424":
    case "559":
    case "619":
    case "909":
    case "951":
    case "530":
    case "760":
    case "925":
    case "626":
    case "310":
    case "707":
    case "818":
    case "858":
    case "415":
    case "213":
    case "323":
    case "650":
    case "661":
    case "831":
    case "562":
      stateAbbr = "CA2";
      break;

    case "719":
    case "303":
    case "720":
    case "970":
      stateAbbr = "CO";
      break;

    case "203":
    case "475":
    case "860":
    case "959":
      stateAbbr = "CT";
      break;

    case "202":
      stateAbbr = "DC";
      break;

    case "302":
      stateAbbr = "DE";
      break;

    case "941":
    case "754":
    case "239":
    case "407":
    case "689":
      stateAbbr = "FL";
      break;


    case "786":
    case "813":
    case "321":
    case "352":
    case "386":
    case "850":
    case "904":
    case "772":
    case "561":
    case "863":
    case "727":
      stateAbbr = "FL-2";
      break;

    case "478":
    case "706":
    case "762":
    case "404":
    case "470":
    case "912":
    case "678":
    case "229":
    case "770":
      stateAbbr = "GA";
      break;


    case "319":
    case "515":
    case "563":
    case "641":
    case "712":
      stateAbbr = "IA";
      break;

    case "208":
    case "986":
      stateAbbr = "ID";
      break;

    case "773":
    case "708":
    case "312":
    case "872":
    case "847":
    case "224":
    case "630":
    case "331":
    case "217":
    case "447":
    case "309":
    case "618":
    case "815":
    case "779":
      stateAbbr = "IL";
      break;

    case "317":
    case "930":
    case "765":
    case "812":
    case "219":
    case "260":
    case "574":
      stateAbbr = "IN";
      break;

    case "316":
    case "620":
    case "785":
    case "913":
      stateAbbr = "KS";
      break;

    case "270":
    case "364":
    case "502":
    case "606":
    case "859":
      stateAbbr = "KY";
      break;

    case "225":
    case "318":
    case "337":
    case "504":
    case "985":
      stateAbbr = "LA";
      break;

    case "413":
    case "508":
    case "774":
    case "617":
    case "857":
    case "781":
    case "339":
    case "978":
    case "351":
      stateAbbr = "MA";
      break;

    case "240":
    case "227":
    case "301":
    case "410":
    case "667":
    case "443":
      stateAbbr = "MD";
      break;

    case "207":
      stateAbbr = "ME";
      break;

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
    case "906":
    case "989":
      stateAbbr = "MI";
      break;

    case "218":
    case "320":
    case "507":
    case "612":
    case "651":
    case "763":
    case "952":
      stateAbbr = "MN";
      break;

    case "660":
    case "816":
    case "314":
    case "417":
    case "573":
    case "636":
      stateAbbr = "MO";
      break;

    case "228":
    case "769":
    case "662":
    case "601":
      stateAbbr = "MS";
      break;


    case "406":
      stateAbbr = "MT";
      break;

    case "701":
      stateAbbr = "ND";
      break;

    case "308":
    case "402":
    case "531":
      stateAbbr = "NE";
      break;

    case "603":
      stateAbbr = "NH";
      break;

    case "856":
    case "201":
    case "551":
    case "908":
    case "973":
    case "862":
    case "609":
    case "640":
    case "732":
    case "848":
      stateAbbr = "NJ";
      break;

    case "505":
    case "575":
      stateAbbr = "NM";
      break;

    case "702":
    case "775":
      stateAbbr = "NV";
      break;

    case "315":
    case "680":
    case "518":
    case "607":
    case "845":
    case "585":
    case "716":
    case "516":
    case "631":
    case "212":
    case "347":
    case "646":
    case "718":
    case "914":
    case "917":
    case "929":
      stateAbbr = "NY";
      break;

    case "252":
    case "919":
      stateAbbr = "NC";
      break;

    case "216":
    case "330":
    case "234":
    case "440":
    case "283":
    case "513":
    case "380":
    case "614":
    case "220":
    case "740":
    case "937":
    case "419":
    case "567":
      stateAbbr = "OH";
      break;

    case "405":
    case "580":
    case "918":
    case "539":
      stateAbbr = "OK";
      break;

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
      stateAbbr = "ON";
      break;

    case "503":
    case "971":
    case "541":
    case "458":
      stateAbbr = "OR";
      break;

    case "570":
    case "272":
    case "717":
    case "223":
    case "814":
    case "215":
    case "267":
    case "484":
    case "610":
    case "412":
    case "878":
    case "724":
      stateAbbr = "PA";
      break;

    case "401":
      stateAbbr = "RI";
      break;

    case "843":
    case "803":
    case "864":
      stateAbbr = "SC";
      break;

    case "605":
      stateAbbr = "SD";
      break;

    case "901":
    case "731":
    case "423":
    case "865":
    case "615":
    case "629":
    case "931":
      stateAbbr = "TN";
      break;

    case "254":
    case "512":
    case "737":
    case "361":
    case "956":
    case "972":
    case "214":
    case "469":
    case "940":
    case "817":
    case "682":
    case "903":
    case "430":
    case "432":
    case "915":
    case "281":
    case "409":
    case "713":
    case "832":
    case "936":
    case "979":
    case "325":
    case "806":
    case "210":
    case "726":
    case "830":
      //customer only numbers
    case "346":
    case "972":
      stateAbbr = "TX";
      break;

    case "435":
    case "385":
    case "801":
      stateAbbr = "UT";
      break;

    case "703":
    case "571":
    case "276":
    case "434":
    case "540":
    case "757":
    case "804":
      stateAbbr = "VA";
      break;

    case "802":
      stateAbbr = "VT";
      break;

    case "206":
    case "253":
    case "360":
    case "564":
    case "425":
    case "509":
      stateAbbr = "WA";
      break;

    case "262":
    case "414":
    case "608":
    case "715":
    case "534":
    case "920":
      stateAbbr = "WI";
      break;

    case "304":
    case "681":
      stateAbbr = "WV";
      break;

    case "307":
      stateAbbr = "WY";
      break;

    case "907":
      stateAbbr = "AK";
      break;

    case "808":
      stateAbbr = "HI";
      break;

    case "787":
    case "939":
      stateAbbr = "PR";
      break;

    case "954":
    case "305":
      stateAbbr = "FL2";
      break;

    default:
      return "Missing code";
      break;
  }
  return stateAbbr;
}

function getRegionByState(stateAbbr) {
  var region = "";

  switch (stateAbbr) {

    //Canada - LAKES
    case "ON":
      //LAKES
    case "IL":
    case "MI":
    case "MN":
    case "WI":
      //LAKES-FL
    case "FL2":
      region = "LAKES";
      break;

      //Canada - WEST
    case "AB":
    case "BC":
      //WEST
    case "CO":
    case "ID":
    case "MT":
    case "NV":
    case "NM":
    case "OR":
    case "UT":
    case "WA":
    case "WY":
    case "KS":
    case "NE":
    case "OK":
    case "ND":
    case "SD":
      region = "WEST";
      break;

      //CENTRAL
    case "AR":
    case "IA":
    case "LA":
    case "MO":
    case "TX":
      region = "CENTRAL";
      break;

      //MIDATL
    case "OH":
    case "IN":
    case "TN":
    case "KY":
    case "PA":
      region = "MIDATL";
      break;

      //CALI
    case "AZ":
    case "AK":
    case "CA":
    case "HI":
      region = "CALI";
      break;

      //CALI2
    case "AZ":
    case "CA2":
      region = "CALI2";
      break;

      //NEST
    case "NJ":
    case "CT":
    case "RI":
    case "ME":
    case "MA":
    case "NH":
    case "NY":
    case "RI":
    case "VT":
      region = "NEST";
      break;

      //SOUTHEAST
    case "GA":
    case "NC":
    case "SC":
    case "PR":
    case "DE":
    case "DC":
    case "MD":
    case "VA":
    case "WV":
      region = "SOUTHEAST";
      break;

      //SOUTH
    case "AL":
    case "MS":
    case "FL":
      region = "SOUTH";
      break;

      //SOUTH-2
    case "FL-2":
    case "AL-2":
      region = "SOUTH-2";
      break;

    default:
      return "ERROR";
  }

  return region;
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
      lead = "Nick";
      break; 
    case "NEST":
      lead = "Tony";
      break; 
    case "TEXAS":
      lead = "Joy";
      break; 
    case "DAKOTA":
      lead = "Scott";
      break; 
    case "DESERT":
      lead = "JC";
      break; 
  }
  return lead;
}

function getNumberByCode(code) {
  var number = "";
  switch (code) {
	//adding north carolina
	case "704":
	case "980":
	  number = '(704) 748-0331';
	  break;
	case "252":
	case "336":
	case "704":
	case "828":
	case "910":
	case "919":
	case "980":
	case "984":
	  number = 'N/A';
	  break;
    case '403':
    case '587':
      number = '(403) 744-5084';
      break;
    case '780':
      number = '(780) 652-4368';
      break;
    case '205':
    case '659':
      number = '(205) 644-8082';
      break;
    case '251':
      number = '(251) 263-0839';
      break;
    case '256':
    case '938':
      number = '(256) 692-5067';
      break;
    case '334':
      number = '(334) 539-9079';
      break;
    case '479':
      number = '(479) 337-8632';
      break;
    case '501':
      number = '(501) 406-0819';
      break;
    case '870':
      number = '(870) 393-0180';
      break;
    case '480':
      number = '(480) 935-6401';
      break;
    case '520':
      number = '(520) 336-9402';
      break;
    case '602':
      number = '(602) 610-1952';
      break;
    case '623':
      number = '(623) 428-0024';
      break;
    case '928':
      number = '(928) 515-0852';
      break;
    case '236':
    case '250':
    case '604':
    case '672':
    case '778':
      number = '(604) 283-7316';
      break;
    case '530':
      number = '(530) 636-9041';
      break;
    case '559':
      number = '(559) 216-0018';
      break;
    case '213':
      number = '(213) 401-9023';
      break;
    case '310':
    case '424':
      number = '(310) 620-3071';
      break;
    case '323':
      number = '(323) 536-8329';
      break;
    case '562':
      number = '(562) 303-5465';
      break;
    case '626':
      number = '(626) 345-6134';
      break;
    case '661':
      number = '(661) 441-3073';
      break;
    case '818':
      number = '(818) 572-0376';
      break;
    case '951':
      number = '(951) 550-0203';
      break;
    case '909':
      number = '(909) 325-7110';
      break;
    case '209':
      number = '(209) 427-0443';
      break;
    case '916':
      number = '(916) 476-2883';
      break;
    case '949':
      number = '(949) 281-0164';
      break;
    case '714':
    case '657':
      number = '(714) 794-1046';
      break;
    case '619':
      number = '(619) 354-7516';
      break;
    case '760':
      number = '(760) 621-9417';
      break;
    case '858':
      number = '(858) 434-1650';
      break;
    case '408':
    case '669':
      number = '(408) 620-4626';
      break;
    case '415':
      number = '(415) 267-1812';
      break;
    case '510':
      number = '(510) 318-9030';
      break;
    case '650':
      number = '(650) 781-6707';
      break;
    case '707':
      number = '(707) 230-6732';
      break;
    case '831':
      number = '(831) 202-4112';
      break;
    case '925':
      number = '(925) 326-2024';
      break;
    case '805':
      number = '(805) 322-0141';
      break;
    case '719':
      number = '(719) 203-7760';
      break;
    case '303':
      number = '(303) 552-2864';
      break;
    case '720':
      number = '(720) 477-6987';
      break;
    case '970':
      number = '(970) 449-0999';
      break;
    case '203':
    case '475':
      number = '(203) 635-8762';
      break;
    case '860':
    case '959':
      number = '(860) 650-0233';
      break;
    case '202':
      number = '(202) 773-4750';
      break;
    case '302':
      number = '(302) 415-3887';
      break;
    case '727':
      number = '(727) 222-0536';
      break;
    case '813':
      number = '(813) 212-4315';
      break;
    case '941':
      number = '(941) 263-2298';
      break;
    case '352':
      number = '(352) 805-1356';
      break;
    case '386':
      number = '(386) 401-1750';
      break;
    case '904':
      number = '(904) 414-6581';
      break;
    case '561':
      number = '(561) 203-1044';
      break;
    case '772':
      number = '(772) 272-8527';
      break;
    case '305':
      number = '(305)-341-3906';
      break;
    case '786':
      number = '(786) 477-6130';
      break;
    case '954':
    case '754':
      number = '(954) 676-7073';
      break;
    case '239':
      number = '(239) 778-0789';
      break;
    case '321':
      number = '(321) 204-1692';
      break;
    case '407':
    case '689':
      number = '(407) 505-6391';
      break;
    case '863':
      number = '(863) 259-1162';
      break;
    case '850':
      number = '(850) 583-9823';
      break;
    case '229':
      number = '(229) 506-7143';
      break;
    case '478':
      number = '(478) 339-0254';
      break;
    case '706':
    case '762':
      number = '(706) 426-0731';
      break;
    case '404':
      number = '(404) 549-4501';
      break;
    case '678':
    case '470':
      number = '(678) 791-4121';
      break;
    case '770':
      number = '(770) 824-4202';
      break;
    case '912':
      number = '(912) 712-0258';
      break;
    case '319':
      number = '(319) 409-6229';
      break;
    case '515':
      number = '(515) 978-0957';
      break;
    case '563':
      number = '(563) 484-8079';
      break;
    case '641':
      number = '(641) 450-1093';
      break;
    case '712':
      number = '(712) 717-5229';
      break;
    case '208':
    case '986':
      number = '(208) 513-1075';
      break;
    case '773':
      number = '(773) 355-4192';
      break;
    case '708':
      number = '(708) 675-2404';
      break;
    case '312':
    case '872':
      number = '(312) 313-9197';
      break;
    case '847':
    case '224':
      number = '(847) 250-6243';
      break;
    case '630':
    case '331':
      number = '(630) 601-4214';
      break;
    case '217':
    case '447':
      number = '(217) 210-9328';
      break;
    case '309':
      number = '(309) 433-0517';
      break;
    case '618':
      number = '(618) 416-9710';
      break;
    case '815':
    case '779':
      number = '(815) 927-5621';
      break;
    case '317':
    case '930':
      number = '(317) 669-1442';
      break;
    case '765':
      number = '(765) 416-8089';
      break;
    case '812':
      number = '(812) 602-0114';
      break;
    case '219':
      number = '(219) 240-8635';
      break;
    case '260':
      number = '(260) 704-9717';
      break;
    case '574':
      number = '(574) 239-0474';
      break;
    case '316':
      number = '(316) 272-0064';
      break;
    case '620':
      number = '(620) 481-2252';
      break;
    case '785':
      number = '(785) 329-2720';
      break;
    case '913':
      number = '(913) 624-3983';
      break;
    case '270':
    case '364':
      number = '(270) 721-4005';
      break;
    case '502':
      number = '(502) 694-1432';
      break;
    case '606':
      number = '(606) 385-1504';
      break;
    case '859':
      number = '(859) 785-4054';
      break;
    case '225':
      number = '(225) 502-8027';
      break;
    case '318':
      number = '(318) 666-9261';
      break;
    case '337':
      number = '(337) 294-0813';
      break;
    case '504':
      number = '(504) 270-1814';
      break;
    case '985':
      number = '(985) 265-9015';
      break;
    case '413':
      number = '(413) 930-2008';
      break;
    case '508':
    case '774':
      number = '(508) 297-6711';
      break;
    case '617':
    case '857':
      number = '(617) 778-6810';
      break;
    case '781':
    case '339':
      number = '(781) 207-9035';
      break;
    case '978':
    case '351':
      number = '(978) 364-4250';
      break;
    case '240':
      number = '(240) 720-2830';
      break;
    case '227':
    case '301':
      number = '(301) 298-2166';
      break;
    case '410':
    case '667':
      number = '(410) 989-3380';
      break;
    case '443':
      number = '(443) 775-3182';
      break;
    case '207':
      number = '(207) 430-9272';
      break;
    case '248':
    case '947':
      number = '(248) 834-6285';
      break;
    case '313':
      number = '(313) 209-7218';
      break;
    case '586':
      number = '(586) 250-4272';
      break;
    case '734':
      number = '(734) 436-0587';
      break;
    case '810':
      number = '(810) 216-9164';
      break;
    case '231':
      number = '(231) 408-5128';
      break;
    case '269':
      number = '(269) 224-9418';
      break;
    case '517':
      number = '(517) 619-1657';
      break;
    case '616':
      number = '(616) 263-1801';
      break;
    case '906':
      number = '(906) 214-3165';
      break;
    case '989':
      number = '(989) 340-6048';
      break;
    case '218':
      number = '(218) 216-0247';
      break;
    case '320':
      number = '(320) 407-1078';
      break;
    case '507':
      number = '(507) 322-1604';
      break;
    case '612':
      number = '(612) 930-0212';
      break;
    case '651':
      number = '(651) 410-1280';
      break;
    case '763':
      number = '(763) 308-1744';
      break;
    case '952':
      number = '(952) 214-4167';
      break;
    case '660':
      number = '(660) 628-1949';
      break;
    case '816':
      number = '(816) 301-6322';
      break;
    case '314':
      number = '(314) 652-3012';
      break;
    case '417':
      number = '(417) 427-6448';
      break;
    case '573':
      number = '(573) 606-6289';
      break;
    case '636':
      number = '(636) 730-1432';
      break;
    case '228':
      number = '(228) 678-1341';
      break;
    case '601':
    case '769':
      number = '(601) 490-7126';
      break;
    case '662':
      number = '(662) 346-5739';
      break;
    case '406':
      number = '(406) 998-1059';
      break;
    case '701':
      number = '(701) 491-7825';
      break;
    case '308':
      number = '(308) 318-6686';
      break;
    case '402':
    case '531':
      number = '(402) 769-2411';
      break;
    case '603':
      number = '(603) 333-1296';
      break;
    case '856':
      number = '(856) 777-5908';
      break;
    case '201':
    case '551':
      number = '(201) 685-2282';
      break;
    case '908':
      number = '(908) 441-4789';
      break;
    case '973':
    case '862':
      number = '(973) 863-2302';
      break;
    case '609':
    case '640':
      number = '(609) 256-8204';
      break;
    case '732':
    case '848':
      number = '(732) 579-6477';
      break;
    case '505':
      number = '(505) 295-4094';
      break;
    case '575':
      number = '(575) 652-8891';
      break;
    case '702':
      number = '(702) 472-9171';
      break;
    case '775':
      number = '(775) 515-8943';
      break;
    case '315':
    case '680':
      number = '(315) 766-2161';
      break;
    case '518':
      number = '(518) 407-5365';
      break;
    case '607':
      number = '(607) 203-0893';
      break;
    case '845':
      number = '(845) 748-0326';
      break;
    case '585':
      number = '(585) 405-6830';
      break;
    case '716':
      number = '(716) 328-9264';
      break;
    case '516':
      number = '(516) 589-8770';
      break;
    case '631':
      number = '(631) 812-5029';
      break;
    case '212':
    case '347':
    case '646':
    case '718':
      number = '(718) 307-6676';
      break;
    case '914':
      number = '(914) 240-8135';
      break;
    case '917':
    case '929':
      number = '(917) 795-8327';
      break;
    case '216':
      number = '(216) 309-0322';
      break;
    case '330':
    case '234':
      number = '(330) 238-1083';
      break;
    case '440':
      number = '(440) 209-5269';
      break;
    case '283':
    case '513':
      number = '(513) 549-4912';
      break;
    case '380':
    case '614':
      number = '(614) 702-2401';
      break;
    case '220':
    case '740':
      number = '(740) 562-6180';
      break;
    case '937':
      number = '(937) 853-8014';
      break;
    case '419':
    case '567':
      number = '(419) 315-9169';
      break;
    case '405':
      number = '(405) 594-4237';
      break;
    case '580':
      number = '(580) 956-8509';
      break;
    case '918':
    case '539':
      number = '(918) 600-6237';
      break;
    case '416':
    case '437':
    case '647':
      number = '(647) 493-5306';
      break;
    case '905':
    case '289':
    case '365':
      number = '(647) 493-5306';
      break;
    case '705':
    case '249':
      number = '(705) 805-1733';
      break;
    case '613':
    case '343':
      number = '(613) 416-8733';
      break;
    case '519':
    case '226':
    case '548':
      number = '(519) 772-6487';
      break;
    case '807':
      number = '(807) 697-0663';
      break;
    case '503':
    case '971':
      number = '(503) 447-8662';
      break;
    case '541':
    case '458':
      number = '(541) 230-7810';
      break;
    case '570':
    case '272':
      number = '(570) 354-6019';
      break;
    case '717':
    case '223':
      number = '(717) 562-0889';
      break;
    case '814':
      number = '(814) 616-3845';
      break;
    case '215':
    case '267':
      number = '(215) 586-5155';
      break;
    case '484':
      number = '(484) 655-1823';
      break;
    case '610':
      number = '(610) 601-2104';
      break;
    case '412':
    case '878':
      number = '(412) 285-1070';
      break;
    case '724':
      number = '(724) 993-8125';
      break;
    case '401':
      number = '(401) 648-4855';
      break;
    case '843':
      number = '(843) 984-2108';
      break;
    case '803':
      number = '(803) 830-4136';
      break;
    case '864':
      number = '(864) 686-4321';
      break;
    case '605':
      number = '(605) 799-1069';
      break;
    case '901':
      number = '(901) 610-4135';
      break;
    case '731':
      number = '(731) 499-8280';
      break;
    case '423':
      number = '(423) 427-3135';
      break;
    case '865':
      number = '(865) 813-5926';
      break;
    case '615':
    case '629':
      number = '(615) 953-9234';
      break;
    case '931':
      number = '(931) 572-5102';
      break;
    case '254':
      number = '(254) 313-0171';
      break;
    case '512':
    case '737':
      number = '(512) 717-7492';
      break;
    case '361':
      number = '(361) 336-0067';
      break;
    case '956':
      number = '(956) 468-2304';
      break;
    case '972':
      number = '(972) 347-8013';
      break;
    case '214':
      number = '(214) 665-4120';
      break;
    case '469':
      number = '(469) 393-0481';
      break;
    case '940':
      number = '(940) 304-0424';
      break;
    case '817':
    case '682':
      number = '(817) 533-8142';
      break;
    case '903':
    case '430':
      number = '(903) 307-0180';
      break;
    case '432':
      number = '(432) 315-0765';
      break;
    case '915':
      number = '(915) 228-4571';
      break;
    case '281':
      number = '(281) 779-4218';
      break;
    case '409':
      number = '(409) 600-8462';
      break;
    case '713':
      number = '(713) 366-8131';
      break;
    case '832':
      number = '(832) 998-8461';
      break;
    case '936':
      number = '(936) 283-5294';
      break;
    case '979':
      number = '(979) 481-5178';
      break;
    case '325':
      number = '(325) 701-1630';
      break;
    case '806':
      number = '(806) 516-8773';
      break;
    case '210':
    case '726':
      number = '(210) 756-7010';
      break;
    case '830':
      number = '(830) 302-2844';
      break;
    case '435':
      number = '(435) 246-2712';
      break;
    case '385':
    case '801':
      number = '(801) 515-4724';
      break;
    case '703':
    case '571':
      number = '(703) 644-8017';
      break;
    case '276':
      number = '(276) 821-2531';
      break;
    case '434':
      number = '(434) 485-0785';
      break;
    case '540':
      number = '(540) 595-0532';
      break;
    case '757':
      number = '(757) 528-8090';
      break;
    case '804':
      number = '(804) 332-5322';
      break;
    case '802':
      number = '(802) 689-1103';
      break;
    case '206':
      number = '(206) 336-3864';
      break;
    case '253':
      number = '(253) 244-9571';
      break;
    case '360':
    case '564':
      number = '(360) 787-9136';
      break;
    case '425':
      number = '(425) 943-9471';
      break;
    case '509':
      number = '(509) 319-2335';
      break;
    case '262':
      number = '(262) 333-5206';
      break;
    case '414':
      number = '(414) 436-2073';
      break;
    case '608':
      number = '(608) 405-8046';
      break;
    case '715':
    case '534':
      number = '(715) 997-1398';
      break;
    case '920':
      number = '(920) 939-7235';
      break;
    case '304':
    case '681':
      number = '(304) 826-2043';
      break;
    case '307':
      number = '(307) 316-1621';
      break;
    case '907':
      number = '(360) 787-9136';
      break;
    case '808':
      number = '(805) 322-0141';
      break;
    case '787':
    case '939':
      number = '(407) 505-6391';
      break;
  }
  return number;
}

function getGuidanceByCode(code) {
  var guidance = "";
  switch (code) {
	//adding north carolina
	case "704":
	case "980":
	  guidance = '(EST) We are in Huntersville. Bob\'s partner is in Matthews.';
	  break;
	case "252":
	case "336":
	case "704":
	case "828":
	case "910":
	case "919":
	case "984":
	 guidance = 'N/A';
	 break;
    case '403':
    case '587':
      guidance = '(MST) In Calgary (KAL gree), in Edgemont (a neighborhood), just up from Nose Hill Park.';
      break;
    case '780':
      guidance = '(MST) In Calgary, in Edgemont, just up from Nose Hill Park. Bob\'s partner is in Edmonton, so we have a 780 number.';
      break;
    case '205':
    case '659':
      guidance = '(CST) In the "Five Points South" area of Birmingham, near Ramsay High School.';
      break;
    case '251':
      guidance = '(CST) In the "Five Points South" area of Birmingham, near Ramsay High School. Bob\'s partner is Mobile, so he has a 251 number.';
      break;
    case '256':
    case '938':
      guidance = '(CST) In the "Five Points South" area of Birmingham, near Ramsay High School. Bob\'s partner is Huntsville, so he has a 256 number.';
      break;
    case '334':
      guidance = '(CST) In the "Five Points South" area of Birmingham, near Ramsay High School. Bob\'s partner is Dothan, so he has a 334 number.';
      break;
    case '479':
      guidance = '(CST) In Pleasant Valley, on the west side of Little Rock. Bob has a partner in Fayetteville , so he has an 870 number.';
      break;
    case '501':
      guidance = '(CST) In Pleasant Valley, on the west side of Little Rock.';
      break;
    case '870':
      guidance = '(CST) In Pleasant Valley, on the west side of Little Rock. Bob has a partner in Jonesboro , so he has an 870 number.';
      break;
    case '480':
      guidance = '(PST/MST) We are in Scottsdale, off Shea Blvd., just east of Shea Medical Center. Bob\'s partner is in Phoenix.';
      break;
    case '520':
      guidance = '(MST) I told targets: We are in Tuscon. "We\'re off of South Kino Pkwy past the Costco." Bob\'s partner is in Sierra Vista.';
      break;
    case '602':
      guidance = '(PST/MST) We are in Scottsdale, off Shea Blvd., just east of Shea Medical Center. Bob\'s partner is in Phoenix.';
      break;
    case '623':
      guidance = '(PST/MST) We are in Scottsdale, off Shea Blvd., just east of Shea Medical Center. Bob\'s partner is in Glendale, so we have a 623 number.';
      break;
    case '928':
      guidance = '(PST/MST) We are in Scottsdale, off Shea Blvd., just east of Shea Medical Center. Bob\'s partner is in Prescott, so we have a 928 number.';
      break;
    case '236':
    case '250':
    case '604':
    case '672':
    case '778':
      guidance = '(PST) We are in Surrey, in Grandview Heights. Bob\'s partner is in Vancouver, B.C.';
      break;
    case '530':
      guidance = '(PST) We\'re in Chico, off Lakewest Drive. Bob\'s partner is in Redding.';
      break;
    case '559':
      guidance = '(PST) We are in Fresno, off Nees Ave. near River Park (shopping center). Bob\'s partner is in vySALLia.';
      break;
    case '213':
      guidance = '(PST) We are in Glendale, near the Galleria, off Wilson Avenue.';
      break;
    case '310':
    case '424':
      guidance = '(PST) We are in Glendale, near the Galleria, off Wilson Avenue. Bob has a partner in Santa Monica, so he has a 310 number.';
      break;
    case '323':
      guidance = '(PST) We are in Glendale, near the Galleria, off Wilson Avenue.';
      break;
    case '562':
      guidance = '(PST) We are in Glendale, near the Galleria, off Wilson Avenue. Bob has a partner in Cerritos, so he has a 562 number.';
      break;
    case '626':
      guidance = '(PST) We are in Glendale, near the Galleria, off Wilson Avenue. Bob has a partner in Pasadena, so he has a 626 number.';
      break;
    case '661':
      guidance = '(PST) We are in Glendale, near the Galleria, off Wilson Avenue. Bob has a partner in Palmdale, so he has a 661 number.';
      break;
    case '818':
      guidance = '(PST) We are in Glendale, near the Galleria, off Wilson Avenue';
      break;
    case '951':
      guidance = '(PST) We\'re in Menifee, in Canyon Lake (a gated community).';
      break;
    case '909':
      guidance = '(PST) We\'re in Rancho Cucamonga, near Milliken & Foothill Freeway. (Locals just call it "Rancho.") Bob\'s partner is in Upland.';
      break;
    case '209':
      guidance = '(PST) We\'re in Sacramento off Natomas (naTOEmus) Boulevard. We\'re pretty close to Park Place 2, the shopping center (where there\'s a Kohls). Bob\'s partner is down in Turlock, so we have a 209 number.';
      break;
    case '916':
      guidance = '(PST) We\'re in Sacramento off Natomas (naTOEmus) Boulevard. We\'re pretty close to Park Place 2, the shopping center (where there\'s a Kohls). Bob\'s partner is up in Roseville.';
      break;
    case '949':
      guidance = '(PST) We\'re in San Clemente, not far from I-5, near the Albertsons. Bob\'s partner is in Lake Forest.';
      break;
    case '714':
    case '657':
      guidance = '(PST) We\'re in San Clemente, not far from I-5, near the Albertsons. Bob\'s partner is in Anaheim, so we have a 714 number.)';
      break;
    case '619':
      guidance = '(PST) We\'re in San Clemente, not far from I-5, near the Albertsons. Bob\'s partner is in Rancho PeÃ±asquitos (PEN uh SKEE toze), in North County San Diego, so we have a 619 number.';
      break;
    case '760':
      guidance = '(PST) We\'re in San Clemente, not far from I-5, near the Albertsons. Bob\'s partner is in Carlsbad (KARLZ bad), so we have a 760 number.';
      break;
    case '858':
      guidance = '(PST) We\'re in San Clemente, not far from I-5, near the Albertsons. Bob\'s partner is in Rancho PeÃ±asquitos (PEN uh SKEE toze), in North County San Diego, so we have an 858 number.';
      break;
    case '408':
    case '669':
      guidance = '(PST) We are in San Jose, of Santa Teresa Boulevard, near the Oakridge Mall.';
      break;
    case '415':
      guidance = '(PST) I am in San Jose, of Santa Teresa Boulevard, near the Oakridge Mall. We used to be in San Francisco; that\'s how we still have a 415 number.';
      break;
    case '510':
      guidance = '(PST) We are in San Jose, of Santa Teresa Boulevard, near the Oakridge Mall. We have a partner in Oakland; that\'s how we still have a 510 number.';
      break;
    case '650':
      guidance = '(PST) We are in San Jose, of Santa Teresa Boulevard, near the Oakridge Mall. We have a partner in San Mateo; that\'s how we still have a 650 number.';
      break;
    case '707':
      guidance = '(PST) We are in Santa Rosa, in Bennett Valley, off Bennett Valley Road. Bob has a partner in Ukiah (you KYE uh)';
      break;
    case '831':
      guidance = '(PST) We are in San Jose, of Santa Teresa Boulevard, near the Oakridge Mall. We have a partner in Salinas; that\'s how we still have a 831 number.';
      break;
    case '925':
      guidance = '(PST) We are in San Jose, of Santa Teresa Boulevard, near the Oakridge Mall. We have a partner in Walnut Creek; that\'s how we still have a 925 number.';
      break;
    case '805':
      guidance = '(PST) We are in Camarillo, not far from Chick-Fil-A on State Street. Bob\'s partner is up in Santa Maria.';
      break;
    case '719':
      guidance = '(MST) We are in Colorado Springs. We\'re off Lake Ave., near Broadmoor Town Center (a shopping center) and the Home Depot. Bob\'s partner is in Pueblo.';
      break;
    case '303':
      guidance = '(MST) We are in Aurora, on the south side of town, in Tallyn\'s Reach (subdivision). Bob\'s partner is in Denver.';
      break;
    case '720':
      guidance = '(MST) We are in Aurora, on the south side of town, in Tallyn\'s Reach (subdivision). Bob\'s partner is in Denver.';
      break;
    case '970':
      guidance = '(MST) We are in Aurora, on the south side of town, in Tallyn\'s Reach (subdivision). Bob\'s partner is in Fort Collins so we have a 970 number.';
      break;
    case '203':
    case '475':
      guidance = '(EST) West Hartford. We are off Newington Rd., on the south side of West Hartford. Bob\'s partner is in Bridgeport, so we have a 203 number.';
      break;
    case '860':
    case '959':
      guidance = '(EST) West Hartford. We are off Newington Rd., on the south side of West Hartford. Bob\'s partner is in Norwich.';
      break;
    case '202':
      guidance = '(EST) We\'re in Alexandria, in Cameron Park (a neighborhood behind Home Depot) off Duke Street. Bob\'s partner is in D.C.';
      break;
    case '302':
      guidance = '(EST) We are outside Philly in Newtown Square, off Bryn Mawr, on the Mainline. Bob\'s partner is in Greenville, DE, outside Wilmington.';
      break;
    case '727':
      guidance = '(EST) We are in Clearwater, off US 19 near the Clearwater Mall.';
      break;
    case '813':
      guidance = '(EST) We are in Clearwater, off US 19 near the Clearwater Mall. Bob\'s partner is in Land O\' Lakes, so we have an 813 number.';
      break;
    case '941':
      guidance = '(EST) I am in Clearwater, off US 19 near the Clearwater Mall. Bob\'s partner is in Sarasota, so we have a 941 number.';
      break;
    case '352':
      guidance = '(EST) We\'re now in Jacksonville, off Atlantic Boulevard, in Sandalwood (a neighborhood in Jax). We have a partner in Gainesville, which is why we still have the 352 number.';
      break;
    case '386':
      guidance = '(EST) We\'re now in Jacksonville, off Atlantic Boulevard, in Sandalwood (a neighborhood in Jax).We have a partner in Palm Coast, which is why we still have the 386 number.';
      break;
    case '904':
      guidance = '(EST) We\'re in Jacksonville, off Atlantic Boulevard, in Sandalwood (a neighborhood in Jax).';
      break;
    case '561':
      guidance = '(EST) We are in Jupiter, in North Palm Beach Heights, off Donald Ross Road. Bob\'s partner is in Boca.';
      break;
    case '772':
      guidance = '(EST) We are in Jupiter, in North Palm Beach Heights, off Donald Ross Road. Bob\'s partner is in Port St. Lucie, so we have a 772 number.';
      break;
    case '305':
      guidance = '(EST) We are in Plantation, off West Broward Blvd. Bob\'s partner is in Miami.';
      break;
    case '786':
      guidance = '(EST) We are in Plantation, off West Broward Blvd. Bob\'s partner is in Miami.';
      break;
    case '954':
    case '754':
      guidance = '(EST) We are in Plantation, off West Broward Blvd. Bob\'s partner is in Miami.';
      break;
    case '239':
      guidance = '(EST) We are in Naples, off Tamiami, pretty close to the Fresh Market and Carabba\'s. Bob\'s partner is from Fort Myers.';
      break;
    case '321':
      guidance = '(EST) We\'re in Sanford, near Seminole Town Center, where all the dealerships are in Sanford.';
      break;
    case '407':
    case '689':
      guidance = '(EST) We\'re in Sanford, near Seminole Town Center, where all the dealerships are in Sanford.';
      break;
    case '863':
      guidance = '(EST) We\'re in Sanford, near Seminole Town Center, where all the dealerships are in Sanford. Bob has a partner in Winter Haven, so he has an 863 number.';
      break;
    case '850':
      guidance = '(EST/CST) We are outside Tallahassee (which is EST), in Bradfordville, off Bannerman, where the Target is in North Tallahassee. Bob\'s partner is in Pensacola (which is CST)';
      break;
    case '229':
      guidance = '(EST) We\'re in Augusta, off Walton Way, not far from Langford Middle School. Bob\'s partner is in Valdosta, so we have a 229 number.';
      break;
    case '478':
      guidance = '(EST) We\'re in Augusta, off Walton Way, not far from Langford Middle School. Bob\'s partner is in Warner Robins, so we have a 478 number.';
      break;
    case '706':
    case '762':
      guidance = '(EST) We\'re in Augusta, off Walton Way, not far from Langford Middle School. Bob has a partner in Athens.';
      break;
    case '404':
      guidance = '(EST) We are in Marietta, off Cobb Parkway, near Roswell Street (near Sam\'s Club). Bob\'s partner is in Atlanta, in Buckhead.';
      break;
    case '678':
    case '470':
      guidance = '(EST) We are in Marietta, off Cobb Parkway, near Roswell Street (near Sam\'s Club). Bob\'s partner is in Atlanta, in Buckhead.';
      break;
    case '770':
      guidance = '(EST) We are in Marietta, off Cobb Parkway, near Roswell Street (near Sam\'s Club).';
      break;
    case '912':
      guidance = '(EST) We\'re in Savannah, off highway 204 in Georgetown.';
      break;
    case '319':
      guidance = 'CST - We\'re in West Des Moines, near Jordan Creek Mall. Bob\'s partner is in Cedar Rapids, so we have a 319 number.';
      break;
    case '515':
      guidance = 'CST - We\'re in West Des Moines, near Jordan Creek Mall.';
      break;
    case '563':
      guidance = 'CST - We\'re in West Des Moines, near Jordan Creek Mall. Bob\'s partner is in Quad Cities (Davenport), so we have a 563 number.';
      break;
    case '641':
      guidance = 'CST - We\'re in West Des Moines, near Jordan Creek Mall. Bob\'s partner is in Mason City, so we have a 641 number.';
      break;
    case '712':
      guidance = 'CST - We\'re in West Des Moines, near Jordan Creek Mall. Bob\'s partner is in Sioux City, so we have a 712 number.';
      break;
    case '208':
    case '986':
      guidance = '(MST) We\'re in Meridian, just ouside Boise off I-84.';
      break;
    case '773':
      guidance = '(CST) We\'re located in Evanston (on the North Shore), off Central Street, almost to Wilmette (the city) (will MET). Bob\'s partner is inside the Loop.';
      break;
    case '708':
      guidance = '(CST) We\'re located in Evanston (on the North Shore), off Central Street, almost to Wilmette (the city) (will MET). Bob\'s partner is Orland Park, so we have a 708 number.';
      break;
    case '312':
    case '872':
      guidance = '(CST) We\'re located in Evanston (on the North Shore), off Central Street, almost to Wilmette (the city) (will MET). Bob\'s partner is inside the Loop, so we have a 312 number.';
      break;
    case '847':
    case '224':
      guidance = '(CST) We\'re located in Evanston (on the North Shore), off Central Street, almost to Wilmette (the city) (will MET). Bob\'s partner is inside the Loop.';
      break;
    case '630':
    case '331':
      guidance = '(CST) We\'re located in Evanston (on the North Shore), off Central Street, almost to Wilmette (the city) (will MET). Bob\'s partner is in Naperville, so we have a 630 number.';
      break;
    case '217':
    case '447':
      guidance = '(CST) We\'re located north of Chicago in Evanston, off Central Street, almost to Wilmette (the city) (will MET). Bob\'s partner is in Springfield, so we have a 217 number.';
      break;
    case '309':
      guidance = '(CST) We\'re located north of Chicago in Evanston, off Central Street, almost to Wilmette (the city) (will MET). Bob\'s partner is in Bloomington, so we have a 309 number.';
      break;
    case '618':
      guidance = '(CST) We\'re located north of Chicago in Evanston, off Central Street, almost to Wilmette (the city) (will MET). Bob\'s partner is in Carbondale, so we have a 618 number.';
      break;
    case '815':
    case '779':
      guidance = '(CST) We\'re located north of Chicago in Evanston, off Central Street, almost to Wilmette (the city) (will MET). Bob\'s partner is in Rockford, so we have a 815 number.';
      break;
    case '317':
    case '930':
      guidance = '(EST)"We are in CARmul, off of Spring Mill Rd past the Starbucks"';
      break;
    case '765':
      guidance = '(EST)"We are in CARmul, off of Spring Mill Rd past the Starbucks." Bob\'s partner is up in Kokomo, so we have a 765 number.';
      break;
    case '812':
      guidance = '(CST and EST)"We are in CARmul, off of Spring Mill Rd past the Starbucks." Bob\'s partner is down in Evansville.';
      break;
    case '219':
      guidance = '(EST) We are in South Bend, off Miami, near Erskine Village (a shopping center). We have a partner in northwest Indiana, in Valparaiso (VAL per AY zoh), which is why we still have the 219 number.';
      break;
    case '260':
      guidance = '(EST) We are in South Bend, off Miami, near Erskine Village (a shopping center). We have a partner in Fort Wayne, which is why we still have the 260 number.';
      break;
    case '574':
      guidance = '(EST) We are in South Bend, off Miami, near Erskine Village (a shopping center).';
      break;
    case '316':
      guidance = '(CST) We are outside Kansas City, in Overland Park. We have a partner in Wichita, so I still have a 316 number.';
      break;
    case '620':
      guidance = '(CST) We are outside Kansas City, in Overland Park. We have a partner in Emporia, so I still have a 620 number.';
      break;
    case '785':
      guidance = '(CST) We are outside Kansas City, in Overland Park. We have a partner in Topeka, so I still have a 785 number.';
      break;
    case '913':
      guidance = '(CST) We are in Overland Park, off Hwy 69 and 151st street, behind the Target, in Kingston Lakes s/d.';
      break;
    case '270':
    case '364':
      guidance = '(EST) We are in Louisville. We\'re near the Ford stamping plant off 265, on the east side of town. Bob\'s partner is in Bowling Green, so he has an 270 number.';
      break;
    case '502':
      guidance = '(EST) We are in Louisville. We\'re near the Ford stamping plant off 265, on the east side of town.';
      break;
    case '606':
      guidance = '(EST) We are in Louisville. We\'re near the Ford stamping plant off 265, on the east side of town. Bob\'s partner is in Ashland, so he has a 606 number.';
      break;
    case '859':
      guidance = '(EST) We are in Louisville. We\'re near the Ford stamping plant off 265, on the east side of town. Bob\'s partner is in Lexington, so he has an 859 number.';
      break;
    case '225':
      guidance = '(CST) We are now in New Orleans. We have a partner in Baton Rouge, so we have a 225 number.';
      break;
    case '318':
      guidance = '(CST) We are now in New Orleans. We have a partner in Shreveport, so we have a 318 number.';
      break;
    case '337':
      guidance = '(CST) We are now in New Orleans. We have a partner in Lafayette, so we have a 337 number.';
      break;
    case '504':
      guidance = '(CST) We are in New Orleans. I live out in Little Woods (a neighborhood in New Orleans), off I-10 and Bullard Avenue (near the Walmart)."';
      break;
    case '985':
      guidance = '(CST) We are now in New Orleans. We have a partner in Slidell, so we have a 985 number.';
      break;
    case '413':
      guidance = '(EST) We are outside Worcester (Wooster) in Grafton, just off the Mass Pike. (off Wooster street). Bob\'s partner is in Springfield, so we have a 413 number.';
      break;
    case '508':
    case '774':
      guidance = '(EST) We are outside Worcester (Wooster) in Grafton, just off the Mass Pike. He has a partner in Newton, outside Boston.';
      break;
    case '617':
    case '857':
      guidance = '(EST) We are outside Worcester (Wooster) in Grafton, just off the Mass Pike. (off Wooster street). Bob has a partner in Newton, so we have a 617 number.';
      break;
    case '781':
    case '339':
      guidance = '(EST) We are outside Worcester (Wooster) in Grafton, just off the Mass Pike. (off Wooster street). Bob has a partner in Waltham, so we have a 781 number.';
      break;
    case '978':
    case '351':
      guidance = '(EST) We are outside Worcester (Wooster) in Grafton, just off the Mass Pike. (off Wooster street). Bob\'s partner is in Lowell, so we have a 978 number.';
      break;
    case '240':
      guidance = '(EST) We are here in Columbia. We\'re located off Stevens Forest Road. We\'re right down the road from the Starbucks off Deepage. Bob has a partner in Germantown, so he has a 240 number.';
      break;
    case '227':
    case '301':
      guidance = '(EST) We are here in Columbia. We\'re located off Stevens Forest Road. We\'re right down the road from the Starbucks off Deepage. Bob has a partner in Germantown, so he has a 240 number.';
      break;
    case '410':
    case '667':
      guidance = '(EST) We are here in Columbia. We\'re located off Stevens Forest Road. We\'re right down the road from the Starbucks off Deepage';
      break;
    case '443':
      guidance = '(EST) We are here in Columbia. We\'re located off Stevens Forest Road. We\'re right down the road from the Starbucks off Deepage';
      break;
    case '207':
      guidance = '(EST) We are in Massachusetts, in Grafton, just outside Worcester (Wooster). His partner is in Portland.';
      break;
    case '248':
    case '947':
      guidance = '(EST) We are in Ann Arbor, near Thurston Elementary, near the corner of Plymouth Road and Green Road. UM (not U of M) is in Ann Arbor. Bob has a partner in West Bloomfield Township , so he has a 248 number.';
      break;
    case '313':
      guidance = '(EST) We are in Ann Arbor, near Thurston Elementary, near the corner of Plymouth Road and Green Road. UM (not U of M) is in Ann Arbor. Bob has a partner in Midtown (Detroit) , so he has a 313 number.';
      break;
    case '586':
      guidance = '(EST) We are in Ann Arbor, near Thurston Elementary, near the corner of Plymouth Road and Green Road. UM (not U of M) is in Ann Arbor. Bob has a partner in Warren , so he has a 586 number.';
      break;
    case '734':
      guidance = '(EST) We are in Ann Arbor, near Thurston Elementary, near the corner of Plymouth Road and Green Road. UM (not U of M) is in Ann Arbor.';
      break;
    case '810':
      guidance = '(EST) We are in Ann Arbor, near Thurston Elementary, near the corner of Plymouth Road and Green Road. UM (not U of M) is in Ann Arbor. Bob has a partner in St. Clair , so he has a 810 number.';
      break;
    case '231':
      guidance = '(EST) We are in Grand Rapids, near Kentwood. We are off Beltline Avenue, near the Woodland Mall. Bob\'s partner is in Traverse (TRAV er) City, so we have a 231 number.';
      break;
    case '269':
      guidance = '(EST) We are in Grand Rapids, near Kentwood. We are off Beltline Avenue, near the Woodland Mall. Bob\'s partner is in Battle Creek, so we have a 269 number.';
      break;
    case '517':
      guidance = '(EST) We are in Grand Rapids, near Kentwood. We are off Beltline Avenue, near the Woodland Mall. Bob\'s partner is in Lansing, so we have a 517 number.';
      break;
    case '616':
      guidance = '(EST) We are in Grand Rapids, near Kentwood. We are off Beltline Avenue, near the Woodland Mall.';
      break;
    case '906':
      guidance = '(EST) We are in Grand Rapids, near Kentwood. We are off Beltline Avenue, near the Woodland Mall. Bob\'s partner is in Marquette, so we have a 906 number.';
      break;
    case '989':
      guidance = '(EST) We are in Grand Rapids, near Kentwood. We are off Beltline Avenue, near the Woodland Mall. Bob\'s partner is in Alpena (AL PEEN uh), so we have a 989 number.';
      break;
    case '218':
      guidance = '(CST) We are in Bloomington, outside Minneapolis. Bob\'s partner is in Duluth, so we have a 218 number.';
      break;
    case '320':
      guidance = '(CST) We are in Bloomington, outside Minneapolis. Bob\'s partner is in St. Cloud, so we have a 320 number.';
      break;
    case '507':
      guidance = '(CST) We are in Bloomington, outside Minneapolis. Bob\'s partner is in Rochester, so we have a 507 number.';
      break;
    case '612':
      guidance = '(CST) We are in Bloomington. I\'m off Penn Avenue, near Southtown Shopping Center (which is at I35 and I494).';
      break;
    case '651':
      guidance = '(CST) We are in Bloomington. I\'m off Penn Avenue, near Southtown Shopping Center (which is at I35 and I494). Bob\'s partner is in St. Paul, so we have a 651 number.';
      break;
    case '763':
      guidance = '(CST) We are in Bloomington. I\'m off Penn Avenue, near Southtown Shopping Center (which is at I35 and I494). Bob\'s partner is in Coon Rapids, so we have a 763 number.';
      break;
    case '952':
      guidance = '(CST) We are in Bloomington. Im off Penn Avenue, near Southtown Shopping Center (which is at I35 and I494).';
      break;
    case '660':
      guidance = '(CST) We are in here in Greater Kansas City, in Overland Park, Kansas, off Hwy 69 and 151st street, behind the Target, in Kingston Lakes s/d. Bob\'s partner is in Warrensburg, so we have a 660 number.';
      break;
    case '816':
      guidance = '(CST) We are in here in Greater Kansas City, in Overland Park, Kansas, off Hwy 69 and 151st street, behind the Target, in Kingston Lakes s/d.';
      break;
    case '314':
      guidance = '(CST) We are outside St. Louis in Wildwood, off Manchester Road.';
      break;
    case '417':
      guidance = '(CST) We are outside St. Louis in Wildwood, off Manchester Road.. Bob\'s partner is in Springfield, so we have a 417 number.';
      break;
    case '573':
      guidance = '(CST) We are outside St. Louis in Wildwood, off Manchester Road.. Bob\'s partner is in Jefferson City, so we have a 573 number.';
      break;
    case '636':
      guidance = '(CST) We are outside St. Louis in Wildwood, off Manchester Road.';
      break;
    case '228':
      guidance = '(CST) We are in Jackson, off Northside Drive near Ridgewood Rd. Northside is where the Whole Foods is off of I-55. Bob\'s partner is in Gulfport, so we have a 228 number.';
      break;
    case '601':
    case '769':
      guidance = '(CST) We are in Jackson, off Northside Drive near Ridgewood Rd. Northside is where the Whole Foods is off of I-55. Bob\'s partner is in Hattiesburg.';
      break;
    case '662':
      guidance = '(CST) We are in Jackson, off Northside Drive near Ridgewood Rd. Northside is where the Whole Foods is off of I-55. Bob\'s partner is in Southaven, so we have a 662 number.';
      break;
    case '406':
      guidance = '(MST) We are in Billings, west of town off King Avenue. Bob\'s partner is in Missoula, near UM (University of Montana).';
      break;
    case '701':
      guidance = '(CST) We are in the Minneapolis area, in Bloomington. Bob\'s partner is in Fargo, ND, so we have a 701 number.';
      break;
    case '308':
      guidance = '(CST) We are in Ohama, off highway 6, near the Costco. Bob\'s partner is in Grand Island, so we have a 308 number.';
      break;
    case '402':
    case '531':
      guidance = '(CST) We are in Ohama, off highway 6, near the Costco. Bob\'s partner is in Lincoln.';
      break;
    case '603':
      guidance = '(EST) We are outside Worcester (Wooster like WOOD) in Grafton, just off the Mass Pike. (off Wooster street) Bob used to live in Goffstown, just west of Manchester.';
      break;
    case '856':
      guidance = '(EST) We are in Cherry Hill. I work from home, near the Cherry Hill Mall. Bob\'s partner is in Vineland.';
      break;
    case '201':
    case '551':
      guidance = '(EST) We\'re in Clifton. We\'re off Allwood, not far from the Home Depot. Bob\'s partner is in Weehawken, so we have a 201 number.';
      break;
    case '908':
      guidance = '(EST) We\'re in Clifton. We\'re off Allwood, not far from the Home Depot. Bob\'s partner is in Hacketstown, so we have a 908 number.';
      break;
    case '973':
    case '862':
      guidance = '(EST) We\'re in Clifton. We\'re off Allwood, not far from the Home Depot.';
      break;
    case '609':
    case '640':
      guidance = '(EST) We\'re in Middletown, off Route 35, near the Target, off Cherry Tree Farm Rd. Bob has a partner in Trenton, so he hasa 609 number.';
      break;
    case '732':
    case '848':
      guidance = '(EST) We\'re in Middletown, off Route 35, near the Target, off Cherry Tree Farm Rd.';
      break;
    case '505':
      guidance = '(MST) We\'re in Albequerque, in the Northeast Heights area, off Alameda. Bob\'s partner is in Santa Fe.';
      break;
    case '575':
      guidance = '(MST) We\'re in Albequerque, in the Northeast Heights area, off Alameda. Bob\'s partner is in Las Cruces, so we have a 575 number.';
      break;
    case '702':
      guidance = '(PST) We are in Las Vegas, in the Summerlin area, off Summerlin Pkwy.';
      break;
    case '775':
      guidance = '(PST) We are in Las Vegas, in the Summerlin area, off Summerlin Pkwy. Bob\'s partner is in Carson City.';
      break;
    case '315':
    case '680':
      guidance = '(EST) We are now in Albany off of New Scotland Ave past the Papa John\'s. We have a partner in Syracuse, which is why we have the 315 number.';
      break;
    case '518':
      guidance = '(EST) We are in Albany off of New Scotland Ave past the Papa John\'s - (Albany is in an area called the "Capital Region")';
      break;
    case '607':
      guidance = '(EST) We are in Albany off of New Scotland Ave past the Papa John\'s. We have a partner in Binghamton, which is why we have the 607 number.';
      break;
    case '845':
      guidance = '(EST) We are now in Albany off of New Scotland Ave past the Papa John\'s. We have a partner in the Catskills (the Kingston, NY area), which is why we have the 845 number.';
      break;
    case '585':
      guidance = '(EST) We are outside Buffalo, in Amherst, off 324, about a mile from Boulevard Mall. Bob has a parnter in Rochester.';
      break;
    case '716':
      guidance = '(EST) We are now outside Buffalo, in Amherst, off 324, about a mile from Boulevard Mall.';
      break;
    case '516':
      guidance = '(EST) We are in Syosset, off the Jericho Turnkpike, near the Home Depot.';
      break;
    case '631':
      guidance = '(EST) We are in Syosset, off the Jericho Turnkpike, near the Home Depot. Bob\'s partner is in Ronkonkoma, so he has a 631 number.';
      break;
    case '212':
    case '347':
    case '646':
    case '718':
      guidance = '(EST). We are in Woodside (in Queens), off Northern Blvd. and 60th, near where all the dealerships are on Northern. Bob\'s partner is in Staten Island (stat NYE land).';
      break;
    case '914':
      guidance = '(EST) . We are in Woodside (in Queens), off Northern Blvd. and 60th, near where all the dealerships are on Northern. Bob\'s partner is in New Rochelle (new raSHELL) so we have a 914 number.';
      break;
    case '917':
    case '929':
      guidance = '(EST). We are in Woodside (in Queens), off Northern Blvd. and 60th, near where all the dealerships are on Northern. Bob\'s partner is in Staten Island (stat NYE land).';
      break;
    case '216':
      guidance = '(EST) We\'re in Woodmere (outside of Cleveland), near Eton (a mall in Woodmere), on Chagrin Blvd. Bob\'s partner is in Avon Lake, OH. (Avon is pronounced like the makeup.)';
      break;
    case '330':
    case '234':
      guidance = '(EST) We\'re in Woodmere (outside of Cleveland), near Eton (a mall in Woodmere), on Chagrin Blvd. Bob\'s partner is in Akron.';
      break;
    case '440':
      guidance = '(EST) We\'re in Woodmere (outside of Cleveland), near Eton (a mall in Woodmere), on Chagrin Blvd. Bob\'s partner is in Avon Lake, OH. (Avon is pronounced like the makeup.)';
      break;
    case '283':
    case '513':
      guidance = '(EST) I live in Cincinnati, off Beechmont, close enough to smell the Krispy Kreme. Near Anderson Town Center (shopping center.)';
      break;
    case '380':
    case '614':
      guidance = '(EST) We are in Columbus, near Easton Town Center mall, off Morse Road. There is a cafe at the Whole Foods at Morse & Stelzer Roads."';
      break;
    case '220':
    case '740':
      guidance = '(EST) We are in Columbus, near Easton Town Center mall, off Morse Road. There is a cafe at the Whole Foods at Morse & Stelzer Roads." Bob has a partner in Zanesville, so he has a 740 number.';
      break;
    case '937':
      guidance = '(EST) We are in Dayton. I live off 3rd Street, near the VA.';
      break;
    case '419':
    case '567':
      guidance = '(EST) We are in Maumee (MOMMY), which is a suburb of Toledo. Bob\'s partner is in Sandusky.';
      break;
    case '405':
      guidance = 'We\'re in Bethany (CST) off of N Council Rd, past the Library. (Oklahoma City suburb).';
      break;
    case '580':
      guidance = 'We\'re in Bethany (CST) off of N Council Rd, past the Library. (Oklahoma City suburb). Bob\'s partner is in Lawton, so we have a 580 number.';
      break;
    case '918':
    case '539':
      guidance = 'We\'re in Bethany (CST) off of N Council Rd, past the Library. (Oklahoma City suburb). Bob\'s partner is in Tulsa, so we have a 918 number.';
      break;
    case '416':
    case '437':
    case '647':
      guidance = '(EST) We are in Toronto (TRONtoe), in North York (a part of TRONTtoe).';
      break;
    case '905':
    case '289':
    case '365':
      guidance = '(EST) We are in Toronto (TRONtoe), in North York (a part of TRONTtoe). Bob has a partner in Burlington.';
      break;
    case '705':
    case '249':
      guidance = '(EST) We are in Toronto (TRONtoe), in North York (a part of TRONTtoe). Bob\'s partner is in Sudbury, so we have a 705 number.';
      break;
    case '613':
    case '343':
      guidance = '(EST) We are in Toronto (TRONtoe), in North York (a part of TRONTtoe). Bob\'s partner is in Ottawa (AH tah WAH), so we have a 613 number.';
      break;
    case '519':
    case '226':
    case '548':
      guidance = '(EST) We are in Toronto (TRONtoe), in North York (a part of TRONTtoe). Bob\'s partner is in London (Ontario), so we have a 519 number.';
      break;
    case '807':
      guidance = '(EST) We are in Toronto (TRONtoe), in North York (a part of TRONTtoe). Bob\'s partner is in Thunder Bay (Ontario), so we have an 807 number.';
      break;
    case '503':
    case '971':
      guidance = '(PST) We\'re in Tigard, south of Portland, off 99W "highway 99 double-u." Bob\'s partner is in Eugene.';
      break;
    case '541':
    case '458':
      guidance = '(PST) We\'re in Tigard, south of Portland, off 99W "highway 99 double-u." Bob\'s partner is in Eugene, so we have a 541 number.';
      break;
    case '570':
    case '272':
      guidance = '(EST) We are in Hershey, on the west side, off Sand Hill Rd., just you get to Hummelstown. Bob\'s partner is in Scranton, so we have a 570 number.';
      break;
    case '717':
    case '223':
      guidance = '(EST) We are in Hershey, on the west side, off Sand Hill Rd., just you get to Hummelstown. Bob\'s partner is in Harrisburg.';
      break;
    case '814':
      guidance = '(EST) We are in Hershey, on the west side, off Sand Hill Rd., just you get to Hummelstown. Bob\'s partner is in Erie, so we have an 814 number.';
      break;
    case '215':
    case '267':
      guidance = '(EST) We are outside Philly in Newtown Square, off Bryn Mawr, on the Mainline. Bob\'s partner is in Conshohocken (CON show HAWK en, (or CON chee)).';
      break;
    case '484':
      guidance = '(EST) We are outside Philly in Newtown Square, off Bryn Mawr, on the Mainline. Bob\'s partner is in Conshohocken (CON show HAWK en, (or CON chee)).';
      break;
    case '610':
      guidance = '(EST) We are outside Philly in Newtown Square, off Bryn Mawr, on the Mainline. Bob\'s partner is in Conshohocken (CON show HAWK en, (or CON chee)).';
      break;
    case '412':
    case '878':
      guidance = '(EST) We are in Zelionople (Zee-lee-un-ope-ul) off S High St past the Walgreens. Cheslea is in Pittsburgh, in Mt. Lebanon.';
      break;
    case '724':
      guidance = '(EST) We are in Mt. Lebanon (Pittsburgh), in Hoodridge Terrace (neighborhood). Bob\'s partner is in Zeely.';
      break;
    case '401':
      guidance = '(EST) We are in Cranston, off Pontiac Ave., about a mile off I-95, not too far from Roger Williams Park (which is also a zoo). Bob\'s partner is in Warwick.';
      break;
    case '843':
      guidance = '(EST) We are North Charleston, off Patriot Blvd., near Ladson. (McKews s/d). Bob\'s partner is in Pawleys Island, up the coast.';
      break;
    case '803':
      guidance = '(EST) We are in Lexington, off highway 6, North Lake Drive. We are west of Columbia.';
      break;
    case '864':
      guidance = '(EST) We\'re in Greenville, off of Augusta Rd, not far from the Wells Fargo. Bob\'s partner is in Anderson.';
      break;
    case '605':
      guidance = '(CST) We are in the Minneapolis area, in Bloomington. Bob\'s partner is in Sioux Falls, SD, so we have a 605 number.';
      break;
    case '901':
      guidance = '(CST) We are in Germantown, off Johnson Road, up from the Sprouts market.';
      break;
    case '731':
      guidance = '(CST) We are in Germantown, off Johnson Road, up from the Sprouts market. Bob has a partner in Jackson, TN , which is why he has a 731 number.';
      break;
    case '423':
      guidance = '(EST) We are here in Knoxville, off of E Magnolia and N Elmwood St, adjacent to the Zoo and Austin East High School. Bob\'s partner is in Johnson City, so we have a 423 number.';
      break;
    case '865':
      guidance = '(EST) We are here in Knoxville, off of E Magnolia and N Elmwood St, adjacent to the Zoo and Austin East High School. Bob\'s partner is in Oak Ridge.';
      break;
    case '615':
    case '629':
      guidance = '(CST)We are in Nashville, off Thompson Lane, near the One Hundred Oaks Mall. Bob\'s partner is in Murfreesboro.';
      break;
    case '931':
      guidance = '(CST)We are in Nashville, off Thompson Lane, near the One Hundred Oaks Mall. Bob\'s partner is in Clarksville, so we have a 931 number.';
      break;
    case '254':
      guidance = '(CST) We are here in Austin, just off Chestnut Ave and E 12th Street. Just east of the University of Texas (Austin). Bob\'s partner is in Waco.';
      break;
    case '512':
    case '737':
      guidance = '(CST) We are here in Austin, just off Chestnut Ave and E 12th Street. Just east of the University of Texas (Austin). Bob\'s partner is in Round Rock.';
      break;
    case '361':
      guidance = 'We are in Corpus Christi, off Staples Street, in Kittyhawk (a subdivision). Bob has a parter in Victoria.';
      break;
    case '956':
      guidance = 'We are in Corpus Christi, off Staples Street, in Kittyhawk (a subdivision). Bob has a partner in McAllen, so we have a 956 number.';
      break;
    case '972':
      guidance = '(CST) We\'re in Allen, off West McDermitt, near the Hobby Lobby.';
      break;
    case '214':
      guidance = '(CST) We\'re in Allen, off West McDermitt, near the Hobby Lobby.';
      break;
    case '469':
      guidance = '(CST) We\'re in Allen, off West McDermitt, near the Hobby Lobby.';
      break;
    case '940':
      guidance = '(CST) We\'re in Allen, off West McDermitt, near the Hobby Lobby. Bob\'s partner is in Denton, so he has a 940 number.';
      break;
    case '817':
    case '682':
      guidance = '(CST) We\'re in Allen, off West McDermitt, near the Hobby Lobby. Bob\'s partner is in Southlake, so he has a 817 number.';
      break;
    case '903':
    case '430':
      guidance = '(CST) We\'re in Allen, off West McDermitt, near the Hobby Lobby. Bob\'s partner is in Tyler, so he has a 903 number.';
      break;
    case '432':
      guidance = '(MST) We\'re in El Paso, in the Upper Valley area, off 178. Bob\'s partner is in Midland, so we have a 432 number.';
      break;
    case '915':
      guidance = '(MST) We\'re in El Paso, in the Upper Valley area, off 178.';
      break;
    case '281':
      guidance = '(CST) We are in Houston, in the Galleria area (of west Houston), off Bering Drive. Bob\'s partner is in Sugar Land.';
      break;
    case '409':
      guidance = '(CST) We are in Houston, in the Galleria area (of west Houston), off Bering Drive. Bob\'s partner is in Beaumont (BO mont) so we have a 409 number.';
      break;
    case '713':
      guidance = '(CST) We are in Houston, in the Galleria area (of west Houston), off Bering Drive. Bob\'s partner is in Sugar Land.';
      break;
    case '832':
      guidance = '(CST) We are in Houston, in the Galleria area (of west Houston), off Bering Drive. Bob\'s partner is in Sugar Land.';
      break;
    case '936':
      guidance = '(CST) We are in Houston, in the Galleria area (of west Houston), off Bering Drive. Bob\'s partner is in Conroe, so we have a 936 number.';
      break;
    case '979':
      guidance = '(CST) We are in Houston, in the Galleria area (of west Houston), off Bering Drive. Bob\'s partner is in College Station, so we have a 979 number.';
      break;
    case '325':
      guidance = '(CST) We\'re in Lubbock, off 289 in Orchard Park (a neighborhood). Bob\'s partner is in Abilene, so we have a 325 number.';
      break;
    case '806':
      guidance = '(CST) We\'re in Lubbock, off 289 in Orchard Park (a neighborhood). Bob\'s partner is in Amarillo.';
      break;
    case '210':
    case '726':
      guidance = '(CST) We are Helotes (he LOW tes), in Iron Horse (subdivision), northwest of San Antonio off Bandera Road.';
      break;
    case '830':
      guidance = '(CST) We are Helotes (he LOW tes), in Iron Horse (subdivision), northwest of San Antonio off Bandera Road. Bob\'s partner is in New Braunfels, so we have an 830 number.';
      break;
    case '435':
      guidance = '(MST) We are in Murray, off Fashion Blvd., near Fashion Place (a mall). Bob\'s partner is in Brigham City, so he has a 435 number.';
      break;
    case '385':
    case '801':
      guidance = '(MST) We are in Murray, off Fashion Blvd., near Fashion Place (a mall).';
      break;
    case '703':
    case '571':
      guidance = '(EST) We\'re in Alexandria, in Cameron Park (a neighborhood behind Home Depot) off Duke Street. Bob\'s partner is in D.C.';
      break;
    case '276':
      guidance = '(EST) We\'re in Lynchburg, off 501 in Bedford Hills (a neighborhood). Bob\'s partner is in Gaylax (GAY lax), so we have a 276 number.';
      break;
    case '434':
      guidance = '(EST) We\'re in Lynchburg, off 501 in Bedford Hills (a neighborhood). Bob\'s partner is in Charlottesville.';
      break;
    case '540':
      guidance = '(EST) We\'re in Lynchburg, off 501 in Bedford Hills (a neighborhood). Bob\'s partner is in Roanoke, so we have a 540 number.';
      break;
    case '757':
      guidance = '(EST) We are in Newport News, off Jefferson Ave., behind all the dealerships.';
      break;
    case '804':
      guidance = '(EST) We are in Richmond, off of Warwick Rd past the Walgreen\'s. Bob\'s partner is in MEchanicsville.';
      break;
    case '802':
      guidance = '(EST) We are outside Worcester (Wooster) in Grafton, just off the Mass Pike. (off Wooster street). My partner Bob\'s partner is in Brattleboro, VT, so I have an 802 number.';
      break;
    case '206':
      guidance = '(PST) We\'re in Vancouver, off I-205 and Padden Parkway. Bob\'s partner is in Seattle, so we have a 206 number.';
      break;
    case '253':
      guidance = '(PST) We\'re in Vancouver, off I-205 and Padden Parkway. Bob\'s partner is outside in Tacoma, so we have a 253 number.';
      break;
    case '360':
    case '564':
      guidance = '(PST) We\'re in Vancouver, off I-205 and Padden Parkway. Bob\'s partner is outside Seattle, in Bellevue (BELLview).';
      break;
    case '425':
      guidance = '(PST) We\'re in Vancouver, off I-205 and Padden Parkway. Bob\'s partner is outside Seattle, in Bellevue (BELLview), so we have a 425 number.';
      break;
    case '509':
      guidance = '(PST) We\'re in Vancouver, off I-205 and Padden Parkway. Bob\'s partner is in Spokane (spoCAN) so we have a 509 number.';
      break;
    case '262':
      guidance = '(CST) We are in Elm Grove, just outside Milwaukee (to the west). We\'re just off Juneau Blvd.';
      break;
    case '414':
      guidance = '(CST) We are in Elm Grove, just outside Milwaukee (to the west). We\'re just off Juneau Blvd.';
      break;
    case '608':
      guidance = '(CST) We are in Elm Grove, just outside Milwaukee (to the west). We\'re just off Juneau Blvd. Bob\'s partner is in Madison, so we have a 608 number.';
      break;
    case '715':
    case '534':
      guidance = '(CST) We are in Elm Grove, just outside Milwaukee (to the west). We\'re just off Juneau Blvd. Bob\'s partner is in Eau Claire, so we have a 715 number.';
      break;
    case '920':
      guidance = '(CST) We are in Elm Grove, just outside Milwaukee (to the west). We\'re just off Juneau Blvd. Bob\'s partner is in Appleton, so we have a 920 number.';
      break;
    case '304':
    case '681':
      guidance = '(EST) We are in Morgantown, in Brookhaven (a neighborhood) off I-68. Bob\'s partner is in Beckley.';
      break;
    case '307':
      guidance = '(MST) We are in Aurora, CO. Bob\'s partner is in Cheyenne, WY, so we have a 307 number.';
      break;
    case '907':
      guidance = '(PST) We\'re in Vancouver, WA.';
      break;
    case '808':
      guidance = '(PST) We are in Camarillo, not far from Chick-Fil-A on State Street. Bob\'s partner is up in Santa Maria.';
      break;
    case '787':
    case '939':
      guidance = '(EST) We\'re in Sanford, near Seminole Town Center, where all the dealerships are in Sanford.';
      break;
  }
  return guidance;
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
    case "Nick":
      email = "nickf@simple.biz";
      break;
    case "Tony":
      email = "tonyb@simple.biz";
      break;
    case "Joy":
      email = "joyf@simple.biz";
      break;
    case "Scott":
      email = "scottc@simple.biz";
      break;
    case "JC":
      email = "jc@simple.biz";
      break;
  }
  return email;
}

function removePhoneFormat(formattedNum) {
  var fixedNum = formattedNum.slice(1, 4) + formattedNum.slice(6, 9) + formattedNum.slice(10, 14);
  return fixedNum;
}
