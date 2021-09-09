import classes from './App.module.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import useAuthValue from './context/auth-context';

function App() {
  const [{ user }] = useAuthValue()
  return (
    <div className={classes.app}>
      {user ? (
        <>
          <Header />
          <div className={classes.app__body}>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
