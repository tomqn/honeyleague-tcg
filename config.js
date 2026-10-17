/* Cole aqui a configuração do SEU projeto Firebase
   (Console do Firebase › Configurações do projeto › Seus apps › App da Web › "Configuração do SDK").
   Enquanto estes campos tiverem "COLE_AQUI", o site funciona só no navegador de quem abre (sem nuvem). */
var cfg = {
  apiKey: "COLE_AQUI",
  authDomain: "COLE_AQUI.firebaseapp.com",
  projectId: "COLE_AQUI",
  storageBucket: "COLE_AQUI.appspot.com",
  messagingSenderId: "COLE_AQUI",
  appId: "COLE_AQUI"
};
if (cfg.apiKey.indexOf("COLE_AQUI") < 0) window.FIREBASE_CONFIG = cfg;
