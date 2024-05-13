import MainLayout from "./components/layout/MainLayout";
import Protected from "./components/layout/Protected";

const App = () => {
  return (
    <Protected>
      <MainLayout />
    </Protected>
  );
};

export default App;
