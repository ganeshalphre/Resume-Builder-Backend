import uuid4 from "uuid4";
import PaytmChecksum from "../Utils/PaytmChecksum.js";
import dotenv from "dotenv";
import formidable from "formidable";
import https from 'https';

export const paytm = async(req, res) => {
    // dotenv.config();
    // console.log("merchant-key", process.env.PAYTM_MERCHANT_KEY);
    let params = {}
    const {mobile, email} = req.body;
    params["MID"] = process.env.PAYTM_MID;
    params["WEBSITE"] = process.env.PAYTM_WEBSITE;
    params["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID;
    params["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID;
    params["ORDER_ID"] = uuid4();
    params["CUST_ID"] = "1234";
    params["TXN_AMOUNT"] = '20';
    params["CALLBACK_URL"] = 'http://localhost:3001/api/callback';
    params["EMAIL"] = email;
    params["MOBILE_NO"] = '7777777777';

    let paytmChecksum = PaytmChecksum.generateSignature(params, process.env.PAYTM_MERCHANT_KEY);

    paytmChecksum.then(function(checksum) {
        // console.log("generateSignature Returns" + checksum);
        let paytmParams = {
            ...params,
            "CHECKSUMHASH": checksum
        }
        res.json(paytmParams)
    }).catch(function(error) {
        console.log(error);
    })
}

export const paytmCallback = async(req, res) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, file) => {
        let paytmChecksum = fields.CHECKSUMHASH;
        delete fields.CHECKSUMHASH;
        
        var isVerifySignature = PaytmChecksum.verifySignature(fields, process.env.PAYTM_MERCHANT_KEY, paytmChecksum);
        if (isVerifySignature) {
            console.log("Checksum Matched");
            let paytmParams = {};
            paytmParams.body = {
                "mid" : fields.MID,
                "orderId" : fields.ORDERID,
            };
            PaytmChecksum.generateSignature(JSON.stringify(paytmParams), process.env.PAYTM_MERCHANT_KEY).then(function(checksum){
                // Hided By Me
                // paytmParams.head = {
                //     "signature"	: checksum
                // };
                paytmParams["CHECKSUMHASH"] = checksum;
                let post_data = JSON.stringify(paytmParams);
                let options = {

                    /* for Staging */
                    hostname: 'securegw-stage.paytm.in',

                    /* for Production */
                    // hostname: 'securegw.paytm.in',

                    port: 443,
                    path: '/v3/order/status',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': post_data.length
                    }
                };

                // Set up the request
                let response = "";
                let post_req = https.request(options, function(post_res) {
                    post_res.on('data', function (chunk) {
                        response += chunk;
                    });

                    post_res.on('end', function(){
                        console.log('Response: ', response);
                        res.json(response)
                    });
                });

                // post the data
                post_req.write(post_data);
                post_req.end();
            });

        } else {
            console.log("Checksum Mismatched");
        }
    })
    // console.log("after callback")
}