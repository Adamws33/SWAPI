$(()=>{

  let loaded = false //this will prevent from loading the info multiple times

$('#infoButton').click(()=>{
  if(!loaded){
  $.ajax({
    type: 'GET',
    url: 'https://swapi.co/api/people'
    }).done((res)=>{
      let people=res.results;
      for(p of people){
        $('#tableBody').append(createTableRow(p))
      }
      loaded = !loaded //this will prevent from loading the info multiple times
    })
  } else{
    alert ('the info has already been loaded')
  }
  })

  function createTableRow(person){
    let row = $(`<tr></tr>`)
    let name = $(`<td>${person.name}</td>`)
    let height = $(`<td>${person.height}</td>`)
    let birth = $(`<td>${person.birth_year}</td>`)

    row.append(name)
    row.append(height)
    row.append(birth)
    return row
  }

})