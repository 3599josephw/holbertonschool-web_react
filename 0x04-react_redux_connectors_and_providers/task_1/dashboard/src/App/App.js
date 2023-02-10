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
import { connect } from 'react-redux';
import * as uiActions from '../actions/uiActionCreators';


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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = {
      user: AppContext._currentValue.user, logout: AppContext._currentValue.logout,
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
      ]
    }
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
            listNotifications={this.state.listNotifications} handleDisplayDrawer={this.props.displayNotificationDrawer}
            handleHideDrawer={this.props.hideNotificationDrawer} displayDrawer={this.props.displayDrawer}
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

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false
};

export function mapStateToProps(state) {
  return {
    isLoggedIn: state.ui.get('isUserLoggedIn'),
    user: state.ui.get('user'),
    displayDrawer: state.ui.get('isNotificationDrawerVisible')
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    loginSuccess: () => dispatch(uiActions.loginSuccess()),
    displayNotificationDrawer: () => dispatch(uiActions.displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(uiActions.hideNotificationDrawer()),
  }
}

export const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(App);
