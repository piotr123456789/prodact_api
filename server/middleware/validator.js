const { check, validationResult } = require('express-validator/check');

module.exports.superValid = [
check('title').isLength({ min:1,max:100}).isAlpha().withMessage('wiecej niz jeden znak lub sprawdz czy nie urzyles znaków specjalnych'),
check('slug').isLength({ min:1,max:100}).isAlpha().withMessage('wiecej niz jeden znak lub sprawdz czy nie urzyles znaków specjalnych'),
check('titleTwo').isLength({ min:1,max:100}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('wiecej niz jeden znak lub sprawdz czy nie urzyles znaków specjalnych'),
check('message').isLength({ min:1,max:100}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('wiecej niz jeden znak lub sprawdz czy nie urzyles znaków specjalnych'),
check('messageTwo').isLength({ min:1,max:100}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('wiecej niz jeden znak lub sprawdz czy nie urzyles znaków specjalnych'),
check('card.*.title').isLength({min:1 ,max:100}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('Sprawdzi poprawność w zakladce karta'),
check('card.*.message').isLength({min:1 ,max:1000}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('Sprawdzi dlugosc i poprawnosc znaków'),
check('card.*.Imglink').isURL( { protocols: ['http','https','ftp'], require_tld: false, require_protocol: false, require_host: true, require_valid_protocol: true, allow_underscores: false, host_whitelist: false, host_blacklist: false, allow_trailing_dot: false, allow_protocol_relative_urls: false, disallow_auth: false }).withMessage('blad krytyczny prosze zkontaktować sie z administratorem'),
check('sectionTwo.*.title').isLength({min:1 ,max:100}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('Sprawdzi poprawność w zakladce karta'),
check('sectionTwo.*.message').isLength({min:1 ,max:1000}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('Sprawdzi dlugosc i poprawnosc znaków'),
check('sectionTwo.*.imgfutured').isURL( { protocols: ['http','https','ftp'], require_tld: false, require_protocol: false, require_host: true, require_valid_protocol: true, allow_underscores: false, host_whitelist: false, host_blacklist: false, allow_trailing_dot: false, allow_protocol_relative_urls: false, disallow_auth: false }).withMessage('blad krytyczny prosze zkontaktować sie z administratorem'),
check('termins.*.time').isLength({min:1 ,max:100}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('Sprawdzi poprawość skladni w zakladce terminy'),
check('termins.*.chooseDay.*').isLength({min:1 ,max:100}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('Sprawdzi poprawość skladni w zakladce terminy'),
check('place.*.title').isLength({min:1 ,max:100}).isAlpha().withMessage('Sprawdzi poprawność w zakladce karta'),
check('place.*.message').isLength({min:1 ,max:1000}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('Sprawdzi dlugosc i poprawnosc znaków'),
check('place.*.imgfutured').isURL( { protocols: ['http','https','ftp'], require_tld: false, require_protocol: false, require_host: true, require_valid_protocol: true, allow_underscores: false, host_whitelist: false, host_blacklist: false, allow_trailing_dot: false, allow_protocol_relative_urls: false, disallow_auth: false }).withMessage('blad krytyczny prosze zkontaktować sie z administratorem'),
check('livestyle.*.title').isLength({min:1 ,max:100}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('Sprawdzi poprawność w zakladce karta'),
check('livestyle.*.message').isLength({min:1 ,max:1000}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('Sprawdzi dlugosc i poprawnosc znaków'),
check('livestyle.*.imgfutured').isURL( { protocols: ['http','https','ftp'], require_tld: false, require_protocol: false, require_host: true, require_valid_protocol: true, allow_underscores: false, host_whitelist: false, host_blacklist: false, allow_trailing_dot: false, allow_protocol_relative_urls: false, disallow_auth: false }).withMessage('blad krytyczny prosze zkontaktować sie z administratorem'),
check('rooms.*.rodzaj').isLength({min:1 ,max:100}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('Sprawdzi poprawność w w polu Rodzaj pokoju'),
check('rooms.*.prise.*.dni').isLength({min:1 ,max:100}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('Sprawdzi poprawność w w polu cena.ilosc dni'),
check('rooms.*.prise.*.prise').isLength({min:1 ,max:100}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('Sprawdzi poprawność w w polu cena '),
check('rooms.*.rodzaj').isLength({min:1 ,max:100}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('Sprawdzi poprawność w w polu Rodzaj pokoju'),
check('section.title').isLength({min:1 ,max:100}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('skecja tytul'),
check('section.opiek').isLength({min:1 ,max:100}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('skecja tytul turnusu'),
check('section.opiek').isLength({min:1 ,max:100}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('skecja tytul turnusu'),
check('section.prowadzacy.*').isLength({min:1 ,max:100}).matches(/^[a-zA-Z0-9., ]+$/,"i").withMessage('skecja tytul turnusu'),
];

module.exports.validate = (re,res,next) => {

const error = validationResult(re);
if (!error.isEmpty()) {
    console.log('blad');
   return  res.send({valid : re.body , error : error.mapped() });
  }
  console.log(error.isEmpty());
  next();
};
