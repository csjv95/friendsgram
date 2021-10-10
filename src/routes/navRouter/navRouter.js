import React from "react";
import { Route, Switch } from "react-router";
import ContainerEdit from "../../containers/ContainerEdit";
import ContainerHome from "../../containers/ContainerHome";
import ContainerDirect from "../../containers/ContainerDirect";
import ContainerSuggest from "../../containers/ContainerSuggest";
import ContainerMyProfile from "../../containers/ContainerMyProfile";
import Login from "../../componet/Login/Login";
import FacebookLogin from "../../componet/FacebookLogin";
import SignUp from "../../componet/SignUp/SignUp";
import { useSelector } from "react-redux";
import LoadingPage from "../../Global/Loading/LoadingPage";
import ContainerClickedPost from "../../containers/post/ContainerClickedPost";
import { useLocation } from "react-router-dom";

const NavRouter = () => {
  const isLogin = useSelector((state) => state.loginState.isLogin);
  // const postId = useSelector((state) => state.clickPost.clickPostId);
  const location = useLocation().pathname;
  const postId = location.slice(6, location.length);

  return isLogin ? (
    <Switch>
      <Route exact path="/" component={ContainerHome} />
      <Route path={`/post/${postId}`}>
        <ContainerClickedPost postId={postId} />
      </Route>
      <Route path="/direct" component={ContainerDirect} />
      <Route path="/suggest" component={ContainerSuggest} />
      <Route path="/edit" component={ContainerEdit} />
      <Route path="/:username" component={ContainerMyProfile} />
      <Route render={() => <LoadingPage />} />
    </Switch>
  ) : (
    <Switch>
      <Route path="/login" component={Login} />)
      <Route path="/signup" component={SignUp} />
      <Route path="/facebook" component={FacebookLogin} />
      <Route render={() => <LoadingPage />} />
    </Switch>
  );
};

export default NavRouter;
