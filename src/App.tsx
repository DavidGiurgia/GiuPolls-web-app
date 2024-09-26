import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import LoginForm from "./_auth/forms/LoginForm";
import SignupForm from "./_auth/forms/SignupForm";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import { Create } from "./_root/pages";

const App = () => {
  return (
    <Flex height="100vh">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/log-in" element={<LoginForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Home />} />
          <Route path="/polls" element={<Home />} />
          <Route path="/quizzes" element={<Home />} />
          <Route path="/quotes" element={<Home />} />
        </Route>

        <Route path="/create" element={<Create />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </Flex>
  );
};

export default App;
