function main() {
  document.querySelector("#upda").innerHTML = '11:37'
  //os.envitron['BITRIXTEST3']v4
  auth = 'none_log'
  try{auth = $BITRIXTEST}catch{del=1}
  try{auth = $BITRIXTEST1}catch{del=1}
  try{auth = $BITRIXTEST2}catch{del=1}
  try{auth = $BITRIXTEST3}catch{del=1}	
  console.log(auth)
/*  try{auth = ${BITRIXTEST}}catch{del=1}
  try{auth = ${BITRIXTEST1}}catch{del=1}
  try{auth = ${BITRIXTEST2}}catch{del=1}
  try{auth = ${BITRIXTEST3}}catch{del=1}	
  console.log(auth)
  try{auth = ${{BITRIXTEST}}}catch{del=1}
  try{auth = ${{BITRIXTEST1}}}catch{del=1}
  try{auth = ${{BITRIXTEST2}}}catch{del=1}
  try{auth = ${{BITRIXTEST3}}}catch{del=1}	*/
  console.log(auth)	
  table.style = 'display:block'
	
  table1.style = 'display:none'
  searchbar.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      searchB.click()
    }
  })
  searchbar.focus()
  searchB.addEventListener('click', search)


  //searches.value = 'TITLE'
  //searchbar.value = 'funeral'
  function search() {
  	while (table.childNodes.length>4){table.removeChild(table.lastChild)}
    displayed.innerHTML = 'Results: 0'
    const selection = searches.value
    const searched = searchbar.value
    try {
      var auth_code = process.env.BITRIXTEST;
    } catch {
    [][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]][([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]][([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+([]+[])[(![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]()[+!+[]+[!+[]+!+[]]]+((![]+[])[+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[+!+[]]+[+[]]+(!![]+[])[+[]]+[+!+[]]+[+!+[]]+[!+[]+!+[]]+[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+(+[![]]+[])[+[]]+(!![]+[])[+[]]+[+!+[]]+[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]]+[!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]]+(+[![]]+[])[+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]]+[!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]]+[+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]])[(![]+[])[!+[]+!+[]+!+[]]+(+(!+[]+!+[]+[+!+[]]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([]+[])[([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]][([][[]]+[])[+!+[]]+(![]+[])[+!+[]]+((+[])[([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]+[])[+!+[]+[+!+[]]]+(!![]+[])[!+[]+!+[]+!+[]]]](!+[]+!+[]+!+[]+[+!+[]])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]]((!![]+[])[+[]])[([][(!![]+[])[!+[]+!+[]+!+[]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]](([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]][([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+(![]+[+[]])[([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()[+!+[]+[+[]]]+![]+(![]+[+[]])[([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()[+!+[]+[+[]]])()[([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((![]+[+[]])[([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()[+!+[]+[+[]]])+[])[+!+[]])+([]+[])[(![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+([][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]()[+!+[]+[!+[]+!+[]]])())()
    }
    if (selection == 'empty') {
      err.innerHTML = 'Field must not be blank'
    } else if (searched == '') {
      err.innerHTML = 'Search Query must not be blank'
    } else {
      //Search is valid
      err.innerHTML = ''
      var baseURL = "https://simplebiz.bitrix24.com/rest/168/" + atob(a) + "/crm.deal.list.json?SELECT[]=TITLE&SELECT[]=STAGE_ID&SELECT[]=UF_CRM_1647620775586&SELECT[]=UF_CRM_1647620757299&SELECT[]=UF_CRM_1647619374742&SELECT[]=UF_CRM_1647620698387&SELECT[]=UF_CRM_1647620715972&SELECT[]=UF_CRM_1681248068566&SELECT[]=UF_CRM_1647653820587&SELECT[]=UF_CRM_1647616629267&SELECT[]=UF_CRM_1680303047490&SELECT[]=UF_CRM_1680303451526&SELECT[]=UF_CRM_1680294914005"
      if (selection == 'UF_CRM_1647620775586' || selection == 'UF_CRM_1647620757299') { //format URL
        try {
          var url = baseURL + "&filter[%" + selection + "]=" + searched.match(/(((?<=https\:\/\/www\.)|(?<=http\:\/\/www\.)|(?<=www\.)|(?<=https\:\/\/(?!www))|(?<=http\:\/\/(?!www))).*(?<!\/))|^(?!(http|www))(.*(?<!\/))/)[0]
        } catch {
          err.innerHTML = 'Invalid email search criteria'
          return
        }

      } else if (selection == 'UF_CRM_1647620698387' || selection == 'UF_CRM_1647653820587') { //format phone number
      try{
        
        rawNumber = searched.match(/\(?[0-9]{3}(\.|\-|\)|\ )*?[0-9]{3}(\.|\-|\)|\ )*?[0-9]{4}/)[0].match(/[0-9]/g)
        rawNumberArr = []
        rawNumberArr.push(rawNumber.slice(0,3).join(''))
				rawNumberArr.push(rawNumber.slice(3,6).join(''))
				rawNumberArr.push(rawNumber.slice(6,10).join(''))
        baseURL+="&filter[%"+selection+"][0]="+"("+rawNumberArr[0]+")-"+rawNumberArr[1]+'-'+rawNumberArr[2]
        baseURL+="&filter[%"+selection+"][1]="+"("+rawNumberArr[0]+")"+rawNumberArr[1]+'-'+rawNumberArr[2]
        baseURL+="&filter[%"+selection+"][2]="+"("+rawNumberArr[0]+") "+rawNumberArr[1]+'-'+rawNumberArr[2]
        baseURL+="&filter[%"+selection+"][3]="+"("+rawNumberArr[0]+")"+rawNumberArr[1]+rawNumberArr[2]
        baseURL+="&filter[%"+selection+"][4]="+"("+rawNumberArr[0]+") "+rawNumberArr[1]+' '+rawNumberArr[2]
        baseURL+="&filter[%"+selection+"][5]="+"("+rawNumberArr[0]+")"+rawNumberArr[1]+' '+rawNumberArr[2]
        baseURL+="&filter[%"+selection+"][6]="+rawNumberArr[0]+"."+rawNumberArr[1]+'.'+rawNumberArr[2]
        baseURL+="&filter[%"+selection+"][7]="+rawNumberArr[0]+" "+rawNumberArr[1]+' '+rawNumberArr[2]
        baseURL+="&filter[%"+selection+"][8]="+rawNumberArr[0]+"-"+rawNumberArr[1]+'-'+rawNumberArr[2]
        baseURL+="&filter[%"+selection+"][9]="+rawNumberArr[0]+rawNumberArr[1]+rawNumberArr[2]
        var url = baseURL + ''
        }
        catch(e){
        console.log(e)
        err.innerHTML = 'Invalid email search criteria'
          return
        }
      } else {
        var url = baseURL + "&filter[%" + selection + "]=" + searched
      }

      console.log(url)
      $.when(
        $.ajax(
          url, {
            method: "GET",
            success: function(data) {
              //document.body.innerHTML = data.result;
              console.log(data.result); /* выведет "Текст" */
              results = data.result
            }
          }
        )
      ).then(function() {
        if (results.length == 0) {
          err.innerHTML = 'No results returned'
        } else {
          //Results came back
          for (var i = 0; i < results.length; i++) {
            var tr = document.createElement('tr')
            var td = document.createElement('td')
            var p = document.createElement('p')
            p.innerHTML = results[i].TITLE
            p.addEventListener("click", show, false)
            p.param = i
            td.appendChild(p)
            tr.appendChild(td)
            table.appendChild(tr)
          }
          displayed.innerHTML = 'Results: '+String(results.length)
        }
      })
    }
  }
}

function show(indexCover) {
  index = indexCover.currentTarget.param
  table.style = 'display:none'
  table1.style = 'display:block'
  ID_.innerHTML = results[index].ID
  stage_name = 'unknown'
  switch (results[index].STAGE_ID) {
    case "UC_UWG2Z6":
      stage_name = 'Accounting'
      break
    case "NEW":
      stage_name = 'New Project - Check Keywords'
      break
    case "PREPARATION":
      stage_name = 'Ready to Assign'
      break
    case "PREPAYMENT_INVOICE":
      stage_name = 'Assigned to Developer'
      break
    case "EXECUTING":
      stage_name = 'Under Construction - Work Has Begun'
      break
    case "UC_E7D3K7":
      stage_name = 'Waiting on Green Screen'
      break
    case "UC_CKBLB0":
      stage_name = 'Collaboration'
      break
    case "FINAL_INVOICE":
      stage_name = 'Review 1 - Proofreader'
      break
    case "UC_DNHMU6":
      stage_name = 'Review 2 - Dev Lead'
      break
    case "1":
      stage_name = 'Review 3 - Senior Lead'
      break
    case "2":
      stage_name = 'Review 4 - Final Inspection & Delivery'
      break
    case "3":
      stage_name = 'Delivered'
      break
    case "UC_YNZ0TE":
      stage_name = 'Accounting Hold'
      break
    case "UC_T514VC":
      stage_name = 'Canceled Deal'
      break
    case "LOSE":
      stage_name = 'Closed (Moved to Blues Board)'
      break
  }

  STAGE_ID.innerHTML = stage_name
  TITLE.innerHTML = results[index].TITLE
  UF_CRM_1647616629267.innerHTML = results[index].UF_CRM_1647616629267
  UF_CRM_1647619374742.innerHTML = results[index].UF_CRM_1647619374742
  UF_CRM_1647620698387.innerHTML = results[index].UF_CRM_1647620698387
  UF_CRM_1647620715972.innerHTML = results[index].UF_CRM_1647620715972
  UF_CRM_1647620757299.innerHTML = results[index].UF_CRM_1647620757299
  UF_CRM_1647620775586.innerHTML = results[index].UF_CRM_1647620775586
  UF_CRM_1647653820587.innerHTML = results[index].UF_CRM_1647653820587
  UF_CRM_1680294914005.innerHTML = results[index].UF_CRM_1680294914005
  UF_CRM_1680303047490.innerHTML = results[index].UF_CRM_1680303047490
  UF_CRM_1680303451526.innerHTML = results[index].UF_CRM_1680303451526
  UF_CRM_1681248068566.innerHTML = results[index].UF_CRM_1681248068566
  ButtonBitrix.href = 'https://simplebiz.bitrix24.com/crm/deal/details/' + results[index].ID + '/'
  ButtonBack.addEventListener('click', main)

}
main()
