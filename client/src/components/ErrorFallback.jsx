import { Component } from 'react';

class BoundaryError extends Component {
  static getDerivedStateFromError() {
    // Memperbarui state sehingga render berikutnya akan menunjukkan UI pengganti
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // Anda bisa merender UI pengganti apa saja
      return <h1>Terjadi kesalahan.</h1>;
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default BoundaryError;
