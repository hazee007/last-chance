import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import { persistor, store } from "./store/store";
import Router from "./routes";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;
