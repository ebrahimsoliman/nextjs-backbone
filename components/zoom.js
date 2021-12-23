import React, {useEffect} from 'react';
import {ZoomMtg}          from "@zoomus/websdk";
import ZoomMtgEmbedded    from "@zoomus/websdk/embedded";

function Zoom() {
    let sign;
    useEffect(() => {
                  if (typeof window !== "undefined") {
                      sign = ZoomMtg.generateSignature({
                                                           apiKey       : "f0r8F-zARRyMbNTJGUxNkg",
                                                           apiSecret    : "0OwZyoL6ICzaZ3WCKFNlHyArewsYmY17WqBl",
                                                           meetingNumber: 94569876993,
                                                           role         : 1
                                                       })
                      ZoomMtg.join(
                          {
                              signature    : sign,
                              meetingNumber: '94569876993',
                              userName     : "Ebrahim",
                              apiKey       : 'f0r8F-zARRyMbNTJGUxNkg',
                              userEmail    : "ebrahimahmed97090@gmail.com",
                              passWord     : '0000',
                              success      : () => {

                              },
                              error        : () => {

                              }
                          }
                      )

                      const client          = ZoomMtgEmbedded.createClient();
                      let meetingSDKElement = document.getElementById('meetingSDKElement');

                      client.init({
                                      debug      : false,
                                      zoomAppRoot: meetingSDKElement,
                                      language   : 'en-US',
                                      customize  : {
                                          meetingInfo: [
                                              'topic',
                                              'host',
                                              'mn',
                                              'pwd',
                                              'telPwd',
                                              'invite',
                                              'participant',
                                              'dc',
                                              'enctype'
                                          ],
                                          toolbar    : {
                                              buttons: [
                                                  {
                                                      text     : 'Custom Button',
                                                      className: 'CustomButton',
                                                      onClick  : () => {
                                                         /* console.log('custom button');*/
                                                      }
                                                  }
                                              ]
                                          }
                                      }
                                  });
                      client.join({
                                      signature    : sign,
                                      meetingNumber: 94569876993,
                                      userName     : "Ebrahim",
                                      apiKey       : 'f0r8F-zARRyMbNTJGUxNkg',
                                      password     : '0000',

                                  })
                  }
              },
              [])
    return (
        <div>
            <div id={'meetingSDKElement'}/>
        </div>
    );
}

export default Zoom;
