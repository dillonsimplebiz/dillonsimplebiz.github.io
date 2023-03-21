
bulkList = Object.assign({},importedList,newList)

searchBar = document.getElementById('searchbar')

searchBar.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    document.getElementById('search').click()
  }
})

document.getElementById('search').addEventListener('click', searchForEmail)

function getRegionByCode(area) {
  negtemp = 0
}

function searchForEmail() {
  emailToSearch = document.getElementById('searchbar').value
  foundNumber = bulkList[emailToSearch]
  if (foundNumber == undefined) {
  	// show no number found
  	document.getElementById('results').innerHTML = '<span> Email not found, please look them up and add their email and Local Business Partner below<\span>'
    
  } else {
    areaCode = foundNumber.match('[0-9]{3}')[0]
    //region = getRegionByCode(areaCode)
    region = areaCode
    projectManager ='Dillon'
    pmEmail = 'dillon@'
    document.getElementById('results').innerHTML = '<span> Region is '+region+'. Project manager is '+projectManager+'. Their email is '+pmEmail+'.'
  }

}