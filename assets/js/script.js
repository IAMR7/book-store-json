$.getJSON("../assets/js/buku.json", function(data){
    // console.log(data);

    $.each(data.buku, function(i, data){
        $('#list-buku').append('<div class="col-lg-3 col-md-4 col-6 mb-5"><div class="card"><img src="' + data.img + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title fw-bolder">'+ data.judul +'</h5><p class="card-text">'+ data.description +'</p><a href="#" class="btn text-white btn-buy w-100"> <i class="bi bi-cart2"></i> ' + data.harga + '<a></div></div></div>');
    });
    

});