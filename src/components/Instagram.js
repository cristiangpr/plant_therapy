import React, { Component } from 'react';


import Instafeed from "instafeed.js";
class Instagram extends Component {




  componentDidMount(){
    var feed = new Instafeed({
      accessToken: '14251104739.1677ed0.4a9be2bf71d74ec89c136dfd53a90456',
        get: 'user',
        clientId: 	'92bedffba0f8495c8220ddb88c6b5ccb',
         template:'<div class="col-lg-3  col-md-6   wow animated zoomIn "><a class="instagram-image" href="{{link}}" target="_blank"><img src="{{image}}"/><p>{{caption}}<p/></a></div>',
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
