var serverResponse;

var responseList = [];
var responseList = [];
var BDYList = [];
var FACList = [];
var MNTList = [];
var PNTList = [];
var STAList = [];
var TCFList = [];
var LeftMenuList = [];

function CallMethod(url, parameters, successCallback) {

    alert("CallMethod JS called with " + parameters);
    
                $.ajax({
                    type: 'POST',
                    url: url,
                    data: parameters,
                    contentType: "application/json; charset=utf-8",
                    async: false,
                    dataType: 'json',
                    success: successCallback,
                    error: function(XMLHttpRequest, textStatus,errorThrown) {
                       alert("Status: " + textStatus); alert("Error: " + errorThrown);
                }
            });
    }

function onSuccess(data,textStatus) {
    if(data == null) {
    	alert('no result');     
    } 
    else {
        
        //Have al the server response values in an Array, for testing purpose response value at index 0 is used. 

	//alert(JSON.stringify(data));
	//alert(data.HIERARCHYResponse[5]);
 	//alert(JSON.stringify(data));

	for (var i=0; i<6; i++) {
		LeftMenuList.push(data.HIERARCHYResponse[i]);
	}
	
       // serverResponse = data.HIERARCHYResponse[3];

	serverResponse = data.HIERARCHYResponse.length;
	//var jsonBody  = ‘HIERARCHYResponse : [‘;
	//responseList.push(jsonBody);
        var icode = "";

	for (var i=1; i<data.HIERARCHYResponse.length; i++) {
        
        icode = data.HIERARCHYResponse[i].ORDERNO;
        
        if((icode.indexOf('BDY')>= 0)){
            BDYList.push((data.HIERARCHYResponse[i]) );
        }
        if((icode.indexOf('FAC')>= 0)){
            FACList.push((data.HIERARCHYResponse[i]) );
        }
        if((icode.indexOf('MNT')>= 0)){
            MNTList.push((data.HIERARCHYResponse[i]) );
        }
        if((icode.indexOf('PNT')>= 0)){
            PNTList.push((data.HIERARCHYResponse[i]) );
        }
        if((icode.indexOf('STA')>= 0)){
            STAList.push((data.HIERARCHYResponse[i]) );
        }
        if((icode.indexOf('TCF')>= 0)){
            TCFList.push((data.HIERARCHYResponse[i]) );
        }
        
        
     //   if(((data.HIERARCHYResponse[i].ORDERNO).indexOf('BDY')>= 0)){
        
       // responseList.push((data.HIERARCHYResponse[i]) );
        

       // }
	
	
	}
        
        responseList.push(LeftMenuList);
        responseList.push(BDYList);
        responseList.push(FACList);
        responseList.push(MNTList);
        responseList.push(PNTList);
        responseList.push(STAList);
        responseList.push(TCFList);


//var itemCode = “” ;
//for (var i=0; i<data.HIERARCHYResponse.length; i++) {
//	itemCode = data.HIERARCHYResponse[i].ORDERNO;
//	if((.indexOf('BDY')>= 0)){
//
//	responseList.push((data.HIERARCHYResponse[i]) );
//
//
//	}

	//responseList.push(‘]’);

	 serverResponse = responseList;



        
//       var test = JSON.stringify(data);
//        alert(serverResponse);
//        alert(test);
//      for (var i=0; i<test.HIERARCHYResponse.length; i++) {
//                 
//               responseList.push(  'STARTDATE : ' + data.HIERARCHYResponse[i].STARTDATE);
//                 
//               responseList.push(  'ORDERTYPE : ' + data.HIERARCHYResponse[i].ORDERTYPE);
//                
//               responseList.push(  'ORDERNO : ' + data.HIERARCHYResponse[i].ORDERNO);
//                 
//               responseList.push(  'EQUIPMENT : ' + data.HIERARCHYResponse[i].EQUIPMENT);
//                 
//               responseList.push(  'EQUIPDESC : ' + data.HIERARCHYResponse[i].EQUIPDESC);
//                
//             }
//              
          	//serverResponse = data;
        
        return serverResponse;
    }
}
