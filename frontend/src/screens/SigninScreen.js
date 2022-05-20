import Button from 'react-bootstrap/esm/Button';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
//import { Helmet } from 'react-helmet-async';

export default function SigninScreen() {
  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectUrl ? redirectUrl : '/';
  return (
    <Container className="small-container">
      {/* <Helmet>
        <title>Sign In</title>
      </Helmet> */}
      <h1 className="my-3">Sign In</h1>
      <Form>
        <Form.Group className="mb-3" controlID="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlID="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New customer?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
}
