$(()=>{

  let loaded = false //this will prevent from loading the info multiple times

$('#peopleButton').click(()=>{
  $('#tableHead').append(createHeadP())
  if(!loaded){
    loaded = true
  $.ajax({
    type: 'GET',
    url: 'https://swapi.co/api/people'
    }).done((res)=>{
      let people=res.results;
      for(p of people){
        $('#tableBody').append(createTableRowP(p))
      }
    })
   } else{
    alert ('the info has already been loaded')
   }
  })

  $('#shipButton').click(()=>{
    if(!loaded){
      loaded = true
    $('#tableHead').append(createHeadS())
    $.ajax({
      type: 'GET',
      url: 'https://swapi.co/api/starships'
      }).done((res)=>{
        let ship=res.results;
        for(s of ship){
          $('#tableBody').append(createTableRowS(s))
        }
      })
     } else{
      alert ('the info has already been loaded')
     }
    })

    function createTableRowP(person){
      let row = $(`<tr></tr>`)
      let name = $(`<td>${person.name}</td>`)
      let height = $(`<td>${person.height}</td>`)
      let birth = $(`<td>${person.birth_year}</td>`)
  

      row.append(name)
      row.append(height)
      row.append(birth)
      return row
    }      
    function createTableRowS(ships){
      let row = $(`<tr></tr>`)
      let sname = $(`<td>${ships.name}</td>`)
      let length = $(`<td>${ships.length}</td>`)
      let crew = $(`<td>${ships.crew}</td>`)
  
      row.append(sname)
      row.append(length)
      row.append(crew)
      return row
    }
    function createHeadS(){
        $('#tableHead').empty()
        let row = $(`<tr></tr>`)
        let sth1 = $(`<th>Name</th>`)
        let sth2 = $(`<th>Length</th>`)
        let sth3 = $(`<th>Crew</th>`)
  
        row.append(sth1)
        row.append(sth2)
        row.append(sth3)
        return row
      }   
      function createHeadP(){
        $('#tableHead').empty()
        let row = $(`<tr></tr>`)
        let pth1 = $(`<th>Name</th>`)
        let pth2 = $(`<th>Height</th>`)
        let pth3 = $(`<th>Birth Year</th>`)
  
        row.append(pth1)
        row.append(pth2)
        row.append(pth3)
        return row
      }
    $('#clearButton').click(()=>{
      $('#tableBody').empty()
      loaded = false
    })
})