import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            //const Layout = route.layout === null ? Fragment :  DefaultLayout;
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            } else {
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {/* <Route path="/" element={<Home/>}></Route>
                    <Route path="/following" element={<Following/>}></Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
