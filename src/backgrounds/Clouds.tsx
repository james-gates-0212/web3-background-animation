import cloudImage from './cloud.png';
import moonImage from './moon.png';
import './clouds.css';

export default function Clouds() {
  return (
    <div className="clouds">
      <img
        className="moon-gelatine"
        src={moonImage}
        style={{
          position: 'fixed',
          top: 50,
          right: '20%',
          width: 250,
          height: 250,
          animationDuration: '10s',
        }}
      />
      <img
        className="cloud-gelatine"
        src={cloudImage}
        style={{
          position: 'fixed',
          top: 50,
          left: 150,
          width: 200,
          height: 200,
          animationDuration: '5s',
        }}
      />
      <img
        className="cloud-gelatine"
        src={cloudImage}
        style={{
          position: 'fixed',
          top: 180,
          right: '19%',
          width: 150,
          height: 150,
          animationDuration: '3s',
        }}
      />
      <img
        className="cloud-gelatine"
        src={cloudImage}
        style={{
          position: 'fixed',
          top: 200,
          left: '50%',
          width: 300,
          height: 300,
          opacity: 0.8,
          animationDuration: '6s',
        }}
      />
    </div>
  );
}
