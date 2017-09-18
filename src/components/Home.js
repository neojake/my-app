import React, {Component} from 'react'
import { Container, Button, Checkbox, Form, Header } from 'semantic-ui-react'
export default class Home extends Component {
    render() {
        return (
            <div>                
                <Container>
                    <Header as='h1'>Login</Header>
                    <Form>
                        <Form.Field>
                            <label>User Id</label>
                            <input placeholder='First Name'/>
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type='password' placeholder='Last Name'/>
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label='I agree to the Terms and Conditions'/>
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}
