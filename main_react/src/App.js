import React from 'react';

export default function Framework(props) {

  const { content, loading } = props;

  function goto(title, href) {
    window.history.pushState({}, title, href);
  }

  return (
    <>
      <header>
        <nav>
          <ol>
            <li><span onClick={() => goto('vuecli', '/vuecli')}>vue-cli</span></li>
            <li><span onClick={() => goto('creatreactapp', '/creatreactapp')}>creat-react-app</span></li>
            <li><span onClick={() => goto('ejectreact', '/ejectreact')}>eject-react</span></li>
          </ol>
        </nav>
      </header>
      {loading ? <div>loading...</div> : null}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>

  );
}
