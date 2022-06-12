// $.getJSON("../assets/js/buku.json", function(data){

//     $.each(data.buku, function(i, data){
//         $('#list-buku').append('');
//     });
    

// });

$.getJSON("../assets/js/buku.json", function(data){
    
    $.each(data.buku, function(i, data){
        $('#list-buku').append('<div class="col-lg-3 col-md-4 col-6"><div class="card" style="width: 18rem;"><img src="'+ data.img +'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ data.judul +'</h5><p class="card-text">'+ data.categorie +'</p><a href="#" class="btn btn-primary">'+ data.harga +'</a></div></div></div>');
    });

});