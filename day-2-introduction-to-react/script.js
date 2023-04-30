const rootElement = document.querySelector('#root');

    const welcomingMessage = 'Hi, this is header!';
    const headerTitle = '30 Days of React';
    const headerSubtitle = 'this is the subtitle';

    
    //header style
    const headerStyle = {
      backgroundColor: '#61DBFB',
      fontFamily: 'Helvetica Neue',
      padding: 25,
      lineHeight: 1.5,
    }
    
    //header element
    const header = (
      <header style={headerStyle}>
        <div className="header-wrapper">
          <h1>Hi, this is the header</h1>
          <h2>this is the subtitle for these header</h2>
          <h3>30 days of react</h3>
        </div>
      </header>
    );

    //main style
    const mainStyle = {
      backgroundColor: '#AFD3E2'
    }

    //main element
    const main = (
      <main style={mainStyle}>
        <p>prerequisite to dive in react:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </main>
    );

    //footer element
    const footerStyle = {
      backgroundColor: '#F6F1F1'
    }

    //footer element
    const footer = (
      <footer style={footerStyle}>
        <p>all credits belongs to asabeneh yetayeh</p>
      </footer>
    );

    const app = (
      <div className='app'>
        {header}
        {main}
        {footer}
      </div>
    );
    
    ReactDOM.render(app, rootElement);