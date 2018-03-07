// module.exports = function(robot) {
//   let trigger = /(?:eta)(?: to)? (.*) (?: from)? (.*)? (?:by) (.*)/i;

//   robot.respond(trigger, function(res){
    // let origins = res.match[1];
    // origins = origins.split(' ').join('+');
    // let destination = res.match[2];
    // destination = destination.split(' ').join('+');
    // let mode = res.match[3];
//     if (mode === 'car'){
//       mode= 'driving'
//     }else if (mode === 'bike'){
//       mode = 'biking'
//     }else if (mode === 'walk'){
//       mode = 'walking'
//     };
//     let Url = makeURL(origins,destination,mode,key);
//     console.log(Url);
//     return robot.http(Url)
//         .header('Accept', 'application/json')
//         .get() (function (err,res, body){
//           let data
//           try { 
//             data = JSON.parse(body)
//             console.log(data)}
//           catch(err)
//           {res.send("Ran into an error parsing JSON :(")}
//           return console.log(data)
//           let time = timeToDestination(data)
//           return res.reply(time)
//           });
//         });
      

// function makeURL(origins, destination, mode, key){
//   let url = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins='+ origins + '&destinations=' + destination+ '&mode='+mode+'&language=fr-FR&key=' + key
//   return url
//   }
  
//   function timeToDestination(json_obj) {
//     if ( json_obj.rows[0].elements[0].status !=='OK') {
//       return('error');
//     } else {
//       var origin = response.originAddresses[0];
//       var destination = response.destinationAddresses[0];
//       if (json_obj.rows[0].elements[0].status === "ZERO_RESULTS") {
//         return("There are no roads between " 
//                           + origin + " and " + destination);
//       } else {
//         var duration = response.rows[0].elements[0].duration;
//         var duration_text = duration.text;
//         return ("It will take "+ duration_text+" to get from " +origin+ " to "+ destination);
//       }
//     }
//   }
// }

module.exports = function(robot) {
  pantry =['apple','chips', 'crackers', 'popcorn', 'cereal','chocolate','bananas']
  robot.respond(/bought a (.*) for the pantry/i, function(msg){
    let newFood = msg.match[1]
    pantry.push()
    return msg.send('added a '+newFood +' to the pantry')
  }),
  robot.respond(/get me a snack/i, function(msg){
    let food = pantry[Math.floor(Math.random() * pantry.length)]
    let foodIndex = pantry.indexOf(food)
    if (foodIndex > -1){
      array.splice(index, 1)
      return msg.send('Here is a'+ food)
    }else{
      return msg.send('There is nothing in the pantry! Go Shopping')
    }
    
  }),
  robot.respond(/what is in the pantry/i, function(msg){
    return msg.send('You have: ' + pantry.toString())
  }),
  robot.respond(/I ate a (.*)/i, function(msg){
    let foodEaten = msg.match[1]
    let foodEatenIndex = pantry.indexOf(foodEaten)
    if (foodEatenIndex > -1){
      array.splice(index, 1)
    }
    return msg.send('removing '+ foodEaten+ ' from the pantry')
  })
  robot.hear(/food/i,function(msg){
    let food = pantry[Math.floor(Math.random() * pantry.length)]
    let foodIndex = pantry.indexOf(food)
    if (foodIndex > -1){
      array.splice(index, 1)
      return msg.send('Are you hungry? you should eat a '+ food)
    }else{
      return msg.send('By the way, There is nothing in the pantry! Go Shopping')
    }
  })
}