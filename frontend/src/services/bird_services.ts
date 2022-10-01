//Access to data with post method
  let baseUrl : String =   'http://localhost:8080';

  export const postInformation = async (urlPage:String,body:any) => {

    const url = `${baseUrl}/${urlPage}`;
    const resp = await fetch(url,
        {
            method:'POST',
            body:JSON.stringify(body),
            headers:{'Content-Type': 'application/json',}
        });
    
    return resp;
        
    }

    
    export const getInformation = async (urlPage:string) => {
    
      const url = `${baseUrl}/${urlPage}`;
      const resp = await fetch(
        url,
        {
          method: 'GET',
          headers: {'Content-Type': 'application/json',}
        });
      return resp;
    }

    export const putInformation = async (urlPage:String,body:any) => {

      const url = `${baseUrl}/${urlPage}`;
      const resp = await fetch(url,
          {
              method:'PUT',
              body:JSON.stringify(body),
              headers:{'Content-Type': 'application/json',}
          });
      
      return resp;
          
      }

      export const deleteInformation = async (urlPage:String) => {

        const url = `${baseUrl}/${urlPage}`;
        const resp = await fetch(url,
            {
                method:'DELETE',
                headers:{'Content-Type': 'application/json',}
            });
        
        return resp;
            
        }
    
