import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { LanguageProvider } from './containers/Language';

import Home from './components/home/home.components';
import { About } from './components/about-me/about-me.component';
import Contact from './components/contact/contact.components';
import { NoMatch } from './components/no-match/no-match.componets';
import { Layout } from './components/layout/layout.componetns';
import NavigationBar from './components/navigation-bar/navigation-bar.components';
import { Jumbotron } from './components/jumbotron/jumbotron.components';
import { Footer } from './components/footer/footer.components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        img: 'laptop-background.jpg',
        pathname: window.location.pathname
      }
  }
  
  handleClick = () => {
    this.props.history.push("/");
  };
  
  render() {
    return (
      <div className="App">
      <LanguageProvider>
        <NavigationBar {...this.props} handleClick={this.handleClick}/>
        {this.props.history.location.pathname === '/' ? <Jumbotron img={this.state.img} pathname={this.state.pathname}/> : ''}
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          <Footer />
        </LanguageProvider>
      </div>
    );
  }
}

export default withRouter(App);