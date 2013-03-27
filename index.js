/*The following options are available:

log: *Bunyan logger or boolean, will default to false
root: *Project root folder will default to process.cwd()
folder: *The certs folder name default to 'certs'
size: *The size used when creating keys, default 4096
subj: *The subj used when creating certificate requests
Subj default:

{
  C:'EE',
  ST:'Harjumaa',
  L:'Tallinn',
  O:'Example',
  OU:'Unit',
  emailAddress:'admin@email.address'
}
*/
var ssl = require('ssl-keygen'); 

exports.createcertreq = function(nameofnode, cb){
	var opts = { "size" : 2048 }
	var keygen = ssl.createKeyGen(opts);
	keygen.createKey(nameofnode, true, function(){
		keygen.createSignRequest(nameofnode, function(){
			cb(nameofnode);
		});
	});
}

exports.signrequest = function(filelocation, cb){
	
}

/*Function for creating a RSA key

@param {String} name name of key
@param {Boolean} [force=false] whether to force the creation
@param {Function} callback*/
