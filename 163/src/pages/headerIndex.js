import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Banner from "../components/banner";
//头部一般按钮
function Nomarl(props) {
  const lis = (
    <li>
      <span>
        <NavLink exact to={props.list.path}>
          <em>{props.list.title}</em>
          <sub></sub>
        </NavLink>
      </span>
    </li>
  );
  return lis;
}
//头部会跳转页面的按钮
function Blank(props) {
  const lis = (
    <li>
      <span>
        <Link to={props.list.path} target="_blank">
          <em>{props.list.title}</em>
        </Link>
      </span>
    </li>
  );
  return lis;
}
//头部热门按钮
function Hot(props) {
  const lis = (
    <li>
      <span className="hot">
        <Link to={props.list.path}>
          <em>{props.list.title}</em>
          <sub></sub>
        </Link>
      </span>
    </li>
  );
  return lis;
}
//头部按钮
function TopListUl(props) {
  const lis = props.list.map((item) => {
    if (!item.blank) {
      return <Nomarl list={item} key={item.title.toString()} />;
    } else {
      if (item.hot) {
        return <Hot list={item} key={item.title.toString()} />;
      } else {
        return <Blank list={item} key={item.title.toString()} />;
      }
    }
  });
  return <ul className="header-top-navs-list">{lis}</ul>;
}
//头部按钮列表数据
function TopList() {
  const list = [
    { title: "发现音乐", path: "/" },
    { title: "我的音乐", path: "/my" },
    { title: "朋友", path: "/friend" },
    { title: "商城", path: "/store/product", blank: true },
    { title: "音乐人", path: "/st/musician", blank: true },
    { title: "下载客户端", path: "/download", hot: true },
  ];

  return <TopListUl list={list} />;
}
//头部整体
function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top-navs">
          <h1 className="header-top-navs-logo"> </h1>
          <TopList />
          <div className="search">
            <input placeholder="音乐/视频/电台/用户" />
          </div>
          <Link to="/#" className="CreatorCenter">
            创作者中心
          </Link>
          <div className="loginbox">
            <Link to="/#" className="loginbtn">
              登录
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

//头部下方红条内容
function Headersubnav(props) {
  return (
    <div className="header-subnav">
      <div className="header-subnav-navs">{props.children}</div>
    </div>
  );
}

//头部下方红条路由
function Headersubnavroute() {
  return (
    <Router basename="/#/discover">
      <Headersubnav>
        <ul>
          <li>
            <NavLink exact to="/">
              <em>推荐</em>
            </NavLink>
          </li>
          <li>
            <NavLink to="/toplist">
              <em>排行榜</em>
            </NavLink>
          </li>
          <li>
            <NavLink to="/playlist">
              <em>歌单</em>
            </NavLink>
          </li>
          <li>
            <NavLink to="/djradio">
              <em>主播电台</em>
            </NavLink>
          </li>
          <li>
            <NavLink to="/artist">
              <em>歌手</em>
            </NavLink>
          </li>
          <li>
            <NavLink to="/album">
              <em>新碟上架</em>
            </NavLink>
          </li>
        </ul>
      </Headersubnav>
      <Switch>
        <Route exact path="/" component={Banner} />

        <Route path="/toplist">
          <div>排行榜</div>
        </Route>
        <Route path="/playlist">
          <div>歌单</div>
        </Route>
        <Route path="/djradio">
          <div>主播电台</div>
        </Route>
        <Route path="/artist">
          <div>歌手</div>
        </Route>
        <Route path="/album">
          <div>专辑</div>
        </Route>
      </Switch>
    </Router>
  );
}

//头部主内容
function Main() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Headersubnavroute />
          </Route>
          <Route path="/my">
            <Headersubnav />
            <div>我的信息</div>
          </Route>
          <Route path="/#/discover/album">
            <Headersubnav />
            <div>新碟</div>
          </Route>
          <Route path="/friend">
            <Headersubnav />
            <div>朋友</div>
          </Route>
          <Route path="/download">
            <Headersubnav />
            <div>下载客户端</div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

function HeaderIndex() {
  return <Main />;
}

export default HeaderIndex;
