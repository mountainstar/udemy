import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="Email"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="Password"
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
