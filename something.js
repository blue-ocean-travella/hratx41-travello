let getDetails = async(array)=>{



    let promises = [];
    // for (let i = 0; i <= data.length; i++) {
    //     promises.push(apicall(data[i]));
    // }

    // Promise.all(promises).then(() => {
    //     // all done here
    // }).catch(err => {
    //     // error here
    // });

   for(let i = 0; i< 20;i++){

       promises.push(Axios.get("/location/details",{
           params:{
               placeId: array[i].place_id 
           }
       }) 
           .then(data => {
               console.log(data.data.result);
               let photoData = data.data.result.photos;
               let operatingData = data.data.result.opening_hours.weekday_text;
               let openNowData = data.data.result.opening_hours.open_now;
               let priceData = data.data.result.price_level;
               let typeData = data.data.result.types;
               let website = data.data.result.website;
               let phoneNumber = data.data.result.formatted_phone_number;

               //console.log("does this exits?", photoData);
               let photos = [];
               photoData.map(x => {
                   photos.push(
                       `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photoreference=${
                       x.photo_reference
                       }&key=${apiKey}`
                   );
               });
               array.photos = photos;
               array.hoursOfOperation = operatingData;
               array.openOrNot = openNowData;
               array.priceLevel = priceData;
               array.type = typeData;
               array.websiteUrl = website;
               array.phoneNumber = phoneNumber;
           }))
   }

    Promise.all(promises)
    

    
}