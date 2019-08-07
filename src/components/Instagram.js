import React, { Component } from 'react';


import Instafeed from "instafeed.js";
class Instagram extends Component {




  componentDidMount(){
    var feed = new Instafeed({
      accessToken: '1913298339.92bedff.14e523580fd54980a28e7d719706ca0c',
        get: 'user',
        clientId: 	'92bedffba0f8495c8220ddb88c6b5ccb',
         template:'<div className="col-lg-4 col-md-6">'+
         '<div className="thumb">'+
         '<a href="{{link}}" target="blank"><img className="img-fluid" id="insta" src="{{image}}"  />' +
         '</div>'+

         '<div className="insta-caption>"'+
         '<p>{{caption}}</p>'+

         '</div>'+
         '</div>'+
        ' </a>',
        limit: 3,

        resolution: 'low_resolution', // thumbnail, low_resolution, standard_resolution
        sortBy: 'most-recent', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
        tagName: null,
        userId: 1913298339,
  });
  feed.run();
  }

  render(){
    return (
<>

    <section className="blog-area section-gap" id="blog">
     <div className="container">
     <div className="row justify-content-center">
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
