import React from 'react';
import { Link } from 'react-router-dom';
import { joinPageComponentsSwitcher, policyAgreements } from '../../util';
import AdditionalInfoTable from './components/AdditionalInfoTable/AdditionalInfoTable';
import AgreePolicyTable from './components/AgreePolicyTable/AgreePolicyTable';
import Button from './components/Button/Button';
import './SignUp.scss';

class SignUp extends React.Component {
  state = {
    usertype: 'personalUser',
    allAgreeBox: ['', false],
    useInfoAgree: ['', false],
    personalInfoAgree: ['', false],
    emailAgree: ['', false],
    SNSAgree: ['', false],
  };

  openModal = e => {
    const {
      target: {
        classList: { value },
      },
    } = e;
    const { state } = this;
    this.setState(() => ({ [value]: [!state[value][0], state[value][1]] }));
  };

  checkBoxController = e => {
    const {
      target: { id },
    } = e;

    const { state } = this;
    if (id === 'allAgreeBox') {
      const temp = {};
      for (let key in policyAgreements) {
        const item = policyAgreements[key];
        temp[item] = [state[item][0], !state[item][1]];
      }
      this.setState(() => ({ ...temp }));
      return;
    }
    this.setState(() => ({ [id]: [state[id][0], !state[id][1]] }));
  };

  onClick = e => {
    const {
      target: { value, name },
    } = e;

    const { state } = this;

    if (name === 'userType') {
      this.setState(() => ({ ...state, [name]: value }));
      return;
    }

    if (name === 'userBusiness') {
      this.setState(() => ({ [name]: value }));
      return;
    }

    this.setState(() => ({ [name]: value }));
  };

  onSubmit = e => {
    e.preventDefault();
  };

  onChange = e => {
    const {
      target: { value, name },
    } = e;
    this.setState(() => ({ [name]: value }));
  };

  render() {
    const {
      onChange,
      onSubmit,
      onClick,
      openModal,
      checkBoxController,
      state: {
        usertype,
        userBusiness,
        allAgreeBox,
        useInfoAgree,
        personalInfoAgree,
        emailAgree,
        SNSAgree,
      },
    } = this;
    return (
      <div className="SignUp">
        <form onSubmit={onSubmit} className="signUpWrapper">
          <h1 className="signUpTitle">회원가입</h1>
          {joinPageComponentsSwitcher[usertype]({
            usertype,
            userBusiness,
            onClick,
            onChange,
          })}
          <AdditionalInfoTable onChange={onChange} />
          <AgreePolicyTable
            allAgreeBox={allAgreeBox}
            useInfoAgree={useInfoAgree}
            personalInfoAgree={personalInfoAgree}
            emailAgree={emailAgree}
            SNSAgree={SNSAgree}
            openModal={openModal}
            checkBoxController={checkBoxController}
            onChange={onChange}
          />
          <div className="signUpButtons">
            <Link to={'main'} className={'signUpCancel'}>
              취소
            </Link>
            <Button className={'signUpStart'} message={'회원가입'} />
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
