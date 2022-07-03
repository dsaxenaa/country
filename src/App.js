import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

// import filterFactory, {textFilter} from 'react-bootstrap-table2-filter'
import {useEffect, useState} from 'react'

import BootstrapTable from 'react-bootstrap-table-next';
import React   from 'react';
import paginationFactory from 'react-bootstrap-table2-paginator';

// import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';



// require('react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css');


function App() {

  const columns = [
    {
     dataField:'name',
     text: 'Country',
     sort: true,
     
    },
    {
      dataField:'capital',
      text: 'Capital',
      sort: true,
      // filter: textFilter
     },
     {
      dataField:'currency',
      text: 'Currency',
      sort: true,
      
     },
     {
      dataField:'language',
      text: 'Language',
      sort: true,
     
     },
     {
      dataField:'religion',
      text: 'Religion',
      sort: true,
    
     },
  ]

  const pagination = paginationFactory({
    page:1,
    sizePerPage:10,
    lastPageText:'>>',
    firstPageText:'<<',
    nextPageText:'>',
    prePageText:'<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function(page, sizePerPage){
      console.log('page',page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function(page, sizePerPage){
      console.log('page',page);
      console.log('sizePerPage', sizePerPage);
    }
    });



  
  const [dataSource, setdataSource] = useState([])

  useEffect(() => {
    fetch('data/country.json')
   .then(response=>response.json())
   .then(data=>(setdataSource(data)))
   .catch(err=>(console.log(err)))
 
  }, [])
  

 
  return (
    <div className="App">
      <header className="App-header">
      <BootstrapTable bootstrap4 keyField='name' columns={columns} data={dataSource} pagination={pagination}  />
      </header>
    </div>
  );
}

export default App;
