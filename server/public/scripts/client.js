console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', saveKoala); 
  
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    method: 'GET',
    url: '/koalas'
}).then(function (response) {
    const listOfKoalas = response;
    $('#viewKoalas').empty();
    for (let koala of listOfKoalas) {
      let transferHTML;
      if(koala.transfer == 'Y'){
        transferHTML = `${koala.transfer}`;
      }else if(koala.transfer == 'N'){
        transferHTML = `${koala.transfer} <button class="ready-koala" 
                        data-koalaid="${koala.id}">Prepare</button>`
      }
      
        // Append each artist to the table
        $('#songTableBody').append(`<tr>
                                        <td>${koala.name}</td>
                                        <td>${koala.age}</td>
                                        <td>${koala.gender}</td>
                                        <td>${transferHTML}</td>
                                        <td>${koala.notes}</td>
                                        <td>
                                            <button class="delete-koala" 
                                                    data-koalaid="${koala.id}">Delete</button>
                                        </td>
                                      </tr>`);
    }
});
  
} // end getKoalas

function saveKoala(){
  // ajax call to server to get koalas

 
}

function deleteKoala(){
  console.log($(this).data('koalaid'));
  const koalaId = $(this).data('koalaid');
  $.ajax({
    method: 'DELETE',
    url: `/koalas / ${koalaId}`
  }).then(function(response){
    getKoalas();
  }).catch(function(error){
    alert('Delete error');
    console.log(error);
  })

}

function updateKoala() {
  const artistId = $(this).data('artistid');
  $.ajax({
    method: 'PUT',
    url: `/koalas/${artistId}`
  }).then(function (response) {
    getArtistData();
  }).catch(function (error) {
    console.log('this is error', error);
  });

}
