import { Container, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import RefreshToken from "../components/RefreshToken";

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <RefreshToken />
      <div className=" py-5">
        <Container className="d-flex justify-content-center">
          <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
            <h1 className="text-center mb-4">Detective Den</h1>
            <h2>Hello, {userInfo.name}</h2>
            <p className="text-center mb-4">Selamat Datang di Toko Merch Detective conan</p>
            <div className="d-flex">
              {userInfo ? (
                <Button
                  variant="primary"
                  href="/profile"
                  className="me-3">
                  Profile
                </Button>
              ) : (
                <>
                  <Button
                    variant="primary"
                    href="/login"
                    className="me-3">
                    Sign In
                  </Button>
                  <Button
                    variant="secondary"
                    href="/register">
                    Register
                  </Button>
                </>
              )}
            </div>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Hero;
