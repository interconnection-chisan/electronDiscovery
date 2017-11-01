const si = require('systeminformation');


si.cpu(function(data) {
	console.log('CPU-Information:');
	console.log(data);
});

si.diskLayout(function(data) {
	console.log('SSD');
	console.log(data.type);
});


// var process = require('child_process');
// process.exec('ifconfig',function (err,stdout,stderr) {
//     if (err) {
//         console.log("\n"+stderr);
//     } else {
//         console.log(stdout);
//     }
// });


//https://www.npmjs.com/package/wmic
var wmic = require('wmic');
wmic.get_value('computersystem', 'name', null, function(err, value) {
    console.log(value) // Your Hostname
  })

  wmic.get_values('logicaldisk', 'name, volumename', null, function(err, values) {
    console.dir(values) // An array of disks
  })

