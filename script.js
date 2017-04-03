$(function(){
  $.ajax({
    url: 'https://api.indeed.com/ads/apisearch?publisher=2840626911053845&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2',
    success: function(data) {
        
        console.log(data);
    },
  });

})

console.log('hi');