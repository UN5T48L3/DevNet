import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">
                <i>Dev</i>eloper <i>Net</i>work
                </h1>
                <p className="lead">
                  {' '}
                  Üye ol, profilini oluştur ve diğer geliştiriciler ile birlikte
                  harika uygulamalar yaratmaya başla!
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-3">
                  Ücretsiz Üye Ol
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Giriş Yap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
