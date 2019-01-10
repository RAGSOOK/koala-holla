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
  }).then((function(response)=>{
    getKoalas();
  }).catch(function(error){
    alert('Delete error');
    console.log(error);
  })

}


