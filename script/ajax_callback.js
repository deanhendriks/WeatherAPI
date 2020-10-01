function makeAjaxCall(url, methodType)
{
    let promiseObj = new Promise(function(resolve, reject)
    {
        console.log(url);
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open(methodType, url, true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function()
        {
            if(xmlhttp.readyState === 4)
            {
                if(xmlhttp.status === 200)
                {
                    console.log("xlmhttp done successfully");
                    let serverRespomse = xmlhttp.responseText;
                    console.log(serverRespomse);
                    resolve(serverRespomse);
                }
                else
                {
                    reject(xmlhttp.status)
                    console.log("xmlhttp failed");
                }
                }
                else
                {
                    console.log('request sent succesfully');
                }
        }

            console.log('request was sent succesfully!');
        });
        return promiseObj;
    }

        function errorHandler(statusCode)
        {
            console.log("failed with status", status);
        }