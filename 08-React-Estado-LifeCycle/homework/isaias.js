<div className="App">
     <Route 
     path = '/'
     render = {() => <Nav onSearch={onSearch}/>} />

     <Route path exact='/'
     render = {() => (
     <Cards cities={cities} onClose={onClose}/> )}
     />

     <Route 
     path = '/About'
     component = {About} />

     <Route
     path='/ciudad/:ciudadId'
     exact
     render={({match}) => (
       <Ciudad city={ onFilter(match.params.ciudadId)} />)} />

    </div>