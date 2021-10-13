$('document').ready(function() {
    $('#inputsearch').keyup(function() {

        $.ajax({
            url: 'http://www.omdbapi.com/?i=tt3896198&apikey=2062d3ab',
            method: 'get',
            dataType: 'json',
            data: {
                's': $(this).val(),
            },
            success: function (data) {
                $('#content').empty();
                if (data.Response == 'True') {
                    const arrSearch = data.Search
                    arrSearch.forEach(e => {
                        $('#content').append(`<div class="card mb-3 mr-3" style="max-width: 364px; background-color: #181818;" >
                        <div class="row no-gutters">
                          <div class="col-md-4">
                            <img src="${e.Poster}" alt="..." style='width: 8rem'>
                          </div>
                          <div class="col-md-8">
                            <div class="card-body"  >
                            <h5 class="card-title" style="color: #ffffff">${e.Title}</h5>
                            <p class="card-text" style="color: #616161">Type: ${e.Type}</p>
                            <p class="card-text" style="color: #616161">Year: ${e.Year}</p>
                            </div>
                          </div>
                        </div>
                      </div>`);
                     });
                          
                } else {
                    
                    $('#content').append(`<h4 class='text-light'> file not found</h4>`);
                }

            }
        })
    })
})