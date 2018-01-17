$(()=>{
$('#infoButton').click(()=>{
  $.ajax({
    type: 'GET',
    url: 'https://swapi.co/api/people'
    }).done((res)=>{
      let people=res.results;
      console.log(people);
      for(person of people){
        console.log(person.name)
      }
    })
  })
})