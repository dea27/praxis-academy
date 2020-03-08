
   let raman = {
      name: "Raman"
   },
      mohan = {
      name: "Mohan"
   }; 
   
   let cache = new Map();

   function process ( obj )  { 

       

      cache.set( obj, (cache.has( obj )) ? cache.get( obj ) + 1 : 1);

      return cache.get( obj ) ;    
   }
   
   /* Now add key/value pair by calling the function cache */

   process( raman );   // 1, Map(1), cache : {{...} => 1}
   process( raman );  // 1, Map(1), cache : {{...} => 2}
   process( mohan );  //  2, Map(2), cache : {{...} => 2, {...} => 1};
   
   // raman has gone
   raman = null ;  
   
   cache.entries();  