import React from 'react';
import PasswordInput from './password_input';
import * as c from '../index';
import { changePassword } from './actions';
import * as l from '../../lock/index';

export default class PasswordPane extends React.Component {

  handleChange(e) {
    const { lock, onChange } = this.props;
    return onChange ? onChange(e) : changePassword(l.id(lock), e.target.value);
  }

  render() {
    const { lock, placeholder, tabIndex } = this.props;

    return (
      <PasswordInput
        value={c.password(lock)}
        isValid={!c.visiblyInvalidPassword(lock)}
        onChange={::this.handleChange}
        placeholder={placeholder}
        tabIndex={l.tabIndex(lock, tabIndex)}
        disabled={l.submitting(lock)}
      />
    );
  }

}

PasswordPane.propTypes = {
  lock: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func,
  placeholder: React.PropTypes.string.isRequired,
  tabIndex: React.PropTypes.number.isRequired
};

PasswordPane.defaultProps = {
  tabIndex: 1
};
