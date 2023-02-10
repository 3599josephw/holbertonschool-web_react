import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import {ReduxFooter} from '../Footer/Footer';
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
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = {
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
      ]
    }
    this.logoutListener = this.eventKey.bind(this);
    this.login = this.login.bind(this);
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
      this.props.logout();
    }
  }

  login(email, password) {
    if (this.props.loginRequest) {
      this.props.loginRequest({email, password}).then((response) => {
        response.payload ? this.context.store.dispatch(response.payload) : null;
      })
    };
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
      <AppContext.Provider value={{user: this.props.user, logout: this.props.logout}}>
        <>
          <Notifications
            listNotifications={this.state.listNotifications} handleDisplayDrawer={this.props.displayNotificationDrawer}
            handleHideDrawer={this.props.hideNotificationDrawer} displayDrawer={this.props.displayDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <div className={css(AppCSS.App)}>
            <Header />
            <div className={css(AppCSS.AppBody)}>
              {this.props.user.isLoggedIn ? (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={listCourses}/>
                </BodySectionWithMarginBottom>) :
                (<BodySectionWithMarginBottom title="Log in to continue">
                  <Login loginRequest={this.props.loginRequest} />
                </BodySectionWithMarginBottom>)}
                <BodySection title="News from the School">
                  <p>Annex under construction!</p>
                </BodySection>
            </div>
            <footer className={css(AppCSS.AppFooter)}>
              <ReduxFooter />
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
    loginRequest: (args) => dispatch(uiActions.loginRequest(args)),
    displayNotificationDrawer: () => dispatch(uiActions.displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(uiActions.hideNotificationDrawer()),
    logout: () => dispatch(uiActions.logout()),
  }
}

export const ReduxApp = connect(mapStateToProps, mapDispatchToProps, null, { context: AppContext })(App);
