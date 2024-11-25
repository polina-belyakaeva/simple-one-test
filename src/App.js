import './assets/styles/App.module.scss';
import styles from './assets/styles/App.module.scss';
import HeaderTop from './components/Header';
import Navigation from './components/Navigation';
import FormHeader from './components/FormHeader';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className={styles.app}>
      <HeaderTop />
      <div className={styles.app__content}>
        <Navigation />
        <div className={styles.app__content__body}>
          <FormHeader />
          <TaskForm />
        </div>
      </div>
    </div>
  );
}

export default App;
