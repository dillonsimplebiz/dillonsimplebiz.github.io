main = document.getElementById('main')
searchRow = document.getElementById('searchRow')
searchBar = document.getElementById('searchbar')
searchBar.focus()
searchBar.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    document.getElementById('srtd1submit').click()
  }
})

document.getElementById('srtd0back').addEventListener('click', fback)
document.getElementById('srtd1submit').addEventListener('click', search)



document.addEventListener('DOMContentLoaded', function() {
  searchBar = document.getElementById('searchbar')
  searchBar.focus()
  document.getElementById('lUpdated').innerHTML = 'Last Updated: ' + datab[0].last_checked
})


function showSite(databindex1) {

  databindex = databindex1.currentTarget.testParam

  page = 'Site'
  main = document.getElementById('main')
  main.innerHTML = ''
  md0 = document.createElement('p')
  md0.innerHTML = 'Main Domain:'
  md1 = document.createElement('a')
  md1.innerHTML = datab[databindex].main_domain
  md1.target = '_blank'
  md1.href = 'https://' + datab[databindex].main_domain
  main.appendChild(md0)
  main.appendChild(md1)
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
  //   updatedon = document.createElement('p')
  //   updatedon.innerHTML = 'Info Last Updated : ' + datab[databindex].last_checked
  //   main.appendChild(updatedon)
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

  document.getElementById('hiddent').innerHTML = 'search'
  page = 'Search'
  search_for = document.getElementById('searchbar').value
  search_for = search_for.replace(/((https:\/\/?)|(http:\/\/)?)/,'').replace(/\/.*/,'')
  lastSearch = search_for
  main.innerHTML = ''

  if (search_for.length < 2) {
    main.innerHTML = 'Search must be longer than one character'
    return
  }
  start = 0
  arr = []
  count = 0
  while (count < 40) {
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

    newP.addEventListener("click", showSite, false);
    newP.testParam = String(arr[i])

    td1.appendChild(newP)
    r0.appendChild(td0)
    r0.appendChild(td1)
    tab.appendChild(r0)

  }
  if (arr.length == 0) {
    newP = document.createElement('p')
    newP.innerHTML = 'No results for "' + search_for + '"'
    main.appendChild(newP)
  } else {
    main.appendChild(tab)
  }
}
