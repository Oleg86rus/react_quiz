import React from 'react';
import Layout from './hoc/layout/layout';
import Quiz from './containers/quiz/quiz'
import { Route, Switch } from 'react-router-dom'
import Auth from './containers/auth/auth'
import QuizCreator from './containers/quizCreator/quizCreator'
import QuizList from './containers/quizList/quizList'

function App() {
  return (
      <Layout>
        <Switch>
          <Route path='/auth' component={Auth}/>
          <Route path='/quiz-creator' component={QuizCreator}/>
          <Route path='/quiz/:id' component={Quiz}/>
          <Route path='/' component={QuizList}/>
        </Switch>
      </Layout>
  );
}

export default App;
