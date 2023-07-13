import { ResultsEntity } from "../../interfaces/Response.interface";

export const Content = ({ results }  : { results: ResultsEntity[] } ) => {

   return results.map( (element) =>{

        return (

              <div className="col-md-6 mt-3 "  key={ element.id }>
                  <div className="card h-100">
                      <div className="card-body">
                          <h5 className="card-title"> <a href={element.ids?.openalex } target="_blank"  style={{ textDecoration: 'none' }}  > {element.display_name}  </a>  </h5>
                          <ul>
                            { element.counts_by_year?.map( works => <li key={ works?.year} > year: { works?.year } -  Count works: { works?.works_count  } </li> ) }
                          </ul>
                          <p className="mt-2" >  
                          {
                            element.x_concepts?.map(  concepts => {
                                return (
                                <span className="badge rounded-pill text-bg-light" 
                                    style={{margin: '5px', 
                                            padding:'5px',
                                        }} 
                                    key={concepts.id} >  
                                    
                                    <a href={ concepts.id } target="_blank" style={{ textDecoration: 'none'  }} > 
                                        { concepts.display_name }  
                                    </a> 
                                </span>);
                            })
                          }
                          </p>

                      </div>
                      <div className="card-footer ">
                          <small className="text-body-secondary"> Created at:  { element.created_date } last update: { element.updated_date } </small>
                      </div>
                      </div>
              </div>);
    });

}