
const mongoose = require('mongoose');

// setings //
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// schemtat postu
const Post = new Schema({
    imgfront: String,
    slug: String,
    title: String,
    termins: [ {
                time : String,
                chooseDay : [ String]
                }
              ],
    rooms: [
        {
          rodzaj: String,
          prise : [ { dni : String , prise : String}],
          count : Number
        }

    ],
      slider :[String],
      titleTwo : String,
      message : String,
      messageTwo : String,
      card: [{ Imglink:String , title:String , message : String}],
      section : { title: String , prowadzacy : [String] , opiek : String },
      sectionTwo : [{ imgfutured : String , title : String , data : String , message: String }],
      place : [ { imgfutured : String , title : String , data : String , message: String }],
      lifestyle : [{ imgfutured : String , title : String , data : String , message: String }]  
  });


let tree = mongoose.model('item', Post );
//var newitem = new tree();
module.exports = tree;

const item = new tree({
    slug: 'lol14',
    title : "lol14",
    termins: 
        [
            {
            time : "27.04 - 07.05.2019 r",
            chooseDay : ["7dniowy"]
            },
                {
                time : "20.05 - 30.05.2019 r.",
                chooseDay : ["7dniowy","10dniowy"]
                },
            {
             time : "01.06 - 21.06.2019 r.",
             chooseDay : ["7dniowy","10Dniowy","14Dniowy"]
             },   
         ] ,
    rooms : [
        {
       rodzaj : "pokój 2 os. na wyłączność dla 1 osoby",
       prise : [ 
                    {
                    dni : "7dniowy",
                    prise : "1250zł",
                    },
                    {
                        dni : "10dniowy",
                        prise : "1590zł",           
                    },
                    {
                        dni : "14dniowy",
                        prise : "1990zł",
                    },    
                ], 
         count: 8
        },
        {
            rodzaj : "pokój 3 lub 4 os. bez balkonu dla 2 osób",
            prise : [ 
                         {
                         dni : "7dniowy",
                         prise : "900zł",
                         },
                         {
                             dni : "10dniowy",
                             prise : "1.290zł",           
                         },
                         {
                             dni : "14dniowy",
                             prise : "1590zł",
                         },    
                     ], 
              count: 8
             },
             {
                rodzaj : "pokój 3 lub 4 os. z balkonem dla 2 osób",
                prise : [ 
                             {
                             dni : "7dniowy",
                             prise : "950zł",
                             },
                             {
                                 dni : "10dniowy",
                                 prise : "1.390zł",           
                             },
                             {
                                 dni : "14dniowy",
                                 prise : "1690zł",
                             },    
                        ], 
                 count: 8
                },
            ],
            titleTwo : 'ośrodek w spychowie',
            slider : ['../assets/obrazke.jpg','../assets/obrazke.jpg','../assets/obrazke.jpg','../assets/obrazke.jpg','../assets/obrazke.jpg' ],
            message : 'lubie placki z ziemniakami',
            messageTwo : 'kiedy sie zbierze wszyskich do jednej kupy a potem zobaczymy co dalej bedzie dostepne jesli nie zapomne to zobacze co zrobic dalej i wtedy sie okarze hahah wtf',
            card : [{ Imglink:'../assets/obrazke.jpg' , title: "to jest strefa wypoczynku ", message : 'siema to ja piotr z wany wielkim' },
                      {  Imglink:'../assets/obrazke.jpg' , title: "to jest strefa wypoczynku ", message : 'siema to ja piotr z wany wielkim'},
                       { Imglink:'../assets/obrazke.jpg' , title: "to jest strefa wypoczynku ", message : 'siema to ja piotr z wany wielkim'}],
            section : { title: 'to ja piotr' , prowadzacy : ['adam', 'piotr','michal'] , opiek : 'kasyna' },
            sectionTwo : [{ imgfutured : '../assets/obrazke.jpg' , title : "to jest strefa wypoczynku " , data : 'string', message:'to ja piotr bohater'  },
                  { imgfutured : '../assets/obrazke.jpg' , title : "to jest strefa wypoczynku " , data : 'string' },
                  { imgfutured : '../assets/obrazke.jpg' , title : "to jest strefa wypoczynku " , data : 'string', message:'to ja piotr bohater'  }],
                  place : [{ imgfutured : '../assets/obrazke.jpg' , title : "to jest strefa wypoczynku " , data : 'string', message:'to ja piotr bohater'  } ],
                  lifestyle : [{ imgfutured : '../assets/obrazke.jpg' , title : "to jest strefa wypoczynku " , data : 'string', message:'to ja piotr bohater'  }]   
              }
           );

//   item.save(function(err){


// console.log(`wystopil blad ${err}`);

//   });






  
 

//C:\Users\Piotr Szramowski\Desktop\cmsapi\db
//C:\Program Files\MongoDB\Server\4.0\bin