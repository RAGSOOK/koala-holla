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
  $('#viewKoalas').on('click', '.delete-koala', function(){
    const koalaId = $(this).data('koalaid');
    sweetDelete(koalaId);
  });
  $('#viewKoalas').on('click', '.ready-koala', updateKoala);
  //$('#viewKoalas').on('click', '.update-name', updateKoalaName);
  
  $('#viewKoalas').on('click', '.color-koala', swapColor)
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
      if(koala.ready_to_transfer == true){
        transferHTML = `${koala.ready_to_transfer} <button class="color-koala" 
                        data-koalaid="${koala.id}">Color</button>`;
      }else if(koala.ready_to_transfer == false){
        transferHTML = `${koala.ready_to_transfer} <button class="ready-koala" 
                        data-koalaid="${koala.id}">Prepare</button>
                       <button class"update-name" 
                        data-koalaid="${koala.id}">Change Name</button>
                        `;
      }
        // Append each artist to the table
        $('#viewKoalas').append(`<tr>
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
  console.log('In function sendKoalaToServer');

  const koalaToSend = {name: $('#nameIn').val(), 
                       age: $('#ageIn').val(),
                       gender: $('#genderIn').val(),
                       readyToTransfer: $('#readyForTransferIn').val(),
                       notes: $('#notesIn').val()
                      };
  console.log(koalaToSend);
  $.ajax({
      method: 'POST',
      url: '/koalas',
      data: koalaToSend
  }).then(function(response) {
      console.log(response);
      getKoalas();
      $('#nameIn').val('');
      $('#ageIn').val('');
      $('#genderIn').val('');
      $('#readyForTransferIn').val('');
      $('#notesIn').val('');
  }).catch(function(error) {
    console.log(`Error in /koalas POST ${error}`);
  });
}

function deleteKoala(koalaId){

  $.ajax({
    method: 'DELETE',
    url: `/koalas/${koalaId}`
  }).then(function(response){
    getKoalas();
  }).catch(function(error){
    alert('Delete error');
    console.log(error);
  })

}

function updateKoala() {
  const koalaId = $(this).data('koalaid');
  $.ajax({
    method: 'PUT',
    url: `/koalas/${koalaId}`
  }).then(function (response) {
    getKoalas();
  }).catch(function (error) {
    console.log('this is error', error);
  });

}

// function updateKoalaName(){
//   console.log('this is update name');
//   // const koalaId = $(this).data('koalaid');
//   // $.ajax({
//   //   method: 'PUT',
//   //   url: `/koalas/name${koalaId}`
//   // }).then(function (response) {
//   //   getKoalas();
//   // }).catch(function (error) {
//   //   console.log('this is error', error);
//   // });

// }

function swapColor() {
  console.log(this)
  $(this).parent().parent().toggleClass('yellowDiv');
};

function sweetDelete(deleteId){
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this koala!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      deleteKoala(deleteId);
      swal("The koala has been permanently removed!", {
        icon: "success",
      });
    } else {
      swal("Delete cancelled!");
    }
  });
}
