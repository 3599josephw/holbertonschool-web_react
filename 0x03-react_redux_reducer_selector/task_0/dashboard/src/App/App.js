import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
import AppContext from './AppContext';


const AppCSS = StyleSheet.create({
  App: {
    margin: '50px',
  },
  AppBody: {
    fontSize: '18px',
    fontFamily: 'Arial',
  },
  AppFooter: {
    position: 'absolute',
    bottom: '0',
    borderTop: '3px #E0354B solid',
    width: '90%',
  },
})

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: () => this.logOut(),
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
      ]
    }
  }

  handleDisplayDrawer() {
    this.setState({displayDrawer: true});
  }

  handleHideDrawer() {
    this.setState({displayDrawer: false});
  }

  componentDidMount() {
    window.addEventListener('keydown', this.eventKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.eventKey);
  }

  eventKey = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      const {logOut} = this.props;
      logOut();
    }
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  };

  logOut() {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  };

  markNotificationAsRead(id) {
    let list = this.state.listNotifications
    this.setState({
      listNotifications: list.filter((notif) => notif.id !== id),
    });
  }

  render() {
    const listCourses = [
      {id: '1', name: 'ES6', credit: 60},
      {id: '2', name: 'Webpack', credit: 20},
      {id: '3', name: 'React', credit: 40},
    ];

    return (
      <AppContext.Provider value={this.state}>
        <>
          <Notifications
            listNotifications={this.state.listNotifications} handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer} displayDrawer={this.state.displayDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <div className={css(AppCSS.App)}>
            <Header />
            <div className={css(AppCSS.AppBody)}>
              {this.state.user.isLoggedIn ? (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={listCourses}/>
                </BodySectionWithMarginBottom>) :
                (<BodySectionWithMarginBottom title="Log in to continue">
                  <Login logIn={this.logIn} />
                </BodySectionWithMarginBottom>)}
                <BodySection title="News from the School">
                  <p>Annex under construction!</p>
                </BodySection>
            </div>
            <footer className={css(AppCSS.AppFooter)}>
              <Footer />
            </footer>
          </div>
        </>
      </AppContext.Provider>
    );
  }
}


export default App;
