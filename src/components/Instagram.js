import React, { Component } from 'react';


import Instafeed from "instafeed.js";
class Instagram extends Component {




  componentDidMount(){
    var feed = new Instafeed({
      accessToken: process.env.REACT_APP_INSTA_TOKEN,
        get: 'user',
        clientId: 	process.env.REACT_APP_INSTA_CLIENT,
         template:'<div class="col-lg-3  col-md-6   wow animated zoomIn "><a class="instagram-image" href="{{link}}" target="_blank"><img src="{{image}}"/> <div className="likes" id="likes">&hearts; {{likes}}</div></a></div>',
        limit: 4,

        resolution: 'low_resolution', // thumbnail, low_resolution, standard_resolution
        sortBy: 'most-recent', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
        tagName: null,
        userId: 14251104739,
  });
  feed.run();
  }

  render(){
    return (
<>

    <section className="blog-area section-gap" id="blog">
     <div className="container">
     <div className="row">
             <div className="col-lg-12">
               <div className="section-header">
                 <h3>INSTAGRAM</h3>

               </div>
             </div>
           </div>
      <div className="row" id="instafeed">

      </div>
      </div>
    </section>
    </>
  );
  };
};
export default Instagram;
