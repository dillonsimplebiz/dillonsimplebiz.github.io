/* longString = "https://www.centerforcreativeliving.org/https://center-for-creative-living.multiscreensite.com/dca6e99dCenter For Creative Living$0$https://www.nutri-plot.com/https://nutriplot.multiscreensite.com/70dc7937Nutri-Plot$1$https://www.westendchristiancenter.com/https://www.christian-community-center.multiscreensite.com/https://christian-community-center.multiscreensite.com/fda88ec1Christian Community Center$2$https://www.affordableandrestorativehealth.com/https://affordable-and-restorative-health-winston-h-griner-md.multiscreensite.com/1ac4e0c4Affordable & Restorative Health: Winston H. Griner, MD$3$https://www.twooaksbridalboutique.com/https://two-oaks-bridal-boutique.multiscreensite.com/6edc14e3Two Oaks Bridal Boutique$4$"
datab = {
  "0": {
    "main_domain": "www.centerforcreativeliving.org",
    "alternate_domains": ["center-for-creative-living.multiscreensite.com"],
    "site_name": "dca6e99d",
    "status": "PUBLISHED",
    "last_publish_date": "2023-02-08T17:46:15",
    "last_checked": "2023-02-08",
    "first_published_date": "2021-08-02T18:33:18",
    "creation_date": "2021-08-02T15:38:03",
    "business_name": "Center For Creative Living"
  },
  "1": {
    "main_domain": "www.nutri-plot.com",
    "alternate_domains": ["nutriplot.multiscreensite.com"],
    "site_name": "70dc7937",
    "status": "PUBLISHED",
    "last_publish_date": "2023-02-08T17:44:24",
    "last_checked": "2023-02-08",
    "first_published_date": "2021-06-09T00:44:22",
    "creation_date": "2021-06-08T21:12:01",
    "business_name": "Nutri-Plot"
  },
  "2": {
    "main_domain": "www.westendchristiancenter.com",
    "alternate_domains": ["www.christian-community-center.multiscreensite.com", "christian-community-center.multiscreensite.com"],
    "site_name": "fda88ec1",
    "status": "PUBLISHED",
    "last_publish_date": "2023-02-08T17:40:28",
    "last_checked": "2023-02-08",
    "first_published_date": "2022-12-07T21:04:10",
    "creation_date": "2022-12-05T16:55:54",
    "business_name": "Christian Community Center"
  },
  "3": {
    "main_domain": "www.affordableandrestorativehealth.com",
    "alternate_domains": ["affordable-and-restorative-health-winston-h-griner-md.multiscreensite.com"],
    "site_name": "1ac4e0c4",
    "status": "PUBLISHED",
    "last_publish_date": "2023-02-08T17:36:57",
    "last_checked": "2023-02-08",
    "first_published_date": "2023-01-27T16:10:09",
    "creation_date": "2023-01-19T15:58:33",
    "business_name": "Affordable & Restorative Health: Winston H. Griner, MD"
  },
  "4": {
    "main_domain": "www.twooaksbridalboutique.com",
    "alternate_domains": ["two-oaks-bridal-boutique.multiscreensite.com"],
    "site_name": "6edc14e3",
    "status": "PUBLISHED",
    "last_publish_date": "2023-02-08T17:36:03",
    "last_checked": "2023-02-08",
    "first_published_date": "2022-12-21T04:50:17",
    "creation_date": "2022-12-20T18:11:21",
    "business_name": "Two Oaks Bridal Boutique"
  }
} */


main = document.getElementById('main')
searchRow = document.getElementById('searchRow')
searchBar = document.getElementById('searchbar')
searchBar.focus()
searchBar.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    document.getElementById('srtd1submit').click()
  }
})
/* outsource = document.createElement('script')
outsource.src = 'https://raw.githack.com/dillonsimplebiz/dillonsimplebiz.github.io/main/duda_alts.js'
searchRow.appendChild(outsource) */
document.getElementById('srtd0back').addEventListener('click', fback)
document.getElementById('srtd1submit').addEventListener('click', search)



document.addEventListener('DOMContentLoaded', function() {
  searchBar = document.getElementById('searchbar')
  searchBar.focus()
  document.getElementById('lUpdated').innerHTML = 'Last Updated: '+datab[0].last_checked
})
/* function f(a, b) {
  longString.indexOf(a, b)
}
num = longString.indexOf('valley')
num2 = longString.indexOf('$',num+1)
num3 = longString.indexOf('$',num2+1)

console.log(longString.slice(num2+1,num3))

console.log(datab[4])
search_for = 'valley'
start = 0
arr = []
count = 0
while (count < 10) {
  count += 1
  foundat = longString.indexOf('valley', start)
  if (foundat == -1) {
    break;
  }
  indexpos0 = longString.indexOf('$', foundat + 1) + 1
  indexpos1 = longString.indexOf('$', indexpos0 + 1)
  arr.push(longString.slice(indexpos0, indexpos1))
  start = indexpos1
}
console.log(arr)

for (var i =0;i<arr.length;i++){
  newP = document.createElement('p')
  newP.innerHTML = datab[arr[i]]['main_domain']
  main.appendChild(newP)
}
newP = document.createElement('p')
newP.innerHTML = JSON.stringify(datab[arr[0]])

main.appendChild(newP)
 */


function showSite(databindex1) {
  console.log('databindex')
  console.log(databindex1.currentTarget.testParam)
  databindex = databindex1.currentTarget.testParam
  /* if (databindex = ''){
      
    } */
  page = 'Site'
  console.log(1)
  main = document.getElementById('main')
  main.innerHTML = ''
  md0 = document.createElement('p')
  md0.innerHTML = 'Main Domain:'
  md1 = document.createElement('a')
  console.log('rught')
  console.log(datab)
  /* console.log(databindex) */
  md1.innerHTML = datab[databindex].main_domain
  console.log('rut')
  md1.target = '_blank'
  md1.href = 'https://' + datab[databindex].main_domain
  main.appendChild(md0)
  main.appendChild(md1)
  console.log(2)
  alt = document.createElement('p')
  alt.innerHTML = 'Alternate Domains:'
  main.appendChild(alt)
  for (var i = 0; i < datab[databindex].alternate_domains.length; i++) {
    altX = document.createElement('a')
    altX.target = '_blank'
    altX.innerHTML = datab[databindex].alternate_domains[i]
    altX.href = 'https://' + datab[databindex].alternate_domains[i]
    main.appendChild(altX)
    main.appendChild(document.createElement('p'))
  }
  cre = document.createElement('p')
  console.log(datab[databindex.creation_date])
  try {
    cre.innerHTML = 'Creation Date : ' + String(datab[databindex].creation_date).replace(/T.*/g, "")
  } catch (error) {
    cre.innerHTML = 'Creation Date : No Data'
  }
  main.appendChild(cre)
  fpub = document.createElement('p')
  try {
    fpub.innerHTML = 'First Published Date : ' + datab[databindex].first_published_date.replace(/T.*/g, "")
  } catch (error) {
    fpub.innerHTML = 'First Published Date : No Data'
  }
  main.appendChild(fpub)
  lpub = document.createElement('p')
  try {
    lpub.innerHTML = 'Last Published Date : ' + datab[databindex].last_publish_date.replace(/T.*/g, "")
  } catch (error) {
    lpub.innerHTML = 'Last Published Date : No Data'
  }
  main.appendChild(lpub)
  if (lpub.innerHTML != 'Last Published Date : No Data') {
    pubwho = document.createElement('p')
    pubwho.innerHTML = 'Last Published By : ' + datab[databindex].last_published_by
    main.appendChild(pubwho)
  }
  domainwhen = document.createElement('p')
  domainwhen.innerHTML = 'Domain Last Changed : ' + datab[databindex].last_domain_changed
  main.appendChild(domainwhen)
  updatedon = document.createElement('p')
  updatedon.innerHTML = 'Info Last Updated : ' + datab[databindex].last_checked
  main.appendChild(updatedon)
  sn0 = document.createElement('p')
  sn0.innerHTML = 'Site ID: ' + datab[databindex].site_name
  main.appendChild(sn0)
  ps0 = document.createElement('p')
  ps0.innerHTML = 'Published Status: ' + datab[databindex].status
  if (datab[databindex].status == 'PUBLISHED') {
    ps0.style.color = '#10bf08'
  } else {
    ps0.style.color = '#ab0000'
  }
  main.appendChild(ps0)

  form = document.createElement('a')
  b0 = document.createElement('button')
  b0.type = 'submit'
  form.href = 'https://my.duda.co/home/site/' + datab[databindex].site_name
  b0.innerHTML = 'Edit Site'
  form.target = '_blank'
  form.appendChild(b0)
  form1 = document.createElement('a')
  b1 = document.createElement('button')
  b1.type = 'submit'
  form1.href = 'https://my.duda.co/home/dashboard/overview/' + datab[databindex].site_name
  b1.innerHTML = 'View Overview'
  form1.target = '_blank'
  form1.appendChild(b1)
  btab = document.createElement('table')
  btr = document.createElement('tr')
  btd0 = document.createElement('td')
  btd1 = document.createElement('td')
  btd0.appendChild(form)
  btd1.appendChild(form1)
  btr.appendChild(btd0)
  btr.appendChild(btd1)
  btab.appendChild(btr)
  main.appendChild(btab)

}

function fback() {
  document.getElementById('hiddent').innerHTML = document.getElementById('searchbar').value
  if (page == 'Site') {
    search()

  }
  if (page == 'Search') {
    main.innerHTML = ''
  }
}

function search() {
  console.log('searched')
  document.getElementById('hiddent').innerHTML = 'search'
  page = 'Search'
  search_for = document.getElementById('searchbar').value
  lastSearch = search_for
  main.innerHTML = ''

  if (search_for.length < 2) {
    main.innerHTML = 'Search must be longer than one character'
    return
  }
  console.log('af')
  start = 0
  arr = []
  count = 0
  while (count < 20) {
    count += 1
    foundat = longString.indexOf(search_for, start)
    if (foundat == -1) {
      break;
    }
    indexpos0 = longString.indexOf('$', foundat + 1) + 1
    indexpos1 = longString.indexOf('$', indexpos0 + 1)
    arr.push(longString.slice(indexpos0, indexpos1))
    start = indexpos1
  }
  main = document.getElementById('main')

  tab = document.createElement('table')

  for (var i = 0; i < arr.length; i++) {
    r0 = document.createElement('tr')
    td0 = document.createElement('td')
    td00 = document.createElement('p')

    td00.innerHTML = datab[arr[i]].status
    if (datab[arr[i]].status == 'PUBLISHED') {
      td00.style.color = '#10bf08'
    } else {
      td00.style.color = '#ab0000'
    }
    td0.appendChild(td00)
    td1 = document.createElement('td')
    newP = document.createElement('p')
    newP.innerHTML = datab[arr[i]].main_domain
    newP.style.textDecoration = 'underline'
    temp_len = String(arr[i])
    /* newP.onclick = 'showSite(' + String(arr[i]) + ')' */
    newP.addEventListener("click", showSite, false);
    newP.testParam = String(arr[i])
    /* newP.addEventListener("click", function() {
    
      document.getElementById('hiddent').innerHTML = temp_len
      showSite(temp_len)
    }); */
    td1.appendChild(newP)
    r0.appendChild(td0)
    r0.appendChild(td1)
    tab.appendChild(r0)
    /* main.appendChild(newP)
    newP = document.createElement('p')
    newP.innerHTML = JSON.stringify(datab[arr[0]]) */
  }
  if (arr.length == 0) {
    newP = document.createElement('p')
    newP.innerHTML = 'No results for "' + search_for + '"'
    main.appendChild(newP)
  } else {
    main.appendChild(tab)
  }
}
