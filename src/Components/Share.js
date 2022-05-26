import React from 'react'
import axios from 'axios'



const options = {
  method: 'POST',
  url: 'https://smsapi-com3.p.rapidapi.com/sms.do',
  params: {access_token: 'cipdgkbx4dRxtZpDOnGiUKU6EwYHzo5RmIgTox5y'},
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Host': 'smsapi-com3.p.rapidapi.com',
    'X-RapidAPI-Key': '0236f7b171msh5ce342e1586634dp189298jsnd208ade2cb06'
  },
  data: '{"to":"","message":"","from":"","normalize":"","group":"","encoding":"","flash":"","test":"","details":"","date":"","date_validate":"","time_restriction":"follow","allow_duplicates":"","idx":"","check_idx":"","max_parts":"","fast":"","notify_url":"","format":"json"}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});



//-or- <a href="sms:(countrycode)(number)"> Text </a>



export default options