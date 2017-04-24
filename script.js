<<<<<<< HEAD
$(function () {
console.log('hi');
  $("#submit").click(function () {
    var location = $("#location").val();
    console.log(location);
    //Location finished
    var job = $("#job").val();

    var favorite = [];
    $.each($("input[name='job']:checked"), function () {
      favorite.push($(this).val());
    });
    console.log(favorite)
    $.ajax({

      url: 'https://api.indeed.com/ads/apisearch?publisher=2840626911053845&q=' + job + '&l=' + location + '&sort=&radius=&st=&jt=' + favorite + '&start=&limit=&fromage=180&filter=1&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2',
      success: function (data) {

        console.log(data);
      },
    });
  })
})
=======
$(function(){
  $.ajax({
    url: 'https://api.indeed.com/ads/apisearch?publisher=2840626911053845&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2',
    success: function(data) {
        
        console.log(data);
    },
  });

})

console.log('hi');
>>>>>>> ef593c9d7912ea7bdc1b40b2c823ad52e3b2c5a9
