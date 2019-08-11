import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import { login } from 'store/auth/actions';

const EMAIL = 'sasha.sh2000@gmail.com';
const PASSWORD = '9i4BG1bVj7';

const withAuthentication = (WrappedComponent) => {
	class Component extends PureComponent {
		componentDidMount() {
			this.props.login(EMAIL, PASSWORD);
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	}

	return connect(null, { login })(Component);
};

export default withAuthentication;
