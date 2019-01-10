var item = require('../connect/connect'); 
/// do obslugi obrazkow //
var fs = require('fs');
const express = require('express');
const formidableMiddleware = require('express-formidable');

 var app = express();
app.use(formidableMiddleware());
/// do obslugi obrazkow //
       // wyodrebienie tokena //
/// validator sector //
///

 
      
    //--- end  ---//
        module.exports.get = async  (re, res) => {
      
        var post = await item.find({ slug: re.params.slug });
         res.json({ post });
    
        };

        module.exports.post = async (re, res ,next) => { 
          
       const check = await item.findOne({ slug: re.body.slug })

         if(check){

          res.json({ isstSlug : true })
         }else{

          res.json({ isstSlug : false })

         if(re.body){
          const{title,slug,file,ImgFront,termins,rooms,slider,titleTwo,message,messageTwo,place,sectionTwo,section,card,lifestyle } = re.body

          const tree = new item({
            imgfront : ImgFront,
            slug: slug,
            title : title,
            termins: termins,
            rooms : rooms,
            titleTwo : titleTwo,
            slider : slider,
            message : message,
            messageTwo : messageTwo,
            card : card,
            section : section,
            sectionTwo :sectionTwo,
            place : place,
            lifestyle : lifestyle   
          }); 
      
          tree.save(function(err){
            console.log(err);
          });

        }
      }
        
        };
        module.exports.put = async  (re, res)=> {
       
          var contition  = { slug : re.body.slug};
          item.update(contition,re.body).then(doc => console.log(doc));

         // console.log(re);
       console.log('diała');
      
        };

        module.exports.delete = async (re, res)=>{
          item.findByIdAndRemove(re.params.slug, re.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
          });
        };
        module.exports.apload = async (re, res)=>{
 
          //console.log(re.files);

          const tab = ['front','card0','card1','card2','card3','place0','place1','place2','life0','life2','life3','section0','section2'];
          if(re.files.front){
            var file = re.files.front
             filename = file.name
            file.mv(`./public/images/${filename}`,function(err){
             // console.log(err);
            });
          }
          if(re.files.slider0){
            var file = re.files.slider0
             filename = file.name
            file.mv(`./public/images/${filename}`,function(err){
             // console.log(err);
            });
          }
          if(re.files.slider1){
            var file = re.files.slider1
             filename = file.name
            file.mv(`./public/images/${filename}`,function(err){
              //console.log(err);
            });
          }
          if(re.files.slider2){
            var file = re.files.slider2
             filename = file.name
            file.mv(`./public/images/${filename}`,function(err){
             // console.log(err);
            });
          }
          if(re.files.slider3){
            var file = re.files.slider3
             filename = file.name
            file.mv(`./public/images/${filename}`,function(err){
              //console.log(err);
            });
          }

          if(re.files.card0){
            var file = re.files.card0
            filename = file.name
           file.mv(`./public/images/${filename}`,function(err){
            // console.log(err);
           });
            
          }
          if(re.files.card1){
            var file = re.files.card1
            filename = file.name
           file.mv(`./public/images/${filename}`,function(err){
             //console.log(err);
           });
            
          }
          if(re.files.card2){
            var file = re.files.card2
            filename = file.name
           file.mv(`./public/images/${filename}`,function(err){
            // console.log(err);
           });
            
          }
          if(re.files.place0){
            var file = re.files.place0
            filename = file.name
           file.mv(`./public/images/${filename}`,function(err){
            // console.log(err);
           });
            
          }
          if(re.files.place1){
            var file = re.files.place1
            filename = file.name
           file.mv(`./public/images/${filename}`,function(err){
            // console.log(err);
           });
            
          }
          if(re.files.place2){
            var file = re.files.place2
            filename = file.name
           file.mv(`./public/images/${filename}`,function(err){
           //  console.log(err);
           });
            
          }
          if(re.files.life0){
            var file = re.files.life0
            filename = file.name
           file.mv(`./public/images/${filename}`,function(err){
             //console.log(err);
           });
            
          }
          if(re.files.life1){
            var file = re.files.life1
            filename = file.name
           file.mv(`./public/images/${filename}`,function(err){
            // console.log(err);
           });
            
          }
          if(re.files.life2){
            var file = re.files.life2
            filename = file.name
           file.mv(`./public/images/${filename}`,function(err){
            // console.log(err);
           });
            
          }
          if(re.files.section0){
            var file = re.files.section0
            filename = file.name
           file.mv(`./public/images/${filename}`,function(err){
            // console.log(err);
           });
            
          }
          if(re.files.section1){
            var file = re.files.section1
            filename = file.name
           file.mv(`./public/images/${filename}`,function(err){
            // console.log(err);
           });
            
          }
          if(re.files.section2){
            var file = re.files.section2
            filename = file.name
           file.mv(`./public/images/${filename}`,function(err){
            // console.log(err);
           });
            
           }
        };

        module.exports.dowoland = async (re, res)=>{
           console.log('lol');
           console.log(re.url);
           const super_url =(re.url).substring(8);
           console.log(super_url);
          const info = await  item.find({ slug: super_url});
          const imgfront = (info[0].imgfront).substr(27);
             console.log(imgfront);
           let Imagecard = [];
           for ( let i = 0 ; i <= info[0].card.length-1 ;i++){
             
            Imagecard.push((info[0].card[i].Imglink).substr(27));
            
           }
           console.log(Imagecard);   
          let Imageplace = [];
          for ( let i = 0 ; i <= info[0].place.length-1 ;i++){
             
            Imageplace.push((info[0].place[i].imgfutured).substr(27));
           } 

           let imgestyle = [];

           for ( let i = 0 ; i <= info[0].lifestyle.length-1 ;i++){
             
            imgestyle.push((info[0].lifestyle[i].imgfutured).substr(27));
           } 

           console.log('//////');
           console.log(imgestyle);

           let sectionTwo = [];

           for ( let i = 0 ; i <= info[0].sectionTwo.length-1 ;i++){
             
            sectionTwo.push((info[0].sectionTwo[i].imgfutured).substr(27));
           } 
           console.log('//////');
           console.log(sectionTwo);

           let slider = [];

           for ( let i = 0 ; i <= info[0].slider.length-1 ;i++){
             
            slider.push((info[0].slider[i]).substr(27));
           } 
           console.log('///slider///');
           console.log(slider);

           res.sendfile('public/images/'+slider[0]);

          //  res.send({ Imageslider : slider ,
          //             Imageplace: Imageplace ,
          //             sectionTwo :sectionTwo ,
          //             imgestyle: imgestyle ,
          //             Imagecard : Imagecard,
          //             front : imgfront 
          //           });
           
        };

        module.exports.getfull = async (re, res)=>{
          
          const check = await item.find();

          console.log(check);

        }  