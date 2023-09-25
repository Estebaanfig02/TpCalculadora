function dividir ( ... núm ) {
    return núm.reduce( ( acum , num )  =>  acum  +=  num )
 }
 
 módulo.exportaciones  =  {
    dividir
 }